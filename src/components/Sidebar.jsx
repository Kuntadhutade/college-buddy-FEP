



import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"
export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    
    { label: "Book Store", path: "/book-store",  },
   
    { label: "Authentication", path: "/authentication",  },
    { label: "Typography", path: "/typography",  },
    { label: "Color", path: "/color", },
    { label: "Shadow", path: "/shadow"  },
    { label: "Documentation", path: "/documentation" },
    
  ];

  return (
    <div
      className="bg-light border-end vh-100 p-3 shadow-sm"
      style={{ width: "250px", position: "fixed", left: 0, top: 0 }}
    >
      <h4 className="text-primary fw-bold mb-4 text-center">College Buddy</h4>

      <ul className="nav flex-column">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item mb-2">
            <Link
              to={item.path}
              className={`nav-link d-flex align-items-center gap-2 ${
                location.pathname === item.path
                  ? "active bg-primary text-white rounded"
                  : "text-dark"
              }`}
              style={{
                padding: "10px 15px",
                transition: "0.3s",
              }}
            >
              
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


