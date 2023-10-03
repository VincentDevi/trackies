import { MessageTable } from "@/features/message/components/table/message-table";

export default function MessagesPage() {
  return (
    <>
      <div className="flex flex-col gap-0 px-10 pt-6">
        <h2 className="text-4xl font-bold text-gray-700">Messages</h2>
        <h3 className="text-2xl font-medium text-gray-500">
          Manage all your messages
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-end px-8 pt-4"></div>
        <div className="px-6">
          <MessageTable />
        </div>
      </div>
    </>
  );
}
