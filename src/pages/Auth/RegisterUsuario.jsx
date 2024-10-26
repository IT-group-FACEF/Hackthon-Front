import RegisterUser from "../../components/RegisterUser";
import imgUsers from "../../assets/imgUsers.svg";
import logo from "../../assets/logo.png";

const RegisterUsuario = () => {
  return (
<<<<<<< HEAD
    <section className="flex justify-center items-center min-h-[100vh] text-center h-full w-full bg-[#F2E8CF]">
      <div className="flex flex-row justify-center items-center">
        <div className="bg-[#A4B979] p-[50px] h-[50vh] w-[50vh] rounded-[20px] md:rounded-l-[20px] md:rounded-r-none">
          <div className="mb-[32px]">Cadastre-se como usuário</div>
          <RegisterUser />
        </div>
        <div className="hidden md:flex h-[50vh] w-[50vh] p-[50px] items-center bg-[#567A35] rounded-r-[20px]">
          <img src={imgUsers} alt="Login" />
=======
    <section className="flex justify-center items-center min-h-screen text-center bg-[#F2E8CF]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center bg-[#A4B979] p-8 md:p-12 h-auto w-full max-w-md rounded-[20px] md:rounded-r-[20px] md:rounded-r-none">
          <div className="flex md:hidden justify-center mb-4">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <div className="mb-8">Cadastre-se como usuário</div>
          <RegisterUser />
        </div>
        <div className="hidden md:flex h-auto w-full max-w-md p-8 items-center bg-[#567A35] rounded-r-[20px]">
          <img
            src={imgUsers}
            alt="Cadastro"
            className="w-full h-[368px] object-cover"
          />
>>>>>>> b71ed2559fd30491042477b78399a40b8448cee0
        </div>
      </div>
    </section>
  );
};

export default RegisterUsuario;
