const App = `import {Progress} from "@tera-ui/react";

export default function App() {
  return (
    <Progress label="Loading..." value={55}  className="max-w-md" />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
