import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-column-gap: 5px;
  margin: 70px auto 0;
  max-width: 1000px;

`;
export const MyInfo = styled.span`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');


  h1 {
    padding: 0;
    font-family:'Noto Serif', serif;
    font-size: 80px;
    font-weight: 800;
    margin: 0;
  }

  h3 {
    float: left;
    padding: 0;
  }
  `;
export const AboutMe = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 30px; 
`;

export const Bio = styled.span`
  float: left;
 `
export const Headshot = styled.div`
  height: 400px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  img {
    height 100%;
    width: 100%;
   
  }
  `;

  export const Break = styled.hr`
    display: block;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 1px;
    width: 50%;
`;