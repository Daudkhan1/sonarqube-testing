import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./blogCard.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/maanz-ai"
        );

        if (response.ok) {
          const data = await response.json();
          setPosts(data.items);

          // Extract unique categories
          const allCategories = data.items.flatMap(
            (post) => post.categories || []
          );
          const uniqueCategories = Array.from(new Set(allCategories));
          setUniqueCategories(uniqueCategories);

          // Initially, show all posts
          setFilteredPosts(data.items);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMediumPosts();
  }, []);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  //   if (category === "All") {
  //     setFilteredPosts(posts);
  //   } else {
  //     const filtered = posts.filter(
  //       (post) => post.categories && post.categories.includes(category)
  //     );
  //     setFilteredPosts(filtered);
  //   }
  // };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.categories && post.categories.includes(selectedCategory)
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <>
      <section className="gap text-center">
        <h2 className="heading pt-5">Our Blogs</h2>
        <p>
          Explore Maanz AI's dynamic blog, crafted by our dedicated team.
          Discover insights and stories <br /> that unravel the essence of
          innovation.
        </p>
      </section>

      <section>
        <div className="container">
          <div className="container">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className=" category-button"
            >
              <option className="category-select" value="All">
                All
              </option>
              {uniqueCategories.map((category) => (
                <option
                  key={category}
                  value={category}
                  style={{ backgroundColor: "#0b081c", color: "#8b8888" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#c34ac5";
                    e.target.style.color = "#8b8888";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#c34ac5";
                    e.target.style.color = "#fff";
                  }}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="card-container">
            {filteredPosts.map((post) => (
              <div key={post.guid} className="blog-card mb-4">
                {post.thumbnail && (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="card-image"
                  />
                )}
                <div className="card-content border-0">
                  <div className="blog-header">
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-author">By {post.author}</p>
                    <p className="blog-date">
                      {new Date(post.pubDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="blog-categories">
                    {post.categories &&
                      post.categories.map((category, index) => (
                        <span key={index} className="category">
                          {category}
                        </span>
                      ))}
                  </div>
                  <a
                    href={post.link}
                    className="read-more-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
