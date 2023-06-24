import { DashboardPage } from "./style";
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function Dashboard() {
  const { user, clearStored } = useContext(UserContext);
  const { addTech, techs, patchTech, deleteTech } = useContext(TechContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const refModal = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsOpenEdit(false)
  };

  const handleAddTech = (data) => {
    addTech(data);
    reset()
    closeModal();
  };
  const handleEditTech = (data) => {
    patchTech(selectedTech, data);
    reset()
    closeModal();
  };

  const handleDeleteTech = (selectedTech) => {
    deleteTech(selectedTech);
    closeModal();
  };

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!refModal.current?.contains(event.target)) {
        setIsOpen(false);
        setIsOpenEdit(false);
        setSelectedTech(null);
      }
    };
    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
  });

  const handleclickdiv = (data) => {
    const technology = techs.find((tech) => tech.id === data.id);
    setSelectedTech(technology)
    setIsOpenEdit(true);
  };

  return (
    <DashboardPage>
      <nav>
        <div className="container__nav">
          <img src="../../Logo.svg" alt="logo" />
          <button onClick={clearStored}>Sair</button>
        </div>
      </nav>

      <header>
        <div className="container__header">
          <h2>Ola, {user.name}</h2>
          <span>{user.course_module}</span>
        </div>
      </header>

      <main>
      {isOpenEdit && selectedTech && (
        <div className="modal__container">
          <div className="modal__content" ref={refModal}>
            <div className="header__modal">
              <span>Editar tecnologia</span>
              <button className="close__button" onClick={closeModal}>
                X
              </button>
            </div>

            <form onSubmit={handleSubmit(handleEditTech)}>
              <label className="style__label">Nome</label>
              <input
                type="text"
                placeholder="Material UI"
                className="input__register"
                defaultValue={selectedTech.title}
                readOnly
              />
              <label className="label__register style__label">
                Selecionar status:
              </label>
              <select
                name="status"
                id="status"
                {...register("status", { required: true })}
                className="select__register"
                defaultValue={selectedTech.status}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            <div className="div__buttons">
            <button className="button__registerPut" type="submit">
                Salvar alteracoes
              </button>

            <button
              className="button__delete"
              onClick={() => handleDeleteTech(selectedTech)}
            >
              Excluir
            </button>
            </div>
              
            </form>

            
          </div>
        </div>
      )}  
        <div className="container__main">
          <div className="header__technology">
            <span>Tecnologias</span>  
            <button className="button__add" onClick={openModal}>+</button>
          </div>
          <div className="main__technology">
          {techs.map((data) => (
            <div className="main__cards" key={data.id}  onClick={() => handleclickdiv(data)}>
              <span className="title__technology">{data.title}</span>
              <span className="experience__technology">{data.status}</span>
            </div>         
          ))}
          </div>

          {isOpen && (
            <div className="modal__container">
            <div className="modal__content" ref={refModal}>
              <div className="header__modal">
              <span>cadastrar tecnologia</span>
              <button className="close__button" onClick={closeModal}>
                X
              </button>
              </div>

              <form action="" onSubmit= {handleSubmit(handleAddTech)}>

              <label className="style__label">Nome</label>
              <input
                type="text"
                placeholder="Material UI"
                name="title"
                {...register("title")}
                className="input__register"
              />
              {errors.title && <span className="message">{errors.title.message}</span>}
              <label className="label__register style__label">Selecionar status:</label>
              <select
                name="status"
                id="status"
                {...register("status")}
                className="select__register"
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>

                <button className="button__register" type="submit">Cadastrar tecnologia</button>
              </form>

            </div>   
            </div>
          )}
        </div>
      </main>
    </DashboardPage>
  );
}
