const App = `import {Tooltip, Button} from "@tera-ui/react";

export default function App() {
  return (
    <Tooltip showArrow={true} content="I am a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
