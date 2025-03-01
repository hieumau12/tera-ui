const App = `import {Input} from "@tera-ui/react";

export default function App() {
  return (
    <Input
      isReadOnly
      type="email"
      label="Email"
      variant="bordered"
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
