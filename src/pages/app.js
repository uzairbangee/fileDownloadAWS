// import * as fs from 'fs';
import React, {useEffect, useState} from "react"
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut
} from "@aws-amplify/ui-react"
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import axios from "axios";

export default function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  console.log("user", user)


  const load = async () => {
    if(user && user?.signInUserSession?.idToken?.jwtToken){
      try {
        var config = {
          responseType: 'blob',
          headers: {
            "Authorization": user.signInUserSession.idToken.jwtToken
          }
        };
        const resp = await axios.get("https://97raxq3t46.execute-api.us-east-1.amazonaws.com/prod/download?versionId=GO-1&entityId=uzairbangee", config);
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.json');
        document.body.appendChild(link);
        link.click();
        console.log("resp", resp)
      } catch (error) {
        
      }
    }
  }

  return (
        authState === AuthState.SignedIn && user ?
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '50px'}}>
      <h3>Home</h3>
      <button onClick={load}>Load</button>
      <AmplifySignOut />
    </div>
    </>
    :
    <>
        <AmplifyAuthenticator
        usernameAlias="email"
      >
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "username",
              label: "Username",
              placeholder: "Enter your Username",
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
    </>
  )
}
