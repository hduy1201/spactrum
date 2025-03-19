import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardBody, CardHeader } from "@heroui/card";

const data = [
  { name: "Mon", messages: 4 },
  { name: "Tue", messages: 3 },
  { name: "Wed", messages: 7 },
  { name: "Thu", messages: 5 },
  { name: "Fri", messages: 8 },
  { name: "Sat", messages: 6 },
  { name: "Sun", messages: 4 },
];

export const ActivityChart = () => {
  return (
    <Card className="w-full h-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Weekly Message Activity</p>
          <p className="text-small text-default-500">Messages sent per day</p>
        </div>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="messages"
              stroke="#7828c8"
              fill="#7828c8"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};
