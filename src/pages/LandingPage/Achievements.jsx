import { UserOutlined } from "@ant-design/icons";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="flex flex-col items-center py-16 px-4 sm:px-10 lg:px-24"
    >
      <div className="text-center mb-8">
        <p className="text-3xl text-[#4D4D4D] mb-2">
          Ajudando você a alcançar o
          <span className="text-[#4CAF4F]"> bem-estar que merece</span>
        </p>
        <p className="text-lg text-[#18191F] max-w-xl mx-auto">
          Juntos, estamos construindo um caminho de autoconhecimento e
          satisfação.
        </p>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-center">
        <div className="flex flex-col items-center md:mr-10">
          <UserOutlined
            className="text-[#4CAF4F] mb-2"
            style={{ fontSize: 40 }}
          />
          <p className="text-2xl text-[#4D4D4D]">1,234,567</p>
          <p className="text-sm text-[#717171]">Usuários Satisfeitos</p>
        </div>

        <div className="flex flex-col items-center md:mr-10">
          <UserOutlined
            className="text-[#4CAF4F] mb-2"
            style={{ fontSize: 40 }}
          />
          <p className="text-2xl text-[#4D4D4D]">12,345</p>
          <p className="text-sm text-[#717171]">Sessões de Acompanhamento</p>
        </div>

        <div className="flex flex-col items-center md:mr-10">
          <UserOutlined
            className="text-[#4CAF4F] mb-2"
            style={{ fontSize: 40 }}
          />
          <p className="text-2xl text-[#4D4D4D]">567,890</p>
          <p className="text-sm text-[#717171]">Relatórios Personalizados</p>
        </div>

        <div className="flex flex-col items-center">
          <UserOutlined
            className="text-[#4CAF4F] mb-2"
            style={{ fontSize: 40 }}
          />
          <p className="text-2xl text-[#4D4D4D]">2,345,678</p>
          <p className="text-sm text-[#717171]">Interações Positivas</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
