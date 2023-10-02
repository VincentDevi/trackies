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
} from "@/ui-lib";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateEntreprise } from "@/features/entreprise/hooks/create-entreprise";
const schema = z.object({
  name: z.string().min(1, { message: "This field is mandatory" }),
  description: z.string().optional(),
  site: z
    .string()
    .min(1, { message: "This field is mandatory" })
    .url({ message: "This must be a valid url" }),
  post: z.string().url().optional(),
});
export function EntrepriseCreateDialog() {
  const { mutate } = useCreateEntreprise();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });
  async function onSubmit(values: z.infer<typeof schema>) {
    return Promise.resolve().then(() => {
      mutate({
        name: values.name,
        description: values.description,
        site: values.site,
        post: values.post,
      });
    });
  }
  return (
    <Dialog>
      <DialogTrigger className="rounded-lg bg-black p-2 text-white">
        Add an Entreprise
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add an entreprise</DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <span className="text-red-500">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} text="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="site"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Website <span className="text-red-500">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Website"
                      type="url"
                      {...field}
                      text=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} text="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post</FormLabel>
                  <FormControl>
                    <Input placeholder="Post" type="url" {...field} text="" />
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
