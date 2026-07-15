import { useState } from 'react';
import { Home, Flower2, Search, Menu, X, Sparkles, Thermometer, Calendar, AlertTriangle, Leaf } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'materials', label: '香材大全', icon: Leaf },
  { id: 'efficacy', label: '香疗功效', icon: Sparkles },
  { id: 'methods', label: '居家方法', icon: Flower2 },
  { id: 'constitution', label: '体质配香', icon: Thermometer },
  { id: 'seasons', label: '四季香疗', icon: Calendar },
  { id: 'safety', label: '禁忌须知', icon: AlertTriangle },
  { id: 'search', label: '智能检索', icon: Search },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-card transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-bold font-chinese text-ink-700">
              香疗养生
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gold-100 text-gold-600 font-medium'
                      : 'text-ink-600 hover:bg-gold-50 hover:text-gold-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gold-50 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-ink-700" />
            ) : (
              <Menu className="w-6 h-6 text-ink-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-100">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gold-100 text-gold-600 font-medium'
                      : 'text-ink-600 hover:bg-gold-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
