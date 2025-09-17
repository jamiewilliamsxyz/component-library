import { Button } from "./components/Button";
import { Badge } from "./components/Badge";

export const App = () => {
  return (
    <>
      <h1>Component Library</h1>
      <main>
        <div className="wrapper">
          <div className="components-container">
            <Button />
          </div>
          <div className="components-container">
            <Badge />
          </div>
        </div>
      </main>
    </>
  );
};
