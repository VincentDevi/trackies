type Props = {
  date: Date;
};
export function TextDate({ date }: Props) {
  const stringDate = date.toLocaleDateString();
  return <p>{stringDate}</p>;
}
