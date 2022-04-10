import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import AppRoutes from "./routes/index";

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
          <AppRoutes/>
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;
