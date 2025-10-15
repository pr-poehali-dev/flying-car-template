import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import PaperTemplate from '@/components/PaperTemplate';

export default function Index() {
  const [enginePower, setEnginePower] = useState(65);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [voiceCommand, setVoiceCommand] = useState('');

  const systems = [
    {
      id: 'propulsion',
      name: 'Двигатель',
      icon: 'Rocket',
      status: 'active',
      power: 92,
      color: 'text-primary'
    },
    {
      id: 'navigation',
      name: 'Навигация',
      icon: 'Compass',
      status: 'active',
      power: 88,
      color: 'text-secondary'
    },
    {
      id: 'energy',
      name: 'Энергосистема',
      icon: 'Zap',
      status: 'active',
      power: 76,
      color: 'text-accent'
    },
    {
      id: 'shields',
      name: 'Защита',
      icon: 'Shield',
      status: 'standby',
      power: 45,
      color: 'text-primary'
    }
  ];

  const handleVoiceToggle = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      const commands = [
        'Активирую двигатели...',
        'Увеличиваю мощность...',
        'Проверяю системы...',
        'Готов к полёту!'
      ];
      let index = 0;
      const interval = setInterval(() => {
        if (index < commands.length) {
          setVoiceCommand(commands[index]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsVoiceActive(false);
            setVoiceCommand('');
          }, 1500);
        }
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float glow-cyan">
              <Icon name="Plane" size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            FLYING MACHINE TECH
          </h1>
          <p className="text-xl text-muted-foreground">Панель управления летающей машиной</p>
        </header>

        <Tabs defaultValue="control" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="control" className="flex items-center gap-2">
              <Icon name="Gauge" size={18} />
              Управление
            </TabsTrigger>
            <TabsTrigger value="template" className="flex items-center gap-2">
              <Icon name="FileText" size={18} />
              Бумажная модель
            </TabsTrigger>
          </TabsList>

          <TabsContent value="control" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-lg border-primary/30 p-6 glow-cyan">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Icon name="Gauge" size={28} className="text-primary" />
                Управление мощностью
              </h2>
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary">
                Онлайн
              </Badge>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Мощность двигателя</span>
                  <span className="text-sm font-bold text-primary">{enginePower}%</span>
                </div>
                <Slider
                  value={[enginePower]}
                  onValueChange={(value) => setEnginePower(value[0])}
                  max={100}
                  step={1}
                  className="mb-4"
                />
                <Progress value={enginePower} className="h-3 glow-cyan" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/20 hover:border-primary transition-all"
                  onClick={() => setEnginePower(Math.max(0, enginePower - 10))}
                >
                  <Icon name="Minus" size={18} className="mr-2" />
                  -10%
                </Button>
                <Button
                  variant="outline"
                  className="border-secondary/50 hover:bg-secondary/20 hover:border-secondary transition-all"
                  onClick={() => setEnginePower(50)}
                >
                  <Icon name="Rotate3d" size={18} className="mr-2" />
                  50%
                </Button>
                <Button
                  variant="outline"
                  className="border-accent/50 hover:bg-accent/20 hover:border-accent transition-all"
                  onClick={() => setEnginePower(Math.min(100, enginePower + 10))}
                >
                  <Icon name="Plus" size={18} className="mr-2" />
                  +10%
                </Button>
              </div>
            </div>
          </Card>

            <Card className="bg-card/50 backdrop-blur-lg border-secondary/30 p-6 glow-purple relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Icon name="Mic" size={28} className="text-secondary" />
                Голосовое управление
              </h2>
              <Badge
                variant="outline"
                className={`${
                  isVoiceActive
                    ? 'bg-accent/20 text-accent border-accent animate-pulse-glow'
                    : 'bg-muted/20 text-muted-foreground border-muted'
                }`}
              >
                {isVoiceActive ? 'Слушаю...' : 'Готов'}
              </Badge>
            </div>

            {isVoiceActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent animate-scan pointer-events-none"></div>
            )}

            <div className="flex items-center justify-center py-12">
              <Button
                size="lg"
                onClick={handleVoiceToggle}
                className={`w-32 h-32 rounded-full text-2xl transition-all ${
                  isVoiceActive
                    ? 'bg-gradient-to-br from-accent to-accent/70 hover:from-accent/90 hover:to-accent/60 glow-pink animate-pulse-glow'
                    : 'bg-gradient-to-br from-secondary to-secondary/70 hover:from-secondary/90 hover:to-secondary/60 glow-purple'
                }`}
              >
                <Icon name={isVoiceActive ? 'MicOff' : 'Mic'} size={48} />
              </Button>
            </div>

            {voiceCommand && (
              <div className="mt-4 p-4 bg-accent/20 border border-accent/50 rounded-lg text-center animate-fade-in">
                <p className="text-accent font-medium text-lg">{voiceCommand}</p>
              </div>
            )}
          </Card>
            </div>

            <Card className="bg-card/50 backdrop-blur-lg border-primary/30 p-6 glow-cyan">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Activity" size={28} className="text-primary" />
            Состояние систем
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systems.map((system) => (
              <Card
                key={system.id}
                className={`p-4 cursor-pointer transition-all border-2 ${
                  selectedSystem === system.id
                    ? 'bg-primary/20 border-primary scale-105'
                    : 'bg-muted/10 border-muted/30 hover:border-primary/50'
                }`}
                onClick={() => setSelectedSystem(system.id === selectedSystem ? null : system.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon name={system.icon as any} size={32} className={system.color} />
                  <Badge
                    variant={system.status === 'active' ? 'default' : 'secondary'}
                    className={
                      system.status === 'active'
                        ? 'bg-primary/20 text-primary animate-pulse-glow'
                        : 'bg-muted/20 text-muted-foreground'
                    }
                  >
                    {system.status === 'active' ? 'Активна' : 'Ожидание'}
                  </Badge>
                </div>
                <h3 className="font-bold mb-2">{system.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Мощность</span>
                    <span className={`font-bold ${system.color}`}>{system.power}%</span>
                  </div>
                  <Progress
                    value={system.power}
                    className={`h-2 ${system.status === 'active' ? 'glow-cyan' : ''}`}
                  />
                </div>
              </Card>
            ))}
          </div>

          {selectedSystem && (
            <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 rounded-lg animate-fade-in">
              <h3 className="text-lg font-bold mb-2 text-primary">
                Детали системы:{' '}
                {systems.find((s) => s.id === selectedSystem)?.name}
              </h3>
              <p className="text-muted-foreground">
                Система работает в штатном режиме. Все параметры в норме. Готова к дальнему полёту.
              </p>
            </div>
          )}
        </Card>
          </TabsContent>

          <TabsContent value="template">
            <PaperTemplate />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}