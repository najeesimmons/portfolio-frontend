import styled from 'styled-components';

export const HeadingStyle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
`;


export const Container = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr; 
    grid-column-gap: 5px;
    margin: 0 auto 20px;
    max-width: 1100px;

`;

export const ProjectInfo = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');

    font-family: 'Noto Serif', serif;
    text-align: left;
    padding: 15px;

    h1 {
        font-size: 55px;
        font-weight: 10000;
    }
`;
export const ProjectIcons = styled.div`
display: flex;
flex-direction: row;
img {
    height:100px;
    width:100px;
}
`;
export const ProjectImage = styled.div`
    height: 320px;
    width: 550px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #333;
    :hover {
        border: 2px solid orange;
    }

img {
    height: 100%;
    width: 100%;
}`;

export const ProjectLinks = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');

  display: flex;
  gap: 10px;
  width: 200px;

a {
    font-family: 'Noto Serif', serif;
    font-weight: bold;  
    font-size: 19px;
    text-decoration: none;
    color: black;
    :hover {
        /* background-color: black; */
        font-size: 20px;
        /* color: white; */
    }
    
    /* color: purple:hover */
    
}`;



