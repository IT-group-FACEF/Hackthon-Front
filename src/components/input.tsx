import React from 'react';
import { Input } from 'antd';

interface AppProps {
  textPlaceholder: string;
}

const App: React.FC<AppProps> = ({ textPlaceholder }) => (
  <Input placeholder={textPlaceholder} />
);

export default App;