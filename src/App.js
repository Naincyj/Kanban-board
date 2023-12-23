import GoogleUserLogo from './Logo';
import './App.css';
import KanbanBoard from './kanbanBoard';
import react, { useState, useEffect } from "react"
import axios from 'axios';


function App() {
  const [theme,settheme] = useState(true)
  const [kanbanData, setKanbanData] = useState([]);

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
      

    <div className="bg-gray-300 min-h-screen">
      <KanbanBoard data={kanbanData} />
    </div>
  );
}

export default App;
