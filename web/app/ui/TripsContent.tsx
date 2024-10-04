"use client";

import { useEffect, useState } from "react";
import { Trip } from "../types/trip";
import { Card } from "./Card";
import { useSearchParams } from "next/navigation";

export default function TripsContent() {
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  const [trips, setTrips] = useState(Array<Trip>);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}?keyword=${keyword}`)
      .then(async (response) => {
        setTrips((await response.json()).trips);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [keyword]);

  return (
    <div className="grid grid-cols-1 gap-8">
      {trips.map((trip) => (
        <Card key={trip.eid} trip={trip} />
      ))}
    </div>
  );
}
