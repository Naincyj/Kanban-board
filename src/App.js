import GoogleUserLogo from './Logo';
import './App.css';
import KanbanBoard from './kanbanBoard';
import react, { useState, useEffect, useContext } from "react"
import axios from 'axios';
import { MyProvider, context } from './Context';


function App() {
  const [kanbanData, setKanbanData] = useState([]);
  const {theme} = useContext(context)
  useEffect(() => {
    fetchData();
  }, []);

   

  useEffect(() => {
    if (kanbanData) {
      localStorage.setItem("data",kanbanData)
    }
  },[kanbanData])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');

      if (response) {
        const data = response.data;
        setKanbanData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  return (
    // <div className="">
    //   <div>
    //           <div className='text-base text-[#8D8D8D] font-sans'>CAM-3</div>
    //           <div></div>
    //   </div>
    //   <div>
    //           <div></div>
    //           <div></div>
    //   </div>
    //   <div>
    //           <div></div>
    //           <div></div>
    //   </div>



    // </div>
      

      
    <div className={` min-h-screen ${theme ? " text-black" : "text-white"}`}>
      <KanbanBoard data={kanbanData} />
    </div>

  );
}

export default App;
