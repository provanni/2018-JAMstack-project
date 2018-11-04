// Start of line graph JS

trace1 = {
  type: 'scatter',
  x: ['2018-10-04', '2018-10-05', '2018-10-06', '2018-10-07', '2018-10-08', '2018-10-09', '2018-10-10','2018-10-11'],
  y: [1, 2, 1, 3, 1, 0, 0, 3],
  mode: 'lines',
  name: 'Angry',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace2 = {
  type: 'scatter',
  x: ['2018-10-04', '2018-10-05', '2018-10-06', '2018-10-07', '2018-10-08', '2018-10-09', '2018-10-10', '2018-10-11'],
  y: [4, 3, 5, 4.5, 5, 4, 3, 0],
  mode: 'lines',
  name: 'Sad',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 1
  }
};

trace3 = {
  type: 'scatter',
  x: ['2018-10-04', '2018-10-05', '2018-10-06', '2018-10-07', '2018-10-08', '2018-10-09', '2018-10-10', '2018-10-11'],
  y: [0, 2, 3, 0, 0, 3, 1, 5],
  mode: 'lines',
  name: 'Disgusted',
  line: {
    color: 'rgb(19, 160, 9)',
    width: 6
  }
};

var dataGraph = [trace1, trace2, trace3];

var layoutGraph = {
  title: 'Tracker',
  xaxis: {
    title: 'Date'
  },
  yaxis: {
    title: 'Insensity'
  }

};

  var options = {
  	// scrollZoom: true, // lets us scroll to zoom in and out - works
  	// showLink: false, // removes the link to edit on plotly - works
  	modeBarButtonsToRemove: ['toImage', 'zoom2d', 'toggleSpikelines', 'pan2d', 'autoScale2d', 'sendDataToCloud'],
  	//modeBarButtonsToAdd: ['lasso2d'],
  	// displayModeBar: true, //this one does work
  };

Plotly.newPlot('lineDiv', dataGraph, layoutGraph, options);

// End of line graph JS
// Start of donut graph JS

var dataDonut = [{
  values: [27, 11, 25, 8, 1],
  labels: ['Sad', 'Disgusted', 'Happy', 'Angry', 'Anxious'],
  text: '',
  textposition: 'inside',
  domain: {column: 1},
  name: 'Average Mood',
  hoverinfo: 'label+percent+name',
  hole: .3,
  type: 'pie'
}];

var layoutDonut = {
  title: 'Average Mood',
  grid: {rows: 1, columns: 1},
  showlegend: false,
  annotations: [

    {
      font: {
        size: 14
      },
      showarrow: false,
      text: '',
      x: 0.82,
      y: 0.5
    }
  ]
};

Plotly.newPlot('donutDiv', dataDonut, layoutDonut, options);

// End of donut graph JS
// Start of mostFrequentEmotion

  //The final version of this won't be constantly switching but will
  //reflect data stored in database

window.feed = function(callback) {
  var tick = {};
  tick.plot0 = Math.ceil(350 + (Math.random() * 500));
  callback(JSON.stringify(tick));
};

var myConfig = {
 	type: "gauge",
 	globals: {
 	  fontSize: 25
 	},
 	plotarea:{
 	  marginTop:80
 	},
 	plot:{
 	  size:'100%',
 	  valueBox: {
 	    placement: 'center',
 	    text:'', //default
 	    fontSize:35,
 	    rules:[
 	      {
 	        rule: '%v > 700 && %v < 850',
 	        text: 'Happy'
 	      },
 	      {
 	        rule: '%v >= 550 && %v < 700',
 	        text: 'Sad'
 	      },
        {
          rule:'%v >= 400 && %v < 550',
          text: 'Anxious'
        },
        {
         rule: '%v > 250 && %v < 400',
         text: 'Disgust'
        },
 	      {
 	        rule: '%v <= 250',
 	        text: 'Anger'
 	      }
 	    ]
 	  }
 	},
  tooltip:{
    borderRadius:5
  },
 	scaleR:{
	  aperture:180,
	  minValue:100,
	  maxValue:850,
	  step:50,
	  center:{
	    visible:false
	  },
	  tick:{
	    visible:false
	  },
	  item:{
	    offsetR:0,
	    rules:[
	      {
	        rule:'%i == 9',
	        offsetX:15
	      }
	    ]
	  },
	  labels:['','','','','','', '','','','',' ','','','','',''],
	  ring:{
	    size:60,
	    rules:[
	      {
	        rule:'%v < 250',
	        backgroundColor:'#E53935'
	      },
	      {
	        rule:'%v >= 250 && %v < 400',
	        backgroundColor:'#4a9938'
	      },
	      {
	        rule:'%v >= 400 && %v < 550',
	        backgroundColor:'#f2c05e'
	      },
	      {
	        rule:'%v >= 550 && %v < 700',
	        backgroundColor:'#29B6F6'
	      },
        {
	        rule:'%v >= 700 && %v < 850',
	        backgroundColor:'#d3d369'
	      }
	    ]
	  }
 	},
  refresh:{
      type:"feed",
      transport:"js",
      url:"feed()",
      interval:1500,
      resetTimeout:1000
  },
	series : [
		{
			values : [500], // starting value
			backgroundColor:'black',
	    indicator:[10,10,10,10,0.75],
	    animation:{
        effect:2,
        method:3,
        sequence:4,
        speed: 900
	    },
		}
	]
};

zingchart.render({
	id : 'mostOften',
	data : myConfig,
	height: 500,
	width: '100%'
});

// Code by Nicole Provan

function mostOften(){
  //fetch info from database
  //switch statement
    //if...
    //angry=200
    //disgust=300
    //anxious=550
    //sad=650
    //happy=750
}

// End of mostFrequentEmotion
