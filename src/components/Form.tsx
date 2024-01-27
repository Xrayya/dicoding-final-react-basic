type inputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string };
export function Input({ label, id, className, ...rest }: inputProps) {
  return (
    <div className="flex flex-col w-full">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        className={`rounded-md bg-lightVariant px-4 py-2 ${className}`}
        {...rest}
      />
    </div>
  );
}

type textAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label?: string };
export function TextArea({ label, id, className, ...rest }: textAreaProps) {
  return (
    <div className="flex flex-col w-full">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea
        id={id}
        className={`rounded-md bg-lightVariant px-4 py-2 ${className}`}
        {...rest}
      ></textarea>
    </div>
  );
}
