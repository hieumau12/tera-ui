const App = `import {Textarea} from "@tera-ui/react";

export default function App() {
  return (
    <Textarea
      isInvalid={true}
      variant="bordered"
      label="Description"
      placeholder="Enter your description"
      defaultValue="TeraUI is a React UI library with..."
      errorMessage="The description should be at least 255 characters long."
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
