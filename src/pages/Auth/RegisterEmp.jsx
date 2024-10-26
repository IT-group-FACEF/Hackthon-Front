import RegisterCompany from "../../components/RegisterCompany";
import imgCompany from "../../assets/imgCompany.svg";

const RegisterEmp = () => {
  return (
    <section className="flex justify-center items-center min-h-[100vh] text-center h-full w-full bg-[#F2E8CF]">
      <div className="flex flex-row justify-center items-center">
        <div className="hidden md:flex h-[70vh] w-[70vh] p-[50px] items-center bg-[#567A35] rounded-l-[20px]">
          <img src={imgCompany} alt="Login" />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#A4B979] p-[50px] h-[70vh] w-[70vh] rounded-[20px] md:rounded-r-[20px] md:rounded-l-none">
          <div className="mb-[32px]">Cadastre-se como empresa</div>
          <RegisterCompany />
        </div>
      </div>
    </section>
  );
};

export default RegisterEmp;
