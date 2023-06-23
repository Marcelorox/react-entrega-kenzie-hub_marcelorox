import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputFieldLogin } from "./input";
import { LoginCss } from "./loginPage.js";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const schema = z.object({
  email: z.string().email('email invalido').nonempty(),
  password: z.string().min(8,'senha invalida').nonempty()
  .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
  .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
  .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
  .regex(/(?=.*[)!}{,.^?~=+\-_\/*\-+.\|])/,"É necessário pelo menos um caracter especial"),
});

export function Login() {

  const {login} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <LoginCss>
      <img className="logo" src="/Logo.svg" alt="" />
      <div className="container">
        <div className="header__form">Login</div>

        <div className="form__container">
          <form onSubmit={handleSubmit(login)}>
            <InputFieldLogin
              label="Email"
              type="email"
              name="email"
              register={register}
              errors={errors}
            />
            
            <InputFieldLogin
              label="Senha"
              type="password"
              name="password"
              register={register}
              errors={errors}
            />

            <button className="bt" type="submit">
              Entrar
            </button>
            <span className="span-account">ainda nao possui uma conta?</span>
             <Link to="/register"><button className="bt bt-bot">Cadastre-se</button></Link>
          </form>
        </div>
        
      </div>
    </LoginCss>
  );
}
