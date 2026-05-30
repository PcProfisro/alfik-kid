/* kid-2b-mapa.jsx — "2B · Mapa cesty" with strong gamified
 * badge layer. Auto-themed: obrázky odznakov sú vozidlá zoradené od
 * najslabšieho po najsilnejšie (kolobežka → supercar).
 *
 * Systém odznakov ("Albumček dobrodruha") — 16 ks spolu:
 *   • 10 ÁUT (1 za každú kategóriu) v 3 úrovniach (bronz/striebro/zlato)
 *     Auta sa zhodnocujú: stop 1 = kolobežka, stop 10 = supercar.
 *   • 6 ŠPECIÁLNYCH ODZNAKOV — hexagonálne štíty.
 *
 * Pri každej zastávke:
 *   ✓ — kvačka pri splnenom je preč
 *   →  na jej miesto je presunutá MEDAILA s autom
 *   →  pri nesplnených je BATÉRIA ukazujúca pokrok k odznaku
 */

// ─── Vozidlá (od slabších po novšie/silnejšie) ─────────────────────────
const VEHICLES = ['scooter', 'bike', 'tricycle', 'oldhatch', 'sedan', 'suv', 'pickup', 'coupe', 'race', 'super'];
const VEHICLE_NAMES = {
  scooter:  'Kolobežka',
  bike:     'Bicykel',
  tricycle: 'Trojkolka',
  oldhatch: 'Stará škodovka',
  sedan:    'Sedan',
  suv:      'Terénne SUV',
  pickup:   'Pick-up',
  coupe:    'Coupé',
  race:     'Pretekár',
  super:    'Supercar',
};

// Pestrá paleta per vozidlo — každý odznak má vlastné farby (telo, sklo, kolesá, akcenty)
const VEHICLE_PALETTE = {
  scooter:  { body: '#E04545', accent: '#FFC542', wheel: '#1A2B3D', glass: '#FFFFFF', stroke: '#1A2B3D' },
  bike:     { body: '#2A6FDB', accent: '#FFC542', wheel: '#1A2B3D', glass: '#FFFFFF', stroke: '#1A2B3D' },
  tricycle: { body: '#3DB874', accent: '#E04545', wheel: '#FFC542', glass: '#1A2B3D', stroke: '#1A2B3D' },
  oldhatch: { body: '#E89030', accent: '#1A2B3D', wheel: '#1A2B3D', glass: '#9CC9E8', stroke: '#1A2B3D' },
  sedan:    { body: '#2A6FDB', accent: '#E04545', wheel: '#1A2B3D', glass: '#BFE2FF', stroke: '#1A2B3D' },
  suv:      { body: '#2E7D4F', accent: '#E89030', wheel: '#1A2B3D', glass: '#BFE2FF', stroke: '#1A2B3D' },
  pickup:   { body: '#C44545', accent: '#8B5A2B', wheel: '#1A2B3D', glass: '#BFE2FF', stroke: '#1A2B3D' },
  coupe:    { body: '#7A1FBC', accent: '#FFC542', wheel: '#1A2B3D', glass: '#7BD5D1', stroke: '#1A2B3D' },
  race:     { body: '#E11C2B', accent: '#FFC542', wheel: '#1A2B3D', glass: '#FFFFFF', stroke: '#1A2B3D' },
  super:    { body: '#1A2B3D', accent: '#FF3B3B', wheel: '#1A2B3D', glass: '#5CE0C1', stroke: '#1A2B3D' },
};

