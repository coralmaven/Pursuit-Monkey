(async function(){
  
  interest_over_time = await d3.json("/interest_over_time/");

  console.log(interest_over_time)
  
  // Print the forceData
  console.log(interest_over_time);

  // Create our first trace
const trace1 = {
  x: interest_over_time.date,
  y: interest_over_time.keywords[0],
  type: "scatter"
};

// Create our second trace
const trace2 = {
  x: interest_over_time.date,
  y: interest_over_time.keywords[1],
  type: "scatter"
};

// Create our second trace
const trace3 = {
  x: interest_over_time.date,
  y: interest_over_time.keywords[2],
  type: "scatter"
};

// Create our second trace
const trace4 = {
  x: interest_over_time.date,
  y: interest_over_time.keywords[3],
  type: "scatter"
};

// Create our second trace
const trace5 = {
  x: interest_over_time.date,
  y: interest_over_time.keywords[4],
  type: "scatter"
};

// The data array consists of both traces
const data = [trace1, trace2, trace3, trace4, trace5];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
})()



