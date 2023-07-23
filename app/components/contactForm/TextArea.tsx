interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}
const TextArea = ({
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <div className="mt-4 block">
      <label className="mb-3 block" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...props}
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        className="block w-full resize-none rounded-md border border-gray-400 pl-7 pr-12 shadow-sm focus:border-gray-500 sm:text-sm"
      ></textarea>
      {error && <p className="mt-2 text-sm text-red-600">*{errorMessage}</p>}
    </div>
  );
};
export default TextArea;