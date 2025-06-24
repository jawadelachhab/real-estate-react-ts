import { Back } from "../common";
import { RecentCard } from "../Home";
import "../Home/Recent/recent.css";

const Blog = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back name="Blog" title="Blog Grid - Our Blogs" cover={"/images/about.jpg"} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
