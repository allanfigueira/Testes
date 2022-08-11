import React from 'react'
import Highcharts from 'highcharts/highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  
  chart: {
    type: 'pie',
    innerSize: '50%'
  }
  ,
  credits:{
    enabled:false
  },
  colors:['#55D8FE','#FF8373','#A3A0FB', '#FFDA83']
  ,
  title: {
    text: 'BRASIL'
  },
  plotOptions: {
    
    pie:{
      innerSize: '50%',
      dataLabels:{
        enabled:false,
      }
  }},
  series: [
    
    {
      data: [['Dado1',23],['Dado2',43],['Dado3',12],['Dado4',32]]
    }
  ]
};

const Pchart = () => {
    

    return ( <>
        <div className="container-cpaís">
            <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
        </div>
        </>
     );
}
 
export default Pchart;