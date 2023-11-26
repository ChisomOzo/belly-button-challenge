const belly_button = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
const dataPromise = d3.json(belly_button);
console.log("Data Promise: ", dataPromise);
d3.json(belly_button).then(function(data) {
    console.log(data);
    // console.log(data.samples);
    // console.log(data.samples[0]);
   
    let sample_data= data.samples;
    let res_data =sample_data.filter(results=> results.sample_values);
    let real_data= res_data[0];
    d3.select("#sample-metadata").html("");
Object.entries(real_data).forEach(function([key,value]){
    d3.select("#sample-metadata")
    .append("p")
    .text(`${key}:${value}`);
});
// console.log(real_data);
let otu_ids=real_data.otu_ids;
let otu_labels=real_data.otu_labels;
let sample_values=real_data.sample_values;


let otu=otu_ids.slice(0,10).map(function(id){
  return `OTU ${id}`
});

let x_values=sample_values.slice(0,10);
let labels=otu_labels.slice(0,10);
    

let bar_chart={

  y:otu.reverse(),
            x:x_values.reverse(),
            text:labels.reverse(),
            type:"bar",
            orientation:"h",
          
};

let layout={
           
            title:"Top 10 Belly Button Bacteria"
        };

        Plotly.newPlot("bar",[bar_chart],layout);
        

  });
  

  d3.json(belly_button).then(function(data) {
      // console.log(data);
      // console.log(data.samples);
      // console.log(data.samples[0]);
     
      let sample_data= data.samples;
      let res_data =sample_data.filter(results=> results.sample_values);
      let real_data= res_data[0];
  console.log(real_data);
  let otu_ids=real_data.otu_ids;
  let otu_labels=real_data.otu_labels;
  let sample_values=real_data.sample_values;

  let bubble_chart={
    y:sample_values,
    x:otu_ids,
    text:otu_labels,
    mode:"markers",
    marker:{
        size:sample_values,
        color:otu_ids,
        colorscale:"Electric"
    }
}

let layout={
    
    title:"Bacteria Culture per sample",
   
    
  
};

Plotly.newPlot("bubble",[bubble_chart],layout);


});



























