import styled from "styled-components";

export const CSSLoader = () => {
  return <Spinner className="loader"></Spinner>;
};

const Spinner = styled.span`
  &.loader {
    width: 40px;
    aspect-ratio: 1;
    color: #f03355;
    position: relative;
    background: conic-gradient(from 134deg at top, currentColor 92deg, #0000 0)
        top,
      conic-gradient(from -46deg at bottom, currentColor 92deg, #0000 0) bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
  &.loader::after,
  &.loader::before {
    content: "";
    position: absolute;
    inset: 0;
    --g: currentColor 14.5px, #0000 0 calc(100% - 14.5px), currentColor 0;
    background: linear-gradient(45deg, var(--g)),
      linear-gradient(-45deg, var(--g));
    animation: l7 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
  }

  @keyframes l7 {
    33% {
      inset: -10px;
      transform: rotate(0deg);
    }
    66% {
      inset: -10px;
      transform: rotate(90deg);
    }
    100% {
      inset: 0;
      transform: rotate(90deg);
    }
  }
`;
