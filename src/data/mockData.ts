export interface CreditReport {
  personalInfo: {
    name: string;
    idNumber: string;
    reportDate: string;
    reportNumber: string;
  };
  summary: {
    creditStatus: 'good' | 'warning' | 'bad';
    creditScore?: number;
    totalAccounts: number;
    activeAccounts: number;
    closedAccounts: number;
    overdueAccounts: number;
    totalCreditLimit: string;
    usedCredit: string;
    creditUtilization: number;
  };
  creditRecords: CreditRecord[];
  queryRecords: QueryRecord[];
  publicRecords: PublicRecord[];
}

export interface CreditRecord {
  id: string;
  institution: string;
  type: 'creditCard' | 'loan' | 'mortgage' | 'carLoan' | 'consumerLoan';
  accountNumber: string;
  openDate: string;
  status: '正常' | '逾期' | '已结清' | '已销户' | '冻结';
  creditLimit: string;
  currentBalance: string;
  overdueAmount?: string;
  overdueMonths?: number;
  lastPaymentDate?: string;
  remarks?: string;
}

export interface QueryRecord {
  id: string;
  queryDate: string;
  queryInstitution: string;
  queryReason: string;
}

export interface PublicRecord {
  id: string;
  type: 'tax' | 'judicial' | 'socialSecurity' | 'housingFund';
  content: string;
  status: '正常' | '异常';
}

export interface BankInfo {
  id: string;
  name: string;
  logo: string;
  hotline: string;
  cancellationMethods: CancellationMethod[];
  notes: string[];
}

export interface CancellationMethod {
  type: 'app' | 'phone' | 'online' | 'branch';
  steps: string[];
}

export const mockCreditReport: CreditReport = {
  personalInfo: {
    name: '张三',
    idNumber: '11010119900101****',
    reportDate: '2025-07-13',
    reportNumber: '2025071310441025986694'
  },
  summary: {
    creditStatus: 'warning',
    creditScore: 720,
    totalAccounts: 8,
    activeAccounts: 4,
    closedAccounts: 4,
    overdueAccounts: 1,
    totalCreditLimit: '500,000',
    usedCredit: '150,000',
    creditUtilization: 30
  },
  creditRecords: [
    {
      id: '1',
      institution: '招商银行',
      type: 'creditCard',
      accountNumber: '****8888',
      openDate: '2018-05-15',
      status: '正常',
      creditLimit: '50,000',
      currentBalance: '5,000'
    },
    {
      id: '2',
      institution: '工商银行',
      type: 'creditCard',
      accountNumber: '****1234',
      openDate: '2019-03-20',
      status: '正常',
      creditLimit: '30,000',
      currentBalance: '0'
    },
    {
      id: '3',
      institution: '建设银行',
      type: 'mortgage',
      accountNumber: '****5678',
      openDate: '2020-08-10',
      status: '正常',
      creditLimit: '300,000',
      currentBalance: '250,000'
    },
    {
      id: '4',
      institution: '支付宝借呗',
      type: 'consumerLoan',
      accountNumber: '****9999',
      openDate: '2021-02-01',
      status: '已结清',
      creditLimit: '50,000',
      currentBalance: '0',
      remarks: '建议注销账户'
    },
    {
      id: '5',
      institution: '微信微粒贷',
      type: 'consumerLoan',
      accountNumber: '****6666',
      openDate: '2021-05-15',
      status: '已结清',
      creditLimit: '20,000',
      currentBalance: '0',
      remarks: '建议注销账户'
    },
    {
      id: '6',
      institution: '京东白条',
      type: 'consumerLoan',
      accountNumber: '****7777',
      openDate: '2020-11-20',
      status: '正常',
      creditLimit: '10,000',
      currentBalance: '2,000'
    },
    {
      id: '7',
      institution: '浦发银行',
      type: 'creditCard',
      accountNumber: '****3333',
      openDate: '2017-09-01',
      status: '已销户',
      creditLimit: '20,000',
      currentBalance: '0'
    },
    {
      id: '8',
      institution: '光大银行',
      type: 'creditCard',
      accountNumber: '****4444',
      openDate: '2018-12-10',
      status: '逾期',
      creditLimit: '10,000',
      currentBalance: '3,000',
      overdueAmount: '3,000',
      overdueMonths: 1
    }
  ],
  queryRecords: [
    { id: '1', queryDate: '2025-07-10', queryInstitution: '招商银行', queryReason: '贷后管理' },
    { id: '2', queryDate: '2025-06-15', queryInstitution: '建设银行', queryReason: '信用卡审批' },
    { id: '3', queryDate: '2025-05-20', queryInstitution: '本人查询', queryReason: '本人查询' },
    { id: '4', queryDate: '2025-04-08', queryInstitution: '工商银行', queryReason: '贷款审批' },
    { id: '5', queryDate: '2025-03-12', queryInstitution: '支付宝', queryReason: '贷后管理' }
  ],
  publicRecords: [
    { id: '1', type: 'tax', content: '个人所得税缴纳记录正常', status: '正常' },
    { id: '2', type: 'socialSecurity', content: '社保缴纳记录正常', status: '正常' },
    { id: '3', type: 'housingFund', content: '公积金缴纳记录正常', status: '正常' }
  ]
};

