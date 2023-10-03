import { DataTable } from "@/ui-lib/components/data-table";
import { api } from "@/utils/api";
import { entrepriseMessageColumns } from "./entreprise-message-column";

type Props = {
  entrepriseId: string;
};

export function EntrepriseMessageTable({ entrepriseId }: Props) {
  const { data, isLoading, error } = api.message.findEntrepriseMessage.useQuery(
    { entrepriseId },
  );
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>something went wrong</p>}
      {data && (
        <DataTable data={data ?? []} columns={entrepriseMessageColumns} />
      )}
    </>
  );
}
