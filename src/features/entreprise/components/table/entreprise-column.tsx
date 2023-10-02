import { type StatusEnum } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import {
  ActionDropDown,
  ActionsMenu,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Persona,
  TextDate,
} from "@/ui-lib";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { api } from "@/utils/api";
import { useDeleteEntreprise } from "../../hooks/delete-entreprise";

type EntrepriseMessage = {
  id: string;
  name: string;
  description: string | null;
  status: StatusEnum;
  logo: string | null;
  createdAt: Date;
};

export const entrepriseColumns: ColumnDef<EntrepriseMessage>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <Persona
          text={row.original.name}
          subText={row.original.description ?? undefined}
          url={row.original.logo ?? undefined}
          fallback={"logo"}
        />
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Badge>{row.original.status}</Badge>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      return <TextDate date={row.original.createdAt} />;
    },
  },
  {
    id: "edit",
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => {
      const entreprise = row.original;
      const { mutate } = useDeleteEntreprise();
      const actions: ActionsMenu = [
        { title: "Delete", onclick: () => mutate({ id: [entreprise.id] }) },
      ];
      return <ActionDropDown actions={actions} />;
    },
  },
];
