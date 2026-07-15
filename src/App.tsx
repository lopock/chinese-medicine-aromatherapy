import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Materials from './components/Materials';
import Efficacy from './components/Efficacy';
import Methods from './components/Methods';
import Constitution from './components/Constitution';
import Seasons from './components/Seasons';
import Safety from './components/Safety';
import Search from './components/Search';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'materials':
      case 'materials-agarwood':
      case 'materials-sandalwood':
      case 'materials-patchouli':
      case 'materials-mint':
        return <Materials onNavigate={setActiveTab} />;
      case 'efficacy':
      case 'efficacy-sleep':
      case 'efficacy-liver':
      case 'efficacy-dampness':
      case 'efficacy-warm':
        return <Efficacy onNavigate={setActiveTab} />;
      case 'methods':
      case 'methods-sachet':
      case 'methods-incense':
      case 'methods-pillow':
      case 'methods-boiling':
        return <Methods onNavigate={setActiveTab} />;
      case 'constitution':
        return <Constitution onNavigate={setActiveTab} />;
      case 'seasons':
        return <Seasons onNavigate={setActiveTab} />;
      case 'safety':
        return <Safety />;
      case 'search':
        return <Search onNavigate={setActiveTab} />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main>{renderContent()}</main>
      {activeTab !== 'home' && (
        <footer className="bg-chinese-ivory/95 border-t border-primary-200 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-chinese-stone text-sm">
              本站为纯公益中医香疗科普站点，无变现、无广告，仅供学习参考
            </p>
            <p className="text-chinese-stone/60 text-xs mt-2">
              中医香疗仅为养生外治科普，不可替代药物治疗，特殊人群请谨慎使用
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;