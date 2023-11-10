import React, { useEffect, useState } from "react";
import Sidebar from "../comps/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import base_url from "../api/phpapi";
import axios, * as others from "axios";
import Blog from "../comps/Blog";
import CardPlaceholder from "../comps/CardPlaceholder";
import { Helmet } from "react-helmet";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [postCount, setCount] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
     
      window.scrollTo(0, 0);
      setPage(0);
      setPost((catposts.length = 0));
      setTimeout(() => {
        getCatpost(0);
      }, 500);
    }
  }, [id]);

  const [catposts, setPost] = useState([]);

  const getCatpost = (cpage) => {
    

    axios.get(`${base_url}\category?cat_id2=${id}&count=${cpage}`).then(
      (response) => {


        let red = ''
        red = response.data;

        console.log(cpage)

        if (red === "No More") {
          setCount(0);
        } else {

          console.log(red.length)

          let c = catposts.concat(red);
          let result = c.filter((item, pos) => c.indexOf(item) === pos);
          setPost(result);
          setCount(response.data.length);
          setIsLoading(false);
          
        }
      },
      (error) => {
        navigate("/404");
      }
    );
  };

  const incNum = () => {
    setPage(page + 10);
    getCatpost(page + 10);
  };

  return (
    <>
      <Helmet>
        <title>
          {id.replaceAll("-", " ").toUpperCase()} - Stories to make you fall in
          love with everything finance
        </title>
        <meta
          name="keyword"
          content="Jobaaj Stories, Ca Stories, People Stories, Public Figures, Jobaaj learnings"
        />
        <meta
          name="description"
          content="Jobaaj Stories is home to a plethora of content categorised in distinctive niches such as finance related news updates, inspirational stories about professionals and entrepreneurs in various domains, and global financial insights."
        />
      </Helmet>
      <section className="page-header">
        <div className="container-xl">
          <div className="text-center">
            <h1
              style={{ textAlign: "center", textTransform: "capitalize" }}
              className="mt-0 mb-2"
            >
              {id.replaceAll("-", " ")}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li></li>
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {id}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="main-content" style={{ height: "fit-content" }}>
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="row gy-4">
                {isLoading ? (
                  <>
                    <CardPlaceholder />
                  </>
                ) : catposts.length > 0 ? (
                  catposts.map((item) => (
                    <Blog blog={item} key={item.id} type={5} />
                  ))
                ) : (
                  <CardPlaceholder />
                )}
              </div>
              <br /> <br />
              {postCount > 9 ? (
                <>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        incNum();
                      }}
                      className="btn btn-simple"
                    >
                      Load More
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
