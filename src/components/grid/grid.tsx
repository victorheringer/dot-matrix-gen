import { TableContainer, TableColumn } from "./styled";

type GridProps = {
  matrix: boolean[][];
  pixelSize: number;
  clickCell: (lineIndex: number, ColumnIndex: number, value: boolean) => void;
};

export default function Grid({ matrix, clickCell, pixelSize }: GridProps) {
  return (
    <TableContainer>
      <table>
        <tbody>
          {matrix?.map((lines, lineIndex) => (
            <tr key={lineIndex}>
              {lines &&
                lines?.map((column, columnIndex) => (
                  <TableColumn
                    key={columnIndex}
                    onClick={() => clickCell(lineIndex, columnIndex, column)}
                    isPainted={column}
                    size={pixelSize}
                    aria-label={`cell position ${lineIndex}:${columnIndex}`}
                  ></TableColumn>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
