// ZR Express — Tarifs livraison E-Commerce départ d'Oran
// domicile = livraison à domicile (DA) | bureau = Stop Desk (DA) | null = non disponible
const DELIVERY_RATES = {
  1:  { domicile: 1400, bureau: 970  },  // ADRAR
  2:  { domicile: 750,  bureau: 520  },  // CHLEF
  3:  { domicile: 950,  bureau: 670  },  // LAGHOUAT
  4:  { domicile: 800,  bureau: 520  },  // OUM EL BOUAGHI
  5:  { domicile: 800,  bureau: 520  },  // BATNA
  6:  { domicile: 800,  bureau: 520  },  // BEJAIA
  7:  { domicile: 950,  bureau: 670  },  // BISKRA
  8:  { domicile: 1050, bureau: 720  },  // BECHAR
  9:  { domicile: 750,  bureau: 520  },  // BLIDA
  10: { domicile: 800,  bureau: 520  },  // BOUIRA
  11: { domicile: 1600, bureau: 1120 },  // TAMANRASSET
  12: { domicile: 850,  bureau: 520  },  // TEBESSA
  13: { domicile: 700,  bureau: 520  },  // TLEMCEN
  14: { domicile: 750,  bureau: 520  },  // TIARET
  15: { domicile: 800,  bureau: 520  },  // TIZI OUZOU
  16: { domicile: 650,  bureau: 470  },  // ALGER
  17: { domicile: 950,  bureau: 670  },  // DJELFA
  18: { domicile: 800,  bureau: 520  },  // JIJEL
  19: { domicile: 800,  bureau: 520  },  // SETIF
  20: { domicile: 750,  bureau: 570  },  // SAIDA
  21: { domicile: 800,  bureau: 520  },  // SKIKDA
  22: { domicile: 700,  bureau: 520  },  // SIDI BEL ABBES
  23: { domicile: 850,  bureau: 520  },  // ANNABA
  24: { domicile: 850,  bureau: 520  },  // GUELMA
  25: { domicile: 800,  bureau: 520  },  // CONSTANTINE
  26: { domicile: 750,  bureau: 520  },  // MEDEA
  27: { domicile: 700,  bureau: 520  },  // MOSTAGANEM
  28: { domicile: 900,  bureau: 570  },  // M'SILA
  29: { domicile: 700,  bureau: 520  },  // MASCARA
  30: { domicile: 950,  bureau: 720  },  // OUARGLA
  31: { domicile: 400,  bureau: 370  },  // ORAN
  32: { domicile: 1000, bureau: 670  },  // EL BAYADH
  33: { domicile: null, bureau: null },  // ILLIZI — aucune livraison
  34: { domicile: 800,  bureau: 520  },  // BORDJ BOU ARRERIDJ
  35: { domicile: 800,  bureau: 520  },  // BOUMERDES
  36: { domicile: 850,  bureau: 520  },  // EL TARF
  37: { domicile: null, bureau: null },  // TINDOUF — aucune livraison
  38: { domicile: 750,  bureau: 520  },  // TISSEMSILT
  39: { domicile: 950,  bureau: 720  },  // EL OUED
  40: { domicile: 800,  bureau: 520  },  // KHENCHELA
  41: { domicile: 800,  bureau: 520  },  // SOUK AHRAS
  42: { domicile: 800,  bureau: 520  },  // TIPAZA
  43: { domicile: 800,  bureau: 520  },  // MILA
  44: { domicile: 750,  bureau: 520  },  // AIN DEFLA
  45: { domicile: 1000, bureau: 670  },  // NAAMA
  46: { domicile: 650,  bureau: 520  },  // AIN TEMOUCHENT
  47: { domicile: 950,  bureau: 670  },  // GHARDAIA
  48: { domicile: 750,  bureau: 520  },  // RELIZANE
  49: { domicile: 1400, bureau: null },  // TIMIMOUN — pas de Stop Desk
  50: { domicile: null, bureau: null },  // BORDJ BADJI MOKHTAR — aucune livraison
  51: { domicile: 950,  bureau: 670  },  // OULED DJELLAL
  52: { domicile: 1000, bureau: 970  },  // BENI ABBES
  53: { domicile: 1600, bureau: null },  // IN SALAH — pas de Stop Desk
  54: { domicile: 1600, bureau: null },  // IN GUEZZAM — pas de Stop Desk
  55: { domicile: 950,  bureau: 720  },  // TOUGGOURT
  56: { domicile: null, bureau: null },  // DJANET — aucune livraison
  57: { domicile: 950,  bureau: null },  // M'GHAIR — pas de Stop Desk
  58: { domicile: 950,  bureau: null },  // EL MENIA — pas de Stop Desk
};
