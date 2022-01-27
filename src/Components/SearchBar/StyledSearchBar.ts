import styled, { css } from "styled-components";

interface IIsFocused {
  focused: string;
}

export const StyledDiv = styled.div<IIsFocused>`
  ${(props) =>
    props.focused === "focused"
      ? css`
          background-color: white;
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 600px;
          margin-top: 40vh;
        `
      : null};

  @media (max-width: 600px) {
    ${(props) =>
      props.focused === "focused"
        ? css`
            margin-top: 0;
            margin-left: -40px;
            height: 700px;
          `
        : null};
  }
`;

export const StyledDivB = styled.div<IIsFocused>`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  ${(props) =>
    props.focused === "focused"
      ? css`
          justify-content: flex-start;
          margin-top: 140px;
        `
      : null}
  @media (max-width: 600px) {
    margin-top: 20px;

    ${(props) =>
      props.focused === "focused"
        ? css`
            margin-top: 30px;
            flex-direction: column;
            align-items: center;
          `
        : null}
  }
`;

export const StyledLocationText = styled.h4`
  position: absolute;
  margin-left: 73px;
  margin-top: 5px;
  font-family: Lucida Sans Unicode;
  font-size: 14px;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 150px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 95px;
  }
`;

export const StyledGuestsText = styled.h4`
  margin-left: 10px;
  margin-bottom: -18px;
  font-family: "Lucida Sans Unicode";
  font-size: 14px;
`;

export const StyledButton = styled.button<IIsFocused>`
  @media (max-width: 1500px) {
    ${(props) =>
      props.focused === "focused"
        ? css`
            width: 400px;
          `
        : null}
  }

  @media (max-width: 1200px) {
    ${(props) =>
      props.focused === "focused"
        ? css`
            width: 300px;
          `
        : null}
  }
  @media (max-width: 600px) {
    width: 180px;
    ${(props) =>
      props.focused === "focused"
        ? css`
            width: 400px;
            margin-right: 20px;
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
          `
        : null}
  }

  height: 60px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  outline: none;
  box-shadow: 0px 0px 2px grey;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 16px;
  :focus {
    outline-style: solid;
    outline-width: 2px;
  }
  ${(props) =>
    props.focused === "focused"
      ? css`
          width: 600px;
        `
      : null}
`;

export const StyledButtonText = styled.p<IIsFocused>`
  font-family: Lucida Sans Unicode;
  ${(props) =>
    props.focused === "focused"
      ? css`
          margin-left: 10px;
          margin-bottom: 8px;
        `
      : null};
`;

export const StyledGuestsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
`;

export const StyledAdultChildrenDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 600px) {
    margin-left: 50px;
  }
`;

export const StyledSumSubDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSearchButtonDiv = styled.div<IIsFocused>`
  width: 50px;
  height: 60px;
  margin-top: -1px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 2px grey;

  ${(props) =>
    props.focused === "focused"
      ? css`
          width: 580px;
        `
      : null}

  @media (max-width: 1500px) {
    ${(props) =>
      props.focused === "focused"
        ? css`
            width: 400px;
          `
        : null}
  }

  @media (max-width: 1200px) {
    ${(props) =>
      props.focused === "focused"
        ? css`
            width: 300px;
          `
        : null}
  }

  @media (max-width: 600px) {
    ${(props) =>
      props.focused === "focused"
        ? css`
            box-shadow: none;

            border: none;
            margin-top: 10px;
          `
        : null}
  }
`;

export const StyledSearchButton = styled.button`
  background-color: #e26267;
  width: 120px;
  height: 45px;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export const StyledAddRemoveButton = styled.button`
  font-size: 20px;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;
