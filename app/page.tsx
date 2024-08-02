import Explore from "./components/explore/Explore";
import Live from "./components/live/Live";
import Greatest from "./components/Greatest/Greatest";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slider from "./components/home/Slider";


export default function Home() {
  return (     
     <>
      <Header/>
        <main>
           <Slider/>
           <Explore/>
           <Live/>
           <Greatest 
              img='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              title='The Greatest Outdoors'
              desc='Wishlists curated by Airbnb'
              linkText='Get Inspired'
            />
        </main>
        <Footer/>
     </>
  );
}
