import React, { useState } from "react";
import Select from "react-select";
import {
  StyledAddRemoveButton,
  StyledAdultChildrenDiv,
  StyledButton,
  StyledButtonText,
  StyledDiv,
  StyledDivB,
  StyledGuestsDiv,
  StyledGuestsText,
  StyledLocationText,
  StyledSearchButton,
  StyledSearchButtonDiv,
  StyledSumSubDiv,
} from "./StyledSearchBar";

import { AiOutlineSearch, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdPlace } from "react-icons/md";

function SearchBar({
  isOnFocus,
  setIsOnFocus,
  isMenuOpen,
  setIsMenuOpen,
  handleSearch,
}: any) {
  const [city, setCity] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const options = [
    {
      value: "Helsinki, Finland",
      label: (
        <div style={{ display: "flex" }}>
          <MdPlace size={22} /> Helsinki, Finland
        </div>
      ),
    },
    {
      value: "Turku, Finland",
      label: (
        <div style={{ display: "flex" }}>
          <MdPlace size={22} /> Turku, Finland
        </div>
      ),
      icon: <AiOutlineSearch size={25} color="red" />,
    },
    {
      value: "Oulu, Finland",
      label: (
        <div style={{ display: "flex" }}>
          <MdPlace size={22} /> Oulu, Finland
        </div>
      ),
    },
    {
      value: "Vaasa, Finland",
      label: (
        <div style={{ display: "flex" }}>
          <MdPlace size={22} /> Vaasa, Finland
        </div>
      ),
    },
  ];

  const breakpoints = [600, 1200, 1500];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const customStyles = {
    menu: (provided: any) => ({
      width: 400,
      justifyContent: "center",
      fontSize: 16,
      marginLeft: 50,
    }),
    option: (styles: any) => {
      return {
        ...styles,
        cursor: "pointer",
        marginTop: 5,
        backgroundColor: "transparent",
        color: "black",
      };
    },

    control: (styles: any, { isFocused }: any) => ({
      [mq[2]]: {
        width: isOnFocus === "focused" ? 400 : 200,
      },
      [mq[1]]: {
        width: isOnFocus === "focused" ? 300 : 200,
      },

      [mq[0]]: {
        marginLeft: 0,
        width: isOnFocus === "focused" ? 400 : 180,
        marginRight: isOnFocus === "focused" ? 20 : 0,
        borderTopRightRadius: isOnFocus === "focused" ? 15 : 0,
        borderBottomLeftRadius: isOnFocus === "focused" ? 0 : 15,
      },

      width: isOnFocus === "focused" ? 600 : 200,
      height: 60,
      display: "flex",
      fontFamily: "Lucida Sans Unicode",
      boxShadow: "0px 0px 2px grey",
      justifyContent: "center",
      alignItems: "center",
      borderRight: 0,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      outlineWidth: isFocused ? 2 : 0,
      outlineStyle: "solid",
      cursor: "pointer",
      marginLeft: 50,
    }),

    indicatorsContainer: () => ({
      display: "none",
    }),

    valueContainer: () => ({
      fontSize: 16,
      display: "flex",
      flex: 1,
      marginLeft: 20,
      marginTop: isOnFocus === "focused" ? 25 : 10,
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const fontSize = "16px";

      return {
        ...provided,
        opacity,
        transition,
        fontSize,
      };
    },
  };

  function handleCityChange(e: any) {
    setCity(e.value);
  }

  function OpenMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsOnFocus("focused");
  }

  return (
    <StyledDiv focused={isOnFocus}>
      <StyledDivB focused={isOnFocus}>
        <>
          {isOnFocus ? <StyledLocationText>Location</StyledLocationText> : null}

          <Select
            options={options}
            styles={customStyles}
            onChange={handleCityChange}
            placeholder="Search place"
            onFocus={() => setIsOnFocus("focused")}
          />
        </>

        <div>
          <StyledButton focused={isOnFocus} onClick={OpenMenu}>
            {isOnFocus ? <StyledGuestsText>Guests</StyledGuestsText> : null}
            {children || adults ? (
              <StyledButtonText focused={isOnFocus}>
                {children + adults} guests
              </StyledButtonText>
            ) : (
              <StyledButtonText focused={isOnFocus}>
                Add guests
              </StyledButtonText>
            )}
          </StyledButton>

          {isMenuOpen ? (
            <StyledGuestsDiv>
              <StyledAdultChildrenDiv>
                <h4 style={{ marginBottom: 0 }}>Adults</h4>
                <p style={{ marginTop: 0, marginBottom: 0 }}>
                  Ages 13 or above
                </p>
                <StyledSumSubDiv>
                  <StyledAddRemoveButton
                    onClick={() => {
                      adults > 0 && setAdults(adults - 1);
                    }}
                  >
                    <AiOutlineMinus size={20} />
                  </StyledAddRemoveButton>

                  <p>{adults}</p>
                  <StyledAddRemoveButton
                    onClick={() => {
                      setAdults(adults + 1);
                    }}
                    style={{ marginLeft: 10 }}
                  >
                    <AiOutlinePlus size={20} />
                  </StyledAddRemoveButton>
                </StyledSumSubDiv>
              </StyledAdultChildrenDiv>

              <StyledAdultChildrenDiv>
                <h4 style={{ marginBottom: 0 }}>Children</h4>
                <p style={{ marginTop: 0, marginBottom: 0 }}>Ages 2-12</p>

                <StyledSumSubDiv
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StyledAddRemoveButton
                    onClick={() => {
                      children > 0 && setChildren(children - 1);
                    }}
                  >
                    <AiOutlineMinus size={20} />
                  </StyledAddRemoveButton>
                  <p>{children}</p>
                  <StyledAddRemoveButton
                    onClick={() => {
                      setChildren(children + 1);
                    }}
                    style={{ marginLeft: 10 }}
                  >
                    <AiOutlinePlus size={20} />
                  </StyledAddRemoveButton>
                </StyledSumSubDiv>
              </StyledAdultChildrenDiv>
            </StyledGuestsDiv>
          ) : null}
        </div>

        <StyledSearchButtonDiv focused={isOnFocus}>
          {isOnFocus ? (
            <StyledSearchButton
              onClick={() => {
                handleSearch(city, adults, children);
              }}
            >
              <AiOutlineSearch size={24} style={{ marginRight: 10 }} />
              <p
                style={{
                  fontFamily: "Lucida Sans Unicode",
                }}
              >
                Search
              </p>
            </StyledSearchButton>
          ) : (
            <AiOutlineSearch size={25} color="#e26267" />
          )}
        </StyledSearchButtonDiv>
      </StyledDivB>
    </StyledDiv>
  );
}

export default SearchBar;
