const flags = [
  {
    'pays': 'ae',
    'country': 'Emirats Arabes Unis',
    'picture': require('@/assets/Flags/ae.png')
  },
  {
    'pays': 'ar',
    'country': 'Argentine',
    'picture': require('@/assets/Flags/ar.png')
  },
  {
    'pays': 'at',
    'country': 'Autriche',
    'picture': require('@/assets/Flags/at.png')
  },
  {
    'pays': 'au',
    'country': 'Australie',
    'picture': require('@/assets/Flags/au.png')
  },
  {
    'pays': 'be',
    'country': 'Belgique',
    'picture': require('@/assets/Flags/be.png')
  },
  {
    'pays': 'bg',
    'country': 'Bulgarie',
    'picture': require('@/assets/Flags/bg.png')
  },
  {
    'pays': 'br',
    'country': 'Brésil',
    'picture': require('@/assets/Flags/br.png')
  },
  {
    'pays': 'ca',
    'country': 'Canada',
    'picture': require('@/assets/Flags/ca.png')
  },
  {
    'pays': 'ch',
    'country': 'Suisse',
    'picture': require('@/assets/Flags/ch.png')
  },
  {
    'pays': 'cn',
    'country': 'Chine',
    'picture': require('@/assets/Flags/cn.png')
  },
  {
    'pays': 'co',
    'country': 'Colombie',
    'picture': require('@/assets/Flags/co.png')
  },
  {
    'pays': 'cu',
    'country': 'Cuba',
    'picture': require('@/assets/Flags/cu.png')
  },
  {
    'pays': 'cz',
    'country': 'Tchéquie',
    'picture': require('@/assets/Flags/cz.png')
  },
  {
    'pays': 'de',
    'country': 'Allemagne',
    'picture': require('@/assets/Flags/de.png')
  },
  {
    'pays': 'eg',
    'country': 'Egypte',
    'picture': require('@/assets/Flags/eg.png')
  },
  {
    'pays': 'fr',
    'country': 'France',
    'picture': require('@/assets/Flags/fr.png')
  },
  {
    'pays': 'gb',
    'country': 'Angleterre',
    'picture': require('@/assets/Flags/gb.png')
  },
  {
    'pays': 'gr',
    'country': 'Grèce',
    'picture': require('@/assets/Flags/gr.png')
  },
  {
    'pays': 'hk',
    'country': 'HongKong',
    'picture': require('@/assets/Flags/hk.png')
  },
  {
    'pays': 'hu',
    'country': 'Hongrie',
    'picture': require('@/assets/Flags/hu.png')
  },
  {
    'pays': 'id',
    'country': 'Indonésie',
    'picture': require('@/assets/Flags/id.png')
  },
  {
    'pays': 'ie',
    'country': 'Irlande',
    'picture': require('@/assets/Flags/ie.png')
  },
  {
    'pays': 'il',
    'country': 'Israël',
    'picture': require('@/assets/Flags/il.png')
  },
  {
    'pays': 'in',
    'country': 'Inde',
    'picture': require('@/assets/Flags/in.png')
  },
  {
    'pays': 'it',
    'country': 'Italie',
    'picture': require('@/assets/Flags/it.png')
  },
  {
    'pays': 'jp',
    'country': 'Japon',
    'picture': require('@/assets/Flags/jp.png')
  },
  {
    'pays': 'kr',
    'country': 'Corée du Sud',
    'picture': require('@/assets/Flags/kr.png')
  },
  {
    'pays': 'lt',
    'country': 'Lituanie',
    'picture': require('@/assets/Flags/lt.png')
  },
  {
    'pays': 'lv',
    'country': 'Lettonie',
    'picture': require('@/assets/Flags/lv.png')
  },
  {
    'pays': 'ma',
    'country': 'Maroc',
    'picture': require('@/assets/Flags/ma.png')
  },
  {
    'pays': 'mx',
    'country': 'Mexique',
    'picture': require('@/assets/Flags/mx.png')
  },
  {
    'pays': 'my',
    'country': 'Malaisie',
    'picture': require('@/assets/Flags/my.png')
  },
  {
    'pays': 'ng',
    'country': 'Nigéria',
    'picture': require('@/assets/Flags/ng.png')
  },
  {
    'pays': 'nl',
    'country': 'Pays-Bas',
    'picture': require('@/assets/Flags/nl.png')
  },
  {
    'pays': 'no',
    'country': 'Norvège',
    'picture': require('@/assets/Flags/no.png')
  },
  {
    'pays': 'nz',
    'country': 'Nouvelle Zélande',
    'picture': require('@/assets/Flags/nz.png')
  },
  {
    'pays': 'ph',
    'country': 'Philippines',
    'picture': require('@/assets/Flags/ph.png')
  },
  {
    'pays': 'pl',
    'country': 'Pologne',
    'picture': require('@/assets/Flags/pl.png')
  },
  {
    'pays': 'pt',
    'country': 'Portugale',
    'picture': require('@/assets/Flags/pt.png')
  },
  {
    'pays': 'ro',
    'country': 'Roumanie',
    'picture': require('@/assets/Flags/ro.png')
  },
  {
    'pays': 'rs',
    'country': 'Serbie',
    'picture': require('@/assets/Flags/rs.png')
  },
  {
    'pays': 'ru',
    'country': 'Russie',
    'picture': require('@/assets/Flags/ru.png')
  },
  {
    'pays': 'sa',
    'country': 'Arabie Saoudite',
    'picture': require('@/assets/Flags/sa.png')
  },
  {
    'pays': 'se',
    'country': 'Suède',
    'picture': require('@/assets/Flags/se.png')
  },
  {
    'pays': 'sg',
    'country': 'Singapour',
    'picture': require('@/assets/Flags/sg.png')
  },
  {
    'pays': 'si',
    'country': 'Slovenie',
    'picture': require('@/assets/Flags/si.png')
  },
  {
    'pays': 'sk',
    'country': 'Slovaquie',
    'picture': require('@/assets/Flags/sk.png')
  },
  {
    'pays': 'th',
    'country': 'Thaïlande',
    'picture': require('@/assets/Flags/th.png')
  },
  {
    'pays': 'tr',
    'country': 'Turquie',
    'picture': require('@/assets/Flags/tr.png')
  },
  {
    'pays': 'tw',
    'country': 'Taiwan',
    'picture': require('@/assets/Flags/tw.png')
  },
  {
    'pays': 'ua',
    'country': 'Ukraine',
    'picture': require('@/assets/Flags/ua.png')
  },
  {
    'pays': 'us',
    'country': 'Etats-Unis',
    'picture': require('@/assets/Flags/us.png')
  },
  {
    'pays': 've',
    'country': 'Venezuela',
    'picture': require('@/assets/Flags/ve.png')
  },
  {
    'pays': 'za',
    'country': 'Afrique du Sud',
    'picture': require('@/assets/Flags/za.png')
  }
];
export default flags;