function VehicleIcon({ kind, size = 30 }) {
  const p = VEHICLE_PALETTE[kind] || { body: '#1A2B3D', accent: '#FFC542', wheel: '#1A2B3D', glass: '#FFFFFF', stroke: '#1A2B3D' };
  const props = {
    width: size, height: size * 0.6, viewBox: '0 0 60 36',
    style: { display: 'block', overflow: 'visible' },
  };
  const wheel = (cx) => (
    <g>
      <circle cx={cx} cy="29" r="4.6" fill={p.wheel} stroke={p.stroke} strokeWidth="0.6" />
      <circle cx={cx} cy="29" r="1.8" fill={p.glass} />
    </g>
  );
  switch (kind) {
    case 'scooter': return (
      <svg {...props}>
        <rect x="10" y="24" width="40" height="3" rx="1.5" fill={p.body} />
        <rect x="44" y="6"  width="2.5" height="20" fill={p.stroke} />
        <rect x="38" y="5"  width="14"  height="2.5" rx="1" fill={p.accent} />
        {wheel(14)}{wheel(46)}
      </svg>
    );
    case 'bike': return (
      <svg {...props}>
        <circle cx="14" cy="26" r="7.5" fill="none" stroke={p.wheel} strokeWidth="2.4" />
        <circle cx="46" cy="26" r="7.5" fill="none" stroke={p.wheel} strokeWidth="2.4" />
        <circle cx="14" cy="26" r="1.4" fill={p.accent} />
        <circle cx="46" cy="26" r="1.4" fill={p.accent} />
        <path d="M14 26 L26 14 L42 14 L46 26 M26 14 L34 26 M34 26 L42 14"
          fill="none" stroke={p.body} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="32" y="9" width="10" height="2.5" rx="1.2" fill={p.accent} />
        <rect x="40" y="11" width="2.5" height="5" fill={p.stroke} />
      </svg>
    );
    case 'tricycle': return (
      <svg {...props}>
        {wheel(12)}{wheel(32)}{wheel(50)}
        <path d="M12 29 L40 14 L50 29 Z" fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M40 14 L40 6 M35 6 L45 6" stroke={p.stroke} strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="22" cy="22" r="3" fill={p.accent} stroke={p.stroke} strokeWidth="0.5" />
      </svg>
    );
    case 'oldhatch': return (
      <svg {...props}>
        <path d="M4 28 L4 22 L8 22 L12 12 L42 12 L48 22 L56 22 L56 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M16 14 L26 14 L26 20 L14 20 Z" fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <path d="M30 14 L42 14 L46 20 L30 20 Z"  fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <rect x="50" y="22" width="4" height="2" fill={p.accent} />
        {wheel(14)}{wheel(46)}
      </svg>
    );
    case 'sedan': return (
      <svg {...props}>
        <path d="M3 28 L3 22 L10 20 L18 10 L42 10 L50 20 L57 22 L57 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M14 20 L20 12 L38 12 L44 20 Z" fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <line x1="29" y1="13" x2="29" y2="19" stroke={p.stroke} strokeWidth="0.7" />
        <rect x="52" y="20" width="4" height="2.4" fill={p.accent} />
        <rect x="4"  y="20" width="4" height="2.4" fill="#FFE0A0" />
        {wheel(14)}{wheel(46)}
      </svg>
    );
    case 'suv': return (
      <svg {...props}>
        <path d="M3 28 L3 16 L9 12 L14 8 L46 8 L52 12 L57 16 L57 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M16 12 L18 10 L42 10 L44 12 L44 16 L16 16 Z"
          fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <line x1="29" y1="10" x2="29" y2="16" stroke={p.stroke} strokeWidth="0.7" />
        <rect x="3" y="6" width="54" height="2" fill={p.accent} />
        <rect x="52" y="18" width="4" height="2.4" fill="#FFE0A0" />
        {wheel(14)}{wheel(46)}
      </svg>
    );
    case 'pickup': return (
      <svg {...props}>
        <path d="M3 28 L3 18 L8 18 L11 8 L30 8 L33 18 L57 18 L57 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M13 12 L16 10 L28 10 L30 14 L30 16 L13 16 Z"
          fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <rect x="34" y="19" width="22" height="7" fill={p.accent} stroke={p.stroke} strokeWidth="0.5" />
        <line x1="40" y1="19" x2="40" y2="26" stroke={p.stroke} strokeWidth="0.5" opacity=".7" />
        <line x1="45" y1="19" x2="45" y2="26" stroke={p.stroke} strokeWidth="0.5" opacity=".7" />
        <line x1="50" y1="19" x2="50" y2="26" stroke={p.stroke} strokeWidth="0.5" opacity=".7" />
        {wheel(13)}{wheel(46)}
      </svg>
    );
    case 'coupe': return (
      <svg {...props}>
        <path d="M2 28 L4 22 L14 18 L24 8 L40 8 L52 18 L58 22 L58 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M18 18 L26 10 L38 10 L48 18 Z" fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <line x1="29" y1="11" x2="29" y2="17" stroke={p.stroke} strokeWidth="0.7" />
        <rect x="4" y="22" width="54" height="1.6" fill={p.accent} />
        {wheel(14)}{wheel(46)}
      </svg>
    );
    case 'race': return (
      <svg {...props}>
        <path d="M2 28 L4 24 L16 22 L24 14 L40 14 L48 22 L58 24 L58 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <circle cx="32" cy="16" r="4" fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <rect x="50" y="13" width="9" height="2.4" fill={p.accent} stroke={p.stroke} strokeWidth="0.4" />
        <rect x="56" y="11" width="2.4" height="6" fill={p.stroke} />
        <rect x="2"  y="23" width="6" height="1.8" fill={p.accent} />
        <path d="M24 21 L40 21 L40 23 L24 23 Z" fill="#FFFFFF" opacity=".85" />
        <rect x="10" y="20" width="3" height="3" fill="#FFFFFF" />
        <rect x="12" y="21" width="2" height="2" fill={p.stroke} />
        {wheel(14)}{wheel(48)}
      </svg>
    );
    case 'super': return (
      <svg {...props}>
        <path d="M1 28 L3 22 L11 18 L21 10 L41 10 L51 18 L57 22 L59 28 Z"
          fill={p.body} stroke={p.stroke} strokeWidth="0.6" />
        <path d="M17 18 L23 12 L39 12 L45 18 Z" fill={p.glass} stroke={p.stroke} strokeWidth="0.5" />
        <line x1="31" y1="13" x2="31" y2="18" stroke={p.stroke} strokeWidth="0.6" />
        <path d="M50 14 L59 14 L59 12 L50 12 Z" fill="#FFE0A0" stroke={p.stroke} strokeWidth="0.4" />
        <rect x="3"  y="22" width="9" height="2" fill={p.accent} />
        <rect x="48" y="22" width="9" height="2" fill={p.accent} />
        {wheel(14)}{wheel(46)}
      </svg>
    );
    default: return null;
  }
}

// ─── Definície odznakov ────────────────────────────────────────────────
const CATEGORY_BADGES = [
  { id: 'b-animals',   catId: 'animals',   vehicle: 'scooter',  tier: 'gold' },
  { id: 'b-colors',    catId: 'colors',    vehicle: 'bike',     tier: 'silver' },
  { id: 'b-family',    catId: 'family',    vehicle: 'tricycle', tier: 'gold' },
  { id: 'b-food',      catId: 'food',      vehicle: 'oldhatch', tier: null, inProgress: true, filledSegments: 3 },
  { id: 'b-numbers',   catId: 'numbers',   vehicle: 'sedan',    tier: null, filledSegments: 0 },
  { id: 'b-transport', catId: 'transport', vehicle: 'suv',      tier: null, filledSegments: 0 },
  { id: 'b-nature',    catId: 'nature',    vehicle: 'pickup',   tier: null, filledSegments: 0 },
  { id: 'b-music',     catId: 'music',     vehicle: 'coupe',    tier: null, filledSegments: 0 },
  { id: 'b-body',      catId: 'body',      vehicle: 'race',     tier: null, filledSegments: 0 },
  { id: 'b-alphabet',  catId: 'alphabet',  vehicle: 'super',    tier: null, filledSegments: 0 },
];
// Each category has an accent color used for the (still-coloured) vehicle
// silhouette on top of the grey „un-earned“ disc.
const CATEGORY_ACCENT = {
  animals:   '#E04545',   // coral
  colors:    '#5B47D6',   // grape
  family:    '#E76F51',   // sun-deep
  food:      '#C04848',   // coral-deep
  numbers:   '#1F5C82',   // sky-deep
  transport: '#1F8A5B',   // mint-deep
  nature:    '#2E7D4F',   // forest
  music:     '#7A1FBC',   // violet
  body:      '#B83A6C',   // berry
  alphabet:  '#C98800',   // amber
};
CATEGORY_BADGES.forEach(b => { b.name = VEHICLE_NAMES[b.vehicle]; b.accent = CATEGORY_ACCENT[b.catId]; });

