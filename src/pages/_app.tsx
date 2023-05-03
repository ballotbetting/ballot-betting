import { Amplify } from 'aws-amplify';
import { withAuthenticator,WithAuthenticatorProps,useAuthenticator, Authenticator} from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);


function App() {
  
  const { authStatus, user, signOut } = useAuthenticator(context => [context.authStatus, context.user]);

  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Authenticator /> : <main>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
        </main>}
    </>
  );
}

export default withAuthenticator(App);