import GoogleUserLogo from './Logo';
import './App.css';
import KanbanBoard from './kanbanBoard';


function App() {

  const kanbanData = [
    { id: 1, description: 'CAM-1', title: 'Update User Profile Page UI', status: 'To Do', priority: 'Urgent', user: 'User 1' },
    { id: 2, description: 'CAM-2', title: 'Add Multi-Language Support - Enable multi-language support within the application.', status: 'In Progress', priority: 'High', user: 'User 2' },
    { id: 3, description: 'CAM-3', title: 'Optimize Database Queries for Performance', status: 'In Progress', priority: 'Low', user: 'User 2' },
    // Add more cards as needed
    {id: 4, description: 'CAM-4', title: 'Implement Email Notification System', status: 'In Progress', priority: 'High', user: 'User 1' },
    { id: 5, description: 'CAM-5', title: 'Enhance Search Functionality', status: 'In Progress', priority: 'No Priority', user: 'User 5' },
    { id: 6, description: 'CAM-6', title: 'Third-Party Payment Gateway', status: 'To Do', priority: 'Low', user: 'User 2' },
    {id: 7, description: 'CAM-7', title: 'Create Onboarding Tutorial for New Users', status: 'Backlog', priority: 'Medium', user: 'User 1' },
    { id: 8, description: 'CAM-8', title: 'Implement Role-Based Access Control (RBAC)', status: 'In Progress', priority: 'High', user: 'User 3' },
    { id: 9, description: 'CAM-9', title: 'Upgrade Server Infrastructure', status: 'To Do', priority: 'Medium', user: 'User 5' },
    { id: 10, description: 'CAM-10', title: 'Conduct Security Vulnerability Assessment', status: 'Backlog', priority: 'Low', user: 'User 4' },
   
  ];

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
    <KanbanBoard data={kanbanData} />
  </div>
  );
}

export default App;
