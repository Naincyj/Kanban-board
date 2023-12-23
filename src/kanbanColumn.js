// KanbanColumn.js
import React from 'react';
import KanbanCard from './kanbanCard';

const KanbanColumn = ({ title, cards }) => {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {cards.map((card) => (
        <KanbanCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default KanbanColumn;
