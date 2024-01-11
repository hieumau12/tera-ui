const App = `import {CircularProgress} from "@tera-ui/react";

export default function App() {
  return (
    <CircularProgress label="Loading..." />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
