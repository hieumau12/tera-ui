const App = `import {Snippet} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet variant="bordered">npm install @tera-ui/react</Snippet>
      <Snippet variant="flat" color="warning">npm install @tera-ui/react</Snippet>
      <Snippet variant="solid" color="primary">npm install @tera-ui/react</Snippet>
      <Snippet variant="shadow" color="secondary">npm install @tera-ui/react</Snippet>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
