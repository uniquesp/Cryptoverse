import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Col, Row, Typography } from 'antd';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const { Title: AntTitle } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  if (!coinHistory?.data?.history?.length) return null;

  const coinPrice = coinHistory.data.history.map((item) => parseFloat(item.price));
  const coinTimestamp = coinHistory.data.history.map((item) =>
    new Date(item.timestamp * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  );

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      // x: {
      //   ticks: {
      //     maxTicksLimit: 10,  // Limits the number of x-axis labels
      //     maxRotation: 0,     // Prevents label rotation for better readability
      //     callback: function (value, index) {
      //       // Show only every nth label to avoid clutter
      //       const tickInterval = Math.ceil(coinTimestamp.length / 10); // Adjust as needed
      //       return index % tickInterval === 0 ? this.getLabelForValue(value) : '';
      //     },
      //   },
      // },
      y: {
        beginAtZero: true,
        min: Math.min(...coinPrice) - 1000,
        max: Math.max(...coinPrice) + 1000,
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <AntTitle level={2} className="chart-title">{coinName} Price Chart</AntTitle>
        <Col className="price-container">
          <AntTitle level={5} className="price-change">Change: {coinHistory.data.change}%</AntTitle>
          <AntTitle level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</AntTitle>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
