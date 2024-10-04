"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  const handleInput = (text: string) => {
    setKeyword(text);
    handleSearch(text);
  };

  const handleSearch = useDebouncedCallback((text: string) => {
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("keyword", text);
    } else {
      params.delete("keyword");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className="md:px-8 relative">
      <Link
        className="absolute right-0 md:right-8 text-gray-300 hover:underline"
        href="/"
      >
        X
      </Link>
      <input
        className="text-center block w-full border-b border-gray-300 my-10 font-bold"
        placeholder={"หาที่เที่ยวแล้วไปกัน..."}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        value={keyword}
      />
    </div>
  );
}
