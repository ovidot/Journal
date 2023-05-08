import { SparklesIcon } from "@heroicons/react/24/outline";

export const Feed = () => {
  return (
    <div className="xl:ml-[370px] text-black border-gray-200 border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className=" hoverEffect flex item-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
    </div>
  );
};