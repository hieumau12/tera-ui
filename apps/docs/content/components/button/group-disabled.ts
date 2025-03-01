const App = `import {Button, ButtonGroup} from "@tera-ui/react";

export default function App() {
  return (
    <ButtonGroup isDisabled>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
