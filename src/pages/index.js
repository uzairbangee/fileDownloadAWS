import React, {useEffect, useState} from "react"
import { Progress } from 'react-sweet-progress';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut
} from "@aws-amplify/ui-react"
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import axios from "axios";

export default function Home() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  console.log("user", user)

  return (
    authState === AuthState.SignedIn && user ?
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '50px'}}>
      <h3>Home</h3>
      <Progress percent={88} status="success" />
      <AmplifySignOut />
    </div>
    </>
    :
    <div>
        <AmplifyAuthenticator
        usernameAlias="email"

      >
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "name",
              label: "Name",
              placeholder: "Enter your name",
              required: true,
            },
            {
              type: "email",
              label: "Email",
              placeholder: "Enter your email address",
              required: true,
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Enter your password",
              required: true,
            }
          ]}
        />
      </AmplifyAuthenticator>
    </div>
  )
}
