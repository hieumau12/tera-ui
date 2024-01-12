const App = `import {Image} from "@tera-ui/react";

export default function App() {
  return (
    <Image
      width={300}
      height={200}
      alt="TeraUI hero Image with delay"
      src="https://app.requestly.io/delay/5000/https://teraui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
