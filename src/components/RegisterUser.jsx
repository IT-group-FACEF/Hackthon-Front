import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth"; // Importa a função de registro

const RegisterUser = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await register(values, navigate); // Chama a função de registro
      console.log("Registro bem-sucedido:", data);
    } catch (error) {
      console.error("Erro ao tentar registrar:", error.message);
    }
  };

  return (
    <Form
      name="register"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Por favor insira seu usuário!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Usuário" />
      </Form.Item>
      <Form.Item
        name="email"
        hasFeedback
        rules={[
          {
            type: "email",
            message: "O e-mail inserido não é válido!",
          },
          {
            required: true,
            message: "Por favor insira seu E-mail!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Por favor insira uma senha!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Por favor confirme sua senha!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("A nova senha que você digitou não corresponde!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Confirmar Senha"
        />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterUser;
