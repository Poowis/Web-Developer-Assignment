import SearchBox from "./ui/SearchBox";
import TripsContent from "./ui/TripsContent";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-center text-sky-400">เที่ยวไหนดี</h1>
      <SearchBox></SearchBox>
      <TripsContent></TripsContent>
    </div>
  );
}
