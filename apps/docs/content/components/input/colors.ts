const App = `import {Input} from "@tera-ui/react";

export default function App() {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      {colors.map((color) => (
        <Input
          key={color}
          type="email"
          color={color}
          label="Email"
          placeholder="Enter your email"
          defaultValue="junior@teraui.org"
          className="max-w-[220px]"
        />
      ))}
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
