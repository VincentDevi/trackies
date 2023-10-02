import Link from "next/link";

type Props = {
  url: string;
  title: string;
};

export function WebsiteUrl({ url, title }: Props) {
  return (
    <Link target="_blank" href={url}>
      {title}
    </Link>
  );
}
