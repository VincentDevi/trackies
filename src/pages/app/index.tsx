import { EntrepriseTable } from "@/features/entreprise/components/table/entreprise-table";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/ui-lib";
import { DashboardLayout } from "@/ui-lib/layouts/dashboard-layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateEntreprise } from "@/features/entreprise/hooks/create-entreprise";

const schema = z.object({
  name: z.string().min(1, { message: "This field is mandatory" }),
  description: z.string().optional(),
});
export default function Dashboard() {
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
      });
    });
  }
  return (
    <DashboardLayout nav={<></>}>
      <Dialog>
        <DialogTrigger>Add an Entreprise</DialogTrigger>
        <DialogContent>
          <DialogHeader>Add an entreprise</DialogHeader>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} text="" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Description" {...field} text="" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      <EntrepriseTable />
    </DashboardLayout>
  );
}
