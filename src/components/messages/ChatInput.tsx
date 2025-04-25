import { AttachCircle, Send2 } from "iconsax-react";
import { Button } from "@heroui/button";
import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex w-full items-center px-8 py-4 border-t border-background-400">
      <input
        type="text"
        placeholder="Send your message..."
        className="w-full focus:outline-none placeholder:text-sm placeholder:text-secondary-300"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        aria-label="Type a message"
      />
      <div className="flex gap-6 items-center">
        <Button isIconOnly variant="light">
          <AttachCircle className="text-secondary-300 w-6 h-6" />
        </Button>
        <Button
          isIconOnly
          variant="light"
          onPress={handleSend}
          isDisabled={!inputValue.trim()}
        >
          <Send2 className="text-primary-700 w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}
