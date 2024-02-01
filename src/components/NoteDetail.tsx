import { Note } from "@/model";

type noteDetailProps = {
  note?: Note;
  onClose?: () => any;
};

function NoteDetail({ note, onClose }: noteDetailProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 m-auto w-1/2 h-3/4">
      <div className="p-4 rounded-lg bg-slate-300 h-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-secondary">{note?.title}</h2>
          <button
            className="flex justify-center items-center text-4xl rounded-md bg-slate-200 h-8 w-8 box-border"
            onClick={handleClose}
          >
            ×
          </button>
        </div>
        <div className="text-slate-600">
          {note?.createdAt.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
        <hr className="border-slate-700" />
        <p className="mt-8">{note?.body}</p>
      </div>
    </div>
  );
}

export default NoteDetail;
