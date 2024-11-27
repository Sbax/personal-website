export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: "text" | "date";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) => (
  <label className="form-control w-full">
    <span className="label-text">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input-bordered w-full input"
    />
  </label>
);
