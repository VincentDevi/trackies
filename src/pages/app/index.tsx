import { EntrepriseCreateDialog } from "@/features/entreprise/components/entreprise-create-dialog";
import { EntrepriseTable } from "@/features/entreprise/components/table/entreprise-table";

import { DashboardLayout } from "@/ui-lib/layouts/dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout nav={<></>}>
      <EntrepriseCreateDialog />
      <EntrepriseTable />
    </DashboardLayout>
  );
}
