"use client";

import { useState } from "react";

const list = [
  {
    id: 1,
    nameTour: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    cost: "$1,995",
  },
  {
    id: 2,
    nameTour: "Best of Ireland in 14 Days Tour",
    text: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    cost: "$3,895",
  },
  {
    id: 3,
    nameTour: "Best of Salzburg & Vienna in 8 Days Tour",
    text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
    image: "http://course-api.com/images/tours/tour-3.jpeg",
    cost: "$2,695",
  },
  {
    id: 4,
    nameTour: "Best of Rome in 7 Days Tour",
    text: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    image: "https://www.course-api.com/images/tours/tour-4.jpeg",
    cost: "$2,095",
  },
  {
    id: 5,
    nameTour: "Best of Poland in 10 Days Tour",
    text: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
    image: "https://www.course-api.com/images/tours/tour-5.jpeg",
    cost: "$2,595",
  },
];

export default function Home() {
  return (
    <div className="">
      <h2 className="flex justify-center  text-[39px] font-normal leading-none font-sans text-black  underline underline-offset-22 decoration-green-500">
        Our Tours
      </h2>
      <div>
        <Tours />
      </div>
    </div>
  );
}

const Tours = () => {
  return (
    <div className=" flex justify-center mt-10 mb-10">
      <div className=" grid grid-cols-3 gap-8   ">
        {list.map(({ id, nameTour, text, image, cost, onSelect }) => (
          <ToursList
            key={id}
            nameTour={nameTour}
            text={text}
            image={image}
            cost={cost}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

const ToursList = ({ nameTour, text, image, cost, id }) => {
  const [expand, setExpand] = useState(false);
  const newText = !expand ? text?.slice(0, 200) : text;
  const onSelect = () => {
    console.log("hi");
  };

  return (
    <div className="flex flex-col shadow-2xl/25 w-75 h-min ">
      <div className="relative flex justify-end">
        <img className="w-75 h-75" src={image} alt="profile" />
        <span className="absolute bg-green-500 text-[15px] text-white">
          {cost}
        </span>
      </div>

      <div className="p-2 text-black">
        <h2 className=" font-semibold  text-center">{nameTour}</h2>

        <p className="pl-5 pr-5 pt-5 text-gray-500 text-sm ">
          {newText}
          <span
            onClick={() => setExpand(!expand)}
            className="text-green-700 text-sm font-medium  "
          >
            {expand ? "Show Less" : "...Read More"}
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="text-green-500 border-1 w-65 rounded-md  hover:bg-green-500 hover:text-white mb-3"
          onClick={onSelect}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
