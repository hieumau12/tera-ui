import {createContext} from "@tera-ui/react-utils";

import {ContextType} from "./use-button-group";

export const [ButtonGroupProvider, useButtonGroupContext] = createContext<ContextType>({
  name: "ButtonGroupContext",
  strict: false,
});