const SPECIAL_BADGES = [
  { id: 's-streak',   name: 'Vytrvalec',     desc: 'Hral si 7 dní v rade',                glyph: 'flame',   color: '#FF9F2D', color2: '#E76F51', unlocked: true,  isNew: true  },
  { id: 's-half',     name: 'Polovica',      desc: 'Dokonči 5 z 10 zastávok',             glyph: 'half',    color: '#3FA9E0', color2: '#1F5C82', unlocked: false, filledSegments: 3 },
  { id: 's-perfect',  name: 'Bez chyby',     desc: 'Celá zastávka bez chyby',             glyph: 'check',   color: '#3DD9B0', color2: '#2EB892', unlocked: false, filledSegments: 1 },
  { id: 's-traveler', name: 'Cestovateľ',    desc: 'Dokonči všetkých 10 zastávok',        glyph: 'globe',   color: '#8B7CF6', color2: '#5B47D6', unlocked: false, filledSegments: 2 },
  { id: 's-comeback', name: 'Návrat hrdinu', desc: 'Vráť sa a vylepši starší výsledok',   glyph: 'refresh', color: '#FFC542', color2: '#FF9F2D', unlocked: false, filledSegments: 0 },
];

const ALL_BADGES = [...CATEGORY_BADGES, ...SPECIAL_BADGES];
const UNLOCKED_COUNT = ALL_BADGES.filter(b => b.tier || b.unlocked).length;

// ─── Auto-medaila (kruhová s stužkou) ──────────────────────────────────
const TIER_PALETTE = {
  gold:   { rim: '#FFB400', rim2: '#C98800', face: '#FFE5A3', shine: '#FFF6D6', ink: '#5C3D00', label: 'Zlato' },
  silver: { rim: '#C0C5CE', rim2: '#7E8694', face: '#E8EBF0', shine: '#F8F9FB', ink: '#404652', label: 'Striebro' },
  bronze: { rim: '#C9763A', rim2: '#8B4D1F', face: '#E8AE7E', shine: '#F5D2AE', ink: '#5A2E10', label: 'Bronz' },
  blank:  { rim: '#D7DEE8', rim2: '#A8B0BE', face: '#F2F5FA', shine: '#FFFFFF', ink: '#6C7A8A', label: 'Zatiaľ neukončené' },
};

function CategoryMedal({ vehicle, tier, size = 56, ribbon = true, locked = false }) {
  const tp = TIER_PALETTE[tier || 'bronze'];
  const isLocked = locked || !tier;
  const aspect = ribbon ? 1.25 : 1;
  const h = size * aspect;
  const uid = `${vehicle}-${tier || 'lock'}`;
  return (
    <div style={{ position: 'relative', width: size, height: h, display: 'inline-block' }}>
      <svg viewBox={ribbon ? '0 0 80 100' : '0 0 80 80'} width="100%" height="100%" style={{ display: 'block' }}>
        {ribbon && (
          <g>
            <path d="M22 0 L40 30 L40 18 L22 0z" fill={isLocked ? '#5A6677' : '#A94545'} />
            <path d="M58 0 L40 30 L40 18 L58 0z" fill={isLocked ? '#475061' : '#7A1832'} />
          </g>
        )}
        <defs>
          <radialGradient id={`mr-${uid}`} cx="38%" cy="35%" r="65%">
            <stop offset="0%"  stopColor={isLocked ? '#7A8294' : tp.shine} />
            <stop offset="60%" stopColor={isLocked ? '#5A6677' : tp.rim} />
            <stop offset="100%" stopColor={isLocked ? '#3D4658' : tp.rim2} />
          </radialGradient>
        </defs>
        <circle cx="40" cy={ribbon ? 60 : 40} r="32" fill={`url(#mr-${uid})`}
          stroke={isLocked ? '#2F384A' : tp.rim2} strokeWidth="1.5" />
        <circle cx="40" cy={ribbon ? 60 : 40} r="25" fill={isLocked ? '#3D4658' : tp.face}
          stroke={isLocked ? '#2F384A' : tp.rim} strokeWidth="1" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;
          const cy = ribbon ? 60 : 40;
          const x1 = 40 + Math.cos(a) * 29; const y1 = cy + Math.sin(a) * 29;
          const x2 = 40 + Math.cos(a) * 32; const y2 = cy + Math.sin(a) * 32;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={isLocked ? '#2F384A' : tp.rim2} strokeWidth="0.8" opacity="0.55" />;
        })}
        <ellipse cx="30" cy={ribbon ? 50 : 30} rx="8" ry="4" fill="#fff" opacity={isLocked ? 0.1 : 0.4} />
      </svg>
      {/* vehicle silhouette on top of the face */}
      {!isLocked && (
        <div style={{
          position: 'absolute',
          left: '50%', top: ribbon ? '60%' : '50%',
          transform: 'translate(-50%, -50%)',
          width: size * 0.62,
          pointerEvents: 'none',
        }}>
          <VehicleIcon kind={vehicle} size={size * 0.62} color={tp.ink} glass={tp.shine} />
        </div>
      )}
      {isLocked && (
        <div style={{
          position: 'absolute',
          left: '50%', top: ribbon ? '60%' : '50%',
          transform: 'translate(-50%, -50%)',
          color: 'rgba(255,255,255,.55)',
        }}>
          <svg width={size * 0.32} height={size * 0.32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <rect x="5" y="11" width="14" height="9" rx="2"/>
            <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
          </svg>
        </div>
      )}
    </div>
  );
}

