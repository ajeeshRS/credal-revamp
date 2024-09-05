import { montserrat } from "@/utils/font";

export default function GetStarted() {
  return (
    <div
      className={`${montserrat.className} w-full h-fit md:px-20 px-4 py-5 flex flex-col items-center`}
    >
      <p className="font-semibold md:text-3xl text-xl text-center px-5 md:px-20 py-4 ">
        Building blocks towards <span className="text-green-500">secure</span>{" "}
        AI apps
      </p>
      <p className="text-center md:w-3/6 w-5/6 py-2">
        Credal gives you everything you need to supercharge your business using
        generative AI, securely.
      </p>
      <div className="flex md:flex-row flex-col items-center py-10">
        <p className="md:py-0 py-3">Ready to dive deep ?</p>{" "}
        <button className="py-2 px-3 bg-green-500 hover:bg-green-600 transition-all duration-200 ease-in-out text-white rounded-full mx-3 text-sm">
          Get started
        </button>
      </div>
    </div>
  );
}
