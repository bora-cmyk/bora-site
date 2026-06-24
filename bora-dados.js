/* ============================================================================
   BORA® DADOS — Source of truth para datas, destinos, e disponibilidade
   Edite APENAS este arquivo para:
   - Adicionar/remover saídas (data, vagas)
   - Mudar preços
   - Adicionar novos destinos
   
   Deploy: push para GitHub → auto-deploy em ~30s no Netlify
   ============================================================================ */

const LOGO_H = 'Bora_Horizontal_Small_500px.png';
const LOGO_V = 'Bora_Vertical_Small_500px.png';

/* PALETA BORA® */
const CORES = {
  verde: '#00A65A',
  verdeEscuro: '#064F2D',
  amarelo: '#FFC93C',
  azul: '#1B7FA6',
  dourado: '#C9A227',
  carvao: '#1A1A1A',
  nevoa: '#F8F8F4',
  cinza: '#555',
  cinzaClaro: '#999',
};

/* ============================================================================
   DESTINOS — cardápio principal de excursões
   ============================================================================ */
const DESTINOS = {
  wicklow: {
    nome: 'Wicklow',
    preco: 45,
    moeda: '€',
    cor: CORES.verde,
    rota: 'Glendalough, Powerscourt, P.S. Eu Te Amo',
    descricao: 'Montanhas verdes, lagos de gelo e castelos. Paisagens do filme P.S. Eu Te Amo e vale histórico com ruínas medievais.',
    capa: 'https://images.pexels.com/photos/3355857/pexels-photo-3355857.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fb: 'https://images.pexels.com/photos/3355857/pexels-photo-3355857.jpeg?auto=compress&cs=tinysrgb&w=400',
    destaques: [
      'Vale sagrado com lago e montanhas',
      'Castelo de Powerscourt (construção)',
      'Ponte do filme P.S. Eu Te Amo',
      'Parada para almoço e fotos',
    ],
    duracao: '8 horas',
    saida: '8:30 AM',
    voltaAproximada: '16:30 PM',
    includes: 'Transporte, seguro, guia brasileiro, WiFi a bordo',
    naoInclui: 'Alimentação, entradas de monumentos',
    notas: 'Estradas estreitas. Calçado confortável recomendado.',
    soldOut: true, // ← WICKLOW ESTÁ INDISPONÍVEL
  },

  galway: {
    nome: 'Galway & Cliffs of Moher',
    preco: 55,
    moeda: '€',
    cor: CORES.azul,
    rota: 'Cliffs of Moher, Galway, Burren',
    descricao: 'Os penhascos mais famosos da Irlanda, vilas coloridas à beira-mar e paisagens selvagens. Um clássico imperdível.',
    capa: 'https://images.pexels.com/photos/3407816/pexels-photo-3407816.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fb: 'https://images.pexels.com/photos/3407816/pexels-photo-3407816.jpeg?auto=compress&cs=tinysrgb&w=400',
    destaques: [
      'Cliffs of Moher (700m de altura)',
      'Vila boêmia de Galway com pubs tradicionais',
      'Paisagem selvagem do Burren',
      'Parada para almoço com vista para o mar',
    ],
    duracao: '10 horas',
    saida: '7:30 AM',
    voltaAproximada: '17:30 PM',
    includes: 'Transporte, seguro, guia brasileiro, WiFi a bordo, café da manhã',
    naoInclui: 'Alimentação principal, entradas',
    notas: 'Traz jaqueta — vento forte nos penhascos. Dia longo, mas épico.',
  },

  belfast: {
    nome: 'Belfast & Giant\'s Causeway',
    preco: 89,
    moeda: '€',
    cor: CORES.dourado,
    rota: 'Giant\'s Causeway, Carrick-a-Rede, Belfast',
    descricao: 'Colunas vulcânicas do Patrimônio Mondial, ponte de corda, game of thrones e história viva de Belfast.',
    capa: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fb: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    destaques: [
      'Giant\'s Causeway (patrimônio UNESCO)',
      'Carrick-a-Rede rope bridge (opcional, +€17)',
      'Locais de Game of Thrones',
      'Belfast city tour com história política',
    ],
    duracao: '11 horas',
    saida: '7:00 AM',
    voltaAproximada: '18:00 PM',
    includes: 'Transporte, seguro, guia brasileiro, WiFi, café e lanche',
    naoInclui: 'Alimentação principal, entradas de monumentos, rope bridge',
    notas: 'REQUER PASSAPORTE válido. Viajantes de IRP devem levar. Dia intenso.',
    passaporte: true,
    irpCard: true,
  },
};

/* ============================================================================
   FOTOS — Carousséis dos destinos (Array de URLs)
   ============================================================================ */
