import { montserrat } from "@/utils/font";
import Image from "next/image";
import searchSecIcon from "../public/search-section/search.svg";
import searchSecImg from "../public/search-section/search-sec.svg";
import { searchSecTicks } from "@/utils/data";

export default function SearchSection() {
  return (
    <div
      className={`${montserrat.className} w-full h-fit md:px-0 py-5 flex flex-col items-center`}
    >
      <Image src={searchSecIcon} alt="search-sec-icon" className="my-5" />
      <p className="font-semibold md:text-3xl text-xl text-center px-5 md:px-20 py-4 ">
        The only end-to-end enterprise RAG platform
      </p>
      <p className="text-center md:w-3/6 w-5/6 py-2 md:text-base text-sm">
        Credal is the fastest way to build secure, access-controlled Retrieval
        Augmented Generation (RAG) applications on top of your data. Supports
        semantic, keyword, or hybrid search.
      </p>
      <div className="flex md:flex-row flex-col items-start w-5/6 h-fit py-5 md:px-20 px-0">
        {searchSecTicks.map((tick, i) => (
          <p
            key={i}
            className="flex h-full w-full items-center italic justify-start bg-[#e8e8e8] p-3 rounded-xl m-2"
          >
            {tick}
          </p>
        ))}
      </div>
      <div className="w-full h-fit py-5">
        <Image
          src={searchSecImg}
          alt="search-sec-img"
          className="w-full md:h-fit h-[200px] object-cover"
        />
      </div>
    </div>
  );
}
