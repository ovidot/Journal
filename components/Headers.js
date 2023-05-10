export const Headers = ({ latest }) => {
  return (
    <div className="text-4xl font-serif items-center justify-center ml-28 mr-28 first-letter:font-extrabold tracking-widest ">
      Welcome to your Journal {latest.name}
    </div>
  );
};
