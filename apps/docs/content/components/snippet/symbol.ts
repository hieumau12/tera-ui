const App = `import {Snippet} from "@tera-ui/react";

export default function App() {
  return (
    <Snippet symbol="#" variant="bordered">npm install @tera-ui/react</Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
