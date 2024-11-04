import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <div className="bg-gray-800 text-white w-full py-8">
      <div className="flex justify-center items-center space-x-6 text-3xl md:text-4xl mb-6">
        <a href=" " className="text-[#3b5999] transition-transform transform hover:scale-110">
          <FaFacebook />
        </a>
        <a href=" " className="text-[#e4405f] transition-transform transform hover:scale-110">
          <FaInstagram />
        </a>
        <a href=" " className="text-[#cd201f] transition-transform transform hover:scale-110">
          <FaYoutube />
        </a>
        <a href=" " className="text-[#55acee] transition-transform transform hover:scale-110">
          <FaSquareXTwitter />
        </a>
        <a href=" " className="text-[#0077b5] transition-transform transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href=" " className="text-orange-900 transition-transform transform hover:scale-110">
          <SiGmail />
        </a>
      </div>

      <div className="flex justify-center italic items-center font-bold text-emerald-500 text-3xl md:text-4xl mb-4">
        —͟͞͞★Kissu  —͟͞͞★
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 p-3">
        <a href="/about" className="underline hover:text-emerald-400">About Us</a>
        <a href="/contact" className="underline hover:text-emerald-400">Contact Us</a>
        <a href=" " className="underline hover:text-emerald-400">Manage Cookies</a>
        <a href="/policy" className="underline hover:text-emerald-400">Return & Refund Policy</a>
        <a href="/terms&condition" className="underline hover:text-emerald-400">Terms and Conditions</a>
      </div>

      <div className="flex justify-center items-center italic text-sm md:text-base p-3 mt-5">
        <i>Copyright ©️ 2024 Kissu </i>
      </div>
    </div>
  );
}

export default Footer;
