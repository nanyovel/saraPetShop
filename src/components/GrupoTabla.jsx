import styled from "styled-components";

import Theme from "../config/Theme";
import { Link } from "react-router";

export const CajaTablaGroup = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border: 1px solid white;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    height: 7px;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;

    border-radius: 7px;
  }
`;
export const Enlace = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const TablaGroup = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-bottom: 25px;
`;

export const FilasGroup = styled.tr`
  &.cabeza {
    background-color: ${Theme.secondary.azulTenue};
    color: white;
  }
  &.body {
    font-weight: normal;
    border: none;
    color: #00496b;
    background-color: white;
  }

  &.impar {
    background-color: #e1eef4;
    font-weight: bold;
  }
  &:hover {
    background-color: #bdbdbd;
    background-color: ${Theme.secondary.coralCalido};
  }
`;

export const CeldaHeadGroup = styled.th`
  text-align: center;
  padding: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  font-weight: 400;
  border-left: 1px solid #0070a8;
  height: 25px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #006699),
    color-stop(1, #00557f)
  );
`;
export const CeldasBodyGroup = styled.td`
  font-size: 15px;
  font-weight: 400;
  height: 25px;
  text-align: center;
  &.par {
    border-left: 1px solid #e1eef4;
  }
`;
