import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 0 30px;
  max-width: 600px;
  margin: 20px auto;
`;

export const TabContainer = styled.div`
  display: flex;

  button {
    margin-right: 10px;
  }
`;

export const EditorContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
`;

export const GridContainer = styled.div``;

export const FrameContainer = styled.div`
  margin-top: 20px;
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;
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

export const ButtonSeparator = styled.div`
  margin: 0 10px 0 0;
  color: #e3e3e3;
  font-size: 20px;
`;
