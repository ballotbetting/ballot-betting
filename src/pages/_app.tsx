import {API, Auth} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import { Button } from '@mui/material';

async function callAuthApi() {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  console.log("User ", user);
  console.log("Token ", token);

  const requestInfo = {
    headers : {
      Authorization: token
    }
  };
  const data = await API.get('ballotbettingauth','/auth',requestInfo);
  console.log("Printing data from api call");
  console.log(data);
}

function App() {
  return <div>
    <Button onClick={callAuthApi} />
  </div>
}

export default withAuthenticator(App);
