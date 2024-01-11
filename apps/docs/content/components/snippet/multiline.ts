const App = `import {Snippet} from "@tera-ui/react";

export default function App() {
  return (
    <Snippet>
      <span>npm install @tera-ui/react</span>
      <span>yarn add @tera-ui/react</span>
      <span>pnpm add @tera-ui/react</span>
    </Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
