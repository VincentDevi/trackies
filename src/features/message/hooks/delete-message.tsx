import { useToast } from "@/ui-lib";
import { api } from "@/utils/api";

export function useDeleteMessage() {
  const { toast } = useToast();
  const utils = api.useContext();
  return api.message.deleteMessage.useMutation({
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      utils.message.findAllMessage.invalidate();
      utils.message.findEntrepriseMessage.invalidate();
      toast({
        title: "Entrepise successfully deleted",
        variant: "success",
      });
    },
  });
}
