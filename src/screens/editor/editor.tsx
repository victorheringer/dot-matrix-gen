import { useGenerator } from "../../hooks/useGenerator";
import { Grid, Button } from "../../components";

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
          <Button variant="danger" onClick={handleGenerateCleanMatrix}>
            Clear
          </Button>
          <Button variant="default" onClick={handleCopyCode}>
            Copy
          </Button>
          <Button variant="default" onClick={handleGenerateCleanMatrix}>
            Generate
          </Button>
        </div>
      </div>

      <Grid pixelSize={30} matrix={matrix} clickCell={toggleMatrixCell} />
    </div>
  );
}

export default App;
