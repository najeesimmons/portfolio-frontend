import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr; 
  grid-column-gap: 5px;
`;
export const MyInfo = styled.span`

  h1 {
    padding: 0;
  }
  `
export const AboutMe = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 30px;
`;

export const Bio = styled.span`
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
