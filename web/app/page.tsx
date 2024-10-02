"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { trip } from "./types/trip";

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  let keyword = searchParams.get("keyword") || "";

  const [trips, setTrips] = useState(Array<trip>);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}?keyword=${keyword}`)
      .then(async (response) => {
        setTrips((await response.json()).trips);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [keyword]);

  const handleSearch = useDebouncedCallback((text) => {
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("keyword", text);
    } else {
      params.delete("keyword");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={"เกาะ"}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={keyword}
      />
      {trips.map((trip) => (
        <div key={trip.eid}>{trip.title}</div>
      ))}
    </div>
  );
}
