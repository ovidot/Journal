import { getProviders, signIn } from "next-auth/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "/firebase";
const handleSubmit = (e) => {
  //   if (user.name && user.password ){
  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(auth, user.email, user.password)
  //     .then((userCredental) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ....
  //       const newUserInfo.
  //     })
  //   }
};

const signin = ({ providers }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex justify-center mt-20 ">
      <>
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/14/20/11/1000_F_214201107_dneiBCFGKayS9T52kcCVt1Epv2jD6aJa.jpg"
              alt="journal image"
              className=" object-cover md:w-72 h-52"
            />
            <p className="text-center text-sm italic my-1">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className=" bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 mt-5"
            >
              Sign in with {provider.name}
            </button>
            {/* <form onSubmit={handleSubmit} className=" flex gap-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 rounded-xl"
                type="email"
                placeholder="Email"
              />
              <input
                className="mt-2 rounded-xl"
                type="password"
                placeholder="password"
                id="password"
              />
            </form>
            <p className="text-gray-700"> Demo</p>
            <p className="text-gray-700">demo@gmail.com password:demo</p> */}
            {/* <div className="flex gap-3">
              <button
                className="bg-red-400 rounded-lg p-3 text-black hover:bg-red-900 mt-1"
                type="submit"
              >
                Signin
              </button>
              <button
                className="bg-green-600 rounded-lg p-3 text-black hover:bg-green-900 mt-1"
                type="submit"
              >
                Signup
              </button>
            </div> */}
          </div>
        ))}
      </>
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
