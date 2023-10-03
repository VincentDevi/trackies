import { DataTable } from "@/ui-lib/components/data-table";
import { api } from "@/utils/api";
import { messageColumns } from "./message-column";

export function MessageTable() {
  const { data, isLoading, error } = api.message.findAllMessage.useQuery();
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>something went wrong</p>}
      {data && <DataTable data={data ?? []} columns={messageColumns} />}
    </>
  );
}
