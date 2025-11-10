import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface AudioPlayerProps {
  title: string;
  genre: string;
  duration: string;
  audioUrl?: string;
}

const AudioPlayer = ({ title, genre, duration }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState([70]);
  const [showVolume, setShowVolume] = useState(false);
  const animationRef = useRef<number>();
  const [bars, setBars] = useState<number[]>(Array(32).fill(0));

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setBars(Array(32).fill(0).map(() => Math.random() * 100));
        setCurrentTime((prev) => {
          const newTime = prev + 0.5;
          if (newTime >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return newTime;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setBars(Array(32).fill(0).map(() => Math.random() * 20));
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{genre}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <div className="relative h-32 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg mb-4 overflow-hidden flex items-end justify-center gap-1 px-4 py-4">
        {bars.map((height, idx) => (
          <div
            key={idx}
            className="flex-1 bg-gradient-to-t from-primary via-secondary to-accent rounded-full transition-all duration-150"
            style={{
              height: `${isPlaying ? height : height / 5}%`,
              opacity: isPlaying ? 0.8 : 0.3,
              minHeight: '4px',
            }}
          />
        ))}
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
              <Icon name="Music" size={32} className="text-primary" />
            </div>
          </div>
        )}
      </div>

      <div className="mb-4">
        <Slider
          value={[currentTime]}
          onValueChange={(value) => setCurrentTime(value[0])}
          max={100}
          step={0.1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{Math.floor(currentTime / 100 * 180)}s</span>
          <span>{duration}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={handleRestart}
          className="hover:bg-primary/10"
        >
          <Icon name="RotateCcw" size={16} />
        </Button>
        
        <Button
          size="lg"
          onClick={handlePlayPause}
          className="flex-1 h-12 glow text-lg font-semibold"
        >
          <Icon name={isPlaying ? "Pause" : "Play"} size={20} className="mr-2" />
          {isPlaying ? 'Пауза' : 'Слушать'}
        </Button>

        <div className="relative">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowVolume(!showVolume)}
            className="hover:bg-primary/10"
          >
            <Icon name={volume[0] === 0 ? "VolumeX" : volume[0] < 50 ? "Volume1" : "Volume2"} size={16} />
          </Button>
          
          {showVolume && (
            <div className="absolute bottom-full right-0 mb-2 p-3 bg-card border border-border rounded-lg shadow-lg animate-scale-in">
              <div className="h-24 w-8 flex items-center justify-center">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  orientation="vertical"
                  className="h-full"
                />
              </div>
            </div>
          )}
        </div>

        <Button
          size="sm"
          variant="outline"
          className="hover:bg-primary/10"
        >
          <Icon name="Download" size={16} />
        </Button>
      </div>
    </Card>
  );
};

export default AudioPlayer;
