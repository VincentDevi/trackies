import { type StatusEnum } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import { BsFillBuildingFill } from "react-icons/bs";
import {
  ActionDropDown,
  ActionsMenu,
  Badge,
  Persona,
  PostUrl,
  TextDate,
  WebsiteUrl,
} from "@/ui-lib";
import { useDeleteEntreprise } from "../../hooks/delete-entreprise";
import Link from "next/link";

type EntrepriseMessage = {
  id: string;
  name: string;
  description: string | null;
  site: string;
  post: string | null;
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
        <Link href={`app/entreprise/${row.original.id}`}>
          <Persona
            text={row.original.name}
            subText={row.original.description ?? undefined}
            url={row.original.logo ?? undefined}
            fallback={<BsFillBuildingFill />}
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "post",
    header: "Post",
    cell: ({ row }) => {
      return (
        <>
          {row.original.post ? (
            <PostUrl url={row.original.post} title="Post" />
          ) : (
            <p>None</p>
          )}
        </>
      );
    },
  },
  {
    accessorKey: "site",
    header: "Website",
    cell: ({ row }) => {
      return <WebsiteUrl url={row.original.site} title="Site" />;
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
