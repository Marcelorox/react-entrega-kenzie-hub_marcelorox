import styled from "styled-components";

export const InputLoginCss = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 271px;

  .label {
    font-style: normal;
    font-weight: 400;
    font-size: 14.182px;
    margin-top: 0.5rem;
    color: var(--grey-0);
  }

  .input-wrapper {
    width: 100%;
    max-width: 271px;
  }

  .input {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    height: 35px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
    width: 87%;
    outline: var(--grey-0);
    color: var(--grey-0);
  }
  .message{
    color:red;
    margin-top: 1rem;
  }
`;