import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      source={{ uri: 'https://63d13a1d78ba110ef6a12fa9--smartcut-react.netlify.app' }}
    />
  );
}