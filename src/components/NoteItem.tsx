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
  maxWord?: number;
};

type NoteButton = {
  label: string;
  type?: "normal" | "error" | "warning" | "info";
  noteId: Note["id"];
  onClick: (noteId: Note["id"]) => any;
};

type NoteButtonGroup = {
  children?: React.ReactNode;
};

type NoteItemProps = {
  noteId: Note["id"];
  onClick?: (noteId: Note["id"]) => any;
  children?: React.ReactNode;
};

export function Title({ title }: NoteTitleProps) {
  return (
    <h6 className="text-xl font-bold text-center text-secondary">{title}</h6>
  );
}

export function DateString({ date, locale, options }: NoteDateProps) {
  return (
    <div className="text-sm text-end text-secondary px-2">
      {date.toLocaleDateString(locale, options)}
    </div>
  );
}

export function Body({ body, maxWord }: NoteBodyProps) {
  const words: string[] = body.split(" ");
  return (
    <p className="p-2 flex-1 text-justify text-slate-500">
      {maxWord
        ? `${words.slice(0, maxWord).join(" ")}${words.length > maxWord ? "..." : ""}`
        : body}
    </p>
  );
}

export function Button({ label, type, noteId, onClick }: NoteButton) {
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
    <button
      className={typeClass}
      onClick={(e) => {
        e.stopPropagation();
        onClick(noteId);
      }}
    >
      {label}
    </button>
  );
}

export function ButtonGroup({ children }: NoteButtonGroup) {
  return <div className="p-0 flex flex-row justify-evenly">{children}</div>;
}

export function Item({ noteId, onClick, children }: NoteItemProps) {
  return (
    <div
      className={`flex flex-col justify-start border-2 border-slate-600 rounded-lg overflow-hidden ${onClick && "cursor-pointer"}`}
      onClick={() => {
        onClick && onClick(noteId);
      }}
    >
      {children}
    </div>
  );
}
