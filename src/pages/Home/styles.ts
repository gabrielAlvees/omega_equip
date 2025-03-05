import styled from "styled-components";

export const Container = styled.div`

  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`;

export const Title = styled.p`
    font-size: 1.5rem;
    color: white;
`;

export const Image = styled.img`
    height: 150px;
    width: 150px;
`;

export const Accountant = styled.p`
    font-size: 1.5rem;
    color: white;
`;

export const ContainerButton = styled.div`
`;

export const ButtonAdd = styled.button`
  background-color: #C4CF53;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  color: white;
  font-weight: bolder;
  font-size: 1rem;
  margin-right: 10px;
`;

export const ButtonRemove = styled.button`
  background-color: #C4CF53;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  color: white;
  font-weight: bolder;
  font-size: 1rem;  
`;