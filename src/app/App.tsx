import { RegistrationFlow } from "../features/registration/ui/RegistrationFlow/RegistrationFlow";
import { useTheme } from "../shared/context/theme";
import { Layout } from "../shared/ui/Layout/Layout";
import { Header } from "../widgets/Header/Header";
import styles from "./App.module.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className={styles.app} data-theme={theme}>
      <Header />
      <Layout>
        <RegistrationFlow />
      </Layout>
    </div>
  );
}

export default App;
