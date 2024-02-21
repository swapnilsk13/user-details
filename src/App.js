import React, { useEffect, useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  // State to store user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to fetch user data from the API
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const result = await response.json();

        // Update the state with the user data
        setUserData(result.results[0]);
      } catch (error) {
        // Handle errors if any occur during the fetch process
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // Render the UserDetails component if user data is available
  return (
    <div className="App">
      {/* Render UserDetails component with user data */}
      {userData && <UserDetails user={userData} />}
    </div>
  );
}

export default App;
