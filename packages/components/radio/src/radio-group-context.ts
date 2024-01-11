import type {ContextType} from "./use-radio-group";

import {createContext} from "@tera-ui/react-utils";

export const [RadioGroupProvider, useRadioGroupContext] = createContext<ContextType>({
  name: "RadioGroupContext",
  strict: false,
});
