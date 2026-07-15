import { useState } from 'react';
import { Leaf, ArrowLeft, ChevronRight, AlertTriangle, BookOpen, Sparkles, Droplets, Star } from 'lucide-react';
import { fragranceMaterials, fragranceRecipes } from '../data/chineseMedicineData';

interface MaterialsProps {
  onNavigate: (tab: string) => void;
}

const aromaTypeColors = {
  '清香': 'bg-sky-100 text-sky-600',
  '浓香': 'bg-coral-100 text-coral-600',
  '辛香': 'bg-coral-100 text-coral-600',
  '甘香': 'bg-gold-100 text-gold-600',
  '苦香': 'bg-stone-100 text-stone-600',
  '腥香': 'bg-red-100 text-red-600',
  '调和香': 'bg-jade-100 text-jade-600',
};

const contraindicationColors = {
  '禁用': 'bg-coral-500 text-white',
  '慎用': 'bg-gold-500 text-white',
  '适用': 'bg-jade-500 text-white',
};

export default function Materials({ onNavigate }: MaterialsProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [filterAroma, setFilterAroma] = useState<string>('all');

  const filteredMaterials = filterAroma === 'all' 
    ? fragranceMaterials 
    : fragranceMaterials.filter(m => m.aromaType === filterAroma);

  const material = selectedMaterial ? fragranceMaterials.find(m => m.id === selectedMaterial) : null;

  const relatedRecipes = material 
    ? fragranceRecipes.filter(r => r.ingredients.some(i => i.name === material.name))
    : [];

  if (material) {
    return (
      <div className="min-h-screen bg-ivory-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => setSelectedMaterial(null)}
            className="flex items-center space-x-2 text-gold-600 mb-6 hover:text-gold-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回香材大全</span>
          </button>

          <div className="bg-white rounded-xl overflow-hidden chinese-border shadow-card mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <img 
                  src={material.image} 
                  alt={material.name}
                  className="w-full h-52 md:h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${aromaTypeColors[material.aromaType]}`}>
                    {material.aromaType}
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 p-5 md:p-6">
                <div className="mb-4">
                  <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">
                    {material.name}
                  </h1>
                  <p className="text-ink-500">别名：{material.alias.join('、')}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gold-50/50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="w-4 h-4 text-gold-500" />
                      <p className="text-xs text-ink-500">性味</p>
                    </div>
                    <p className="font-semibold text-ink-600">{material.nature}</p>
                  </div>
                  <div className="bg-jade-50/50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Droplets className="w-4 h-4 text-jade-500" />
                      <p className="text-xs text-ink-500">归经</p>
                    </div>
                    <p className="font-semibold text-ink-600">{material.meridian.join('、')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">香疗功效</h2>
                <p className="text-ink-500 text-sm">专属芳香作用</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {material.efficacy.map((eff, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-medium">
                  {eff}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                <Droplets className="w-5 h-5 text-jade-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">适用场景</h2>
                <p className="text-ink-500 text-sm">适合使用的场合</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {material.scenarios.map((scenario, idx) => (
                <div key={idx} className="bg-jade-50/50 rounded-lg p-3 text-ink-600 font-medium">
                  {scenario}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">使用方法</h2>
                <p className="text-ink-500 text-sm">居家香疗方式</p>
              </div>
            </div>
            <div className="space-y-3">
              {material.usageMethods.map((method, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-ivory-50/50 rounded-lg">
                  <div className="w-7 h-7 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-gold-600">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-ink-600">{method.type}</p>
                    <p className="text-ink-500 text-sm mt-0.5">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <h3 className="font-semibold font-chinese text-ink-700 mb-3">配伍香材</h3>
              <div className="flex flex-wrap gap-2">
                {material.compatibleMaterials.map((m, idx) => (
                  <span key={idx} className="px-3 py-1 bg-jade-50 text-jade-600 text-sm rounded-full font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <h3 className="font-semibold font-chinese text-ink-700 mb-3">禁忌混搭</h3>
              <div className="flex flex-wrap gap-2">
                {material.contraindicatedMaterials.map((m, idx) => (
                  <span key={idx} className="px-3 py-1 bg-coral-50 text-coral-600 text-sm rounded-full font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-coral-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">人群禁忌</h2>
                <p className="text-ink-500 text-sm">特殊人群注意事项</p>
              </div>
            </div>
            <div className="space-y-3">
              {material.contraindicatedGroups.map((group, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-coral-50/50 rounded-lg">
                  <div>
                    <p className="font-semibold text-ink-600">{group.group}</p>
                    <p className="text-ink-500 text-sm mt-0.5">{group.reason}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${contraindicationColors[group.level]}`}>
                    {group.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">典籍溯源</h2>
                <p className="text-ink-500 text-sm">古籍记载与白话科普</p>
              </div>
            </div>
            <div className="bg-gold-50/50 rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                <p className="text-sm text-ink-500">来源：{material.ancientRecords.source}</p>
              </div>
              <p className="font-medium text-ink-600 mb-2 italic text-center">"{material.ancientRecords.quote}"</p>
              <p className="text-ink-500 text-sm">{material.ancientRecords.explanation}</p>
            </div>
          </div>

          {relatedRecipes.length > 0 && (
            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <h3 className="font-semibold font-chinese text-ink-700 mb-3">相关香方</h3>
              <div className="space-y-2">
                {relatedRecipes.map((recipe) => (
                  <button 
                    key={recipe.id}
                    onClick={() => onNavigate('efficacy')}
                    className="w-full flex items-center justify-between p-3 bg-gold-50/50 rounded-lg hover:bg-gold-50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-ink-600">{recipe.name}</p>
                      <p className="text-ink-500 text-sm mt-0.5">{recipe.scenario}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gold-500" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">香材大全</h1>
            <p className="text-ink-500">中医本草香材专属库，打通中草药体系</p>
          </div>
          <div className="w-12 h-12 bg-jade-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
            <Leaf className="w-6 h-6 text-jade-600" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilterAroma('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filterAroma === 'all' 
                ? 'bg-gold-500 text-white' 
                : 'bg-white text-ink-600 hover:bg-gold-50'
            }`}
          >
            全部
          </button>
          {['清香', '浓香', '辛香', '甘香'].map((aroma) => (
            <button
              key={aroma}
              onClick={() => setFilterAroma(aroma)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filterAroma === aroma 
                  ? 'bg-gold-500 text-white' 
                  : 'bg-white text-ink-600 hover:bg-gold-50'
              }`}
            >
              {aroma}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredMaterials.map((material) => (
            <button
              key={material.id}
              onClick={() => setSelectedMaterial(material.id)}
              className="card-hover bg-white rounded-xl overflow-hidden chinese-border shadow-card text-left"
            >
              <div className="relative">
                <img 
                  src={material.image} 
                  alt={material.name}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${aromaTypeColors[material.aromaType]}`}>
                    {material.aromaType}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold font-chinese text-ink-700 text-base mb-1">{material.name}</h3>
                <p className="text-ink-500 text-sm mb-2">{material.nature}</p>
                <div className="flex flex-wrap gap-1.5">
                  {material.efficacy.slice(0, 2).map((eff, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-jade-50/50 text-jade-600 text-xs rounded-full font-medium">
                      {eff}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl p-5 chinese-border shadow-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">香材小知识</h3>
              <p className="text-ink-500 text-sm">了解香材分类与香气特质</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gold-50/50 rounded-lg p-4">
              <p className="font-semibold text-ink-600 mb-1">香材分类</p>
              <p className="text-ink-500 text-sm">香材主要分为药香、花香、草木香三大类。药香如沉香、檀香，花香如玫瑰花、茉莉花，草木香如藿香、艾叶。</p>
            </div>
            <div className="bg-jade-50/50 rounded-lg p-4">
              <p className="font-semibold text-ink-600 mb-1">香气特质</p>
              <p className="text-ink-500 text-sm">香气特质分为清香、浓香、辛香、甘香等。清香如薄荷、金银花；浓香如檀香、丁香；辛香如藿香、艾叶。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}