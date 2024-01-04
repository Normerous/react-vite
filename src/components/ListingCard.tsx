import React, { Suspense, lazy, useState } from "react";
import { useInView } from "react-intersection-observer";
const Card2 = lazy(() => import("./Card2"));

const ListingCard = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <Suspense fallback={<div>Loading...</div>}>{inView && <Card2 />}</Suspense>
    </div>
  );
};

export default ListingCard;
