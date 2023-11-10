import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import base_url from "../api/phpapi";
import axios, * as others from "axios";
import Sidebar from "../comps/Sidebar";
import { Link } from "react-router-dom";
import Insta from "../comps/Insta";
import { Helmet, HelmetProvider, HelmetData } from "react-helmet-async";
import AdSidebar from "../comps/AdSidebar";
import InArticalAd from "../comps/InArticalAd";
import SidebarPost from "../comps/SidebarPost";

const Post = () => {
  const navigate = useNavigate();

  const { title } = useParams();
  const [post, setPost] = useState([]);

  const getImageError = (e) => {
    e.currentTarget.src = "../assets/images/placeholder.jpg";
  };

  const [url, setUrl] = useState();
  const [cat, setCat] = useState(false);

  const getSingleBlog = () => {
    axios.get(`${base_url}\post?post_name=${title}`).then(
      (response) => {
        setPost(response.data);
        setCat(true);
      },
      (error) => {
        navigate("/404");
      }
    );
  };

  useEffect(() => {
    if (title) {
      window.scrollTo(0, 0);
      getSingleBlog();
      setUrl(window.location.href);
      setCat(false);
    }
  }, [title]);

  const helmetData = new HelmetData({});

  return (
    <>
     

      <div className="main-content mt-3" style={{ height: "fit-content" }}>
        <div className="container-xl">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                {" "}
                <Link to={`/category/${post.cat_id}`}>{post.category}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="post post-single">
                <div className="post-header">
                  <h1 className="title mt-0 mb-3">{post.title}</h1>
                  <ul className="meta list-inline mb-0">
                    <li className="list-inline-item">
                      <Link to="/author">
                        <img
                          src={
                            process.env.REACT_APP_URL +
                            "assets/images/favicon.png"
                          }
                          className="author"
                          alt="author"
                        />
                        Jobaaj Stories
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={`/category/${post.cat_id}`}>
                        {post.category}
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      Published : {post.date}
                    </li>
                    {post.update != "null" ? (
                      <li className="list-inline-item">
                        Updated {post.update}
                      </li>
                    ) : (
                      <br />
                    )}
                  </ul>
                </div>

                <div className="featured-image">
                  <img
                    src={post.thumb}
                    onError={getImageError}
                    alt="post-title"
                  />
                </div>

                <div className="post-content clearfix" id="sandy">
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>

                <div className="post-bottom">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12 text-center text-md-start">
                      {/* <a href="#" className="tag">#Trending</a>
                                    <a href="#" className="tag">#Video</a>
                                    <a href="#" className="tag">#Featured</a> */}
                    </div>
                    <div className="col-md-6 col-12">
                      <ul className="social-icons list-unstyled list-inline mb-0 float-md-end">
                        <li className="list-inline-item">
                          <a
                            target="_blank"
                            href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            target="_blank"
                            href={`http://www.facebook.com/sharer.php?u=${url}`}
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            target="_blank"
                            href={`http://twitter.com/share?url=${url}`}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <InArticalAd slot="1363350575" />
                </div>
              </div>

              <div className="spacer" data-height="50"></div>

              {/* <div className="about-author padding-30 rounded">
                        <div className="thumb">
                            <img src="assets/images/other/avatar-about.png" alt="Katen Doe" />
                        </div>
                        <div className="details">
                            <h4 className="name"><a href="#">Katen Doe</a></h4>
                            <p>Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.</p>
                            <ul className="social-icons list-unstyled list-inline mb-0">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div> */}

              <div className="spacer" data-height="50"></div>

              <div className="spacer" data-height="50"></div>
            </div>
            {cat ? <SidebarPost id={post.cat_id} /> : ""}
          </div>
          <Insta />
        </div>
      </div>
    </>
  );
};

export default Post;