const App = `import {Code} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Code size="sm">npm install @tera-ui/react</Code>
      <Code size="md">npm install @tera-ui/react</Code>
      <Code size="lg">npm install @tera-ui/react</Code>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
