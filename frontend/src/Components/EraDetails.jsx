import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCirclePlay } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import wonder from "../assets/images/wonder.png";
const EraDetails = () => {
  const { id } = useParams();
  const [eraDetails, setEraDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/eras/${id}`)
      .then((response) => setEraDetails(response.data))
      .catch((error) => console.error("There was an error fetching the era details:", error));
  }, [id]);

  if (!eraDetails) return <div>Loading...</div>;

  return (
    <div className="EraPage">
      <div className="eraHeading">
        <p>{eraDetails.name}'s</p>
      </div>

      {/* Movie Block */}
      <h1>Movies</h1>
      <div className="movieBlock">
        {eraDetails.details
          .filter((detail) => detail.type === "movie")
          .map((detail) => (
            <div key={detail._id} className="movieBox">
              <div>
                <img src={wonder} className="movieImg" alt={detail.name} />
              </div>
              <div className="movieName">
                <h1>{detail.name}</h1>
                <p className="movieP">{detail.year}</p>
              </div>

              <div className="movieDetail">
                <div className="movieTitle">
                  <div className="movieDett">Running time:</div>
                  <div className="movieDet">{detail.runningTime}</div>
                </div>
              </div>
              <div className="movieDetail">
                <div className="movieTitle">
                  <div className="movieDett">Directed by:</div>
                  <div className="movieDet">{detail.director}</div>
                </div>
              </div>
              <div className="movieDetail">
                <div className="movieTitle">
                  <div className="movieDett">Produced by:</div>
                  <div className="movieDet">{detail.producer}</div>
                </div>
              </div>

              <div className="overlay">
                <button>If you are more interested then click here!</button>
              </div>
            </div>
          ))}
      </div>

      {/* Music Block */}

      <h1>Music</h1>
      <div className="musicBlock">
        {eraDetails.details
          .filter((detail) => detail.type === "music")
          .map((detail) => (
            <div key={detail._id} className="musicBox">
              <div>
                <img src={wonder} className="movieImg" alt={detail.name} />
              </div>
              <div className="movieName">
                <h1>{detail.name}</h1>
                <p className="movieP">{detail.year}</p>
              </div>

              <div className="movieDetail">
                <div className="movieTitle">
                  <div className="movieDett">Singer:</div>
                  <div className="movieDet">{detail.singer}</div>
                </div>
              </div>

              <div className="overlayMusic">
                <p>
                  <FaCirclePlay className="playButton" />
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EraDetails;
