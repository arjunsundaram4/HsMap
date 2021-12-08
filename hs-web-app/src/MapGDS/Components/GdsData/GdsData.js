import React from "react";

export const GdsData = [
  {
    title: "Overview",
    url: process.env.REACT_APP_OVERVIEW,
    subTab: false,
  },
  {
    title: "Four Zones Concept",
    url: process.env.REACT_APP_FOUR_ZONES,
    subTab: false,
  },
  {
    title: "Play with GDS",
    url: "",
    subTab: true,
    subTabInfo: [
      {
        title: "Four Zones",
        url: process.env.REACT_APP_GDS_FOUR_ZONES,
      },
      {
        title: "Overlap",
        url: process.env.REACT_APP_GDS_OVERLAP,
      },
      {
        title: "Side by side",
        url: process.env.REACT_APP_SIDE_BY_SIDE,
      },
    ],
  },
];
