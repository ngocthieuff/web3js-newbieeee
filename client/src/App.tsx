import {  BackgroundVideo, Intro, Welcome } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <BackgroundVideo />
      </div>
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
    </div>
  );
}

export default App
