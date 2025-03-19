import DefaultLayout from "@/layouts/default.tsx";
import { EditIcon, TemptAvatar } from "@/components/Icons.tsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@heroui/tabs";
import { Key, useCallback } from "react";

export default function ProfilePage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentTab = pathname.split("/").pop();

  const handleTabChange = useCallback(
    (key: Key) => {
      const keyString = key.toString();
      if (keyString !== currentTab) {
        navigate(keyString);
      }
    },
    [navigate, currentTab], // Dependencies
  );
  return (
    <DefaultLayout>
      <section className="w-full h-full p-8 bg-background-300">
        <div className="w-full h-fit p-8 gap-4 rounded-[44px] bg-background-100 flex flex-col items-center">
          <div className="flex flex-col items-center gap-2.5">
            <TemptAvatar size={80} />
            <div className="flex items-center gap-2.5">
              <p className="font-semibold text-[14px]">Nguyen Van Teo</p>
              <EditIcon />
            </div>
          </div>

          <Tabs
            selectedKey={currentTab}
            onSelectionChange={handleTabChange}
            aria-label="Tabs"
            classNames={{
              base: "w-full",
              tabList: "w-full p-0 border-b border-divider",
              cursor: "w-full bg-primary-500",
              tab: "max-w-fit px-2 h-12",
              tabContent:
                "group-data-[selected=true]:font-semibold text-secondary-300 text-[14px]",
            }}
            variant="underlined"
          >
            <Tab key="general" title="General" />
            <Tab key="notification" title="Notification" />
          </Tabs>

          <Outlet />
        </div>
      </section>
    </DefaultLayout>
  );
}
