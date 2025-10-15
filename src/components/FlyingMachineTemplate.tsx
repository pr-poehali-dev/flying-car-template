import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function FlyingMachineTemplate() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card/50 backdrop-blur-lg border-primary/30 p-6 glow-cyan print:bg-white print:border-black">
        <div className="flex items-center justify-between mb-6 print:hidden">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Icon name="Plane" size={28} className="text-primary" />
            Шаблон летающей машины
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
            <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
              FLYING MACHINE
            </h1>
            <p className="text-sm text-gray-600">Шаблон для создания летающей машины</p>
            <p className="text-xs text-gray-500 mt-1">Распечатай, вырежи и собери свой космический корабль!</p>
          </div>

          <svg
            viewBox="0 0 800 1100"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
              </pattern>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <rect width="800" height="1100" fill="url(#grid)" />

            <g id="main-fuselage">
              <path
                d="M 400 80 L 460 100 L 480 200 L 485 320 L 470 420 L 400 450 L 330 420 L 315 320 L 320 200 L 340 100 Z"
                fill="url(#bodyGrad)"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeDasharray="8,4"
              />
              <circle cx="400" cy="150" r="35" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="400" cy="150" r="20" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1.5" />
              
              <text x="400" y="270" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0891b2">
                КОРПУС
              </text>
              <text x="400" y="295" textAnchor="middle" fontSize="14" fill="#64748b">
                Деталь #1
              </text>
              <text x="400" y="315" textAnchor="middle" fontSize="11" fill="#94a3b8">
                Главная часть корабля
              </text>
              
              <circle cx="400" cy="200" r="4" fill="#06b6d4" />
              <circle cx="400" cy="350" r="4" fill="#06b6d4" />
              <circle cx="350" cy="250" r="3" fill="#0891b2" />
              <circle cx="450" cy="250" r="3" fill="#0891b2" />
            </g>

            <g id="wing-left">
              <path
                d="M 120 480 L 280 450 L 310 490 L 320 540 L 300 580 L 150 560 Z"
                fill="url(#wingGrad)"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeDasharray="8,4"
              />
              <path
                d="M 170 500 L 250 485 L 270 515 L 260 540 L 180 530 Z"
                fill="rgba(168, 85, 247, 0.1)"
                stroke="#a855f7"
                strokeWidth="1"
                strokeDasharray="3,2"
              />
              
              <text x="220" y="520" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#9333ea">
                КРЫЛО
              </text>
              <text x="220" y="540" textAnchor="middle" fontSize="12" fill="#64748b">
                Левое (#2)
              </text>
              
              <circle cx="200" cy="500" r="3" fill="#a855f7" />
              <circle cx="280" cy="520" r="3" fill="#a855f7" />
            </g>

            <g id="wing-right">
              <path
                d="M 680 480 L 520 450 L 490 490 L 480 540 L 500 580 L 650 560 Z"
                fill="url(#wingGrad)"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeDasharray="8,4"
              />
              <path
                d="M 630 500 L 550 485 L 530 515 L 540 540 L 620 530 Z"
                fill="rgba(168, 85, 247, 0.1)"
                stroke="#a855f7"
                strokeWidth="1"
                strokeDasharray="3,2"
              />
              
              <text x="580" y="520" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#9333ea">
                КРЫЛО
              </text>
              <text x="580" y="540" textAnchor="middle" fontSize="12" fill="#64748b">
                Правое (#3)
              </text>
              
              <circle cx="600" cy="500" r="3" fill="#a855f7" />
              <circle cx="520" cy="520" r="3" fill="#a855f7" />
            </g>

            <g id="engine-left">
              <rect
                x="80"
                y="620"
                width="70"
                height="100"
                rx="8"
                fill="rgba(6, 182, 212, 0.15)"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeDasharray="8,4"
              />
              <rect x="90" y="640" width="50" height="15" rx="3" fill="rgba(6, 182, 212, 0.2)" stroke="#0891b2" strokeWidth="1.5" />
              <circle cx="115" cy="680" r="18" fill="none" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="115" cy="680" r="10" fill="rgba(6, 182, 212, 0.25)" stroke="#0891b2" strokeWidth="1.5" />
              
              <text x="115" y="638" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0891b2">
                ДВИГАТЕЛЬ
              </text>
              <text x="115" y="710" textAnchor="middle" fontSize="11" fill="#64748b">
                Левый (#4)
              </text>
            </g>

            <g id="engine-right">
              <rect
                x="650"
                y="620"
                width="70"
                height="100"
                rx="8"
                fill="rgba(6, 182, 212, 0.15)"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeDasharray="8,4"
              />
              <rect x="660" y="640" width="50" height="15" rx="3" fill="rgba(6, 182, 212, 0.2)" stroke="#0891b2" strokeWidth="1.5" />
              <circle cx="685" cy="680" r="18" fill="none" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="685" cy="680" r="10" fill="rgba(6, 182, 212, 0.25)" stroke="#0891b2" strokeWidth="1.5" />
              
              <text x="685" y="638" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0891b2">
                ДВИГАТЕЛЬ
              </text>
              <text x="685" y="710" textAnchor="middle" fontSize="11" fill="#64748b">
                Правый (#5)
              </text>
            </g>

            <g id="tail">
              <path
                d="M 360 760 L 440 760 L 435 850 L 425 920 L 400 950 L 375 920 L 365 850 Z"
                fill="rgba(236, 72, 153, 0.15)"
                stroke="#ec4899"
                strokeWidth="2.5"
                strokeDasharray="8,4"
              />
              <path d="M 380 800 L 420 800 L 415 860 L 385 860 Z" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="1" />
              
              <text x="400" y="835" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#db2777">
                ХВОСТ
              </text>
              <text x="400" y="855" textAnchor="middle" fontSize="12" fill="#64748b">
                Деталь #6
              </text>
              
              <circle cx="400" cy="800" r="3" fill="#ec4899" />
              <circle cx="400" cy="900" r="3" fill="#ec4899" />
            </g>

            <g id="fins">
              <path
                d="M 320 820 L 340 800 L 350 870 L 330 880 Z"
                fill="rgba(236, 72, 153, 0.15)"
                stroke="#ec4899"
                strokeWidth="2"
                strokeDasharray="5,3"
              />
              <text x="335" y="845" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#db2777">
                #7L
              </text>

              <path
                d="M 480 820 L 460 800 L 450 870 L 470 880 Z"
                fill="rgba(236, 72, 153, 0.15)"
                stroke="#ec4899"
                strokeWidth="2"
                strokeDasharray="5,3"
              />
              <text x="465" y="845" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#db2777">
                #7R
              </text>
            </g>

            <g id="cockpit-window">
              <ellipse
                cx="400"
                cy="150"
                rx="40"
                ry="30"
                fill="rgba(6, 182, 212, 0.05)"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray="3,2"
              />
              <text x="400" y="155" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0891b2">
                КАБИНА
              </text>
            </g>

            <g id="legend">
              <rect x="30" y="1000" width="200" height="80" fill="white" stroke="#cbd5e1" strokeWidth="1" rx="4" />
              <text x="130" y="1025" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">
                Обозначения:
              </text>
              <line x1="50" y1="1040" x2="80" y2="1040" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="8,4" />
              <text x="90" y="1045" fontSize="11" fill="#64748b">
                линия разреза
              </text>
              <line x1="50" y1="1060" x2="80" y2="1060" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,2" />
              <text x="90" y="1065" fontSize="11" fill="#64748b">
                линия сгиба
              </text>
            </g>
          </svg>

          <div className="mt-8 border-t-2 border-gray-300 pt-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              📋 Инструкция по сборке
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Подготовка:</span>
                    <p className="text-gray-600">Распечатайте шаблон на плотной бумаге (160-200 г/м²)</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Вырезание:</span>
                    <p className="text-gray-600">Аккуратно вырежьте все детали по сплошным линиям</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Сгибание:</span>
                    <p className="text-gray-600">Согните детали по пунктирным линиям</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Корпус:</span>
                    <p className="text-gray-600">Соберите основной корпус (#1) - это база машины</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    5
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Крылья:</span>
                    <p className="text-gray-600">Приклейте крылья (#2 и #3) к бокам корпуса</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    6
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Двигатели:</span>
                    <p className="text-gray-600">Установите двигатели (#4 и #5) под крылья</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    7
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Хвост:</span>
                    <p className="text-gray-600">Прикрепите хвост (#6) и стабилизаторы (#7L, #7R)</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    8
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Финиш:</span>
                    <p className="text-gray-600">Дайте клею высохнуть 20-30 минут. Готово!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Lightbulb" size={20} className="text-cyan-600" />
                <h4 className="font-bold text-cyan-900">Совет 1</h4>
              </div>
              <p className="text-xs text-cyan-800">
                Используйте клей-карандаш или ПВА для чистой склейки без разводов
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Sparkles" size={20} className="text-purple-600" />
                <h4 className="font-bold text-purple-900">Совет 2</h4>
              </div>
              <p className="text-xs text-purple-800">
                Можно раскрасить детали цветными карандашами или маркерами перед сборкой
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Star" size={20} className="text-pink-600" />
                <h4 className="font-bold text-pink-900">Совет 3</h4>
              </div>
              <p className="text-xs text-pink-800">
                Для большей прочности укрепите стыки небольшими полосками скотча изнутри
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-lg border-2 border-cyan-300">
            <p className="text-sm text-gray-700 text-center font-medium">
              ✨ Твоя летающая машина готова к приключениям в космосе! Удачного полёта! 🚀
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
