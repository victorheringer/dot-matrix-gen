import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 0 30px;
`;

export const TabContainer = styled.div`
  button {
    margin-right: 10px;
  }
`;

export const EditorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
`;

export const GridContainer = styled.div`
  padding: 0 20px 0 40px;
`;

export const Column = styled.div``;

export const ButtonsContainer = styled.div`
  padding: 10px;

  button {
    margin-bottom: 10px;
  }
`;

export const FrameContainer = styled.div`
  border: 1px solid red;
  margin-top: 20px;
  display: flex;
`;

export const Frame = styled.div<{ selected?: boolean }>`
  border: 1px solid #212121;
  width: 60px;
  height: 60px;
  ${({ selected }) => selected && "background-color: #ccc;"}
`;
