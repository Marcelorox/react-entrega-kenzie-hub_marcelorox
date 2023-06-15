import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormRegisterCss } from "./styles";
import { api } from "../../../api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { InputFieldRegister } from "../Input";
import { SelectFieldRegister } from "../Select";

export const schema = z
  .object({
    name: z
      .string()
      .min(2, "O nome deve ter no mínimo 2 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres")
      .nonempty(),

    email: z
      .string()
      .email("O e-mail deve estar no formato correto")
      .nonempty(),

    password: z
      .string()
      .min(8, {
        message: "A senha é obrigatória e precisa de mínimo 8 caracteres",
      })
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*[)!}{,.^?~=+\-_\/*\-+.\|])/,
        "É necessário pelo menos um caracter especial"
      ),

    confirmPassword: z.string().min(1, "A confirmação de senha é obrigatória"),

    bio: z.string().nonempty("a bio tem que estar preenchida"),

    contact: z.string().nonempty("precisamos de informacao de contato"),

    module: z.string().nonempty(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam corresponderem",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.module,
      });
      toast.success("Registrado com sucesso");
      navigateTo('/')
    } catch (error) {
      toast.error("Ops! algo deu errado");
    }
  };

  return (
    <>
      <FormRegisterCss>
        <div className="container">
          <header>
            <img src="../../Logo.svg" alt="" />
            <Link to="/">
              <span className="text">Voltar</span>
            </Link>
          </header>

          <div className="form__container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__description">
                <h2>Crie sua conta</h2>
                <p>Rápido e grátis, vamos nessa</p>
              </div>

              <InputFieldRegister
                label="Nome:"
                type="text"
                name="name"
                placeholder="Digite seu nome aqui"
                register={register}
                errors={errors}
              />

              <InputFieldRegister
                label="Email:"
                type="email"
                placeholder="seuemail@example.com"
                name="email"
                register={register}
                errors={errors}
              />

              <InputFieldRegister
                label="Senha:"
                type="password"
                placeholder="Digite sua senha"
                name="password"
                register={register}
                errors={errors}
              />

              <InputFieldRegister
                label="Confirmar senha:"
                type="password"
                placeholder="Confirme sua senha"
                name="confirmPassword"
                register={register}
                errors={errors}
              />

              <InputFieldRegister
                label="Bio:"
                type="text"
                placeholder="Digite uma breve descrição sobre você"
                name="bio"
                register={register}
                errors={errors}
              />

              <InputFieldRegister
                label="Contato:"
                type="text"
                placeholder="Digite seu número de contato"
                name="contact"
                register={register}
                errors={errors}
              />

              <SelectFieldRegister
                id="module"
                name="module"
                register={register}
                errors={errors}
              />

              <button className="register" type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </FormRegisterCss>
    </>
  );
}
