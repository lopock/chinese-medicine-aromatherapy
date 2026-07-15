import { Upload, FileText, CreditCard, Home, Car, Wallet, AlertTriangle, CheckCircle, Info, Clock, Search, ChevronRight, Download, RefreshCw, ArrowRight, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { mockCreditReport, creditTerms } from '../data/mockData';
import type { CreditRecord } from '../data/mockData';

const typeIcons: Record<string, typeof CreditCard> = {
  creditCard: CreditCard,
  loan: Wallet,
  mortgage: Home,
  carLoan: Car,
  consumerLoan: Wallet,
};

const typeLabels: Record<string, string> = {
  creditCard: '信用卡',
  loan: '贷款',
  mortgage: '房贷',
  carLoan: '车贷',
  consumerLoan: '消费贷',
};

const statusStyles: Record<string, string> = {
  '正常': 'bg-green-100 text-green-700',
  '逾期': 'bg-red-100 text-red-700',
  '已结清': 'bg-blue-100 text-blue-700',
  '已销户': 'bg-gray-100 text-gray-700',
  '冻结': 'bg-amber-100 text-amber-700',
};

export default function ReportInterpreter() {
  const [report, setReport] = useState(mockCreditReport);
  const [activeSection, setActiveSection] = useState('summary');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecords = report.creditRecords.filter((record) =>
    record.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = () => {
    const colors: Record<string, string> = {
      good: 'text-green-600',
      warning: 'text-amber-500',
      bad: 'text-red-600',
    };
    return colors[report.summary.creditStatus] || 'text-gray-600';
  };

  const getStatusBg = () => {
    const colors: Record<string, string> = {
      good: 'bg-green-500',
      warning: 'bg-amber-500',
      bad: 'bg-red-500',
    };
    return colors[report.summary.creditStatus] || 'bg-gray-400';
  };

  const getStatusText = () => {
    const texts: Record<string, string> = {
      good: '信用良好',
      warning: '信用一般',
      bad: '信用较差',
    };
    return texts[report.summary.creditStatus] || '未知';
  };

  const renderRecord = (record: CreditRecord) => {
    const Icon = typeIcons[record.type] || CreditCard;
    return (
      <div
        key={record.id}
        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{record.institution}</h4>
              <p className="text-sm text-gray-500">
                {typeLabels[record.type]} • {record.accountNumber}
              </p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[record.status]}`}>
            {record.status}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-500">授信额度</span>
            <p className="font-medium text-gray-900">{record.creditLimit}元</p>
          </div>
          <div>
            <span className="text-gray-500">当前余额</span>
            <p className="font-medium text-gray-900">{record.currentBalance}元</p>
          </div>
          <div>
            <span className="text-gray-500">开户日期</span>
            <p className="text-gray-700">{record.openDate}</p>
          </div>
          {record.overdueAmount && (
            <div>
              <span className="text-gray-500">逾期金额</span>
              <p className="font-medium text-red-600">{record.overdueAmount}元</p>
            </div>
          )}
        </div>
        {record.remarks && (
          <div className="mt-3 p-2 bg-amber-50 rounded-lg">
            <p className="text-sm text-amber-700 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1" />
              {record.remarks}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            征信报告解读
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            上传您的征信报告，我们将为您提供专业解读和分析建议
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">下载官方征信报告</h2>
              <p className="text-blue-100">登录官方平台获取最新报告，然后在此进行解读</p>
            </div>
            <a
              href="https://ipcrs.pbccrc.org.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              <Download className="w-6 h-6" />
              <span>一键下载报告</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-gray-50">
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              上传征信报告
            </h3>
            <p className="text-gray-600 mb-4">
              支持 PDF、图片格式，文件大小不超过 10MB
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              选择文件
            </button>
            <p className="text-sm text-gray-500 mt-4">
              您的数据仅在本地处理，不会上传至服务器
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setReport(mockCreditReport)}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              查看示例报告
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {activeSection === 'summary' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">信用概览</h2>
                  <div className="flex items-center space-x-2">
                    <span className={`text-2xl font-bold ${getStatusColor()}`}>
                      {report.summary.creditScore}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBg()} text-white`}>
                      {getStatusText()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                    <div className="text-2xl font-bold text-gray-900">{report.summary.totalAccounts}</div>
                    <div className="text-sm text-gray-600">总账户数</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                    <div className="text-2xl font-bold text-blue-600">{report.summary.activeAccounts}</div>
                    <div className="text-sm text-gray-600">活跃账户</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                    <div className="text-2xl font-bold text-indigo-600">{report.summary.closedAccounts}</div>
                    <div className="text-sm text-gray-600">已关闭账户</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                    <div className={`text-2xl font-bold ${report.summary.overdueAccounts > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {report.summary.overdueAccounts}
                    </div>
                    <div className="text-sm text-gray-600">逾期账户</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">信用利用率</span>
                    <span className="font-semibold text-gray-900">
                      {report.summary.creditUtilization}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        report.summary.creditUtilization > 70
                          ? 'bg-red-500'
                          : report.summary.creditUtilization > 50
                          ? 'bg-amber-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(report.summary.creditUtilization, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    建议将信用卡利用率控制在 70% 以内
                  </p>
                </div>

                {report.summary.overdueAccounts > 0 && (
                  <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800">发现逾期记录</h4>
                        <p className="text-sm text-red-700 mt-1">
                          您有 {report.summary.overdueAccounts} 个账户存在逾期，请尽快处理逾期还款，逾期记录会影响您的信用评分。
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === 'records' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">信贷记录</h2>
                  <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="搜索机构名称"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  {filteredRecords.map(renderRecord)}
                </div>
              </div>
            )}

            {activeSection === 'queries' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">查询记录</h2>
                <div className="space-y-3">
                  {report.queryRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{record.queryInstitution}</h4>
                          <p className="text-sm text-gray-500">{record.queryReason}</p>
                        </div>
                      </div>
                      <span className="text-gray-600">{record.queryDate}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800">查询记录说明</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        "本人查询"属于软查询，不会影响信用评分。"贷款审批"、"信用卡审批"等属于硬查询，过多的硬查询会对信用评分产生负面影响。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'public' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">公共记录</h2>
                <div className="space-y-4">
                  {report.publicRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${record.status === '正常' ? 'bg-green-100' : 'bg-red-100'}`}>
                          {record.status === '正常' ? (
                            <CheckCircle className={`w-5 h-5 ${record.status === '正常' ? 'text-green-600' : 'text-red-600'}`} />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {record.type === 'tax' && '税务记录'}
                            {record.type === 'judicial' && '司法记录'}
                            {record.type === 'socialSecurity' && '社保记录'}
                            {record.type === 'housingFund' && '公积金记录'}
                          </h4>
                          <p className="text-sm text-gray-500">{record.content}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${record.status === '正常' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {record.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">报告信息</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">报告编号</span>
                  <span className="font-medium text-gray-900 text-sm">{report.personalInfo.reportNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">生成日期</span>
                  <span className="font-medium text-gray-900">{report.personalInfo.reportDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">姓名</span>
                  <span className="font-medium text-gray-900">{report.personalInfo.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">身份证号</span>
                  <span className="font-medium text-gray-900">{report.personalInfo.idNumber}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">导航</h3>
              <div className="space-y-2">
                {[
                  { id: 'summary', label: '信用概览', icon: FileText },
                  { id: 'records', label: '信贷记录', icon: CreditCard },
                  { id: 'queries', label: '查询记录', icon: Clock },
                  { id: 'public', label: '公共记录', icon: Info },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">快捷操作</h3>
              <div className="space-y-3">
                <a
                  href="https://ipcrs.pbccrc.org.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>下载报告</span>
                </a>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                  <RefreshCw className="w-5 h-5" />
                  <span>重新查询</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">需要帮助？</h3>
              <p className="text-sm opacity-90 mb-4">
                如果您对报告内容有疑问，可以拨打征信中心客服电话咨询
              </p>
              <div className="text-2xl font-bold">400-810-8866</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">征信术语解释</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creditTerms.map((term, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{term.term}</h4>
                <p className="text-sm text-gray-600">{term.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
