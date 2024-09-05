import { featuredInList, trustedPartnersList } from "@/utils/data";
import { montserrat } from "@/utils/font";
import Image from "next/image";

export default function TrustedAndFeatured() {
  return (
    <div>
      <div
        className={`${montserrat.className} w-full h-fit md:px-20 px-4 py-5 flex flex-col items-center`}
      >
        <p className="font-semibold md:text-3xl text-xl text-center md:px-0 px-5">
          Trusted by large enterprises and scaling startups
        </p>
        <div className="md:w-3/6 w-5/6 grid  grid-cols-3 gap-3 items-center justify-center my-10">
          {trustedPartnersList.map((logo, i) => (
            <div key={i}>
              <Image
                src={logo}
                alt="logo"
                className="w-28 h-24 object-contain mx-auto bg-white border px-2 my-3  rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${montserrat.className} w-full h-fit md:px-20 px-4 py-5 flex flex-col items-center`}
      >
        <p className="font-semibold md:text-3xl text-xl text-center md:px-0 px-5">
          Featured In
        </p>
        <div className="md:w-3/6 w-5/6 grid grid-cols-3  gap-3 items-center justify-center my-10">
          {featuredInList.map((logo, i) => (
            <div key={i}>
              <Image
                src={logo}
                alt="logo"
                className={`w-28 h-24 object-contain mx-auto bg-white border px-2 my-3  rounded-xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
