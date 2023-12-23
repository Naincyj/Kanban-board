// KanbanBoard.js
import React, { useState } from 'react';
import KanbanColumn from './kanbanColumn';

const KanbanBoard = ({ data }) => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  const groupByOptions = ['status', 'priority', 'user'];
  const sortByOptions = ['priority', 'title'];

  const groupData = (group) => {
    const groupedData = {};

    data.forEach((card) => {
      const key = card[group];
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(card);
    });

    return groupedData;
  };

  const sortData = (sort) => {
    return data.sort((a, b) => {
      if (sort === 'priority') {
        return a.priority.localeCompare(b.priority);
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
