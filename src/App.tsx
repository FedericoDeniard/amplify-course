import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

import type { AuthUser } from "aws-amplify/auth";

type AppProps = {
  signOut?: () => void;
  user?: AuthUser;
};

function App({ signOut, user }: AppProps) {
  const [count, setCount] = useState(0);

  return (
    <View className="App">
      <Card>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Heading level={1}>¡Bienvenido, {user?.username}!</Heading>
        <h1>Prueba Amplify</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Esto es una prueba de cómo deployar una app React con AWS Amplify y
            Cognito
          </p>
        </div>
        <Button onClick={signOut}>Cerrar sesión</Button>
      </Card>
    </View>
  );
}

export default withAuthenticator(App);
