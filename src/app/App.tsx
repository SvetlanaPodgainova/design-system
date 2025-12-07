import { RegistrationFlow } from "../features/registration/ui/RegistrationFlow/RegistrationFlow";
import { Layout } from "../shared/ui/Layout/Layout";
import { Header } from "../widgets/Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Layout> 
        <RegistrationFlow />
      </Layout>
    </div>
  );
}

export default App;
