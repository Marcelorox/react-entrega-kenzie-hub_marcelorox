import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("token")
  const {user} = useContext(UserContext)
  const [techs, setTechs] = useState(user?.techs || []);

  const addTech = (data) => {
      api.post("/users/techs", data, {
        headers:{
          Authorization: "Bearer " + token        
        }
      })
      .then((response) => {
        setTechs([...techs, response.data]);
        toast.success("Tecnologia cadastrada com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar a tecnologia.");
      });     
    }

    const patchTech = async  (selelectedtech, techdata) => {
      try {
       const {data} = await api.put(`/users/techs/${selelectedtech.id}`, techdata, {
          headers:{
            Authorization: "Bearer " + token        
          }
        })
        setTechs(techs.map((tech) =>{
          if(tech.id === selelectedtech.id){
            return data
          }
          return tech
        }))

      } catch (error) {
        console.log(error)
        toast.error("Erro ao atualizar a tecnologia.");
      }
 
    }
    const deleteTech = async (selelectedtech) => {
      try {
        await api.delete(`/users/techs/${selelectedtech.id}`, {
          headers:{
            Authorization: "Bearer " + token        
          }
        })  
        setTechs(techs.filter((tech) => tech.id != selelectedtech.id))
        
      } catch (error) {
        toast.error("Erro ao deletar a tecnologia.");
      }
    }


  return (
    <TechContext.Provider value={{ techs, addTech, patchTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};
