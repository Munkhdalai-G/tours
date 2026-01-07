import Image from "next/image";

const list = [
  {
    id: 1,
    nameTour: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...read more",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
  },
  {
    id: 2,
    nameTour: "Best of Ireland in 14 Days Tour",
    text: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...read more",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
  },
  {
    id: 3,
    nameTour: "Best of Salzburg & Vienna in 8 Days Tour",
    text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...read more",
    image: "http://course-api.com/images/tours/tour-3.jpeg",
  },
  {
    id: 4,
    nameTour: "Best of Rome in 7 Days Tour",
    text: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...read more",
    image: "https://www.course-api.com/images/tours/tour-4.jpeg",
  },
  {
    id: 5,
    nameTour: "Best of Poland in 10 Days Tour",
    text: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...read more",
    image: "https://www.course-api.com/images/tours/tour-5.jpeg",
  },
];

export default function Home() {
  return (
    <div className="">
      <h2 className="flex justify-center  text-[39px] font-normal leading-none font-sans text-black pb">
        Our Tours
      </h2>
      <div className="mt-10">
        <Tours />
      </div>
    </div>
  );
}

const Tours = () => {
  return (
    <div className="border-2 border-red-500 mt-10 p-6">
      <div className=" grid grid-cols-3 gap-8 ">
        {list.map(({ id, nameTour, text, image }) => (
          <ToursList key={id} nameTour={nameTour} text={text} image={image} />
        ))}
      </div>
    </div>
  );
};

const ToursList = ({ nameTour, text, image }) => {
  return (
    <div className="flex flex-col border-2 border-blue-500 w-75  ">
      <img className="w-75 h-85" src={image} alt="profile" text />
      <div>
        <h2 className="text-black font-bold ">{nameTour}</h2>
        <p className="text-black  ">{text}</p>
      </div>
      <div className="flex justify-center">
        <button className="text-green-500 border-1 w-65 rounded-md  hover:bg-green-500 hover:text-white ">
          Not Interested
        </button>
      </div>
    </div>
  );
};
