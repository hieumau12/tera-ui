const App = `import {Textarea} from "@tera-ui/react";

export default function App() {
  return (
    <Textarea
      isRequired
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
