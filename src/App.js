import GoogleUserLogo from './Logo';
import './App.css';
import KanbanBoard from './kanbanBoard';
import react,{useState,useEffect} from "react"
const axios = require('axios');


function App() {

  const [kanbanData, setKanbanData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);


    const fetchData = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
      if(response){const data = await  response.json();
        
      // If using Axios:
      // const response = await axios.get('YOUR_API_ENDPOINT');
      // const data = response.data;
         console.log(data);
      setKanbanData(data);}
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


    <div className="bg-gray-100 min-h-screen">
    {/* <KanbanBoard data={kanbanData.tickets} /> */}
  </div>
  );
}

export default App;
