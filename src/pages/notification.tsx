import { Switch, SwitchProps, useSwitch } from "@heroui/switch";
import { Button } from "@heroui/button";

const CustomSwitch = (props: SwitchProps) => {
  const { children } = useSwitch(props);
  return (
    <Switch {...props}>
      <span className="text-sm font-semibold">{children}</span>
    </Switch>
  );
};

export default function NotificationTab() {
  return (
    <div className="w-full flex flex-col gap-4">
      <CustomSwitch defaultSelected>Message</CustomSwitch>
      <CustomSwitch>New Contact</CustomSwitch>
      <span>
        <Button color="primary">Save Changes</Button>
      </span>
    </div>
  );
}
