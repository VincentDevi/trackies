import { useToast } from "@/ui-lib/components/use-toast";
import { api } from "@/utils/api";

export function useDeleteEntreprise() {
  const { toast } = useToast();
  return api.entreprise.deleteEntreprise.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Entreprise successfully deleted",
        variant: "success",
      });
    },
  });
}
