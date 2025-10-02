"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter()

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, comment, username, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh()
    }
    return;
  };

  return (
    <div className="comment flex flex-col gap-2">
      {isCreated && <p className="text-primary">Postingan terkirim..</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="paddingComment w-full h-32 bg-white text-xl"
      />
      <button onClick={handlePosting} className="btnSend w-52 bg-accent">
        Send
      </button>
    </div>
  );
};

export default CommentInput;
