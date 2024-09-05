import { montserrat } from "@/utils/font";
import Image from "next/image";
import secureSecIcon from "../public/secure-section/secure-sec-img.svg";
import { secureFeatures, secureSecData } from "@/utils/data";
import { Check } from "lucide-react";

export default function SecureSection() {
  return (
    <div
      className={`${montserrat.className} w-full h-fit md:px-14 px-4 py-10 flex flex-col items-center bg-[#212427] text-[#ffff]`}
    >
      <Image src={secureSecIcon} alt="integrate-sec-icon" className="my-5" />
      <p className="font-semibold md:text-3xl text-xl text-center md:px-0 px-5 py-4">
        Deploy generative AI with full security and compliance
      </p>
      <p className="text-center md:text-base text-sm">
        Credal makes it easy to inherit and sync permissions, audit data access,
        and safeguard PII from touching models.
      </p>
      <div className="w-full h-full flex flex-col items-center justify-center my-10">
        {secureSecData.map((data, i) => (
          <div
            key={i}
            className="w-full h-full flex md:flex-row flex-col my-6 border bg-white text-black rounded-xl"
          >
            <div className="md:w-2/6 w-full h-full">
              <Image
                src={data.img}
                alt="secure-sec-img"
                className="w-full h-full object-cover md:rounded-l-xl rounded-t-xl"
              />
            </div>
            <div className="md:w-2/4 w-full h-6/6 flex flex-col justify-center items-start md:p-10 p-5">
              <p className="font-semibold text-lg">{data.title} </p>
              <p className="py-3">{data.desc}</p>
              <ul>
                {data.ticks.map((tick, i) => (
                  <li
                    key={i}
                    className="flex items-center md:py-0 py-1 md:text-base text-sm"
                  >
                    <Check className="w-4 h-4 mr-2" /> {tick}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center">
        {secureFeatures.map((feature, i) => (
          <div
            key={i}
            className="relative flex flex-col mt-6 text-white bg-[#181818] shadow-md bg-clip-border rounded-xl md:w-96 w-full md:mx-3 mx-0"
          >
            <div className="p-6">
              <Image src={feature.icon} alt="feature-icon" className="my-2" />
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold pt-2 leading-snug tracking-normal text-blue-gray-900">
                {feature.title}{" "}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
