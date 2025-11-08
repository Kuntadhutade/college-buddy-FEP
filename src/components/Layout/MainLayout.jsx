


// import React from "react";
// import Sidebar from "../Sidebar";


// const MainLayout = ({ children }) => {
//   return (
//     <div className="d-flex">
//       <Sidebar />
      
//       <div className="flex-grow-1 p-3 bg-light" style={{ minHeight: "100vh",minwidth: "200px" }}>
      
//         {children}
//       </div>
//     </div>
//   );
// };

// export default MainLayout;



import React from "react";
import Sidebar from "../Sidebar";
import "./MainLayout.css";


export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

