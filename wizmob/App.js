import React from 'react';
import AppContainer from './routes/homeStack';

export default function App() {
  return (
    <AppContainer />
  );
}

{/* In spite of valiant efforts
and several re-installations and imports
I cannot figure out what 'react-native-safe-area-context'
is and why and how it crashes my navigation. */}