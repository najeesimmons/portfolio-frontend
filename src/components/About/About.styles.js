import styled, {css} from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
  ${props => props.isBob && css`
    background: white;
    color: black;
  `}
`;

export const Headshot = styled.div`
  height: 400px;
  width: 400px;

  img {
    height 100%;
    width: 100%;
  }
  `;