// ─── Špeciálny odznak (hexagonálny štít) ───────────────────────────────
function SpecialGlyph({ kind, size = 24 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'foot':    return (<svg {...p}><ellipse cx="11" cy="10" rx="4" ry="6"/><circle cx="6"  cy="16" r="1.5" fill="currentColor"/><circle cx="9"  cy="19" r="1.5" fill="currentColor"/><circle cx="14" cy="19" r="1.5" fill="currentColor"/><circle cx="17" cy="17" r="1.5" fill="currentColor"/></svg>);
    case 'half':    return (<svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none"/></svg>);
    case 'flame':   return (<svg {...p}><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 2-3 2-5 2 2 3 0 3-4z" fill="currentColor" stroke="none"/></svg>);
    case 'check':   return (<svg {...p}><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>);
    case 'globe':   return (<svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>);
    case 'refresh': return (<svg {...p}><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>);
    default: return null;
  }
}

function SpecialBadge({ badge, size = 56 }) {
  const grey = !badge.unlocked;
  return (
    <div style={{ position: 'relative', width: size, height: size * 1.08, display: 'inline-block' }}>
      <svg viewBox="0 0 100 108" width="100%" height="100%" style={{ display: 'block' }}>
        <defs>
          <linearGradient id={`sb-${badge.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor={grey ? '#5A6677' : badge.color} />
            <stop offset="100%" stopColor={grey ? '#3D4658' : badge.color2} />
          </linearGradient>
        </defs>
        <path d="M50 4 L91 27 L91 81 L50 104 L9 81 L9 27 Z"
          fill={`url(#sb-${badge.id})`}
          stroke={grey ? '#2F384A' : 'rgba(0,0,0,.25)'} strokeWidth="1.5" />
        <path d="M50 11 L84 31 L84 77 L50 97 L16 77 L16 31 Z"
          fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" />
        <path d="M16 31 L50 11 L50 56 Z" fill="rgba(255,255,255,.18)" />
      </svg>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -55%)',
        color: '#fff', opacity: grey ? 0.4 : 1,
      }}>
        <SpecialGlyph kind={badge.glyph} size={size * 0.42} />
      </div>
      {badge.isNew && (
        <div style={{
          position: 'absolute', top: -6, right: -6,
          width: 22, height: 22, borderRadius: 99,
          background: 'linear-gradient(135deg, #FFD166, #FF9F2D)',
          color: '#1A2B3D', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--alf-font-display)', fontSize: 9, fontWeight: 800, letterSpacing: '.05em',
          boxShadow: '0 3px 8px rgba(0,0,0,.35)',
          border: '2px solid #fff',
        }}>NEW</div>
      )}
    </div>
  );
}

function AnyBadge({ badge, size = 56 }) {
  if (badge.glyph) return <SpecialBadge badge={badge} size={size} />;
  return <CategoryMedal vehicle={badge.vehicle} tier={badge.tier} size={size} ribbon />;
}

// ─── Nezískaná medaila ───────────────────────────────────────────────────
// Sivý opaque kruh + farebná ikona vozidla. Kruhová výseč (tmavošia sivá)
// nad kruhom ukazuje mieru získania medaily.
const MEDAL_GREY_BASE  = '#C8CFD8';   // light grey — unearned base
const MEDAL_GREY_EARN  = '#7C8898';   // darker grey — sector „earned“ portion
const MEDAL_GREY_RIM   = '#5A6677';   // outline

function MedalPieProgress({ filled = 0, total = 5, vehicle, accent = '#1A2B3D', size = 56, showCount = true, locked = false }) {
  const progress = Math.max(0, Math.min(1, filled / total));
  const cx = 50, cy = 50, r = 46;
  let sectorPath = '';
  if (!locked && progress > 0 && progress < 1) {
    const a = progress * Math.PI * 2 - Math.PI / 2;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const large = progress > 0.5 ? 1 : 0;
    sectorPath = `M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${large} 1 ${x.toFixed(3)} ${y.toFixed(3)} Z`;
  }
  return (
    <div style={{
      position: 'relative',
      width: size, height: size,
      filter: 'drop-shadow(0 3px 6px rgba(15,30,55,.22))',
    }}>
      {/* 1) podklad medaily — biely (ne-locked) alebo sivý (locked) */}
      <svg viewBox="0 0 100 100" width={size} height={size}
        style={{ display: 'block', position: 'absolute', inset: 0 }}>
        <circle cx={cx} cy={cy} r={r} fill={locked ? MEDAL_GREY_EARN : '#FFFFFF'} />
        {!locked && <ellipse cx="36" cy="34" rx="18" ry="10" fill="#fff" opacity="0.55" />}
      </svg>
      {/* 2) farebná ikona vozidla na bielom — LEN ak nie je locked */}
      {!locked && vehicle && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <VehicleIcon kind={vehicle} size={size * 0.88} />
        </div>
      )}
      {/* 2b) biely zámoček na sivom kruhu — LEN ak locked */}
      {locked && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 24 24"
            fill="none" stroke="#FFFFFF" strokeWidth="2.6"
            strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2" fill="#FFFFFF" stroke="#FFFFFF" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="#FFFFFF" fill="none" />
            <circle cx="12" cy="15.5" r="1.4" fill={MEDAL_GREY_EARN} stroke="none" />
            <rect x="11.3" y="15.5" width="1.4" height="3" rx="0.7" fill={MEDAL_GREY_EARN} stroke="none" />
          </svg>
        </div>
      )}
      {/* 3) sivá kruhová výseč — PRED ikonou */}
      <svg viewBox="0 0 100 100" width={size} height={size}
        style={{ display: 'block', position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {!locked && progress >= 1 && (
          <circle cx={cx} cy={cy} r={r} fill={MEDAL_GREY_EARN} />
        )}
        {!locked && progress > 0 && progress < 1 && (
          <path d={sectorPath} fill={MEDAL_GREY_EARN} />
        )}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={MEDAL_GREY_RIM} strokeWidth="2.5" />
      </svg>
      {showCount && (
        <div style={{
          position: 'absolute', left: '50%', bottom: -14, transform: 'translateX(-50%)',
          padding: '1px 7px', borderRadius: 99,
          background: '#fff',
          fontFamily: 'var(--alf-font-display)', fontSize: 10, fontWeight: 800,
          color: '#1A2B3D',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 4px rgba(0,0,0,.18)',
        }}>{filled}/{total}</div>
      )}
    </div>
  );
}

