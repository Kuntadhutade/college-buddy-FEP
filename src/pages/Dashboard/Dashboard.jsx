

import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SellBookModal from "./SellBookModal";

import  "./Dashboard.css"
import MainPage from "../../MainPage";


export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const handleSellBookClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Dashboard</h2>
          <button className="btn btn-primary" onClick={handleSellBookClick}>
            Sell Book
          </button>
        </div>

        
      </div>


<MainPage/>

      {showModal && <SellBookModal show={showModal} onClose={handleClose} />}
    </MainLayout>
  );
}


