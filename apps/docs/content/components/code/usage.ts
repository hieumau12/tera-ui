const App = `import {Code} from "@tera-ui/react";

export default function App() {
  return (
    <Code>npm install @tera-ui/react</Code>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
