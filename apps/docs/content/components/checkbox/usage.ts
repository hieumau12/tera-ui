const App = `import {Checkbox} from "@tera-ui/react";

export default function App() {
  return (
    <Checkbox defaultSelected>Option</Checkbox>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
