import React from 'react';
import { Card } from 'antd';

const DashboardCard = ({ title, value }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 300, margin: '16px' }}>
      <p>{value}</p>
    </Card>
  );
};

export default DashboardCard;
