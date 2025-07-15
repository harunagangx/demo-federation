import LocalButton from './button';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen text-xl">
      <h1>Basic Host-Remote</h1>
      <h2>Remote</h2>
      <LocalButton />
    </div>
  );
};

export default App;
