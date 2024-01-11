const App = `import { Link, Button } from "@tera-ui/react";

export default function App() {
  return (
    <Button
      href="https://github.com/hieumau12/nextui-tera"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
    >
      Button Link
    </Button>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
