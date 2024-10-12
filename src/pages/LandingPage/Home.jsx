import img from "../../assets/imgDesktop.svg";
import Button from "../../components/Button.jsx";
import { Carousel } from "antd";

const Home = () => (
  <>
    <style>
      {`
        .ant-carousel .slick-next{
        color:black ;
        }
        .ant-carousel .slick-prev{
        color:black ;
        }
        .ant-carousel .slick-dots li.slick-active button{
        background: #000000;
        }
        .ant-carousel .slick-dots li button{
        background: #000000;
        }
      `}
    </style>

    <Carousel arrows infinite={true} autoplay autoplaySpeed={7000} draggable swipeToSlide>
      <div>
        <div className="flex justify-between items-center px-[144px] py-[96px] space-x-4 space-y-9 bg-[#F5F7FA]">
          <div className="flex flex-col">
            <div>
              <p className="text-[64px] text-[#4D4D4D]">
                Lessons and insights{" "}
                <p className="text-[#4CAF4F]">from 8 years</p>
              </p>
              <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <div>
              <Button
                buttonText="Register"
                typeButton="primary"
                href="/register"
                style={{ backgroundColor: "#4CAF4F", color: "#FFFFFF" }}
              />
            </div>
          </div>
          <a className="flex items-center">
            <img src={img} alt="img" />
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center px-[144px] py-[96px] space-x-4 space-y-9 bg-[#F5F7FA]">
          <div className="flex flex-col">
            <div>
              <p className="text-[64px] text-[#4D4D4D]">
                Lessons and insights{" "}
                <p className="text-[#4CAF4F]">from 8 years</p>
              </p>
              <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <div>
              <Button
                buttonText="Register"
                typeButton="primary"
                href="/register"
                style={{ backgroundColor: "#4CAF4F", color: "#FFFFFF" }}
              />
            </div>
          </div>
          <a className="flex items-center">
            <img src={img} alt="img" />
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center px-[144px] py-[96px] space-x-4 space-y-9 bg-[#F5F7FA]">
          <div className="flex flex-col">
            <div>
              <p className="text-[64px] text-[#4D4D4D]">
                Lessons and insights{" "}
                <p className="text-[#4CAF4F]">from 8 years</p>
              </p>
              <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <div>
              <Button
                buttonText="Register"
                typeButton="primary"
                href="/register"
                style={{ backgroundColor: "#4CAF4F", color: "#FFFFFF" }}
              />
            </div>
          </div>
          <a className="flex items-center">
            <img src={img} alt="img" />
          </a>
        </div>
      </div>
    </Carousel>
    <br />
  </>
);

export default Home;