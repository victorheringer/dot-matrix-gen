import styled from "styled-components";

export const ModalContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  right: -250px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  z-index: 1072;
  padding: 15px;
  font-family: Arial, sans-serif;
  top: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  background-color: #fff;

  ${({ visible }) =>
    !visible &&
    `opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;`}
`;
