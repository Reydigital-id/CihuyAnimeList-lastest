"use client";

import React, { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {
      isCreated ? (
        <p className="text-primary">Berhasil ditambahkan kedalam koleksi</p>
      ) : (
        <a
          onClick={handleCollection}
          className="koleksi bg-accent cursor-pointer"
        >
          Add to Collection
        </a>
      )}
    </>
  );
};

export default CollectionButton;
