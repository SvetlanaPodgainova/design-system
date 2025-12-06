import { Layout } from "../shared/ui/Layout/Layout";
import { Header } from "../widgets/Header/Header";
import styles from "./App.module.css";

function App() {  
  return (
    <div className={styles.app}>
      <Header />
      <Layout>
        <div> Hello</div>
      </Layout>
    </div>
  );
}

export default App;
