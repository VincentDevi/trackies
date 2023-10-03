import { useToast } from "@/ui-lib";
import { api } from "@/utils/api";

export function useCreateMessage(id: string) {
  const { toast } = useToast();
  const utils = api.useContext();
  return api.message.createMessage.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      utils.message.findEntrepriseMessage.invalidate({ entrepriseId: id });
      toast({
        title: "Entrepise successfully updated",
        variant: "success",
      });
    },
  });
}
