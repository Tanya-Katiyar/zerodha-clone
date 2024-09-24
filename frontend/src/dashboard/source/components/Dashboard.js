import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import '../dashboardStyle.css'
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await axios.post(
        "http://localhost:3000",
        {},
        { withCredentials: true }
      );
      if (data.status) {
        setAuthenticated(true);
      } else {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  if (!authenticated) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
        <GeneralContextProvider>
        <WatchList />
        </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;