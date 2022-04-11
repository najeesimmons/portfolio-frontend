import { useState, useEffect } from "react";
import {Title, Headshot} from "./About.styles"

export const About = ({url}) => {
  // create state to hold about data
  const [about, setAbout] = useState(null);


  useEffect(() => {
      // create function to make api call
      const getAboutData = async () => {
        try {
            console.log(url)
            // make api call and get response
        const response = await fetch(url + "about");
        console.log(response)
        // turn response into javascript object
        const data = await response.json();

        // set the about state to the data
        setAbout(data);
        } catch (error) {
            console.error(error)
        }
      };
      
      
      getAboutData()}, [url]);
      
      // define a function that will return the JSX needed once we get the data
      const loaded = () => (
          <div>
            <Headshot>
              <img src={about.headshot} alt={about.name} />
            </Headshot>
            <Title 
              isBob={about.name==="Najee Simmons"}>{about.name}
            </Title>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
            <br></br>
          </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}