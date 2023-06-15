import styled from "styled-components";

export const LoginCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);
  align-items: center;

  .logo {
    margin-top: 4rem;
    color: #ff577f;
  }
  .container {
    padding: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    max-width: 370px;
    background-color: var(--grey-3);
    align-items: center;
  }

  .header__form {
    padding: 2rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }

  .form__container {
    display: flex;
    max-width: 271px;
    width: 100%;
    flex-direction: column;
  }
  .form__container form{
    max-width: 271px;
  }

  .span-account{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    color: var(--grey-1);
    
  }
  .bt {
    margin-top: 2rem;
    width: 100%;
    background-color: var(--color-primary);
    border: none;
    border-radius: 4.06066px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    height: 48px;
    cursor: pointer;
    color: var(--grey-0);
  }
  .bt-bot{
    background-color: var(--grey-1);
    
  }
  .bt:hover{
    background-color: var(--color-primary-focus);
    transition: 1s;
    
  }
  
  @media (max-width: 403px){
    .container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: max-content;
    max-width: 370px;
    background-color: var(--grey-3);
    align-items: center;
  }
  .form__container{
    margin-left: 0;
  }
  }
`;
