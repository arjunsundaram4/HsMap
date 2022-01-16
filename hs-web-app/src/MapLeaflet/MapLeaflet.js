import React, {useState, useEffect} from 'react';
import './MapLeaflet.css';
import { MapContainer, TileLayer, useMapEvents} from 'react-leaflet'
import * as L from "leaflet";



function MapLogic() {

   // API Headers
   const HEADERS = {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "37109374dbmshbdc27493241eab8p1ce037jsnfa94841924e9"
      };


   var today = new Date();
   var queryDate = 
      today.getFullYear()+'-'
      + ((today.getMonth()+1) > 9 ? (today.getMonth()+1) : '0' + (today.getMonth()+1)) +'-'
      + ((today.getDate() - 1) > 9 ? (today.getDate() - 1) : '0' + (today.getDate() - 1));
   
   // Manage HTML elements: date-picker, slider
   var slider = null;
   useEffect(()=>{
      document.getElementById('date-picker').value = queryDate;

      // Slider
      slider = document.getElementById("range-animation");
   }, [])

   var geojsonLayer = null;
   var legend = null;

   var countryNameSwap = {
      "Czech Republic": "Czechia",
      "Macedonia": "North Macedonia",
      "Republic of Serbia": "Serbia",
      "Northern Cyprus" : "Cyprus"                       
   }

   // convert from YYYY-MM-DD to MM/DD/YYYY
   function convertDateFromInputToUS (myDate) {
      let temp = myDate.split('-')
      let day = temp[2][0] == '0'? temp[2][1] : temp[2]
      let month = temp[1][0] == '0'? temp[1][1] : temp[1]
      return month + "/" + day + "/" + temp[0]
   }

   function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

   function freezeButtons() {
      document.getElementById("btn-view-static").disabled = true;
      document.getElementById("btn-animate").disabled = true;
   }
   function unfreezeButtons() {
      document.getElementById("btn-view-static").disabled = false;
      document.getElementById("btn-animate").disabled = false;
   }

   // Map Loading Style
   function showMapLoading(){
      document.getElementsByClassName('spinner')[0].style.display = 'flex';
      document.getElementById('overlay').style.display = 'block';  
   }
   function hideMapLoading(){
      // Hide Overlay
      document.getElementsByClassName('spinner')[0].style.display = 'none';
      document.getElementById('overlay').style.display = 'none';    
   }
 
   // Country Color Styles
   function getHeatMapCountryStyle(countryCases, max){

      if (countryCases || countryCases == 0) {
         return {
            weight: 2,
            color: HSLToHex((1.0 - (countryCases / max)) * 240, 100, 50),
            dashArray: '',
            fillOpacity: 0.6
         };

      }

   }
   function HSLToHex(h,s,l) {
      s /= 100;
      l /= 100;
    
      let c = (1 - Math.abs(2 * l - 1)) * s,
          x = c * (1 - Math.abs((h / 60) % 2 - 1)),
          m = l - c/2,
          r = 0,
          g = 0, 
          b = 0; 
    
      if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
      }
      // Having obtained RGB, convert channels to hex
      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);
    
      // Prepend 0s, if necessary
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;
    
      return "#" + r + g + b;
   }
   var hoverCountryStyle = {
      weight: 4,
      color: 'white',
      dashArray: '',
      fillOpacity: 0.6
   };
   var noDataCountryStyle = {
      weight: 4,
      color: 'white',
      dashArray: '',
      fillOpacity: 0
   };

   // Continent Map View
   var continentMapView = {
      "Europe": {
         lat: 54.977,
         lon: 14.414,
         zoom: 4
      },
      "Africa": {
         lat: 6.35413733714696,
         lon: 22.187474013568547,
         zoom: 3
      },
      "Asia": {
         lat: 41.20069868439857,
         lon: 90.27343124747313,
         zoom: 3
      },
      "North America": {
         lat: 48.909665900827825,
         lon: -103.20312301993383,
         zoom: 3
      },
      "South America": {
         lat: -10.276470925721338,
         lon: -61.718750551938975,
         zoom: 3
      },
      "Oceania": {
         lat: -23.169537364189882,
         lon: 143.33006958007866,
         zoom: 4
      },
   };

   // Map Click Event
   const map = useMapEvents({
      click: (e) => {
            console.log(e);
      },
   })

   // Info Bar -> Top Right of Map
   var info = L.control();
   info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      this.update();
      return this._div;
   };

   info.update = function (myDate, countryName, number, chosenMetric) {
      this._div.innerHTML = '<h4> COVID-19 World Map </h4>'
      + ( myDate ? '<h5>'+ myDate +'</h5>' : '')


      +  (countryName ? '<b>' + countryName + '</b><br />' + numberWithCommas(number) + ' ' + chosenMetric: '');
   };
   info.addTo(map);


   // Legend Bar -> Bottom Right of Map
  const addLegend = (max) => {

   if (legend)
      map.removeControl(legend);

   legend = L.control({position: 'bottomright'});
   let numRows = 9;
   var interval = max / numRows; 
   let myGrades = []
   for (let j = 0; j < numRows; j ++){
      if (max < 1) {
         myGrades.push( Math.round(interval * j * 1000) / 1000)
      } else {
         myGrades.push( Math.round(interval * j))
      }
   }

   legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
          grades = myGrades,
          labels = [];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getHeatMapCountryStyle(grades[i] , max).color + '"></i> ' +
              numberWithCommas(grades[i]) + (grades[i + 1] ? ' &ndash; ' + numberWithCommas(grades[i + 1]) + '<br>' : '+');
      }
  
      return div;
  };

   legend.addTo(map);
  }

   // Data Collection, Coversion, Parsing
   function parseJohnsHopkinsData(strData) {
      function CSVToArray( strData, strDelimiter ){
         // Check to see if the delimiter is defined. If not,
         // then default to comma.
         strDelimiter = (strDelimiter || ",");
   
         // Create a regular expression to parse the CSV values.
         var objPattern = new RegExp(
             (
                 // Delimiters.
                 "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
   
                 // Quoted fields.
                 "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
   
                 // Standard fields.
                 "([^\"\\" + strDelimiter + "\\r\\n]*))"
             ),
             "gi"
             );
   
   
         // Create an array to hold our data. Give the array
         // a default empty first row.
         var arrData = [[]];
   
         // Create an array to hold our individual pattern
         // matching groups.
         var arrMatches = null;
   
   
         // Keep looping over the regular expression matches
         // until we can no longer find a match.
         while (arrMatches = objPattern.exec( strData )){
   
             // Get the delimiter that was found.
             var strMatchedDelimiter = arrMatches[ 1 ];
   
             // Check to see if the given delimiter has a length
             // (is not the start of string) and if it matches
             // field delimiter. If id does not, then we know
             // that this delimiter is a row delimiter.
             if (
                 strMatchedDelimiter.length &&
                 strMatchedDelimiter !== strDelimiter
                 ){
   
                 // Since we have reached a new row of data,
                 // add an empty row to our data array.
                 arrData.push( [] );
   
             }
   
             var strMatchedValue;
   
             // Now that we have our delimiter out of the way,
             // let's check to see which kind of value we
             // captured (quoted or unquoted).
             if (arrMatches[ 2 ]){
   
                 // We found a quoted value. When we capture
                 // this value, unescape any double quotes.
                 strMatchedValue = arrMatches[ 2 ].replace(
                     new RegExp( "\"\"", "g" ),
                     "\""
                     );
   
             } else {
   
                 // We found a non-quoted value.
                 strMatchedValue = arrMatches[ 3 ];
   
             }
   
   
             // Now that we have our value string, let's add
             // it to the data array.
             arrData[ arrData.length - 1 ].push( strMatchedValue );
         }
   
         // Return the parsed data.
         return( arrData );
     }
     function arrayMerge(merge1, merge2){
      let merged = []
      for (let d = 0; d < merge1.length; d++){
          merged.push(merge1[d] + merge2[d])
      }
      return merged;
  }
     // Convert from String to Array
     let rawArray = CSVToArray(strData);

     /* Init Data Storage -->  casesByCountryTimeseries 
         format:  casesByCountryTimeseries['Dates'] --> [ '1/22/2020', '1/23/2020', '1/24/2020' ],
                  casesByCountryTimeseries[country] --> [0, 1 ,2 ,3] 
      */
     let dates = rawArray[0].slice(4);
     let casesByCountryTimeseries = { 'Dates': dates };
      for (let i = 1; i < rawArray.length; i++){

         let currCountry = rawArray[i][1];
         let currCountryCases = rawArray[i].slice(4);

         currCountryCases = currCountryCases.map(function (x) { 
            return parseInt(x, 10); 
         });


         if (currCountry in casesByCountryTimeseries) {
            casesByCountryTimeseries[currCountry] = arrayMerge(currCountryCases, casesByCountryTimeseries[currCountry])
         } else {
            casesByCountryTimeseries[currCountry] = currCountryCases;
         }
      }

      return casesByCountryTimeseries;
   }

   function convertTimeseriesFromCumulativeToDailyCases(timeseries) {
      Object.keys(timeseries).map(function(country, index) {
         if ([undefined, "Dates"].includes(country))
            return;

         var countryCasesList = [...timeseries[country]];

         for (let i = 1; i < countryCasesList.length; i++) {
            timeseries[country][i] = countryCasesList[i] - countryCasesList[i-1];
         }
     });
     //console.log("Finished conversion of cumulative to per day basis")
     //console.log(timeseries)
     return timeseries;
   }

   function convertTimeseriesFromDailyToSeasonal(timeseries) {
      Object.keys(timeseries).map(function(country, index) {
         if ([undefined, "Dates"].includes(country))
            return;


         var countryCasesList = [...timeseries[country]];
         var window = 365;
         var sideRange =  parseInt( (window - 1) / 2)

         let startIndex = null;
         let endIndex = null;



         for (let i = 0; i < countryCasesList.length; i++) {

            // Find appropriate range to get cumulative cases
            if (i < sideRange) {
               startIndex = 0;
               endIndex = window - 1;
            } else if (i < countryCasesList.length - sideRange) {
               startIndex = i - sideRange;
               endIndex = i + sideRange;
            } else {
               startIndex = countryCasesList.length - window;
               endIndex = countryCasesList.length - 1;
            }

            var cumulativeSum = 0;

            countryCasesList.map(function(x, idx){
               if (idx >= startIndex && idx <= endIndex)
               cumulativeSum += x
             })             

            timeseries[country][i] = countryCasesList[i] / cumulativeSum;

         }
     });
     console.log("Finished conversion of cumulative to per day basis")
     console.log(timeseries)
     return timeseries;
   }

   function convertTimeseriesToAveragePerXDays(timeseries, numDays) {
      Object.keys(timeseries).map(function(country, index) {
         if ([undefined, "Dates"].includes(country))
            return;


         var countryCasesList = [...timeseries[country]];
         var window = numDays;
         var sideRange =  parseInt( (window - 1) / 2)

         let startIndex = null;
         let endIndex = null;



         for (let i = 0; i < countryCasesList.length; i++) {

            // Find appropriate range to get cumulative cases
            if (i < sideRange) {
               startIndex = 0;
               endIndex = window - 1;
            } else if (i < countryCasesList.length - sideRange) {
               startIndex = i - sideRange;
               endIndex = i + sideRange;
            } else {
               startIndex = countryCasesList.length - window;
               endIndex = countryCasesList.length - 1;
            }

            var cumulativeSum = 0;

            countryCasesList.map(function(x, idx){
               if (idx >= startIndex && idx <= endIndex)
               cumulativeSum += x
             })             

            timeseries[country][i] = cumulativeSum / window;

         }
     });
     console.log("Finished conversion of cumulative to per day basis")
     console.log(timeseries)
     return timeseries;
   }

   function getCountriesListFromGEOGSON(geoJson) {
      let countryNameList = [];
      geoJson.features.forEach( (countryGeoJson) => {
         countryNameList.push(countryGeoJson.properties.admin);
      }) 
      return countryNameList;
   }

   // Gets GEOJSON and calls appropriate subfunction
   const initMap = (isAnimated, mapOptions) =>{
      
      showMapLoading();

      if (geojsonLayer)
         map.removeLayer(geojsonLayer)
      
      if (legend)
         map.removeControl(legend);

      fetch("/mapGeoJson/"+ mapOptions.continent +".json",{
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      })
      .then(function(response){
         return response.json();
      })
      .then(function (countryGEOJSON){
         console.log("got geogson");
         console.log(countryGEOJSON);
         if (isAnimated) {
            console.log("animate")
            animateMap(mapOptions, countryGEOJSON)
         } else {
            console.log("static")
            staticMap(mapOptions, countryGEOJSON);
         }
         
      })
      .catch(error => {
         console.log(error.message);
      })

   }

   // Animation. Data from Johns Hopkins CSV
   const animateMap = (mapOptions, countryGEOJSON) =>{
         fetch("/mapGeoJson/time_series_covid19_confirmed_global.csv",{
            headers: {
               "Content-Type": "text/csv",
               Accept: "text/csv",
            },
         })
         .then(function(response){
            return response.text();
         })
         .then(function (rawCovidCasesTimeseries){

            let covidCasesTimeseries = parseJohnsHopkinsData(rawCovidCasesTimeseries)
            if (mapOptions.metric == "confirmed_diff"){
               covidCasesTimeseries = convertTimeseriesFromCumulativeToDailyCases(covidCasesTimeseries);
               covidCasesTimeseries = convertTimeseriesToAveragePerXDays(covidCasesTimeseries, 5);
            }
            else if (mapOptions.metric == "confirmed_diff_seasonal") {
               covidCasesTimeseries = convertTimeseriesFromCumulativeToDailyCases(covidCasesTimeseries);
               covidCasesTimeseries = convertTimeseriesFromDailyToSeasonal(covidCasesTimeseries);
               covidCasesTimeseries = convertTimeseriesToAveragePerXDays(covidCasesTimeseries, 5);
            }

            let dates = covidCasesTimeseries['Dates']
            let countriesOnMap = getCountriesListFromGEOGSON(countryGEOJSON)

            // console.log("covidCasesTimeseries")
            // console.log(covidCasesTimeseries)

            // console.log("dates")
            // console.log(dates)

            // console.log("countriesOnMap")
            // console.log(countriesOnMap)

            // console.log("countryGEOJSON")
            // console.log(countryGEOJSON)


            // get index of start date we have just selected
            //console.log(convertDateFromInputToUS(mapOptions.date))
            let startDateIdx = dates.indexOf(convertDateFromInputToUS(mapOptions.date));
            if (startDateIdx === -1) {
               hideMapLoading();
               alert("Invalid Date")
               return;
            }
            console.log(startDateIdx)

            // Set slider max & min
            slider.max = dates.length
            slider.min = startDateIdx;


            // Get the max of selected attr for coloring
            var max = 0;
            for (let d = startDateIdx; d < dates.length; d++) {
               //let currDate = dates[d];
               countriesOnMap.forEach((c) => {
                  //console.log("country: ", c);
                  if (c in covidCasesTimeseries) {
                     let temp = covidCasesTimeseries[c][d];
                     if (temp > max)
                        max = temp
                  }
               })
            }

            addLegend(max);

            hideMapLoading();

            map.flyTo(new L.LatLng(continentMapView[mapOptions.continent].lat, continentMapView[mapOptions.continent].lon), continentMapView[mapOptions.continent].zoom);

            function updateNext(d, maxD, timeout) {

               if (geojsonLayer)
                  map.removeLayer(geojsonLayer)
   
               // Append to map
               geojsonLayer = L.geoJson(countryGEOJSON, {
                  clickable: false,
                  style: noDataCountryStyle,
                  onEachFeature: function (feature, layer) {
   
                     let countryToLookFor = feature.properties.admin;
                     if (countryToLookFor in countryNameSwap)
                        countryToLookFor = countryNameSwap[countryToLookFor]
                  

                     let currCountryCovidData = covidCasesTimeseries[countryToLookFor]
                     if (!currCountryCovidData) {
                        //console.log("error:", countryToLookFor)
                        return;
                     }
                     currCountryCovidData = currCountryCovidData[d];
   
   
                     // If data found, style the polygon
                     if (currCountryCovidData || currCountryCovidData == 0){
                        layer.setStyle(getHeatMapCountryStyle(currCountryCovidData, max));
                        info.update(dates[d], null);
                     }
                  }
               }).addTo(map);

               slider.value = d;
               console.log(d)
               if (d < maxD - 1) {
                  setTimeout(() => { updateNext(d + 1, maxD, timeout) }, timeout);
               } else {
                  unfreezeButtons()
                  slider.style.display = "none";
               } 
            } 
            freezeButtons()
            slider.style.display = "inline";
            setTimeout(() => { updateNext(startDateIdx, dates.length, 50); }, 1000);
         })
   }

   // Show static view. Data from Johns Hopkins API
   const staticMap = (mapOptions, countryGEOJSON) =>{

      // Get array of ISOs of regions that match continent
      var regionsToFetch =  new Set();
      countryGEOJSON.features.forEach((item) =>{
         if (item.properties.continent === mapOptions.continent){
            regionsToFetch.add(item.properties.adm0_a3_is)
         }
      })

      // Prepare MAP
      var isoToCovidData = {};
      let promise = fetch("https://covid-19-statistics.p.rapidapi.com/reports?date=" + mapOptions.date, {headers: HEADERS});
      promise.then(response => {

         // Problematic response
         if (response.status !== 200) {
               alert('Looks like there was a problem drawing COVID data. Status Code: ' + response.status);
               return;
         }

      // Build the Map
         response.json().then(data => {
            
            if (data.data.length == 0) {
               hideMapLoading();
               alert("Unable to find data for this date.")
               return;
            }
            // Map ISO to region, keeping only ISOs that we want --> isoToCovidData
            data.data.forEach((item ) =>{

            // If is an iso that we want
               if (regionsToFetch.has(item.region.iso)){
               
               // If already exists, merge
               if (isoToCovidData[item.region.iso]){
                  isoToCovidData[item.region.iso].active += item.active
                  isoToCovidData[item.region.iso].active_diff += item.active_diff
                  isoToCovidData[item.region.iso].confirmed += item.confirmed
                  isoToCovidData[item.region.iso].confirmed_diff += item.confirmed_diff
                  isoToCovidData[item.region.iso].deaths += item.deaths
                  isoToCovidData[item.region.iso].deaths_diff += item.deaths_diff

                  isoToCovidData[item.region.iso].recovered += item.recovered
                  isoToCovidData[item.region.iso].recovered_diff += item.recovered_diff


               // Else create new entry
               } else {
                  isoToCovidData[item.region.iso] = {
                     name: item.region.name,
                     date: item.date,
                     last_update: item.last_update,

                     active: item.active,
                     active_diff: item.active_diff,
                     confirmed: item.confirmed,
                     confirmed_diff: item.confirmed_diff,
                     deaths: item.deaths,
                     deaths_diff: item.deaths_diff,
                     fatality_rate: item.fatality_rate,
                     recovered: item.recovered,
                     recovered_diff: item.recovered_diff
                  }
               }
               }
            });

            // Get the max of selected attr for coloring
            var max = 0;
            Object.keys(isoToCovidData).forEach((iso) =>{
            let temp = isoToCovidData[iso][mapOptions.metric];
            if (temp > max)
               max = temp;
            })

            addLegend(max);

         // Append GEOJson
         geojsonLayer = L.geoJson(countryGEOJSON, {
            clickable: false,
            style: noDataCountryStyle,
            onEachFeature: function (feature, layer) {

               let currCountryCovidData = isoToCovidData[feature.properties.adm0_a3]

               // Handle Mouse Events
               layer.on({
                  mouseover: () => { 
                     if (currCountryCovidData){
                        console.log(currCountryCovidData);
                        info.update(mapOptions.date, currCountryCovidData.name, currCountryCovidData[mapOptions.metric], mapOptions.metric); 
                        layer.setStyle(hoverCountryStyle);
                     }
                  },
                  mouseout: () => { 
                     if (currCountryCovidData){
                        console.log(currCountryCovidData)
                        info.update(mapOptions.date, null); 
                        layer.setStyle(getHeatMapCountryStyle(currCountryCovidData[mapOptions.metric], max));
                     }else{
                        layer.setStyle(noDataCountryStyle);
                     }
                  }
               });

               // Style Layers
               if (currCountryCovidData){
                  layer.setStyle(getHeatMapCountryStyle(currCountryCovidData[mapOptions.metric], max));
               }
            }
         }).addTo(map);
         
         hideMapLoading();
         map.flyTo(new L.LatLng(continentMapView[mapOptions.continent].lat, continentMapView[mapOptions.continent].lon), continentMapView[mapOptions.continent].zoom);
                  
      }).catch(error => {
            console.log(error.message);
      })
   })
      
   }

   // Button Triggers
   function loadCaseMap(){
      let mapOptions = {
         continent: document.getElementById('continent-select').value,
         date: document.getElementById('date-picker').value,
         metric: document.getElementById('metric-select').value
      }

      initMap(false, mapOptions);
   }
   function loadAnimateMap(){
      let mapOptions = {
         continent: "Europe",
         date: "2020-03-15",
         metric: document.getElementById('animation-metric-select').value
      }
      initMap(true, mapOptions);
   }

   return (
      <div>
         <div className="map-data-input-panel info">
            <div className="map-data-input">
            <span className = "infoRowTitle" > Worldwide Static Data:</span>
               <select id="continent-select">
                  <option> Europe </option>
                  <option> Asia </option>
                  <option> North America </option>
                  <option> South America </option>
                  <option> Africa </option>
                  <option> Oceania </option>
               </select>

               <select id="metric-select">
                  <option> confirmed </option>
                  <option> deaths </option>
                  <option> recovered </option>
                  <option> confirmed_diff </option>
                  <option> deaths_diff </option>
                  <option> recovered_diff </option>
                  <option> active </option>
               </select>
            
               <input type="date" id="date-picker"/>
            
               <button id="btn-view-static" onClick={loadCaseMap}> View </button>
            </div>
            <div className="map-data-input map-data-input-second-row" >
               <span className = "infoRowTitle" style={{'padding-left': '27px'}}> Europe Animation:</span>
               <select id="animation-metric-select">
                  <option> confirmed </option>
                  <option> confirmed_diff </option>
                  <option> confirmed_diff_seasonal </option>
               </select>
               <button id="btn-animate" onClick={loadAnimateMap}> Play </button>
               <input id="range-animation" type="range" value="0" style={{display: "none"}} ></input>
            </div>
         </div>
      </div>
      )         
  }


function MapLeaflet() {

   // Initial Map Position
   const position = [36.91681936120949, -2.0312479424477696]
   const zoomLevels = 2;

  return (
    <div className={"bodyMarginTop"}>
        <div className={"dashboardTab"}>
            <link
                  rel="stylesheet"
                  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                  crossOrigin=""
                  />
            <MapContainer  center = {position} 
                           zoom = {zoomLevels} 
                           scrollWheelZoom = {true} 
                           eventHandlers = {{
                              click: () => {
                                 alert('marker clicked')
                              }
                           }}
                        >

                  <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"/>
                  
                  <MapLogic/>
                  <div className="spinner"></div>
                  <div id="overlay"></div>
            </MapContainer>
        </div>
    </div>
  );
}

export default MapLeaflet;
