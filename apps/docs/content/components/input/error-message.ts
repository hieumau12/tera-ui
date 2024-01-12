const App = `import {Input} from "@tera-ui/react";

export default function App() {
  return (
    <Input
      type="email"
      label="Email"
      variant="bordered"
      defaultValue="junior2teraui.org"
      isInvalid={true}
      errorMessage="Please enter a valid email"
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
