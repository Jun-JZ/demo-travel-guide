import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Footer, HeroHeader, TagBar } from "../components";
import { PopularAreas } from "../constants";
import { useMediaQuery } from "../hooks";
import { BREAKPOINTS } from "../hooks/useMediaQuery";
import { DestinationsType } from "../types";

const fetchData = async (area: string) => {
  const res = await fetch(`/api/destinations?area=${area}`);
  return res?.json() || [];
};

const Home: NextPage = () => {
  const [destinations, setDestinations] = useState<DestinationsType>([]);

  useEffect(() => {
    (async () => {
      const result = await fetchData("asia");
      setDestinations(result);
    })();
  }, []);

  const handleAreaTagClick = async (area: string) => {
    const result = await fetchData(area);
    setDestinations(result);
  };

  const matches = useMediaQuery(BREAKPOINTS.MD);

  return (
    <>
      <HeroHeader
        isSmall={!matches}
        onSearch={() => alert("not implemented yet")}
      />
      <div
        id="tab_bar"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Popular Destinations</h1>
          <TagBar
            data={PopularAreas}
            isSmall={!matches}
            onClick={handleAreaTagClick}
          />
        </div>
      </div>
      <div
        id="card_grid"
        style={{
          marginTop: "25px",
          display: "grid",
          gridGap: "16px",
          gridTemplateColumns: "repeat(auto-fill, 280px)",
          justifyContent: "center",
        }}
      >
        {destinations?.map((el) => (
          <Link href={`/destinations/${el.label}`} key={el.label}>
            <a>
              <Card imageUrl={el.imageUrl} label={el.label} />
            </a>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
