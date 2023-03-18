// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React from "react";
const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(res.data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") content = comment.content;
    if (comment.status === "pending") content = "Comment is under review";
    if (comment.status === "rejected")
      content = "Sorry such comment is not allowed";

    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderComments}</ul>;
};

export default CommentList;
