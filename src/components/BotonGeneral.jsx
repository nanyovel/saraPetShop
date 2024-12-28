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
