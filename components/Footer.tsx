import Image from "next/image";
import credalLightLogo from "../public/credal-white.svg";
import XIcon from "../public/social-icons/xIcon.svg";
import IGIcon from "../public/social-icons/igIcon.svg";
import LinkedinIcon from "../public/social-icons/linkedinIcon.svg";

export default function Footer() {
  return (
    <footer className="w-full md:h-96 h-fit bg-[#1e1e1e] md:p-20 p-10 flex md:flex-row flex-col items-center">
      <div className="flex flex-col md:w-2/4 w-full">
        <Image
          src={credalLightLogo}
          alt="credal-logo"
          className="md:w-2/6 w-3/6"
        />
        <div className="flex items-center w-2/6 justify-start py-5">
          <Image
            src={XIcon}
            alt="X-icon"
            className="md:w-6 md:h-6  w-4 h-4 mx-2"
          />
          <Image
            src={IGIcon}
            alt="IG-icon"
            className="md:w-6 md:h-6 w-4 h-4 mx-2"
          />
          <Image
            src={LinkedinIcon}
            alt="Linkedin-icon"
            className="md:w-6 md:h-6 w-4 h-4 mx-2"
          />
        </div>
        <div className="flex flex-col text-[#c8c8c8] md:text-sm text-xs font-light ">
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Privacy Policy
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Terms of Service
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Limited Use Policy
          </p>
        </div>
      </div>
      <div className="md:w-2/4 w-full flex md:flex-row flex-col md:py-0 py-5 items-start justify-around  md:text-sm text-xs  font-light ">
        <div className="flex flex-col items-start text-[#c8c8c8]">
          <p className="font-semibold text-white">Use Cases</p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Secure Chat
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Security Questionnaires
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            API Gateway
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Customer Genie
          </p>
        </div>
        <div className="flex flex-col items-start text-[#c8c8c8] md:py-0 py-4">
          <p className="font-semibold text-white">Company</p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Team
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Careers
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Security
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Trust Page
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            System Status
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Referral Program
          </p>
        </div>
        <div className="flex flex-col items-start text-[#c8c8c8] md:py-0 py-4">
          <p className="font-semibold text-white">Resources</p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Documentation
          </p>
          <p className="py-2 hover:text-white transition-all duration-200 ease-in-out cursor-pointer w-fit">
            Blog
          </p>
        </div>
      </div>
    </footer>
  );
}
