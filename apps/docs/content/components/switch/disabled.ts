const App = `import {Switch} from "@tera-ui/react";

export default function App() {
  return (
    <Switch isDisabled defaultSelected>
      Automatic updates
    </Switch>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
