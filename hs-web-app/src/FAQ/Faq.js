import React, { Component } from "react";
import "./Faq.css";
import { useState, useEffect } from "react";
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
  return (
    <div className={"bodyMarginTop bodyMarginBottom"}>
      <div className={"modelContent"}>
        <div className="text-center mainTitle">
          Common FAQs from Professor and Team
        </div>
        <div className={"slides"}>
          {page.map((faq) => (
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
  );
}

export default Faq;
