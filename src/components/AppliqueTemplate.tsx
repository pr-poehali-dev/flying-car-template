import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function AppliqueTemplate() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card/50 backdrop-blur-lg border-primary/30 p-6 glow-cyan print:bg-white print:border-black">
        <div className="flex items-center justify-between mb-6 print:hidden">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Icon name="Layers" size={28} className="text-primary" />
            Шаблон для аппликации
          </h2>
          <Button
            onClick={handlePrint}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Icon name="Printer" size={20} className="mr-2" />
            Печать аппликации
          </Button>
        </div>

        <div className="bg-white text-black p-8 rounded-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">FLYING MACHINE - АППЛИКАЦИЯ</h1>
            <p className="text-sm text-gray-600">Плоский шаблон для создания картины</p>
          </div>

          <svg
            viewBox="0 0 900 700"
            className="w-full h-auto border-2 border-gray-300 rounded"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9FF" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7B2CBF" />
                <stop offset="100%" stopColor="#9b87f5" />
              </linearGradient>
              <linearGradient id="accentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF006E" />
                <stop offset="100%" stopColor="#C9006E" />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
            </defs>

            <rect width="900" height="700" fill="#f8f9fa" />
            
            <text x="450" y="30" textAnchor="middle" fontSize="14" fill="#666" fontWeight="bold">
              ✂️ Вырежи все детали по контуру и наклей на фон
            </text>

            <g id="background-elements">
              <circle cx="100" cy="100" r="20" fill="#FFD93D" opacity="0.3" />
              <circle cx="800" cy="120" r="15" fill="#FFD93D" opacity="0.3" />
              <circle cx="150" cy="180" r="10" fill="#FFD93D" opacity="0.3" />
            </g>

            <g id="main-body" filter="url(#shadow)">
              <path
                d="M 450 150 L 520 180 L 540 250 L 520 350 L 480 380 L 420 380 L 380 350 L 360 250 L 380 180 Z"
                fill="url(#bodyGrad)"
                stroke="#000"
                strokeWidth="2.5"
              />
              <ellipse cx="450" cy="200" rx="35" ry="25" fill="#E0F7FF" stroke="#000" strokeWidth="2" opacity="0.8" />
              <circle cx="440" cy="195" r="8" fill="#001F3F" />
              <circle cx="442" cy="193" r="3" fill="#fff" />
              
              <rect x="430" y="280" width="40" height="15" rx="3" fill="#001F3F" stroke="#000" strokeWidth="1.5" />
              <rect x="430" y="310" width="40" height="15" rx="3" fill="#001F3F" stroke="#000" strokeWidth="1.5" />
              
              <text x="450" y="420" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
                КОРПУС
              </text>
              <text x="450" y="438" textAnchor="middle" fontSize="11" fill="#666">
                Деталь 1 - наклеить первой
              </text>
            </g>

            <g id="left-wing" filter="url(#shadow)">
              <path
                d="M 180 250 L 280 220 L 340 240 L 350 280 L 320 310 L 200 300 Z"
                fill="url(#wingGrad)"
                stroke="#000"
                strokeWidth="2.5"
              />
              <circle cx="230" cy="260" r="12" fill="#FFD93D" stroke="#000" strokeWidth="1.5" />
              <circle cx="300" cy="270" r="12" fill="#FFD93D" stroke="#000" strokeWidth="1.5" />
              
              <text x="265" y="345" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                ЛЕВОЕ КРЫЛО
              </text>
              <text x="265" y="360" textAnchor="middle" fontSize="10" fill="#666">
                Деталь 2
              </text>
            </g>

            <g id="right-wing" filter="url(#shadow)">
              <path
                d="M 720 250 L 620 220 L 560 240 L 550 280 L 580 310 L 700 300 Z"
                fill="url(#wingGrad)"
                stroke="#000"
                strokeWidth="2.5"
              />
              <circle cx="670" cy="260" r="12" fill="#FFD93D" stroke="#000" strokeWidth="1.5" />
              <circle cx="600" cy="270" r="12" fill="#FFD93D" stroke="#000" strokeWidth="1.5" />
              
              <text x="635" y="345" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                ПРАВОЕ КРЫЛО
              </text>
              <text x="635" y="360" textAnchor="middle" fontSize="10" fill="#666">
                Деталь 3
              </text>
            </g>

            <g id="engines" filter="url(#shadow)">
              <g id="engine-left">
                <rect x="240" y="480" width="45" height="65" rx="8" fill="url(#accentGrad)" stroke="#000" strokeWidth="2" />
                <ellipse cx="262.5" cy="515" rx="18" ry="22" fill="#001F3F" stroke="#000" strokeWidth="1.5" />
                <ellipse cx="262.5" cy="515" rx="10" ry="14" fill="#FF006E" opacity="0.6" />
                <text x="262.5" y="570" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                  ДВИГ. Л
                </text>
                <text x="262.5" y="583" textAnchor="middle" fontSize="9" fill="#666">
                  Деталь 4
                </text>
              </g>

              <g id="engine-right">
                <rect x="615" y="480" width="45" height="65" rx="8" fill="url(#accentGrad)" stroke="#000" strokeWidth="2" />
                <ellipse cx="637.5" cy="515" rx="18" ry="22" fill="#001F3F" stroke="#000" strokeWidth="1.5" />
                <ellipse cx="637.5" cy="515" rx="10" ry="14" fill="#FF006E" opacity="0.6" />
                <text x="637.5" y="570" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                  ДВИГ. П
                </text>
                <text x="637.5" y="583" textAnchor="middle" fontSize="9" fill="#666">
                  Деталь 5
                </text>
              </g>
            </g>

            <g id="tail-elements" filter="url(#shadow)">
              <path
                d="M 420 500 L 480 500 L 470 560 L 450 580 L 430 560 Z"
                fill="url(#accentGrad)"
                stroke="#000"
                strokeWidth="2"
              />
              <text x="450" y="610" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                ХВОСТ
              </text>
              <text x="450" y="623" textAnchor="middle" fontSize="9" fill="#666">
                Деталь 6
              </text>

              <path
                d="M 380 520 L 410 515 L 415 545 L 390 548 Z"
                fill="#00D9FF"
                stroke="#000"
                strokeWidth="1.5"
              />
              <text x="398" y="565" textAnchor="middle" fontSize="8" fill="#333">
                7L
              </text>

              <path
                d="M 520 520 L 490 515 L 485 545 L 510 548 Z"
                fill="#00D9FF"
                stroke="#000"
                strokeWidth="1.5"
              />
              <text x="502" y="565" textAnchor="middle" fontSize="8" fill="#333">
                7R
              </text>
            </g>

            <g id="decorative-flames" filter="url(#shadow)">
              <ellipse cx="262.5" cy="555" rx="8" ry="15" fill="#FFD93D" opacity="0.7" />
              <ellipse cx="262.5" cy="565" rx="6" ry="12" fill="#FF6B35" opacity="0.8" />
              
              <ellipse cx="637.5" cy="555" rx="8" ry="15" fill="#FFD93D" opacity="0.7" />
              <ellipse cx="637.5" cy="565" rx="6" ry="12" fill="#FF6B35" opacity="0.8" />
            </g>

            <line x1="60" y1="660" x2="200" y2="660" stroke="#000" strokeWidth="2" />
            <text x="130" y="680" textAnchor="middle" fontSize="11" fill="#666">
              ✂️ линия реза
            </text>
          </svg>

          <div className="mt-8 border-t-2 border-gray-300 pt-6">
            <h3 className="text-xl font-bold mb-4 text-center">Инструкция по созданию аппликации</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Подготовка</p>
                    <p className="text-sm text-gray-600">Распечатай шаблон на цветном принтере или раскрась детали вручную</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Вырезание</p>
                    <p className="text-sm text-gray-600">Аккуратно вырежь все 7 деталей по чёрному контуру</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Подготовка фона</p>
                    <p className="text-sm text-gray-600">Возьми лист картона или плотной бумаги для основы (А4 или А3)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Раскрась фон</p>
                    <p className="text-sm text-gray-600">Создай космический фон: тёмно-синий, фиолетовый, добавь звёзды</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary flex-shrink-0">
                    5
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Размещение корпуса</p>
                    <p className="text-sm text-gray-600">Приклей корпус (деталь 1) в центре композиции</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary flex-shrink-0">
                    6
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Крылья</p>
                    <p className="text-sm text-gray-600">Приклей левое (2) и правое (3) крыло по бокам корпуса</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary flex-shrink-0">
                    7
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Двигатели и хвост</p>
                    <p className="text-sm text-gray-600">Приклей двигатели (4, 5), хвост (6) и стабилизаторы (7L, 7R)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary flex-shrink-0">
                    8
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Завершение</p>
                    <p className="text-sm text-gray-600">Добавь детали: блики, звёзды, след от двигателей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">💡 Совет 1</p>
              <p className="text-xs text-blue-700">Используй клей-карандаш для аккуратного приклеивания без морщин</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">🎨 Совет 2</p>
              <p className="text-xs text-purple-700">Можешь добавить блёстки или металлические маркеры для эффекта</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
              <p className="text-sm font-semibold text-pink-900 mb-1">⭐ Совет 3</p>
              <p className="text-xs text-pink-700">Создай объём: приклей некоторые детали на двусторонний скотч</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
