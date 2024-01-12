const App = `import {Image} from "@tera-ui/react";

export default function App() {
  return (
    <Image
      width={300}
      alt="TeraUI hero Image"
      src="https://teraui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
