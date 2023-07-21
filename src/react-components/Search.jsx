// import React, { useState, useEffect } from "react";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [listening, setListening] = useState(false);
//   const [recordingTime, setRecordingTime] = useState(0);

//   useEffect(() => {
//     let timerId;

//     if (listening) {
//       timerId = setInterval(() => {
//         setRecordingTime((prevTime) => prevTime + 1);
//       }, 5000);
//     }

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [listening]);

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleSubmit();
//     }
//   };

//   const handleMicClick = () => {
//     if (!listening) {
//       startListening();
//     } else {
//       stopListening();
//     }
//   };

//   const startListening = () => {
//     setListening(true);
//     setRecordingTime(0);

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setSearchTerm(transcript);
//       recognition.stop();
//       handleSubmit();
//     };

//     recognition.start();
//   };

//   const stopListening = () => {
//     setListening(false);
//   };

//   const handleSubmit = () => {
//     // Perform the necessary backend API request to fetch results based on the searchTerm
//     fetch(`/api/search?term=${searchTerm}`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Process the search results data
//         console.log("Search results:", data.results);
//       })
//       .catch((error) => {
//         console.error("Error searching:", error);
//       });
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Type Your Question Here!"
//       />
//       <button
//         className={`microphone-button ${listening ? "listening" : ""}`}
//         onClick={handleMicClick}
//       >
//         <i class="fa-solid fa-microphone" style={{ color: "#000000" }}></i>
//       </button>
//       {listening && <span className="recording-time">{recordingTime}s</span>}
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from "react";

const SearchBar = () => {
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
    };

    recognition.onend = () => {
      if (!micInputComplete) {
        // If the microphone input was not complete, restart the recognition
        recognition.start();
      }
    };

    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    setMicInputComplete(true); // Indicate that the user manually stopped the microphone input
  };

  const handleSubmit = () => {
    // Perform the necessary backend API request to fetch results based on the searchTerm
    fetch(`/api/search?term=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the search results data
        console.log("Search results:", data.results);
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type Your Question Here!"
      />
      <button
        className={`microphone-button ${listening ? "listening" : ""}`}
        onClick={handleMicClick}
      >
        {listening && !micInputComplete ? (
          <i className="fa-solid fa-microphone" style={{ color: "#ff0000" }}></i>
        ) : (
          <i className="fa-solid fa-microphone" style={{ color: "#000000" }}></i>
        )}
      </button>
      {listening && !micInputComplete && (
        <span className="recording-time">{recordingTime}s</span>
      )}
    </div>
  );
};

export default SearchBar;
