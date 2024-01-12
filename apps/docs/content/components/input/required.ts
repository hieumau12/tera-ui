const App = `import {Input} from "@tera-ui/react";

export default function App() {
  return (
    <Input
      isRequired
      type="email"
      label="Email"
      defaultValue="junior@teraui.org"
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
