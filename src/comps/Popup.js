import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import base_url from "../api/phpapi";
import { Cookies, useCookies } from "react-cookie";

const Popup = () => {
  useEffect(() => {
    if (!cookies.subscribe) {
      setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(true);
      }, 15000);
    }
  }, []);

  const [cookies, setCookie] = useCookies(["subscribe"]);

  const addToEmails = () => {
    if (email !== "") {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("subscribe", "Yes");

      axios({
        method: "post",
        url: `${base_url}\subscribe`,
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      }).then((response) => {
        // console.log(response);
        let expires = new Date();
        expires.setTime(expires.getTime() + response.data.expires_in * 1000);
        if (response.data.msg === "Success") {
          setCookie("subscribe", true, { path: "/", expires });
        } else {
          setBtn("Already Subscribed");
          setEmail("");
          setCookie("subscribe", true, { path: "/", expires });
        }
        setShow(false);
      });
    } else {
      alert("Please Enter Email!");
    }
  };

  const [showPop, setShow] = useState(false);

  const [email, setEmail] = useState("");

  const [btnName, setBtn] = useState("Subscribe");
  const closePopup = () => {
    setShow(false);
  };

  function getData(val) {
    setEmail(val.target.value);
  }

  return (
    <>
      {showPop ? (
        <div className="popup">
          <div
            className="widget rounded popBox"
            style={{
              margin: "160px auto",
              background: "white",
              padding: "0px 24px",
            }}
          >
            <span
              style={{
                float: "right",
                cursor: "pointer",
                marginRight: "-12px   ",
              }}
              onClick={() => {
                closePopup();
              }}
            >
              Close
            </span>
            <div
              className="widget-header text-center"
              style={{ marginBottom: "15px" }}
            >
              <img
                style={{ width: "150px", marginLeft: "18px" }}
                src={process.env.REACT_APP_URL + "assets/images/ads/news.jpeg"}
              />
              <h3 className="widget-title">Newsletter</h3>
              <img
                src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
                className="wave"
                alt="wave"
              />
            </div>
            <div className="widget-content">
              <span className="newsletter-headline text-center mb-3">
                Subscribe to Access our Premium Ebook on Stock Market !
              </span>
              <p style={{ fontSize: "12px", textAlign: "center" }}>
                Get the most important financial developments around the world
                delivered to you in a easy to read and jargon-free format
              </p>
              <form style={{ margin: "10px 40px" }}>
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
              <br />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Popup;
