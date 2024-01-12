const App = `import {Image} from "@tera-ui/react";
import NextImage from "next/image";

export default function App() {
  return (
    <Image
      as={NextImage}
      width={300}
      height={200}
      src="https://teraui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      alt="TeraUI hero Image"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
