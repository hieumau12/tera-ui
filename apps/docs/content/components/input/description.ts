const App = `import {Input} from "@tera-ui/react";

export default function App() {
  return (
    <Input
      type="email"
      label="Email"
      defaultValue="junior@teraui.org"
      description="We'll never share your email with anyone else."
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
