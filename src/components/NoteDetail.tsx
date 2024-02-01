import { Note } from "@/model";

type noteDetailProps = {
  note?: Note;
};

function NoteDetail({ note }: noteDetailProps) {
  return (
    <div className="fixed inset-0 m-auto w-1/2 h-fit">
      <div className="p-4 rounded-lg bg-slate-300">
        <h2>{note?.title}</h2>
        <div>
          {note?.createdAt.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
        <p>{note?.body}</p>
      </div>
    </div>
  );
}

export default NoteDetail;
