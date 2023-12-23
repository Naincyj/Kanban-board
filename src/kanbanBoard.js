// KanbanBoard.js
import React, { useState } from 'react';
import KanbanColumn from './kanbanColumn';

const KanbanBoard = (data) => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  const groupByOptions = ['status', 'priority', 'userId'];
  const sortByOptions = ['priority', 'title'];

  const groupData = (group) => {
    const groupedData = {};
       const arr=[];
      if(group==='status')
      {
        arr.push('Backlog');
        arr.push('Todo');
        arr.push('In progress');
        arr.push('Done');
        arr.push('Cancelled');
        
      }
      
    else if(group==='priority')
    {
      arr.push('No Priority');
        arr.push('Low');
        arr.push('Medium');
        arr.push('High');
        arr.push('Urgent');
        
    }
    
  else
  { arr.push('usr-1');
  arr.push('usr-2');
  arr.push('usr-3');
  arr.push('usr-4');
  arr.push('usr-5');
  

  }
     arr.forEach((groupName)=>{
       
       groupedData[groupName]=[];
     });

     {console.log(data,"tickets")}
    data?.forEach((card) => {
      console.log(card,"card")
      const key = card[group];
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(card);
    });

    return groupedData;
  };

  const sortData = (sort) => {
    return data?.sort((a, b) => {
      if (sort === 'priority') {
        return a.priority - b.priority;
      } else if (sort === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedData = groupData(groupBy);
  const sortedData = sortData(sortBy);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <label className="mr-2">Group By:</label>
        <select
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
          className="p-2 border rounded mr-4"
        >
          {groupByOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label className="mr-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          {sortByOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-around w-full">
         {console.log({groupedData})};
        {Object.keys(groupedData).map((group) => (
          <KanbanColumn key={group} title={group} cards={groupedData[group]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
