import React from "react";
import "./Blogs.css";
import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination/Pagination"
import { paginate } from "../Components/Pagination/usePagination"
import { BlogSlide } from "./Component/BlogSlide";
const query = `{
  pageCollection {
    items {
      title
      image {
        url
      }
      information,
      date
    }
  }
}
`;
function Blog() {
  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = page => {
    setCurrentPage(page);
  }

  const getPageData = () => {

    const paginationData = paginate(page, currentPage, pageSize);
    return { totalCount: page.length, data: paginationData }
  }

  useEffect(() => {
    window
      .fetch(process.env.REACT_APP_CONTENFULSPACE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.pageCollection.items);

      });
  }, []);
  console.log(page);
  if (!page) {
    return "Loading...";
  }
  const { totalCount, data } = getPageData();
  return (
    <>
      <div className={"bodyMarginTop"}>
        <div className={"modelContent"}>
          <div className="text-center mainTitle">
            Blog Posts from Professor and Team
          </div>
          <div className={"slides"}>
            {data?.map((pages, index) => (
              <BlogSlide data={pages} id={index} />
            ))}
          </div>
        </div>
      </div>
      <div className={"paginationContainer"}>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange} />
      </div>
    </>
  );
}

export default Blog;
