import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { BACKGROUND_MUSIC_URL } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set initial volume to 40%
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Handle autoplay policy promises
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented:", error);
                // Can show a UI indication here if needed
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} />
      
      {/* Main Play/Pause Button */}
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-md border border-amber-500/20 ${
          isPlaying 
            ? 'bg-amber-600/90 text-white shadow-amber-500/30 pr-3' 
            : 'bg-stone-900/80 text-amber-50 hover:bg-stone-800'
        }`}
      >
        <div className={`relative w-6 h-6 flex items-center justify-center`}>
          {isPlaying ? (
             <div className="flex gap-0.5 items-end h-4">
               <span className="w-1 bg-white animate-[bounce_1s_infinite] h-2"></span>
               <span className="w-1 bg-white animate-[bounce_1.2s_infinite] h-4"></span>
               <span className="w-1 bg-white animate-[bounce_0.8s_infinite] h-3"></span>
             </div>
          ) : (
            <Music size={20} className={isPlaying ? "text-white" : "text-amber-200"} />
          )}
        </div>
        <span className="font-serif tracking-wider text-sm">
          {isPlaying ? 'Playing' : 'Play Music'}
        </span>
        
        {isPlaying && (
           <div 
             onClick={toggleMute}
             className="ml-2 p-1 hover:bg-amber-700/50 rounded-full transition-colors"
           >
             {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
           </div>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;