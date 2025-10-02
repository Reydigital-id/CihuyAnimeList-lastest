import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div>
    <h3 className="bolder judulComment text-primary text-2xl">Comment :</h3>
    <div className="commentBox w-full grid grid-cols-1 gap-4">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="BoxCom text-dark bg-primary">
            <p className="text-sm">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CommentBox;