// ─── Krajinné prvky na mape (predný profil) ──────────────────────────
// Domčeky a zvieratká rozsadené po mape — front view, kreslený štýl.
function ScenePiece({ kind, size = 56 }) {
  const W = size, H = size * 1.0;
  const props = { width: W, height: H, viewBox: '0 0 60 60', style: { display: 'block', overflow: 'visible' } };
  switch (kind) {
    case 'cottage': return (
      <svg {...props}>
        {/* tieň */}
        <ellipse cx="30" cy="55" rx="22" ry="3" fill="#000" opacity=".22" />
        {/* steny */}
        <path d="M10 30 L50 30 L50 52 L10 52 Z" fill="#F2E2C4" stroke="#3E2510" strokeWidth="1.6" strokeLinejoin="round" />
        {/* trámy (Tudor štýl) */}
        <path d="M10 30 L20 52 M50 30 L40 52 M30 30 L30 52 M10 42 L50 42" stroke="#5C3416" strokeWidth="1" />
        {/* strecha */}
        <path d="M6 32 L30 12 L54 32 L50 32 L30 14 L10 32 Z" fill="#A94545" stroke="#3E2510" strokeWidth="1.6" strokeLinejoin="round" />
        {/* komín */}
        <rect x="38" y="14" width="5" height="10" fill="#8E5325" stroke="#3E2510" strokeWidth="1.2" />
        {/* dvere */}
        <rect x="26" y="40" width="8" height="12" rx="1" fill="#5C3416" stroke="#3E2510" strokeWidth="1.2" />
        <circle cx="32" cy="46" r="0.7" fill="#FFC542" />
        {/* okná */}
        <rect x="14" y="34" width="7" height="6" fill="#BFE2FF" stroke="#3E2510" strokeWidth="1" />
        <rect x="39" y="34" width="7" height="6" fill="#BFE2FF" stroke="#3E2510" strokeWidth="1" />
        <path d="M17.5 34 L17.5 40 M14 37 L21 37 M42.5 34 L42.5 40 M39 37 L46 37" stroke="#3E2510" strokeWidth="0.6" />
      </svg>
    );
    case 'tree': return (
      <svg {...props}>
        <ellipse cx="30" cy="57" rx="14" ry="2.5" fill="#000" opacity=".22" />
        <rect x="27" y="38" width="6" height="18" fill="#6E3F1A" stroke="#3E2510" strokeWidth="1.4" />
        <path d="M28 42 L28 50 M32 44 L32 52" stroke="#3E2510" strokeWidth="0.6" opacity=".7" />
        <circle cx="22" cy="32" r="10" fill="#3DB874" stroke="#1F5C3A" strokeWidth="1.4" />
        <circle cx="38" cy="32" r="10" fill="#3DB874" stroke="#1F5C3A" strokeWidth="1.4" />
        <circle cx="30" cy="22" r="11" fill="#4FCF82" stroke="#1F5C3A" strokeWidth="1.4" />
        <circle cx="26" cy="20" r="3" fill="#7CE3A4" opacity=".7" />
      </svg>
    );
    case 'pine': return (
      <svg {...props}>
        <ellipse cx="30" cy="57" rx="12" ry="2.5" fill="#000" opacity=".22" />
        <rect x="27" y="46" width="6" height="10" fill="#6E3F1A" stroke="#3E2510" strokeWidth="1.4" />
        <path d="M30 6 L46 26 L38 26 L50 42 L36 42 L46 54 L14 54 L24 42 L10 42 L22 26 L14 26 Z"
          fill="#2E7D4F" stroke="#1B4A2A" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M27 12 L32 18" stroke="#7CE3A4" strokeWidth="1.2" strokeLinecap="round" opacity=".6" />
      </svg>
    );
    case 'cow': return (
      <img src="assets/cow.svg" alt="" width={size} height={size}
        style={{ display: 'block', objectFit: 'contain' }} />
    );
    case 'pig': return (
      <svg {...props}>
        <ellipse cx="30" cy="58" rx="22" ry="3" fill="#000" opacity=".22" />
        {/* Telo z boku — oválne, ružové */}
        <ellipse cx="28" cy="40" rx="20" ry="12" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.5" />
        {/* Brucho — svetlejší odtieň */}
        <ellipse cx="28" cy="46" rx="14" ry="6" fill="#FBC8D2" opacity=".7" />
        {/* Nohy */}
        <rect x="14" y="48" width="4" height="9" rx="1" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.2" />
        <rect x="22" y="48" width="4" height="9" rx="1" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.2" />
        <rect x="32" y="48" width="4" height="9" rx="1" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.2" />
        <rect x="40" y="48" width="4" height="9" rx="1" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.2" />
        {/* Kopýtka */}
        <rect x="14" y="55" width="4" height="2" fill="#5C3416" />
        <rect x="22" y="55" width="4" height="2" fill="#5C3416" />
        <rect x="32" y="55" width="4" height="2" fill="#5C3416" />
        <rect x="40" y="55" width="4" height="2" fill="#5C3416" />
        {/* Stočený chvostík */}
        <path d="M8 36 Q 4 34 4 30 Q 6 28 8 30" stroke="#A55F70" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Hlava (vpravo) */}
        <ellipse cx="46" cy="34" rx="9" ry="8" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.5" />
        {/* Ucho — trojuholníkové */}
        <path d="M42 26 L 46 22 L 48 28 Z" fill="#F5A8B8" stroke="#A55F70" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M44 26 L 47 24" stroke="#A55F70" strokeWidth="0.6" fill="none" />
        {/* Rypák (snout) */}
        <ellipse cx="54" cy="36" rx="4" ry="3.5" fill="#E885A0" stroke="#A55F70" strokeWidth="1.2" />
        {/* Nozdry */}
        <ellipse cx="53" cy="35" rx="0.8" ry="1.2" fill="#5C3416" />
        <ellipse cx="55.5" cy="35" rx="0.8" ry="1.2" fill="#5C3416" />
        {/* Oko */}
        <circle cx="48" cy="31" r="1.4" fill="#1A1A1A" />
        <circle cx="48.4" cy="30.7" r="0.5" fill="#FFF" />
      </svg>
    );
    case 'sheep': return (
      <svg {...props}>
        <ellipse cx="30" cy="56" rx="18" ry="3" fill="#000" opacity=".16" />
        <image href="assets/sheep.svg" x="4" y="3" width="52" height="52" preserveAspectRatio="xMidYMid meet" />
      </svg>
    );
    case 'chick': return (
      <svg {...props}>
        <ellipse cx="30" cy="54" rx="16" ry="2.5" fill="#000" opacity=".22" />
        {/* Telo z boku — vajíčkový tvar */}
        <ellipse cx="26" cy="36" rx="14" ry="13" fill="#FFD455" stroke="#3E2510" strokeWidth="1.5" />
        {/* Krídlo */}
        <path d="M18 32 Q 14 38 18 46 Q 26 44 28 38 Q 24 34 18 32 Z"
          fill="#FFC542" stroke="#3E2510" strokeWidth="1.2" strokeLinejoin="round" />
        {/* Chvostové pierka vzadu */}
        <path d="M12 30 Q 6 28 8 24 M12 32 Q 4 32 6 28 M12 34 Q 4 36 8 32"
          stroke="#3E2510" strokeWidth="1" fill="#FFD455" strokeLinejoin="round" />
        <path d="M12 30 Q 8 28 10 25 L 11 28 Z" fill="#FFD455" stroke="#3E2510" strokeWidth="1" />
        {/* Hlava (vpravo) */}
        <circle cx="38" cy="24" r="10" fill="#FFE085" stroke="#3E2510" strokeWidth="1.5" />
        {/* Hrebienok */}
        <path d="M36 14 Q 38 10 40 14 Q 42 10 44 14 L 44 17 Q 40 16 36 17 Z"
          fill="#E04545" stroke="#3E2510" strokeWidth="1.1" strokeLinejoin="round" />
        {/* Oko */}
        <circle cx="40" cy="22" r="1.8" fill="#1A1A1A" />
        <circle cx="40.4" cy="21.7" r="0.7" fill="#FFF" />
        {/* Zobák */}
        <path d="M46 25 L 52 26 L 46 28 Z" fill="#E89030" stroke="#3E2510" strokeWidth="0.9" strokeLinejoin="round" />
        <path d="M46 25 L 52 26" stroke="#3E2510" strokeWidth="0.6" />
        {/* Lalok */}
        <path d="M44 28 Q 46 31 44 32" fill="#E04545" stroke="#3E2510" strokeWidth="0.9" />
        {/* Nohy */}
        <path d="M24 48 L 22 56 M24 48 L 24 56 M24 48 L 26 56" stroke="#E89030" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 56 L 22 56 L 22 56 M22 56 L 24 56 M24 56 L 26 56" stroke="#E89030" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 48 L 30 56 M32 48 L 32 56 M32 48 L 34 56" stroke="#E89030" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
    case 'rabbit': return (
      <svg {...props}>
        <ellipse cx="30" cy="56" rx="16" ry="3" fill="#000" opacity=".16" />
        <image href="assets/rabbit.svg" x="6" y="3" width="48" height="52" preserveAspectRatio="xMidYMid meet" />
      </svg>
    );
    case 'mushroom': return (
      <svg {...props}>
        <ellipse cx="30" cy="55" rx="11" ry="2" fill="#000" opacity=".22" />
        <rect x="24" y="36" width="12" height="18" rx="2" fill="#FFFDF5" stroke="#3E2510" strokeWidth="1.4" />
        <path d="M10 36 Q 12 18 30 16 Q 48 18 50 36 Q 40 40 30 38 Q 20 40 10 36 Z"
          fill="#E04545" stroke="#3E2510" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="20" cy="26" r="2.5" fill="#FFFDF5" />
        <circle cx="32" cy="22" r="2" fill="#FFFDF5" />
        <circle cx="40" cy="28" r="2.5" fill="#FFFDF5" />
      </svg>
    );
    default: return null;
  }
}

