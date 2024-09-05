import { montserrat } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import codeSecIcon from "../public/code-section/code.svg";
import codeSecImg from "../public/code-section/code-sec-img.png";
import { codeFeatures } from "@/utils/data";

export default function CodeSection() {
  return (
    <div
      className={`${montserrat.className} w-full h-fit md:px-14 px-4 py-10 flex flex-col items-center bg-[#212427] text-[#ffff]`}
    >
      <Image src={codeSecIcon} alt="integrate-sec-icon" className="my-5" />
      <p className="font-semibold md:text-3xl text-xl text-center md:px-0 px-5 py-4">
        Build AI-powered applications using our flexible API
      </p>
      <p className="text-center md:text-base text-sm">
        Credal’s simple REST API enables developers to build and deploy apps
        seamlessly. Discover our{" "}
        <Link href={"/"} className="text-green-500 hover:underline">
          documentation
        </Link>
        .
      </p>
      <div className="py-10 w-5/6 ">
        <Image src={codeSecImg} alt="code-sec-img" className="rounded-xl" />
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center">
        {codeFeatures.map((feature, i) => (
          <div
            key={i}
            className="relative flex flex-col mt-6 text-white bg-[#181818] shadow-md bg-clip-border rounded-xl md:w-96 w-full md:mx-3 mx-0"
          >
            <div className="p-6 flex items-center flex-col">
              <Image src={feature.icon} alt="feature-icon" className="my-2" />
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold pt-2 leading-snug tracking-normal text-blue-gray-900 text-center">
                {feature.title}{" "}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-center">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
