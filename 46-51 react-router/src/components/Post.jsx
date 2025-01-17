import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div
      className="card post-card"
      style={{ width: "30rem", position: "relative" }}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
          style={{ cursor: "pointer" }}
        >
          <MdDelete />
        </span>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashTag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This post was reacted to by {post.reactions.likes} people and disliked
          by {post.reactions.dislikes} people.
        </div>
      </div>
    </div>
  );
};

export default Post;

// import { MdDelete } from "react-icons/md";
// import { useContext } from "react";
// import { PostList } from "../store/post-list-store";

// const Post = ({ post }) => {
//   const { deletePost } = useContext(PostList);
//   return (
//     <div className="card post-card" style={{ width: "30rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">{post.title}</h5>
//         <span
//           className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//           onClick={() => deletePost(post.id)}
//         >
//           <MdDelete />
//         </span>

//         <p className="card-text">{post.body}</p>

//         {post.tags.map((tag) => (
//           <span key={tag} className="badge text-bg-primary hashTag">
//             {tag}
//           </span>
//         ))}
//         <div className="alert alert-success reactions" role="alert">
//           This post reacted by {post.reactions} people.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
