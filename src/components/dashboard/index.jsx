import { toast } from "react-toastify";
import { DashboardPage } from "./style";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const storedData = localStorage.getItem('apiResponse');
  const navigateTo = useNavigate();
  if(!storedData){
    
  }else{
    const {user, token} = JSON.parse(storedData);
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
            <h2>{user.name}</h2>
            <span>{user.course_module}</span>
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
    
