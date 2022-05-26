const flags = [
  {
    'country': 'ae',
    'name': 'United Arab Emirates',
    'picture': require('@/assets/Flags/ae.png')
  },
  {
    'country': 'ar',
    'name': 'Argentina',
    'picture': require('@/assets/Flags/ar.png')
  },
  {
    'country': 'at',
    'name': 'Austria',
    'picture': require('@/assets/Flags/at.png')
  },
  {
    'country': 'au',
    'name': 'Australia',
    'picture': require('@/assets/Flags/au.png')
  },
  {
    'country': 'be',
    'name': 'Belgium',
    'picture': require('@/assets/Flags/be.png')
  },
  {
    'country': 'bg',
    'name': 'Bulgaria',
    'picture': require('@/assets/Flags/bg.png')
  },
  {
    'country': 'br',
    'name': 'Brasil',
    'picture': require('@/assets/Flags/br.png')
  },
  {
    'country': 'ca',
    'name': 'Canada',
    'picture': require('@/assets/Flags/ca.png')
  },
  {
    'country': 'ch',
    'name': 'Switzerland',
    'picture': require('@/assets/Flags/ch.png')
  },
  {
    'country': 'cn',
    'name': 'China',
    'picture': require('@/assets/Flags/cn.png')
  },
  {
    'country': 'co',
    'name': 'Colombia',
    'picture': require('@/assets/Flags/co.png')
  },
  {
    'country': 'cu',
    'name': 'Cuba',
    'picture': require('@/assets/Flags/cu.png')
  },
  {
    'country': 'cz',
    'name': 'Czech Republic',
    'picture': require('@/assets/Flags/cz.png')
  },
  {
    'country': 'de',
    'name': 'Germany',
    'picture': require('@/assets/Flags/de.png')
  },
  {
    'country': 'eg',
    'name': 'Egypt',
    'picture': require('@/assets/Flags/eg.png')
  },
  {
    'country': 'fr',
    'name': 'France',
    'picture': require('@/assets/Flags/fr.png')
  },
  {
    'country': 'gb',
    'name': 'England',
    'picture': require('@/assets/Flags/gb.png')
  },
  {
    'country': 'gr',
    'name': 'Greece',
    'picture': require('@/assets/Flags/gr.png')
  },
  {
    'country': 'hk',
    'name': 'HongKong',
    'picture': require('@/assets/Flags/hk.png')
  },
  {
    'country': 'hu',
    'name': 'Hungary',
    'picture': require('@/assets/Flags/hu.png')
  },
  {
    'country': 'id',
    'name': 'Indonesia',
    'picture': require('@/assets/Flags/id.png')
  },
  {
    'country': 'ie',
    'name': 'Ireland',
    'picture': require('@/assets/Flags/ie.png')
  },
  {
    'country': 'il',
    'name': 'Israel',
    'picture': require('@/assets/Flags/il.png')
  },
  {
    'country': 'in',
    'name': 'India',
    'picture': require('@/assets/Flags/in.png')
  },
  {
    'country': 'it',
    'name': 'Italy',
    'picture': require('@/assets/Flags/it.png')
  },
  {
    'country': 'jp',
    'name': 'Japan',
    'picture': require('@/assets/Flags/jp.png')
  },
  {
    'country': 'kr',
    'name': 'South Korea',
    'picture': require('@/assets/Flags/kr.png')
  },
  {
    'country': 'lt',
    'name': 'Lithuania',
    'picture': require('@/assets/Flags/lt.png')
  },
  {
    'country': 'lv',
    'name': 'Latvia',
    'picture': require('@/assets/Flags/lv.png')
  },
  {
    'country': 'ma',
    'name': 'Morocco',
    'picture': require('@/assets/Flags/ma.png')
  },
  {
    'country': 'mx',
    'name': 'Mexico',
    'picture': require('@/assets/Flags/mx.png')
  },
  {
    'country': 'my',
    'name': 'Malaysia',
    'picture': require('@/assets/Flags/my.png')
  },
  {
    'country': 'ng',
    'name': 'Nigeria',
    'picture': require('@/assets/Flags/ng.png')
  },
  {
    'country': 'nl',
    'name': 'Netherlands',
    'picture': require('@/assets/Flags/nl.png')
  },
  {
    'country': 'no',
    'name': 'Norway',
    'picture': require('@/assets/Flags/no.png')
  },
  {
    'country': 'nz',
    'name': 'New Zealand',
    'picture': require('@/assets/Flags/nz.png')
  },
  {
    'country': 'ph',
    'name': 'Philippines',
    'picture': require('@/assets/Flags/ph.png')
  },
  {
    'country': 'pl',
    'name': 'Poland',
    'picture': require('@/assets/Flags/pl.png')
  },
  {
    'country': 'pt',
    'name': 'Portugal',
    'picture': require('@/assets/Flags/pt.png')
  },
  {
    'country': 'ro',
    'name': 'Romania',
    'picture': require('@/assets/Flags/ro.png')
  },
  {
    'country': 'rs',
    'name': 'Serbia',
    'picture': require('@/assets/Flags/rs.png')
  },
  {
    'country': 'ru',
    'name': 'Russia',
    'picture': require('@/assets/Flags/ru.png')
  },
  {
    'country': 'sa',
    'name': 'Saudi Arabia',
    'picture': require('@/assets/Flags/sa.png')
  },
  {
    'country': 'se',
    'name': 'Sweden',
    'picture': require('@/assets/Flags/se.png')
  },
  {
    'country': 'sg',
    'name': 'Singapore',
    'picture': require('@/assets/Flags/sg.png')
  },
  {
    'country': 'si',
    'name': 'Slovenia',
    'picture': require('@/assets/Flags/si.png')
  },
  {
    'country': 'sk',
    'name': 'Slovakia',
    'picture': require('@/assets/Flags/sk.png')
  },
  {
    'country': 'th',
    'name': 'Thailand',
    'picture': require('@/assets/Flags/th.png')
  },
  {
    'country': 'tr',
    'name': 'Turkey',
    'picture': require('@/assets/Flags/tr.png')
  },
  {
    'country': 'tw',
    'name': 'Taiwan',
    'picture': require('@/assets/Flags/tw.png')
  },
  {
    'country': 'ua',
    'name': 'Ukraine',
    'picture': require('@/assets/Flags/ua.png')
  },
  {
    'country': 'us',
    'name': 'United States',
    'picture': require('@/assets/Flags/us.png')
  },
  {
    'country': 've',
    'name': 'Venezuela',
    'picture': require('@/assets/Flags/ve.png')
  },
  {
    'country': 'za',
    'name': 'South Africa',
    'picture': require('@/assets/Flags/za.png')
  }
];
export default flags;
