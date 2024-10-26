import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import { Flex, Form, Rate, Typography } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const { Title } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const questions = [
  { id: 1, question: "Como você avalia nosso atendimento?" },
  { id: 2, question: "Qual a qualidade do nosso produto?" },
  { id: 3, question: "Como você avalia a entrega?" },
];

const Quests = () => {
  const onFinish = (values) => {
    console.log("Valores enviados:", values);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar 
        title={"Questionário"}/>
      <Layout>
        <Sidebar />
        <Form
          onFinish={onFinish}
          className="flex flex-col justify-center items-center w-full"
        >
          <Title level={2}>Responda o questionário</Title>
          {questions.map(({ id, question }) => (
            <Form.Item
              className="flex flex-col"
              key={id}
              label={question}
              name={`question_${id}`}
              rules={[
                { required: true, message: "Por favor, avalie esta questão!" },
              ]}
            >
              <Flex gap="middle" vertical>
                <Rate
                  defaultValue={3} // Valor inicial
                  character={({ index = 0 }) => customIcons[index + 1]}
                />
              </Flex>
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              typeButton="primary"
              htmlType="submit"
              buttonText={"Enviar"}
              style={{ backgroundColor: "#3C5220" }}
            />
          </Form.Item>
        </Form>
      </Layout>
    </Layout>
  );
};

export default Quests;
