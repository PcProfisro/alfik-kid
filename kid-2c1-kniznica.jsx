/* kid-2c1-kniznica.jsx — 2C1 · Knižnica.
 * Tiles are the 10 MAIN categories from 1B1 (CATEGORIES in shared.jsx):
 * Zvieratá, Príroda, Čísla, Farby, Abeceda, Doprava, Jedlo, Rodina, Hudba,
 * Telo a zdravie. Concept icons are hand-drawn here in the same flat, rounded,
 * brand-coloured style as the animal glyphs in kid-glyphs.jsx.
 */

const CAT_STROKE = '#3E2A1C';
function CategoryGlyph({ kind, size = 120 }) {
  const S = CAT_STROKE;
  const props = { width: size, height: size, viewBox: '0 0 64 64', style: { display: 'block', overflow: 'visible' } };
  switch (kind) {
    case 'star': return (
      <svg {...props}>
        <path d="M32 6 39.6 21.6 56.7 24 44.3 36 47.3 53 32 44.8 16.7 53 19.7 36 7.3 24 24.4 21.6Z" fill="#FFC857" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    );
    case 'animals': return (
      <svg {...props}>
        <circle cx="19" cy="26" r="5.5" fill="#E8833A" stroke={S} strokeWidth="2" />
        <circle cx="32" cy="21" r="6" fill="#E8833A" stroke={S} strokeWidth="2" />
        <circle cx="45" cy="26" r="5.5" fill="#E8833A" stroke={S} strokeWidth="2" />
        <circle cx="52" cy="38" r="4.6" fill="#E8833A" stroke={S} strokeWidth="2" />
        <circle cx="12" cy="38" r="4.6" fill="#E8833A" stroke={S} strokeWidth="2" />
        <ellipse cx="32" cy="44" rx="13" ry="11" fill="#E8833A" stroke={S} strokeWidth="2.4" />
      </svg>
    );
    case 'nature': return (
      <svg {...props}>
        <path d="M32 8 C 13 14 11 41 30 55 C 51 45 53 16 32 8 Z" fill="#3DB874" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M31 13 L31 52" stroke="#1F7A4A" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M31 24 L21 19 M31 33 L20 31 M31 24 L41 18 M31 33 L42 30" stroke="#1F7A4A" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
    case 'numbers': return (
      <svg {...props}>
        <rect x="7" y="18" width="50" height="30" rx="9" fill="#FFC857" stroke={S} strokeWidth="2.4" />
        <text x="32" y="41" textAnchor="middle" fontFamily="'Baloo 2', sans-serif" fontSize="23" fontWeight="800" fill="#3E2A1C">123</text>
      </svg>
    );
    case 'colors': return (
      <svg {...props}>
        <path d="M32 11 C 12 11 7 33 18 46 C 24 53 31 48 35 46 C 39 44 43 49 49 44 C 57 37 54 14 32 11 Z" fill="#FBF7EE" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="22" cy="25" r="3.6" fill="#E8473B" />
        <circle cx="33" cy="21" r="3.6" fill="#3FA9E0" />
        <circle cx="43" cy="26" r="3.6" fill="#FFC542" />
        <circle cx="24" cy="37" r="3.4" fill="#3DB874" />
        <circle cx="40" cy="37" r="3.2" fill="#8B7CF6" />
        <ellipse cx="34" cy="45" rx="4.4" ry="3.2" fill="#fff" stroke={S} strokeWidth="1.4" />
      </svg>
    );
    case 'alphabet': return (
      <svg {...props}>
        <rect x="7" y="18" width="50" height="30" rx="9" fill="#DBEEF9" stroke={S} strokeWidth="2.4" />
        <text x="32" y="41" textAnchor="middle" fontFamily="'Baloo 2', sans-serif" fontSize="22" fontWeight="800" fill="#1F5C82">ABC</text>
      </svg>
    );
    case 'transport': return (
      <svg {...props}>
        <path d="M5 41 L10 28 Q12 24 17 24 L43 24 Q48 24 50 28 L57 41 L57 47 Q57 48 56 48 L6 48 Q5 48 5 47 Z" fill="#E8473B" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M16 28 L25 28 L25 36 L11 36 Z" fill="#BFE2FF" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M29 28 L43 28 L48 36 L29 36 Z" fill="#BFE2FF" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="18" cy="48" r="6.5" fill="#1A2B3D" stroke={S} strokeWidth="1.6" />
        <circle cx="18" cy="48" r="2.6" fill="#fff" />
        <circle cx="46" cy="48" r="6.5" fill="#1A2B3D" stroke={S} strokeWidth="1.6" />
        <circle cx="46" cy="48" r="2.6" fill="#fff" />
      </svg>
    );
    case 'food': return (
      <svg {...props}>
        <path d="M32 19 C 26 13 15 15 13 26 C 11 37 18 52 26 54 C 29 55 30 53 32 53 C 34 53 35 55 38 54 C 46 52 53 37 51 26 C 49 15 38 13 32 19 Z" fill="#E8473B" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M32 19 Q 33 10 41 8" stroke={S} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M34 14 Q 43 9 45 16 Q 38 19 34 14 Z" fill="#3DB874" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M21 28 Q 25 23 30 26" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity=".5" />
      </svg>
    );
    case 'family': return (
      <svg {...props}>
        <circle cx="23" cy="22" r="7.5" fill="#3FA9E0" stroke={S} strokeWidth="2.2" />
        <path d="M11 52 Q11 33 23 33 Q35 33 35 52 Z" fill="#3FA9E0" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="45" cy="29" r="6" fill="#FF8A65" stroke={S} strokeWidth="2.2" />
        <path d="M35 52 Q35 39 45 39 Q55 39 55 52 Z" fill="#FF8A65" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    );
    case 'music': return (
      <svg {...props}>
        <path d="M22 15 L47 11 L47 19 L22 23 Z" fill="#8B7CF6" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="22" y="19" width="3.6" height="24" fill="#8B7CF6" stroke={S} strokeWidth="0.8" />
        <rect x="43.4" y="15" width="3.6" height="24" fill="#8B7CF6" stroke={S} strokeWidth="0.8" />
        <ellipse cx="19" cy="45" rx="6.5" ry="5" fill="#8B7CF6" stroke={S} strokeWidth="1.8" transform="rotate(-18 19 45)" />
        <ellipse cx="40.4" cy="41" rx="6.5" ry="5" fill="#8B7CF6" stroke={S} strokeWidth="1.8" transform="rotate(-18 40.4 41)" />
      </svg>
    );
    case 'body': return (
      <svg {...props}>
        <path d="M32 51 C 9 36 12 17 25 17 C 30 17 32 21 32 22 C 32 21 34 17 39 17 C 52 17 55 36 32 51 Z" fill="#FF6B6B" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M21 28 Q 25 23 30 27" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity=".55" />
      </svg>
    );
    default: return null;
  }
}

function Kid_2B1_Categories() {
  const nav = window.useNav?.();
  const cats = [
    { id: 'animals',   name: 'Zvieratá',       kind: 'animals',   tint: '#FFE3D6' },
    { id: 'nature',    name: 'Príroda',        kind: 'nature',    tint: '#D9F8EF' },
    { id: 'numbers',   name: 'Čísla',          kind: 'numbers',   tint: '#FFF3D6' },
    { id: 'colors',    name: 'Farby',          kind: 'colors',    tint: '#E6E1FB' },
    { id: 'alphabet',  name: 'Abeceda',        kind: 'alphabet',  tint: '#DBEEF9' },
    { id: 'transport', name: 'Doprava',        kind: 'transport', tint: '#FFE3E3' },
    { id: 'food',      name: 'Jedlo',          kind: 'food',      tint: '#E4F3D4' },
    { id: 'family',    name: 'Rodina',         kind: 'family',    tint: '#FFF3D6' },
    { id: 'music',     name: 'Hudba',          kind: 'music',     tint: '#E6E1FB' },
    { id: 'body',      name: 'Telo a zdravie', kind: 'body',      tint: '#FFE3E3' },
  ];

  // Speak a Slovak word aloud (Web Speech API). Prefers a Slovak voice if the
  // browser has one; falls back to lang='sk-SK' on the default voice.
  const speak = (text) => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'sk-SK';
      u.rate = 0.92;
      u.pitch = 1.15; // slightly higher → friendlier, more feminine timbre
      const voices = synth.getVoices();
      const skVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('sk'));
      const femaleHint = /(laura|female|žena|zena|katar|zuzana|mária|maria|google)/i;
      const pick =
        skVoices.find((v) => femaleHint.test(v.name)) ||  // Slovak female
        skVoices[0] ||                                     // any Slovak
        voices.find((v) => femaleHint.test(v.name));       // any female fallback
      if (pick) u.voice = pick;
      synth.speak(u);
    } catch (e) { /* speech not supported */ }
  };

  const cornerIcon = (kind) => kind === 'back'
    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" /></svg>;
  const cornerBtn = (kind, label, side) => (
    <button title={label} style={{
      position: 'absolute', top: 41, [side]: 22, zIndex: 12,
      width: 50, height: 50, borderRadius: 99, border: 'none', background: '#fff', cursor: 'pointer',
      boxShadow: '0 5px 14px -6px rgba(15,30,55,.28), 0 2px 4px rgba(15,30,55,.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--alf-sky-deep)', padding: 0,
    }}>{cornerIcon(kind)}</button>
  );

  return (
    <div className="alf-root" style={{ display: 'flex' }}>
      <style>{`
        .b1xcard { transition: transform .16s cubic-bezier(.2,.7,.3,1), box-shadow .16s ease; }
        .b1xcard:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -12px rgba(15,30,55,.30); }
        .b1xcard:hover .b1xzone { transform: scale(1.04); }
        .b1xzone { transition: transform .2s cubic-bezier(.2,.7,.3,1); }
      `}</style>
      <KidSidebar active="library" />
      <main style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, #DBEEF9 0%, #F2F7FB 60%)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* compact hero top row */}
        <div style={{ padding: '18px 0 0' }}>
          <div style={{
            width: 920, maxWidth: 'calc(100% - 168px)', margin: '0 auto',
            background: 'linear-gradient(135deg, #2E73C9 0%, #1E51A6 100%)',
            color: '#fff', borderRadius: 22, padding: '14px 24px',
            display: 'flex', alignItems: 'center', gap: 20, position: 'relative', overflow: 'hidden',
            boxShadow: 'var(--alf-shadow-elevate)',
          }}>
            <div style={{ width: 60, height: 60, background: '#fff', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--alf-sky-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59 27.98 27.98 0 0 0 .002 7.83C3.12 18.318 4.666 20 6.4 20h.2c.56 0 1.104-.223 1.5-.616l.17-.17c.37-.37.873-.584 1.397-.584h4.666c.524 0 1.026.213 1.396.583l.171.171c.397.394.941.617 1.5.617h.2c1.734 0 3.279-1.682 3.675-3.58a27.98 27.98 0 0 0 .001-7.83A4 4 0 0 0 17.32 5z"/><circle cx="9" cy="11" r="1.8"/><circle cx="15" cy="11" r="1.8"/></svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>Ihrisko</div>
            </div>
          </div>
        </div>

        {/* category grid — square tiles, 4 columns */}
        <div style={{
          flex: 1,
          padding: '14px 84px 24px',
          display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 218px))', gap: 16,
          justifyContent: 'center', alignContent: 'center',
        }}>
          {cats.map((c) => (
            <div key={c.id} className="b1xcard" onClick={() => { if (!nav) speak(c.name); if (c.id === 'animals') nav?.go('2c2'); }} title={`Vypočuť: ${c.name}`} style={{
              background: '#fff', borderRadius: 20, padding: 13, aspectRatio: '1 / 1',
              display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer',
              boxShadow: 'var(--alf-shadow-tile)',
            }}>
              <div className="b1xzone" style={{
                background: c.tint, borderRadius: 15, flex: 1, minHeight: 0, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,.5)', filter: 'blur(8px)', top: -30 }} />
                <div style={{ position: 'relative', filter: 'drop-shadow(0 5px 6px rgba(0,0,0,.12))' }}>
                  <CategoryGlyph kind={c.kind} size={116} />
                </div>
              </div>
              <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 17, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1.1, textAlign: 'center' }}>{c.name}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { Kid_2B1_Categories, CategoryGlyph });
