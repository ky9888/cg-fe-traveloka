import{Routes,Route} from "react-router-dom";
import Flight from "./pages/Flight"
import HomeFlight from "./pages/HomeFlight"


function App() { 
  return (
     <>
     <Routes>
     <Route path="/flight" element={<Flight/>}/>
     <Route path="/" element={<HomeFlight/>}/>
     
    </Routes>
     </>
   )
 }
 export default App
