import img from '../assets/imgDesktop.svg'
import Button from './Button.jsx'
const Home = () => {
  return (
    <div className="flex justify-between items-center px-[144px] py-[96px] space-x-4 space-y-9 bg-[#F5F7FA]">
      <div className="flex flex-col">
        <div>
          <p className="text-[64px] text-[#4D4D4D]">
              Lessons and insights <p className="text-[#4CAF4F]">from 8 years</p>
          </p>
          <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">Where to grow your business as a photographer: site or social media?</p>
        </div>
        <div>
          <Button
            buttonText="Register"
            typeButton="primary"
            href="/register"
            style={{ backgroundColor: '#4CAF4F', color: '#FFFFFF' }}
          />
        </div>
      </div>
      <a className="flex items-center">
        <img src={img} alt="img" />
      </a>
    </div>
  )
}

export default Home;
