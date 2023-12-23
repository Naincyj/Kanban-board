// KanbanCard.js
import React from 'react';

const KanbanCard = ({ card }) => {
  return (
    <div className="rounded-md m-2 p-2 bg-[#ffff] shadow-[0_0_8px_0_rgba(_0,_0,_0,_0.1)] border-[#e6e7eb] gap-[0.5rem]">
         <div>
            <div className='text-base text-[#8D8D8D] font-sans'>{card.description}</div>
            <div></div>
         </div>
         <div>
            <div></div>
            <div className='text-base font-medium text-[#373737] font-sans leading-[102%]'>{card.title}</div>
         </div>
         <div>
            <div></div>
            <div></div>
         </div>
    </div>
  );
};

export default KanbanCard;
