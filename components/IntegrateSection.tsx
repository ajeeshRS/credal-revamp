import { montserrat } from "@/utils/font";
import { Check } from "lucide-react";
import Image from "next/image";
import integrateSecIcon from "../public/integrate-section/integrate-sec.svg";
import dataConnectorsImg from "../public/integrate-section/data-connectors.svg";
import customDataConnectersImg from "../public/integrate-section/custom-data-connectors.svg";

export default function IntegrateSection() {
  return (
<div
        className={`${montserrat.className} w-full h-fit md:px-20 px-4 py-5 flex flex-col items-center`}
      >
        <Image
          src={integrateSecIcon}
          alt="integrate-sec-icon"
          className="my-5"
        />
        <p className="font-semibold md:text-3xl text-xl text-center md:px-0 px-5 py-4">
          Connect your company's data securely
        </p>
        <p className="text-center md:text-base text-sm">
          Point & click integration makes it easy to get started
        </p>
        <div className="w-full h-full flex md:flex-row flex-col my-6 border rounded-xl">
          <div className="md:w-2/4 w-full h-full">
            <Image
              src={dataConnectorsImg}
              alt="data-connector-img"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:w-2/4 w-full h-6/6 flex flex-col justify-center items-start md:p-10 p-5">
            <p className="font-semibold text-lg">Pre-built data connectors</p>
            <p className="py-3">
              Connect Credal with Slack, GSuite, Notion, Microsoft, Salesforce,
              Confluence, and more - instantly
            </p>
            <ul>
              <li className="flex items-center md:text-base text-sm py-1">
                <Check className="w-4 h-4 mr-2" /> Sync permissions from source
                systems
              </li>
              <i className="flex items-center md:text-base text-sm py-1">
                <Check className="w-4 h-4 mr-2" /> Fully configurable (cloud vs.
                on prem, etc.)
              </i>
              <li className="flex items-center md:text-base text-sm py-1">
                <Check className="w-4 h-4 mr-2" /> Enterprise RAG, search, &
                chat functionality on day 1
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full flex md:flex-row flex-col-reverse my-6 border rounded-xl">
          <div className="md:w-2/4 w-full h-6/6 flex flex-col justify-center items-start md:p-10 p-5">
            <p className="font-semibold text-lg">Custom data connectors</p>
            <p className="py-3">
              Many enterprises have custom or proprietary data sources they want
              to connect LLMs to. Credal solves this.
            </p>
            <ul>
              <li className="flex items-center md:text-base text-sm">
                <Check className="w-4 h-4 mr-2" /> Real-time sync, including
                permissioning
              </li>
              <i className="flex items-center md:text-base text-sm">
                <Check className="w-4 h-4 mr-2" /> Supports all common file
                functions (JSON, XML, CSV...)
              </i>
              <li className="flex items-center md:text-base text-sm">
                <Check className="w-4 h-4 mr-2" /> Manage ETL pipelines,
                scheduling, and config in our UI
              </li>
            </ul>
          </div>
          <div className="md:w-2/4 w-full h-full">
            <Image
              src={customDataConnectersImg}
              alt="data-connector-img"
              className="w-full h-full object-contain rotate-180"
            />
          </div>
        </div>
      </div>  )
}
