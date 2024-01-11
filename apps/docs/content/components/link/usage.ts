const App = `import {Link} from "@tera-ui/react";

export default function App() {
  return (
    <Link href="#">Default Link</Link>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
