import Image from "next/image";
import blogData from "../data/blogData.json";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-20">
      {blogData.map((post) => (
        <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={post.image} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
