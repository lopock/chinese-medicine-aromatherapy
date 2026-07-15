import { useState } from 'react';
import { Thermometer, CheckCircle, XCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import { constitutions, fragranceMaterials, fragranceRecipes } from '../data/chineseMedicineData';

interface ConstitutionProps {
  onNavigate: (tab: string) => void;
}

const constitutionColors: Record<string, string> = {
  'constitution-yang-deficiency': 'from-coral-400 to-coral-600',
  'constitution-yin-deficiency': 'from-silk-400 to-silk-600',
  'constitution-phlegm-damp': 'from-gold-400 to-gold-600',
  'constitution-damp-heat': 'from-sky-400 to-sky-600',
  'constitution-blood-stasis': 'from-coral-500 to-coral-700',
  'constitution-qi-stagnation': 'from-jade-400 to-jade-600',
  'constitution-qi-deficiency': 'from-gold-300 to-gold-500',
  'constitution-special': 'from-silk-300 to-silk-500',
  'constitution-peace': 'from-jade-300 to-jade-500',
};

export default function Constitution({ onNavigate }: ConstitutionProps) {
  const [selectedConstitution, setSelectedConstitution] = useState<string | null>(null);

  const constitution = selectedConstitution 
    ? constitutions.find(c => c.id === selectedConstitution)
    : null;

  const suitableMaterialDetails = constitution 
    ? fragranceMaterials.filter(m => constitution.suitableMaterials.includes(m.name))
    : [];

  const avoidedMaterialDetails = constitution 
    ? fragranceMaterials.filter(m => constitution.avoidedMaterials.includes(m.name))
    : [];

  const recommendedRecipeDetails = constitution 
    ? fragranceRecipes.filter(r => constitution.recommendedRecipes.includes(r.name))
    : [];

  if (constitution) {
    return (
      <div className="min-h-screen bg-ivory-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => setSelectedConstitution(null)}
            className="flex items-center space-x-2 text-gold-600 mb-6 hover:text-gold-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回体质大全</span>
          </button>

          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${constitutionColors[constitution.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center`}>
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">
                  {constitution.name}
                </h1>
              </div>
            </div>

            <div className="bg-gold-50/50 rounded-xl p-5">
              <h3 className="font-semibold text-ink-600 mb-3">体质特征</h3>
              <div className="flex flex-wrap gap-3">
                {constitution.characteristics.map((char, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-white text-ink-600 text-sm rounded-full font-medium">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-jade-600" />
                </div>
                <div>
                  <h3 className="font-semibold font-chinese text-ink-700">推荐香材</h3>
                  <p className="text-ink-500 text-sm">适合该体质的香材</p>
                </div>
              </div>
              <div className="space-y-3">
                {suitableMaterialDetails.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => onNavigate('materials')}
                    className="w-full flex items-center space-x-3 p-3 bg-jade-50/50 rounded-xl card-hover"
                  >
                    <img 
                      src={material.image} 
                      alt={material.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-ink-600">{material.name}</p>
                      <p className="text-ink-500 text-sm">{material.nature}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-jade-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-coral-600" />
                </div>
                <div>
                  <h3 className="font-semibold font-chinese text-ink-700">避坑香材</h3>
                  <p className="text-ink-500 text-sm">该体质慎用香材</p>
                </div>
              </div>
              {avoidedMaterialDetails.length > 0 ? (
                <div className="space-y-3">
                  {avoidedMaterialDetails.map((material) => (
                    <div key={material.id} className="flex items-center space-x-3 p-3 bg-coral-50/50 rounded-xl">
                      <img 
                        src={material.image} 
                        alt={material.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-ink-600">{material.name}</p>
                        <p className="text-ink-500 text-sm">{material.nature}</p>
                      </div>
                      <span className="px-3 py-1.5 bg-coral-100 text-coral-600 text-xs rounded-full font-medium">
                        慎用
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-jade-50/50 rounded-xl">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-jade-500" />
                  <p className="text-ink-600 font-medium">该体质无特别禁忌香材</p>
                  <p className="text-ink-500 text-sm mt-1">可根据喜好自由选择</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">推荐香方</h3>
                <p className="text-ink-500 text-sm">适合该体质的香疗方案</p>
              </div>
            </div>
            <div className="space-y-3">
              {recommendedRecipeDetails.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => onNavigate('efficacy')}
                  className="w-full flex items-center justify-between p-3 bg-gold-50/50 rounded-xl card-hover"
                >
                  <div>
                    <p className="font-semibold text-ink-600">{recipe.name}</p>
                    <p className="text-ink-500 text-sm mt-1">{recipe.scenario}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gold-500" />
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
            <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">体质配香指南</h1>
            <p className="text-ink-500">九种体质专属适配香方与避香禁忌</p>
          </div>
          <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
            <Thermometer className="w-6 h-6 text-coral-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {constitutions.map((constitution) => (
            <button
              key={constitution.id}
              onClick={() => setSelectedConstitution(constitution.id)}
              className="card-hover bg-white rounded-xl p-5 md:p-6 text-left chinese-border shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${constitutionColors[constitution.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center`}>
                    <Thermometer className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold font-chinese text-ink-700 text-base">{constitution.name}</h3>
                </div>
                <span className="px-2.5 py-1 bg-gold-50 text-gold-600 text-xs rounded-full font-medium">
                  {constitution.suitableMaterials.length}种推荐
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {constitution.characteristics.slice(0, 3).map((char, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-gold-50/50 text-ink-500 text-xs rounded-full font-medium">
                    {char}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-jade-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>{constitution.suitableMaterials.length}种推荐</span>
                </div>
                {constitution.avoidedMaterials.length > 0 && (
                  <div className="flex items-center space-x-2 text-coral-500">
                    <XCircle className="w-4 h-4" />
                    <span>{constitution.avoidedMaterials.length}种慎用</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">体质速查表</h3>
              <p className="text-ink-500 text-sm">快速查阅各体质的推荐与禁忌香材</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold-50/50">
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">体质类型</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">推荐香材</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">避坑香材</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">推荐香方</th>
                </tr>
              </thead>
              <tbody>
                {constitutions.map((constitution, idx) => (
                  <tr key={constitution.id} className={`border-t border-gold-100 hover:bg-gold-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gold-50/30'}`}>
                    <td className="px-4 py-3 font-medium text-ink-600">{constitution.name}</td>
                    <td className="px-4 py-3 text-jade-500">{constitution.suitableMaterials.join('、')}</td>
                    <td className="px-4 py-3 text-coral-500">
                      {constitution.avoidedMaterials.length > 0 ? constitution.avoidedMaterials.join('、') : '-'}
                    </td>
                    <td className="px-4 py-3 text-gold-500 font-medium">{constitution.recommendedRecipes.join('、')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}