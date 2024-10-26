import RegisterUser from "../../components/RegisterUser";
import RegisterCompany from "../../components/RegisterCompany";

const Register = () => {
  return (
    <section className="flex justify-evenly items-center min-h-[85vh] text-center ">
      <div className="">
        <div className="mb-20">Cadastre-se seu usuario</div>
        <RegisterUser />
      </div>
      <div>
        <div className="mb-20">Cadastre-se sua empresa</div>
        <RegisterCompany />
      </div>
    </section>
  );
};

export default Register;
