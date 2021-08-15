console.log('hello!');

var chartDom = document.getElementById('chart1');
var myChart = echarts.init(chartDom);
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

option && myChart.setOption(option);
window.onresize = function() {
  myChart.resize();
};
