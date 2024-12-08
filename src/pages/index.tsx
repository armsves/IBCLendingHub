// App.tsx
import React from 'react';
import { useContract } from '../src/useContract';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Oracle from '../components/Oracle';

const App: React.FC = () => {
  const { queryValue, executeIncrement, executeDecrement, executeSet, isClientReady, connectWallet, disconnectWallet, walletAddress } = useContract();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        isClientReady={isClientReady}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        walletAddress={walletAddress}
      />
      <Home
        queryValue={queryValue}
        executeIncrement={executeIncrement}
        executeDecrement={executeDecrement}
        executeSet={executeSet}
        isClientReady={isClientReady}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        walletAddress={walletAddress}
      />
      <Oracle/>
      <Footer/>
    </div>
  );
};

export default App;