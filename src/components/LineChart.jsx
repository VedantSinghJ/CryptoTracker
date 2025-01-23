/* eslint-disable */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  const currentDate = new Date();
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    const daysAgo = coinHistory?.data?.history.length - 1 - i;
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - daysAgo);
    coinTimestamp.push(date.toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: true, // Enable gradient fill
        backgroundColor: 'rgba(0, 113, 189, 0.2)', // Gradient fill color
        borderColor: '#0071bd',
        borderWidth: 2,
        tension: 0.4, // Smooth the line curve
        pointRadius: 0, // No dots by default
        pointHoverRadius: 5, // Show dots on hover
        pointBackgroundColor: '#0071bd',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#4b5563', // Legend text color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#f3f4f6', // Tooltip background
        titleColor: '#374151', // Title color
        bodyColor: '#6b7280', // Body color
        borderColor: '#d1d5db',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6b7280', // X-axis label color
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(209, 213, 219, 0.2)', // X-axis grid line color
        },
      },
      y: {
        ticks: {
          color: '#6b7280', // Y-axis label color
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(209, 213, 219, 0.2)', // Y-axis grid line color
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <Row className="chart-header mb-4">
        <Title level={2} className="chart-title text-xl text-gray-800">{coinName} Price Chart</Title>
        <Col className="price-container text-sm text-gray-600">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
