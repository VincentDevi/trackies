import { EntrepriseTable } from "@/features/entreprise/components/table/entreprise-table";
import { DashboardLayout } from "@/ui-lib/layouts/dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout nav={<></>}>
      <EntrepriseTable />
    </DashboardLayout>
  );
}