const FOTOS = {
  wicklow: [
    { u: 'https://images.pexels.com/photos/3355857/pexels-photo-3355857.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Vale de Glendalough' },
    { u: 'https://images.pexels.com/photos/3335844/pexels-photo-3335844.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Powerscourt' },
    { u: 'https://images.pexels.com/photos/3400716/pexels-photo-3400716.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Montanhas de Wicklow' },
  ],
  galway: [
    { u: 'https://images.pexels.com/photos/3407816/pexels-photo-3407816.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Cliffs of Moher' },
    { u: 'https://images.pexels.com/photos/3376792/pexels-photo-3376792.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Galway colourful houses' },
    { u: 'https://images.pexels.com/photos/3370645/pexels-photo-3370645.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Irish coastline' },
  ],
  belfast: [
    { u: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Giant\'s Causeway' },
    { u: 'https://images.pexels.com/photos/1170645/pexels-photo-1170645.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Belfast cityscape' },
    { u: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Northern Ireland coast' },
  ],
};

/* ============================================================================
   SAÍDAS CONFIRMADAS — datas abertas com vagas
   Formato: { destino, data (YYYY-MM-DD), vagas }
   ============================================================================ */
const SAIDAS = [
  // GALWAY
  { destino: 'galway', data: '2026-06-29', vagas: 8 },
  { destino: 'galway', data: '2026-07-06', vagas: 12 },
  { destino: 'galway', data: '2026-07-13', vagas: 10 },

  // BELFAST
  { destino: 'belfast', data: '2026-06-28', vagas: 5 },
  { destino: 'belfast', data: '2026-07-05', vagas: 15 },
  { destino: 'belfast', data: '2026-07-12', vagas: 9 },

  // WICKLOW: Sem datas abertas (SOLD OUT)
];

/* ============================================================================
   DESTINOS COM INTERESSE (sem data ainda, aguardando "mostrar interesse")
   ============================================================================ */
const INTERESSE = ['wicklow'];

/* ============================================================================
   BLOG — Posts em cards na seção de conteúdo
   ============================================================================ */
const POSTS = [
  {
    id: 1,
    titulo: 'P.S. Eu Te Amo em Wicklow: Onde filmar a cena final',
    cat: 'Roteiros',
    img: 'https://images.pexels.com/photos/3400716/pexels-photo-3400716.jpeg?auto=compress&cs=tinysrgb&w=600',
    fb: 'https://images.pexels.com/photos/3400716/pexels-photo-3400716.jpeg?auto=compress&cs=tinysrgb&w=400',
    resumo: 'A ponte onde filmar a cena mais romântica do cinema brasileiro na Irlanda. Dicas de luz, melhor horário e como ir.',
    corpo: [
      'A ponte que aparece no final do filme P.S. Eu Te Amo está em Wicklow, a apenas 40 minutos de Dublin. A cena onde Daphne e Mark se encontram foi filmada lá, e virou ponto de peregrinação de brasileiros na Irlanda.',
      'A melhor luz é final da tarde, entre 17h e 19h (depende da estação). Se você vier no nosso tour de Wicklow, a gente passa por lá no horário ideal.',
      'Dica: leve um casaco. Mesmo no verão, o vento na montanha refresca. E traz uma garrafa de água — as vistas valem a caminhada.',
    ],
  },
  {
    id: 2,
    titulo: 'Game of Thrones: Locais de filmagem na Irlanda do Norte',
    cat: 'Game of Thrones',
    img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    fb: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    resumo: 'Descubra onde foram gravadas as cenas de Game of Thrones na Irlanda do Norte. Belfast, Giant\'s Causeway e muito mais.',
    corpo: [
      'A Irlanda do Norte foi cenário para muitas cenas de Game of Thrones. Desde os Twins até as paisagens do extremo norte de Westeros.',
      'No nosso tour de Belfast, passamos por vários locais icônicos. A equipe conhece cada detalhe — qual cena foi gravada onde.',
      'Se você é fã da série, esse tour é obrigatório. Traz o livro ou assiste um episódio antes para entender melhor.',
    ],
  },
  {
    id: 3,
    titulo: 'Melhor época para visitar a Irlanda: Clima, multidões e dicas',
    cat: 'Planejamento',
    img: 'https://images.pexels.com/photos/3407816/pexels-photo-3407816.jpeg?auto=compress&cs=tinysrgb&w=600',
    fb: 'https://images.pexels.com/photos/3407816/pexels-photo-3407816.jpeg?auto=compress&cs=tinysrgb&w=400',
    resumo: 'Maio a setembro é a melhor época. Clima agradável, dias longos, natureza verde. Prepare-se para o vento e a chuva.',
    corpo: [
      'Maio e junho: primavera, dias longos, verde vibrante. Começam as multidões, mas ainda é tranquilo.',
      'Julho e agosto: pico de verão. Mais quente (até 20°C), mas também mais lotado. Tours com mais grupos.',
      'Setembro: melhor custo-benefício. Clima ainda bom, menos turistas, paisagem ainda linda.',
      'Lembra: a Irlanda é fria mesmo no verão. Traz camadas e um bom casaco impermeável.',
    ],
  },
];

/* ============================================================================
   FALLBACK (se bora-dados.js não carregar, usa isso)
   ============================================================================ */
if (typeof DESTINOS === 'undefined') {
  console.warn('⚠️ bora-dados.js não carregou. Usando fallback.');
  window.DESTINOS = DESTINOS;
  window.SAIDAS = SAIDAS;
  window.INTERESSE = INTERESSE;
  window.FOTOS = FOTOS;
  window.POSTS = POSTS;
}
