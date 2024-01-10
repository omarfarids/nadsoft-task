import { DashboardLayout } from "@/layout/DashboardLayout.tsx";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Statistics from "./modules/Statistics/pages/Statistics";
import HistoricalData from "./modules/historicalData/page/HistoricalData";

const Dashboard = lazy(() => import("./modules/dashboard/pages/Dashboard"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/historical-data" element={<HistoricalData />} />
          </Routes>
        </DashboardLayout>
      </Suspense>
    </>
  );
}

export default App;
