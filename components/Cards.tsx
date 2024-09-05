import { featureData } from "@/utils/data";
import { montserrat } from "@/utils/font";
import Image from "next/image";

export default function Cards() {
  return (
    <div
      className={`${montserrat.className} w-full h-fit flex  md:px-10 px-4 py-5 justify-center items-center`}
    >
      <div className="w-full h-fit md:px-20 px-5 py-10 flex flex-wrap justify-center md:gap-2 gap-5">
        {featureData.map((feature, i) => (
          <div
            key={i}
            className={`relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mx-auto`}
          >
            <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={feature.img}
                alt="card-image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <span>
                <Image src={feature.icon} alt="icon" className="w-fit" />
              </span>
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {feature.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
