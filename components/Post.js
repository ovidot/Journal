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
    <div className=" flex w-auto p-3 mr-2 cursor-pointer border border-gray-500">
      {/* Image */}
      <img
        src={post.userImg}
        alt="user-image"
        className="h-11 w-11 rounded-full mr-4 flex-none"
      />
      {/* Right side */}
      <div className="flex-1">
        {/* Header */}

        <div className="flex ">
          {/* Post User info */}
          <div
            style={{
              backgroundImage: `url(${post.img})`,
              width: "screen",
            }}
            className="font-serif text-white h-44 rounded-3xl w-full bg-center bg-cover "
          >
            <h4>{post.name}</h4>
            <span>{post.username}</span>
            <span>{post.timestamp}</span>
          </div>
        </div>
        {/* dot icon */}
        {/* <EllipsisHorizontalIcon className="h-10 w-10 hover:text-blue-500 hoverEffect" /> */}

        {/* Post text */}
        <p>{post.text}</p>

        {/* Post Image */}

        {/* icons */}
        <div className="">
          <TrashIcon className="h-9" />
          <HeartIcon className="h-9" />
          <ShareIcon className="h-9" />
          <ChatBubbleBottomCenterTextIcon className="h-9" />
        </div>
      </div>
    </div>
  );
};
