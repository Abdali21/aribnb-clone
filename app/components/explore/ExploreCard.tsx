import { ExploreItem } from "@/app/types/app";
import Image from "next/image";


type ExploreCardProps = ExploreItem;
const ExploreCard = ({ location, distance, img }: ExploreCardProps) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
       <div className='relative w-20 h-20'>
          <Image src={img} alt='ExploreCard-Img' className="rounded-md" fill />
       </div>
       <div>
         <h2>{location}</h2>
         <h3 className='text-gray-500'>{distance}</h3>
       </div>
    </div>
  );
};

export default ExploreCard
