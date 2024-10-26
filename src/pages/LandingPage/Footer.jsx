import Button from "../../components/Button.jsx";
import logo from "../../assets/logo.png";
import {
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SendOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <div className="flex flex-col justify-center items-center bg-[#F2E8CF] w-full py-16">
        <div className="flex justify-center items-center px-4 py-2 bg-[#F2E8CF]">
          <p className="text-3xl md:text-5xl text-[#262626] text-center pb-8">
            Se você deseja se alcançar{" "}
            <span className="block">caminhe conosco</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Button
            buttonText="Registrar para Usuários"
            typeButton="primary"
            onClick={() => (window.location.href = "/registerUser")}
            style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
          />
          <Button
            buttonText="Registrar para Empresas"
            typeButton="primary"
            onClick={() => (window.location.href = "/registerCompany")}
            style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
          />
        </div>
      </div>

      {/* Rodapé */}
      <div className="flex flex-col items-center bg-[#C9D9A7] w-full px-4 md:px-32 py-16">
        <div className="flex flex-col items-center mb-8">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 mb-4" />
          </a>
          <p className="text-sm md:text-base text-[#262626] text-center">
            Copyright © 2024 Hackaton. <span>All rights reserved.</span>
          </p>
          <div className="flex pt-4 space-x-4">
            <InstagramOutlined style={{ fontSize: 32, color: "#262626" }} />
            <TwitterOutlined style={{ fontSize: 32, color: "#262626" }} />
            <YoutubeOutlined style={{ fontSize: 32, color: "#262626" }} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-16 mb-8">
          <div className="flex flex-col items-center">
            <p className="text-lg text-[#262626]">Company</p>
            <div className="flex flex-col pt-4 items-center">
              <p className="text-sm text-[#262626] pb-2">About us</p>
              <p className="text-sm text-[#262626] pb-2">Blog</p>
              <p className="text-sm text-[#262626] pb-2">Contact us</p>
              <p className="text-sm text-[#262626] pb-2">Pricing</p>
              <p className="text-sm text-[#262626] pb-2">Testimonials</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-lg text-[#262626]">Support</p>
            <div className="flex flex-col pt-4 items-center">
              <p className="text-sm text-[#262626] pb-2">Help center</p>
              <p className="text-sm text-[#262626] pb-2">Terms of service</p>
              <p className="text-sm text-[#262626] pb-2">Legal</p>
              <p className="text-sm text-[#262626] pb-2">Privacy policy</p>
              <p className="text-sm text-[#262626] pb-2">Status</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <p className="text-lg text-[#262626] pb-4">Stay up to date</p>
          <div className="flex items-center w-full max-w-[270px] h-[40px] bg-[#566573] rounded p-2">
            <p className="text-xs text-[#D9DBE1]">Your email address</p>
            <SendOutlined style={{ fontSize: 18, color: "#D9DBE1" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
