"use client";

const list = [
  {
    id: 1,
    nameTour: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...read more",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    cost: "$1,995",
  },
  {
    id: 2,
    nameTour: "Best of Ireland in 14 Days Tour",
    text: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...read more",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    cost: "$3,895",
  },
  {
    id: 3,
    nameTour: "Best of Salzburg & Vienna in 8 Days Tour",
    text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...read more",
    image: "http://course-api.com/images/tours/tour-3.jpeg",
    cost: "$2,695",
  },
  {
    id: 4,
    nameTour: "Best of Rome in 7 Days Tour",
    text: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...read more",
    image: "https://www.course-api.com/images/tours/tour-4.jpeg",
    cost: "$2,095",
  },
  {
    id: 5,
    nameTour: "Best of Poland in 10 Days Tour",
    text: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...read more",
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
        {list.map(({ id, nameTour, text, image, cost }) => (
          <ToursList
            key={id}
            nameTour={nameTour}
            text={text}
            image={image}
            cost={cost}
          />
        ))}
      </div>
    </div>
  );
};

const ToursList = ({ nameTour, text, image, cost }) => {
  return (
    <div className="flex flex-col shadow-2xl/25 w-75 ">
      <div className="relative flex justify-end">
        <img className="w-75 h-75" src={image} alt="profile" />
        <span className="absolute bg-green-500 text-[15px] text-white">
          {cost}
        </span>
      </div>

      <div className="p-2 text-black">
        <h2 className=" font-semibold  text-center">{nameTour}</h2>
        <p className="p-5 text-gray-500 text-sm ">{text}</p>
      </div>
      <div className="flex justify-center">
        <button className="text-green-500 border-1 w-65 rounded-md  hover:bg-green-500 hover:text-white mb-3">
          Not Interested
        </button>
      </div>
    </div>
  );
};
