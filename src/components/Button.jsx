import { Button, Flex } from "antd";

// eslint-disable-next-line react/prop-types
const Login = ({ buttonText, typeButton, style, href }) => (
  <Flex gap="small" wrap>
    <Button type={typeButton} style={style} href={href}>
      {buttonText}
    </Button>
  </Flex>
);

export default Login;
