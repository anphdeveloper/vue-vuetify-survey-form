export const CATEGORY_PANEL_DATA = [
  {
    id: 0,
    panelTitle: "Stationär",
    panelDescription: "Maximales Wohlbefinden, <br />sowie beste Leistungen.",
    panelFeature: [
      "Behandlung durch den Chefarzt",
      "Ein- oder Zweibettzimmer",
      "Freie Krankenhausauswahl"
    ],
    panelBackground: "tertiary",
    checked: false,
    expanded: false,
    selectedId: 0,
    selectedProductName: "",
    selectedRate: 0,
    selectedProductPdfLink: "",
    panelDocsLink: "MediGroup_Stationaer.pdf"
  },
  {
    id: 1,
    panelTitle: "Zahn",
    panelDescription:
      "Optimaler Schutz vor hohen<br/> Selbstkosten beim Zahnarzt.",
    panelFeature: [
      "Zahnbehandlung 100%",
      "Zahnersatz, Inlays & Implantate",
      "Prof. Zahnreinigung 150€/Jahr"
    ],
    panelBackground: "quinary",
    checked: false,
    expanded: false,
    selectedId: 0,
    selectedProductName: "",
    selectedRate: 0,
    selectedProductPdfLink: "",
    panelDocsLink: "MediGroup_Z_Duo.pdf"
  },
  {
    id: 2,
    panelTitle: "Ambulant",
    panelDescription:
      "Keine Extrakosten bei ärztlichen<br/> Leistungen für bessere Gesundheit.",
    panelFeature: [
      "Erstattung für Arzneimittel 100%",
      "Heilpraktiker 80%",
      "Sehhilfen 120€/Jahr"
    ],
    panelBackground: "primary",
    checked: false,
    expanded: false,
    selectedId: 0,
    selectedProductName: "",
    selectedRate: 0,
    selectedProductPdfLink: "",
    panelDocsLink: "MediGroup_A.pdf"
  },
  {
    id: 3,
    panelTitle: "Vorsorge",
    panelDescription:
      "Mit dem Vorsorgepaket sind<br /> Sie bestens geschützt & versorgt.",
    panelFeature: [
      "Vorsorge 100%",
      "Schutzimpfungen 100%",
      "Erstattung für Präventionen"
    ],
    panelBackground: "senary",
    checked: false,
    expanded: false,
    selectedId: 0,
    selectedProductName: "",
    selectedRate: 0,
    selectedProductPdfLink: "",
    panelDocsLink: "MediGroup_Vorsorge.pdf"
  }
];

export const STATIONARY_PANEL_DATA = [
  {
    id: 0,
    panelTitle: "S1 - 1-Bett-Zimmer",
    haveRadioOption: true,
    panelBackground: "white",
    panelRate: "17,96",
    checked: false,
    isTop: true,
    categoryColor: "#035370",
    pdfLink: "Tarif_MediGroup_S1.pdf"
  },
  {
    id: 1,
    panelTitle: "S2 - 2-Bett-Zimmer",
    haveRadioOption: true,
    panelBackground: "white",
    panelRate: "14,96",
    checked: false,
    isTop: false,
    categoryColor: "#035370",
    pdfLink: "Tarif_MediGroup_S2.pdf"
  },
  {
    id: 2,
    panelTitle: "Clinic Plus - 2-Bett-Zimmer",
    haveRadioOption: true,
    panelBackground: "white",
    panelRate: "21,96",
    checked: false,
    isTop: false,
    categoryColor: "#035370",
    pdfLink: "Tarif_MediClinic_Plus.pdf"
  }
];

export const TOOTH_PANEL_DATA = [
  {
    id: 0,
    panelTitle: "MediGroup Z Duo",
    haveRadioOption: false,
    panelBackground: "white",
    panelRate: "0",
    checked: false,
    isTop: false,
    categoryColor: "#4C9BB0",
    pdfLink: "Tarif_MediGroup_Z_Duo.pdf"
  }
];

export const OUTPATIENT_PANEL_DATA = [
  {
    id: 0,
    panelTitle: "MediGroup A",
    haveRadioOption: false,
    panelBackground: "white",
    panelRate: "0",
    checked: false,
    isTop: false,
    categoryColor: "#00718F",
    pdfLink: "Tarif_MediGroup_A.pdf"
  }
];
export const PREVENTION_PANEL_DATA = [
  {
    id: 0,
    panelTitle: "Basis",
    haveRadioOption: true,
    panelBackground: "white",
    panelRate: "0",
    checked: false,
    isTop: false,
    categoryColor: "#3C8085",
    pdfLink: "Tarif_MediGroup_V_Basis.pdf"
  },
  {
    id: 1,
    panelTitle: "Premium",
    haveRadioOption: true,
    panelBackground: "white",
    panelRate: "0",
    checked: false,
    isTop: false,
    categoryColor: "#3C8085",
    pdfLink: "Tarif_MediGroup_V_Premium.pdf"
  }
];

export const INFORMATION_LINK = "Allgemeine_Rechtliche_Belehrungen.pdf";
