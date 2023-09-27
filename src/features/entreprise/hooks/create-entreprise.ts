import { useToast } from "@/ui-lib/components/use-toast";
import { api } from "@/utils/api";

export function useCreateEntreprise() {
  const { toast } = useToast();
  return api.entreprise.createEntreprise.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Entreprise successfully created",
        variant: "success",
      });
    },
  });
}
