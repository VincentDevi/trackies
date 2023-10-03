import { EntrepriseCreateDialog } from "@/features/entreprise/components/entreprise-create-dialog";
import { EntrepriseTable } from "@/features/entreprise/components/table/entreprise-table";
import { DefaultNav } from "@/features/nav/default-nav";
import { DashboardLayout } from "@/ui-lib/layouts/dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout nav={<DefaultNav />}>
      <div className="flex flex-col gap-0 px-10 pt-6">
        <h2 className="text-4xl font-bold text-gray-700">Entrepises</h2>
        <h3 className="text-2xl font-medium text-gray-500">
          Manage all the entreprises you contacted
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-end px-8 pt-4">
          <EntrepriseCreateDialog />
        </div>
        <div className="px-6">
          <EntrepriseTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
