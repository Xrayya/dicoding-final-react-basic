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
  return (
    <h6 className="text-xl font-bold text-center text-secondary">{title}</h6>
  );
}

export function DateString({ date, locale, options }: NoteDateProps) {
  return (
    <div className="text-sm text-end text-secondary opacity-75">
      {date.toLocaleDateString(locale, options)}
    </div>
  );
}

export function Body({ body }: NoteBodyProps) {
  return <p className="p-2 text-justify">{body}</p>;
}

export function Button({ label, type, onClick }: NoteButton) {
  let typeClass: string = "py-1 px-2 w-full ";
  switch (type) {
    case "info":
      typeClass += "bg-info text-slate-50 font-bold";
      break;
    case "warning":
      typeClass += "bg-warning text-slate-900 font-bold";
      break;
    case "error":
      typeClass += "bg-error text-slate-50 font-bold";
      break;
    case "normal":
    default:
      typeClass += "bg-slate-200 text-slate-900 font-bold";
      break;
  }

  return (
    <button className={typeClass} onClick={onClick}>
      {label}
    </button>
  );
}

export function ButtonGroup({ children }: NoteButtonGroup) {
  return <div className="p-0 flex flex-row justify-evenly">{children}</div>;
}

export function Item({ children }: NoteItemProps) {
  return (
    <div className="w-fit border-2 border-slate-500 rounded-lg overflow-hidden">
      {children}
    </div>
  );
}
