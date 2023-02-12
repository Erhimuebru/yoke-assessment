import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./movies.css";

const Movies = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await axios.get(
          "https://assessmentqecode.onrender.com/movies"
        );
        setData(data.data);
      } catch (error) {}
    };
    getMovies();
  }, []);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;
  const displayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((data) => {
      return (
        <div className="movie-container">
          <img className="movie-img" src={data.Images} alt="" srcset="" />
          <p className="movie-title">{data.Title}</p>
        </div>
      );
    });
  const pa = Math.ceil(data.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Link className="link" to={"/"}>
        <div className="back">
          <BiArrowBack />
          <p className="back-text">Scan More Movies</p>
        </div>
      </Link>
      <div className="movie-contain">{displayData}</div>
    </>
  );
};

export default Movies;
