import { Avatar } from "@heroui/avatar";
import { Messages2 } from "iconsax-react";
import { ScrollShadow } from "@heroui/scroll-shadow";
import WickAvatar from "@/assets/jw.jpg";
import SnoopAvatar from "@/assets/sd.jpg";
import CR7Avatar from "@/assets/cr7.jpg";
import KobeAvatar from "@/assets/kobe.jpg";
import GandhiAvatar from "@/assets/mg.jpg";
import VanGoghAvatar from "@/assets/vg.jpg";
import JobsAvatar from "@/assets/jobs.jpg";
import MrBeanAvatar from "@/assets/bean.jpg";

interface MessageListProps {
  selected: number;
  onSelect: (index: number) => void;
}

const messages = [
  { name: "John Wick", time: "1m ago", avatar: WickAvatar, unread: true },
  { name: "Snoop Dogg", time: "2m ago", avatar: SnoopAvatar, replied: true },
  { name: "Ronaldo", time: "2m ago", avatar: CR7Avatar, unread: true },
  { name: "Kobe", time: "2m ago", avatar: KobeAvatar, replied: true },
  {
    name: "Mahatama Gandhi",
    time: "2m ago",
    avatar: GandhiAvatar,
    replied: true,
  },
  { name: "Van Gogh", time: "2m ago", avatar: VanGoghAvatar, replied: true },
  { name: "Jobs", time: "2m ago", avatar: JobsAvatar, replied: true },
  { name: "Mr. Bean", time: "2m ago", avatar: MrBeanAvatar, replied: true },
];

export default function MessageList({ selected, onSelect }: MessageListProps) {
  return (
    <ScrollShadow hideScrollBar className="w-full flex flex-col gap-3">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex items-center px-6 py-3 rounded-xl gap-3 cursor-pointer transition-all ${
            selected === index ? "bg-background-300" : "hover:bg-background-400"
          }`}
          onClick={() => onSelect(index)}
        >
          <Avatar className="w-12" src={msg.avatar} />
          <div className="w-full flex flex-col gap-2 lg:appearance-none">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-secondary-500 text-sm">
                {msg.name}
              </h4>
              <span className="text-xs text-secondary-300">{msg.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-secondary-500 leading-tight">
                Thank you very much...
              </p>
              {msg.replied ? (
                <Messages2 size={22} className="text-primary-600" />
              ) : msg.unread ? (
                <span className="w-2 h-2 bg-danger-500 rounded-full" />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </ScrollShadow>
  );
}
