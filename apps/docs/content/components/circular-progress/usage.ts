const App = `import {CircularProgress} from "@tera-ui/react";

export default function App() {
  return (
    <CircularProgress aria-label="Loading..." />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
