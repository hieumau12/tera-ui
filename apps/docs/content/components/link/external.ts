const App = `import {Link} from "@tera-ui/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/hieumau12/tera-ui">
        External Link
      </Link>
      <Link
        isExternal
        href="https://github.com/hieumau12/tera-ui"
        showAnchorIcon
      >
        External Link Anchor
      </Link>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
