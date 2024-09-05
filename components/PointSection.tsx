"use client";
import { useState } from "react";
import { montserrat, sourceCodePro } from "@/utils/font";
import Image from "next/image";
import pointSecIcon from "../public/point-section/point.svg";
import deployImg from "../public/point-section/point-sec-img2.svg";
import supportBotImg from "../public/point-section/point-sec-img3.svg";
import amlAssistantImg from "../public/point-section/point-sec-img4.svg";
import timeLineBotImg from "../public/point-section/point-sec-img5.svg";
import pickmodelImg from "../public/point-section/point-sec-img1.svg";

export default function PointSection() {
  const [ui, setUI] = useState("IT Support Bot");
  const uiTitles = ["IT Support Bot", "AML Assistant", "Incident Timeline Bot"];

  const handleChangeUI = () => {
    const currentUI = ui;
    const indexOfCurrentUI = uiTitles.indexOf(currentUI);
    if (indexOfCurrentUI === uiTitles.length - 1) {
      return setUI(uiTitles[0]);
    }
    setUI(uiTitles[indexOfCurrentUI + 1]);
  };
  return (
    <div
      className={`${montserrat.className} w-full h-fit md:px-0 flex flex-col items-center`}
    >
      <Image src={pointSecIcon} alt="search-sec-icon" className="my-0" />
      <p className="font-semibold md:text-3xl text-xl text-center px-5 md:px-20 py-4 ">
        Build AI tooling using Copilots
      </p>
      <p className="text-center md:w-3/6 w-5/6 py-2 md:text-base text-sm">
        Credal includes pre-built UI frameworks and low-code / no-code tooling.
        Implement workflows without developer support.
      </p>
      <div className="w-full flex md:flex-row flex-col items-center justify-between md:px-20 px-5 py-10">
        <Image src={pickmodelImg} alt="point-sec-img" />
        <p
          className={`${sourceCodePro.className} font-medium md:text-lg text-sm`}
        >
          PICK YOUR MODEL, DATA, AND PROMPT.
        </p>
      </div>
      <div className="w-full flex md:flex-row-reverse flex-col items-center justify-between md:px-20 px-5 py-10">
        <Image src={deployImg} alt="point-sec-img" />
        <p
          className={`${sourceCodePro.className} font-medium md:text-lg text-sm `}
        >
          DEPLOY YOUR COPILOT WHEREVER YOU WORK.
        </p>
      </div>
      <div className="w-full flex flex-col items-center md:px-20 px-6 py-10">
        <div className="flex md:flex-row flex-col items-center py-3">
          <p
            className={`${sourceCodePro.className} font-bold py-5 md:text-xl text-lg`}
          >
            CONFIGURE UI FOR YOUR COPILOTS
          </p>
          <button
            onClick={handleChangeUI}
            className="mx-5 md:my-0 my-2 bg-green-500 hover:bg-green-600 transition-all duration-200j ease-in-out text-white px-3 py-2 rounded-full text-sm"
          >
            Try different UI
          </button>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image
            src={
              ui === "IT Support Bot"
                ? supportBotImg
                : ui === "AML Assistant"
                ? amlAssistantImg
                : ui === "Incident Timeline Bot" && timeLineBotImg
            }
            alt="point-sec-img"
          />
          <p
            className={`${sourceCodePro.className} ${
              ui === "IT Support Bot"
                ? "text-[#6C46DE]"
                : ui === "AML Assistant"
                ? "text-[#B3014D]"
                : ui === "Incident Timeline Bot" && "text-[#0074D1]"
            } font-medium text-lg py-3 `}
          >
            {ui}
          </p>
        </div>
      </div>
    </div>
  );
}