export const bankDatabase: BankInfo[] = [
  {
    id: '1',
    name: '工商银行',
    logo: 'ICBC',
    hotline: '95588',
    cancellationMethods: [
      {
        type: 'phone',
        steps: [
          '拨打95588客服电话',
          '按语音提示选择信用卡服务',
          '转接人工服务',
          '提供卡号后四位和身份证信息验证',
          '告知客服注销需求',
          '确认注销申请'
        ]
      },
      {
        type: 'app',
        steps: [
          '打开工商银行APP',
          '登录账户后进入"我的"页面',
          '找到"信用卡"选项',
          '选择要注销的卡片',
          '点击"卡片管理"-"注销卡片"',
          '按照提示完成注销'
        ]
      }
    ],
    notes: ['注销前需确保账户无欠款', '注销后45天内卡片仍可使用', '积分将在注销后清零']
  },
  {
    id: '2',
    name: '建设银行',
    logo: 'CCB',
    hotline: '95533',
    cancellationMethods: [
      {
        type: 'phone',
        steps: [
          '拨打95533客服电话',
          '选择信用卡业务',
          '转接人工服务',
          '验证身份信息',
          '申请注销信用卡',
          '确认注销'
        ]
      },
      {
        type: 'app',
        steps: [
          '打开建设银行APP',
          '进入"信用卡"页面',
          '选择"卡片管理"',
          '找到要注销的卡片',
          '点击"更多"-"注销卡片"',
          '确认注销'
        ]
      }
    ],
    notes: ['需还清所有欠款', '有年费未缴清无法注销', '注销后可申请恢复']
  },
  {
    id: '3',
    name: '招商银行',
    logo: 'CMB',
    hotline: '95555',
    cancellationMethods: [
      {
        type: 'phone',
        steps: [
          '拨打95555客服电话',
          '选择信用卡服务',
          '转接人工',
          '验证身份',
          '申请注销',
          '客服确认后完成'
        ]
      },
      {
        type: 'app',
        steps: [
          '打开招商银行APP',
          '进入"我的"页面',
          '选择"银行卡"',
          '找到要注销的信用卡',
          '点击右上角设置图标',
          '选择"注销卡片"'
        ]
      }
    ],
    notes: ['注销后积分作废', '如有未出账单需等待账单日', '销卡后6个月可重新申请']
  },
  {
    id: '4',
    name: '支付宝借呗',
    logo: 'ALIPAY',
    hotline: '95188',
    cancellationMethods: [
      {
        type: 'app',
        steps: [
          '打开支付宝APP',
          '搜索"借呗"进入',
          '点击右上角设置图标',
          '选择"其他"',
          '点击"关闭借呗"',
          '选择关闭原因并确认'
        ]
      }
    ],
    notes: ['需先结清所有借款', '关闭后额度清零', '再次开通需重新评估']
  },
  {
    id: '5',
    name: '微信微粒贷',
    logo: 'WECHAT',
    hotline: '95017',
    cancellationMethods: [
      {
        type: 'app',
        steps: [
          '打开微信',
          '进入"我"-"服务"-"微粒贷"',
          '点击右上角"..."',
          '选择"关闭微粒贷"',
          '确认关闭'
        ]
      }
    ],
    notes: ['需还清所有欠款', '关闭后无法再次开通', '慎重操作']
  },
  {
    id: '6',
    name: '京东白条',
    logo: 'JD',
    hotline: '950616',
    cancellationMethods: [
      {
        type: 'app',
        steps: [
          '打开京东APP',
          '进入"我的"-"白条"',
          '点击右上角设置图标',
          '选择"账户安全"',
          '找到"注销白条"',
          '按照提示完成'
        ]
      },
      {
        type: 'phone',
        steps: [
          '拨打950616',
          '转接人工服务',
          '申请注销白条',
          '验证身份',
          '确认注销'
        ]
      }
    ],
    notes: ['需还清所有账单', '优惠券将失效', '注销后无法恢复']
  },
  {
    id: '7',
    name: '浦发银行',
    logo: 'SPDB',
    hotline: '95528',
    cancellationMethods: [
      {
        type: 'phone',
        steps: [
          '拨打95528',
          '选择信用卡服务',
          '转接人工',
          '申请注销',
          '验证身份',
          '确认注销'
        ]
      }
    ],
    notes: ['还清欠款后才能注销', '注销后积分清零', '卡片需自行销毁']
  },
  {
    id: '8',
    name: '中信银行',
    logo: 'CITIC',
    hotline: '95558',
    cancellationMethods: [
      {
        type: 'phone',
        steps: [
          '拨打95558',
          '选择信用卡业务',
          '转接人工',
          '申请注销',
          '验证信息',
          '确认注销'
        ]
      },
      {
        type: 'app',
        steps: [
          '打开动卡空间APP',
          '进入"我的"页面',
          '选择"卡片管理"',
          '找到要注销的卡片',
          '点击"更多"-"销卡"'
        ]
      }
    ],
    notes: ['需先还清欠款', '有未出账单需等待', '注销后45天正式生效']
  }
];

