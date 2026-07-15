import { useState, useEffect } from 'react';
import { Search as SearchIcon, X, Filter, Leaf, Sparkles, Flower2, Moon, ChevronRight } from 'lucide-react';
import { fragranceMaterials, fragranceRecipes, efficacyCategories, semanticMapping } from '../data/chineseMedicineData';

interface SearchProps {
  onNavigate: (tab: string) => void;
}

export default function Search({ onNavigate }: SearchProps) {
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    efficacy: '',
    usage: '',
    crowd: '',
    season: '',
    aroma: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    materials: typeof fragranceMaterials;
    recipes: typeof fragranceRecipes;
    categories: typeof efficacyCategories;
  }>({ materials: [], recipes: [], categories: [] });

  const efficacyOptions = ['安神助眠', '疏肝解郁', '祛湿辟秽', '醒脾开胃', '清心降火', '温阳散寒'];
  const usageOptions = ['香囊', '熏香', '香枕', '煮香', '闻香', '扩香'];
  const crowdOptions = ['成人', '儿童', '孕妇', '过敏体质'];
  const seasonOptions = ['春', '夏', '秋', '冬', '四季通用'];
  const aromaOptions = ['清香', '浓香', '辛香', '甘香'];

  useEffect(() => {
    performSearch();
  }, [query, activeFilters]);

  const performSearch = () => {
    let materials = [...fragranceMaterials];
    let recipes = [...fragranceRecipes];
    let categories = [...efficacyCategories];

    if (query.trim()) {
      const q = query.toLowerCase();
      const semanticKeys = Object.keys(semanticMapping).filter(key => q.includes(key));
      const semanticMatches = new Set<string>();
      semanticKeys.forEach(key => semanticMapping[key].forEach(match => semanticMatches.add(match)));

      materials = materials.filter(m => 
        m.name.toLowerCase().includes(q) ||
        m.alias.some(a => a.toLowerCase().includes(q)) ||
        m.efficacy.some(e => e.toLowerCase().includes(q)) ||
        semanticMatches.has(m.name)
      );

      recipes = recipes.filter(r => 
        r.name.toLowerCase().includes(q) ||
        r.scenario.toLowerCase().includes(q) ||
        r.constitution.some(c => c.toLowerCase().includes(q)) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(q)) ||
        semanticMatches.has(r.name)
      );

      categories = categories.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        semanticMatches.has(c.name)
      );
    }

    if (activeFilters.efficacy) {
      materials = materials.filter(m => m.efficacy.includes(activeFilters.efficacy));
      recipes = recipes.filter(r => {
        const cat = categories.find(c => c.name === activeFilters.efficacy);
        return cat ? cat.recipes.includes(r.name) : false;
      });
    }

    if (activeFilters.usage) {
      materials = materials.filter(m => 
        m.usageMethods.some(um => um.type === activeFilters.usage)
      );
    }

    if (activeFilters.crowd) {
      if (activeFilters.crowd === '孕妇') {
        materials = materials.filter(m => 
          m.contraindicatedGroups.every(g => g.group !== '孕妇' || g.level !== '禁用')
        );
        recipes = recipes.filter(r => !r.precautions.some(p => p.content.includes('孕妇禁用')));
      } else if (activeFilters.crowd === '儿童') {
        materials = materials.filter(m => 
          m.contraindicatedGroups.every(g => g.group !== '儿童' || g.level !== '禁用')
        );
      } else if (activeFilters.crowd === '过敏体质') {
        materials = materials.filter(m => 
          m.contraindicatedGroups.every(g => g.group !== '过敏体质' || g.level !== '禁用')
        );
      }
    }

    if (activeFilters.season) {
      if (activeFilters.season === '四季通用') {
        recipes = recipes.filter(r => r.seasons.length === 4);
      } else {
        recipes = recipes.filter(r => r.seasons.includes(activeFilters.season));
      }
    }

    if (activeFilters.aroma) {
      materials = materials.filter(m => m.aromaType === activeFilters.aroma);
    }

    setSearchResults({ materials, recipes, categories });
  };

  const clearFilters = () => {
    setActiveFilters({ efficacy: '', usage: '', crowd: '', season: '', aroma: '' });
  };

  const hasActiveFilters = Object.values(activeFilters).some(v => v);

  return (
    <div className="min-h-screen bg-ivory-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
              <SearchIcon className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-chinese text-ink-700">智能检索</h1>
              <p className="text-ink-500 text-sm">支持专业术语和口语化自然检索</p>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索香材、香方、功效...（如：助眠香、祛湿熏香）"
              className="w-full px-5 py-3.5 pr-36 bg-gold-50/50 border border-gold-100 rounded-xl text-ink-600 placeholder-ink-400 focus:outline-none focus:border-gold-300 focus:ring-1 focus:ring-gold-100 text-base"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all ${
                  showFilters || hasActiveFilters
                    ? 'bg-gold-500 text-white'
                    : 'bg-white text-ink-600 hover:bg-gold-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">筛选</span>
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-coral-500 text-white rounded-full text-xs flex items-center justify-center">
                    {Object.values(activeFilters).filter(Boolean).length}
                  </span>
                )}
              </button>
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="p-2.5 hover:bg-ivory-200 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-ink-400" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-ink-500 text-sm mr-2">热门搜索：</span>
            {['助眠香', '祛湿熏香', '办公室解压', '防疫香囊', '安神香方'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3.5 py-1.5 bg-gold-50/50 text-gold-600 text-sm rounded-full hover:bg-gold-100 transition-colors font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {showFilters && (
          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-jade-600" />
                </div>
                <h3 className="font-semibold font-chinese text-ink-700">筛选条件</h3>
              </div>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-coral-500 text-sm font-medium hover:text-coral-600 transition-colors"
                >
                  清除全部筛选
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { key: 'efficacy', label: '香疗功效', options: efficacyOptions },
                { key: 'usage', label: '使用方式', options: usageOptions },
                { key: 'crowd', label: '适用人群', options: crowdOptions },
                { key: 'season', label: '适配季节', options: seasonOptions },
                { key: 'aroma', label: '香气类型', options: aromaOptions },
              ].map((filter) => (
                <div key={filter.key}>
                  <label className="text-sm font-medium text-ink-500 mb-2 block">{filter.label}</label>
                  <select
                    value={activeFilters[filter.key as keyof typeof activeFilters]}
                    onChange={(e) => setActiveFilters({ ...activeFilters, [filter.key]: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gold-50/50 border border-gold-100 rounded-xl text-ink-600 focus:outline-none focus:border-gold-300 focus:ring-1 focus:ring-gold-100 text-sm"
                  >
                    <option value="">全部</option>
                    {filter.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {query || hasActiveFilters ? (
          <>
            {searchResults.categories.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-silk-100 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-silk-600" />
                  </div>
                  <h2 className="text-lg font-semibold font-chinese text-ink-700">功效分类</h2>
                  <span className="px-2.5 py-1 bg-silk-50 text-silk-600 text-xs rounded-full font-medium">
                    {searchResults.categories.length}个结果
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onNavigate('efficacy')}
                      className="card-hover bg-white rounded-xl p-4 text-left chinese-border shadow-card"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-ink-600 text-base">{category.name}</h3>
                          <p className="text-ink-500 text-sm mt-1">{category.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gold-500" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {searchResults.materials.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-jade-100 rounded-xl flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-jade-600" />
                  </div>
                  <h2 className="text-lg font-semibold font-chinese text-ink-700">香材大全</h2>
                  <span className="px-2.5 py-1 bg-jade-50 text-jade-600 text-xs rounded-full font-medium">
                    {searchResults.materials.length}个结果
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {searchResults.materials.map((material) => (
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
                        <h3 className="font-semibold text-ink-600 mb-1">{material.name}</h3>
                        <p className="text-ink-500 text-sm">{material.nature}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {material.efficacy.slice(0, 2).map((eff, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-jade-50/50 text-jade-500 text-xs rounded-full font-medium">
                              {eff}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {searchResults.recipes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
                    <Flower2 className="w-5 h-5 text-coral-600" />
                  </div>
                  <h2 className="text-lg font-semibold font-chinese text-ink-700">香方大全</h2>
                  <span className="px-2.5 py-1 bg-coral-50 text-coral-600 text-xs rounded-full font-medium">
                    {searchResults.recipes.length}个结果
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.recipes.map((recipe) => (
                    <button
                      key={recipe.id}
                      onClick={() => onNavigate('efficacy')}
                      className="card-hover bg-white rounded-xl p-4 text-left chinese-border shadow-card"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-ink-600 text-base">{recipe.name}</h3>
                        <Moon className="w-5 h-5 text-gold-500" />
                      </div>
                      <p className="text-ink-500 text-sm mb-3">{recipe.scenario}</p>
                      <div className="flex flex-wrap gap-2">
                        {recipe.ingredients.slice(0, 3).map((ing, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-gold-50/50 text-gold-500 text-xs rounded-full font-medium">
                            {ing.name}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {searchResults.materials.length === 0 && 
             searchResults.recipes.length === 0 && 
             searchResults.categories.length === 0 && (
              <div className="bg-white rounded-xl p-10 chinese-border shadow-card text-center">
                <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold font-chinese text-ink-600 mb-2">未找到相关结果</h3>
                <p className="text-ink-500">请尝试其他关键词或调整筛选条件</p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h3 className="font-semibold font-chinese text-ink-700">语义检索示例</h3>
                <p className="text-ink-500 text-sm">支持自然语言提问，智能匹配相关内容</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { query: '失眠多梦适合什么香', category: '安神助眠' },
                { query: '家里湿气重怎么用香', category: '祛湿辟秽' },
                { query: '压力大心情不好用什么香', category: '疏肝解郁' },
                { query: '孕妇可以用什么香囊', category: '安全香材' },
                { query: '夏天防暑降温香方', category: '清心降火' },
                { query: '冬天怕冷用什么香', category: '温阳散寒' },
              ].map((item) => (
                <button
                  key={item.query}
                  onClick={() => setQuery(item.query)}
                  className="card-hover bg-gold-50/50 rounded-xl p-4 text-left"
                >
                  <p className="font-medium text-ink-600 mb-2">{item.query}</p>
                  <span className="px-2.5 py-1 bg-white text-gold-500 text-xs rounded-full font-medium">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}