import React from "react";

type inputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; labelClassName?: string };

export const Input = React.forwardRef<HTMLInputElement, inputProps>(function (
  { label, labelClassName, id, className, ...rest },
  ref,
) {
  return (
    <div className="flex flex-col w-full my-1">
      {label ? (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        ref={ref}
        className={`rounded-md p-2 ${className}`}
        {...rest}
      />
    </div>
  );
});

type textAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label?: string; labelClassName?: string };

export function TextArea({
  label,
  labelClassName,
  id,
  className,
  ...rest
}: textAreaProps) {
  return (
    <div className="flex flex-col w-full">
      {label ? (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      ) : null}
      <textarea
        id={id}
        className={`rounded-md p-2 ${className}`}
        {...rest}
      ></textarea>
    </div>
  );
}
