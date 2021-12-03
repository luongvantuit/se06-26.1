import React from "react";
import Ratings from "./Ratings";
import "../../../assets/css/comment.css";

function formatDate(date: Date) {
  return date.toLocaleDateString();
}

const Comment = (props: {
  text: string;
  author: { avatarUrl: string; name: string };
  date: string;
}) => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>

      <div className="Comment-status">
        <div className="Comment-date">{props.date}</div>
        <div className="Comment-rating">
          <Ratings ratingPoint={4.5} />
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
    </div>
  );
};

export default Comment;
