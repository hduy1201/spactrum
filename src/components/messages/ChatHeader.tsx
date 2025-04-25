import { Avatar } from "@heroui/avatar";
import { GroupIcon, MoreIcon } from "@/components/Icons.tsx";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useState } from "react";

interface User {
  name: string;
  avatar: string;
}

interface UserProps {
  user: User;
}

export default function ChatHeader({ user }: UserProps) {
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 py-4 border-b border-background-400">
      <div className="flex gap-3">
        <Avatar className="w-[52px] h-[52px]" src={user.avatar} />
        <div className="flex flex-col justify-between gap-2">
          <p className="font-semibold text-secondary-500 text-sm">
            {user.name}
          </p>
          <div className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-success-500 rounded-full" />
            <p className="text-sm text-secondary-300">Online</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div
          className="border border-background-400 rounded-full p-[14px] hover:bg-background-300 cursor-pointer"
          onClick={() => setIsGroupModalOpen(true)}
          role="button"
          aria-label="View group list"
        >
          <GroupIcon />
        </div>
        <div
          className="border border-background-400 rounded-full p-[14px] hover:bg-background-300 cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
          role="button"
          aria-label="More options"
        >
          <MoreIcon />
        </div>
      </div>

      <Modal isOpen={isGroupModalOpen} onOpenChange={setIsGroupModalOpen}>
        <ModalContent>
          <ModalHeader>Danh sách nhóm</ModalHeader>
          <ModalBody>
            <p>Danh sách các nhóm chat của bạn sẽ hiển thị ở đây.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={() => setIsGroupModalOpen(false)}>
              Đóng
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        placement="right"
      >
        <DrawerContent>
          <DrawerHeader>
            <h2 className="text-lg font-semibold">Tùy chọn khác</h2>
          </DrawerHeader>
          <DrawerBody>
            <ul className="list-none space-y-3">
              <li className="cursor-pointer hover:text-primary-500">Cài đặt</li>
              <li className="cursor-pointer hover:text-primary-500">Báo cáo</li>
              <li className="cursor-pointer hover:text-red-500">
                Xóa cuộc trò chuyện
              </li>
            </ul>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="light"
              className="w-full"
              onPress={() => setIsDrawerOpen(false)}
            >
              Đóng
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
