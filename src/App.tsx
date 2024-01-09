import { DashboardLayout } from "@/layout/DashboardLayout.tsx";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./modules/dashboard/pages/Dashboard"));

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </DashboardLayout>
      </Suspense>
    </>
  );
}

export default App;
