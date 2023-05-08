import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";

export const Banner = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://www.adscientificindex.com/pictures/71/1349464.jpg"
        alt="user-image"
        className="h-11 w-11 cursor-pointer rounded-full xl:mr-2 brightness-90"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows={2}
            placeholder="Whats Hapening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex ">
            <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-90 disabled:opacity-50 "
            disabled
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};