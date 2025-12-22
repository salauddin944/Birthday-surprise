import React from 'react';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import Message from './components/Message';
import Surprise from './components/Surprise';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Welcome />
      <Gallery />
      <Message />
      <Surprise />
      
      <MusicPlayer />
      
      <footer className="py-8 text-center text-stone-400 text-xs font-serif tracking-widest bg-stone-100 uppercase">
        <p>Especially for Aur</p>
      </footer>
    </div>
  );
};

export default App;