import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import aiImage from "../assets/ai.jpeg";

export const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/posts");
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col gap-10">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
        <img
          src={aiImage}
          alt="AI in Life"
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-gray-800">
            How AI Is Changing Our Daily Lives
          </h1>
          <p className="text-gray-700">
            Artificial Intelligence is becoming a major part of our everyday
            routines — from virtual assistants and personalized content to
            automation and healthcare. This post explores the positive and
            challenging aspects of this shift.
          </p>

          {/* ✅ Replace text with button linking to /newPost */}
          <Link to="/newPost" className="btn btn-primary w-fit mt-2">
            Add Comment
          </Link>
        </div>
      </div>

      {/* 📰 Posts List */}
      {posts.length === 0 ? (
        <div className="text-center text-gray-500">
          No posts available. Please create a new post.
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex w-full border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="w-44 h-44 flex-shrink-0">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm overflow-hidden text-ellipsis line-clamp-3 h-[4.5em]">
                    {post.content}
                  </p>
                </div>

                <Link
                  to={`/posts/${post.id}`}
                  className="mt-4 inline-block bg-[#a2ae9e] text-black/80 font-light px-4 py-2 rounded hover:bg-[#bdc5ba] w-fit"
                >
                  Read more details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
