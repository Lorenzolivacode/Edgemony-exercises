export function InputForm({ onChange, placeholder, name, value }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
