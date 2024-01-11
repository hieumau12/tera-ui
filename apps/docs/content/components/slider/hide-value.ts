const App = `import {Slider} from "@tera-ui/react";

export default function App() {
  return (
    <Slider 
      label="Temperature" 
      color="danger"
      hideValue={true}
      step={0.01} 
      maxValue={1} 
      minValue={0} 
      defaultValue={0.4}
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
