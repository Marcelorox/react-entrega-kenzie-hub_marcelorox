import styled from "styled-components";

export const DashboardPage = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  background-color: var(--grey-4);
  flex-direction: column;
  align-items: center;
  nav {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
  }
  .container__nav {
    width: 60%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container__nav img {
    height: max-content;
  }
  .container__nav button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    width: 55.49px;
    height: 32px;
    border: transparent;
    border-radius: 4px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    cursor: pointer;
  }
  .container__nav button:hover {
    background-color: var(--grey-2);
    color: var(--grey-0);
    transition: 1s;
  }
  header {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
  }
  .container__header {
    width: 60%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container__header h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }
  .container__header span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
  main {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100vh;
  }
  .container__main {
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .container__main p {
    margin-top: 2rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }
  .header__technology {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    color: var(--grey-0);
    align-items: center;
  }
  .button__add {
    background: var(--grey-3);
    border-radius: 4px;
    border: transparent;
    color: var(--grey-0);
    cursor: pointer;
    height: 32px;
    width: 32.485294342041016px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    font-size: larger;
  }
  .main__technology {
    display: flex;
    width: 100%;
    height: 50vh;
    margin-top: 1rem;
    align-items: center;
    background: var(--grey-2);
    border-radius: 4px;
    flex-direction: column;
    
    overflow-y: auto;
    max-height: 50vh;
  }
  .main__cards {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    height: 49px;
    min-height: 49px;
    width: 90%;
    background-color: var(--grey-4);
    margin-top: 1rem;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
  }
  .title__technology {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;

    color: var(--grey-0);
  }
  .experience__technology {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--grey-1);
  }
  .modal__container {
    display: flex;
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
  }
  .modal__content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: var(--grey-3);
    height: 30vh;
  }
  .header__modal {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 20px;
    gap: 10px;
    background: var(--grey-2);
  }
  .header__modal span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey-0);
  }
  .close__button {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-1);
    border: transparent;
    background-color: transparent;
    cursor: pointer;
  }
  .input__register {
    margin-top: 1rem;
    height: 48px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    border-radius: 4px;
    outline: none;
    width: 98%;
    border: var(--grey-0);
    border: 1px solid;
  }
  .select__register {
    margin-top: 1rem;
    height: 48px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    border-radius: 4px;
    outline: none;
    border: var(--grey-0);
    border: 1px solid;
  }
  .label__register {
    margin-top: 1rem;
  }
  .style__label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--grey-0);
  }
  .button__register {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;
    margin-top: 2rem;
    background: var(--color-primary);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;
    color: var(--grey-0);
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: max-content;
    background-color: var(--grey-3);
  }
  .div__buttons{
    display: flex;
    justify-content: space-between;

  }
  .button__registerPut{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 60%;
    height: 48px;
    margin-top: 2rem;
    background: var(--color-primary);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;
    color: var(--grey-0);
    cursor: pointer;
  }
  .button__delete{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 30%;
    height: 48px;
    margin-top: 2rem;
    background: var(--grey-1);
    border: 1.2182px solid var(--grey-1);
    border-radius: 4.06066px;
    color: var(--grey-0);
    cursor: pointer;
  }
  .button__delete:hover{
    background: var(--grey-2);
    transition: 1000ms;
  }
  .button__registerPut{
    background: var(--color-primary-focus);
  }
  .button__register{
    background: var(--color-primary-focus);
  }
  .message{
    color:red;
    margin-top: 1rem;
  }

  @media (max-width: 730px) {
    .container__main {
      width: 90%;
    }
    .container__header {
      width: 90%;
      flex-direction: column;
      align-items: baseline;
    }
    .container__nav {
      width: 90%;
    }
    .modal__content{
        width: 80%;
    }

  }
`;
