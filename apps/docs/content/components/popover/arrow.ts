const App = `import {Popover, PopoverTrigger, PopoverContent, Button} from "@tera-ui/react";

export default function App() {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
