import { type StatusEnum } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import {
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
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href={`/app/entreprise/${entreprise.id}`}>
                  View Entreprise
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
