import { Card } from "antd";

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 300, margin: "16px" }}>
      <p>{value}</p>
    </Card>
  );
};

export default DashboardCard;
