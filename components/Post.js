import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const Post = ({ post }) => {
  return (
    <div className="cursor-pointer border border-gray-200 hover:bg-gray-100  blrs ">
      <h1 className="text-center justify-center items-center font-mono uppercase text-xl">
        {post.day}
      </h1>
      {/* Image */}
      <div className=" flex w-auto p-3 ">
        {/* Title */}
        {/* <img
          src={post.userImg}
          alt="user-image"
          className="h-11 w-11 rounded-full mr-4 flex-none"
        /> */}
        {/* Right side */}
        <div className="flex-1">
          {/* Header */}

          <div className="flex  ">
            {/* Post User info */}
            <div
              style={{
                backgroundImage: `url(${post.img})`,
              }}
              className="relative hover:brightness-60  font-serif  text-center justify-center items-center text-white h-44 rounded-2xl w-full bg-center bg-cover "
            >
              <h4 className=" justify-center">{post.name}</h4>
              <p>{post.username}</p>
            </div>
          </div>
          {/* dot icon */}
          {/* <EllipsisHorizontalIcon className="h-10 w-10 hover:text-blue-500 hoverEffect" /> */}

          {/* Post text */}
          <p className="bg-gray-100">{post.text}</p>

          {/* Post Image */}

          {/* icons */}
          <div className="flex justify-between text-gray-500 p-2">
            <ChatBubbleBottomCenterTextIcon className="h-9 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
            <TrashIcon className="h-9 p-2 hoverEffect hover:text-red-500 hover:bg-red-100" />
            <HeartIcon className="h-9 p-2 hoverEffect hover:text-red-500 hover:bg-red-100" />
            <ShareIcon className="h-9 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
            <div className="flex">
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
