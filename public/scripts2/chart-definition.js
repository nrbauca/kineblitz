// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event){
  chartV = createValueChart();
}


function createValueChart() 
{
    var chart = new Highcharts.Chart({
      chart:{ 
        renderTo:'chart-values',
        type: 'line',
      },

      title: { 
        text: '  ',
        color: '#F2921D', 
        floating: true,
        align: 'center',
      },

      series: [
        {
          name: 'Value',
          color: '#070A52',
          shadow: true,
            width: 125,
            opacity: 1,
        }
      ],

      plotOptions: {
        series: {
          dataLabels: {
              align: 'left',
              enabled: true,
              fontSize: '0.10em',
              fontFamily: '"Open-Sans", sans-serif'
            },     
        },
      },

      xAxis:[{
              type: 'datetime',
              
                labels:{
                  formatter:function(){
                    var d = new Date(this.value);
                    return d.getHours() + ':' + d.getMinutes() +':'+ d.getSeconds();
                  },

                  style:{
                    fontSize: '0.8em',
                    fontFamily: '"Open-Sans", sans-serif',
                    fontWeight: 'bold',
                  }
                },

              title:{
                text: 'TIMESTAMPS',

                style:{
                  color: '#1d3578',
                  fontFamily: '"Open-Sans", sans-serif',
                  fontSize: '17px',
                  fontWeight: 'bold',
                }
              }
      }],

      yAxis: {
              title: { 
                text: 'MUSCLE STRENGTH (µV)',

                style: {
                  color: '#1d3578',
                  fontFamily: '"Open-Sans", sans-serif',
                  fontSize: '17px',
                  fontWeight: 'bold',
                }
        },

        labels:{
          style:{
            fontSize: '0.9em',
            fontFamily: '"Open-Sans", sans-serif',
            fontWeight: 'bold',
          }
        }
      },

      credits: { 
        enabled: false 
      }
      
    });

    return chart;
}




