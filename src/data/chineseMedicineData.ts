export interface FragranceMaterial {
  id: string;
  name: string;
  alias: string[];
  image: string;
  nature: string;
  meridian: string[];
  aromaType: '清香' | '浓香' | '辛香' | '甘香' | '苦香' | '腥香' | '调和香';
  efficacy: string[];
  scenarios: string[];
  usageMethods: UsageMethod[];
  compatibleMaterials: string[];
  contraindicatedMaterials: string[];
  contraindicatedGroups: ContraindicatedGroup[];
  ancientRecords: AncientRecord;
}

export interface UsageMethod {
  type: '香囊' | '熏香' | '香枕' | '煮香' | '闻香' | '扩香';
  description: string;
}

export interface ContraindicatedGroup {
  group: string;
  level: '禁用' | '慎用' | '适用';
  reason: string;
}

export interface AncientRecord {
  source: string;
  quote: string;
  explanation: string;
}

export interface FragranceRecipe {
  id: string;
  name: string;
  scenario: string;
  constitution: string[];
  seasons: string[];
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  principle: string;
  precautions: Precaution[];
}

export interface RecipeIngredient {
  name: string;
  proportion: string;
}

export interface RecipeStep {
  step: number;
  description: string;
  image?: string;
}

export interface Precaution {
  type: 'duration' | 'contraindication' | 'replacement';
  content: string;
}

export interface Constitution {
  id: string;
  name: string;
  characteristics: string[];
  suitableMaterials: string[];
  avoidedMaterials: string[];
  recommendedRecipes: string[];
}

export interface SeasonalFragrance {
  season: '春' | '夏' | '秋' | '冬';
  keyPoints: string;
  recommendedMaterials: string[];
  recommendedRecipes: string[];
  solarTerms: SolarTerm[];
}

export interface SolarTerm {
  name: string;
  description: string;
  suitableMaterials: string[];
}

export interface EfficacyCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  materials: string[];
  recipes: string[];
}

export interface UsageMethodCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  steps: string[];
  tips: string[];
  suitableMaterials: string[];
}

export interface SafetyWarning {
  id: string;
  title: string;
  content: string;
  severity: 'high' | 'medium' | 'low';
  targetGroups: string[];
}

export const safetyDisclaimer = '中医香疗仅为养生外治科普，不可替代药物治疗，特殊人群请谨慎使用';

