import Unlock from "../../assets/Unlock.svg"
import Button from "../../components/Button.jsx"
import { UserOutlined } from '@ant-design/icons';
import Mobile from "../../assets/Mobile.svg"
import Desktop from "../../assets/Desktop.jpg"
import imgSponsors from '../../assets/SponsorsTemp.jpg'

const BodyPage = () => {
  return (
    
    <div> 
        {/* Parte do Unlock */}
        <div className="flex flex-row items-center justify-center px-[144px]">
            <img src={Unlock} alt="Unlock"/>
            <div className="flex flex-col w-[661px] pe-[49px]">
                <p className="text-[36px] text-[#4D4D4D] pb-[16px]">The unseen of spending three<p>years at Pixelgrade</p></p>
                <p className="text-[14px] text-[#717171] pb-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <Button 
                    buttonText="Learn More" 
                    typeButton="primary" 
                    style={{color: '#FFFFFF', backgroundColor: '#4CAF4F'}}
                    href="/"/>
            </div>
        </div>
        {/* Parte do Achievements */}
        <div className="flex flex-row items-center justify-center py-[64px] px-[144px]">
            <div className="flex flex-col pr-[450px]">
                <p className="text-[36px] text-[#4D4D4D] pb-[8 px]">Helping a local <p className="text-[#4CAF4F]">business reinvent itself</p></p>
                <p className="text-[16px] text-[#18191F] ">We reached here with our hard work and dedication</p>
            </div>
            <div>
                <div className="flex ">
                    <div className="flex flex-row pb-[40px]">
                        <UserOutlined className="text-[#4CAF4F] pr-[16px]" style={{ fontSize: 40 }}/>
                        <p className="text-[28px] text-[#4D4D4D] pr-[100px]">2,245,341<p className="text-[16px] text-[#717171]">Members</p></p>
                        <UserOutlined className="text-[#4CAF4F] pr-[16px]" style={{ fontSize: 40 }}/>
                        <p className="text-[28px] text-[#4D4D4D] pr-[100px]">46,328<p className="text-[16px] text-[#717171]">Clubs</p></p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <UserOutlined className="text-[#4CAF4F] pr-[16px]" style={{ fontSize: 40 }}/>
                        <p className="text-[28px] text-[#4D4D4D] pr-[100px]">828,867<p className="text-[16px] text-[#717171]">Event Bookings</p></p>
                        <UserOutlined className="text-[#4CAF4F] pr-[16px]" style={{ fontSize: 40 }}/>
                        <p className="text-[28px] text-[#4D4D4D] pr-[100px]">1,926,436<p className="text-[16px] text-[#717171]">Payments</p></p>
                    </div>
                </div>
            </div>
        </div>
        {/* Parte do Calendar */}
        <div className="flex flex-row items-center justify-center py-[48px] px-[144px]">
            <div className="flex flex-col w-[601px] pr-[50px]">
                <p className="text-[36px] text-[#4D4D4D] pb-[16 px]">How to design your site footer like <p>we did</p></p>
                <p className="text-[14px] text-[#717171] pb-[32px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <Button
                    buttonText="Learn More" 
                    typeButton="primary" 
                    style={{color: '#FFFFFF', backgroundColor: '#4CAF4F'}}
                    href="/"/>
            </div>
            <div className="pl-[50px] pr-[60px]">
                <img src={Mobile} alt="Mobile"/>
            </div>
        </div>
        {/* Parte de Customer */}
        <div className="flex flex-row justify-center items-center bg-[#F5F7FA] py-[48px] px-[144px]">
            <div className="flex flex-row w-{200px}">
             <img className="object-cover" src={Desktop} alt="Desktop"/>
            </div>
            <div className="flex flex-col w-{200px} h-{244px}">
                <p className="text-[16px] text-[#4D4D4D] pb-[16 px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className="text-[20px] text-[#4CAF4F] pb-[8px]">Tim Smith</p>
                <p className="text-[16px] text-[#89939E]">British Dragon Boat Racing Association</p>
                <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
                    <img src={imgSponsors} alt="Sponsors" />
                    <img src={imgSponsors} alt="Sponsors" />
                    <img src={imgSponsors} alt="Sponsors" />
                    <img src={imgSponsors} alt="Sponsors" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default BodyPage