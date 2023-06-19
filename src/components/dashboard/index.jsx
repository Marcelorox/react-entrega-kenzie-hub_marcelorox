import { toast } from "react-toastify";
import { DashboardPage } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Dashboard() {

  const storedData = localStorage.getItem('apiResponse');
  const navigateTo = useNavigate();

  if(!storedData){
    
  }else{
    const [info, setInfo] = useState([])
    const user = JSON.parse(storedData);
    setInfo(user)
    function clearStored(){
      localStorage.clear()
      toast.success('deslogado com sucesso!')
      navigateTo('/')
    }
  
    return (
      <>
  
        <DashboardPage>
  
          <nav>
            <div className="container__nav">
              <img src="../../Logo.svg" alt="logo" />
              <button onClick={clearStored}>Sair</button>
            </div>
          </nav>
  
          <header>
            <div className="container__header">
            <h2>{info.name}</h2>
            <span>{info.course_module}</span>
            </div>
          </header>
  
  
          <main>
              <div className="container__main">
                <p>Que pena! Estamos em desenvolvimento :(</p>
                <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
              </div>
          </main>      
        </DashboardPage>
  
      </>
    );
  }
  }
    
