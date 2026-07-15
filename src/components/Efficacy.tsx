import { useState } from 'react';
import { Sparkles, Moon, Wind, Droplets, Flame, Sun, ArrowLeft, AlertTriangle } from 'lucide-react';
import { efficacyCategories, fragranceRecipes, fragranceMaterials } from '../data/chineseMedicineData';

interface EfficacyProps {
  onNavigate: (tab: string) => void;
}

const iconMap: Record<string, typeof Moon> = {
  Moon: Moon,
  Wind: Wind,
  Droplets: Droplets,
  Utensils: Sparkles,
  Flame: Flame,
  Sun: Sun,
};

const categoryColors: Record<string, string> = {
  '1': 'from-gold-400 to-gold-500',
  '2': 'from-jade-500 to-jade-600',
  '3': 'from-gold-500 to-gold-600',
  '4': 'from-coral-500 to-coral-600',
  '5': 'from-sky-400 to-sky-500',
  '6': 'from-coral-400 to-coral-500',
  '7': 'from-sky-500 to-sky-600',
  '8': 'from-coral-500 to-coral-700',
};

export default function Efficacy({ onNavigate }: EfficacyProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const category = selectedCategory 
    ? efficacyCategories.find(c => c.id === selectedCategory) 
    : null;

  const recipe = selectedRecipe 
    ? fragranceRecipes.find(r => r.id === selectedRecipe)
    : null;

  const categoryRecipes = category 
    ? fragranceRecipes.filter(r => category.recipes.includes(r.name))
    : [];

  const categoryMaterials = category 
    ? fragranceMaterials.filter(m => category.materials.includes(m.name))
    : [];

  if (recipe) {
    return (
      <div className="min-h-screen bg-ivory-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => {
              setSelectedRecipe(null);
            }}
            className="flex items-center space-x-2 text-gold-600 mb-6 hover:text-gold-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回功效分类</span>
          </button>

          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">
                  {recipe.name}
                </h1>
                <p className="text-ink-500">{recipe.scenario}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {recipe.seasons.map((season) => (
                  <span key={season} className="px-3 py-1 bg-gold-50 text-gold-600 text-sm rounded-full font-medium">
                    {season}季
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gold-50/50 rounded-xl p-3">
                <p className="text-xs text-ink-500 mb-1">适用体质</p>
                <div className="flex flex-wrap gap-2">
                  {recipe.constitution.map((c) => (
                    <span key={c} className="px-2.5 py-1 bg-gold-50 text-gold-600 text-sm rounded-full font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-jade-50/50 rounded-xl p-3">
                <p className="text-xs text-ink-500 mb-1">适用季节</p>
                <div className="flex flex-wrap gap-2">
                  {recipe.seasons.map((s) => (
                    <span key={s} className="px-2.5 py-1 bg-jade-50 text-jade-600 text-sm rounded-full font-medium">
                      {s}季适用
                    </span>
                  ))}
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
                <h3 className="font-semibold font-chinese text-ink-700">配方组成</h3>
                <p className="text-ink-500 text-sm">香材清单与配比</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {recipe.ingredients.map((ing, idx) => {
                const material = fragranceMaterials.find(m => m.name === ing.name);
                return (
                  <div key={idx} className="bg-gold-50/50 rounded-lg p-3 text-center">
                    {material && (
                      <img 
                        src={material.image} 
                        alt={material.name}
                        className="w-16 h-16 rounded-lg object-cover mx-auto mb-2"
                      />
                    )}
                    <p className="font-semibold text-ink-600">{ing.name}</p>
                    <p className="text-ink-500 text-sm">{ing.proportion}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                <Droplets className="w-5 h-5 text-jade-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">制作步骤</h3>
                <p className="text-ink-500 text-sm">图文分步讲解</p>
              </div>
            </div>
            <div className="space-y-3">
              {recipe.steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-jade-50/50 rounded-lg">
                  <div className="w-8 h-8 bg-jade-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-jade-600">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Moon className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">作用原理</h3>
                <p className="text-ink-500 text-sm">中医辨证解读</p>
              </div>
            </div>
            <div className="bg-gold-50/50 rounded-lg p-5">
              <p className="text-ink-500">{recipe.principle}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-coral-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">注意事项</h3>
                <p className="text-ink-500 text-sm">使用时长与禁忌</p>
              </div>
            </div>
            <div className="space-y-3">
              {recipe.precautions.map((prec, idx) => (
                <div key={idx} className={`flex items-start space-x-3 p-3 rounded-lg ${
                  prec.type === 'contraindication' ? 'bg-coral-50/50' : 'bg-gold-50/50'
                }`}>
                  <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
                    prec.type === 'contraindication' ? 'text-coral-500' : 'text-gold-500'
                  }`} />
                  <p className="text-ink-600">{prec.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category) {
    return (
      <div className="min-h-screen bg-ivory-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 text-gold-600 mb-6 hover:text-gold-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回全部功效</span>
          </button>

          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${categoryColors[category.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center`}>
                {category.icon && (() => {
                  const Icon = iconMap[category.icon];
                  return <Icon className="w-7 h-7 text-white" />;
                })()}
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">
                  {category.name}
                </h1>
                <p className="text-ink-500">{category.description}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">推荐香方</h2>
                <p className="text-ink-500 text-sm">适合{category.name}的居家香疗方案</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryRecipes.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe.id)}
                  className="card-hover bg-white rounded-xl p-5 text-left chinese-border shadow-card"
                >
                  <h3 className="font-semibold font-chinese text-ink-700 text-base mb-2">{recipe.name}</h3>
                  <p className="text-ink-500 text-sm mb-3 line-clamp-2">{recipe.scenario}</p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 3).map((ing, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-gold-50/50 text-gold-600 text-xs rounded-full font-medium">
                        {ing.name}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                <Droplets className="w-5 h-5 text-jade-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">适用香材</h2>
                <p className="text-ink-500 text-sm">具有{category.name}功效的本草香材</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoryMaterials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => onNavigate('materials')}
                  className="card-hover bg-white rounded-xl overflow-hidden chinese-border shadow-card text-left"
                >
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold font-chinese text-ink-700 mb-1">{material.name}</h3>
                    <p className="text-ink-500 text-sm">{material.nature}</p>
                  </div>
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
            <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">香疗功效分类</h1>
            <p className="text-ink-500">安神、助眠、疏肝、祛湿等对症香疗方案</p>
          </div>
          <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
            <Sparkles className="w-6 h-6 text-gold-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {efficacyCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="card-hover bg-white rounded-xl p-5 text-left chinese-border shadow-card"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[category.id] || 'from-gold-400 to-gold-500'} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-chinese text-ink-700 text-base">{category.name}</h3>
                    <p className="text-ink-500 text-sm">{category.materials.length}种香材</p>
                  </div>
                </div>
                <p className="text-ink-500 text-sm mb-3 line-clamp-2">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.materials.slice(0, 3).map((m, idx) => (
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
            <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">香疗功效速查表</h3>
              <p className="text-ink-500 text-sm">快速查阅各功效的代表香材与适用场景</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold-50/50">
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">功效分类</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">代表香材</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">适用场景</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">推荐香方</th>
                </tr>
              </thead>
              <tbody>
                {efficacyCategories.map((category, idx) => (
                  <tr key={category.id} className={`border-t border-gold-100 hover:bg-gold-50/30 ${idx % 2 === 0 ? 'bg-white' : 'bg-ivory-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-ink-600">{category.name}</td>
                    <td className="px-4 py-3 text-ink-500">{category.materials.join('、')}</td>
                    <td className="px-4 py-3 text-ink-500">
                      {categoryRecipes.length > 0 
                        ? fragranceRecipes.find(r => category.recipes.includes(r.name))?.scenario 
                        : '-'}
                    </td>
                    <td className="px-4 py-3 text-gold-500 font-medium">
                      {category.recipes.join('、')}
                    </td>
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