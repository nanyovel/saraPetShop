import { styled } from "styled-components";
import React from "react";
import Theme from "../config/Theme";

export const BotonGeneral = styled.button`
  margin: 10px;
  cursor: pointer;

  border-radius: 5px;
  min-width: 100px;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: ${Theme.primary.rojoBrillante};
  color: white;
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;

  &:focus {
    background-color: ${Theme.primary.rojoCalido};
    color: #fff;
  }

  &:hover {
    background-color: #fff;
    color: ${Theme.primary.rojoCalido};
  }
  &:active {
    background-color: ${Theme.secondary.coralCalido};
    color: #fff;
  }
`;
export const InputGeneral = styled.input`
  border: 1px solid ${Theme.neutral.neutral600};
  outline: none;
  height: 30px;
  border-radius: 4px;
  color: ${Theme.secondary.azulBrillante};
  padding: 5px;
  background-color: ${Theme.neutral.blancoHueso};
  min-width: 180px;
  width: 100%;
  &:focus {
    border: 1px solid ${Theme.primary.rojoBrillante};
  }
`;
export const TextAreaGeneral = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  background-color: ${Theme.neutral.blancoHueso};
  min-height: 80px;
  resize: vertical;
  font-family: Arial, sans-serif;

  &:focus {
    /* border: 1px solid ${Theme.secondary.azulBrillante}; */
  }
`;

export const MenuDesplegable = styled.select`
  outline: none;
  border: 1px solid transparent;
  height: 30px;
  width: 100%;
  padding: 5px;
  /* margin-bottom: 1px; */
  background-color: ${Theme.neutral.blancoHueso};
  border: 1px solid ${Theme.neutral.neutral600};
  border-radius: 4px;
  color: ${Theme.secondary.azulBrillante};

  &:focus {
  }

  &.disabled {
    color: black;
  }
`;

export const Opciones = styled.option`
  border: none;

  &:focus {
    border: 1px solid white;
  }
  &:disabled {
    color: black;
  }
`;
