const App = `import {Slider} from "@tera-ui/react";

export default function App() {
  return (
    <Slider 
      label="Currency" 
      showTooltip={true}
      formatOptions={{style: 'currency', currency: 'JPY'}}
      tooltipValueFormatOptions={{style: 'currency', currency: 'JPY'}}
      defaultValue={40}
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
