const App = `import {Code} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Code color="default">npm install @tera-ui/react</Code>
      <Code color="primary">npm install @tera-ui/react</Code>
      <Code color="secondary">npm install @tera-ui/react</Code>
      <Code color="success">npm install @tera-ui/react</Code>
      <Code color="warning">npm install @tera-ui/react</Code>
      <Code color="danger">npm install @tera-ui/react</Code>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
