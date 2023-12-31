import { DataTable } from "@/ui-lib/components/data-table";
import { api } from "@/utils/api";
import { entrepriseColumns } from "./entreprise-column";

export function EntrepriseTable() {
  const { data, isLoading, error } = api.entreprise.findEntreprise.useQuery();
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>something went wrong</p>}
      {data && <DataTable data={data ?? []} columns={entrepriseColumns} />}
    </>
  );
}
