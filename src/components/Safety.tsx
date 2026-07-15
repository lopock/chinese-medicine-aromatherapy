import { AlertTriangle, Shield, User, Baby, Wind, Clock, Flame, CheckCircle } from 'lucide-react';
import { safetyWarnings } from '../data/chineseMedicineData';

const severityColors: Record<string, string> = {
  'high': 'bg-coral-50 border-l-coral-500',
  'medium': 'bg-gold-50 border-l-gold-500',
  'low': 'bg-jade-50 border-l-jade-500',
};

const severityBgColors: Record<string, string> = {
  'high': 'bg-coral-100',
  'medium': 'bg-gold-100',
  'low': 'bg-jade-100',
};

const severityTextColors: Record<string, string> = {
  'high': 'text-coral-600',
  'medium': 'text-gold-600',
  'low': 'text-jade-600',
};

const severityLabels: Record<string, string> = {
  'high': '高危警示',
  'medium': '注意事项',
  'low': '温馨提示',
};

export default function Safety() {
  const warningIcons: Record<string, typeof User> = {
    '孕妇慎用提示': User,
    '儿童使用注意': Baby,
    '过敏体质警示': Wind,
    '呼吸道疾病患者注意': Wind,
    '使用时长提醒': Clock,
    '防火安全提示': Flame,
  };

  return (
    <div className="min-h-screen bg-ivory-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-chinese text-ink-700 mb-2">禁忌须知</h1>
            <p className="text-ink-500">孕妇、儿童、过敏人群专属禁忌指南</p>
          </div>
          <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
            <AlertTriangle className="w-6 h-6 text-coral-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-jade-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-jade-600" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold font-chinese text-ink-700 mb-3">安全使用原则</h2>
              <ul className="space-y-3">
                {[
                  '香疗仅为养生外治方式，不可替代药物治疗',
                  '初次使用新香材前，建议先进行皮肤敏感测试',
                  '使用香疗时保持室内通风，避免长时间密闭使用',
                  '特殊人群使用前应咨询专业医师意见',
                  '使用熏香等需要点燃的香疗方式时，务必注意防火安全',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-jade-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-ink-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {safetyWarnings.map((warning) => {
            const Icon = warningIcons[warning.title] || AlertTriangle;
            return (
              <div 
                key={warning.id} 
                className={`rounded-xl p-5 border-l-3 ${severityColors[warning.severity]} bg-white shadow-card`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${severityBgColors[warning.severity]} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${severityTextColors[warning.severity]}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-base ${severityTextColors[warning.severity]}`}>
                      {warning.title}
                    </h3>
                    <span className={`text-xs font-medium ${severityTextColors[warning.severity]}`}>
                      {severityLabels[warning.severity]}
                    </span>
                  </div>
                </div>
                <p className="text-ink-500 text-sm mb-3 leading-relaxed">{warning.content}</p>
                <div className="flex flex-wrap gap-2">
                  {warning.targetGroups.map((group, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gold-50/50 text-ink-500 text-xs rounded-full font-medium">
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 chinese-border shadow-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-coral-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">禁忌人群速查表</h3>
              <p className="text-ink-500 text-sm">快速查阅各人群的慎用与安全香材</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-coral-50/50">
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">禁忌人群</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">慎用香材</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">安全香材</th>
                  <th className="px-4 py-3 text-left text-ink-600 font-semibold">注意事项</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { group: '孕妇', caution: '艾叶、薄荷、丁香、沉香', safe: '藿香、陈皮、金银花', note: '孕早期慎用行气活血香材' },
                  { group: '儿童', caution: '丁香、肉桂', safe: '藿香、陈皮、薄荷', note: '用量减半，成人监护下使用' },
                  { group: '过敏体质', caution: '沉香、檀香、丁香', safe: '藿香、佩兰、陈皮', note: '使用前先做皮肤敏感测试' },
                  { group: '哮喘患者', caution: '艾叶、檀香、熏香类', safe: '薄荷、金银花（清淡香）', note: '避免使用产生烟雾的香疗方式' },
                  { group: '慢性呼吸道疾病', caution: '熏香、浓香型香材', safe: '清香型香材、煮香方式', note: '保持通风，选择温和香材' },
                ].map((row, idx) => (
                  <tr key={row.group} className={`border-t border-gold-100 hover:bg-gold-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gold-50/30'}`}>
                    <td className="px-4 py-3 font-medium text-ink-600">{row.group}</td>
                    <td className="px-4 py-3 text-coral-500">{row.caution}</td>
                    <td className="px-4 py-3 text-jade-500">{row.safe}</td>
                    <td className="px-4 py-3 text-ink-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-coral-50/50 rounded-xl p-5 md:p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-coral-600" />
            </div>
            <div>
              <h3 className="font-semibold font-chinese text-ink-700">特别提醒</h3>
            </div>
          </div>
          <p className="text-ink-500 text-sm leading-relaxed">
            本站所有香疗内容仅供科普参考，不能替代专业医疗建议。如您有任何健康问题或处于特殊生理时期，请务必咨询专业中医师或医生的意见。使用香材前请仔细阅读禁忌须知，如出现不适请立即停止使用并就医。
          </p>
        </div>
      </div>
    </div>
  );
}