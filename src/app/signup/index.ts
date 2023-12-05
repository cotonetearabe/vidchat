// pages/signup/index.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, Auth, MicrosoftAuthProvider, AppleAuthProvider } from 'firebase/auth';

const SignUp: React.FC = () => {
  const router = useRouter();
  const auth: Auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to dashboard after successful sign-up
    } catch (error) {
      console.error('Error signing up with email:', error.message);
      // Handle error and display a message to the user
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard'); // Redirect to dashboard after successful sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      // Handle error and display a message to the user
    }
  };

  const handleMicrosoftSignIn = async () => {
    try {
      const provider = new MicrosoftAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard'); // Redirect to dashboard after successful sign-in
    } catch (error) {
      console.error('Error signing in with Microsoft:', error.message);
      // Handle error and display a message to the user
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const provider = new AppleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard'); // Redirect to dashboard after successful sign-in
    } catch (error) {
      console.error('Error signing in with Apple:', error.message);
      // Handle error and display a message to the user
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleEmailSignUp}>Sign Up with Email</button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleMicrosoftSignIn}>Sign In with Microsoft</button>
      <button onClick={handleAppleSignIn}>Sign In with Apple</button>
    </div>
  );
};

export default SignUp;
