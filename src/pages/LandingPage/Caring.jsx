/* eslint-disable react/no-unescaped-entities */
import person from "../../assets/person.svg";
import notebook from "../../assets/notebook.svg";
import notepad from "../../assets/notepad.svg";
import CardPage from "../../components/CardPage.jsx";

const Caring = () => {
  return (
    <div className="flex flex-col justify-center pt-[48px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[36px] text-[#4D4D4D] justify-center pb-[8px] items-center">
          Caring is the new marketing
        </p>
        <p className="text-[16px] text-[#717171] justify-center w-[628px] text-center pb-[16px]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>
      <div className="flex flex-col justify-center pt-[48px]">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <CardPage
            imageUrl={person}
            content="Who's joining the community?"
            buttonText="Learn More"
            typeButton="text"
            hrefButton="/"
          />
          <CardPage
            imageUrl={notebook}
            content="Who's joining the community?"
            buttonText="Learn More"
            typeButton="text"
            hrefButton="/"
          />
          <CardPage
            imageUrl={notepad}
            content="Who's joining the community?"
            buttonText="Learn More"
            typeButton="text"
            hrefButton="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Caring;
