import { motion } from "framer-motion";

interface MessageBubbleProps {
  text: string;
  sender: "user" | "other";
  timestamp: Date;
}

export default function MessageBubble({
  text,
  sender,
  timestamp,
}: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Hiệu ứng xuất hiện từ dưới lên
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-2 ${sender === "user" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`px-3 py-2 rounded-lg max-w-[70%] ${
          sender === "user"
            ? "bg-primary-500 text-background-100"
            : "bg-background-400"
        }`}
      >
        <p className="text-sm">{text}</p>
        <span className="text-xs opacity-70">
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
}
