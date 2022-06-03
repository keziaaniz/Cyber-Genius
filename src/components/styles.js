import styled from 'styled-components';

export const ButtonCard = styled.button`
    width: 233px;
    height: 42px;
    font-family: 'Montserrat', sans-serif ;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #1D2527;
    border: 1px solid #1D2527;
    border-radius: 24px;
    padding: 0;
    margin-left: 20px;
    transition: 0.3s all ease-out;
  &:hover {
    background-color: rgba(29, 37, 39, 1);
    color: rgba(235, 239, 242, 1);}

`;

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 200%;
    display: flex;
    align-items: center;
    text-align: center;
    background:none;
    color: #EBEFF2;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 273px;
    height: 48px;
    left: 926px;
    top: 1722px;
    border: 1px solid #EBEFF2;
    border-radius: 4px;
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 44px 14px 32px;
    gap: 10px;
    width: 211px;
    height: 352px;
    border: 1px solid #1D2527;
    border-radius: 24px;
    margin-top: 95px;
`;