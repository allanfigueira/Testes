import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const options = {
    
  credits:{
    enabled:false,
  },
  title: {
    text: 'WhatApp - Últimas 24 horas',
    align:'left',
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    y: 100,
    margin:50
},
xAxis: {
  labels: {
    enabled: false
  },
  gridLineWidth: 1,
  tickLength: 0,
  text: null,
  type: 'datetime'
},
yAxis: {
  labels: {
    format: '{value:%e. %b}',
    enabled: false
  },
  title:{
    text:"Notificações",
  },
  gridLineWidth: 1,
  tickLength: 0,
  

},
  series: [{
    type:'area',
    name:'Brasil',
    data: [[2301326144483, 1],[601326144483, 3],[201326144483, 1]],
    color: '#76E6D9',
   
  }
  ,
  { 
    name:'México',
    data:[[2301326144483, 4],[601326144483, 2],[201326144483, 1],],
    color:'#915DFF',
    type:'area'
  }
]
}


const Wchart = () => {

    return ( 
        <>
        <div className="wchart-container">
                <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        </div>
        </>
     );
}
 
export default Wchart;