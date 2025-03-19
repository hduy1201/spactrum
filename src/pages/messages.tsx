import DefaultLayout from "@/layouts/default.tsx";
import SearchBar from "@/components/messages/SearchBar.tsx";
import MessageList from "@/components/messages/MessageList.tsx";
import ChatHeader from "@/components/messages/ChatHeader.tsx";
import ChatInput from "@/components/messages/ChatInput.tsx";
import Conversation from "@/components/messages/Conversation.tsx";
import { useState } from "react";

import WickAvatar from "@/assets/jw.jpg";
import SnoopAvatar from "@/assets/sd.jpg";
import CR7Avatar from "@/assets/cr7.jpg";
import KobeAvatar from "@/assets/kobe.jpg";
import GandhiAvatar from "@/assets/mg.jpg";
import VanGoghAvatar from "@/assets/vg.jpg";
import JobsAvatar from "@/assets/jobs.jpg";
import MrBeanAvatar from "@/assets/bean.jpg";

// Danh sách người messages
const chatUsers = [
  { name: "John Wick", avatar: WickAvatar },
  { name: "Snoop Dogg", avatar: SnoopAvatar },
  { name: "Ronaldo", avatar: CR7Avatar },
  { name: "Kobe", avatar: KobeAvatar },
  { name: "Mahatama Gandhi", avatar: GandhiAvatar },
  { name: "Van Gogh", avatar: VanGoghAvatar },
  { name: "Jobs", avatar: JobsAvatar },
  { name: "Mr. Bean", avatar: MrBeanAvatar },
];

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
}

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(0);
  const currentChat = chatUsers[selectedUser];

  // State để lưu tin nhắn theo từng người
  const [conversations, setConversations] = useState<{
    [key: number]: Message[];
  }>(() =>
    chatUsers.reduce(
      (acc, _, index) => {
        acc[index] = [
          {
            id: "1",
            text: `Hello! How can I help you today?`,
            sender: "other",
            timestamp: new Date(),
          },
        ];
        return acc;
      },
      {} as { [key: number]: Message[] },
    ),
  );

  // Hàm xử lý gửi tin nhắn
  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setConversations((prev) => ({
      ...prev,
      [selectedUser]: [...(prev[selectedUser] || []), newMessage],
    }));
  };

  return (
    <DefaultLayout>
      <section className="flex h-full">
        {/* SideBar danh sách tin nhắn */}
        <div className="w-1/4 border-r border-background-400 p-4 flex flex-col gap-8">
          <SearchBar />
          <MessageList selected={selectedUser} onSelect={setSelectedUser} />
        </div>

        {/* Khung messages bên phải */}
        <div className="flex flex-col w-3/4">
          <ChatHeader user={currentChat} />
          <Conversation messages={conversations[selectedUser] || []} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </section>
    </DefaultLayout>
  );
}
