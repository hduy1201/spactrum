import { Select, SelectItem } from "@heroui/select";
import { SelectorIcon } from "@/components/Icons.tsx";
import { RadioGroup, RadioProps, useRadio } from "@heroui/radio";
import { cn } from "@heroui/theme";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { Button } from "@heroui/button";

const languages = [
  { key: "en", label: "English" },
  { key: "vi", label: "Vietnamese" },
];

const timezones = [
  { key: "utc", label: "UTC" },
  { key: "gmt", label: "GMT" },
];

const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "max-w-[300px] min-w-[180px] cursor-pointer border-2 border-default rounded-xl px-5 py-4",
        "data-[selected=true]:border-primary",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  );
};

export default function GeneralTab() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Select
        disableSelectorIconRotation
        className="max-w-xs"
        label="Language"
        labelPlacement="outside"
        placeholder="Choose your language"
        selectorIcon={<SelectorIcon />}
      >
        {languages.map((language) => (
          <SelectItem key={language.key}>{language.label}</SelectItem>
        ))}
      </Select>
      <Select
        disableSelectorIconRotation
        className="max-w-xs"
        label="Timezone"
        labelPlacement="outside"
        placeholder="Choose your timezone"
        selectorIcon={<SelectorIcon />}
      >
        {timezones.map((timezone) => (
          <SelectItem key={timezone.key}>{timezone.label}</SelectItem>
        ))}
      </Select>

      <RadioGroup orientation="horizontal">
        <CustomRadio size="sm" value="24">
          24 Hours
        </CustomRadio>
        <CustomRadio size="sm" value="12">
          12 Hours
        </CustomRadio>
      </RadioGroup>
      <span>
        <Button color="primary">Save Changes</Button>
      </span>
    </div>
  );
}
