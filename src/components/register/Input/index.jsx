import { FormRegisterCss } from "../Form/styles";

export function InputFieldRegister({ label, name, register, type, errors, placeholder }) {
    return (
      <FormRegisterCss>
        <div className="input__form-div">
        <label className="label">{label}</label>
          <input className="input" type={type} placeholder={placeholder} {...register(name)} />
        {errors[name] && <p className="message">{errors[name].message}</p>}
        </div>

      </FormRegisterCss>
    );
  }