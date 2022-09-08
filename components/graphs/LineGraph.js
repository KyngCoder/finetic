import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


export const LineGraph = () => {
  
  const [state,setState] = useState(
    {
      series: [{
        name: 'XYZ MOTORS',
        data: [{
          x: new Date('2018-02-12').getTime(),
          y: 76
        },{
          x: new Date('2018-04-12').getTime(),
          y: 50
        },
        {
          x: new Date('2018-05-12').getTime(),
          y: 30
        },
         {
          x: new Date('2018-06-12').getTime(),
          y: 89
        },
        {
          x: new Date('2018-07-12').getTime(),
          y: 15
        },
        {
          x: new Date('2018-08-12').getTime(),
          y: 55
        },
        {
          x: new Date('2018-09-12').getTime(),
          y: 150
        },
        {
          x: new Date('2018-10-12').getTime(),
          y: 76
        },
        {
          x: new Date('2018-11-12').getTime(),
          y: 200
        },
        {
          x: new Date('2018-12-12').getTime(),
          y: 150
        },
        {
          x: new Date('2018-12-25').getTime(),
          y: 140
        },
      ]
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Current Market',
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      },

    }
  )
  
  return(
    <div className="app">
    <div className="row">
      <div className="mixed-chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          width="500"
        />
      </div>
    </div>
  </div>

  )

}


