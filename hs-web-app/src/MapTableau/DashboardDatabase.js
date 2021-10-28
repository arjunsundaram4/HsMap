const dashboards = [
  {
    name: 'Explore page',
    url: 'explore',
    tableauUrl: process.env.REACT_APP_TB_EXPLORE,
  },
  {
    name: 'Four Latitude Zones',
    url: 'fourlatitudezones',
    tableauUrl:process.env.REACT_APP_TB_FOUR_ZONES,
  },
  {
    name: 'Region Comparisons',
    url: 'regioncomparisons',
    tableauUrl: process.env.REACT_APP_TB_REGION,
  },
  {
    name: 'North to South Slice',
    url: 'northtosouthslice',
    tableauUrl: process.env.REACT_APP_TB_NORTH_TO_SOUTH,
  }
];

export default dashboards;
