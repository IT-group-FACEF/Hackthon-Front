import App from "../../components/LoginForm";
import imgLogin from "../../assets/loginImg.svg";

const Login = () => {
  return (
    <section className="flex justify-center items-center min-h-[100vh] text-center h-full w-full bg-[#F2E8CF]">
      <div className="flex flex-row justify-center items-center">
        <div className="bg-[#A4B979] p-[50px] h-[50vh] w-[50vh] rounded-[20px] md:rounded-l-[20px] md:rounded-r-none">
          <div className="mb-[32px]">Faça Login com sua conta</div>
          <App />
        </div>
        <div className="hidden md:flex h-[50vh] w-[50vh] p-[50px] items-center bg-[#567A35] rounded-r-[20px]">
          <img src={imgLogin} alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
