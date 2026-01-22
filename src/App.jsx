import "./App.css";
import logo from "../images/logo.svg";
import illustration from "../images/illustration-mockups.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function App() {
  return (
    <div className="min-h-screen w-full bg-[url('../images/bg-mobile.svg')] lg:bg-[url('../images/bg-desktop.svg')] 
    bg-no-repeat bg-left-top bg-contain custom-bg  px-8 py-6 lg:px-8">

      <header className="lg:px-16 pt-4 mb-12 ">
        <img className="w-[135px] sm:w-[160px] lg:w-[220px]" src={logo} alt="Logo" />
      </header>
        
  <div className="w-full max-w-screen-[1440px] mx-auto"> 
  <div className="flex flex-col lg:flex-row gap-6 text-white lg:gap-10
                  items-center lg:items-start
                  text-center lg:text-left ">

    {/* illustration */}
    <img 
      src={illustration}
      alt="illustrations"
      className="
      w-full
    max-w-[320px]
    sm:max-w-[420px]
    md:max-w-[560px]
    lg:flex-1
    lg:max-w-[830px]
    lg:ml-14
    lg:mt-14
      "
    />

    {/* text */}
    <div className="space-y-6 lg:max-w-[520px] mt-12 lg:mt-26">
      <p className="text-2xl lg:text-4xl poppins-semibold">
        Build The Community Your Fans Will Love
      </p>

      <p className="text-[15.2px] lg:text-lg poppins-light">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you
        engage in genuine discussion.
      </p>

      <button className="bg-white text-[12px] text-[#6B4DB8] py-3 w-[200px]
        rounded-full poppins-regular shadow-[0_8px_8px_rgba(0,0,0,0.25)] 
        cursor-pointer transition hover:bg-[#E882E8] hover:text-white lg:text-lg">
        Register
      </button>
    </div>

  </div>
</div>

     {/* Footer */}
      <footer className="flex justify-center gap-4 mt-18 lg:justify-end lg:mt-15">
          <a href="#" 
              className="text-[16px] text-white social-icon border border-white rounded-full p-1 cursor-pointer 
              hover:text-[#E879F9]
              hover:border-[#E879F9]
              transition duration-300
              lg:text-[18px] lg:p-2">
            <FaFacebookF />
          </a>
          <a href="#" className="text-[16px] text-white social-icon border border-white rounded-full p-1 cursor-pointer 
              hover:text-[#E879F9]
              hover:border-[#E879F9]
              transition duration-300
              lg:text-[18px] lg:p-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-[16px] text-white social-icon border border-white rounded-full p-1 cursor-pointer 
              hover:text-[#E879F9]
              hover:border-[#E879F9]
              transition duration-300
              lg:text-[18px] lg:p-2">
            <FaInstagram />
          </a>
      </footer>

    </div>
  );
}

export default App;
