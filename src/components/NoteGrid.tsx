type NoteGridProps = React.PropsWithChildren<{
  label: string;
}>;

function NoteGrid({ label, children }: NoteGridProps) {
  return (
    <div>
      <h5>{label}</h5>
      <div>{children}</div>
    </div>
  );
}

export default NoteGrid;
