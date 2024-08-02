import { LiveItem } from "@/app/types/app";
import Image from "next/image";


type LiveCardProps = LiveItem;
 const LiveCard = ({ title, img }: LiveCardProps) => {
       return (
        <div className='relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
          <Image 
            src={img} 
            alt='LiveCard-Img' 
            fill
            className="object-cover rounded-md shadow-md"
          />
          <div className='absolute left-0 top-0'>
            <h6 className='text-sm font-semibold text-white bg-black  p-2 rounded-e-md'>
              {title}
            </h6>
          </div>
        </div>
      </div>
      );
    };
export default LiveCard
