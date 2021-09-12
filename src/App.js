import React, { useState, useEffect } from "react";
import "./App.css";
import VideoList from "./components/video_list/VideoList";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyALnmt1hydly8odvRwA7eM_YU2dJ2kNcKg&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyALnmt1hydly8odvRwA7eM_YU2dJ2kNcKg",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
