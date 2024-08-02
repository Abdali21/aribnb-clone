import { LiveData } from "@/app/types/app";
import { getLive } from "@/app/utils/api";
import LiveCard from "./LiveCard";
import MainHeading from "../mainHeading/MainHeading";

const Live = async () => {
    const liveData: LiveData = await getLive();
    return (
      <section className='pt-6 my-6'>
        <div className='container'>
          <MainHeading title="Explore Different Property Types"/>
          <div className='flex space-x-3 overflow-scroll p-3 no-scrollbar'>
            {liveData.map((item) => (
              <LiveCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Live
