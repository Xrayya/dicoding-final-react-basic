type NoteGridProps = React.PropsWithChildren<{
  label: string;
}>;

function NoteGrid({ label, children }: NoteGridProps) {
  return (
    <div>
      <h2>{label}</h2>
      <div>{children}</div>
    </div>
  );
}

export default NoteGrid;