export const queryGuides = [
  {
    id: '1',
    title: '官方网站查询',
    description: '最全面的查询方式，提供详细版征信报告',
    icon: 'Globe',
    steps: [
      '访问征信中心官网 www.pbccrc.org.cn',
      '点击"互联网个人信用信息服务平台"',
      '注册账号（已有账号直接登录）',
      '选择身份验证方式（银行卡验证最方便）',
      '提交查询申请',
      '24小时内收到短信验证码',
      '登录平台输入验证码查看报告'
    ],
    advantages: ['信息最全面', '支持异议申请', '免费查询'],
    notes: ['每年前两次免费', '报告需等待24小时', '需银行卡验证'],
    url: 'https://ipcrs.pbccrc.org.cn'
  },
  {
    id: '2',
    title: '手机银行查询',
    description: '最便捷的查询方式，无需额外注册',
    icon: 'Smartphone',
    steps: [
      '打开手机银行APP（工商银行、建设银行、招商银行等）',
      '搜索"征信"或"信用报告"',
      '完成身份验证（人脸识别+短信验证码）',
      '提交查询申请',
      '等待报告生成（部分银行支持快速查询）',
      '在APP内查看或下载报告'
    ],
    advantages: ['操作简单', '无需注册新账号', '部分银行实时出报告'],
    notes: ['需已开通手机银行', '不同银行入口不同', '查询记录计入征信'],
    banks: ['工商银行', '建设银行', '招商银行', '中国银行', '交通银行', '浦发银行', '广发银行', '中信银行', '光大银行', '民生银行', '邮储银行']
  },
  {
    id: '3',
    title: '线下柜台查询',
    description: '当场获取纸质报告，适合不熟悉手机操作的用户',
    icon: 'Building',
    steps: [
      '携带本人身份证原件',
      '前往人民银行分支机构或指定银行网点',
      '填写《个人信用报告本人查询申请表》',
      '工作人员审核身份',
      '打印纸质报告'
    ],
    advantages: ['当场获取报告', '纸质版更清晰', '可咨询工作人员'],
    notes: ['需本人到场', '有营业时间限制', '每年前两次免费'],
    url: 'https://www.pbccrc.org.cn'
  },
  {
    id: '4',
    title: '自助查询机',
    description: '快速便捷，几分钟即可获取报告',
    icon: 'Monitor',
    steps: [
      '携带本人二代身份证',
      '找到自助查询机（人民银行网点或部分银行）',
      '放置身份证读取信息',
      '进行人脸识别',
      '选择报告版本',
      '打印报告'
    ],
    advantages: ['操作简单', '几分钟出报告', '可打印纸质版'],
    notes: ['仅支持二代身份证', '需本人操作', '有地点限制']
  }
];

export const creditTerms = [
  { term: '征信报告', explanation: '征信机构出具的记录个人信用信息的文件，被称为"经济身份证"' },
  { term: '逾期', explanation: '指借款人未按合同约定的时间还款的行为' },
  { term: '账户数', explanation: '个人曾经开立过的所有贷款账户数量，包括信用卡、房贷、车贷等' },
  { term: '授信额度', explanation: '金融机构给予个人的信用额度' },
  { term: '利用率', explanation: '已使用额度占总授信额度的比例，建议控制在70%以内' },
  { term: '五级分类', explanation: '银行对贷款质量的分类：正常、关注、次级、可疑、损失' },
  { term: '硬查询', explanation: '因申请贷款、信用卡等主动授信产生的查询，会影响征信评分' },
  { term: '软查询', explanation: '本人查询、贷后管理等查询，不影响征信评分' },
  { term: '异议申请', explanation: '对征信报告中的错误信息提出更正申请' },
  { term: '结清证明', explanation: '证明贷款或信用卡已全部还清的文件' }
];
