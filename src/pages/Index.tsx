import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {



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