const App = `import {Pagination} from "@tera-ui/react";

export default function App() {

  const variants = ["flat", "bordered", "faded", "light"]

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {variants.map((variant) => (
        <Pagination key={variant} total={10} initialPage={1} variant={variant} />
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
