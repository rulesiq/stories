import React, { useEffect, useState } from "react";
import base_url from "../api/phpapi";
import axios, * as others from "axios";
import { Link } from "react-router-dom";
import CatLi from "./CatLi";
import Skeleton from "react-loading-skeleton";
import AdSidebar from "./AdSidebar";
import Blog from "./Blog";

const SidebarPost = ({ id }) => {
  const [sidepost, setSide] = useState([]);
  const [cats, setCat] = useState([]);
  const [pop, setPop] = useState([]);

  const getImageError = (e) => {
    e.currentTarget.src = "../assets/images/placeholder.jpg";
  };

  const [isLoading, setIsLoading] = useState(true);

  const addToEmails = ()  => {
    axios.post(`${base_url}\subscribe?email=${email}`).then(
      (response) => {
        if (response.data.msg == "Success") {
          setBtn("Subscribed");
          setEmail("");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const [email, setEmail] = useState();

  const [btnName, setBtn] = useState("Subscribe");

  function getData(val) {
    setEmail(val.target.value);
  }

  const getSidePost = () => {
    axios.get(`${base_url}\post?india_might`).then(
      (response) => {
        setSide(response.data);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const getCategoryPosts = () => {
    // console.log(id);
    axios.get(`${base_url}\stories?catPosts=${id}`).then(
      (response) => {
        setPop(response.data.pop);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const getCats = () => {
    axios.get(`${base_url}\category?cats`).then(
      (response) => {
        setCat(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getSidePost();
    getCats();
    getCategoryPosts();
  }, []);

  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar">
          <div className="post-tabs rounded bordered">
            <h4>Similar Stories</h4>

            <div className="tab-content" id="postsTabContent">
              <div className="lds-dual-ring"></div>
              <div
                aria-labelledby="popular-tab"
                className="tab-pane fade show active"
                id="popular"
                role="tabpanel"
              >
                {pop.length > 0
                  ? pop.map((item) => (
                      <Blog key={item.id} blog={item} type={4} />
                    ))
                  : "No Post"}
              </div>
            </div>
          </div>
          <br />
          <br />

          

          <div className="widget rounded">
            <div className="widget-header text-center">
              <h3 className="widget-title">Explore Topics</h3>
              <img
                src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
                className="wave"
                alt="wave"
              />
            </div>
            <div className="widget-content">
              <ul className="list">
                {isLoading ? (
                  <>
                    <li>
                      <h3>
                        <Skeleton height={30} count={3} />
                      </h3>
                    </li>
                    <li>
                      <h3>
                        <Skeleton />
                      </h3>
                    </li>
                    <li>
                      <h3>
                        <Skeleton />
                      </h3>
                    </li>
                  </>
                ) : cats.length > 0 ? (
                  cats.map((item) => <CatLi key={item.id} cat={item} />)
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
          <div className="">
            <AdSidebar slot="7329993128" />
          </div>
          <br />
          <br />
          <div className="widget rounded">
            <div className="widget-header text-center">
              <h3 className="widget-title">Newsletter</h3>
              <img
                src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
                className="wave"
                alt="wave"
              />
            </div>
            <div className="widget-content">
              <span className="newsletter-headline text-center mb-3">
                Join 70,000 subscribers!
              </span>
              <form>
                <div className="mb-2">
                  <input
                    onChange={getData}
                    className="form-control w-100 text-center"
                    value={email}
                    placeholder="Email address…"
                    type="email"
                  />
                </div>
                <button
                  className="btn btn-default btn-full"
                  type="button"
                  onClick={() => {
                    addToEmails();
                  }}
                >
                  {btnName}
                </button>
              </form>
              <span className="newsletter-privacy text-center mt-3">
                Your email is safe with us, we don't spam.
              </span>
            </div>
          </div>

          <div className="widget rounded">
            <div className="widget-header text-center">
              <h3 className="widget-title">India’s Might!</h3>
              <img
                src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
                className="wave"
                alt="wave"
              />
            </div>
            <div className="widget-content">
              <div>
                <div className="post">
                  <div className="thumb rounded">
                    <Link
                      to={`/category/${sidepost.cat_id}`}
                      className="category-badge position-absolute"
                    >
                      {sidepost.category}
                    </Link>
                    <a href={`/${sidepost.url}`}>
                      <div className="inner">
                        <img src={sidepost.thumb} alt="post-title" />
                      </div>
                    </a>
                  </div>
                  <h5 className="post-title mb-0 mt-4">
                    <a href={`/${sidepost.url}`}>{sidepost.title}</a>
                  </h5>
                  <ul className="meta list-inline mt-2 mb-0">
                    <li className="list-inline-item">
                      <Link to="/author">Jobaaj Stories</Link>
                    </li>
                    <li className="list-inline-item">{sidepost.date}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="widget no-container rounded text-md-center">
            <a
              href="#"
              className="widget-ads"
              style={{ padding: "10px !important" }}
            ></a>
          </div>

          <div className="widget rounded">
            <div className="widget-header text-center">
              <h3 className="widget-title">Tag Clouds</h3>
              <img
                src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
                className="wave"
                alt="wave"
              />
            </div>
            <div className="widget-content">
              <Link to="/category/learning-resource" className="tag">
                #learningresource
              </Link>
              <Link to="/category/news-updates" className="tag">
                #newsupdates
              </Link>
              <Link to="/category/around-the-globe" className="tag">
                #aroundtheglobe
              </Link>
              <Link to="/category/corporate-stories" className="tag">
                #corporatestories
              </Link>
              <Link to="/category/quarterly-results" className="tag">
                #quarterlyresults
              </Link>
              <Link to="/category/entrepreneurial-spirit" className="tag">
                #entrepreneurialspirit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarPost;