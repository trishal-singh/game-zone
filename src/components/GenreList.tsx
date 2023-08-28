import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
