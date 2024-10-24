import { UserOutlined } from "@ant-design/icons";

const Achievements = () => {
  return (
    <div className="flex flex-row items-center justify-center py-[64px] px-[144px]">
        <div className="flex flex-col pr-[450px]">
        <p className="text-[36px] text-[#4D4D4D] pb-[8 px]">
            Helping a local{" "}
            <p className="text-[#4CAF4F]">business reinvent itself</p>
        </p>
        <p className="text-[16px] text-[#18191F] ">
            We reached here with our hard work and dedication
        </p>
        </div>
        <div>
        <div className="flex ">
            <div className="flex flex-row pb-[40px]">
            <UserOutlined
                className="text-[#4CAF4F] pr-[16px]"
                style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px]">
                2,245,341<p className="text-[16px] text-[#717171]">Members</p>
            </p>
            <UserOutlined
                className="text-[#4CAF4F] pr-[16px]"
                style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px]">
                46,328<p className="text-[16px] text-[#717171]">Clubs</p>
            </p>
            </div>
        </div>
        <div>
            <div className="flex flex-row">
            <UserOutlined
                className="text-[#4CAF4F] pr-[16px]"
                style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px]">
                828,867
                <p className="text-[16px] text-[#717171]">Event Bookings</p>
            </p>
            <UserOutlined
                className="text-[#4CAF4F] pr-[16px]"
                style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px]">
                1,926,436<p className="text-[16px] text-[#717171]">Payments</p>
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Achievements
