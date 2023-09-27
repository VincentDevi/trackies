import { useToast } from "@/ui-lib/components/use-toast";
import { api } from "@/utils/api";

export function useCreateEntreprise() {
  const { toast } = useToast();
  const utils = api.useContext();
  return api.entreprise.createEntreprise.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      void utils.entreprise.findEntreprise.invalidate();
      toast({
        title: "Entreprise successfully created",
        variant: "success",
      });
    },
  });
}
