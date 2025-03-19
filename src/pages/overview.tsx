import DefaultLayout from "@/layouts/default.tsx";
import { ActivityChart } from "@/components/chart/ActivityChart.tsx";
import { StatCard } from "@/components/chart/StatCard.tsx";
import { Clock, Messages, Profile } from "iconsax-react";
import { GroupStatsSection } from "@/components/chart/GroupStatsSection.tsx";

export default function OverviewPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Total Messages"
            value="2,847"
            icon={<Messages size="24" className="text-xl text-default-400" />}
          />
          <StatCard
            title="Last Active"
            value="2 hours ago"
            icon={<Clock size="24" className="text-xl text-default-400" />}
          />
          <StatCard
            title="Groups"
            value="12"
            subtitle="Active in 8"
            icon={<Profile size="24" className="text-xl text-default-400" />}
          />
        </div>

        <ActivityChart />
        {/*<Card>*/}
        {/*  <CardHeader>*/}
        {/*    <div className="flex flex-col">*/}
        {/*      <p className="text-md">Recent Activity</p>*/}
        {/*      <p className="text-small text-default-500">Last 24 hours</p>*/}
        {/*    </div>*/}
        {/*  </CardHeader>*/}
        {/*  <CardBody>*/}
        {/*    <div className="space-y-4">*/}
        {/*      <div className="flex items-center gap-3">*/}
        {/*        <Messages size="24" className="text-xl text-default-400" />*/}
        {/*        <div>*/}
        {/*          <p className="text-small">Sent a message in Design Team</p>*/}
        {/*          <p className="text-tiny text-default-500">2 hours ago</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <Divider />*/}
        {/*      <div className="flex items-center gap-3">*/}
        {/*        <Profile size="24" className="text-xl text-default-400" />*/}
        {/*        <div>*/}
        {/*          <p className="text-small">Joined Marketing Campaign group</p>*/}
        {/*          <p className="text-tiny text-default-500">5 hours ago</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <Divider />*/}
        {/*      <div className="flex items-center gap-3">*/}
        {/*        <Image size="24" className="text-xl text-default-400" />*/}
        {/*        <div>*/}
        {/*          <p className="text-small">*/}
        {/*            Shared 3 images in Product Updates*/}
        {/*          </p>*/}
        {/*          <p className="text-tiny text-default-500">8 hours ago</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </CardBody>*/}
        {/*</Card>*/}

        <GroupStatsSection />
      </section>
    </DefaultLayout>
  );
}
