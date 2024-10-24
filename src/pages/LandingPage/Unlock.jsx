import UnlockImg from "../../assets/Unlock.svg";
import Button from "../../components/Button.jsx";

const Unlock = () => {
  return (
    <div className="flex flex-row items-center justify-center px-[144px]">
      <img src={UnlockImg} alt="Unlock" />
      <div className="flex flex-col w-[661px] pe-[49px]">
        <p className="text-[36px] text-[#4D4D4D] pb-[16px]">
          The unseen of spending three<p>years at Pixelgrade</p>
        </p>
        <p className="text-[14px] text-[#717171] pb-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button
          buttonText="Learn More"
          typeButton="primary"
          style={{ color: "#FFFFFF", backgroundColor: "#4CAF4F" }}
          href="/"
        />
      </div>
    </div>
  );
};

export default Unlock;
