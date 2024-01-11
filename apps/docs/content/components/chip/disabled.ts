const App = `import {Chip} from "@tera-ui/react";

export default function App() {
  return (
    <Chip isDisabled color="primary">Chip</Chip>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
