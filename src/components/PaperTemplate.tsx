import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PaperTemplate() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card/50 backdrop-blur-lg border-primary/30 p-6 glow-cyan print:bg-white print:border-black">
        <div className="flex items-center justify-between mb-6 print:hidden">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Icon name="Scissors" size={28} className="text-primary" />
            Шаблон для вырезания
          </h2>
          <Button
            onClick={handlePrint}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Icon name="Printer" size={20} className="mr-2" />
            Печать шаблона
          </Button>
        </div>

        <div className="bg-white text-black p-8 rounded-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">FLYING MACHINE</h1>
            <p className="text-sm text-gray-600">Бумажная модель летающей машины</p>
          </div>

          <svg
            viewBox="0 0 800 1000"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#e0e0e0" />
              </pattern>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <rect width="800" height="1000" fill="url(#dots)" />

            <g id="main-body">
              <path
                d="M 400 100 L 500 200 L 480 350 L 400 380 L 320 350 L 300 200 Z"
                fill="url(#bodyGradient)"
                stroke="#00D9FF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <text x="400" y="250" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
                КОРПУС (1)
              </text>
              <text x="400" y="270" textAnchor="middle" fontSize="12" fill="#666">
                Основной элемент
              </text>
            </g>

            <g id="left-wing">
              <path
                d="M 150 450 L 250 420 L 280 480 L 270 520 L 160 500 Z"
                fill="url(#bodyGradient)"
                stroke="#7B2CBF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <text x="215" y="475" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                КРЫЛО (2)
              </text>
              <text x="215" y="490" textAnchor="middle" fontSize="10" fill="#666">
                Левое
              </text>
            </g>

            <g id="right-wing">
              <path
                d="M 650 450 L 550 420 L 520 480 L 530 520 L 640 500 Z"
                fill="url(#bodyGradient)"
                stroke="#7B2CBF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <text x="585" y="475" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                КРЫЛО (3)
              </text>
              <text x="585" y="490" textAnchor="middle" fontSize="10" fill="#666">
                Правое
              </text>
            </g>

            <g id="cockpit">
              <ellipse
                cx="400"
                cy="180"
                rx="50"
                ry="35"
                fill="none"
                stroke="#00D9FF"
                strokeWidth="2"
              />
              <path
                d="M 350 180 Q 350 150, 380 140 L 420 140 Q 450 150, 450 180"
                fill="rgba(0, 217, 255, 0.1)"
                stroke="#00D9FF"
                strokeWidth="1.5"
              />
              <text x="400" y="185" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">
                КАБИНА (4)
              </text>
            </g>

            <g id="tail">
              <path
                d="M 370 600 L 430 600 L 420 680 L 410 720 L 390 720 L 380 680 Z"
                fill="url(#bodyGradient)"
                stroke="#FF006E"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <text x="400" y="650" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                ХВОСТ (5)
              </text>
            </g>

            <g id="stabilizers">
              <path
                d="M 340 630 L 360 620 L 370 660 L 350 665 Z"
                fill="url(#bodyGradient)"
                stroke="#FF006E"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
              <text x="355" y="645" textAnchor="middle" fontSize="8" fill="#333">
                (6L)
              </text>

              <path
                d="M 460 630 L 440 620 L 430 660 L 450 665 Z"
                fill="url(#bodyGradient)"
                stroke="#FF006E"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
              <text x="445" y="645" textAnchor="middle" fontSize="8" fill="#333">
                (6R)
              </text>
            </g>

            <g id="engines">
              <rect
                x="100"
                y="800"
                width="60"
                height="80"
                rx="5"
                fill="url(#bodyGradient)"
                stroke="#00D9FF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <circle cx="130" cy="840" r="15" fill="none" stroke="#00D9FF" strokeWidth="1.5" />
              <text x="130" y="825" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                ДВИГ.
              </text>
              <text x="130" y="860" textAnchor="middle" fontSize="10" fill="#666">
                (7L)
              </text>

              <rect
                x="640"
                y="800"
                width="60"
                height="80"
                rx="5"
                fill="url(#bodyGradient)"
                stroke="#00D9FF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <circle cx="670" cy="840" r="15" fill="none" stroke="#00D9FF" strokeWidth="1.5" />
              <text x="670" y="825" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                ДВИГ.
              </text>
              <text x="670" y="860" textAnchor="middle" fontSize="10" fill="#666">
                (7R)
              </text>
            </g>

            <g id="glue-tabs">
              <text x="50" y="30" fontSize="10" fill="#999">
                ✂ - линия разреза
              </text>
              <text x="50" y="50" fontSize="10" fill="#999">
                - - - линия сгиба
              </text>
              <line x1="20" y1="35" x2="40" y2="35" stroke="#999" strokeWidth="2" strokeDasharray="5,5" />
            </g>

            <circle cx="400" cy="220" r="3" fill="#00D9FF" />
            <circle cx="300" cy="250" r="3" fill="#00D9FF" />
            <circle cx="500" cy="250" r="3" fill="#00D9FF" />
            
            <text x="250" y="380" fontSize="10" fill="#00D9FF">●</text>
            <text x="550" y="380" fontSize="10" fill="#7B2CBF">●</text>
            
            <text x="350" y="720" fontSize="10" fill="#FF006E">●</text>
            <text x="450" y="720" fontSize="10" fill="#FF006E">●</text>
          </svg>

          <div className="mt-8 border-t-2 border-gray-300 pt-6">
            <h3 className="text-xl font-bold mb-4 text-center">Инструкция по сборке</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="font-bold text-primary">1.</span>
                  <span>Аккуратно вырежьте все детали по сплошным линиям</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">2.</span>
                  <span>Согните детали по пунктирным линиям</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">3.</span>
                  <span>Начните с корпуса (1) - это основа машины</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">4.</span>
                  <span>Приклейте кабину (4) к верхней части корпуса</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">5.</span>
                  <span>Присоедините крылья (2) и (3) по бокам корпуса</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">6.</span>
                  <span>Прикрепите хвост (5) и стабилизаторы (6L, 6R)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">7.</span>
                  <span>Установите двигатели (7L, 7R) под крылья</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">8.</span>
                  <span>Дайте клею высохнуть 15-20 минут</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              💡 Рекомендация: используйте плотную бумагу 160-200 г/м² для лучшей прочности модели
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
