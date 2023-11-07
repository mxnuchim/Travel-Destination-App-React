import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import SocialIcons from './components/social-icons/SocialIcons';
import './App.css';
import Button from './utils/Button';

const App = () => {
  return (
    <div className="relative">
      <div className=" w-full absolute top-0 left-0 z-[99999]">
        <Navbar />
      </div>

      <Slider />

      <div className="absolute bottom-[250px] right-[100px]">
        <SocialIcons />
      </div>

      <div className="absolute right-[100px] bottom-[130px] z-[100]">
        <Button />
      </div>
    </div>
  );
};

export default App;
