import { useState } from 'react';
import { Calendar, Sun, Leaf, Snowflake, Flame, ChevronRight, ArrowLeft } from 'lucide-react';
import { seasonalFragrances, fragranceMaterials, fragranceRecipes } from '../data/chineseMedicineData';

interface SeasonsProps {
  onNavigate: (tab: string) => void;
}

const seasonIcons: Record<string, typeof Sun> = {
  '春': Leaf,
  '夏': Flame,
  '秋': Sun,
  '冬': Snowflake,
};

const seasonColors: Record<string, string> = {
  '春': 'from-jade-400 to-jade-600',
  '夏': 'from-coral-400 to-coral-600',
  '秋': 'from-gold-400 to-gold-600',
  '冬': 'from-sky-400 to-sky-600',
};

export default function Seasons({ onNavigate }: SeasonsProps) {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);

  const season = selectedSeason 
    ? seasonalFragrances.find(s => s.season === selectedSeason)
    : null;

  const seasonMaterials = season 
    ? fragranceMaterials.filter(m => season.recommendedMaterials.includes(m.name))
    : [];

  const seasonRecipes = season 
    ? fragranceRecipes.filter(r => season.recommendedRecipes.includes(r.name))
    : [];

  if (season) {
    const Icon = seasonIcons[season.season];
    return (
      <div className="min-h-screen bg-ivory-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => setSelectedSeason(null)}
            className="flex items-center space-x-2 text-gold-600 mb-6 hover:text-gold-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回四季香疗</span>
          </button>

          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${seasonColors[season.season]} rounded-xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">
                  {season.season}季香疗
                </h1>
                <p className="text-ink-500">{season.keyPoints}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-jade-600" />
                </div>
                <div>
                  <h3 className="font-semibold font-chinese text-ink-700">推荐香材</h3>
                  <p className="text-ink-500 text-sm">适合{season.season}季的本草香材</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {seasonMaterials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => onNavigate('materials')}
                    className="card-hover bg-jade-50/50 rounded-xl p-4 text-center"
                  >
                    <img 
                      src={material.image} 
                      alt={material.name}
                      className="w-14 h-14 rounded-lg object-cover mx-auto mb-2"
                    />
                    <p className="font-semibold text-ink-600">{material.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                  <Sun className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold font-chinese text-ink-700">推荐香方</h3>
                  <p className="text-ink-500 text-sm">{season.season}季专属养生方案</p>
                </div>
              </div>
              <div className="space-y-3">
                {seasonRecipes.map((recipe) => (
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

          <div className="bg-white rounded-xl p-5 chinese-border shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-coral-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">{season.season}季节气香疗</h3>
                <p className="text-ink-500 text-sm">24节气专属养生建议</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {season.solarTerms.map((term) => (
                <div key={term.name} className="bg-gold-50/50 rounded-xl p-4 card-hover">
                  <h4 className="font-semibold text-ink-600 mb-2">{term.name}</h4>
                  <p className="text-ink-500 text-sm mb-3">{term.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {term.suitableMaterials.map((m, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white text-ink-500 text-xs rounded-full font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
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
            <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">四季香疗</h1>
            <p className="text-ink-500">春夏秋冬、24节气专属养生香方</p>
          </div>
          <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
            <Calendar className="w-6 h-6 text-gold-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {seasonalFragrances.map((season) => {
            const Icon = seasonIcons[season.season];
            return (
              <button
                key={season.season}
                onClick={() => setSelectedSeason(season.season)}
                className="card-hover bg-white rounded-xl p-5 md:p-6 text-left chinese-border shadow-card"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${seasonColors[season.season]} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-chinese text-ink-700 mb-2">{season.season}季</h3>
                <p className="text-ink-500 text-sm mb-3">{season.keyPoints}</p>
                <div className="flex flex-wrap gap-2">
                  {season.recommendedMaterials.slice(0, 3).map((m, idx) => (
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
              <Calendar className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">四季香疗速查表</h3>
              <p className="text-ink-500 text-sm">快速查阅各季节的养生重点与推荐香材</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold-50/50">
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">季节</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">养生重点</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">推荐香材</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">推荐香方</th>
                </tr>
              </thead>
              <tbody>
                {seasonalFragrances.map((season, idx) => (
                  <tr key={season.season} className={`border-t border-gold-100 hover:bg-gold-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gold-50/30'}`}>
                    <td className="px-4 py-3 font-medium text-ink-600">{season.season}季</td>
                    <td className="px-4 py-3 text-ink-500">{season.keyPoints}</td>
                    <td className="px-4 py-3 text-jade-500">{season.recommendedMaterials.join('、')}</td>
                    <td className="px-4 py-3 text-gold-500 font-medium">{season.recommendedRecipes.join('、')}</td>
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