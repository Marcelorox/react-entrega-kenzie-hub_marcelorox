export function SelectFieldRegister({ id, name, register, errors }) {
    return (
        <div className="input__form-div">
            <label className="label" htmlFor="module">
              Selecionar Módulo:
            </label>
            <select id={id} {...register(name)}>
                <option value="" hidden>
                Selecione um módulo
                </option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
                </option>
            </select>
            {errors[name] && (
                <p className="message">{errors[name].message}</p>
              )}
        </div>

    );
  }