const App = `import {Kbd} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Kbd keys={["command"]}>K</Kbd>
      <Kbd keys={["command", "shift"]}>N</Kbd>
      <Kbd keys={["option", "command"]}>P</Kbd>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
