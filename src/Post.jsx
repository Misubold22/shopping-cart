// Post.jsx
import { useParams } from "react-router";
import BlogPosts from "./blogPosts";
import { useOutletContext } from "react-router";

function Post() {
  const { slug } = useParams();
  const post = slug ? BlogPosts[slug] : null;
  const [counts] = useOutletContext();
  console.log(counts);
  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }

  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Post;
