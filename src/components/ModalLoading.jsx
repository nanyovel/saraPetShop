import styled from "styled-components";
import { CSSLoader } from "./CSSLoader";

export const ModalLoading = ({ completa }) => {
  return completa ? (
    <Container>
      <CSSLoader />
    </Container>
  ) : (
    <Container className="imcompleta"></Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000af;
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  &.imcompleta {
    background-color: transparent;
    height: 100%;
    backdrop-filter: blur(0px);
  }
`;
