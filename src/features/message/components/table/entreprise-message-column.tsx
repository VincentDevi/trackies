import { type MessageEnum } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import { ActionDropDown, ActionsMenu, TextDate } from "@/ui-lib";
import { useDeleteMessage } from "../../hooks/delete-message";

type EntrepriseMessage = {
  id: string;
  title: string;
  screenSchot: string | null;
  type: MessageEnum;
  date: Date;
};

export const entrepriseMessageColumns: ColumnDef<EntrepriseMessage>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <p>{row.original.title}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return <p>{row.original.type}</p>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <TextDate date={row.original.date} />;
    },
  },
  {
    accessorKey: "screenShot",
    header: "Screenshot",
    cell: ({ row }) => {
      return <>{row.original.screenSchot ? "true" : "false"}</>;
    },
  },
  {
    id: "edit",
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => {
      const entreprise = row.original;
      const { mutate } = useDeleteMessage();
      const actions: ActionsMenu = [
        { title: "Delete", onclick: () => mutate({ id: [entreprise.id] }) },
      ];
      return <ActionDropDown actions={actions} />;
    },
  },
];