// Pozície krajinných prvkov na mape — vyhýbajú sa zastávkam.
const SCENE_ITEMS = [
  { id: 'sc-1',  kind: 'pig',      x: 4,   y: 54, size: 84 },
  { id: 'sc-2',  kind: 'cottage',  x: 12,  y: 90, size: 90 },
  { id: 'sc-3',  kind: 'sheep',    x: 24,  y: 56, size: 62 },
  { id: 'sc-3b', kind: 'sheep',    x: 18,  y: 61, size: 48 },
  { id: 'sc-3c', kind: 'sheep',    x: 29,  y: 60, size: 52 },
  { id: 'sc-3d', kind: 'sheep',    x: 24,  y: 64, size: 44 },
  { id: 'sc-4',  kind: 'tree',     x: 28,  y: 92, size: 80 },
  { id: 'sc-5',  kind: 'mushroom', x: 36,  y: 56, size: 54 },
  { id: 'sc-6',  kind: 'pine',     x: 44,  y: 90, size: 84 },
  { id: 'sc-7',  kind: 'rabbit',   x: 52,  y: 42, size: 66 },
  { id: 'sc-8',  kind: 'cottage',  x: 64,  y: 92, size: 88 },
  { id: 'sc-9',  kind: 'cow',      x: 70,  y: 46, size: 84 },
  { id: 'sc-10', kind: 'chick',    x: 78,  y: 101, size: 62 },
  { id: 'sc-11', kind: 'tree',     x: 86,  y: 50, size: 78 },
  { id: 'sc-12', kind: 'pine',     x: 94,  y: 90, size: 80 },
  { id: 'sc-13', kind: 'rabbit',   x: 96,  y: 54, size: 66 },
];

