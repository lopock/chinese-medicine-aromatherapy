import { useState } from 'react';
import { Flower2, Package, Flame, Bed, Coffee, Wind, Radio, CheckCircle, ArrowLeft } from 'lucide-react';
import { usageMethods, fragranceMaterials } from '../data/chineseMedicineData';

interface MethodsProps {
  onNavigate: (tab: string) => void;
}

const iconMap: Record<string, typeof Package> = {
  Bag: Package,
  Flame: Flame,
  Bed: Bed,
  Kettle: Coffee,
  Smell: Wind,
  Diffuser: Radio,
};

const methodColors: Record<string, string> = {
  'methods-sachet': 'from-silk-400 to-silk-600',
  'methods-incense': 'from-coral-400 to-coral-600',
  'methods-pillow': 'from-jade-400 to-jade-600',
  'methods-boiling': 'from-gold-400 to-gold-600',
  'methods-smell': 'from-sky-400 to-sky-600',
  'methods-diffuser': 'from-silk-300 to-silk-500',
};

export default function Methods({ onNavigate }: MethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const method = selectedMethod 
    ? usageMethods.find(m => m.id === selectedMethod)
    : null;

  const methodMaterials = method 
    ? fragranceMaterials.filter(m => method.suitableMaterials.includes(m.name))
    : [];

  if (method) {
    const Icon = iconMap[method.icon];
    return (
      <div className="min-h-screen bg-ivory-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => setSelectedMethod(null)}
            className="flex items-center space-x-2 text-gold-600 mb-6 hover:text-gold-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回全部方法</span>
          </button>

          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${methodColors[method.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">
                  {method.name}
                </h1>
                <p className="text-ink-500">{method.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Flame className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">操作步骤</h3>
                <p className="text-ink-500 text-sm">分步详细讲解</p>
              </div>
            </div>
            <div className="space-y-3">
              {method.steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-gold-50/50 rounded-xl">
                  <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-gold-600">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink-600">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-jade-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">温馨提示</h3>
                <p className="text-ink-500 text-sm">使用注意事项</p>
              </div>
            </div>
            <div className="space-y-3">
              {method.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-jade-50/50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-jade-500 flex-shrink-0" />
                  <p className="text-ink-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-silk-100 rounded-xl flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-silk-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">适合香材</h3>
                <p className="text-ink-500 text-sm">推荐搭配香材</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {methodMaterials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => onNavigate('materials')}
                  className="card-hover bg-silk-50/50 rounded-xl p-4 text-center"
                >
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-16 h-16 rounded-xl object-cover mx-auto mb-3"
                  />
                  <p className="font-semibold text-ink-600">{material.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">居家香疗方法</h1>
            <p className="text-ink-500">香囊、熏香、香枕、煮香等外治方式</p>
          </div>
          <div className="w-12 h-12 bg-jade-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
            <Flower2 className="w-6 h-6 text-jade-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {usageMethods.map((method) => {
            const Icon = iconMap[method.icon];
            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className="card-hover bg-white rounded-xl p-5 md:p-6 text-left chinese-border shadow-card"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${methodColors[method.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-chinese text-ink-700 text-base">{method.name}</h3>
                    <p className="text-ink-500 text-sm">{method.steps.length}个步骤</p>
                  </div>
                </div>
                <p className="text-ink-500 text-sm mb-3 line-clamp-2">{method.description}</p>
                <div className="flex flex-wrap gap-2">
                  {method.suitableMaterials.slice(0, 3).map((m, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-jade-50/50 text-jade-600 text-xs rounded-full font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
              <Flame className="w-5 h-5 text-coral-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">方法对比</h3>
              <p className="text-ink-500 text-sm">了解不同香疗方法的特点</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {usageMethods.map((method) => {
              const Icon = iconMap[method.icon];
              return (
                <div key={method.id} className="bg-gold-50/50 rounded-xl p-4 text-center card-hover">
                  <div className={`w-10 h-10 bg-gradient-to-br ${methodColors[method.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-ink-600 mb-2">{method.name}</h4>
                  <ul className="text-ink-500 text-xs space-y-2">
                    {method.tips.slice(0, 2).map((tip, idx) => (
                      <li key={idx}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}