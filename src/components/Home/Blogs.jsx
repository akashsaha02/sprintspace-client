import blogImg1 from "../../assets/GaoH9YHW0AAoVRx.jpeg";
import blogImg2 from "../../assets/half-marathon.jpg";
import blogImg3 from "../../assets/images.jpeg";
import SectionTitle from "../shared/SectionTitle";
import {Link} from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Benefits of Running Marathons",
      author: "John Doe",
      date: "2025-01-05",
      excerpt:
        "Running marathons has numerous physical and mental health benefits. Learn how it can transform your life! Dive into the details of how running can elevate your fitness and mental well-being.",
      image: blogImg1,
    },
    {
      id: 2,
      title: "Top 5 Marathon Destinations",
      author: "Jane Smith",
      date: "2025-01-06",
      excerpt:
        "Discover the top 5 marathon destinations around the world for an unforgettable experience. From iconic cityscapes to serene nature trails, there's a marathon for everyone.",
      image: blogImg2,
    },
    {
      id: 3,
      title: "How to Prepare for Your First Marathon",
      author: "Chris Lee",
      date: "2025-01-07",
      excerpt:
        "Preparing for your first marathon? Check out our step-by-step guide to get ready for race day. From training tips to gear recommendations, we’ve got you covered.",
      image: blogImg3,
    },
    {
        id: 4,
        title: "The Ultimate Guide to Post-Marathon Recovery",
        author: "Sarah Johnson",
        date: "2025-01-08",
        excerpt:
          "After crossing the finish line, recovery is just as important as training. Learn the best techniques for muscle recovery, hydration, and mental well-being to bounce back stronger.",
        image: blogImg2
      }
  ];

  return (
    <div className="pt-10 pb-16 px-4 max-w-[1920px] mx-auto">
      <SectionTitle title="Latest Blogs" subtitle="Explore Our Latest Blogs" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col lg:flex-row border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full lg:w-1/3 h-64 lg:h-auto object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {blog.author} | {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
              </div>
              <Link to="/all-events" className="mt-4 self-start px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
