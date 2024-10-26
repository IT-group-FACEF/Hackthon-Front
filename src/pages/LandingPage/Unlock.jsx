/* eslint-disable react/no-unescaped-entities */
import UnlockImg from "../../assets/Unlock.svg";

const Unlock = () => {
  return (
    <div
      id="unlock"
      className="flex flex-col md:flex-row items-center justify-center px-4 py-10 md:px-[144px] md:py-[100px]"
    >
      {/* Imagem com maior tamanho */}
      <img
        src={UnlockImg}
        alt="Unlock"
        className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto" // Tamanhos responsivos
      />
      <div className="flex flex-col w-full md:w-[661px] md:pe-[49px] text-center md:text-left">
        <p className="text-[24px] md:text-[36px] text-[#4D4D4D] pb-[16px]">
          Benefícios que Vão Transformar sua Vida
        </p>
        <div className="text-[14px] text-[#717171] pb-[32px]">
          <p className="pb-[16px]">
            Autoconhecimento: "Entenda melhor suas emoções e os fatores que
            impactam sua satisfação."
          </p>
          <p className="pb-[16px]">
            Equilíbrio Emocional: "Descubra práticas e insights que ajudam você
            a encontrar um ponto de equilíbrio diário."
          </p>
          <p className="pb-[16px]">
            Crescimento Pessoal: "Ferramentas para ajudá-lo a estabelecer metas
            e a alcançar uma vida mais feliz e plena."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
