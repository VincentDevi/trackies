import { useToast } from "@/ui-lib";
import { api } from "@/utils/api";

export function useEditMessage() {
  const { toast } = useToast();
  const utils = api.useContext();
  return api.message.editMessage.useMutation({
    onError: () => {
      toast({
        title: " Something went wrong",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      utils.message.findEntrepriseMessage.invalidate();
      utils.message.findAllMessage.invalidate();
      toast({
        title: "Message successfully updated",
        variant: "success",
      });
    },
  });
}
