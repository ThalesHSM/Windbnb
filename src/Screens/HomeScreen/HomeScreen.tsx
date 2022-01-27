import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {
  StyledFinlandDiv,
  StyledHeaderDiv,
  StyledListDiv,
  StyledMainDiv,
  StyledPlaceImage,
  StyledPlacesDiv,
  StyledPlaceTitle,
  StyledRatingDiv,
  StyledSuperHostText,
} from "./StyledHomeScreen";
import { data } from "../../constants/places";

interface Idata {
  id: string;
  city: string;
  rating?: number;
  superHost?: boolean;
  guests: number;
  photo: string;
  type: string;
  title: string;
}

function HomeScreen() {
  const [isOnFocus, setIsOnFocus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [places, setPlaces] = useState<Idata[]>(data);

  useEffect(() => {
    const concernedElement = document.querySelector(".click-text")!;
    document.addEventListener("mousedown", (event: any) => {
      if (concernedElement.contains(event.target)) {
        setIsOnFocus("");
        setIsMenuOpen(false);
      }
      return;
    });
  }, []);

  function handleSearch(city: string, adults: number, children: number) {
    if (city === "") {
      return;
    }
    var newArray = data.filter((el) => {
      return el.guests >= adults + children && el.city === city;
    });

    setPlaces(newArray);
    setIsOnFocus("");
    setIsMenuOpen(false);
  }

  return (
    <StyledMainDiv>
      <StyledHeaderDiv focused={isOnFocus}>
        <img
          src="https://raw.githubusercontent.com/MinsterRobin/windbnb/bbded066e5f0c241471ecc635c883c06f4f7f650/src/data/assets/logo.svg"
          alt=""
          style={{ width: 150 }}
        />

        <SearchBar
          isOnFocus={isOnFocus}
          setIsOnFocus={setIsOnFocus}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleSearch={handleSearch}
        />
      </StyledHeaderDiv>

      <StyledListDiv className="click-text" focused={isOnFocus}>
        <StyledFinlandDiv>
          <h1>Stays in Finland</h1>
          {places.length > 12 ? (
            <p> 12+ stays</p>
          ) : (
            <p> {places.length} stays</p>
          )}
        </StyledFinlandDiv>

        <StyledPlacesDiv>
          {places &&
            places.length > 0 &&
            places.map((item: any) => (
              <div key={item.id}>
                <StyledPlaceImage src={item.photo} alt="" />

                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {item.superHost === true ? (
                    <StyledSuperHostText>SUPER HOST</StyledSuperHostText>
                  ) : null}
                  <p style={{ color: "grey", marginBottom: -2 }}>{item.type}</p>
                  <StyledRatingDiv>
                    <AiFillStar size={25} color={"red"} style={{}} />
                    <h3 style={{ marginLeft: 5, marginBottom: 20 }}>
                      {item.rating}
                    </h3>
                  </StyledRatingDiv>
                </div>

                <StyledPlaceTitle>
                  {item.title.length > 40
                    ? item.title.substring(0, 36) + "..."
                    : item.title}
                </StyledPlaceTitle>
              </div>
            ))}
        </StyledPlacesDiv>
      </StyledListDiv>
    </StyledMainDiv>
  );
}

export default HomeScreen;
