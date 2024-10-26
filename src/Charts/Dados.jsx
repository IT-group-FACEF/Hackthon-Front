import React from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const DemoChangeData = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setData([
        { type: "Categoria 1", value: 27 },
        { type: "Categoria 2", value: 25 },
        { type: "Categoria 3", value: 18 },
        { type: "Categoria 4", value: 15 },
        { type: "Categoria 5", value: 10 },
        { type: "Outros", value: 5 },
      ]);
    }, 1000);
  }, []);

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };

  return <Pie {...config} />;
};

ReactDOM.render(<DemoChangeData />, document.getElementById("container"));
