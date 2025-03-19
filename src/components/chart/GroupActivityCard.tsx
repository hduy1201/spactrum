import { Card, CardBody } from "@heroui/card";
import { Badge } from "@heroui/badge";
import { Progress } from "@heroui/progress";
import { Profile } from "iconsax-react";

interface GroupActivityProps {
  name: string;
  members: number;
  messages: number;
  lastActive: string;
  activity: number;
}

export const GroupActivityCard = ({
  name,
  members,
  messages,
  lastActive,
  activity,
}: GroupActivityProps) => {
  return (
    <Card>
      <CardBody className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex items-center gap-2">
              <Profile size="24" className="text-default-400" />
              <span className="text-small text-default-500">
                {members} members
              </span>
            </div>
          </div>
          <Badge color="primary" variant="flat">
            Active
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-small">
            <span className="text-default-500">Activity Level</span>
            <span className="text-default-700">{activity}%</span>
          </div>
          <Progress
            value={activity}
            color="primary"
            className="w-full"
            size="sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <p className="text-small text-default-500">Messages</p>
            <p className="text-lg font-semibold">{messages}</p>
          </div>
          <div className="space-y-1">
            <p className="text-small text-default-500">Last Active</p>
            <p className="text-lg font-semibold">{lastActive}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
