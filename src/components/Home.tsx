import { Leaf, Sparkles, Flower2, Thermometer, Calendar, Sun, Moon, Wind, Droplets, ChevronRight, Shield, Star, Flame, AlertTriangle } from 'lucide-react';
import { fragranceMaterials, fragranceRecipes, efficacyCategories } from '../data/chineseMedicineData';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

const categoryCards = [
  { id: 'materials', title: '香材大全', description: '中医本草香材专属库，打通中草药体系', icon: Leaf, color: 'from-jade-500 to-jade-600' },
  { id: 'efficacy', title: '香疗功效', description: '安神、助眠、疏肝、祛湿等对症方案', icon: Sparkles, color: 'from-gold-500 to-gold-600' },
  { id: 'methods', title: '居家方法', description: '香囊、熏香、香枕、煮香等外治方式', icon: Flower2, color: 'from-gold-400 to-gold-500' },
  { id: 'constitution', title: '体质配香', description: '九种体质专属适配香方与避香禁忌', icon: Thermometer, color: 'from-coral-500 to-coral-600' },
  { id: 'seasons', title: '四季香疗', description: '春夏秋冬、24节气专属养生香方', icon: Calendar, color: 'from-gold-400 to-gold-500' },
  { id: 'safety', title: '禁忌须知', description: '孕妇、儿童、过敏人群专属禁忌指南', icon: AlertTriangle, color: 'from-coral-500 to-coral-600' },
];

const getDayIndex = (): number => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const dayIndex = getDayIndex();
const dailyMaterial = fragranceMaterials[dayIndex % fragranceMaterials.length];
const dailyRecipe = fragranceRecipes[dayIndex % fragranceRecipes.length];

