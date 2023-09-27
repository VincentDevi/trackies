import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type Props = {
  url?: string;
  fallback: string;
  text: string;
  subText?: string;
};

export function Persona({ url, fallback, text, subText }: Props) {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={url} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">{text}</p>
          {subText ?? (
            <p className="text-sm text-muted-foreground">{subText}</p>
          )}
        </div>
      </div>
    </div>
  );
}
