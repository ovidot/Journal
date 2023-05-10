export const Banner = ({ latest }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${latest.img})`,
      }}
      className=" sticky bg-cover bg-center h-[10%] w-full min-h-[20%]  lg:max-h-[20px] rounded-md justify-center items-center hoverEffect hover:brightness-50  "
    >
      <div className=" my-2  w-full text-white inset-0 z-50 justify-center items-center ">
        <h1 className=" text-xl ">{latest.name}</h1>
        <h1 className=" text-xl ">{latest.text}</h1>
        <h1 className=" ">{latest.timestamp}</h1>
      </div>
    </div>
  );
};
