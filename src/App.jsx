import { Button } from "./components/Button";
import { Badge } from "./components/Badge";

export const App = () => {
  return (
    <>
      <h1>Component Library</h1>
      <main>
        <div className="wrapper">
          <div className="components-container">
            <Button
              shape="square"
              color="grey"
              onClick={() => console.log("Button Clicked!")}
            >
              Button
            </Button>
            <Button shape="square" color="red">
              Button
            </Button>
            <Button shape="pill" color="green">
              Button
            </Button>
            <Button shape="pill" color="blue">
              Button
            </Button>
          </div>
          <div className="components-container">
            <Badge shape="square" status="neutral">
              Badge
            </Badge>
            <Badge shape="square" status="success">
              Badge
            </Badge>
            <Badge shape="pill" status="warning">
              Badge
            </Badge>
            <Badge shape="pill" status="error">
              Badge
            </Badge>
          </div>
        </div>
      </main>
    </>
  );
};
