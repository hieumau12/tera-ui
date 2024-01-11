const App = `import {Snippet} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet size="sm">npm install @tera-ui/react</Snippet>
      <Snippet size="md">npm install @tera-ui/react</Snippet>
      <Snippet size="lg">npm install @tera-ui/react</Snippet>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
