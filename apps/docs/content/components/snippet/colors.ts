const App = `import {Snippet} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet color="default">npm install @tera-ui/react</Snippet>
      <Snippet color="primary">npm install @tera-ui/react</Snippet>
      <Snippet color="secondary">npm install @tera-ui/react</Snippet>
      <Snippet color="success">npm install @tera-ui/react</Snippet>
      <Snippet color="warning">npm install @tera-ui/react</Snippet>
      <Snippet color="danger">npm install @tera-ui/react</Snippet>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
