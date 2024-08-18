import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-blue-300 p-4 w-60">
      <input
        type="text"
        placeholder="Search by keywords"
        className="w-full p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Search by Job Ref Number"
        className="w-full p-2 mb-4"
      />
      <button className="bg-green-600 text-white w-full py-2 mb-4">Search</button>
      <ul>
        <li className="mb-2 hover:underline cursor-pointer">IT-Sware/DB/Web/Graphics</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-HWare/Networks/Systems</li>
        <li className="mb-2 hover:underline cursor-pointer">Accounting/Auditing/Finance</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-Sware/DB/Web/Graphics</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-HWare/Networks/Systems</li>
        <li className="mb-2 hover:underline cursor-pointer">Accounting/Auditing/Finance</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-Sware/DB/Web/Graphics</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-HWare/Networks/Systems</li>
        <li className="mb-2 hover:underline cursor-pointer">Accounting/Auditing/Finance</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-Sware/DB/Web/Graphics</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-HWare/Networks/Systems</li>
        <li className="mb-2 hover:underline cursor-pointer">Accounting/Auditing/Finance</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-Sware/DB/Web/Graphics</li>
        <li className="mb-2 hover:underline cursor-pointer">IT-HWare/Networks/Systems</li>
        <li className="mb-2 hover:underline cursor-pointer">Accounting/Auditing/Finance</li>
        {/* Add more categories here */}
      </ul>
    </aside>
  );
};

export default Sidebar;