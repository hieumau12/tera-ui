const App = `import {Snippet} from "@tera-ui/react";

export default function App() {
  return (
    <Snippet hideCopyButton color="primary" variant="solid">
      npm install @tera-ui/react
    </Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
