import { InputLoginCss } from "./inputStyle";

export function InputFieldLogin({ label, name, register, type, errors }) {
  return (
    <InputLoginCss>
      <label className="label">{label}</label>
      <div className="input-wrapper">
        <input className="input" type={type} {...register(name)} />
      </div>
      {errors[name] && <p className="message">{errors[name].message}</p>}
    </InputLoginCss>
  );
}