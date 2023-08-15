import blogData from "../../data/blogData.json";

const post = ({ params }) => {
  const id = params.id;
  const post = blogData.find((post) => post.id.toString() === id);

  return (
      <div className="card mx-auto mt-20 w-2/5 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{post.title}</h2>
          <p className="text-base">{post.content}</p>
          <div className="card-actions justify-end">
            <p className="text-base">Date: {post.date}</p>
          </div>
        </div>
      </div>
  );
};

export default post;
