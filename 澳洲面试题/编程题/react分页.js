/* 用react写一个原生的table，用fetch去取后端数据，后端数据格式是{
    count: 1,
    results: [
      {
        id: 1,
        firstName: 'david',
        lastName: 'xx',
      },
    ],
  }
后端api的page可选参数，传page=2 就取回第二页的数据
如果是最后一页 不能增加 第一页不能减少 
前端有4个按钮，        <button className='first-page-btn'>first</button>
        <button className='previous-page-btn'>previous</button>
        <button className='next-page-btn'>next</button>
        <button className='last-page-btn'>last</button>
 */

import React, { useState, useEffect } from "react";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`API_URL?page=${page}`);
      const responseData = await response.json();
      setData(responseData.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < data.count) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== data.count) {
      setCurrentPage(data.count);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button className="first-page-btn" onClick={handleFirstPage}>
          First
        </button>
        <button className="previous-page-btn" onClick={handlePreviousPage}>
          Previous
        </button>
        <button className="next-page-btn" onClick={handleNextPage}>
          Next
        </button>
        <button className="last-page-btn" onClick={handleLastPage}>
          Last
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
