import React, { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StaticallyCard from "../components/StaticallyCard";
import DynamicCard from "../components/DynamicCard";
const ListingCard = lazy(() => import("../components/ListingCard"));
const Card2 = lazy(() => import("../components/Card2"));

export default function Home() {
const navigate = useNavigate();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  // Throttle function
  const throttle = (func: (event: MouseEvent) => void, delay: number) => {
    let lastCallTime = 0;
    return (event: MouseEvent) => {
      const now = new Date().getTime();
      if (now - lastCallTime >= delay) {
        func(event);
        lastCallTime = now;
      }
    };
  };

  useEffect(() => {
    const handleWindowMouseMove = throttle((event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    }, 1000);

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const nextPage = () => {
    console.log(';;;;')
    navigate('/About')
  };

  return (
    <div className="App">
      <StaticallyCard></StaticallyCard>
      <StaticallyCard></StaticallyCard>
      <StaticallyCard></StaticallyCard>
      <StaticallyCard></StaticallyCard>
      <DynamicCard component={() => <Card2 />} name="Card4"></DynamicCard>
      <DynamicCard component={() => <Card2 />} name="Card5"></DynamicCard>
      <DynamicCard component={() => <Card2 />} name="Card6"></DynamicCard>
      <DynamicCard component={() => <Card2 />} name="Card7"></DynamicCard>
      <div onClick={nextPage}>Next Page....</div>
      <div>
        <p>
          Mouse positioned at:{" "}
          <b>
            ({coords.x}, {coords.y})
          </b>
        </p>
      </div>
      <div style={{ height: "70vh" }}>sss</div>
      <ListingCard></ListingCard>
      <div style={{ height: "50px" }}>footer</div>
    </div>
  );
}
