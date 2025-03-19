import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GroupActivityCard } from "@/components/chart/GroupActivityCard.tsx";

const groupActivityData = [
  {
    name: "Design Team",
    members: 24,
    messages: 1432,
    lastActive: "2h ago",
    activity: 85,
  },
  {
    name: "Marketing",
    members: 18,
    messages: 856,
    lastActive: "4h ago",
    activity: 65,
  },
  {
    name: "Product",
    members: 32,
    messages: 2156,
    lastActive: "1h ago",
    activity: 92,
  },
];

const weeklyGroupActivity = [
  { name: "Mon", Design: 30, Marketing: 20, Product: 35 },
  { name: "Tue", Design: 40, Marketing: 25, Product: 45 },
  { name: "Wed", Design: 35, Marketing: 30, Product: 40 },
  { name: "Thu", Design: 50, Marketing: 35, Product: 55 },
  { name: "Fri", Design: 45, Marketing: 40, Product: 50 },
];

export const GroupStatsSection = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold">Group Activity</h2>

      <Card className="w-full h-[400px]">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md">Weekly Group Interactions</p>
            <p className="text-small text-default-500">Messages per group</p>
          </div>
        </CardHeader>
        <CardBody>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyGroupActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Design" fill="#7828c8" />
              <Bar dataKey="Marketing" fill="#0072F5" />
              <Bar dataKey="Product" fill="#17C964" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groupActivityData.map((group) => (
          <GroupActivityCard
            key={group.name}
            name={group.name}
            members={group.members}
            messages={group.messages}
            lastActive={group.lastActive}
            activity={group.activity}
          />
        ))}
      </div>
    </div>
  );
};
