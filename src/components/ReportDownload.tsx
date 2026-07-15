import { Download, FileText, Shield, Clock, ArrowRight, CheckCircle, AlertCircle, Lock } from 'lucide-react';

export default function ReportDownload() {
  const officialLoginUrl = 'https://ipcrs.pbccrc.org.cn';

  const steps = [
    {
      icon: Lock,
      title: '登录官方平台',
      description: '点击下方按钮跳转至征信中心官方登录页面',
    },
    {
      icon: FileText,
      title: '提交查询申请',
      description: '登录后选择"个人信用报告"，完成身份验证',
    },
    {
      icon: Clock,
      title: '等待报告生成',
      description: '提交后24小时内收到短信验证码',
    },
    {
      icon: Download,
      title: '下载征信报告',
      description: '使用验证码登录查看并下载PDF报告',
    },
  ];

  const tips = [
    {
      icon: CheckCircle,
      text: '每年前2次查询免费，第3次起收费5元',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: CheckCircle,
      text: '报告生成后仅保存7天，请及时下载',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: AlertCircle,
      text: '本人查询属于软查询，不影响信用评分',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Download className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            一键下载征信报告
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            通过官方渠道下载您的个人信用报告，安全便捷
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">中国人民银行征信中心</h2>
                <p className="text-blue-100">互联网个人信用信息服务平台</p>
              </div>
            </div>
            <a
              href={officialLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6" />
              <span>立即登录下载</span>
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-blue-200 text-sm mt-4">
              点击跳转至 ipcrs.pbccrc.org.cn
            </p>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">下载流程</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < steps.length - 1 && (
                      <div className="absolute top-6 left-full w-full h-0.5 bg-gray-200 -z-10" />
                    )}
                    <div className="relative bg-gray-50 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className={`${tip.bgColor} rounded-2xl p-6 flex items-start`}
              >
                <Icon className={`w-6 h-6 ${tip.color} mr-4 flex-shrink-0`} />
                <span className={`text-sm ${tip.color}`}>{tip.text}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            安全保障
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">官方渠道</h4>
                <p className="text-sm text-gray-600">
                  直接跳转至中国人民银行征信中心官方网站，确保信息安全
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">信息保护</h4>
                <p className="text-sm text-gray-600">
                  本应用不存储任何个人信息，所有操作均在官方网站完成
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">身份验证</h4>
                <p className="text-sm text-gray-600">
                  支持银行卡验证、数字证书验证等多种安全验证方式
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">加密传输</h4>
                <p className="text-sm text-gray-600">
                  官方网站采用HTTPS加密传输，确保数据传输安全
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            下载报告后，您可以使用我们的报告解读功能进行专业分析
          </p>
        </div>
      </div>
    </div>
  );
}
