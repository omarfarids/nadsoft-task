import { DashboardLayout } from "@/layout/DashboardLayout.tsx";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./modules/dashboard/pages/Dashboard"));
const Statistics = lazy(() => import("./modules/Statistics/pages/Statistics"));
const HistoricalData = lazy(
  () => import("./modules/historicalData/page/HistoricalData")
);
const Comparison = lazy(() => import("./modules/comparison/pages/Comparison"));

function App() {
  return (
    <>
      <DashboardLayout>
        <Suspense
          fallback={
            <div className="w-screen h-screen flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/historical-data" element={<HistoricalData />} />
            <Route path="/data-comparison" element={<Comparison />} />
          </Routes>
        </Suspense>
      </DashboardLayout>
    </>
  );
}

export default App;
