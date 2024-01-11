const App = `import {Link} from "@tera-ui/react";

export default function App() {
  return (
    <Link href="#" isDisabled>Disabled Link</Link>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
