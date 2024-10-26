import Mobile from "../../assets/Mobile.svg";

const Calendar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-36">
      <div className="flex flex-col w-full md:w-[601px] pr-0 md:pr-12 mb-8 md:mb-0">
        <p className="text-2xl md:text-4xl text-[#4D4D4D] pb-5">
          Encontre o equilíbrio e a satisfação que você merece
        </p>
        <p className="text-sm md:text-base text-[#717171] pb-8">
          Descubra como pequenos passos diários podem levar a uma vida de
          bem-estar e plenitude. Na Viver+, oferecemos ferramentas e orientações
          que ajudam você a entender e melhorar sua qualidade de vida, com foco
          em seu bem-estar subjetivo. Venha explorar maneiras de se conectar
          consigo mesmo, encontrar paz e satisfação em cada momento.
        </p>
      </div>
      <div className="flex justify-center md:justify-start md:pl-12">
        <img src={Mobile} alt="Mobile" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Calendar;
