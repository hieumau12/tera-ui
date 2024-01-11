const App = `import {Button} from "@tera-ui/react";

export default function App() {
  return (
    <Button isDisabled color="primary">
      Button
    </Button>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
