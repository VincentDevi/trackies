import { useToast } from "@/ui-lib/components/use-toast";
import { api } from "@/utils/api";

export function useEditEntreprise() {
  const { toast } = useToast();
  return api.entreprise.editEntreprise.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Entrepise successfully updated",
        variant: "success",
      });
    },
  });
}
