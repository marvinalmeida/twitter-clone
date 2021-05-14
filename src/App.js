import { useState } from "react";
import Form from "./components/form/form";
import Layout from "./components/layout/layout"

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const activeButton = userName && password;

  const handleLogin = (evento) => {
    setUserName(evento.target.value);
  };

  const handlePassword = (evento) => {
    setPassword(evento.target.value);
  };

  return (
    <Layout>
      <Form
        handleLogin={handleLogin}
        handlePassword={handlePassword}
        activeButton={activeButton}
      />
    </Layout>
  );
}

export default App;
