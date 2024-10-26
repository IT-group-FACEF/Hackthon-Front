import RegisterUser from "../../components/RegisterUser";
import imgUsers from "../../assets/imgUsers.svg";

const RegisterUsuario = () => {
  return (
    <section className="flex justify-center items-center min-h-[100vh] text-center h-full w-full bg-[#F2E8CF]">
      <div className="flex flex-row justify-center items-center">
        <div className="bg-[#A4B979] p-[50px] h-[50vh] w-[50vh] rounded-[20px] md:rounded-l-[20px] md:rounded-r-none">
          <div className="mb-[32px]">Cadastre-se como usuário</div>
          <RegisterUser />
        </div>
        <div className="hidden md:flex h-[50vh] w-[50vh] p-[50px] items-center bg-[#567A35] rounded-r-[20px]">
          <img src={imgUsers} alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default RegisterUsuario;