import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui-lib";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateMessage } from "../hooks/create-message";
import { MessageEnum } from "@prisma/client";

const schema = z.object({
  title: z.string().min(1, { message: "This field is mandatory" }),
  screenshoot: z.string().optional(),
  type: z.nativeEnum(MessageEnum),
  date: z.string(),
});

type Props = {
  entrepriseId: string;
};

export function MessageCreateDialog({ entrepriseId }: Props) {
  const { mutate } = useCreateMessage(entrepriseId);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });
  async function onSubmit(values: z.infer<typeof schema>) {
    return Promise.resolve().then(() => {
      mutate({
        title: values.title,
        entrepriseId,
        screenshoot: values.screenshoot,
        date: values.date,
        type: values.type,
      });
    });
  }
  return (
    <Dialog>
      <DialogTrigger className="rounded-lg bg-black p-2 text-white">
        Add an Message
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add a message</DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Title <span className="text-red-500">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} text="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Statut <span className="text-red-500">*</span>{" "}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type to your message" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={MessageEnum.FIRSTCONTACT}>
                        First contact
                      </SelectItem>
                      <SelectItem value={MessageEnum.EXCHANGE}>
                        Exchange
                      </SelectItem>
                      <SelectItem value={MessageEnum.REJECTION}>
                        Rejection
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Date <span className="text-red-500">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input type="date" {...field} text="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="screenshoot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Screenshoot <span className="text-red-500">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} text="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.isValid ? (
              <DialogClose>
                <Button type="submit">Submit</Button>
              </DialogClose>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
