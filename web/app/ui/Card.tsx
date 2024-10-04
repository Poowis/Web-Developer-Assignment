import { Trip } from "../types/trip";
import Link from "next/link";

export function Card({ trip }: { trip: Trip }) {
  return (
    <div className="flex gap-8 md:h-96 flex-col md:flex-row">
      <div className="aspect-square md:aspect-auto md:w-1/4">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={trip.photos[0]}
          alt={trip.title}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <Link href={trip.url}>
            <h2 className="font-bold">{trip.title}</h2>
          </Link>
          <p className="text-gray-600">
            {trip.description.slice(0, 180)}
            ...
            <a
              className="text-sky-400 whitespace-nowrap underline"
              href={trip.url}
            >
              อ่านต่อ
            </a>
          </p>

          <div>
            <span className="text-gray-500"> หมวด:</span>
            {trip.tags.map((tag) => (
              <Link
                key={tag}
                className="pl-4 text-gray-600 underline"
                href={`?keyword=${tag}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {trip.photos.slice(1).map((photo) => (
            <img
              className="rounded-lg h-full w-auto object-cover"
              key={photo}
              src={photo}
              alt={trip.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
