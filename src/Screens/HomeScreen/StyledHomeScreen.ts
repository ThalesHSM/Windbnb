import styled, { css } from "styled-components";

interface IIsFocused {
  focused: string;
}

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: Lucida Sans Unicode;
`;

export const StyledHeaderDiv = styled.div<IIsFocused>`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 80px;
  padding-left: 80px;

  ${(props) =>
    props.focused === "focused"
      ? css`
          padding-left: 0;
        `
      : null}

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
  }
`;

export const StyledListDiv = styled.div<IIsFocused>`
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  height: 1000vh;
  ${(props) =>
    props.focused === "focused"
      ? css`
          opacity: 0.5;
          background-color: grey;
        `
      : null};

  @media (max-width: 600px) {
    padding-left: 40px;
  }
`;

export const StyledFinlandDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPlacesDiv = styled.div`
  display: grid;
  grid-template-columns: 600px 600px 600px;

  @media (max-width: 1700px) {
    grid-template-columns: 500px 500px 500px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 400px 400px 400px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 400px 400px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 400px;
  }
`;

export const StyledSuperHostText = styled.p`
  border: 1px;
  border-style: solid;
  border-radius: 40px;
  padding: 7px;
  margin-top: 10px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 10px;
    margin-top: 15px;
  }
`;

export const StyledRatingDiv = styled.div`
  display: flex;
  flex: 1;
  margin-right: 50px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 600px) {
    margin-top: -10px;
  }
`;

export const StyledPlaceTitle = styled.h3`
  align-self: flex-start;
  display: flex;
  margin-left: 5px;
  margin-top: -5px;
  margin-bottom: 30px;
  font-size: 20px;
`;

export const StyledPlaceImage = styled.img`
  width: 550px;
  border-radius: 20px;

  @media (max-width: 1700px) {
    width: 450px;
  }

  @media (max-width: 1500px) {
    width: 350px;
  }
`;
