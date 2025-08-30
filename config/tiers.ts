import { Tier, TiersEnum } from "@/types/pricing";

const commonFeatures_25 = [
  "适用导线：2.5mm² / Wire: 2.5mm²",
  "额定电流/电压：12A / 500V",
  "阻燃外壳，符合IEC标准",
  "高强度铜合金导电件",
  "导轨安装，接线方便",
];

const commonFeatures_4 = [
  "适用导线：4mm² / Wire: 4mm²",
  "额定电流/电压：20A / 500V",
  "优质铜材接触件，机械强度高",
  "阻燃外壳，安全可靠",
  "导轨安装，维护便捷",
];

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "UK-2.5N Series",
    price: "Contact for quote",
    href: "/products",
    description: "Universal terminal block for 2.5mm² wires, widely used in control systems.",
    features: commonFeatures_25,
    buttonText: "View Details",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "UK-4N Series",
    href: "/products",
    description: "Universal terminal block for 4mm² wires with higher current capacity.",
    price: "Contact for quote",
    features: commonFeatures_4,
    buttonText: "View Details",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "UK-2.5N 系列",
    price: "联系报价",
    href: "/products",
    description: "适用于2.5mm²导线的通用接线端子，广泛应用于控制系统。",
    features: commonFeatures_25,
    buttonText: "查看详情",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "UK-4N 系列",
    href: "/products",
    description: "适用于4mm²导线的通用接线端子，具有更大的电流承载能力。",
    price: "联系报价",
    features: commonFeatures_4,
    buttonText: "查看详情",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "UK-2.5N シリーズ",
    price: "お見積り",
    href: "/products",
    description: "2.5mm² 導線に対応する汎用端子台。制御システムで広く使用。",
    features: commonFeatures_25,
    buttonText: "詳細を見る",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "UK-4N シリーズ",
    href: "/products",
    description: "4mm² 導線対応、より高い電流容量の汎用端子台。",
    price: "お見積り",
    features: commonFeatures_4,
    buttonText: "詳細を見る",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "سلسلة UK-2.5N",
    price: "اتصل للحصول على عرض سعر",
    href: "/products",
    description: "قالب توصيل عالمي لأسلاك 2.5mm² ويستخدم على نطاق واسع في أنظمة التحكم.",
    features: commonFeatures_25,
    buttonText: "عرض التفاصيل",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "سلسلة UK-4N",
    href: "/products",
    description: "قالب توصيل عالمي لأسلاك 4mm² بسعة تيار أعلى.",
    price: "اتصل للحصول على عرض سعر",
    features: commonFeatures_4,
    buttonText: "عرض التفاصيل",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Serie UK-2.5N",
    price: "Consultar precio",
    href: "/products",
    description: "Bloque de terminales universal para cables de 2.5mm², ampliamente usado en control.",
    features: commonFeatures_25,
    buttonText: "Ver detalles",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Serie UK-4N",
    href: "/products",
    description: "Bloque de terminales universal para cables de 4mm² con mayor capacidad de corriente.",
    price: "Consultar precio",
    features: commonFeatures_4,
    buttonText: "Ver detalles",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Серия UK-2.5N",
    price: "Цена по запросу",
    href: "/products",
    description: "Универсальная клемма для проводов 2.5mm², широко используется в системах управления.",
    features: commonFeatures_25,
    buttonText: "Подробнее",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Серия UK-4N",
    href: "/products",
    description: "Универсальная клемма для проводов 4mm² с большей токовой нагрузкой.",
    price: "Цена по запросу",
    features: commonFeatures_4,
    buttonText: "Подробнее",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU,
};