export const fragranceMaterials: FragranceMaterial[] = [
  {
    id: '1',
    name: '沉香',
    alias: ['沉水香', '蜜香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Agarwood%20chips%20natural%20wood%20texture%20traditional%20Chinese%20medicine&image_size=square',
    nature: '辛、苦，微温',
    meridian: ['归脾经', '胃经', '肾经'],
    aromaType: '浓香',
    efficacy: ['行气止痛', '温中止呕', '纳气平喘', '安神助眠'],
    scenarios: ['睡前助眠', '办公室解压', '居家安神'],
    usageMethods: [
      { type: '熏香', description: '低温熏香，每次1-2克，睡前使用' },
      { type: '香囊', description: '与檀香、安息香配伍制作香囊' },
      { type: '香枕', description: '研末装入枕芯，助眠安神' }
    ],
    compatibleMaterials: ['檀香', '安息香', '冰片'],
    contraindicatedMaterials: ['薄荷', '藿香'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安神，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '香气浓郁，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '沉香，气味辛、温，无毒。主治风水毒肿，去恶气。',
      explanation: '沉香气味辛温，具有行气活血、辟秽化浊的功效，古人常用于治疗风水毒肿，去除体内恶气。'
    }
  },
  {
    id: '2',
    name: '檀香',
    alias: ['白檀', '旃檀'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sandalwood%20pieces%20white%20aromatic%20wood%20traditional%20Chinese%20fragrance&image_size=square',
    nature: '辛，温',
    meridian: ['归脾经', '胃经', '肺经'],
    aromaType: '浓香',
    efficacy: ['行气温中', '开胃止痛', '安神定志'],
    scenarios: ['办公室解压', '居家祛湿', '饭后醒脾'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，净化空气，舒缓情绪' },
      { type: '香囊', description: '制作随身香囊，提神醒脑' },
      { type: '煮香', description: '煮水闻香，温暖脾胃' }
    ],
    compatibleMaterials: ['沉香', '丁香', '陈皮'],
    contraindicatedMaterials: ['金银花', '连翘'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '温和安全，可用于安神' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气浓郁，可能引发不适' }
    ],
    ancientRecords: {
      source: '《本草拾遗》',
      quote: '檀香，主心腹霍乱，中恶，杀虫。',
      explanation: '檀香具有温中散寒、辟秽驱虫的功效，古人常用于治疗心腹冷痛、中恶等病症。'
    }
  },
  {
    id: '3',
    name: '藿香',
    alias: ['广藿香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Patchouli%20herb%20green%20leaves%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，微温',
    meridian: ['归脾经', '胃经', '肺经'],
    aromaType: '清香',
    efficacy: ['芳香化浊', '和中止呕', '发表解暑', '辟秽防疫'],
    scenarios: ['居家祛湿', '换季辟秽', '夏季防暑'],
    usageMethods: [
      { type: '香囊', description: '制作防疫香囊，随身佩戴' },
      { type: '煮香', description: '煮水熏蒸，净化室内空气' },
      { type: '闻香', description: '直接闻香，提神醒脑' }
    ],
    compatibleMaterials: ['佩兰', '艾叶', '苍术'],
    contraindicatedMaterials: ['黄芪', '人参'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '辟秽防疫，安全温和' },
      { group: '儿童', level: '适用', reason: '天然草本，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《名医别录》',
      quote: '藿香，主风水毒肿，去恶气，疗霍乱，心痛。',
      explanation: '藿香具有芳香化浊、祛湿解暑的功效，是古人治疗暑湿感冒、霍乱吐泻的常用药。'
    }
  },
  {
    id: '4',
    name: '艾叶',
    alias: ['艾草', '蕲艾'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mugwort%20leaves%20green%20herb%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归肝经', '脾经', '肾经'],
    aromaType: '调和香',
    efficacy: ['温经止血', '散寒止痛', '祛湿止痒', '辟秽驱虫'],
    scenarios: ['居家祛湿', '换季辟秽', '冬季温阳'],
    usageMethods: [
      { type: '熏香', description: '燃烧艾条，驱寒祛湿，净化空气' },
      { type: '香囊', description: '制作防疫香囊，辟秽驱虫' },
      { type: '煮香', description: '煮水熏蒸，温暖身体' }
    ],
    compatibleMaterials: ['藿香', '佩兰', '苍术'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温活血，孕早期需谨慎' },
      { group: '儿童', level: '适用', reason: '温和安全，可用于防疫' },
      { group: '过敏体质', level: '慎用', reason: '烟味可能引发呼吸道不适' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '艾叶，生则微苦太辛，熟则微辛太苦，生温熟热，纯阳之性，能回垂绝之阳。',
      explanation: '艾叶性温，具有纯阳之性，能温通经络、驱散寒气，是中医常用的温阳散寒药材。'
    }
  },
  {
    id: '5',
    name: '薄荷',
    alias: ['苏薄荷', '南薄荷'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mint%20leaves%20green%20fresh%20herb%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，凉',
    meridian: ['归肺经', '肝经'],
    aromaType: '清香',
    efficacy: ['疏散风热', '清利头目', '利咽透疹', '疏肝行气'],
    scenarios: ['办公室解压', '夏季防暑', '清新空气'],
    usageMethods: [
      { type: '闻香', description: '直接闻香，提神醒脑' },
      { type: '香囊', description: '制作清凉香囊，夏季使用' },
      { type: '煮香', description: '煮水熏蒸，清凉解暑' }
    ],
    compatibleMaterials: ['藿香', '佩兰', '菊花'],
    contraindicatedMaterials: ['艾叶', '肉桂'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛凉行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '清凉舒适，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '清新香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《新修本草》',
      quote: '薄荷，主贼风伤寒，发汗，恶气心腹胀满，霍乱，宿食不消，下气。',
      explanation: '薄荷具有疏散风热、理气解郁的功效，古人常用于治疗外感风寒、胸闷腹胀等病症。'
    }
  },
  {
    id: '6',
    name: '陈皮',
    alias: ['橘皮'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tangerine%20peel%20dried%20orange%20traditional%20Chinese%20medicine%20fragrant&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归脾经', '肺经'],
    aromaType: '甘香',
    efficacy: ['理气健脾', '燥湿化痰', '开胃消食'],
    scenarios: ['饭后醒脾', '居家祛湿', '办公室解压'],
    usageMethods: [
      { type: '煮香', description: '煮水闻香，健脾开胃' },
      { type: '香囊', description: '制作理气香囊，疏肝解郁' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['檀香', '藿香', '生姜'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气健脾，安全温和' },
      { group: '儿童', level: '适用', reason: '天然香料，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '温和香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '橘皮，主胸中瘕热逆气，利水谷。久服去臭，下气通神。',
      explanation: '陈皮具有理气健脾、燥湿化痰的功效，是中医常用的理气药，能帮助消化、清新口气。'
    }
  },
  {
    id: '7',
    name: '丁香',
    alias: ['公丁香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Clove%20spice%20dried%20flower%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归脾经', '胃经', '肺经', '肾经'],
    aromaType: '辛香',
    efficacy: ['温中降逆', '补肾助阳', '芳香开胃'],
    scenarios: ['饭后醒脾', '冬季温阳', '居家安神'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，温暖脾胃' },
      { type: '香囊', description: '制作温中香囊，驱寒暖胃' },
      { type: '煮香', description: '煮水闻香，温中散寒' }
    ],
    compatibleMaterials: ['檀香', '沉香', '肉桂'],
    contraindicatedMaterials: ['郁金', '黄连'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温助阳，过量可能过热' },
      { group: '儿童', level: '慎用', reason: '香气浓郁，需适量使用' },
      { group: '过敏体质', level: '慎用', reason: '浓烈香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《药性论》',
      quote: '丁香，治冷气腹痛，壮阳，暖腰膝。',
      explanation: '丁香性温，具有温中散寒、补肾助阳的功效，是古人治疗胃寒腹痛、阳痿早泄的常用药。'
    }
  },
  {
    id: '8',
    name: '金银花',
    alias: ['忍冬花'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Honeysuckle%20flowers%20white%20yellow%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘，寒',
    meridian: ['归肺经', '心经', '胃经'],
    aromaType: '清香',
    efficacy: ['清热解毒', '疏散风热', '凉血止痢'],
    scenarios: ['夏季防暑', '清新空气', '居家祛湿'],
    usageMethods: [
      { type: '煮香', description: '煮水熏蒸，清凉解暑' },
      { type: '香囊', description: '制作清凉香囊，夏季使用' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['薄荷', '菊花', '连翘'],
    contraindicatedMaterials: ['艾叶', '肉桂'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '清热解毒，安全温和' },
      { group: '儿童', level: '适用', reason: '清凉舒适，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '清新香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '金银花，善于化毒，故治痈疽、肿毒、疮癣、杨梅、风湿诸毒，诚为要药。',
      explanation: '金银花具有清热解毒、疏散风热的功效，是中医治疗热毒病症的要药。'
    }
  },
  {
    id: '9',
    name: '佩兰',
    alias: ['都梁香', '兰草'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Eupatorium%20fortunei%20herb%20green%20leaves%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，平',
    meridian: ['归脾经', '胃经'],
    aromaType: '清香',
    efficacy: ['芳香化湿', '醒脾开胃', '发表解暑'],
    scenarios: ['居家祛湿', '夏季防暑', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '与藿香配伍制作祛湿香囊' },
      { type: '煮香', description: '煮水熏蒸，辟秽醒脾' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['藿香', '薄荷', '陈皮'],
    contraindicatedMaterials: ['苍术', '干姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '芳香化湿，安全温和' },
      { group: '儿童', level: '适用', reason: '天然草本，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '草木香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '兰草，主利水道，杀蛊毒，辟不祥。',
      explanation: '佩兰具有芳香化湿、醒脾开胃的功效，古人常用于治疗湿浊中阻、脘腹胀满等病症。'
    }
  },
  {
    id: '10',
    name: '侧柏',
    alias: ['侧柏叶', '柏叶'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Arborvitae%20leaves%20green%20conifer%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '苦、涩，微寒',
    meridian: ['归肺经', '肝经', '脾经'],
    aromaType: '清香',
    efficacy: ['凉血止血', '化痰止咳', '生发乌发'],
    scenarios: ['居家安神', '清新空气', '办公环境'],
    usageMethods: [
      { type: '熏香', description: '燃烧侧柏叶，净化空气' },
      { type: '香囊', description: '制作安神香囊，舒缓情绪' },
      { type: '煮香', description: '煮水熏蒸，清凉静心' }
    ],
    compatibleMaterials: ['薄荷', '菊花', '沉香'],
    contraindicatedMaterials: ['肉桂', '干姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '清凉安神，安全温和' },
      { group: '儿童', level: '适用', reason: '天然草木香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '烟味可能引发呼吸道不适' }
    ],
    ancientRecords: {
      source: '《名医别录》',
      quote: '柏叶，主吐血、衄血、痢血、崩中赤白。',
      explanation: '侧柏叶具有凉血止血、化痰止咳的功效，是中医常用的止血药。'
    }
  },
  {
    id: '11',
    name: '崖柏',
    alias: ['崖柏木'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Thuja%20sutchuenensis%20wood%20natural%20aromatic%20traditional%20Chinese%20fragrance&image_size=square',
    nature: '辛，凉',
    meridian: ['归肺经', '心经'],
    aromaType: '清香',
    efficacy: ['清脑醒神', '祛湿辟邪', '安神定志'],
    scenarios: ['办公室解压', '居家安神', '冥想静心'],
    usageMethods: [
      { type: '熏香', description: '燃烧崖柏木，清脑醒神' },
      { type: '香囊', description: '制作静心香囊，随身佩戴' },
      { type: '香枕', description: '装入枕芯，安神助眠' }
    ],
    compatibleMaterials: ['沉香', '檀香', '薄荷'],
    contraindicatedMaterials: ['艾叶', '肉桂'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '清凉安神，安全温和' },
      { group: '儿童', level: '适用', reason: '天然木香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '柏木，气味清香，可辟邪安神。',
      explanation: '崖柏木气味清香凉润，具有清脑醒神、祛湿辟邪的功效。'
    }
  },
  {
    id: '12',
    name: '青蒿',
    alias: ['草蒿', '茵陈蒿'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Artemisia%20annua%20green%20herb%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '苦、辛，寒',
    meridian: ['归肝经', '胆经'],
    aromaType: '清香',
    efficacy: ['清透虚热', '凉血除蒸', '解暑截疟'],
    scenarios: ['夏季防暑', '清新空气', '居家祛湿'],
    usageMethods: [
      { type: '煮香', description: '煮水熏蒸，清凉解暑' },
      { type: '香囊', description: '制作清凉香囊，夏季使用' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['薄荷', '佩兰', '荷叶'],
    contraindicatedMaterials: ['干姜', '高良姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '苦寒清热，过量可能影响脾胃' },
      { group: '儿童', level: '适用', reason: '清凉舒适，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '清新草木香，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '青蒿，主疥瘙痂痒，恶疮，杀虱，留热在骨节间。',
      explanation: '青蒿具有清热解暑、凉血除蒸的功效，是中医治疗暑热病症的常用药。'
    }
  },
  {
    id: '13',
    name: '香茅',
    alias: ['香茅草'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lemongrass%20green%20herb%20fresh%20aromatic%20traditional%20Chinese%20medicine&image_size=square',
    nature: '辛，凉',
    meridian: ['归肺经', '胃经'],
    aromaType: '清香',
    efficacy: ['祛风通络', '温中止痛', '驱虫避秽'],
    scenarios: ['居家驱虫', '夏季防暑', '清新空气'],
    usageMethods: [
      { type: '煮香', description: '煮水熏蒸，驱虫辟秽' },
      { type: '香囊', description: '制作驱虫香囊，随身佩戴' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['薄荷', '藿香', '艾叶'],
    contraindicatedMaterials: ['肉桂', '干姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '驱虫辟秽，安全温和' },
      { group: '儿童', level: '适用', reason: '清新草木香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目拾遗》',
      quote: '香茅，性温，能温中散寒，理气止痛。',
      explanation: '香茅具有祛风通络、温中止痛的功效，常用于治疗风寒湿痹、脘腹冷痛等病症。'
    }
  },
  {
    id: '14',
    name: '枫香脂',
    alias: ['枫香', '白胶香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liquidambar%20resin%20amber%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，平',
    meridian: ['归肺经'],
    aromaType: '清香',
    efficacy: ['活血止痛', '解毒生肌', '凉血止血'],
    scenarios: ['清新空气', '居家安神', '办公环境'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，清香静心' },
      { type: '香囊', description: '制作芳香香囊，随身佩戴' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['薄荷', '菊花', '冰片'],
    contraindicatedMaterials: ['肉桂', '干姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '活血行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '清香温和，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '树脂香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《新修本草》',
      quote: '枫香脂，主瘾疹风痒浮肿，齿痛。',
      explanation: '枫香脂具有活血止痛、解毒生肌的功效，古人常用于治疗疮疡肿痛、皮肤瘙痒等病症。'
    }
  },
  {
    id: '15',
    name: '菊花',
    alias: ['黄菊', '白菊'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chrysanthemum%20flowers%20white%20yellow%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘、苦，微寒',
    meridian: ['归肺经', '肝经'],
    aromaType: '清香',
    efficacy: ['疏散风热', '平抑肝阳', '清肝明目', '清热解毒'],
    scenarios: ['办公室解压', '夏季防暑', '清新空气'],
    usageMethods: [
      { type: '煮香', description: '煮水熏蒸，清凉明目' },
      { type: '香囊', description: '制作清凉香囊，舒缓情绪' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['薄荷', '金银花', '桑叶'],
    contraindicatedMaterials: ['艾叶', '肉桂'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '清热解毒，安全温和' },
      { group: '儿童', level: '适用', reason: '清新花香，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '淡雅香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '菊花，主风头眩、肿痛，目欲脱，泪出。',
      explanation: '菊花具有疏散风热、清肝明目的功效，是中医治疗风热感冒、目赤肿痛的常用药。'
    }
  },
  {
    id: '16',
    name: '栀子花',
    alias: ['栀子', '山栀'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Gardenia%20flowers%20white%20fragrant%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '苦，寒',
    meridian: ['归心经', '肺经', '三焦经'],
    aromaType: '清香',
    efficacy: ['泻火除烦', '清热利湿', '凉血解毒'],
    scenarios: ['清新空气', '居家安神', '夏季防暑'],
    usageMethods: [
      { type: '香囊', description: '制作花香香囊，清新空气' },
      { type: '煮香', description: '煮水熏蒸，清凉静心' },
      { type: '闻香', description: '直接闻香，舒缓情绪' }
    ],
    compatibleMaterials: ['薄荷', '菊花', '茉莉花'],
    contraindicatedMaterials: ['干姜', '高良姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '清热解毒，安全温和' },
      { group: '儿童', level: '适用', reason: '清新花香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '花香可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '栀子，主五内邪气，胃中热气。',
      explanation: '栀子花具有泻火除烦、清热利湿的功效，古人常用于治疗热病心烦、湿热黄疸等病症。'
    }
  },
  {
    id: '17',
    name: '茉莉花',
    alias: ['茉莉', '木犀'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jasmine%20flowers%20white%20fragrant%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、甘，温',
    meridian: ['归脾经', '胃经', '肝经'],
    aromaType: '清香',
    efficacy: ['理气开郁', '辟秽和中', '清肝明目'],
    scenarios: ['居家安神', '办公室解压', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作花香香囊，理气解郁' },
      { type: '煮香', description: '煮水熏蒸，清新空气' },
      { type: '闻香', description: '直接闻香，舒缓情绪' }
    ],
    compatibleMaterials: ['薄荷', '陈皮', '玫瑰花'],
    contraindicatedMaterials: ['苍术', '厚朴'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气开郁，安全温和' },
      { group: '儿童', level: '适用', reason: '清新花香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '花香可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目拾遗》',
      quote: '茉莉花，性温，能理气解郁，辟秽和中。',
      explanation: '茉莉花具有理气开郁、辟秽和中的功效，常用于治疗肝气郁结、胸腹胀满等病症。'
    }
  },
  {
    id: '18',
    name: '玉兰花',
    alias: ['木兰', '木笔'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Magnolia%20flowers%20white%20pink%20fragrant%20traditional%20Chinese%20medicine&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '胃经'],
    aromaType: '清香',
    efficacy: ['发散风寒', '通鼻窍', '行气止痛'],
    scenarios: ['清新空气', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作花香香囊，清新空气' },
      { type: '煮香', description: '煮水熏蒸，通窍醒神' },
      { type: '闻香', description: '直接闻香，舒缓情绪' }
    ],
    compatibleMaterials: ['薄荷', '辛夷', '茉莉花'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '发散风寒，安全温和' },
      { group: '儿童', level: '适用', reason: '清新花香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '花香可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '木兰，气味辛温，主身大热在皮肤中，去面热赤疱酒皶。',
      explanation: '玉兰花具有发散风寒、通鼻窍的功效，古人常用于治疗风寒感冒、鼻塞流涕等病症。'
    }
  },
  {
    id: '19',
    name: '龙脑',
    alias: ['冰片', '梅片'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Borneol%20crystals%20white%20translucent%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，微寒',
    meridian: ['归心经', '脾经', '肺经'],
    aromaType: '清香',
    efficacy: ['开窍醒神', '清热止痛'],
    scenarios: ['办公环境', '居家安神', '清新空气'],
    usageMethods: [
      { type: '熏香', description: '少量使用，开窍醒神' },
      { type: '香囊', description: '与其他香材配伍制作香囊' },
      { type: '闻香', description: '直接闻香，清凉开窍' }
    ],
    compatibleMaterials: ['薄荷', '菊花', '青蒿'],
    contraindicatedMaterials: ['干姜', '高良姜'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛凉开窍，过量可能影响胎气' },
      { group: '儿童', level: '慎用', reason: '香气强烈，需少量使用' },
      { group: '过敏体质', level: '慎用', reason: '凉香可能引发不适' }
    ],
    ancientRecords: {
      source: '《新修本草》',
      quote: '龙脑香，主心腹邪气，风湿积聚，耳聋，明目，去目赤肤翳。',
      explanation: '龙脑具有开窍醒神、清热止痛的功效，是中医治疗窍闭神昏、目赤肿痛的要药。'
    }
  },
  {
    id: '20',
    name: '紫苏叶',
    alias: ['紫苏', '苏叶'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perilla%20leaves%20green%20purple%20herb%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '脾经'],
    aromaType: '清香',
    efficacy: ['解表散寒', '行气和胃'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '煮香', description: '煮水熏蒸，辟秽醒脾' },
      { type: '香囊', description: '制作辟秽香囊，随身佩戴' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['藿香', '佩兰', '陈皮'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '解表散寒，安全温和' },
      { group: '儿童', level: '适用', reason: '天然草本，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《名医别录》',
      quote: '紫苏叶，主下气，除寒中，其子尤良。',
      explanation: '紫苏叶具有解表散寒、行气和胃的功效，是中医治疗风寒感冒、脾胃气滞的常用药。'
    }
  },
  {
    id: '21',
    name: '白芷',
    alias: ['香白芷'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Angelica%20dahurica%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '胃经', '大肠经'],
    aromaType: '辛香',
    efficacy: ['解表散寒', '祛风止痛', '通鼻窍', '燥湿止带'],
    scenarios: ['居家辟秽', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作通窍香囊，合香万能引香' },
      { type: '熏香', description: '燃烧熏香，辟秽通窍' },
      { type: '煮香', description: '煮水熏蒸，醒脾开胃' }
    ],
    compatibleMaterials: ['川芎', '细辛', '苍术'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '白芷，主女人漏下赤白，血闭阴肿，寒热，风头侵目泪出。',
      explanation: '白芷具有祛风通窍、燥湿止痛的功效，是合香中最常用的引香药，能引导香气上行。'
    }
  },
  {
    id: '22',
    name: '川芎',
    alias: ['芎䓖'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ligusticum%20chuanxiong%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肝经', '胆经', '心包经'],
    aromaType: '辛香',
    efficacy: ['活血行气', '祛风止痛'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作活血香囊，行气止痛' },
      { type: '熏香', description: '燃烧熏香，理气安神' },
      { type: '煮香', description: '煮水熏蒸，活血通经' }
    ],
    compatibleMaterials: ['白芷', '细辛', '薄荷'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '活血行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '川芎，主中风入脑头痛，寒痹，筋挛缓急。',
      explanation: '川芎具有活血行气、祛风止痛的功效，能令香气通透上行，是合香中的重要配伍药。'
    }
  },
  {
    id: '23',
    name: '藁本',
    alias: ['西芎'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ligusticum%20sinense%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归膀胱经'],
    aromaType: '辛香',
    efficacy: ['祛风散寒', '除湿止痛'],
    scenarios: ['居家辟秽', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作散寒香囊，祛风止痛' },
      { type: '熏香', description: '燃烧熏香，辟秽散寒' },
      { type: '煮香', description: '煮水熏蒸，祛风除湿' }
    ],
    compatibleMaterials: ['白芷', '川芎', '细辛'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '藁本，主妇人疝瘕，阴中寒肿痛，腹中急，除风头痛。',
      explanation: '藁本具有祛风散寒、除湿止痛的功效，是古线香的经典原料。'
    }
  },
  {
    id: '24',
    name: '石菖蒲',
    alias: ['菖蒲'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Acorus%20tatarinowii%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归心经', '胃经'],
    aromaType: '辛香',
    efficacy: ['开窍豁痰', '醒神益智', '化湿开胃'],
    scenarios: ['居家安神', '办公环境', '助眠清脑'],
    usageMethods: [
      { type: '香囊', description: '制作安神香囊，开窍宁神' },
      { type: '熏香', description: '燃烧熏香，醒神益智' },
      { type: '香枕', description: '装入枕芯，助眠清脑' }
    ],
    compatibleMaterials: ['远志', '茯神', '酸枣仁'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '开窍宁神，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '菖蒲，主风寒湿痹，咳逆上气，开心孔，补五脏。',
      explanation: '石菖蒲具有开窍宁神、化湿和胃的功效，能助眠清脑，是安神香方的常用药。'
    }
  },
  {
    id: '25',
    name: '山柰',
    alias: ['三奈', '沙姜'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kaempferia%20galanga%20rhizome%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归胃经'],
    aromaType: '辛香',
    efficacy: ['温中化湿', '行气止痛'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作温中香囊，辟秽散寒' },
      { type: '熏香', description: '燃烧熏香，温中止痛' },
      { type: '煮香', description: '煮水熏蒸，辟秽醒脾' }
    ],
    compatibleMaterials: ['高良姜', '陈皮', '丁香'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '温中化湿，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '山柰，暖中，辟瘴疠恶气，治心腹冷气痛，寒湿霍乱。',
      explanation: '山柰具有温中化湿、行气止痛的功效，能增添清甜辛香，是合香中的常用香料。'
    }
  },
  {
    id: '26',
    name: '辛夷花',
    alias: ['木笔花', '望春花'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Magnolia%20liliflora%20flowers%20purple%20white%20traditional%20Chinese%20medicine&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '胃经'],
    aromaType: '辛香',
    efficacy: ['发散风寒', '通鼻窍'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作通鼻香囊，发散风寒' },
      { type: '熏香', description: '燃烧熏香，通窍醒神' },
      { type: '闻香', description: '直接闻香，通鼻开窍' }
    ],
    compatibleMaterials: ['白芷', '细辛', '薄荷'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温发散，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '花香可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '辛夷，主五脏身体寒热，风头脑痛，面酐。',
      explanation: '辛夷花具有发散风寒、通鼻窍的功效，是治疗鼻塞流涕的要药。'
    }
  },
  {
    id: '27',
    name: '细辛',
    alias: ['北细辛', '华细辛'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asarum%20sieboldii%20herb%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '肾经', '心经'],
    aromaType: '辛香',
    efficacy: ['解表散寒', '祛风止痛', '通窍', '温肺化饮'],
    scenarios: ['居家辟秽', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '少量使用，制作通窍香囊' },
      { type: '熏香', description: '极少量使用，辟秽通窍' },
      { type: '煮香', description: '少量煮水，温肺散寒' }
    ],
    compatibleMaterials: ['白芷', '川芎', '薄荷'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '禁用', reason: '辛温走窜极强，可能影响胎儿' },
      { group: '儿童', level: '慎用', reason: '走窜力强，需严格控制用量' },
      { group: '过敏体质', level: '慎用', reason: '辛香浓烈，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '细辛，主咳逆，头痛脑动，百节拘挛，风湿痹痛，死肌。',
      explanation: '细辛具有解表散寒、祛风止痛的功效，走窜力极强，能通窍止痛，但需严格控制用量。'
    }
  },
  {
    id: '28',
    name: '花椒',
    alias: ['川椒', '蜀椒'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sichuan%20pepper%20dried%20red%20spice%20traditional%20Chinese%20medicine&image_size=square',
    nature: '辛，温',
    meridian: ['归脾经', '胃经', '肾经'],
    aromaType: '辛香',
    efficacy: ['温中止痛', '杀虫止痒'],
    scenarios: ['居家驱虫', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作驱虫香囊，温中止痛' },
      { type: '熏香', description: '少量燃烧，驱虫辟秽' },
      { type: '煮香', description: '煮水熏蒸，温中散寒' }
    ],
    compatibleMaterials: ['高良姜', '陈皮', '丁香'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '温中散寒，安全温和' },
      { group: '儿童', level: '适用', reason: '天然香料，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香浓烈，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '花椒，主邪气咳逆，温中，逐骨节皮肤死肌，寒湿痹痛。',
      explanation: '花椒具有温中止痛、杀虫止痒的功效，能温中、驱虫辟秽，是合香中的常用香料。'
    }
  },
  {
    id: '29',
    name: '高良姜',
    alias: ['良姜'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Alpinia%20officinarum%20rhizome%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，热',
    meridian: ['归脾经', '胃经'],
    aromaType: '辛香',
    efficacy: ['温中止痛', '温中止呕'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作温中香囊，散寒止痛' },
      { type: '熏香', description: '燃烧熏香，温中散寒' },
      { type: '煮香', description: '煮水熏蒸，温中止呕' }
    ],
    compatibleMaterials: ['干姜', '陈皮', '丁香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛热温中，过量可能过热' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《名医别录》',
      quote: '高良姜，主暴冷，胃中冷逆，霍乱腹痛。',
      explanation: '高良姜具有温中止痛、温中止呕的功效，能温散寒气，是治疗胃寒腹痛的常用药。'
    }
  },
  {
    id: '30',
    name: '小茴香',
    alias: ['茴香', '谷茴香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fennel%20seeds%20green%20spice%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肝经', '肾经', '脾经', '胃经'],
    aromaType: '辛香',
    efficacy: ['散寒止痛', '理气和胃'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作理气香囊，散寒止痛' },
      { type: '熏香', description: '燃烧熏香，理气和胃' },
      { type: '煮香', description: '煮水熏蒸，温中散寒' }
    ],
    compatibleMaterials: ['陈皮', '高良姜', '丁香'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气和胃，安全温和' },
      { group: '儿童', level: '适用', reason: '天然香料，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《新修本草》',
      quote: '小茴香，主膀胱、肾间冷气，盲气，调中止痛，呕吐。',
      explanation: '小茴香具有散寒止痛、理气和胃的功效，能理气和胃，是合香中的常用香料。'
    }
  },
  {
    id: '31',
    name: '八角茴香',
    alias: ['八角', '大茴香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Star%20anise%20dried%20spice%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、甘，温',
    meridian: ['归脾经', '胃经', '肾经'],
    aromaType: '辛香',
    efficacy: ['温中散寒', '理气止痛'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作温中香囊，散寒止痛' },
      { type: '熏香', description: '燃烧熏香，理气散寒' },
      { type: '煮香', description: '煮水熏蒸，温中散寒' }
    ],
    compatibleMaterials: ['陈皮', '高良姜', '丁香'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '温中散寒，安全温和' },
      { group: '儿童', level: '适用', reason: '天然香料，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '辛香浓烈，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '八角茴香，主一切冷气及诸疝痛。',
      explanation: '八角茴香具有温中散寒、理气止痛的功效，能温阳理气，是合香中的常用香料。'
    }
  },
  {
    id: '32',
    name: '杜衡',
    alias: ['杜葵', '马蹄香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asarum%20forbesii%20herb%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经'],
    aromaType: '辛香',
    efficacy: ['散风逐寒', '消痰行水', '活血止痛'],
    scenarios: ['居家辟秽', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作辟秽香囊，散风逐浊' },
      { type: '熏香', description: '燃烧熏香，辟秽驱虫' },
      { type: '煮香', description: '煮水熏蒸，散风逐寒' }
    ],
    compatibleMaterials: ['白芷', '细辛', '川芎'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '辛香气味，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《名医别录》',
      quote: '杜衡，主风寒咳逆。',
      explanation: '杜衡具有散风逐寒、消痰行水的功效，是古佩香的常用原料，能散风逐浊。'
    }
  },
  {
    id: '33',
    name: '零陵香',
    alias: ['灵香草', '蕙香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lysimachia%20foenum-graecum%20herb%20green%20aromatic%20traditional%20Chinese%20medicine&image_size=square',
    nature: '甘，平',
    meridian: ['归脾经', '胃经'],
    aromaType: '甘香',
    efficacy: ['行气活血', '止痛', '安神'],
    scenarios: ['清新空气', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作芳香香囊，随身佩戴' },
      { type: '熏香', description: '燃烧熏香，留香持久' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['薄荷', '茉莉花', '玫瑰花'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '香气温和，安全无刺激' },
      { group: '儿童', level: '适用', reason: '天然草本，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '零陵香，主明目止泪，疗泄精。',
      explanation: '零陵香具有行气活血、止痛安神的功效，古代熏衣香主流，留香持久。'
    }
  },
  {
    id: '34',
    name: '甘松',
    alias: ['香松'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nardostachys%20jatamansi%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘，温',
    meridian: ['归脾经', '胃经'],
    aromaType: '甘香',
    efficacy: ['理气止痛', '开郁醒脾'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作理气香囊，开郁醒脾' },
      { type: '熏香', description: '燃烧熏香，调和厚重香气' },
      { type: '煮香', description: '煮水闻香，醒脾开胃' }
    ],
    compatibleMaterials: ['陈皮', '丁香', '檀香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气开郁，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '甘松，主恶气，卒心腹痛满。',
      explanation: '甘松具有理气止痛、开郁醒脾的功效，能调和厚重香气，是合香中的重要调和药。'
    }
  },
  {
    id: '35',
    name: '香橼',
    alias: ['枸橼'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Citron%20fruit%20yellow%20traditional%20Chinese%20medicine%20fragrant&image_size=square',
    nature: '辛、苦、酸，温',
    meridian: ['归肝经', '脾经', '肺经'],
    aromaType: '甘香',
    efficacy: ['疏肝理气', '宽中化痰'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作理气香囊，疏肝解郁' },
      { type: '熏香', description: '燃烧熏香，清新空气' },
      { type: '煮香', description: '煮水闻香，宽中理气' }
    ],
    compatibleMaterials: ['陈皮', '佛手', '薄荷'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气化痰，安全温和' },
      { group: '儿童', level: '适用', reason: '清甜果香，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '温和香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '香橼，主下气，除心头痰水。',
      explanation: '香橼具有疏肝理气、宽中化痰的功效，清甜果香，能中和药香苦涩。'
    }
  },
  {
    id: '36',
    name: '佛手',
    alias: ['佛手柑'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fingered%20citron%20fruit%20yellow%20traditional%20Chinese%20medicine%20fragrant&image_size=square',
    nature: '辛、苦、酸，温',
    meridian: ['归肝经', '脾经', '肺经'],
    aromaType: '甘香',
    efficacy: ['疏肝理气', '和胃止痛', '燥湿化痰'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作理气香囊，疏肝解郁' },
      { type: '熏香', description: '燃烧熏香，清新空气' },
      { type: '煮香', description: '煮水闻香，和胃止痛' }
    ],
    compatibleMaterials: ['陈皮', '香橼', '薄荷'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气化痰，安全温和' },
      { group: '儿童', level: '适用', reason: '清甜果香，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '温和香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '佛手，煮酒饮，治痰气咳嗽。煎汤，治心下气痛。',
      explanation: '佛手具有疏肝理气、和胃止痛的功效，清甜果香，能中和药香苦涩。'
    }
  },
  {
    id: '37',
    name: '桂花',
    alias: ['木犀花'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Osmanthus%20flowers%20golden%20yellow%20fragrant%20traditional%20Chinese%20medicine&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '脾经', '肾经'],
    aromaType: '甘香',
    efficacy: ['温中散寒', '暖胃止痛', '化痰散瘀'],
    scenarios: ['清新空气', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作花香香囊，清新空气' },
      { type: '熏香', description: '燃烧熏香，温中散寒' },
      { type: '闻香', description: '直接闻香，舒缓情绪' }
    ],
    compatibleMaterials: ['玫瑰花', '茉莉花', '陈皮'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '温中散寒，安全温和' },
      { group: '儿童', level: '适用', reason: '清新花香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '花香可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '桂花，治百病，养精神，和颜色。',
      explanation: '桂花具有温中散寒、暖胃止痛的功效，香气清甜，是合香中的常用添香药。'
    }
  },
  {
    id: '38',
    name: '玫瑰花',
    alias: ['玫瑰'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Rose%20flowers%20red%20pink%20fragrant%20traditional%20Chinese%20medicine&image_size=square',
    nature: '甘、微苦，温',
    meridian: ['归肝经', '脾经'],
    aromaType: '甘香',
    efficacy: ['疏肝理气', '活血止痛'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作花香香囊，疏肝解郁' },
      { type: '熏香', description: '燃烧熏香，理气活血' },
      { type: '闻香', description: '直接闻香，舒缓情绪' }
    ],
    compatibleMaterials: ['茉莉花', '桂花', '陈皮'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '活血行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '清新花香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '花香可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目拾遗》',
      quote: '玫瑰花，理气解郁，活血散瘀。',
      explanation: '玫瑰花具有疏肝理气、活血止痛的功效，香气清甜，能舒缓情绪。'
    }
  },
  {
    id: '39',
    name: '酸枣仁',
    alias: ['枣仁'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ziziphus%20jujuba%20seeds%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘、酸，平',
    meridian: ['归心经', '肝经'],
    aromaType: '甘香',
    efficacy: ['养心安神', '益肝明目'],
    scenarios: ['睡前助眠', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作安神香囊，养心安神' },
      { type: '香枕', description: '装入枕芯，助眠安神' },
      { type: '煮香', description: '煮水闻香，清心安神' }
    ],
    compatibleMaterials: ['茯神', '远志', '夜交藤'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '养心安神，安全温和' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '适用', reason: '淡甜仁香，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '酸枣仁，主心腹寒热，邪结气聚，四肢酸痛，湿痹。',
      explanation: '酸枣仁具有养心安神、益肝明目的功效，是中医治疗失眠的要药。'
    }
  },
  {
    id: '40',
    name: '茯神',
    alias: ['伏神'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Poria%20cocos%20fungal%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘、淡，平',
    meridian: ['归心经', '脾经'],
    aromaType: '甘香',
    efficacy: ['宁心安神', '利水渗湿'],
    scenarios: ['睡前助眠', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作安神香囊，宁心安神' },
      { type: '香枕', description: '装入枕芯，助眠安神' },
      { type: '煮香', description: '煮水闻香，清心安神' }
    ],
    compatibleMaterials: ['酸枣仁', '远志', '石菖蒲'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '宁心安神，安全温和' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '适用', reason: '淡甘药香，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '茯神，主辟不祥，疗风眩风虚，五劳口干。',
      explanation: '茯神具有宁心安神、利水渗湿的功效，是安神香方的常用药。'
    }
  },
  {
    id: '41',
    name: '远志',
    alias: ['远志肉'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Polygala%20tenuifolia%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '苦、辛，温',
    meridian: ['归心经', '肾经', '肺经'],
    aromaType: '甘香',
    efficacy: ['安神益智', '祛痰开窍'],
    scenarios: ['睡前助眠', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作安神香囊，安神益智' },
      { type: '香枕', description: '装入枕芯，助眠安神' },
      { type: '煮香', description: '煮水闻香，清心安神' }
    ],
    compatibleMaterials: ['酸枣仁', '茯神', '石菖蒲'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '安神益智，安全温和' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '适用', reason: '淡甘药香，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '远志，主咳逆伤中，补不足，除邪气，利九窍。',
      explanation: '远志具有安神益智、祛痰开窍的功效，是安神香方的常用药。'
    }
  },
  {
    id: '42',
    name: '甘草',
    alias: ['国老'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Glycyrrhiza%20glabra%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘，平',
    meridian: ['归心经', '肺经', '脾经', '胃经'],
    aromaType: '甘香',
    efficacy: ['益气补中', '清热解毒', '调和诸药'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作调和香囊，缓和燥烈' },
      { type: '煮香', description: '煮水闻香，调和诸香' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['陈皮', '薄荷', '各种香材'],
    contraindicatedMaterials: ['海藻', '大戟', '芫花', '甘遂'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '调和诸药，安全温和' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '适用', reason: '淡甘药香，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '甘草，主五脏六腑寒热邪气，坚筋骨，长肌肉。',
      explanation: '甘草具有益气补中、清热解毒、调和诸药的功效，是合香中常用的调和药，能缓和燥烈之气。'
    }
  },
  {
    id: '43',
    name: '降真香',
    alias: ['番降'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dalbergia%20odorifera%20wood%20natural%20aromatic%20traditional%20Chinese%20fragrance&image_size=square',
    nature: '辛，温',
    meridian: ['归肝经', '脾经'],
    aromaType: '浓香',
    efficacy: ['行气活血', '辟秽通络', '解郁安神'],
    scenarios: ['居家安神', '办公环境', '冥想静心'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，辟秽安神' },
      { type: '香囊', description: '制作静心香囊，随身佩戴' },
      { type: '香枕', description: '装入枕芯，安神助眠' }
    ],
    compatibleMaterials: ['沉香', '檀香', '安息香'],
    contraindicatedMaterials: ['薄荷', '藿香'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安神，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '降真香，主天行时气，宅舍怪异，小儿惊痫邪气。',
      explanation: '降真香具有行气活血、辟秽通络的功效，是道家常用香材，能解郁安神。'
    }
  },
  {
    id: '44',
    name: '乌药',
    alias: ['台乌'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lindera%20aggregata%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归肺经', '脾经', '肾经', '膀胱经'],
    aromaType: '浓香',
    efficacy: ['行气止痛', '温肾散寒'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作行气香囊，温中止痛' },
      { type: '熏香', description: '燃烧熏香，理气安神' },
      { type: '煮香', description: '煮水闻香，温中散寒' }
    ],
    compatibleMaterials: ['沉香', '檀香', '陈皮'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '行气止痛，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '乌药，主中恶心腹痛，蛊毒。',
      explanation: '乌药具有行气止痛、温肾散寒的功效，是合香中的常用木香原料。'
    }
  },
  {
    id: '45',
    name: '乳香',
    alias: ['熏陆香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Frankincense%20resin%20amber%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归心经', '肝经', '脾经'],
    aromaType: '浓香',
    efficacy: ['活血行气', '消肿生肌'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，活血安神' },
      { type: '香囊', description: '制作活血香囊，行气止痛' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['没药', '沉香', '檀香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '活血行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '树脂香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '乳香，活血止痛，消肿生肌。',
      explanation: '乳香具有活血行气、消肿生肌的功效，是合香中的重要定香剂，能锁住香气。'
    }
  },
  {
    id: '46',
    name: '没药',
    alias: ['末药'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Myrrh%20resin%20dark%20brown%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '苦、辛，平',
    meridian: ['归心经', '肝经', '脾经'],
    aromaType: '浓香',
    efficacy: ['活血止痛', '消肿生肌'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，散瘀安神' },
      { type: '香囊', description: '制作活血香囊，行气止痛' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['乳香', '沉香', '檀香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '活血行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '树脂香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '没药，散血消肿，定痛生肌。',
      explanation: '没药具有活血止痛、消肿生肌的功效，常与乳香配对使用，是合香中的重要定香剂。'
    }
  },
  {
    id: '47',
    name: '安息香',
    alias: ['安息'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Styrax%20benzoin%20resin%20amber%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归心经', '脾经'],
    aromaType: '浓香',
    efficacy: ['开窍醒神', '行气活血', '止痛'],
    scenarios: ['睡前助眠', '居家安神', '办公环境'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，开窍安神' },
      { type: '香囊', description: '制作安神香囊，舒缓情绪' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['沉香', '檀香', '龙脑'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '开窍行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和安神，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '树脂香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《新修本草》',
      quote: '安息香，主心腹恶气。',
      explanation: '安息香具有开窍醒神、行气活血的功效，是安神香方的常用药，能舒缓情绪。'
    }
  },
  {
    id: '48',
    name: '苏合香',
    alias: ['苏合'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liquidambar%20orientalis%20resin%20dark%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘、辛，温',
    meridian: ['归心经', '脾经'],
    aromaType: '浓香',
    efficacy: ['开窍醒神', '辟秽止痛'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '熏香', description: '少量使用，开窍醒神' },
      { type: '香囊', description: '与其他香材配伍制作香囊' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['安息香', '龙脑', '沉香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '开窍行气，过量可能过热' },
      { group: '儿童', level: '慎用', reason: '香气强烈，需少量使用' },
      { group: '过敏体质', level: '慎用', reason: '浓烈香气，可能引发不适' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '苏合香，通窍开郁，辟一切不正之气。',
      explanation: '苏合香具有开窍醒神、辟秽止痛的功效，是古方苏合香丸的主料。'
    }
  },
  {
    id: '49',
    name: '苍术',
    alias: ['茅苍术'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Atractylodes%20lancea%20rhizome%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归脾经', '胃经', '肝经'],
    aromaType: '浓香',
    efficacy: ['燥湿健脾', '祛风散寒', '明目'],
    scenarios: ['居家祛湿', '换季辟秽', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作辟秽香囊，祛湿驱虫' },
      { type: '熏香', description: '燃烧熏香，燥湿辟疫' },
      { type: '煮香', description: '煮水熏蒸，祛湿散寒' }
    ],
    compatibleMaterials: ['藿香', '佩兰', '艾叶'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温燥湿，过量可能影响脾胃' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '土药香气，可能引发不适' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '苍术，主风寒湿痹，死肌痉疸。',
      explanation: '苍术具有燥湿健脾、祛风散寒的功效，是端午香囊的核心原料，能祛除湿浊。'
    }
  },
  {
    id: '50',
    name: '木香',
    alias: ['广木香', '青木香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Aucklandia%20lappa%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归脾经', '胃经', '大肠经', '胆经'],
    aromaType: '浓香',
    efficacy: ['行气止痛', '健脾消食'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作行气香囊，行气消胀' },
      { type: '熏香', description: '燃烧熏香，理气安神' },
      { type: '煮香', description: '煮水闻香，健脾开胃' }
    ],
    compatibleMaterials: ['陈皮', '丁香', '檀香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '行气止痛，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '郁香可能引发不适' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '木香，主心腹一切气，止泻，健脾消食。',
      explanation: '木香具有行气止痛、健脾消食的功效，是合香中的常用浓药香原料。'
    }
  },
  {
    id: '51',
    name: '草果',
    alias: ['草果仁'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Amomum%20tsao-ko%20fruit%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归脾经', '胃经'],
    aromaType: '浓香',
    efficacy: ['燥湿温中', '除痰截疟'],
    scenarios: ['居家祛湿', '清新空气', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '少量使用，制作祛湿香囊' },
      { type: '熏香', description: '少量燃烧，燥湿除腥' },
      { type: '煮香', description: '少量煮水，温中散寒' }
    ],
    compatibleMaterials: ['陈皮', '高良姜', '丁香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '辛温燥湿，过量可能影响脾胃' },
      { group: '儿童', level: '适用', reason: '温和安全，可少量使用' },
      { group: '过敏体质', level: '慎用', reason: '浓烈药香，可能引发不适' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '草果，主瘴疠寒疟，宿食不消，胀满。',
      explanation: '草果具有燥湿温中、除痰截疟的功效，能燥湿除腥，但需少量使用。'
    }
  },
  {
    id: '52',
    name: '麝香',
    alias: ['麝脐香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Musk%20gland%20traditional%20Chinese%20medicine%20aromatic%20precious&image_size=square',
    nature: '辛，温',
    meridian: ['归心经', '脾经'],
    aromaType: '浓香',
    efficacy: ['开窍醒神', '活血通经', '消肿止痛'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '极少量使用，制作开窍香囊' },
      { type: '熏香', description: '极少量使用，开窍醒神' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['沉香', '檀香', '安息香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '禁用', reason: '辛温走窜极强，可能导致流产' },
      { group: '儿童', level: '慎用', reason: '香气强烈，需极少量使用' },
      { group: '过敏体质', level: '慎用', reason: '浓烈香气，可能引发过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '麝香，主辟恶气，杀鬼精物，温疟，蛊毒，痫痉。',
      explanation: '麝香具有开窍醒神、活血通经的功效，是四大名香之一，香气极烈，孕妇严禁使用，现代受保护，多使用合规替代品。'
    }
  },
  {
    id: '53',
    name: '龙涎香',
    alias: ['龙腹香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ambergris%20wax%20amber%20traditional%20Chinese%20medicine%20aromatic%20precious&image_size=square',
    nature: '甘、酸，温',
    meridian: ['归心经', '肝经'],
    aromaType: '浓香',
    efficacy: ['行气活血', '化痰开窍', '安神'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '熏香', description: '燃烧熏香，行气安神' },
      { type: '香囊', description: '制作安神香囊，随身佩戴' },
      { type: '闻香', description: '直接闻香，清新空气' }
    ],
    compatibleMaterials: ['沉香', '檀香', '安息香'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '行气活血，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '香气可能引发过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '龙涎香，主心腹痛，理气化痰。',
      explanation: '龙涎香具有行气活血、化痰开窍的功效，是四大名香之一，能柔和定香。'
    }
  },
  {
    id: '54',
    name: '甲香',
    alias: ['蠡甲香'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Turbo%20cornutus%20shell%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '咸，平',
    meridian: ['归脾经', '胃经'],
    aromaType: '浓香',
    efficacy: ['下气消痰', '解毒'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作调和香囊，调和众香' },
      { type: '熏香', description: '燃烧熏香，辟秽驱虫' },
      { type: '煮香', description: '煮水闻香，下气消痰' }
    ],
    compatibleMaterials: ['沉香', '檀香', '各种香材'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '下气消痰，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '气味可能引发不适' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '甲香，主心腹满痛，下气消痰。',
      explanation: '甲香具有下气消痰、解毒的功效，是古和合香的重要原料，能调和众香。'
    }
  },
  {
    id: '55',
    name: '香附',
    alias: ['香附子'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cyperus%20rotundus%20rhizome%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、微苦、微甘，平',
    meridian: ['归肝经', '脾经', '三焦经'],
    aromaType: '调和香',
    efficacy: ['疏肝理气', '调经止痛'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作理气香囊，疏肝解郁' },
      { type: '熏香', description: '燃烧熏香，理气安神' },
      { type: '煮香', description: '煮水闻香，疏肝理气' }
    ],
    compatibleMaterials: ['陈皮', '薄荷', '各种香材'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气解郁，安全温和' },
      { group: '儿童', level: '适用', reason: '温和香气，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '温和香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '香附，利三焦，解六郁，妇人之仙药也。',
      explanation: '香附具有疏肝理气、调经止痛的功效，香气平和，是合香中的百搭调和药，能斡旋诸香。'
    }
  },
  {
    id: '56',
    name: '独活',
    alias: ['川独活'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Angelica%20pubescens%20root%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛、苦，温',
    meridian: ['归肾经', '膀胱经'],
    aromaType: '调和香',
    efficacy: ['祛风除湿', '通痹止痛'],
    scenarios: ['居家祛湿', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作祛湿香囊，祛风除湿' },
      { type: '熏香', description: '燃烧熏香，缓冲辛烈' },
      { type: '煮香', description: '煮水熏蒸，祛风散寒' }
    ],
    compatibleMaterials: ['白芷', '细辛', '川芎'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '祛风除湿，安全温和' },
      { group: '儿童', level: '适用', reason: '温和药香，无刺激性' },
      { group: '过敏体质', level: '慎用', reason: '药香可能引发不适' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '独活，主风寒所击，金疮止痛，奔豚，痫痓。',
      explanation: '独活具有祛风除湿、通痹止痛的功效，温和药香，能缓冲辛烈之气，是合香中的重要调和药。'
    }
  },
  {
    id: '57',
    name: '砂仁',
    alias: ['缩砂仁'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Amomum%20villosum%20fruit%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '辛，温',
    meridian: ['归脾经', '胃经', '肾经'],
    aromaType: '调和香',
    efficacy: ['化湿开胃', '温脾止泻', '理气安胎'],
    scenarios: ['居家安神', '办公环境', '清新空气'],
    usageMethods: [
      { type: '香囊', description: '制作理气香囊，化湿醒脾' },
      { type: '熏香', description: '燃烧熏香，和香调和' },
      { type: '煮香', description: '煮水闻香，温脾开胃' }
    ],
    compatibleMaterials: ['陈皮', '高良姜', '丁香'],
    contraindicatedMaterials: ['黄连', '黄芩'],
    contraindicatedGroups: [
      { group: '孕妇', level: '适用', reason: '理气安胎，安全温和' },
      { group: '儿童', level: '适用', reason: '温润淡香，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '温和香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《本草纲目》',
      quote: '砂仁，补肺醒脾，养胃益肾，理元气，通滞气。',
      explanation: '砂仁具有化湿开胃、温脾止泻的功效，温润淡香，能健脾和香，是合香中的重要调和药。'
    }
  },
  {
    id: '58',
    name: '合欢皮',
    alias: ['合欢'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Albizia%20julibrissin%20bark%20traditional%20Chinese%20medicine%20aromatic&image_size=square',
    nature: '甘，平',
    meridian: ['归心经', '肝经'],
    aromaType: '调和香',
    efficacy: ['解郁安神', '活血消肿'],
    scenarios: ['睡前助眠', '居家安神', '办公环境'],
    usageMethods: [
      { type: '香囊', description: '制作安神香囊，解郁安神' },
      { type: '熏香', description: '燃烧熏香，调和安神' },
      { type: '香枕', description: '装入枕芯，助眠安神' }
    ],
    compatibleMaterials: ['酸枣仁', '茯神', '远志'],
    contraindicatedMaterials: ['薄荷', '菊花'],
    contraindicatedGroups: [
      { group: '孕妇', level: '慎用', reason: '活血行气，过量可能影响胎气' },
      { group: '儿童', level: '适用', reason: '淡柔木香，无刺激性' },
      { group: '过敏体质', level: '适用', reason: '温和香气，不易过敏' }
    ],
    ancientRecords: {
      source: '《神农本草经》',
      quote: '合欢皮，主安五脏，和心志，令人欢乐无忧。',
      explanation: '合欢皮具有解郁安神、活血消肿的功效，淡柔木香，能安神调和，是合香中的重要调和药。'
    }
  }
];

export const fragranceRecipes: FragranceRecipe[] = [
  {
    id: '1',
    name: '安神助眠香',
    scenario: '睡前助眠',
    constitution: ['气虚体质', '血虚体质'],
    seasons: ['秋', '冬'],
    ingredients: [
      { name: '沉香', proportion: '1份' },
      { name: '檀香', proportion: '1份' },
      { name: '安息香', proportion: '0.5份' },
      { name: '茯神', proportion: '0.5份' },
      { name: '酸枣仁', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将沉香、檀香、安息香、茯神、酸枣仁分别研成细粉' },
      { step: 2, description: '按比例混合均匀，装入香囊或香炉' },
      { step: 3, description: '睡前1小时点燃熏香，或放置枕边闻香' },
      { step: 4, description: '每次使用时长30-60分钟' }
    ],
    principle: '沉香行气安神，檀香温中安神，安息香开窍安神，茯神宁心安神，酸枣仁养心安神。五者配伍，共奏安神助眠之效，适用于心神不宁、失眠多梦的人群。',
    precautions: [
      { type: 'duration', content: '每次使用不超过1小时' },
      { type: 'contraindication', content: '孕妇慎用，过敏体质慎用' },
      { type: 'replacement', content: '每周更换一次香材' }
    ]
  },
  {
    id: '2',
    name: '祛湿辟秽香',
    scenario: '居家祛湿',
    constitution: ['痰湿体质', '湿热体质'],
    seasons: ['夏', '梅雨季'],
    ingredients: [
      { name: '藿香', proportion: '2份' },
      { name: '艾叶', proportion: '1份' },
      { name: '佩兰', proportion: '1份' },
      { name: '苍术', proportion: '0.5份' },
      { name: '砂仁', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将藿香、艾叶、佩兰、苍术、砂仁研成粗粉' },
      { step: 2, description: '混合均匀后装入布袋，制成香囊' },
      { step: 3, description: '悬挂于室内通风处，或随身佩戴' },
      { step: 4, description: '也可煮水熏蒸室内，效果更佳' }
    ],
    principle: '藿香、佩兰芳香化湿，艾叶、苍术温散祛湿，砂仁化湿醒脾。五者配伍，具有芳香化浊、祛湿辟秽的功效，适用于潮湿闷热的夏季或梅雨季。',
    precautions: [
      { type: 'duration', content: '室内使用可持续3-5天' },
      { type: 'contraindication', content: '孕早期慎用艾叶，过敏体质慎用' },
      { type: 'replacement', content: '每5-7天更换一次香材' }
    ]
  },
  {
    id: '3',
    name: '疏肝解郁香',
    scenario: '办公室解压',
    constitution: ['肝郁体质'],
    seasons: ['春'],
    ingredients: [
      { name: '陈皮', proportion: '1份' },
      { name: '薄荷', proportion: '1份' },
      { name: '檀香', proportion: '0.5份' },
      { name: '玫瑰花', proportion: '0.5份' },
      { name: '香橼', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将陈皮、薄荷、檀香、香橼研成细粉' },
      { step: 2, description: '加入玫瑰花干品，混合均匀' },
      { step: 3, description: '装入香囊，放置于办公桌上或随身佩戴' },
      { step: 4, description: '每天闻香2-3次，每次5-10分钟' }
    ],
    principle: '陈皮、檀香理气健脾，薄荷、玫瑰花、香橼疏肝解郁。五者配伍，具有疏肝理气、解郁安神的功效，适用于工作压力大、情绪不畅的人群。',
    precautions: [
      { type: 'duration', content: '每次闻香不超过10分钟' },
      { type: 'contraindication', content: '孕妇慎用薄荷' },
      { type: 'replacement', content: '每7-10天更换一次香材' }
    ]
  },
  {
    id: '4',
    name: '四季通用防疫香',
    scenario: '换季辟秽',
    constitution: ['平和体质', '所有体质'],
    seasons: ['春', '夏', '秋', '冬'],
    ingredients: [
      { name: '藿香', proportion: '1份' },
      { name: '艾叶', proportion: '1份' },
      { name: '苍术', proportion: '1份' },
      { name: '薄荷', proportion: '0.5份' },
      { name: '白芷', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将藿香、艾叶、苍术、薄荷、白芷研成粗粉' },
      { step: 2, description: '混合均匀后装入布袋' },
      { step: 3, description: '悬挂于门口、窗户等通风处' },
      { step: 4, description: '定期更换，保持香气清新' }
    ],
    principle: '藿香、苍术芳香辟秽，艾叶温散祛湿，薄荷清凉解毒，白芷祛风通窍。五者配伍，具有芳香辟秽、清热解毒的功效，适用于四季防疫。',
    precautions: [
      { type: 'duration', content: '室内可持续使用7-10天' },
      { type: 'contraindication', content: '孕早期慎用艾叶，过敏体质慎用' },
      { type: 'replacement', content: '每7-10天更换一次香材' }
    ]
  },
  {
    id: '5',
    name: '冬季温阳香',
    scenario: '冬季温阳',
    constitution: ['阳虚体质', '气虚体质'],
    seasons: ['冬'],
    ingredients: [
      { name: '丁香', proportion: '1份' },
      { name: '肉桂', proportion: '1份' },
      { name: '檀香', proportion: '1份' },
      { name: '艾叶', proportion: '0.5份' },
      { name: '高良姜', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将丁香、肉桂、檀香、艾叶、高良姜研成细粉' },
      { step: 2, description: '混合均匀后装入香囊或香炉' },
      { step: 3, description: '冬季室内点燃熏香，或放置于枕边' },
      { step: 4, description: '每次使用时长30-60分钟' }
    ],
    principle: '丁香、肉桂温中助阳，檀香温中安神，艾叶温经散寒，高良姜温散寒气。五者配伍，具有温中散寒、助阳安神的功效，适用于阳虚怕冷的人群冬季使用。',
    precautions: [
      { type: 'duration', content: '每次使用不超过1小时' },
      { type: 'contraindication', content: '孕妇慎用，湿热体质不宜使用' },
      { type: 'replacement', content: '每5-7天更换一次香材' }
    ]
  },
  {
    id: '6',
    name: '夏季清凉香',
    scenario: '夏季防暑',
    constitution: ['湿热体质', '阴虚体质'],
    seasons: ['夏'],
    ingredients: [
      { name: '薄荷', proportion: '2份' },
      { name: '金银花', proportion: '1份' },
      { name: '藿香', proportion: '1份' },
      { name: '菊花', proportion: '0.5份' },
      { name: '青蒿', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将薄荷、金银花、藿香、菊花、青蒿研成粗粉' },
      { step: 2, description: '混合均匀后装入布袋，制成清凉香囊' },
      { step: 3, description: '悬挂于室内或随身佩戴' },
      { step: 4, description: '也可煮水熏蒸，清凉解暑' }
    ],
    principle: '薄荷、菊花、青蒿疏散风热，金银花清热解毒，藿香芳香化湿。五者配伍，具有清热解暑、芳香化湿的功效，适用于夏季防暑降温。',
    precautions: [
      { type: 'duration', content: '室内可持续使用5-7天' },
      { type: 'contraindication', content: '孕妇慎用薄荷' },
      { type: 'replacement', content: '每5-7天更换一次香材' }
    ]
  },
  {
    id: '7',
    name: '开窍通鼻香',
    scenario: '鼻塞头痛',
    constitution: ['特禀体质', '气虚体质'],
    seasons: ['春', '冬'],
    ingredients: [
      { name: '辛夷花', proportion: '1份' },
      { name: '薄荷', proportion: '1份' },
      { name: '白芷', proportion: '1份' },
      { name: '川芎', proportion: '0.5份' },
      { name: '石菖蒲', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将辛夷花、薄荷、白芷、川芎、石菖蒲研成细粉' },
      { step: 2, description: '混合均匀后装入香囊' },
      { step: 3, description: '放置于鼻前闻香，或悬挂于室内通风处' },
      { step: 4, description: '每次闻香5-10分钟' }
    ],
    principle: '辛夷花、白芷、川芎祛风通窍，薄荷、石菖蒲开窍醒神。五者配伍，具有开窍通鼻、缓解头痛的功效，适用于鼻塞头痛的人群。',
    precautions: [
      { type: 'duration', content: '每次闻香不超过10分钟' },
      { type: 'contraindication', content: '孕妇慎用川芎' },
      { type: 'replacement', content: '每5-7天更换一次香材' }
    ]
  },
  {
    id: '8',
    name: '活血止痛香',
    scenario: '气血不畅',
    constitution: ['血瘀体质'],
    seasons: ['秋', '冬'],
    ingredients: [
      { name: '乳香', proportion: '1份' },
      { name: '没药', proportion: '1份' },
      { name: '沉香', proportion: '1份' },
      { name: '降真香', proportion: '0.5份' },
      { name: '玫瑰花', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将乳香、没药、沉香、降真香研成细粉' },
      { step: 2, description: '加入玫瑰花干品，混合均匀' },
      { step: 3, description: '装入香囊或香炉，点燃熏香' },
      { step: 4, description: '每次使用时长30分钟' }
    ],
    principle: '乳香、没药活血止痛，沉香、降真香行气活血，玫瑰花理气活血。五者配伍，具有活血化瘀、止痛通经的功效，适用于气血不畅的人群。',
    precautions: [
      { type: 'duration', content: '每次使用不超过30分钟' },
      { type: 'contraindication', content: '孕妇慎用，月经期间慎用' },
      { type: 'replacement', content: '每3-5天更换一次香材' }
    ]
  },
  {
    id: '9',
    name: '醒脾开胃香',
    scenario: '食欲不振',
    constitution: ['脾虚体质', '痰湿体质'],
    seasons: ['夏', '秋'],
    ingredients: [
      { name: '陈皮', proportion: '1份' },
      { name: '甘松', proportion: '1份' },
      { name: '砂仁', proportion: '1份' },
      { name: '丁香', proportion: '0.5份' },
      { name: '高良姜', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将陈皮、甘松、砂仁、丁香、高良姜研成细粉' },
      { step: 2, description: '混合均匀后装入香囊' },
      { step: 3, description: '放置于餐桌或厨房，餐前闻香' },
      { step: 4, description: '每次闻香5-10分钟' }
    ],
    principle: '陈皮理气健脾，甘松开郁醒脾，砂仁化湿开胃，丁香、高良姜温中散寒。五者配伍，具有醒脾开胃、增进食欲的功效，适用于食欲不振的人群。',
    precautions: [
      { type: 'duration', content: '每次闻香不超过10分钟' },
      { type: 'contraindication', content: '孕妇慎用丁香' },
      { type: 'replacement', content: '每5-7天更换一次香材' }
    ]
  },
  {
    id: '10',
    name: '清心降火香',
    scenario: '心烦燥热',
    constitution: ['阴虚体质', '湿热体质'],
    seasons: ['夏'],
    ingredients: [
      { name: '薄荷', proportion: '2份' },
      { name: '菊花', proportion: '1份' },
      { name: '龙脑', proportion: '0.5份' },
      { name: '青蒿', proportion: '0.5份' },
      { name: '侧柏', proportion: '0.5份' }
    ],
    steps: [
      { step: 1, description: '将薄荷、菊花、青蒿、侧柏研成细粉' },
      { step: 2, description: '加入龙脑，混合均匀' },
      { step: 3, description: '装入香囊或放入香炉' },
      { step: 4, description: '点燃熏香或直接闻香' }
    ],
    principle: '薄荷、菊花、青蒿疏散风热，龙脑清心开窍，侧柏凉血清热。五者配伍，具有清心降火、缓解燥热的功效，适用于心烦燥热的人群。',
    precautions: [
      { type: 'duration', content: '每次使用不超过30分钟' },
      { type: 'contraindication', content: '孕妇慎用龙脑' },
      { type: 'replacement', content: '每3-5天更换一次香材' }
    ]
  }
];

export const constitutions: Constitution[] = [
  {
    id: '1',
    name: '平和体质',
    characteristics: ['体态匀称', '面色红润', '精力充沛', '睡眠良好', '二便正常'],
    suitableMaterials: ['沉香', '檀香', '藿香', '薄荷', '陈皮', '桂花', '茉莉花', '零陵香'],
    avoidedMaterials: [],
    recommendedRecipes: ['四季通用防疫香']
  },
  {
    id: '2',
    name: '气虚体质',
    characteristics: ['气短懒言', '容易疲劳', '精神不振', '易出汗', '面色苍白'],
    suitableMaterials: ['沉香', '檀香', '丁香', '甘草', '茯神', '酸枣仁', '安息香', '乌药'],
    avoidedMaterials: ['薄荷', '金银花', '青蒿', '菊花'],
    recommendedRecipes: ['安神助眠香', '冬季温阳香']
  },
  {
    id: '3',
    name: '阳虚体质',
    characteristics: ['畏寒怕冷', '手脚冰凉', '面色苍白', '大便稀溏', '夜尿多'],
    suitableMaterials: ['丁香', '肉桂', '艾叶', '檀香', '高良姜', '乌药', '花椒', '八角茴香'],
    avoidedMaterials: ['薄荷', '金银花', '菊花', '青蒿', '龙脑'],
    recommendedRecipes: ['冬季温阳香']
  },
  {
    id: '4',
    name: '阴虚体质',
    characteristics: ['口干咽燥', '手足心热', '潮热盗汗', '大便干结', '舌红少苔'],
    suitableMaterials: ['薄荷', '金银花', '菊花', '龙脑', '侧柏', '青蒿', '栀子花'],
    avoidedMaterials: ['丁香', '肉桂', '艾叶', '高良姜', '花椒'],
    recommendedRecipes: ['夏季清凉香']
  },
  {
    id: '5',
    name: '痰湿体质',
    characteristics: ['身体沉重', '腹部肥胖', '痰多黏稠', '大便黏腻', '舌苔厚腻'],
    suitableMaterials: ['藿香', '佩兰', '苍术', '陈皮', '砂仁', '草果', '香茅', '木香'],
    avoidedMaterials: ['沉香', '檀香', '丁香', '肉桂', '安息香'],
    recommendedRecipes: ['祛湿辟秽香']
  },
  {
    id: '6',
    name: '湿热体质',
    characteristics: ['面部油腻', '口苦口臭', '大便黏腻', '小便短黄', '易生痤疮'],
    suitableMaterials: ['藿香', '薄荷', '金银花', '青蒿', '佩兰', '陈皮', '木香'],
    avoidedMaterials: ['丁香', '肉桂', '艾叶', '檀香', '高良姜', '花椒'],
    recommendedRecipes: ['祛湿辟秽香', '夏季清凉香']
  },
  {
    id: '7',
    name: '血瘀体质',
    characteristics: ['面色晦暗', '皮肤粗糙', '容易瘀斑', '月经不调', '舌质紫暗'],
    suitableMaterials: ['沉香', '檀香', '玫瑰花', '川芎', '乳香', '没药', '降真香'],
    avoidedMaterials: ['薄荷', '菊花', '青蒿'],
    recommendedRecipes: ['安神助眠香', '疏肝解郁香']
  },
  {
    id: '8',
    name: '气郁体质',
    characteristics: ['情绪低落', '焦虑抑郁', '容易失眠', '善太息', '胸胁胀痛'],
    suitableMaterials: ['陈皮', '薄荷', '檀香', '玫瑰花', '香橼', '佛手', '香附', '茉莉花'],
    avoidedMaterials: ['艾叶', '肉桂', '高良姜', '花椒'],
    recommendedRecipes: ['疏肝解郁香']
  },
  {
    id: '9',
    name: '特禀体质',
    characteristics: ['容易过敏', '皮肤瘙痒', '打喷嚏', '流鼻涕', '哮喘'],
    suitableMaterials: ['藿香', '佩兰', '陈皮', '甘草', '零陵香', '甘松'],
    avoidedMaterials: ['沉香', '檀香', '丁香', '薄荷', '龙脑', '乳香', '没药'],
    recommendedRecipes: ['四季通用防疫香']
  }
];

export const seasonalFragrances: SeasonalFragrance[] = [
  {
    season: '春',
    keyPoints: '春季肝气旺盛，宜疏肝解郁、清新安神',
    recommendedMaterials: ['陈皮', '薄荷', '檀香', '玫瑰花', '香橼', '佛手', '香附', '茉莉花'],
    recommendedRecipes: ['疏肝解郁香'],
    solarTerms: [
      { name: '立春', description: '万物复苏，宜疏肝理气', suitableMaterials: ['陈皮', '薄荷', '香附'] },
      { name: '雨水', description: '降雨增多，宜祛湿健脾', suitableMaterials: ['藿香', '陈皮', '佩兰'] },
      { name: '惊蛰', description: '春雷初响，宜清新开窍', suitableMaterials: ['薄荷', '檀香', '石菖蒲'] },
      { name: '春分', description: '昼夜平分，宜平衡阴阳', suitableMaterials: ['沉香', '薄荷', '茉莉花'] },
      { name: '清明', description: '气候清爽，宜清肺润燥', suitableMaterials: ['薄荷', '金银花', '菊花'] },
      { name: '谷雨', description: '雨量增多，宜祛湿安神', suitableMaterials: ['藿香', '佩兰', '砂仁'] }
    ]
  },
  {
    season: '夏',
    keyPoints: '夏季炎热潮湿，宜清热解暑、芳香化湿',
    recommendedMaterials: ['薄荷', '金银花', '藿香', '佩兰', '青蒿', '香茅', '菊花', '栀子花'],
    recommendedRecipes: ['夏季清凉香', '祛湿辟秽香'],
    solarTerms: [
      { name: '立夏', description: '气温升高，宜清热解暑', suitableMaterials: ['薄荷', '金银花', '菊花'] },
      { name: '小满', description: '雨水增多，宜祛湿健脾', suitableMaterials: ['藿香', '佩兰', '苍术'] },
      { name: '芒种', description: '湿热交蒸，宜清热祛湿', suitableMaterials: ['薄荷', '藿香', '青蒿'] },
      { name: '夏至', description: '阳气最盛，宜清心降火', suitableMaterials: ['薄荷', '菊花', '龙脑'] },
      { name: '小暑', description: '天气炎热，宜解暑降温', suitableMaterials: ['薄荷', '金银花', '香茅'] },
      { name: '大暑', description: '酷暑难耐，宜清热化湿', suitableMaterials: ['藿香', '薄荷', '青蒿'] }
    ]
  },
  {
    season: '秋',
    keyPoints: '秋季干燥凉爽，宜润肺润燥、安神助眠',
    recommendedMaterials: ['沉香', '檀香', '薄荷', '菊花', '安息香', '茯神', '酸枣仁', '桂花'],
    recommendedRecipes: ['安神助眠香'],
    solarTerms: [
      { name: '立秋', description: '暑气渐消，宜润燥安神', suitableMaterials: ['沉香', '薄荷', '菊花'] },
      { name: '处暑', description: '秋高气爽，宜清心安神', suitableMaterials: ['檀香', '薄荷', '桂花'] },
      { name: '白露', description: '天气转凉，宜温润安神', suitableMaterials: ['沉香', '檀香', '安息香'] },
      { name: '秋分', description: '昼夜平分，宜平衡调理', suitableMaterials: ['沉香', '薄荷', '玫瑰花'] },
      { name: '寒露', description: '寒气渐生，宜温散寒气', suitableMaterials: ['檀香', '艾叶', '高良姜'] },
      { name: '霜降', description: '霜降时节，宜温中散寒', suitableMaterials: ['檀香', '丁香', '乌药'] }
    ]
  },
  {
    season: '冬',
    keyPoints: '冬季寒冷干燥，宜温阳散寒、安神助眠',
    recommendedMaterials: ['丁香', '肉桂', '艾叶', '檀香', '高良姜', '乌药', '降真香', '安息香'],
    recommendedRecipes: ['冬季温阳香', '安神助眠香'],
    solarTerms: [
      { name: '立冬', description: '冬季开始，宜温阳散寒', suitableMaterials: ['艾叶', '檀香', '高良姜'] },
      { name: '小雪', description: '初雪降临，宜温中助阳', suitableMaterials: ['丁香', '肉桂', '乌药'] },
      { name: '大雪', description: '寒气逼人，宜温阳祛寒', suitableMaterials: ['艾叶', '肉桂', '花椒'] },
      { name: '冬至', description: '阳气始生，宜温补阳气', suitableMaterials: ['丁香', '檀香', '降真香'] },
      { name: '小寒', description: '天气寒冷，宜温阳散寒', suitableMaterials: ['艾叶', '丁香', '高良姜'] },
      { name: '大寒', description: '一年最冷，宜温中助阳', suitableMaterials: ['肉桂', '檀香', '安息香'] }
    ]
  }
];

export const efficacyCategories: EfficacyCategory[] = [
  {
    id: '1',
    name: '安神助眠',
    description: '舒缓情绪，帮助入睡，改善睡眠质量',
    icon: 'Moon',
    materials: ['沉香', '檀香', '安息香', '茯神', '酸枣仁', '远志', '合欢皮', '龙脑', '石菖蒲'],
    recipes: ['安神助眠香']
  },
  {
    id: '2',
    name: '疏肝解郁',
    description: '缓解压力，调节情绪，舒畅肝气',
    icon: 'Wind',
    materials: ['陈皮', '薄荷', '玫瑰花', '香橼', '佛手', '香附', '茉莉花', '桂花'],
    recipes: ['疏肝解郁香']
  },
  {
    id: '3',
    name: '祛湿辟秽',
    description: '去除湿气，净化空气，预防疫病',
    icon: 'Droplets',
    materials: ['藿香', '艾叶', '佩兰', '苍术', '砂仁', '草果', '香茅', '青蒿'],
    recipes: ['祛湿辟秽香', '四季通用防疫香']
  },
  {
    id: '4',
    name: '醒脾开胃',
    description: '促进消化，增进食欲，调理脾胃',
    icon: 'Utensils',
    materials: ['陈皮', '檀香', '丁香', '甘松', '砂仁', '高良姜', '木香', '山柰'],
    recipes: ['疏肝解郁香']
  },
  {
    id: '5',
    name: '清心降火',
    description: '清热解暑，清心除烦，缓解燥热',
    icon: 'Flame',
    materials: ['薄荷', '金银花', '菊花', '青蒿', '栀子花', '龙脑', '侧柏', '青蒿'],
    recipes: ['夏季清凉香']
  },
  {
    id: '6',
    name: '温阳散寒',
    description: '温暖身体，驱散寒气，增强阳气',
    icon: 'Sun',
    materials: ['丁香', '肉桂', '艾叶', '高良姜', '乌药', '降真香', '花椒', '八角茴香'],
    recipes: ['冬季温阳香']
  },
  {
    id: '7',
    name: '开窍通鼻',
    description: '疏通鼻窍，缓解鼻塞，清新头脑',
    icon: 'Wind',
    materials: ['辛夷花', '细辛', '薄荷', '白芷', '川芎', '石菖蒲', '龙脑', '苍耳子'],
    recipes: ['四季通用防疫香']
  },
  {
    id: '8',
    name: '活血止痛',
    description: '活血化瘀，缓解疼痛，通经活络',
    icon: 'Flame',
    materials: ['乳香', '没药', '沉香', '降真香', '玫瑰花', '川芎', '苏合香'],
    recipes: ['安神助眠香']
  }
];

export const usageMethods: UsageMethodCategory[] = [
  {
    id: '1',
    name: '香囊',
    description: '将香材装入布袋，随身佩戴或悬挂室内',
    icon: 'Bag',
    steps: ['选择合适的香材', '研成细粉或剪碎', '装入透气布袋', '系紧袋口'],
    tips: ['选择透气的棉布袋', '避免香材接触皮肤', '定期更换香材'],
    suitableMaterials: ['藿香', '艾叶', '薄荷', '陈皮', '佩兰', '苍术', '砂仁', '丁香', '零陵香', '甘松']
  },
  {
    id: '2',
    name: '熏香',
    description: '点燃香材或香品，通过烟雾散发香气',
    icon: 'Flame',
    steps: ['选择合适的香炉', '放入香材或香品', '点燃香材', '关闭门窗让香气弥漫'],
    tips: ['保持室内通风', '避免长时间熏香', '注意防火安全'],
    suitableMaterials: ['沉香', '檀香', '艾叶', '安息香', '乳香', '没药', '降真香', '龙脑']
  },
  {
    id: '3',
    name: '香枕',
    description: '将香材装入枕芯，睡觉时闻香养生',
    icon: 'Bed',
    steps: ['选择合适的香材', '研成细粉', '装入透气枕芯袋', '放入枕头中'],
    tips: ['香材用量不宜过多', '定期更换香材', '避免香材直接接触面部'],
    suitableMaterials: ['沉香', '檀香', '陈皮', '茯神', '酸枣仁', '远志', '合欢皮', '石菖蒲']
  },
  {
    id: '4',
    name: '煮香',
    description: '将香材煮水，通过水蒸气散发香气',
    icon: 'Kettle',
    steps: ['选择合适的香材', '加水煮沸', '转小火慢煮', '让香气随蒸汽散发'],
    tips: ['保持室内通风', '煮香时间不宜过长', '注意防止烫伤'],
    suitableMaterials: ['藿香', '薄荷', '陈皮', '艾叶', '佩兰', '紫苏叶', '菊花', '金银花']
  },
  {
    id: '5',
    name: '闻香',
    description: '直接闻香材的香气，简单方便',
    icon: 'Smell',
    steps: ['选择合适的香材', '放在鼻前', '深呼吸闻香', '每次闻香3-5分钟'],
    tips: ['保持距离，避免刺激', '每次闻香时间不宜过长', '选择新鲜香材'],
    suitableMaterials: ['薄荷', '金银花', '陈皮', '桂花', '玫瑰花', '茉莉花', '龙脑']
  },
  {
    id: '6',
    name: '扩香',
    description: '使用扩香器散发香气，均匀持久',
    icon: 'Diffuser',
    steps: ['选择合适的香材精油', '加入扩香器', '加水至刻度线', '开启扩香器'],
    tips: ['使用天然精油', '控制精油用量', '定期清洁扩香器'],
    suitableMaterials: ['沉香', '檀香', '薄荷', '桂花', '茉莉花', '龙脑', '薰衣草']
  }
];

export const safetyWarnings: SafetyWarning[] = [
  {
    id: '1',
    title: '孕妇慎用提示',
    content: '部分香材如艾叶、薄荷、丁香等具有行气活血作用，孕妇使用前请咨询专业医师，孕早期尤其需要谨慎。',
    severity: 'high',
    targetGroups: ['孕妇']
  },
  {
    id: '2',
    title: '儿童使用注意',
    content: '儿童使用香疗时，应选择温和的香材，用量要适当减少，避免使用过于浓烈的香气，且必须在成人监护下使用。',
    severity: 'high',
    targetGroups: ['儿童']
  },
  {
    id: '3',
    title: '过敏体质警示',
    content: '过敏体质者使用香疗前，建议先进行皮肤敏感测试，避免接触沉香、檀香、丁香等香气浓烈的香材，如出现过敏反应应立即停止使用。',
    severity: 'high',
    targetGroups: ['过敏体质']
  },
  {
    id: '4',
    title: '呼吸道疾病患者注意',
    content: '哮喘、慢性支气管炎等呼吸道疾病患者，应避免使用熏香、艾叶等产生烟雾的香疗方式，以免刺激呼吸道，加重病情。',
    severity: 'high',
    targetGroups: ['哮喘患者', '慢性支气管炎患者']
  },
  {
    id: '5',
    title: '使用时长提醒',
    content: '每次使用香疗的时间不宜过长，一般建议在30-60分钟以内，长时间使用可能导致头晕、恶心等不适。',
    severity: 'medium',
    targetGroups: ['所有人群']
  },
  {
    id: '6',
    title: '防火安全提示',
    content: '使用熏香等需要点燃的香疗方式时，务必注意防火安全，远离易燃物品，使用完毕后确保彻底熄灭。',
    severity: 'high',
    targetGroups: ['所有人群']
  }
];

export const searchKeywords = {
  professional: ['沉香香疗', '藿香辟秽', '檀香安神', '芳香开窍', '理气健脾', '温阳散寒', '清热解暑', '祛湿化浊'],
  colloquial: ['睡觉助眠香', '家里祛湿熏香', '办公室解压香', '孕妇可用香囊', '儿童安全香材', '夏季防暑香', '冬季暖身香', '换季防疫香']
};

export const semanticMapping: Record<string, string[]> = {
  '失眠': ['安神助眠', '沉香', '檀香', '安神助眠香'],
  '助眠': ['安神助眠', '沉香', '檀香', '安神助眠香'],
  '睡眠': ['安神助眠', '沉香', '檀香', '安神助眠香'],
  '压力': ['疏肝解郁', '陈皮', '薄荷', '疏肝解郁香'],
  '焦虑': ['疏肝解郁', '陈皮', '薄荷', '疏肝解郁香'],
  '抑郁': ['疏肝解郁', '陈皮', '薄荷', '疏肝解郁香'],
  '祛湿': ['祛湿辟秽', '藿香', '艾叶', '祛湿辟秽香'],
  '潮湿': ['祛湿辟秽', '藿香', '艾叶', '祛湿辟秽香'],
  '防疫': ['祛湿辟秽', '藿香', '艾叶', '四季通用防疫香'],
  '辟秽': ['祛湿辟秽', '藿香', '艾叶', '四季通用防疫香'],
  '开胃': ['醒脾开胃', '陈皮', '檀香', '疏肝解郁香'],
  '消化': ['醒脾开胃', '陈皮', '檀香', '疏肝解郁香'],
  '清热': ['清心降火', '薄荷', '金银花', '夏季清凉香'],
  '解暑': ['清心降火', '薄荷', '金银花', '夏季清凉香'],
  '怕冷': ['温阳散寒', '丁香', '肉桂', '冬季温阳香'],
  '阳虚': ['温阳散寒', '丁香', '肉桂', '冬季温阳香'],
  '冬季': ['温阳散寒', '丁香', '肉桂', '冬季温阳香'],
  '夏季': ['清心降火', '薄荷', '金银花', '夏季清凉香'],
  '孕妇': ['藿香', '陈皮', '四季通用防疫香'],
  '儿童': ['藿香', '陈皮', '四季通用防疫香'],
  '过敏': ['藿香', '佩兰', '四季通用防疫香'],
  '香囊': ['藿香', '艾叶', '陈皮'],
  '熏香': ['沉香', '檀香', '艾叶'],
  '香枕': ['沉香', '檀香', '陈皮'],
  '煮香': ['藿香', '薄荷', '陈皮']
};