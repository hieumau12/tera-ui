const App = `import {Image} from "@tera-ui/react";

export default function App() {
  return (
    <Image
      isBlurred
      width={240}
      src="https://teraui-docs-v2.vercel.app/images/album-cover.png"
      alt="TeraUI Album Cover"
      classNames="m-5"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
