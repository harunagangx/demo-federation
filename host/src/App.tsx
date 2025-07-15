import RemoteButton from 'federation_remote/button';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen">
      <h1>Basic Host-Remote</h1>
      <h2>Host</h2>
      <RemoteButton />
    </div>
  );
};

export default App;
