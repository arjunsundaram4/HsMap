import React, { Component } from "react";
import "./Blogs.css";
import { useState, useEffect } from "react";
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
  return (
    <div className={"bodyMarginTop bodyMarginBottom"}>
      <div className={"modelContent"}>
        <div className="text-center mainTitle">
          Blog Posts from Professor and Team
        </div>
        <div className={"slides"}>
          {page.map((pages) => (
            <div>
            <header className="App-header">
              <h4 className={"title"}>{pages.title}</h4>
              <div>
                {pages.image ? (
                  <img
                    width="300px"
                    height="150px"
                    src={pages.image?.url}
                    align="left"
                    style={{ marginRight: "100px" }}
                    className="img-align"
                    alt="logo"
                  />
                ) : (
                  <></>
                )}
                <p>{pages.information}</p>
              </div>
              {pages.date ? <p>{pages.date}</p> : <></>}
              <br></br>
            </header>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
