import { StatusEnum, type MessageEnum } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import { ActionDropDown, ActionsMenu, Persona, TextDate } from "@/ui-lib";
import { useDeleteMessage } from "../../hooks/delete-message";
import Link from "next/link";
import { BsFillBuildingFill } from "react-icons/bs";

type Message = {
  id: string;
  title: string;
  screenSchoot: string | null;
  type: MessageEnum;
  date: Date;
  entrepriseId: string;
  entrepriseName: string;
  entrepriseDescription: string | null;
  entreprisePost: string | null;
  entrepriseLogo: string | null;
  entrepriseStatus: StatusEnum;
  entrepriseSite: string;
};

export const messageColumns: ColumnDef<Message>[] = [
  {
    accessorKey: "entrepriseName",
    header: "Entreprise",
    cell: ({ row }) => {
      return (
        <Link href={`/app/entreprise/${row.original.entrepriseId}`}>
          <Persona
            text={row.original.entrepriseName}
            subText={row.original.entrepriseDescription ?? undefined}
            url={row.original.entrepriseLogo ?? undefined}
            fallback={<BsFillBuildingFill />}
          />
        </Link>
      );
    },
  },
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
    accessorKey: "screenSchoot",
    header: "Screenshot",
    cell: ({ row }) => {
      return <>{row.original.screenSchoot ? "true" : "false"}</>;
    },
  },
  {
    id: "edit",
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => {
      const { mutate } = useDeleteMessage();
      const actions: ActionsMenu = [
        {
          title: "Delete",
          onclick: () => mutate({ id: [row.original.id] }),
        },
      ];
      return <ActionDropDown actions={actions} />;
    },
  },
];
