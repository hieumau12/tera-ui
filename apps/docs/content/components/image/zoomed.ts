const App = `import {Image} from "@tera-ui/react";

export default function App() {
  return (
    <Image
      isZoomed
      width={240}
      alt="TeraUI Fruit Image with Zoom"
      src="https://teraui-docs-v2.vercel.app/images/fruit-1.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