function MapScenery() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
      {SCENE_ITEMS.map(it => (
        <div key={it.id} style={{
          position: 'absolute',
          left: `${it.x}%`, top: `${it.y}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 3px 4px rgba(0,0,0,.18))',
        }}>
          <ScenePiece kind={it.kind} size={it.size} />
        </div>
      ))}
    </div>
  );
}
function MapStopWithBadge({ x, y, cat, state, progressPct, stars, isCurrent, badge, nextReward, onLaunch, size = 104 }) {
  const isLocked = state === 'locked';
  const isDone = state === 'done';
  const medalTier = badge?.tier || (isLocked ? null : 'blank');
  const ringColor = isDone ? 'var(--alf-mint-deep)' : isLocked ? '#A6BDD0' : 'var(--alf-sky-deep)';
  const showBattery = !isDone && badge;

  return (
    <div
      onClick={isCurrent ? onLaunch : undefined}
      style={{
        position: 'absolute', left: `${x}%`, top: `${y}%`,
      transform: 'translate(-50%, -50%)',
      zIndex: isCurrent ? 5 : 2, textAlign: 'center',
      cursor: isCurrent ? 'pointer' : 'default',
    }}>
      <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
        {/* progress ring */}
        <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="6" />
          <circle cx="50" cy="50" r="46" fill="none" stroke={ringColor} strokeWidth="6"
            strokeDasharray={`${(progressPct / 100) * 289} 289`} strokeLinecap="round" />
        </svg>

        {/* isCurrent highlight ring */}
        {isCurrent && (
          <div style={{
            position: 'absolute', inset: -6, borderRadius: 99,
            boxShadow: '0 0 0 4px var(--alf-sun), 0 0 22px rgba(255,197,66,.55)',
            pointerEvents: 'none',
          }} />
        )}

        {/* the medal itself — jednotný kruh: biely+farebná ikona (done/current) alebo sivý (locked) */}
        <div className={badge?.vehicle === 'oldhatch' ? 'medalPulse' : undefined} style={{
          position: 'absolute', inset: 10, borderRadius: 99,
          filter: 'drop-shadow(0 4px 10px rgba(15, 30, 55, .22))',
        }}>
          <MedalPieProgress
            filled={isDone ? 0 : (badge?.filledSegments || 0)}
            total={5}
            vehicle={badge?.vehicle}
            accent={badge?.accent || '#1A2B3D'}
            size={size - 20}
            showCount={false}
            locked={isLocked}
          />
        </div>


      </div>

      {/* next-reward pill removed */}
    </div>
  );
}

// ─── Albumček — spodný drevený panel so slotmi ─────────────────────────
function AlbumStrip({ items }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 122,
      background: 'linear-gradient(135deg, #2E73C9 0%, #1E51A6 100%)',
      borderTop: '4px solid var(--alf-sky)',
      boxShadow: 'inset 0 6px 14px -8px rgba(124,196,240,.5), 0 -10px 24px -12px rgba(15,30,55,.45)',
      zIndex: 9,
      padding: '14px 28px 12px',
      display: 'flex', alignItems: 'stretch', gap: 10,
    }}>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 6, alignItems: 'center' }}>
        {items.map(b => {
          const unlocked = b.tier || b.unlocked;
          const filled = b.filledSegments ?? 0;
          const showsLock = !b.glyph && !b.tier && filled === 0;
          return (
            <div key={b.id} title={showsLock ? undefined : (b.name + (b.desc ? ' — ' + b.desc : ''))} style={{
              position: 'relative',
              padding: 6, borderRadius: 16,
              background: 'var(--alf-sky-bg)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,.7), inset 0 0 0 1px rgba(63,169,224,.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 86,
            }}>
              {b.glyph
                ? <SpecialBadge badge={b} size={56} />
                : <MedalPieProgress
                    filled={b.tier ? 0 : filled}
                    total={5}
                    vehicle={b.vehicle}
                    accent={b.accent}
                    size={56}
                    showCount={false}
                    locked={!b.tier && filled === 0}
                  />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Drevená tabuľa (zvetraná, s vyrytými písmenami) ──────────────────
function WoodenSignpost() {
  // Veľkosť dosky podľa pomeru wood.svg (183×90 ≈ 2.03:1)
  const W = 380, H = 188;
  return (
    <div style={{
      position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
      zIndex: 8, pointerEvents: 'auto',
      filter: 'drop-shadow(0 18px 24px rgba(30,15,5,.45))',
    }}>
      <svg width={W} height={H + 24} viewBox={`0 0 ${W} ${H + 24}`} style={{ display: 'block', overflow: 'visible' }}>
        {/* Drevená doska — embedded wood.svg */}
        <image href="assets/wood.svg" x="0" y="22" width={W} height={H}
          preserveAspectRatio="none" />

        {/* Texty + šípka — nad doskou */}
        <SignText />
      </svg>
    </div>
  );
}

// ─── Veľká realistická šípka v strede dosky ─────────────────────────
function BigArrow() {
  // Embedded arrow.svg — menšia, vyššie v doske.
  return (
    <g style={{ cursor: 'pointer' }}>
      <image href="assets/arrow.svg"
        x="118" y="108" width="164" height="82"
        preserveAspectRatio="xMidYMid meet" />
    </g>
  );
}
// Texty (cez data objekt — inak ich editor zabalí do <span>, ktorý SVG <text> neumie).
const SIGN_LABELS = [
  { id: 'top', x: 190, y: 100, size: 30, label: 'CESTA UČENIA' },
];

function SignText() {
  const fontFamily = '"Bowlby One SC", "Alfa Slab One", "Nunito", "Georgia", serif';
  return (
    <g>
      <defs>
        {/* Hnedá paleta C79C5B → 7A3F2A */}
        <linearGradient id="sign-text-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#C79C5B" />
          <stop offset="45%"  stopColor="#A06B3E" />
          <stop offset="100%" stopColor="#7A3F2A" />
        </linearGradient>
      </defs>
      {SIGN_LABELS.map(l => (
        <g key={l.id}>
          {/* svetlý lesk pod textom — mierne tmavší odtieň */}
          <text x={l.x + 1} y={l.y + 1.6}
            fontFamily={fontFamily} fontSize={l.size}
            textAnchor="middle"
            fill="#3E1F12" opacity="0.65"
            style={{ letterSpacing: '0.06em' }}>{l.label}</text>
          {/* hlavný text — hnedý gradient s tmavším obrysom */}
          <text x={l.x} y={l.y}
            fontFamily={fontFamily} fontSize={l.size}
            textAnchor="middle"
            fill="url(#sign-text-grad)"
            stroke="#4A2415" strokeWidth="0.6"
            style={{ letterSpacing: '0.06em', paintOrder: 'stroke fill' }}>{l.label}</text>
        </g>
      ))}
      <BigArrow />
    </g>
  );
}

function Kid_2A_Map_Badges() {
  const stops = [
    { id: 'animals',   x: 4,  y: 76, state: 'done',      progressPct: 100, stars: 3 },
    { id: 'colors',    x: 16, y: 73, state: 'done',      progressPct: 100, stars: 2 },
    { id: 'family',    x: 29, y: 80, state: 'done',      progressPct: 100, stars: 3 },
    { id: 'food',      x: 42, y: 74, state: 'available', progressPct: 60,  stars: 1, isCurrent: true },
    { id: 'numbers',   x: 52, y: 60, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'transport', x: 64, y: 58, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'nature',    x: 73, y: 73, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'music',     x: 81, y: 88, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'body',      x: 88, y: 69, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'alphabet',  x: 90, y: 52, state: 'locked',    progressPct: 0,   stars: 0 },
  ].map(s => ({
    ...s,
    cat: CATEGORIES.find(c => c.id === s.id),
    badge: CATEGORY_BADGES.find(b => b.catId === s.id),
  }));

  const currentStop = stops.find(s => s.isCurrent);
  const nextRewardBadge = currentStop ? CATEGORY_BADGES.find(b => b.catId === currentStop.id) : null;

  // Test, ktorý sa spustí po kliknutí na blikajúcu (aktuálnu) zastávku — vybraný z 2D.
  const [popup, setPopup] = React.useState(null);
  const currentTest = { id: 'food-1', age: '3', name: 'Čím sa živia zvieratká', rating: 'good' };

  const pathD = stops.map((s, i) => {
    const x = (s.x / 100) * 1440;
    const y = (s.y / 100) * 780;
    if (i === 0) return `M ${x} ${y}`;
    const prev = stops[i - 1];
    const px = (prev.x / 100) * 1440;
    const py = (prev.y / 100) * 780;
    const cx = (px + x) / 2;
    const cy = Math.min(py, y) - 30;
    return `Q ${cx} ${cy} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="alf-root" style={{ display: 'flex', position: 'relative' }}>
      <KidSidebar active="map" />
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <style>{`
          @keyframes medalSwing {
            0%,100% { transform: rotate(-4deg); }
            50%     { transform: rotate(4deg); }
          }
          @keyframes medalPulse {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.16); }
          }
          .medalPulse { animation: medalPulse 1.5s ease-in-out infinite; transform-origin: center; }
        `}</style>

        {/* Spodný pás zelenej trávy — vypĺňa priestor pod liftnutou mapou */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 122, height: 130,
          background: 'linear-gradient(180deg, #9DCB6C 0%, #7CB85A 100%)',
          zIndex: 0,
        }} />

        {/* Cestička + zastávky + scenéria — posunuté vyššie */}
        <div style={{ position: 'absolute', top: -40, left: 0, right: 0, bottom: 200 }}>
          <TopDownMap />
          {/* Tmavšie hnedé prekryvy cestického chodníka */}
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <path d="M 60 720 Q 220 600 380 690 T 700 580 T 1020 690 T 1300 460"
              fill="none" stroke="#7A4520" strokeWidth="62" strokeLinecap="round" />
            <path d="M 60 720 Q 220 600 380 690 T 700 580 T 1020 690 T 1300 460"
              fill="none" stroke="#A06535" strokeWidth="52" strokeLinecap="round" />
          </svg>
          <MapScenery />
        </div>

        <div style={{ position: 'absolute', top: -40, left: 0, right: 0, bottom: 200, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'auto' }}>
            {stops.map((s) => (
              <MapStopWithBadge
                key={s.id} x={s.x} y={s.y} cat={s.cat}
                state={s.state} progressPct={s.progressPct} stars={s.stars}
                isCurrent={s.isCurrent}
                badge={s.badge}
                nextReward={s.isCurrent ? nextRewardBadge : null}
                onLaunch={s.isCurrent ? () => setPopup(currentTest) : undefined}
              />
            ))}
          </div>
        </div>

        {/* Pokračovať button removed */}

        {/* Header — button v štýle 2C1 (hero top row) */}
        <div style={{
          position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)',
          zIndex: 8,
          background: 'linear-gradient(135deg, #2E73C9 0%, #1E51A6 100%)',
          color: '#fff', borderRadius: 22, padding: '14px 30px 14px 16px',
          display: 'flex', alignItems: 'center', gap: 18,
          boxShadow: 'var(--alf-shadow-elevate)',
        }}>
          <div style={{ width: 60, height: 60, background: '#fff', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--alf-sky-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          </div>
          <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>Cesta učenia</div>
        </div>

        <AlbumStrip items={ALL_BADGES} />
      </main>
      <TestIntroPopup test={popup} onClose={() => setPopup(null)} />
    </div>
  );
}

Object.assign(window, { Kid_2A_Map_Badges });
