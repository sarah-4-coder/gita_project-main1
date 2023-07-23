import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [listening, setListening] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [micInputComplete, setMicInputComplete] = useState(false);

  useEffect(() => {
    let timerId;

    if (listening) {
      timerId = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000); // Reduce interval for more accurate recording time display
    }

    return () => {
      clearInterval(timerId);
    };
  }, [listening]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleMicClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!listening && !micInputComplete) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    setListening(true);
    setRecordingTime(0);
    setMicInputComplete(false);

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      recognition.stop();
      setMicInputComplete(true); // Indicate that microphone input is complete
      setInterval(() => {
        handleFindOutClick();
      }, 2000);
    };

    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    handleSubmit();
    handleFindOutClick();
    setMicInputComplete(true); // Indicate that the user manually stopped the microphone input
  };

  const handleSubmit = () => {
    // Perform the necessary backend API request to fetch results based on the searchTerm
    fetch(`/api/search?term=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the search results data
        console.log("Search results:", data.results);
        // Redirect to the results page (change "/results" to your desired URL)
        navigate("/results");
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  };

  const handleFindOutClick = () => {
    // Redirect to the "Find Out" page (change "/find-out" to your desired URL)
    navigate("./Page2");
  };

  return (
    <div className="search-bar flex flex-row align-middle justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type Your Question Here!"
        className="px-4"
      />
      <button
        // className={`microphone-button ${listening ? "listening" : ""}`}
        onClick={handleMicClick}
      >
        {listening && !micInputComplete ? (
          <i
            className="fa-solid fa-microphone w-10"
            style={{ color: "#ff0000" }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-microphone w-10 h-5 text-3xl"
            style={{ color: "#000000" }}
          ></i>
        )}
      </button>
      {listening && !micInputComplete && (
        <span className="recording-time mx-1 my-auto">{recordingTime}s</span>
      )}
      <div className=" my-auto mx-4 bg-black text-white rounded-2xl px-3 py-2">
        <button onClick={handleFindOutClick}>FIND OUT!</button>
      </div>
    </div>
  );
};

export default SearchBar;
