import { useToast } from "@/ui-lib/components/use-toast";
import { api } from "@/utils/api";

export function useDeleteEntreprise() {
  const { toast } = useToast();
  const utils = api.useContext();
  return api.entreprise.deleteEntreprise.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      utils.entreprise.findEntreprise.invalidate();
      toast({
        title: "Entreprise successfully deleted",
        variant: "success",
      });
    },
  });
}
