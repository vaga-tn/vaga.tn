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
    id: "update-3",
    date: "coming soon",
    leftTitle: "V1.2",
    rightTitle: "New Features",
    description: [],
    listSection: {
      title: "",
      items: [
        "POS system",
        "Calendar system",
      ],
    }
  },
  {
    id: "update-2",
    date: "Apr 2026",
    leftTitle: "V1.0",
    rightTitle: "Stable release",
    description: [],
    listSection: {
      title: "",
      items: [
        "Manage Company (details, addresses, staff, vehicles, equipment...)",
        "Manage clients & suppliers",
        "Manage sales & purchases",
        "Manage assets through the drive feature",
        "Manage Payments (+ RS)",
        "Manage documents lifecycle",
        "Customize default view",
        "Multi-company support",
      ],
    }
  },
  {
    id: "update-1",
    date: "Mars 2026",
    leftTitle: "Launching Vaga.tn",
    rightTitle: "Official Website",
    description: [
      "Our official client facing website, used for capturing leads and providing transparent quote generation tool.",
    ],
  }
];
