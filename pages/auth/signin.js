import { getProviders, signIn } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <div className="flex justify-center mt-20 ">
      {/* <img
        src="https://as2.ftcdn.net/v2/jpg/02/14/20/11/1000_F_214201107_dneiBCFGKayS9T52kcCVt1Epv2jD6aJa.jpg"
        alt="journal image"
        className=" object-cover md:w-72 h-80"
      /> */}
      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src="https://as2.ftcdn.net/v2/jpg/02/14/20/11/1000_F_214201107_dneiBCFGKayS9T52kcCVt1Epv2jD6aJa.jpg"
              alt=""
            />
            <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className=" bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 "
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
