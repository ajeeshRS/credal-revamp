import { compatibleItems } from "@/utils/data";
import { montserrat } from "@/utils/font";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className={`${montserrat.className} w-full h-fit flex flex-col items-center justify-center py-10 px-10`}
    >
      <p className="md:text-4xl text-2xl font-bold text-center">
        Empower Your Team with <span className="text-green-500">Secure</span> AI
        Solutions
      </p>
      <p className="text-center md:w-3/6 w-full py-5 text-[#333333] md:text-base text-sm">
        Unlock your enterprise's potential with AI Assistants tailored to your
        people, data, and tools. Empower employees to create secure, compliant
        AI applications that protect and enhance your organization's data.
      </p>
      <div className="w-full flex md:flex-row flex-col gap-2 items-center justify-center py-5">
        <p className="px-1 text-sm">Compatible with</p>
        <div className="flex items-center">
          {compatibleItems.map((item, i) => (
            <div className="mx-1" key={i}>
              <Image
                src={item}
                alt="icons"
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
          <p className="px-1 text-sm">+ more</p>
        </div>
      </div>
    </div>
  );
}
