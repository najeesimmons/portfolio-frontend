import styled from 'styled-components';

export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0px 0px 20px 0px;
    padding: 0;
    overflow: hidden;
    background-color: black;

    li {
        float: right;
    }

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
`;

