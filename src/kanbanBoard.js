// KanbanBoard.js
import React, { useEffect, useRef, useState } from 'react';
import KanbanColumn from './kanbanColumn';

const KanbanBoard = ({ data }) => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [groupedData, setGroupedData] = useState({});
  const [sortedData, setSortedData] = useState({});
  const [open, setOpen] = useState(false)

  const groupByOptions = ['status', 'priority', 'user'];
  const sortByOptions = ['priority', 'title'];

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  useEffect(() => {
    groupData(groupBy)
    sortData(sortBy)
  }, [])

  useEffect(() => {
    groupData(groupBy)
  }, [groupBy])

  useEffect(() => {
    sortData(sortBy)
    // }
  }, [sortBy, groupedData])

  const changetheme = () => {

  }

  const groupData = (group) => {
    const groupData = {};
    var arr = [];
    if (group === 'status') {
      arr = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled']
    }
    else if (group === 'priority') {
      arr = ['No Priority', 'Low', 'Medium', 'High', 'Urgent']
    }
    else {
      data?.users?.forEach((card) => {
        arr.push(card?.name)
      })
    }
    arr.forEach((groupName) => {
      groupData[groupName] = [];
    });


    if (group === 'user') {
      data?.tickets?.forEach((card) => {
        var key = card["userId"];
        data?.users.forEach((user) => {
          if (key === user["id"]) {
            groupData[user["name"]].push(card);

          }
        })
      });
    }
    else {
      data?.tickets?.forEach((card) => {
        var key = card[group];
        if (group === "priority") {
          if (key === 0) key = 'No Priority'
          if (key === 1) key = 'Low'
          if (key === 2) key = 'Medium'
          if (key === 3) key = 'High'
          if (key === 4) key = 'Urgent'
        }
        groupData[key].push(card);
      })
    };

    setGroupedData(groupData)
    console.log(groupData, "afsdgdfasd")
  }

  const sortData = (sort) => {
    console.log(groupedData, "sdfsfs")
    if (groupedData) {
      const sortedData = {};
      Object.keys(groupedData)?.forEach((group) => {
        console.log("sortedf")
        const sortedGroup = groupedData[group].sort((a, b) => {
          if (sort === 'priority') {
            return a.priority - b.priority;
          } else if (sort === 'title') {
            return a.title.localeCompare(b.title);
          }
        })
        sortedData[group] = sortedGroup;
      });
      setSortedData(sortedData)
    }
  };




  return (
    <div className="flex flex-col w-full">
      <div className='bg-white flex flex-row justify-between items-center p-4 '>

        <div onClick={() => setOpen(!open)} className='py-2 px-4 flex justify-between items-center gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[12px] border-[1px] bg-white'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path></svg>
          Display
          {open ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg> :
           <div className='rotate-180'> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></div>}
        </div>

        {open &&
          <div ref={menuRef} className="bg-white p-4 w-[300px] absolute top-16 left-10">
            <div className='flex justify-between items-center'>

              <label className="text-gray-600 front-bold">Grouping</label>
              <select
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
                className="p-2 border rounded "
              >
                {groupByOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-between mt-2'>

              <label className="text-gray-600 front-bold">Ordering</label>
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
          </div>}
        <div onClick={changetheme}>
          {true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg> :
            <svg className='text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-around w-full gap-4 p-4">
        {console.log(groupedData, "group")}
        {Object.keys(groupedData)?.map((group) => (
          <KanbanColumn key={group} title={group} cards={groupedData[group]} groupby={groupBy} data={data} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard