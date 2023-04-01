import styled from "styled-components";

export const BGContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  min-width: 500px;
  font: "Raleway", sans-serif;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  top: 15%;
  background: ${(props) => props.property};
`;

export const Colors = styled.div`
  display: flex;
`;

export const Input = styled.input`
  margin: 20px;
`;

export const H1 = styled.h1`
  font: 600 3.5em "Raleway", sans-serif;
  width: 100%;
`;

export const H2 = styled.h2`
  padding: 30px;
`;

export const H3 = styled.h3`
  font: 900 1em "Raleway", sans-serif;
  text-transform: none;
  letter-spacing: 0.01em;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 12em;
  height: 4em;
  margin: 20px;
  border-radius: 2em;
  border-color: white;
  border-style: solid;
  background: ${(props) => props.property};
`;
