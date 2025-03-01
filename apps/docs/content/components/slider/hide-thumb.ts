const App = `import {Slider} from "@tera-ui/react";

export default function App() {
  return (
    <Slider 
      aria-label="Player progress" 
      color="foreground"
      hideThumb={true}
      defaultValue={20}
      className="max-w-md"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