const hotRecipes = [
  { ...fragranceRecipes[0], tag: '助眠香', icon: Moon },
  { ...fragranceRecipes[1], tag: '祛湿香', icon: Droplets },
  { ...fragranceRecipes[3], tag: '防疫辟秽', icon: Shield },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-ivory-100">
      <section className="relative h-screen min-h-[600px] overflow-hidden pt-14 md:pt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=serene%20incense%20smoke%20rising%20from%20traditional%20chinese%20censer%20with%20soft%20golden%20lighting%20zen%20meditation%20atmosphere&image_size=landscape_16_9"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-smoke-floating-in-air-4938-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/40 to-ink-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/30 via-transparent to-ink-900/30" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-2xl mb-6 md:mb-8 shadow-lg">
            <Flower2 className="w-8 h-8 md:w-10 md:h-10 text-gold-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-chinese text-white mb-4 md:mb-6">
            中医香疗养生
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-8 md:mb-12">
            基于中医「芳香辟秽、行气活血、开窍安神」理论，科普药香、花香、草木香的居家养生用法
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('materials')}
              className="px-8 py-3.5 bg-gold-500 text-white font-medium rounded-xl hover:bg-gold-600 transition-colors shadow-lg"
            >
              探索香材
            </button>
            <button 
              onClick={() => onNavigate('search')}
              className="px-8 py-3.5 bg-white/20 backdrop-blur-md text-white font-medium rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
            >
              智能检索
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="mb-12">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 text-sm font-medium rounded-full mb-4">
                功能入口
              </span>
              <h2 className="text-xl md:text-2xl font-bold font-chinese text-ink-700">
                六大香疗板块
              </h2>
              <p className="text-ink-500 mt-2">全方位了解中医香疗知识体系</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {categoryCards.map((card) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => onNavigate(card.id)}
                    className="card-hover bg-ivory-50/50 rounded-xl p-5 md:p-6 text-left chinese-border"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold font-chinese text-ink-700 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-ink-500 text-sm mb-3 line-clamp-2">
                      {card.description}
                    </p>
                    <div className="flex items-center text-gold-500 text-sm font-medium">
                      <span>了解更多</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-card chinese-border mb-12">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-semibold font-chinese text-ink-700">今日香疗</h2>
                    <span className="px-3 py-0.5 bg-gold-50 text-gold-600 text-xs font-medium rounded-full">
                      {new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-ink-500 text-sm">每日一味香材，极简居家香方</p>
                </div>
              </div>
              <button onClick={() => onNavigate('materials')} className="text-gold-500 text-sm font-medium hover:text-gold-600 transition-colors">
                查看全部
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img 
                  src={dailyMaterial.image} 
                  alt={dailyMaterial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-4 h-4 text-gold-400" />
                    <span className="text-white/80 text-sm font-medium">今日香材</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-chinese text-white mb-3">
                    {dailyMaterial.name}
                  </h3>
                  <p className="text-white/70 text-base mb-4">{dailyMaterial.nature}</p>
                  <div className="flex flex-wrap gap-2">
                    {dailyMaterial.efficacy.slice(0, 3).map((eff, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {eff}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col">
                <div className="flex items-center space-x-2 mb-5">
                  <div className="w-8 h-8 bg-jade-100 rounded-lg flex items-center justify-center">
                    <Moon className="w-4 h-4 text-jade-500" />
                  </div>
                  <span className="text-jade-600 text-sm font-medium">今日香方</span>
                </div>
                
                <h3 className="text-2xl font-bold font-chinese text-ink-700 mb-2">
                  {dailyRecipe.name}
                </h3>
                <p className="text-ink-500 text-base mb-6">{dailyRecipe.scenario}</p>
                
                <div className="bg-gold-50/50 rounded-xl p-4 mb-5">
                  <div className="flex items-center space-x-2 mb-3">
                    <Flower2 className="w-4 h-4 text-gold-500" />
                    <span className="text-ink-600 text-sm font-medium">配方组成</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dailyRecipe.ingredients.slice(0, 4).map((ing, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white border border-gold-100 text-gold-700 text-sm font-medium rounded-lg shadow-sm">
                        {ing.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-jade-50/50 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-jade-500" />
                    <span className="text-ink-600 text-sm font-medium">适用季节</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dailyRecipe.seasons.map((season, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white border border-jade-100 text-jade-700 text-sm font-medium rounded-lg shadow-sm">
                        {season}季适用
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-ink-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span className="text-ink-600 text-sm font-medium">作用原理</span>
                  </div>
                  <p className="text-ink-500 text-sm leading-relaxed">
                    {dailyRecipe.principle || '通过芳香开窍、行气活血，调节脏腑功能，达到身心调和的养生效果。'}
                  </p>
                </div>
                
                <button 
                  onClick={() => onNavigate('efficacy')}
                  className="w-full py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-medium rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all shadow-card hover:shadow-hover"
                >
                  查看详细配方
                </button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold font-chinese text-ink-700">热门香疗科普</h2>
                  <p className="text-ink-500 text-sm">助眠香、祛湿香、防疫辟秽香等高频需求</p>
                </div>
              </div>
              <button onClick={() => onNavigate('efficacy')} className="text-gold-500 text-sm font-medium mt-4 md:mt-0">
                查看全部
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hotRecipes.map((recipe) => {
                const Icon = recipe.icon;
                return (
                  <button
                    key={recipe.id}
                    onClick={() => onNavigate('efficacy')}
                    className="card-hover bg-ivory-50/50 rounded-xl p-5 text-left chinese-border"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gold-50 text-gold-600 text-xs font-medium rounded-full">
                        {recipe.tag}
                      </span>
                      <div className="w-8 h-8 bg-gold-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gold-500" />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold font-chinese text-ink-700 mb-2">
                      {recipe.name}
                    </h3>
                    <p className="text-ink-500 text-sm mb-3 line-clamp-2">
                      {recipe.scenario} | 适用于{recipe.constitution.join('、')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.slice(0, 3).map((ing, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white text-ink-600 text-xs font-medium rounded-full">
                          {ing.name}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-ivory-50/50 rounded-xl p-5 md:p-6 mb-12">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                <Wind className="w-5 h-5 text-jade-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold font-chinese text-ink-700">香疗功效速查</h2>
                <p className="text-ink-500 text-sm">快速找到适合您的香疗方案</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {efficacyCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onNavigate('efficacy')}
                  className="card-hover bg-white rounded-xl p-3 md:p-4 text-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-ivory-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                    {category.icon === 'Moon' && <Moon className="w-5 h-5 text-gold-500" />}
                    {category.icon === 'Wind' && <Wind className="w-5 h-5 text-jade-500" />}
                    {category.icon === 'Droplets' && <Droplets className="w-5 h-5 text-coral-500" />}
                    {category.icon === 'Utensils' && <Sparkles className="w-5 h-5 text-gold-500" />}
                    {category.icon === 'Flame' && <Flame className="w-5 h-5 text-coral-500" />}
                    {category.icon === 'Sun' && <Sun className="w-5 h-5 text-gold-500" />}
                  </div>
                  <h3 className="font-medium text-ink-600 text-xs md:text-sm">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block p-6 bg-ivory-50/50 rounded-xl">
              <h3 className="text-lg font-semibold font-chinese text-ink-700 mb-2">
                纯公益科普平台
              </h3>
              <p className="text-ink-500 text-sm">本站为纯公益中医科普站点，无变现、无广告，仅供学习参考</p>
              <p className="text-ink-400 text-xs mt-1">中医香疗仅为养生外治科普，不可替代药物治疗</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
