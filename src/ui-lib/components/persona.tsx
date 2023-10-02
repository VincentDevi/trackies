import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ReactNode } from "react";

type Props = {
  url?: string;
  fallback: ReactNode;
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
          <p className="text-base font-semibold leading-none text-gray-500">
            {text}
          </p>
          {subText ?? (
            <p className="text-sm font-light text-gray-300 ">{subText}</p>
          )}
        </div>
      </div>
    </div>
  );
}
