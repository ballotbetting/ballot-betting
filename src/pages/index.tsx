import { Amplify } from 'aws-amplify';
import config from '../aws-exports';

Amplify.configure(config);

export default function Home() {
  return (
    <div>
      <p> This is a UI test change </p>
    </div>
  )
}
