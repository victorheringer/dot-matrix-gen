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
  margin-top: 20px;
  display: flex;
`;

export const Frame = styled.div<{ selected?: boolean }>`
  border: 1px solid #e3e3e3;
  padding: 15px 20px;
  margin-right: 10px;
  border-radius: 6px;
  ${({ selected }) => selected && "background-color: #BDBDBD;"}
  text-align: center;
  cursor: pointer;
`;

export const AddButton = styled.button`
  text-align: center;
  padding: 15px 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  color: #212121;
  border: 1px solid #e3e3e3;
  margin-right: 10px;
`;
