import styled from "styled-components";

export const DashboardPage = styled.div`
    display: flex;
    height: 100%;
    min-height: 100vh;
    background-color: var(--grey-4);
    flex-direction: column;
    align-items: center;    
    nav{
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
    }
    .container__nav{
        width: 60%;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .container__nav img{
        height: max-content;
    }
    .container__nav button{
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
    .container__nav button:hover{
        background-color: var(--grey-2);
        color: var(--grey-0);
        transition: 1s;
    }
    header{
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
        border-top: 1px solid var(--grey-3);
        border-bottom: 1px solid var(--grey-3);
    }
    .container__header{
        width: 60%;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .container__header h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--grey-0);
    }
    .container__header span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--grey-1);
    }
    main{
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
    }
    .container__main{
        width: 60%;
        height: 72px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .container__main p{
        margin-top: 2rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--grey-0);
    }
    .container__main span{
        margin-top: 2rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: var(--grey-0);
    }
    @media (max-width: 730px) {
        .container__main{
            width: 90%;
        }
        .container__header{
            width: 90%;
            flex-direction: column;
            align-items: baseline;
        }
        .container__nav{
            width: 90%;
        }
    }
`