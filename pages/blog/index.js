import React, { useState, useEffect } from "react";
// import Namebar from "../../components/Namebar";
// import Blogbanner from "../../components/Blogbanner";
import { db } from "/firebase";
import { getDocs } from "firebase/firestore";
import { Banner } from "@/components/Banner";

const OtherPostComponent = () => {
  const [bloglist, setBloglist] = useState([]);

  useEffect(() => {
    const getBlogList = async () => {
      //READ THE DATABASE
      //SET BLOG LIST
      const data = await getDocs();
    };
  });
  return (
    <>
      <div className="bg-slate-700 h-10">
        <h3 className="card-title">Day and title</h3>
        <p className="card-text">date posted</p>
        <p className="card-text">
          Some quick example text which should be replaced with the short
          content of the card.
        </p>
        <a href="#" className="btn btn-primary">
          Continue reading...
        </a>
      </div>
    </>
  );
};

const index = () => {
  return (
    <>
      <div className="container mx-auto sm:px-4  grid max-w-7xl">
        <div className="bg-black text-white text-center p-11">
          <h3 className="mb-3"> title</h3>
        </div>
        {/* <Namebar /> */}

        <div className="flex flex-wrap ">
          {/* <Banner key={lastPost.id} latest={lastPost} /> */}
        </div>
        <div className="flex flex-wrap ">
          <div className="md:w-3/4 pr-4 pl-4">
            <h3>My first day learning react</h3>
            <hr></hr>
            <h5>Apr 28 2023</h5>
            <div>
              <p>This is first paragraph</p>
              <p>This is first paragraph</p>
              <p>This is first paragraph</p>
              <p>This is first paragraph</p>
              ive learned about:
              <ul>
                <li>es6</li>
                <li>components</li>
                <li>Destrocturing</li>
                <li>JSX</li>
                <li>Page Routing</li>
              </ul>
              <p>
                Ive used alot of google referencing and youtube videos for
                clarification and understanding
              </p>
              <hr></hr>
              <h4>
                Comments
                <p>Login to leave a comment</p>
              </h4>
              <div>
                <p>
                  <b>Username</b>
                </p>
                <p>date posted</p>
                <p>comment</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 pr-4 pl-4">
            <h3>Other Posts</h3>
            <hr></hr>
            {/* <OtherPostComponent />
            <OtherPostComponent />
            <OtherPostComponent /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
