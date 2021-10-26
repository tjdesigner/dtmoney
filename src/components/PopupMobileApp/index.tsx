

import logoImg from "./../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  openMobileApp?: () => void;
}

export function PopupMobileApp({ openMobileApp }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <button onClick={openMobileApp} type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
