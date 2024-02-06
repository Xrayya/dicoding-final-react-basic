type NoteGridProps = React.PropsWithChildren<{
  label?: string;
}>;

function NoteGrid({ label, children }: NoteGridProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-primary mb-4">{label}</h2>
      <div className="grid grid-cols-auto-fill-288 gap-4">{children}</div>
    </div>
  );
}

export default NoteGrid;
