import { useGenerator } from "./hooks/useGenerator";
import "./styles/app.css";

function App() {
  const {
    matrix,
    width,
    height,
    handleChangeInput,
    handleCopyCode,
    handleGenerateCleanMatrix,
    toggleMatrixCell,
  } = useGenerator();

  return (
    <div className="app">
      <div className="header-container">
        <h1>Dot Matrix Gen</h1>
        <hr />
      </div>

      <div className="form-container">
        <div className="form-control">
          <label>Columns</label>
          <input
            type="number"
            value={width}
            name="width"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-control">
          <label>Rows</label>
          <input
            type="number"
            value={height}
            name="height"
            onChange={handleChangeInput}
          />
        </div>

        <div className="buttons">
          <button className="danger" onClick={handleGenerateCleanMatrix}>
            Clear
          </button>
          <button onClick={handleCopyCode}>Copy</button>
          <button onClick={handleGenerateCleanMatrix}>Generate</button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <tbody>
            {matrix.map((lines, lineIndex) => (
              <tr key={lineIndex}>
                {lines.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    onClick={() =>
                      toggleMatrixCell(lineIndex, columnIndex, column)
                    }
                    className={column ? "painted" : "clear"}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
