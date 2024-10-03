import logo from '../assets/logo.jpeg';
import Button from './Button.jsx';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#F5F7FA]">
      <div className="flex">
        <a href="/">
          <img src={logo} alt="Logo" className="h-20" />
        </a>
      </div>
      <div className='flex space-x-4'>
        <Button 
          buttonText="Login" 
          typeButton="text" 
          href="/login"/>
        <Button 
          buttonText="Sign Up" 
          typeButton="primary" 
          href="/register"
          style={{ backgroundColor: '#4CAF4F', color: '#FFFFFF' }}
        />
      </div>
    </div>
  );
};

export default Header;
