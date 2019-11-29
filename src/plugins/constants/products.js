export const CATEGORY_PANEL_DATA = [
  {
    id: 0,
    panelTitle: "Stationär",
    panelDescription: "Maximales Wohlbefinden, <br />sowie beste Leistungen",
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
    panelDocsLink: "stationaer_alle_2019.pdf"
  },
  {
    id: 1,
    panelTitle: "Zahn",
    panelDescription:
      "Optimaler Schutz vor hohen<br/> Selbstkosten beim Zahnarzt",
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
    panelDocsLink: "MediGroup_Z_Duo_2019.pdf"
  },
  {
    id: 2,
    panelTitle: "Ambulant",
    panelDescription:
      "Keine Extrakosten bei ärztlichen<br/> Leistungen für bessere Gesundheit",
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
    panelDocsLink: "MediGroup_A_2019.pdf"
  },
  {
    id: 3,
    panelTitle: "Vorsorge",
    panelDescription:
      "Mit dem Vorsorgepaket sind<br /> Sie bestens geschützt & versorgt",
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
    panelDocsLink: "vorsorge_zusammen.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif__MediGroup_S_1_alle_.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif_MediGroup_S_2_alle.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif_MediClinic_Plus_alle_.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif_MediClinic_Plus_alle_.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif_MediGroup_A_alles_.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif_MediGroup_V_Basis_alle.pdf"
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
    pdfLink:
      "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/Tarif__MediGroup_V_Premium_alle.pdf"
  }
];

export const INFORMATION_LINK =
  "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/online_dokumente/allg._rechtliche_Belehrungen.pdf";

export const S1_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 7.82 },
  { min: 16, max: 20, rate: 15.04 },
  { min: 21, max: 30, rate: 13.58 },
  { min: 31, max: 40, rate: 17.96 },
  { min: 41, max: 50, rate: 19.02 },
  { min: 51, max: 60, rate: 32.45 },
  { min: 61, max: 65, rate: 54.51 },
  { min: 66, max: 67, rate: 74.37 }
];
export const S2_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 6.52 },
  { min: 16, max: 20, rate: 13.2 },
  { min: 21, max: 30, rate: 10.96 },
  { min: 31, max: 40, rate: 14.96 },
  { min: 41, max: 50, rate: 16.07 },
  { min: 51, max: 60, rate: 25.99 },
  { min: 61, max: 65, rate: 43.44 },
  { min: 66, max: 67, rate: 59.16 }
];
export const OUTPATIENT_A_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 9.79 },
  { min: 16, max: 20, rate: 9.16 },
  { min: 21, max: 30, rate: 9.5 },
  { min: 31, max: 40, rate: 12.39 },
  { min: 41, max: 50, rate: 14.61 },
  { min: 51, max: 60, rate: 17.0 },
  { min: 61, max: 65, rate: 19.71 },
  { min: 66, max: 67, rate: 21.84 }
];
export const TOOTH_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 6.27 },
  { min: 16, max: 20, rate: 7.24 },
  { min: 21, max: 30, rate: 17.76 },
  { min: 31, max: 40, rate: 24.99 },
  { min: 41, max: 50, rate: 30.2 },
  { min: 51, max: 60, rate: 40.53 },
  { min: 61, max: 65, rate: 48.25 },
  { min: 66, max: 67, rate: 50.66 }
];
export const PRENENTION_BASIS_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 6.48 },
  { min: 16, max: 20, rate: 6.48 },
  { min: 21, max: 30, rate: 6.48 },
  { min: 31, max: 40, rate: 6.48 },
  { min: 41, max: 50, rate: 6.48 },
  { min: 51, max: 60, rate: 6.48 },
  { min: 61, max: 65, rate: 6.48 },
  { min: 66, max: 67, rate: 6.48 }
];
export const PRENENTION_PREMIUM_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 14.27 },
  { min: 16, max: 20, rate: 14.27 },
  { min: 21, max: 30, rate: 14.27 },
  { min: 31, max: 40, rate: 14.27 },
  { min: 41, max: 50, rate: 14.27 },
  { min: 51, max: 60, rate: 14.27 },
  { min: 61, max: 65, rate: 14.27 },
  { min: 66, max: 67, rate: 14.27 }
];
export const CLINIC_PRODUCT_RATE = [
  { min: 0, max: 15, rate: 6.18 },
  { min: 16, max: 20, rate: 12.63 },
  { min: 21, max: 21, rate: 21.96 },
  { min: 22, max: 22, rate: 22.7 },
  { min: 23, max: 23, rate: 23.43 },
  { min: 24, max: 24, rate: 24.18 },
  { min: 25, max: 25, rate: 24.92 },
  { min: 26, max: 26, rate: 25.64 },
  { min: 27, max: 27, rate: 26.35 },
  { min: 28, max: 28, rate: 27.05 },
  { min: 29, max: 29, rate: 27.73 },
  { min: 30, max: 30, rate: 28.4 },
  { min: 31, max: 31, rate: 29.06 },
  { min: 32, max: 32, rate: 29.72 },
  { min: 33, max: 33, rate: 30.39 },
  { min: 34, max: 34, rate: 31.07 },
  { min: 35, max: 35, rate: 31.78 },
  { min: 36, max: 36, rate: 32.53 },
  { min: 37, max: 37, rate: 33.32 },
  { min: 38, max: 38, rate: 34.16 },
  { min: 39, max: 39, rate: 35.06 },
  { min: 40, max: 40, rate: 36.02 },
  { min: 41, max: 41, rate: 37.04 },
  { min: 42, max: 42, rate: 38.1 },
  { min: 43, max: 43, rate: 39.22 },
  { min: 44, max: 44, rate: 40.4 },
  { min: 45, max: 45, rate: 41.62 },
  { min: 46, max: 46, rate: 42.88 },
  { min: 47, max: 47, rate: 44.18 },
  { min: 48, max: 48, rate: 45.35 },
  { min: 49, max: 49, rate: 46.91 },
  { min: 50, max: 50, rate: 48.35 },
  { min: 51, max: 51, rate: 49.38 },
  { min: 52, max: 52, rate: 51.27 },
  { min: 53, max: 53, rate: 52.97 }
];
