const App = `import {Input} from "@tera-ui/react";

export default function App() {
  const radius = [
    "full",
    "lg",
    "md",
    "sm",
    "none",
  ];

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      {radius.map((r) => (
        <Input
          key={r}
          radius={r}
          type="email"
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
