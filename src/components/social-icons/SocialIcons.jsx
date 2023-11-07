import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center gap-[14px] text-white">
      <div className="flex flex-col gap-[20px] text-[20px] ">
        <FaTwitter />
        <IoLogoYoutube />
        <FaFacebookF />
      </div>
      <div className="w-[2px] h-[91px] bg-white" />
      <p className="verticleText text-[20px] font-Poppins font-medium uppercase">
        Follow Us
      </p>
    </div>
  );
};

export default SocialIcons;