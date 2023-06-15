import styled from "styled-components";

export const FormRegisterCss = styled.div`
  background-color: var(--grey-4);

  .message{
    color: var(--grey-0);
    margin-top: 0.2rem;
    font-size: 10px;
    outline: none;
  }
  
  header{
    display: flex;
    width: 100%;
    justify-content: space-between;

  }
  .container{
    
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 475px;
    margin: 0 auto;
    height: 100%;
    min-height: 100vh;
    justify-content: center;

  }
  .text{
    display: flex;
    color: var(--grey-0);
    padding: 0px 16.2426px;
    align-items: center;
    height: 40.11px;
    background-color: var(--grey-3);
  }
  .text:hover{
    background-color: var(--grey-2)
  }
  .label {
    display: flex;
    margin-top: 0.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14.182px;
    color: var(--grey-0);
  }
  .input__form-div{
    background: var(--grey-3);
  }
  .input {
    display: flex;
    margin-top: 0.5rem;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    height: 35px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
    width: 90.85%;
    max-width: 475px;
    outline: var(--grey-0);
    color: var(--grey-0);
  }
  .form__container{
    display: flex;
    width: 100%;
    background-color: var(--grey-3);
    justify-content: center;
    margin-top: 1.5rem;
  }
  .form__description{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form__description h2{
    color: var(--grey-0);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  .form__description p{
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
  form{
    width: 80%;
    padding: 1rem;
  }
  select{
    display: flex;
    margin-top: 0.5rem;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    height: 35px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
    width: 100%;
    max-width: 475px;
    outline: var(--grey-0);
    color: var(--grey-0);
  }
  .register{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    width: 100%;
    height: 48px;
    background: var(--color-primary-disable);
    border: 1.2182px solid #59323F;
    border-radius: 4px;
    margin-top: 0.7rem;
    cursor: pointer;
    color: var(--grey-0);
  }
  .register:hover{
    background: var(--color-primary);
    transition: 1s;
  }
  .password{
    display: flex;
  }
`;
