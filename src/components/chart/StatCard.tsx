import { Card, CardBody } from "@heroui/card";
import { JSX } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
  subtitle?: string;
}

export const StatCard = ({ title, value, icon, subtitle }: StatCardProps) => {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-small font-medium text-default-500">{title}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold">{value}</span>
              {subtitle && (
                <span className="text-tiny text-default-500">{subtitle}</span>
              )}
            </div>
          </div>
          {icon}
        </div>
      </CardBody>
    </Card>
  );
};
