import img from "../../assets/imgHome.svg";
import dashboarImg from "../../assets/dashboards.svg";
import Projections from "../../assets/Projections.svg";
import { Carousel } from "antd";

const Home = () => (
  <>
    <style>
      {`
        .ant-carousel .slick-next {
          color: black;
        }
        .ant-carousel .slick-prev {
          color: black;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #000000;
        }
        .ant-carousel .slick-dots li button {
          background: #000000;
        }
        .custom-last-slide {
          margin-top: 30px; /* Ajuste este valor conforme necessário */
        }
        .text-container {
          margin-top: 20px; /* Ajuste esse valor conforme necessário */
        }
      `}
    </style>

    <Carousel
      arrows
      infinite={true}
      autoplay
      autoplaySpeed={7000}
      draggable
      swipeToSlide
    >
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[144px] py-[80px] space-y-9 bg-[#F2E8CF]">
          <div className="flex flex-col text-container">
            {" "}
            {/* Adicionando classe para controle de margem */}
            <p className="text-[36px] md:text-[64px] text-[#262626]">
              Transforme Sua Qualidade de Vida{" "}
              <span className="text-[#567A35]">com a Viver+</span>
            </p>
            <p className="text-[14px] md:text-[16px] text-[#717171] pt-[16px] pb-[32px]">
              Uma abordagem inovadora para alcançar o bem-estar que você merece.
              Vamos juntos explorar uma vida mais equilibrada e plena.
            </p>
          </div>
          <a className="flex items-center justify-center">
            <img
              className="h-[270px] md:h-[400px] w-[300px] md:w-[400px]"
              src={img}
              alt="img"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-[144px] py-[80px] space-y-9 bg-[#FDF5E6]">
          <div className="flex flex-col text-container">
            {" "}
            {/* Adicionando classe para controle de margem */}
            <p className="text-[36px] md:text-[64px] text-[#262626]">
              Entenda como sua equipe
              <span className="text-[#567A35]">
                {" "}
                se sente, com dados reais.
              </span>
            </p>
            <p className="text-[14px] md:text-[16px] text-[#717171] pt-[16px] pb-[32px]">
              Através de gráficos e indicadores de bem-estar e satisfação, é
              possível entender como se encontra sua equipe.
            </p>
          </div>
          <a className="flex items-center justify-center">
            <img
              className="h-[293px] md:h-[400px] w-[300px] md:w-[400px]"
              src={dashboarImg}
              alt="img"
            />
          </a>
        </div>
      </div>
      <div className="custom-last-slide">
        {" "}
        {/* Aplicando a classe customizada aqui */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[144px] py-[80px] space-y-9 bg-[#E0E0DE]">
          <div className="flex flex-col text-container">
            {" "}
            {/* Adicionando classe para controle de margem */}
            <p className="text-[36px] md:text-[64px] text-[#262626]">
              Torne-se aquilo que
              <span className="text-[#567A35]"> você se orgulha</span>
            </p>
            <p className="text-[14px] md:text-[16px] text-[#717171] pt-[16px] pb-[32px]">
              Através de autoavaliações, será possível criar uma rotina de
              bem-estar e satisfação que se encaixe perfeitamente em sua vida.
            </p>
          </div>
          <a className="flex items-center justify-center">
            <img
              className="h-[297px] md:h-[400px] w-[300px] md:w-[400px]"
              src={Projections}
              alt="img"
            />
          </a>
        </div>
      </div>
    </Carousel>
    <br />
  </>
);

export default Home;
