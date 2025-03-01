const App = `import {Slider} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Slider   
        size="sm"
        step={0.1}
        color="foreground"
        label="Temperature"
        showSteps={true} 
        maxValue={1} 
        minValue={0} 
        defaultValue={0.2}
        className="max-w-md" 
      />
      <Slider   
        size="md"
        step={0.1}
        color="foreground"
        label="Temperature"
        showSteps={true} 
        maxValue={1} 
        minValue={0} 
        defaultValue={0.4}
        className="max-w-md" 
      />
      <Slider   
        size="lg"
        step={0.1}
        color="foreground"
        label="Temperature"
        showSteps={true} 
        maxValue={1} 
        minValue={0} 
        defaultValue={0.6}
        className="max-w-md" 
      />
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
