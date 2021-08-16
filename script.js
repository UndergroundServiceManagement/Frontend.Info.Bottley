console.log('hello!');

var chartDom = [document.getElementById('chart1'), document.getElementById('chart2'), document.getElementById('chart3')];
var myChart = chartDom.map(_ => echarts.init(_));
var option;

option = {
  title: {
    show: false,
    text: 'Gefühle',
    subtext: 'In Deutschland von 2019'
  },
  legend: {
    bottom: 10,
    left: 'center',
    data: ['Glück', 'Wut', 'Trauer', 'Freude'],
    textStyle: {
      fontSize: '15',
    },
  },
  series: [
    {
      type: 'pie',
      radius: '85%',
      center: ['50%', '45%'],
      label: {
        show: false
      },
      data: [
        { value: 1548, name: 'Glück' },
        { value: 735, name: 'Wut' },
        { value: 510, name: 'Trauer' },
        { value: 434, name: 'Freude' }
      ]
    }
  ]
};

option && myChart[0].setOption(option);
option && myChart[1].setOption(option);
option && myChart[2].setOption({
  series: [
      {
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
              show: true,
              position: 'center',
              fontSize: "50px"
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '50',
                  fontWeight: 'bold'
              }
          },
          
          labelLine: {
              show: true
          },
          data: [
              {value: 10, name: '10'}
          ]
      }
  ]
});
window.onresize = function() {
  myChart.map(_ => _.resize());
};
