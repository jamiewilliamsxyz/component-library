import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import { ComponentSection } from "./components/ComponentSection";

export const App = () => {
  return (
    <>
      <h1>component-library</h1>
      <main>
        <ComponentSection
          title="Buttons"
          variants="pill, square, gray, red, green, blue"
        >
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
        </ComponentSection>

        <hr />

        <ComponentSection
          title="Badges"
          variants="pill, square, neutral, success, warning, error"
        >
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
        </ComponentSection>
      </main>
    </>
  );
};
