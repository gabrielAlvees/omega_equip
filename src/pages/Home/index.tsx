import {
    Container,
    Main,
    Products,
    Title,
    Image,
    Accountant,
    ContainerButton,
    ButtonAdd,
    ButtonRemove,
} from "./styles";

import Processador from "../../assets/hd.png";
import HD from "../../assets/processador.png";
import Mouse from "../../assets/mouse.png";

import { useState } from 'react';

interface Quantities {
  processador: number;
  hd: number;
  mouse: number;
}

export const Home = () => {
  const [quantities, setQuantities] = useState<Quantities>({
    processador: 0,
    hd: 0,
    mouse: 0,
  });

  const increment = (item: keyof Quantities) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] + 1,
    }));
  };

  const decrement = (item: keyof Quantities) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] > 1 ? prevQuantities[item] - 1 : 0,
    }));
  };

  return (
    <Container>
      <Main>
        <Products>
          <Title>Processador</Title>
          <Image src={Processador} alt="Processador" />
          <Accountant>{quantities.processador}</Accountant>
          <ContainerButton>
            <ButtonAdd onClick={() => increment('processador')}>+</ButtonAdd>
            <ButtonRemove onClick={() => decrement('processador')}>-</ButtonRemove>
          </ContainerButton>
        </Products>

        <Products>
          <Title>HD</Title>
          <Image src={HD} alt="HD" />
          <Accountant>{quantities.hd}</Accountant>
          <ContainerButton>
            <ButtonAdd onClick={() => increment('hd')}>+</ButtonAdd>
            <ButtonRemove onClick={() => decrement('hd')}>-</ButtonRemove>
          </ContainerButton>
        </Products>

        <Products>
          <Title>Mouse</Title>
          <Image src={Mouse} alt="Mouse" />
          <Accountant>{quantities.mouse}</Accountant>
          <ContainerButton>
            <ButtonAdd onClick={() => increment('mouse')}>+</ButtonAdd>
            <ButtonRemove onClick={() => decrement('mouse')}>-</ButtonRemove>
          </ContainerButton>
        </Products>
      </Main>
    </Container>
  );
};