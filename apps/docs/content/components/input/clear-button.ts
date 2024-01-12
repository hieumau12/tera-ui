const App = `import {Input} from "@tera-ui/react";

export default function App() {
  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      defaultValue="junior@teraui.org"
      onClear={() => console.log("input cleared")}
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
