import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { CropProduction } from "./components/CropProduction";
import { YieldandCultivation } from "./components/YieldandCultivation";

export default function App() {
  return(
  <MantineProvider theme={theme}>
   <CropProduction/>
   <YieldandCultivation/>
  </MantineProvider>)
}
