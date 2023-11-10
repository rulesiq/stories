import React, { useEffect, useState } from "react";
import Sidebar from "../comps/SidebarCat";
import { Link, useNavigate, useParams } from "react-router-dom";
import base_url from "../api/phpapi";
import axios, * as others from "axios";
import Blog from "../comps/Blog";
import CardPlaceholder from "../comps/CardPlaceholder";
import { Helmet } from "react-helmet";
import SidebarCat from "../comps/SidebarCat";
import CardPlaceholderNews from "../comps/CardPlaceholderNews";

const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [postCount, setCount] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
   
      window.scrollTo(0, 0);
      setPage(0);
      setPost((catposts.length = 0));
      setTimeout(() => {
        getCatpost();
      }, 500);
  }, []);

  const [catposts, setPost] = useState([]);

  const getCatpost = () => {
    
    axios.get(`${base_url}newsLetter?mailsPosts=100`).then(
      (response) => {

        let red = ''
        red = response.data.pop;
          console.log(red)
          console.log(red.length)
          let c = catposts.concat(red);
          let result = c.filter((item, pos) => c.indexOf(item) === pos);
          setPost(result);
          setCount(response.data.length);
          setIsLoading(false);
          
      },
      (error) => {
        navigate("/404");
      }
    );
  };

  

  return (
    <>
      <Helmet>
        <title>
          Weekly Digest | Jobaaj Stories
        </title>
        <meta
          name="keyword"
          content="Jobaaj Stories, Ca Stories, People Stories, Public Figures, Jobaaj learnings"
        />
        <meta
          name="description"
          content="Jobaaj Stories is home to a plethora of content categorised in distinctive niches such as finance related news updates, inspirational stories about professionals and entrepreneurs in various domains, and global financial insights."
        />
        <link rel="canonical" href={`https://stories.jobaaj.com/weekly`} />

      </Helmet>
      <section className="page-header">
        <div className="container-xl">
          <div className="text-center">
            <h1
              style={{ textAlign: "center", textTransform: "capitalize" }}
              className="mt-0 mb-2"
            >
              Weekly Digest
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li></li>
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Stay Informed with Our Latest Updates
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="main-content" style={{ height: "fit-content" }}>
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="row gy-4">
                {isLoading ? (
                  <>
                    <CardPlaceholderNews />
                  </>
                ) : catposts.length > 0 ? (
                  catposts.map((item) => (
                    <Blog blog={item} key={item.id} type={7} />
                  ))
                ) : (
                  <CardPlaceholderNews />
                )}
              </div>
              <br /> <br />
              
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};
export default Newsletter;
