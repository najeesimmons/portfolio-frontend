import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  useEffect(() => {
      // create function to make api call
      const getAboutData = async () => {
        try {
            console.log(props.URL)
            // make api call and get response
        const response = await fetch(props.URL + "about");
        console.log(response)
        // turn response into javascript object
        const data = await response.json();

        // set the about state to the data
        setAbout(data);
        } catch (error) {
            console.error(error)
        }
      };
      
      
      getAboutData()}, [props.URL]);
      
      // define a function that will return the JSX needed once we get the data
      const loaded = () => (
          <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;