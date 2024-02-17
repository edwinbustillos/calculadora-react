import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #00AAF0;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #f55;
    }
    `;