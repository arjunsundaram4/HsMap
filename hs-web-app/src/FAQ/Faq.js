import React, { Component } from "react";
import "./Faq.css";
import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination/Pagination"
import {paginate} from "../Components/Pagination/usePagination"
const query = `{
  faqCollection {
    items {
      questions
      answers
    }
  }
}

`;
function Faq() {
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
        setPage(data.faqCollection.items);
      });
  }, []);
  console.log(page);
  if (!page) {
    return "Loading...";
  }
  const { totalCount, data } = getPageData();
  return (
    <>
    <div className={"bodyMarginTop bodyMarginBottom"}>
      <div className={"modelContent"}>
        <div className="text-center mainTitle">
          Common FAQs from Professor and Team
        </div>
        <div className={"slides"}>
          {data.map((faq) => (
            <div>
            <header className="App-header">
              <h4 className={"title"}>{faq.questions}</h4>
              <div>
                <p>{faq.answers}</p>
              </div>
              <br></br>
            </header>
            </div>
          ))}
        </div>
      </div>
    </div>
            <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange} />
            </>
  );
}

export default Faq;
