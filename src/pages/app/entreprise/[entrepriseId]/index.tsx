import { MessageCreateDialog } from "@/features/message/components/message-create-dialog";
import { EntrepriseMessageTable } from "@/features/message/components/table/entreprise-message-table";
import { DefaultNav } from "@/features/nav/default-nav";
import { DashboardLayout } from "@/ui-lib/layouts/dashboard-layout";
import { EntrepriseLayout } from "@/ui-lib/layouts/entreprise-layout";
import { useRouter } from "next/router";

export default function Entretprise() {
  const router = useRouter();
  const { entrepriseId } = router.query;
  return (
    <DashboardLayout nav={<DefaultNav />}>
      <div className="flex flex-col gap-0 px-10 pt-6">
        <h2 className="text-4xl font-bold text-gray-700">
          Message related to your entreprise
        </h2>
        <h3 className="text-2xl font-medium text-gray-500">
          Manage all the message related to one entreprise
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-end px-8 pt-4">
          <MessageCreateDialog entrepriseId={entrepriseId as string} />
        </div>
        <div className="px-6">
          <EntrepriseMessageTable entrepriseId={entrepriseId as string} />
        </div>
      </div>
    </DashboardLayout>
  );
}
