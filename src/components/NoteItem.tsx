import { Note } from "@/model";

type NoteTitleProps = {
  title: Note["title"];
};

type NoteDateProps = {
  date: Note["createdAt"];
  locale?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
};

type NoteBodyProps = {
  body: Note["body"];
};

type NoteButton = {
  label: string;
  type?: "normal" | "error" | "warning" | "info";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type NoteButtonGroup = {
  children?: React.ReactNode;
};

type NoteItemProps = {
  children?: React.ReactNode;
};

export function Title({ title }: NoteTitleProps) {
  return <h6>{title}</h6>;
}

export function DateString({ date, locale, options }: NoteDateProps) {
  return <div>{date.toLocaleDateString(locale, options)}</div>;
}

export function Body({ body }: NoteBodyProps) {
  return <p>{body}</p>;
}

export function Button({ label, type, onClick }: NoteButton) {
  let typeClass: string = "py-1 px-2 border-2 rounded-sm ";
  switch (type) {
    case "info":
      typeClass += "border-info text-info";
      break;
    case "warning":
      typeClass += "border-warning text-warning";
      break;
    case "error":
      typeClass += "border-error text-error";
      break;
    case "normal":
    default:
      typeClass += "border-slate-900 text-slate-900";
      break;
  }

  return (
    <button className={typeClass} onClick={onClick}>
      {label}
    </button>
  );
}

export function ButtonGroup({ children }: NoteButtonGroup) {
  return <div className="p-0 flex flex-row justify-evenly rounded-sm overflow-hidden">{children}</div>;
}

export function Item({ children }: NoteItemProps) {
  return <div className="min-w-20 min-h-20 w-fit">{children}</div>;
}
