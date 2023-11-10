import React from "react";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

function Chatbot() {
  // css
  const position = {
    position: "fixed",
    right: "1rem",
    bottom: "0rem",
    opacity: "1",
    zIndex: "99999",
    textAlign: "center",
  };
  const overflow = {
    overflow: "hidden",
    maxWidth: "20rem",
    display: "none",
    borderRadius: "0.7rem",
  };
  // css end

  const showChatbot = () => {
    // console.log("call");
    if ($("#query_card").css("display") === "none") {
      $("#query_card").show("slow");
      $("#help_text").hide("slow");
      $("#close_query").addClass("bi-x-lg").removeClass("bi-chat-fill");
    } else {
      $("#query_card").hide("slow");
      $("#help_text").show("slow");
      $("#close_query").removeClass("bi-x-lg").addClass("bi-chat-fill");
    }
  };

  const issuesSubmit = (e) => {
    e.preventDefault();

    let query_array = $("#issues_form").serializeArray();
    let query_name = query_array[0]["value"];
    let query_email = query_array[1]["value"];
    let query_phone = query_array[2]["value"];
    let query_for = query_array[3]["value"];
    let query_text = query_array[4]["value"];

    // call api
    axios({
      method: "post",
      url: 'https://support.nishtyainfotech.com/fun/support_store',
      data: $("#issues_form").serialize(),
      config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then(
      (result) => {
        if (result.data.supportResponse === 1) {
          $("#whatsapp_support").attr(
            "href",
            `https://api.whatsapp.com/send?phone=+919910229169&text=*My details for fast support -*%0A%0AWhat's Your Name?: ${query_name}%0AWhat is your email address?: ${query_email}%0AWhat's your contact number?: ${query_phone}%0AWhat are you looking for?: ${query_for}%0APlease, Submit Your Query: ${query_text}`
          );
          $("#ticket_id").text("#" + result.data.ticket_id);
          $("#issues_form").trigger("reset");
          $("#issue_body").hide("slow");
          $("#support_body").show("slow");

         
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div id="my_chatbox_help" style={position}>
    

      {/* help button */}
      <a
      href="https://forms.gle/3cUS9ke5Les38fz67"
      target="_blank"
        className="btn btn-default text-white"
        type="button"
        style={{
          width: "fit-content",
          position: "relative",
          bottom: "1rem",
          opacity: "1",
          borderRadius: "200px",
          padding: "1rem",
        }}
        onClick={() => {
          showChatbot();
        }}
      >
        <span
          style={{
            fontSize: "15px",
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <i className="bi bi-pencil" id="close_query"></i>
          <span id="">Get Featured</span>
        </span>
      </a>
      {/* help button end */}
    </div>
  );
}

export default Chatbot;