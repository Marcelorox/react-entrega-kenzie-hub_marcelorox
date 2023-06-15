import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputFieldLogin } from "./input";
import { api } from "../../api";
import { toast } from "react-toastify";
import { LoginCss } from "./loginPage.js";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';

const schema = z.object({
  email: z.string().email('email invalido').nonempty(),
  password: z.string().min(8,'senha invalida').nonempty(),
});

export function Login() {

  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    console.log(formData)
    try {
      const { data } = await api.post("/sessions", {
        email: formData.email,
        password: formData.password,
      });
     localStorage.setItem("apiResponse", JSON.stringify(data));
     localStorage.setItem("token", data.token);
      toast.success("Logado com sucesso");
      navigateTo('/dashboard')
      
    } catch (error) {
        toast.error("Ops! algo deu errado");
    }
  };


  return (
    <LoginCss>
      <img className="logo" src="/Logo.svg" alt="" />
      <div className="container">
        <div className="header__form">Login</div>

        <div className="form__container">
          <form onSubmit={handleSubmit(onSubmit)}>
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
