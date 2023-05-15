import { SparklesIcon } from "@heroicons/react/24/outline";
import { Banner } from "./Banner";
import { Input } from "./Input";
import { Post } from "./Post";
import { Headers } from "./Headers";
export const Feed = () => {
  const posts = [
    {
      id: 1,
      day: "Day 1",
      name: "Uzezi Ovraiti",
      username: "Ovidot",
      userImg: "https://www.adscientificindex.com/pictures/71/1349464.jpg",
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "Nice day",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      day: "Day 2",
      name: "Uzezi Ovraiti",
      username: "Ovidot",
      userImg: "https://www.adscientificindex.com/pictures/71/1349464.jpg",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "My desk",
      timestamp: "2 hours ago",
    },
    {
      id: 3,
      day: "Day 3",
      name: "Uzezi Ovraiti",
      username: "Ovidot",
      userImg: "https://www.adscientificindex.com/pictures/71/1349464.jpg",
      img: "https://plus.unsplash.com/premium_photo-1672243970579-8cd2d0e9e0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "wow",
      timestamp: "2 days ago",
    },
    {
      id: 4,
      day: "Day 4",
      name: "Uzezi Ovraiti",
      username: "J-snow",
      userImg: "https://www.adscientificindex.com/pictures/71/1349464.jpg",
      img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "wow",
      timestamp: "2 days ago",
    },
  ];
  const lastPost = posts[posts.length - 1];

  return (
    <div className="xl:ml-[280px] text-black border-gray-200 border-l border-r xl:min-w-[900px] sm:ml-[73px] flex-grow max-w-7xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className=" hoverEffect flex item-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Banner key={lastPost.id} latest={lastPost} />
      {/* <Input /> */}
      <Headers key={lastPost.id} latest={lastPost} />
      <Input />
      <div className=" blr mt-16 grid  sm:shrink-0 gap-4 md:grid-cols-2  text-black xl:min-w-[900px] flex-grow max-w-7xl">
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};
