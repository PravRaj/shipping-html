
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  var chart = {
    series: [
      {
        name: "New Users",
        data: [5, 1, 17, 6, 15, 9, 6],
      },
      {
        name: "Users",
        data: [7, 11, 4, 16, 10, 14, 10],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 350,
      stacked: false,
    },
    colors: ["var(--theme-blue)", "var(--theme-primary)"],
    plotOptions: {},
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 2,
      curve: "smooth",
      dashArray: [8, 0],
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      title: {
        // text: 'Age',
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      tickAmount: 4,
    },
    markers: {
      strokeColor: ["var(--bs-gray-300)", "var(--bs-primary)"],
      strokeWidth: 2,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(
    document.querySelector("#traffic-overview"),
    chart
  );
  chart.render();

  var options = {
    series: [
    {
      type: 'rangeArea',
      name: 'Team B Range',
  
      data: [
        {
          x: 'Jan',
          y: [1100, 1900]
        },
        {
          x: 'Feb',
          y: [1200, 1800]
        },
        {
          x: 'Mar',
          y: [900, 2900]
        },
        {
          x: 'Apr',
          y: [1400, 2700]
        },
        {
          x: 'May',
          y: [2600, 3900]
        },
        {
          x: 'Jun',
          y: [500, 1700]
        },
        {
          x: 'Jul',
          y: [1900, 2300]
        },
        {
          x: 'Aug',
          y: [1000, 1500]
        }
      ]
    },
  
    {
      type: 'rangeArea',
      name: 'Team A Range',
      data: [
        {
          x: 'Jan',
          y: [3100, 3400]
        },
        {
          x: 'Feb',
          y: [4200, 5200]
        },
        {
          x: 'Mar',
          y: [3900, 4900]
        },
        {
          x: 'Apr',
          y: [3400, 3900]
        },
        {
          x: 'May',
          y: [5100, 5900]
        },
        {
          x: 'Jun',
          y: [5400, 6700]
        },
        {
          x: 'Jul',
          y: [4300, 4600]
        },
        {
          x: 'Aug',
          y: [2100, 2900]
        }
      ]
    },
  
    {
      type: 'line',
      name: 'Team B Median',
      data: [
        {
          x: 'Jan',
          y: 1500
        },
        {
          x: 'Feb',
          y: 1700
        },
        {
          x: 'Mar',
          y: 1900
        },
        {
          x: 'Apr',
          y: 2200
        },
        {
          x: 'May',
          y: 3000
        },
        {
          x: 'Jun',
          y: 1000
        },
        {
          x: 'Jul',
          y: 2100
        },
        {
          x: 'Aug',
          y: 1200
        },
        {
          x: 'Sep',
          y: 1800
        },
        {
          x: 'Oct',
          y: 2000
        }
      ]
    },
    {
      type: 'line',
      name: 'Team A Median',
      data: [
        {
          x: 'Jan',
          y: 3300
        },
        {
          x: 'Feb',
          y: 4900
        },
        {
          x: 'Mar',
          y: 4300
        },
        {
          x: 'Apr',
          y: 3700
        },
        {
          x: 'May',
          y: 5500
        },
        {
          x: 'Jun',
          y: 5900
        },
        {
          x: 'Jul',
          y: 4500
        },
        {
          x: 'Aug',
          y: 2400
        },
        {
          x: 'Sep',
          y: 2100
        },
        {
          x: 'Oct',
          y: 1500
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'rangeArea',
    animations: {
      speed: 500
    }
  },
  colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: [0.24, 0.24, 1, 1]
  },
  forecastDataPoints: {
    count: 2
  },
  stroke: {
    curve: 'straight',
    width: [0, 0, 2, 2]
  },
  legend: {
    show: true,
    customLegendItems: ['Team B', 'Team A'],
    inverseOrder: true
  },
  markers: {
    hover: {
      sizeOffset: 5
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

})();