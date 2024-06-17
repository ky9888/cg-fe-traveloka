import{Routes,Route} from "react-router-dom";
import Flight from "./pages/homePage/Flight";
import HomeFlight from "./pages/homePage/HomeFlight"
import FlightSearch from "./pages/homePage/FlightSearch";
import HotelPage from "./pages/homePage/hotel";
import HotelSearch from "./pages/homePage/HotelSearch";
import Cooperate from "./pages/homePage/cooperate";
import Hotelid from "./pages/homePage/hoteID";
import FlightID from "./pages/homePage/flightID";



function App() { 
  return (
     <>
     <Routes>
     <Route path="/flight" element={<Flight/>}/>
     <Route path="/" element={<HomeFlight/>}/>
     <Route path="/FlightSearch" element={<FlightSearch/>}/>
     <Route path="/flightTicker/:id" element={<FlightID/>}/>
     <Route path="/hotel" element={<HotelPage/>}/>  
     <Route path="/hotel/:id" element={<Hotelid/>}/>  
     <Route path="/hotelSearch" element={<HotelSearch/>}/>  
     <Route path="/cooperate" element={<Cooperate/>}/>  
     
    </Routes>
     </>
   )
 }
 export default App
