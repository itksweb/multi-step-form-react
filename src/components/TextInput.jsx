const TextInput = ({ id, type, placeholder, onChange, value, label, err, errTxt }) => {
  return (
    <div className="mb-5 ">
      <div className="laber flex items-center justify-between">
        <label
          htmlFor={id}
          className="block mb-2 text-sm text-[var(--Blue-500)] "
        >
          {label}
        </label>
        <p className={`${err ? "text-sm text-[var(--Red-500)]" : "hidden"} `}>
          {`${errTxt ? errTxt : "This field is required"}`}
        </p>
      </div>

      <input
        type={type}
        id={id}
        className={`border cursor-pointer ${
          err ? "border-[var(--Red-500)]" : "border-gray-300"
        } font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:mouse-pointer `}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.id, e.target.value)}
      />
    </div>
  );
};

export default TextInput;
