import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [duration, setDuration] = useState([30]);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!genre || !mood) {
      toast({
        title: 'Заполните все поля',
        description: 'Выберите жанр и настроение для генерации',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: 'Трек готов! 🎵',
        description: 'Ваша музыка успешно сгенерирована',
      });
    }, 3000);
  };



  const features = [
    { icon: 'Sparkles', title: 'AI Генерация', description: 'Нейросеть создаёт уникальную музыку за секунды' },
    { icon: 'Sliders', title: 'Настройка', description: 'Выбирайте жанр, настроение и длительность' },
    { icon: 'Download', title: 'Скачивание', description: 'Сохраняйте треки в высоком качестве' },
    { icon: 'Headphones', title: 'Без лицензий', description: 'Используйте музыку в любых проектах' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <section className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium">Создано с помощью AI</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Музыка</span>
            <br />
            из твоего <span className="text-gradient">воображения</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Опиши свою идею — получи готовый трек. Нейросеть генерирует уникальную музыку любого жанра за считанные секунды
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
                ))}
              </div>
              <span className="text-muted-foreground">500+ треков сгенерировано</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['Pop', 'Rock', 'Jazz', 'Electronic', 'Classical', 'Hip-Hop'].map((g) => (
              <div key={g} className="px-4 py-2 bg-card border border-border rounded-full text-sm animate-wave" style={{ animationDelay: `${Math.random() * 2}s` }}>
                {g}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-24">
          <Card className="p-8 backdrop-blur-sm bg-card/80 border-2 glow animate-scale-in">
            <h2 className="text-3xl font-bold mb-6 text-center">Создай свой трек</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="genre" className="mb-2 block">Жанр</Label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger id="genre">
                    <SelectValue placeholder="Выбери жанр" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronic">Electronic 🎹</SelectItem>
                    <SelectItem value="rock">Rock 🎸</SelectItem>
                    <SelectItem value="jazz">Jazz 🎺</SelectItem>
                    <SelectItem value="ambient">Ambient 🌌</SelectItem>
                    <SelectItem value="hiphop">Hip-Hop 🎤</SelectItem>
                    <SelectItem value="classical">Classical 🎻</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mood" className="mb-2 block">Настроение</Label>
                <Select value={mood} onValueChange={setMood}>
                  <SelectTrigger id="mood">
                    <SelectValue placeholder="Выбери настроение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="happy">Радостное 😊</SelectItem>
                    <SelectItem value="calm">Спокойное 😌</SelectItem>
                    <SelectItem value="energetic">Энергичное ⚡</SelectItem>
                    <SelectItem value="melancholic">Грустное 😔</SelectItem>
                    <SelectItem value="mysterious">Таинственное 🌙</SelectItem>
                    <SelectItem value="epic">Эпичное 🔥</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="prompt" className="mb-2 block">Опиши свою идею (опционально)</Label>
              <Input
                id="prompt"
                placeholder="Например: летняя поездка на закате, танец под дождём..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <Label htmlFor="duration" className="mb-2 block">
                Длительность: {duration[0]} сек
              </Label>
              <Slider
                id="duration"
                value={duration}
                onValueChange={setDuration}
                min={15}
                max={180}
                step={15}
                className="w-full"
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="w-full text-lg h-14 glow-strong animate-pulse-glow"
            >
              {isGenerating ? (
                <>
                  <Icon name="Loader2" size={24} className="animate-spin mr-2" />
                  Создаём магию...
                </>
              ) : (
                <>
                  <Icon name="Play" size={24} className="mr-2" />
                  Сгенерировать трек
                </>
              )}
            </Button>
          </Card>
        </section>



        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Возможности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 text-center hover:border-primary transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 glow">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
};

export default Index;