import styled from 'styled-components';




export const NavBarWrapper = styled.div`
  background-color: black;
`;

export const NavBar = styled.nav`
    
    margin: 0px 0px 20px 0px;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    
    img {
      margin-left: 15px;
    }
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        li a:hover {
          background-color: #333;
        }
    }
`;

