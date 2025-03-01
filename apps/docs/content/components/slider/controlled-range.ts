const App = `import {Slider} from "@tera-ui/react";

export default function App() {
  const [value, setValue] = React.useState([100, 300]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider 
        label="Select a budget"
        formatOptions={{style: "currency", currency: "USD"}}
        step={10}
        maxValue={1000}
        minValue={0}
        value={value} 
        onChange={setValue}
        className="max-w-md"
      />
      <p className="text-default-500 font-medium text-small">
        Selected budget: {Array.isArray(value) && value.map((b) => \`$\${b}\`).join(" – ")}
      </p>
    </div>
  );
}`;

const AppTs = `import {Slider, SliderValue} from "@tera-ui/react";

export default function App() {
  const [value, setValue] = React.useState<SliderValue>([100, 300]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider 
        label="Select a budget"
        formatOptions={{style: "currency", currency: "USD"}}
        step={10}
        maxValue={1000}
        minValue={0}
        value={value} 
        onChange={setValue}
        className="max-w-md"
      />
      <p className="text-default-500 font-medium text-small">
        Selected budget: {Array.isArray(value) && value.map((b) => \`$\${b}\`).join(" – ")}
      </p>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

const reactTs = {
  "/App.tsx": AppTs,
};

export default {
  ...react,
  ...reactTs,
};
