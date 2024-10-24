import Button from "../../components/Button.jsx";
import Mobile from "../../assets/Mobile.svg";

const Calendar = () => {
  return (
    <div className="flex flex-row items-center justify-center py-[48px] px-[144px]">
      <div className="flex flex-col w-[601px] pr-[50px]">
        <p className="text-[36px] text-[#4D4D4D] pb-[16 px]">
          How to design your site footer like <p>we did</p>
        </p>
        <p className="text-[14px] text-[#717171] pb-[32px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button
          buttonText="Learn More"
          typeButton="primary"
          style={{ color: "#FFFFFF", backgroundColor: "#4CAF4F" }}
          href="/"
        />
      </div>
      <div className="pl-[50px] pr-[60px]">
        <img src={Mobile} alt="Mobile" />
      </div>
    </div>
  );
};

export default Calendar;
