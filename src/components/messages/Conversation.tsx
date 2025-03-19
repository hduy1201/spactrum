import MessageBubble from "./MessageBubble.tsx";
import { ScrollShadow } from "@heroui/scroll-shadow";

interface ConversationProps {
  messages: {
    id: string;
    text: string;
    sender: "user" | "other";
    timestamp: Date;
  }[];
}

export default function Conversation({ messages }: ConversationProps) {
  return (
    <ScrollShadow hideScrollBar className="flex-grow p-4">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            text={message.text}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}
      </div>
    </ScrollShadow>
  );
}
