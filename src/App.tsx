import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SideBar from "@/components/SideBar.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import GeneralTab from "@/pages/general.tsx";
import NotificationTab from "@/pages/notification.tsx";

const OverviewPage = lazy(() => import("@/pages/overview.tsx"));
const MessagesPage = lazy(() => import("@/pages/messages.tsx"));
const ProfilePage = lazy(() => import("@/pages/profile.tsx"));

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="h-full w-full">
        <Navbar />

        <Suspense
          fallback={
            <div className="h-full flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-500" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/message" element={<MessagesPage />} />
            <Route path="/profile" element={<ProfilePage />}>
              <Route path="general" element={<GeneralTab />} />
              <Route path="notification" element={<NotificationTab />} />
              <Route index element={<GeneralTab />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
