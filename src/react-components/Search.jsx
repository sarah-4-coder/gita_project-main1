// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [listening, setListening] = useState(false);
  // const [recordingTime, setRecordingTime] = useState(0);

  // useEffect(() => {
  //   let timerId;

  //   if (listening) {
  //     timerId = setInterval(() => {
  //       setRecordingTime((prevTime) => prevTime + 1);
  //     }, 5000);
  //   }

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [listening]);

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  // const handleMicClick = () => {
  //   if (!listening) {
  //     startListening();
  //   } else {
  //     stopListening();
  //   }
  // };

  // const startListening = () => {
  //   setListening(true);
  //   setRecordingTime(0);

  //   const recognition = new window.webkitSpeechRecognition();
  //   recognition.continuous = false;
  //   recognition.interimResults = false;

  //   recognition.onresult = (event) => {
  //     const transcript = event.results[0][0].transcript;
  //     setSearchTerm(transcript);
  //     recognition.stop();
  //     handleSubmit();
  //   };

  //   recognition.start();
  // };

  // const stopListening = () => {
  //   setListening(false);
  // };

  // const handleSubmit = () => {
  //   // Perform the necessary backend API request to fetch results based on the searchTerm
  //   fetch(`/api/search?term=${searchTerm}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Process the search results data
  //       console.log("Search results:", data.results);
  //     })
  //     .catch((error) => {
  //       console.error("Error searching:", error);
  //     });
  // };

  const handleclick = () => {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
      console.log(event);
      document.getElementById("stt").value = event.results[0][0].transcript;
    };
    recognition.start();
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Type Your Question Here!" id="stt" />
      <button onClick={handleclick}>
        <i class="fa-solid fa-microphone" style={{ color: "#000000" }}></i>
      </button>
    </div>
  );
};

export default SearchBar;
