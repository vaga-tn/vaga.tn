export interface ChangelogEntry {
  id: string;
  date: string;
  leftTitle: string;
  rightTitle?: string;
  description: string[];
  listSection?: {
    title: string;
    items: string[];
  };
  linksSection?: {
    title: string;
    links: { label: string; url: string }[];
  };
}

export const changelogData: ChangelogEntry[] = [
  {
    id: "update-1",
    date: "Mars 2026",
    leftTitle: "Lancement de Vaga.tn",
    rightTitle: "Lancement de Vaga.tn",
    description: [
      "Vaga.tn est le site web officiel pour l'ERP Tunisien Vaga.",
    ],
    listSection: {
      title: "Vaga est un ERP multi-sociétés, self-hosted, développé en Tunisie.",
      items: [
        "comming soon"
      ]
    }
  }
];
