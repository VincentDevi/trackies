import { useToast } from "@/ui-lib/components/use-toast";
import { api } from "@/utils/api";

export function useEditEntreprise() {
  const { toast } = useToast();
  const utils = api.useContext();
  return api.entreprise.editEntreprise.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      utils.entreprise.findEntreprise.invalidate();
      toast({
        title: "Entrepise successfully updated",
        variant: "success",
      });
    },
  });
}
