/* kid.jsx — Hi-fi artboards for the kid app.
 *   Kid_2A_Map           (overhead winding path with category stops)
 *   Kid_2A_MapStorybook  (alt: zoomed-in storybook section, illustrative)
 *   Kid_2C_Materials     (banner + test rows per components.md §4 + §5)
 *
 * Designed at 1440 × 900. Kid screens omit a top nav bar in favour of
 * big circular back/home buttons in the corners (per components.md §3).
 */

// ─── Corner buttons (no nav bar) ────────────────────────────────────────
function CornerBtn({ icon, label, position }) {
  const map = {
    'top-left':       { top: 24, left: 24 },
    'top-right':      { top: 24, right: 24 },
    'bottom-left':    { bottom: 24, left: 24 },
    'bottom-right':   { bottom: 24, right: 24 },
    'center-left':    { top: '50%', left: 24, transform: 'translateY(-50%)' },
    'center-right':   { top: '50%', right: 24, transform: 'translateY(-50%)' },
    'hero-left':      { top: 70, left: 24 },
    'hero-right':     { top: 70, right: 24 },
  };
  return (
    <button style={{
      position: 'absolute', ...map[position], zIndex: 10,
      width: 64, height: 64, borderRadius: 99, border: 'none',
      background: '#fff', cursor: 'pointer',
      boxShadow: '0 6px 16px -6px rgba(15, 30, 55, .25), 0 2px 4px rgba(15, 30, 55, .06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--alf-sky-deep)',
    }} title={label}>
      {icon}
    </button>
  );
}

function BackIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6"/></svg>;
}
function HomeIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></svg>;
}

// ─── Coin/diamond/progress chips for stops ──────────────────────────────
function StarRow({ filled = 0, total = 3, size = 18 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: total }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < filled ? 'var(--alf-sun)' : 'rgba(255,255,255,.45)'} stroke={i < filled ? 'var(--alf-sun-deep)' : 'rgba(255,255,255,.6)'} strokeWidth="1.5">
          <path d="m12 3 2.6 5.4 5.9.7-4.4 4.1 1.2 5.8-5.3-2.9-5.3 2.9 1.2-5.8L3.5 9.1l5.9-.7z"/>
        </svg>
      ))}
    </div>
  );
}

// Top-down map background — flat aerial view (no perspective).
function TopDownMap({ children }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: '#B5DC8C',
    }}>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* terrain patches — forest, meadow, field */}
        <path d="M 0 0 L 360 0 L 420 120 L 320 240 L 180 200 L 60 320 L 0 280 Z" fill="#7AB85A" opacity=".75" />
        <path d="M 1100 0 L 1440 0 L 1440 380 L 1300 320 L 1180 360 L 1080 220 Z" fill="#7AB85A" opacity=".7" />
        <path d="M 0 600 L 180 540 L 320 620 L 280 760 L 120 820 L 0 760 Z" fill="#9DCB6C" opacity=".7" />
        <path d="M 980 740 L 1180 700 L 1340 780 L 1440 740 L 1440 900 L 980 900 Z" fill="#7AB85A" opacity=".7" />

        {/* dirt clearing under path */}
        <path d="M 60 720 Q 220 600 380 690 T 700 580 T 1020 690 T 1300 460" fill="none" stroke="#E0C18C" strokeWidth="60" strokeLinecap="round" opacity=".55" />

        {/* fields with crop stripes (top right) */}
        <g transform="translate(820 380)">
          <rect x="0" y="0" width="180" height="120" fill="#D8B96A" opacity=".65" rx="8" />
          {Array.from({ length: 6 }).map((_, i) =>
            <line key={i} x1="8" y1={12 + i * 18} x2="172" y2={12 + i * 18} stroke="#A98742" strokeWidth="2" opacity=".5" />
          )}
        </g>

        {/* pond (oval, top-down) */}
        <ellipse cx="320" cy="420" rx="90" ry="60" fill="#7CC4F0" />
        <ellipse cx="320" cy="420" rx="76" ry="48" fill="#9FD6F5" />
        <ellipse cx="306" cy="406" rx="22" ry="10" fill="#fff" opacity=".4" />

        {/* river curve — pod hornou tabuľou */}
        <path d="M -20 220 Q 200 300 380 260 T 720 320 Q 900 360 1080 300 T 1460 280" fill="none" stroke="#7CC4F0" strokeWidth="34" strokeLinecap="round" opacity=".85" />
        <path d="M -20 220 Q 200 300 380 260 T 720 320 Q 900 360 1080 300 T 1460 280" fill="none" stroke="#9FD6F5" strokeWidth="22" strokeLinecap="round" />

        {/* trees — top-down circular tufts with darker outline */}
        {[
          [120, 240, 22], [180, 280, 18], [80, 320, 16], [220, 220, 14],
          [560, 140, 24], [620, 180, 18], [580, 220, 16],
          [1100, 480, 20], [1150, 520, 22], [1200, 480, 16], [1080, 540, 18],
          [420, 800, 18], [480, 820, 20], [380, 840, 16],
          [800, 750, 18], [860, 770, 20],
        ].map(([x, y, r], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r={r} fill="#4F8C3A" />
            <circle r={r - 4} fill="#67B04E" />
            <circle cx="-3" cy="-3" r={r * 0.35} fill="#85C56A" opacity=".7" />
          </g>
        ))}

        {/* houses (top-down: rounded square with darker roof patch) */}
        {[
          [680, 480, 36, 26, '#D97757'],
          [740, 510, 28, 22, '#C9A65B'],
          [1240, 620, 32, 24, '#8B7CF6'],
          [200, 700, 30, 22, '#D97757'],
        ].map(([x, y, w, h, c], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect x={-w/2} y={-h/2} width={w} height={h} rx="4" fill="#fff" stroke="#9A8870" strokeWidth="1.5" />
            <rect x={-w/2 + 4} y={-h/2 + 4} width={w - 8} height={h - 8} rx="2" fill={c} opacity=".85" />
          </g>
        ))}

        {/* meadow flowers — tiny dots (bez coral akcentu) */}
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i * 137) % 1440; const y = ((i * 213) % 900);
          const c = ['#FFC542', '#fff', '#8B7CF6', '#fff'][i % 4];
          return <circle key={i} cx={x} cy={y} r="3" fill={c} opacity=".7" />;
        })}
      </svg>
      {children}
    </div>
  );
}

// Map stop — circular tile with category icon, name beneath, progress ring.
function MapStop({ x, y, cat, state = 'available', progressPct = 0, stars = 0, isCurrent, size = 96, hideCheckmark = false, hideLabel = false, hideStars = false, topRightOverlay = null }) {
  // state: 'done' | 'available' | 'locked' | 'next'
  const isLocked = state === 'locked';
  const isDone = state === 'done';
  const ring = isDone ? 'var(--alf-mint-deep)' : isLocked ? '#A6BDD0' : 'var(--alf-sky-deep)';
  const fill = isLocked ? '#E1E9F0' : '#fff';
  return (
    <div style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: isCurrent ? 5 : 2 }}>
      {/* progress ring */}
      <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
        <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="8" />
          <circle cx="50" cy="50" r="45" fill="none" stroke={ring} strokeWidth="8"
            strokeDasharray={`${progressPct * 2.83} 283`} strokeLinecap="round" />
        </svg>
        <div style={{
          position: 'absolute', inset: 8, borderRadius: 99, background: fill,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: isCurrent ? '0 0 0 4px var(--alf-sun), 0 6px 16px -4px rgba(0,0,0,.25)' : '0 4px 10px -3px rgba(0,0,0,.18)',
          opacity: isLocked ? 0.7 : 1,
        }}>
          {isLocked ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7891A8" strokeWidth="2.5" strokeLinecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
          ) : (
            <img src={ASSET(cat.icon)} alt="" style={{ width: size * 0.62, height: size * 0.62, objectFit: 'contain' }} />
          )}
        </div>
        {isDone && !hideCheckmark && (
          <div style={{ position: 'absolute', top: -4, right: -4, width: 30, height: 30, borderRadius: 99, background: 'var(--alf-mint-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16, boxShadow: '0 3px 8px rgba(0,0,0,.2)' }}>✓</div>
        )}
        {topRightOverlay && (
          <div style={{ position: 'absolute', top: -10, right: -14, zIndex: 4 }}>
            {topRightOverlay}
          </div>
        )}
      </div>
      {!hideLabel && (
        <div style={{
          marginTop: 8, display: 'inline-block',
          padding: '6px 14px', borderRadius: 99, background: '#fff',
          fontFamily: 'var(--alf-font-display)', fontSize: 16, fontWeight: 700,
          color: isLocked ? 'var(--alf-ink-mute)' : 'var(--alf-ink)',
          boxShadow: '0 3px 8px -3px rgba(0,0,0,.15)',
          whiteSpace: 'nowrap',
        }}>{cat.name}</div>
      )}
      {!hideStars && stars > 0 && (
        <div style={{ marginTop: 6, display: 'flex', justifyContent: 'center' }}>
          <StarRow filled={stars} total={3} size={16} />
        </div>
      )}
    </div>
  );
}

// ─── Kid sidebar (left rail) ────────────────────────────────────────────
function KidSidebar({ active = 'map' }) {
  // Icon-only rail of big, friendly buttons — no text labels (kindergarten kids
  // navigate by picture, not by reading). Childlike filled icons.
  const nav = window.useNav?.();
  const items = [
    { key: 'intro',   label: 'Úvod',         deep: '#FF9F2D', tint: '#FFE7BE', icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3 3.05a1 1 0 0 1 1.4 0l8.05 7.55A1 1 0 0 1 20 12.4V19a2 2 0 0 1-2 2h-2.5v-4.5a3 3 0 0 0-6 0V21H6a2 2 0 0 1-2-2v-6.6a1 1 0 0 1 .25-.85z"/></svg>
    ) },
    { key: 'map',     label: 'Cesta učenia', deep: '#2EB892', tint: '#C6F2E5', icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.2c-4 0-7.2 3.1-7.2 7 0 4.9 6.1 11.8 6.4 12.1a1 1 0 0 0 1.6 0c.3-.3 6.4-7.2 6.4-12.1 0-3.9-3.2-7-7.2-7z M9.3 9.1 A2.7 2.7 0 1 0 14.7 9.1 A2.7 2.7 0 1 0 9.3 9.1 Z"/></svg>
    ) },
    { key: 'library', label: 'Ihrisko',      deep: '#3FA9E0', tint: '#C4E6F7', icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59 27.98 27.98 0 0 0 .002 7.83C3.12 18.318 4.666 20 6.4 20h.2c.56 0 1.104-.223 1.5-.616l.17-.17c.37-.37.873-.584 1.397-.584h4.666c.524 0 1.026.213 1.396.583l.171.171c.397.394.941.617 1.5.617h.2c1.734 0 3.279-1.682 3.675-3.58a27.98 27.98 0 0 0 .001-7.83A4 4 0 0 0 17.32 5z"/><circle cx="9" cy="11" r="1.8"/><circle cx="15" cy="11" r="1.8"/></svg>
    ) },
  ];

  return (
    <aside style={{
      width: 92, flexShrink: 0, height: '100%',
      background: 'linear-gradient(180deg, #2E73C9 0%, #1E51A6 100%)',
      boxShadow: '5px 0 22px -8px rgba(20,45,95,.5)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 30,
    }}>
      <style>{`
        .kidnavbtn { transition: transform .15s cubic-bezier(.2,.7,.3,1), background .15s ease, box-shadow .15s ease; }
        .kidnavbtn:hover { transform: translateY(-3px); }
        /* bottom trigger buttons: blend onto the blue rail with white icons.
           Scoped to the DIRECT trigger button so the (light) popups stay intact. */
        .kid-foot > div { border-top-color: rgba(255,255,255,.18) !important; }
        .kid-foot > div > button { background: transparent !important; }
        .kid-foot > div > button:hover { background: rgba(255,255,255,.12) !important; }
        .kid-foot > div > button > span { background: transparent !important; width: 46px !important; height: 46px !important; }
        .kid-foot > div > button svg { fill: #fff !important; width: 28px !important; height: 28px !important; }
      `}</style>

      {/* Alfík mascot mark on a full-width header band */}
      <div style={{
        width: '100%', background: '#DCEDF9', padding: '10px 0 12px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 5px 14px -6px rgba(20,45,95,.45)',
      }}>
        <img src={ASSET('icon_alfik_sk.svg')} alt="Alfík" style={{ height: 68, width: 'auto', display: 'block' }} />
      </div>

      <nav style={{ padding: '8px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flex: 1 }}>
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <a key={it.key} href="#" className="kidnavbtn" title={it.label}
              onClick={(e) => {
                e.preventDefault();
                if (it.key === 'intro') nav?.go('2a');
                else if (it.key === 'map') nav?.go('2b');
                else if (it.key === 'library') nav?.go('2c1');
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,.28)'; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,.15)'; }}
              style={{
                width: 60, height: 60, borderRadius: 20, textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isActive ? '#FFC542' : 'rgba(255,255,255,.15)',
                color: isActive ? '#1E51A6' : '#fff',
                boxShadow: isActive ? '0 10px 20px -6px rgba(255,197,66,.6)' : 'none',
              }}>
              {it.icon}
            </a>
          );
        })}
      </nav>

      <div className="kid-foot" style={{ width: '100%' }}>
        <AppsLauncher collapsed={true} />
        <ProfileFooter teacherName="Mia" role="kid" collapsed={true} avatarImg={ASSET('avatar_fox.svg')} avatarSize={46} />
      </div>
    </aside>
  );
}

// ─── 2 · Úvod (welcome) ─────────────────────────────────────────────────
function Kid_2_Intro() {
  // Stats pulled from the 2A badge album / journey.
  const earned = ALL_BADGES.filter((b) => b.tier || b.unlocked);
  const totalBadges = ALL_BADGES.length;
  const pct = Math.round((earned.length / totalBadges) * 100);

  const review = [
    { id: 'r1', name: 'Domáce zvieratá', kind: 'cow',  tint: '#FFF3D6', tags: ['videá'] },
    { id: 'r2', name: 'Lesné zvieratá',  kind: 'fox',  tint: '#D9F8EF', tags: ['testy'] },
    { id: 'r3', name: 'Vtáčiky',         kind: 'bird', tint: '#DBEEF9', tags: ['pesničky'] },
    { id: 'r4', name: 'ZOO zvieratá',    kind: 'lion', tint: '#FFE3D6', tags: ['videá'] },
  ];

  const [popup, setPopup] = React.useState(null);
  const nav = window.useNav?.();

  const StatCard = ({ icon, value, label, fg, bg }) => (
    <div style={{ background: '#fff', borderRadius: 20, padding: '15px 18px', boxShadow: 'var(--alf-shadow-tile)', display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
      <div style={{ width: 50, height: 50, borderRadius: 15, background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 24, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--alf-ink-mute)', marginTop: 4 }}>{label}</div>
      </div>
    </div>
  );

  return (
    <div className="alf-root" style={{ display: 'flex', position: 'relative' }}>
      <style>{`
        .ucard { transition: transform .16s cubic-bezier(.2,.7,.3,1), box-shadow .16s ease; }
        .ucard:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -12px rgba(15,30,55,.30); }
        .ucard:hover .uzone { transform: scale(1.05); }
        .uzone { transition: transform .2s cubic-bezier(.2,.7,.3,1); }
        .ucta:hover { transform: translateY(-2px); filter: brightness(1.05); }
      `}</style>
      <KidSidebar active="intro" />
      <main style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, #DBEEF9 0%, #F2F7FB 60%)',
        display: 'flex', flexDirection: 'column', padding: '24px 36px 26px', gap: 16,
      }}>
        {/* greeting hero */}
        <div style={{
          background: 'linear-gradient(135deg, #2E73C9 0%, #1E51A6 100%)',
          color: '#fff', borderRadius: 24, padding: '22px 28px', position: 'relative', overflow: 'hidden',
          boxShadow: 'var(--alf-shadow-elevate)', flexShrink: 0,
        }}>
          <div style={{ maxWidth: '74%' }}>
            <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 34, fontWeight: 700, lineHeight: 1 }}>Ahoj, Peter!</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,.75)', marginTop: 8 }}>Pokračuj vo svojom dobrodružstve — čaká ťa Cesta učenia.</div>
            <button className="ucta" onClick={() => nav?.go('2b')} style={{
              marginTop: 16, border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '11px 20px', borderRadius: 99,
              background: '#FBF9D5',
              color: 'var(--alf-ink)', fontFamily: 'var(--alf-font-display)', fontSize: 16, fontWeight: 700,
              boxShadow: '0 8px 18px -6px rgba(40,60,30,.25)', transition: 'transform .15s ease, filter .15s ease',
            }}>
              Pokračovať v ceste
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
            </button>
          </div>
          <img src={MASCOT} alt="" style={{ position: 'absolute', right: 30, bottom: 0, height: 150, objectFit: 'contain', pointerEvents: 'none' }} />
        </div>

        {/* middle: badge album (2A) + stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16, flex: 1, minHeight: 0 }}>
          {/* album of badges */}
          <div style={{ background: '#fff', borderRadius: 24, padding: 22, boxShadow: 'var(--alf-shadow-tile)', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 20, fontWeight: 700, color: 'var(--alf-ink)' }}>Môj album odznakov</div>
              <span style={{ padding: '5px 14px', borderRadius: 99, background: 'var(--alf-sky-bg)', color: 'var(--alf-sky-ink)', fontFamily: 'var(--alf-font-display)', fontSize: 14, fontWeight: 800 }}>{earned.length} z {totalBadges}</span>
            </div>
            <div style={{ height: 10, borderRadius: 99, background: 'var(--alf-sky-bg)', overflow: 'hidden' }}>
              <div style={{ width: pct + '%', height: '100%', background: 'linear-gradient(90deg, var(--alf-sky), var(--alf-sky-deep))', borderRadius: 99 }} />
            </div>
            <div style={{ flex: 1, background: '#F4F8FC', border: '1px solid var(--alf-line)', borderRadius: 16, padding: 16, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', alignContent: 'center', justifyContent: 'center', minHeight: 0 }}>
              {ALL_BADGES.map((b) => (
                <div key={b.id} title={(b.tier || b.unlocked) ? b.name + (b.desc ? ' — ' + b.desc : '') : undefined}><AnyBadge badge={b} size={56} /></div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--alf-sun-bg)', borderRadius: 14, padding: '10px 14px' }}>
              <MedalPieProgress filled={3} total={5} vehicle="oldhatch" size={46} showCount={false} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 14, fontWeight: 700, color: 'var(--alf-ink)' }}>Najbližší odznak</div>
                <div style={{ fontSize: 12.5, color: 'var(--alf-ink-soft)', marginTop: 2 }}>Dokonči zastávku <strong>Jedlo</strong> — ešte 2 z 5</div>
              </div>
            </div>
          </div>

          {/* stats from 2A */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
            <StatCard
              bg="var(--alf-sky-bg)" fg="var(--alf-sky-deep)"
              value="3 / 10" label="Splnené zastávky"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>}
            />
            <StatCard
              bg="var(--alf-sun-bg)" fg="var(--alf-sun-deep)"
              value="9" label="Získané hviezdičky"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.6 5.4 5.9.7-4.4 4.1 1.2 5.8-5.3-2.9-5.3 2.9 1.2-5.8L3.5 9.1l5.9-.7z"/></svg>}
            />
            <StatCard
              bg="var(--alf-coral-bg)" fg="#E76F51"
              value="7 dní" label="Hráš v rade"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 2-3 2-5 2 2 3 0 3-4z"/></svg>}
            />
          </div>
        </div>

        {/* nauč sa niečo nové — riadok prevzatý z 2D (foto dlaždice) */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 20, fontWeight: 700, color: 'var(--alf-ink)' }}>Nauč sa niečo nové</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { id: 't1', age: '3', name: 'Domáce zvieratá',      rating: 'great', img: 'kid-2c-img/domace-1.jpg' },
              { id: 't2', age: '3', name: 'Domáce mláďatá',       rating: 'great', img: 'kid-2c-img/domace-2.jpg' },
              { id: 't3', age: '4', name: 'Kde je moja mamička?', rating: 'good',  img: 'kid-2c-img/kde-mamicka.jpg' },
              { id: 't4', age: '3', name: 'Kto povedal mňau?',    rating: 'good',  img: 'kid-2c-img/kto-mnau.jpg' },
            ].map((t) => (
              <div key={t.id} className="ucard" onClick={() => setPopup(t)} style={{ background: '#fff', borderRadius: 20, padding: 13, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: 'var(--alf-shadow-tile)', cursor: 'pointer' }}>
                <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '5 / 3', background: 'var(--alf-bg)', boxShadow: 'inset 0 0 0 1px rgba(15,30,55,.07)' }}>
                  <img src={t.img} alt={t.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 2px' }}>
                  <div style={{ flex: 1, fontFamily: 'var(--alf-font-display)', fontSize: 14.5, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1.15 }}>{t.name}</div>
                  <AgeIcon age={t.age} size={28} />
                  {t.rating && <RatingBadge rating={t.rating} size={30} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <TestIntroPopup test={popup} onClose={() => setPopup(null)} />
    </div>
  );
}

// Mini stylized map preview for the intro card.
function MiniMapPreview() {
  return (
    <svg viewBox="0 0 460 220" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      {/* base grass */}
      <rect width="460" height="220" fill="#B5DC8C" />
      {/* path island shapes (light beige) */}
      <ellipse cx="110" cy="110" rx="80" ry="50" fill="#F0E2C2" />
      <ellipse cx="230" cy="80"  rx="70" ry="40" fill="#F0E2C2" />
      <ellipse cx="350" cy="140" rx="80" ry="48" fill="#F0E2C2" />
      <ellipse cx="120" cy="180" rx="50" ry="20" fill="#F0E2C2" />
      {/* trees */}
      {[[60, 60], [180, 130], [280, 50], [380, 90], [410, 180], [40, 130]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="14" fill="#4F8C3A" />
          <circle r="11" fill="#67B04E" />
        </g>
      ))}
      {/* fence dots along bottom */}
      {Array.from({ length: 26 }).map((_, i) => (
        <rect key={i} x={i * 18} y="208" width="6" height="10" fill="#C9A65B" />
      ))}
      {/* stop labels */}
      {[
        { x: 350, y: 100, label: 'FARBY' },
        { x: 215, y: 130, label: 'ABECEDA' },
        { x: 70,  y: 175, label: 'ČÍSLA' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x - 38} y={s.y - 11} width="76" height="22" rx="11" fill="#fff" stroke="#1A2B3D" strokeWidth="1.5" />
          <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="#1A2B3D" fontFamily="Fredoka, Nunito, sans-serif">{s.label}</text>
        </g>
      ))}
    </svg>
  );
}

// Black-and-white worksheet placeholder (flower scene).
function WorksheetPreview() {
  return (
    <svg viewBox="0 0 280 280" style={{ width: '100%', height: '100%', display: 'block' }}>
      <g fill="none" stroke="#1A2B3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* title */}
        <text x="140" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1A2B3D" fontFamily="Fredoka, sans-serif" stroke="none">Jarná lúka</text>
        {/* stars rating */}
        {[0, 1, 2].map(i => (
          <path key={i} d={`M${200 + i * 14} 15 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z`} fill={i === 0 ? '#1A2B3D' : 'none'} />
        ))}
        {/* sun-face flower (top) */}
        <circle cx="90" cy="100" r="22" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 90 + Math.cos(a) * 24; const y1 = 100 + Math.sin(a) * 24;
          const x2 = 90 + Math.cos(a) * 36; const y2 = 100 + Math.sin(a) * 36;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="83" cy="96" r="2" fill="#1A2B3D" /><circle cx="97" cy="96" r="2" fill="#1A2B3D" />
        <path d="M83 105 q7 6 14 0" />
        {/* stem */}
        <path d="M90 124 v95" />
        <path d="M90 170 q-12 -5 -22 5" />
        {/* daisy 1 */}
        <circle cx="170" cy="155" r="10" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8;
          const cx = 170 + Math.cos(a) * 18; const cy = 155 + Math.sin(a) * 18;
          return <ellipse key={i} cx={cx} cy={cy} rx="7" ry="10" transform={`rotate(${(a * 180) / Math.PI + 90} ${cx} ${cy})`} />;
        })}
        <path d="M170 175 v55" />
        {/* daisy 2 */}
        <circle cx="225" cy="180" r="8" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 6;
          const cx = 225 + Math.cos(a) * 14; const cy = 180 + Math.sin(a) * 14;
          return <ellipse key={i} cx={cx} cy={cy} rx="6" ry="8" transform={`rotate(${(a * 180) / Math.PI + 90} ${cx} ${cy})`} />;
        })}
        <path d="M225 196 v36" />
        {/* butterfly */}
        <g transform="translate(220 100)">
          <ellipse cx="-10" cy="0" rx="10" ry="14" />
          <ellipse cx="10" cy="0" rx="10" ry="14" />
          <line x1="0" y1="-12" x2="0" y2="12" />
        </g>
        {/* grass */}
        <path d="M5 232 l5 -12 l5 12 M22 234 l5 -14 l5 14 M44 232 l5 -12 l5 12 M66 234 l5 -12 l5 12 M88 234 l5 -14 l5 14 M110 232 l5 -14 l5 14 M132 234 l5 -12 l5 12 M154 232 l5 -14 l5 14 M180 234 l5 -12 l5 12 M205 232 l5 -14 l5 14 M232 234 l5 -12 l5 12 M256 232 l5 -14 l5 14" />
        {/* ground line */}
        <line x1="0" y1="240" x2="280" y2="240" />
        {/* clouds bottom */}
        <path d="M20 260 q10 -8 22 0 q-10 8 -22 0z" />
        <path d="M70 268 q12 -8 26 0 q-12 8 -26 0z" />
        <path d="M130 260 q10 -8 22 0 q-10 8 -22 0z" />
      </g>
    </svg>
  );
}

// Adventurer badge — circular medal with mountains + boy + ribbon text.
function AdventureBadge() {
  return (
    <svg viewBox="0 0 120 120" style={{ width: 110, height: 110 }}>
      {/* outer rope ring */}
      <circle cx="60" cy="60" r="56" fill="#C9A65B" />
      <circle cx="60" cy="60" r="50" fill="#F2D88C" />
      {/* dashes around outer rope */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 36;
        const x1 = 60 + Math.cos(a) * 53; const y1 = 60 + Math.sin(a) * 53;
        const x2 = 60 + Math.cos(a) * 56; const y2 = 60 + Math.sin(a) * 56;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8C6500" strokeWidth="1.2" />;
      })}
      {/* sky */}
      <circle cx="60" cy="60" r="46" fill="#DBEEF9" />
      {/* mountains */}
      <path d="M14 78 L34 50 L52 70 L72 42 L92 70 L106 56 L106 90 L14 90 Z" fill="#7B9CB8" />
      <path d="M14 88 L36 64 L60 84 L84 60 L106 88 Z" fill="#A8C8E8" opacity=".7" />
      {/* ground */}
      <rect x="12" y="88" width="96" height="14" fill="#7CB85A" />
      {/* mini boy silhouette */}
      <g transform="translate(60 78)">
        <circle cy="-10" r="4" fill="#FBC78A" />
        <rect x="-3" y="-6" width="6" height="9" fill="#3FA9E0" />
        <rect x="-3" y="3" width="6" height="6" fill="#C9A65B" />
      </g>
      {/* ribbon banner across middle */}
      <path d="M8 70 L24 64 L24 80 L8 86 Z" fill="#A94545" />
      <path d="M112 70 L96 64 L96 80 L112 86 Z" fill="#A94545" />
      <rect x="20" y="62" width="80" height="20" rx="2" fill="#D9544A" />
      <text x="60" y="71" textAnchor="middle" fontSize="6" fontWeight="800" fill="#fff" fontFamily="Fredoka, sans-serif">SUPER HĽADAČ</text>
      <text x="60" y="79" textAnchor="middle" fontSize="6" fontWeight="800" fill="#fff" fontFamily="Fredoka, sans-serif">DOBRODRUŽSTIEV</text>
      {/* 100 points */}
      <circle cx="60" cy="102" r="11" fill="#FFC542" stroke="#8C6500" strokeWidth="1.2" />
      <text x="60" y="105" textAnchor="middle" fontSize="9" fontWeight="900" fill="#1A2B3D" fontFamily="Fredoka, sans-serif">100</text>
    </svg>
  );
}

// ─── 2A · Board-game map (10 stops on a winding path) ───────────────────
function Kid_2A_Map() {
  const stops = [
    { id: 'animals',   x: 8,  y: 78, state: 'done',      progressPct: 100, stars: 3 },
    { id: 'colors',    x: 19, y: 65, state: 'done',      progressPct: 100, stars: 2 },
    { id: 'family',    x: 30, y: 78, state: 'done',      progressPct: 100, stars: 3 },
    { id: 'food',      x: 42, y: 60, state: 'available', progressPct: 60,  stars: 1, isCurrent: true },
    { id: 'numbers',   x: 54, y: 75, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'transport', x: 65, y: 56, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'nature',    x: 75, y: 70, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'music',     x: 84, y: 50, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'body',      x: 92, y: 35, state: 'locked',    progressPct: 0,   stars: 0 },
    { id: 'alphabet',  x: 88, y: 16, state: 'locked',    progressPct: 0,   stars: 0 },
  ].map(s => ({ ...s, cat: CATEGORIES.find(c => c.id === s.id) }));

  // path d-string through approximately the stop coordinates (in % space → 1440×900 px)
  const pathD = stops.map((s, i) => {
    const x = (s.x / 100) * 1440; const y = (s.y / 100) * 900;
    if (i === 0) return `M ${x} ${y}`;
    const prev = stops[i - 1]; const px = (prev.x / 100) * 1440; const py = (prev.y / 100) * 900;
    const cx = (px + x) / 2; const cy = Math.min(py, y) - 30;
    return `Q ${cx} ${cy} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="alf-root" style={{ display: 'flex' }}>
      <KidSidebar active="map" />
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      <TopDownMap />

      {/* path */}
      <svg viewBox="0 0 1440 900" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <path d={pathD} fill="none" stroke="#fff" strokeWidth="22" strokeLinecap="round" opacity=".55" />
        <path d={pathD} fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" strokeDasharray="3 16" />
      </svg>

      {/* greeting header — overlay, no top bar */}
      <header style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 8, padding: '12px 32px', background: 'rgba(255,255,255,.92)', borderRadius: 99, boxShadow: 'var(--alf-shadow-elevate)', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 99, background: 'linear-gradient(135deg, var(--alf-coral), var(--alf-sun))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--alf-font-display)', fontWeight: 700, fontSize: 18 }}>M</div>
        <div>
          <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 20, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1 }}>Ahoj, Mia!</div>
          <div style={{ fontSize: 12, color: 'var(--alf-ink-soft)', marginTop: 2 }}>Pokračuj v dobrodružstve · 3 z 10 zastávok</div>
        </div>
      </header>

      {/* top-right HUD: streak + diamonds */}
      <div style={{ position: 'absolute', top: 24, right: 100, zIndex: 8, display: 'flex', gap: 10 }}>
        <div style={{ padding: '8px 14px', background: 'rgba(255,255,255,.92)', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--alf-shadow-card)' }}>
          <img src={ASSET('diamond.svg')} alt="" style={{ width: 20, height: 20 }} />
          <span style={{ fontFamily: 'var(--alf-font-display)', fontSize: 16, fontWeight: 700, color: 'var(--alf-ink)' }}>247</span>
        </div>
        <div style={{ padding: '8px 14px', background: 'rgba(255,255,255,.92)', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--alf-shadow-card)' }}>
          <span style={{ fontSize: 18 }}>🔥</span>
          <span style={{ fontFamily: 'var(--alf-font-display)', fontSize: 16, fontWeight: 700, color: 'var(--alf-ink)' }}>5 dní</span>
        </div>
      </div>

      <CornerBtn icon={<HomeIcon />} label="Domov" position="top-left" />

      {/* stops */}
      {stops.map((s) => (
        <MapStop key={s.id} x={s.x} y={s.y} cat={s.cat} state={s.state} progressPct={s.progressPct} stars={s.stars} isCurrent={s.isCurrent} />
      ))}

      {/* "Pokračovať" CTA at bottom */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 8 }}>
        <button style={{
          padding: '16px 36px', borderRadius: 99, border: 'none',
          background: 'linear-gradient(135deg, var(--alf-coral), var(--alf-sun-deep))',
          color: '#fff', fontFamily: 'var(--alf-font-display)', fontSize: 20, fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 8px 20px -6px rgba(255,107,107,.55), inset 0 -3px 0 rgba(0,0,0,.12)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          ▶ Pokračovať — Jedlo
        </button>
      </div>
      </main>
    </div>
  );
}

// ─── 2A-Storybook · Closer, illustrative view ────────────────────────────
function Kid_2A_MapStorybook() {
  // Only 5 nearby stops, very illustrative, much bigger.
  const stops = [
    { id: 'family', x: 12, y: 70, state: 'done',      progressPct: 100, stars: 3, label: 'splnené' },
    { id: 'food',   x: 38, y: 50, state: 'available', progressPct: 60,  stars: 1, isCurrent: true, label: 'tu si' },
    { id: 'numbers',x: 65, y: 70, state: 'locked',    progressPct: 0,                              label: 'najbližšie' },
    { id: 'transport', x: 88, y: 45, state: 'locked', progressPct: 0 },
  ].map(s => ({ ...s, cat: CATEGORIES.find(c => c.id === s.id) }));
  const pathD = stops.map((s, i) => {
    const x = (s.x / 100) * 1440; const y = (s.y / 100) * 900;
    if (i === 0) return `M ${x} ${y}`;
    const prev = stops[i - 1]; const px = (prev.x / 100) * 1440; const py = (prev.y / 100) * 900;
    const cx = (px + x) / 2; const cy = Math.min(py, y) - 60;
    return `Q ${cx} ${cy} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="alf-root" style={{ position: 'relative' }}>
      <TopDownMap>
        {/* extra storybook elements */}
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* big mountain backdrop */}
          <path d="M 200 600 L 380 280 L 520 500 L 720 200 L 920 480 L 1200 320 L 1400 600 Z" fill="#A8C8E8" opacity=".7" />
          <path d="M 0 700 Q 360 600 720 670 T 1440 660 L 1440 900 L 0 900 Z" fill="#94C770" />
          {/* big rounded trees */}
          {[{x:60,y:680,r:50},{x:200,y:760,r:42},{x:1180,y:760,r:48},{x:1370,y:720,r:60}].map((t, i) => (
            <g key={i} transform={`translate(${t.x} ${t.y})`}>
              <ellipse cx="0" cy="0" rx={t.r} ry={t.r * 1.1} fill="#5DA63E" />
              <ellipse cx="-10" cy="-12" rx={t.r * 0.5} ry={t.r * 0.4} fill="#7BC256" opacity=".7" />
              <rect x="-5" y={t.r * 0.7} width="10" height={t.r * 0.5} fill="#7A5A3D" />
            </g>
          ))}
          {/* bunny */}
          <g transform="translate(1050 740)">
            <ellipse cx="0" cy="0" rx="22" ry="18" fill="#fff" />
            <circle cx="-10" cy="-12" r="9" fill="#fff" />
            <ellipse cx="-14" cy="-22" rx="3" ry="9" fill="#fff" transform="rotate(-15 -14 -22)" />
            <ellipse cx="-7" cy="-23" rx="3" ry="9" fill="#fff" />
            <circle cx="-13" cy="-13" r="1.4" fill="#1A2B3D" />
          </g>
        </svg>
      </TopDownMap>

      {/* path */}
      <svg viewBox="0 0 1440 900" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <path d={pathD} fill="none" stroke="#fff" strokeWidth="32" strokeLinecap="round" opacity=".6" />
        <path d={pathD} fill="none" stroke="#FFC542" strokeWidth="16" strokeLinecap="round" strokeDasharray="0 32" />
      </svg>

      <header style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 8, padding: '12px 32px', background: 'rgba(255,255,255,.94)', borderRadius: 99, boxShadow: 'var(--alf-shadow-elevate)', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 99, background: 'linear-gradient(135deg, var(--alf-coral), var(--alf-sun))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--alf-font-display)', fontWeight: 700, fontSize: 18 }}>M</div>
        <div>
          <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 20, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1 }}>Ahoj, Mia!</div>
          <div style={{ fontSize: 12, color: 'var(--alf-ink-soft)', marginTop: 2 }}>Tvoja cesta · zastávka 4 z 10</div>
        </div>
      </header>

      <CornerBtn icon={<HomeIcon />} label="Domov" position="top-left" />

      {/* big illustrated stops */}
      {stops.map((s) => (
        <MapStop key={s.id} x={s.x} y={s.y} cat={s.cat} state={s.state} progressPct={s.progressPct} stars={s.stars} isCurrent={s.isCurrent} size={140} />
      ))}

      {/* speech bubble + mascot at current */}
      <div style={{ position: 'absolute', left: '38%', top: '50%', transform: 'translate(-20px, -260px)', zIndex: 7 }}>
        <div style={{
          background: '#fff', padding: '14px 20px', borderRadius: 22,
          fontFamily: 'var(--alf-font-display)', fontSize: 18, fontWeight: 700, color: 'var(--alf-ink)',
          boxShadow: 'var(--alf-shadow-elevate)', position: 'relative',
        }}>
          Poďme zbierať dobré zvyky! 🥕
          <div style={{ position: 'absolute', bottom: -10, left: 30, width: 20, height: 20, background: '#fff', transform: 'rotate(45deg)' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', left: '38%', top: '50%', transform: 'translate(-10px, -130px)', zIndex: 6, pointerEvents: 'none' }}>
        <img src={MASCOT} alt="" style={{ width: 180 }} />
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 8 }}>
        <button style={{
          padding: '18px 44px', borderRadius: 99, border: 'none',
          background: 'linear-gradient(135deg, var(--alf-coral), var(--alf-sun-deep))',
          color: '#fff', fontFamily: 'var(--alf-font-display)', fontSize: 22, fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 10px 24px -8px rgba(255,107,107,.6), inset 0 -3px 0 rgba(0,0,0,.12)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          ▶ Pokračovať
        </button>
      </div>
    </div>
  );
}

// ─── Shared fullscreen test-intro popup (used by 2A & 2D) ───────────────
function TestIntroPopup({ test, onClose }) {
  if (!test) return null;
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200, overflow: 'hidden',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F8EC 42%, #E4EFCF 100%)',
      fontFamily: 'var(--alf-font-body)',
    }}>
      {/* scenic landscape backdrop */}
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g fill="#DDEBF2" opacity="0.55">
          <ellipse cx="250" cy="180" rx="150" ry="46" />
          <ellipse cx="380" cy="150" rx="110" ry="38" />
          <ellipse cx="1150" cy="210" rx="170" ry="50" />
        </g>
        <path d="M0 720 Q360 600 760 690 T1440 660 L1440 900 L0 900 Z" fill="#CFE4A8" opacity="0.7" />
        <path d="M1440 360 Q1080 470 900 640 Q780 760 560 820 Q360 872 0 850 L0 900 L1440 900 Z" fill="#9CCB5A" />
        <path d="M0 812 Q380 740 820 810 T1440 800 L1440 900 L0 900 Z" fill="#6FB23F" />
        <path d="M40 868 Q230 824 430 866 Q300 900 120 900 Q60 900 40 868 Z" fill="#5BB6C9" opacity="0.55" />
      </svg>

      {/* explorer mascot, right */}
      <img src={MASCOT} alt="" style={{
        position: 'absolute', right: 70, bottom: 0, height: '92%',
        objectFit: 'contain', pointerEvents: 'none', filter: 'drop-shadow(0 14px 22px rgba(40,60,30,.18))',
      }} />

      {/* Alf edu logo, top-left */}
      <img src={ASSET('logo_edu_alf.svg')} alt="Alf edu" style={{ position: 'absolute', top: 30, left: 40, width: 64, height: 'auto' }} />

      {/* top-right controls — only the red ✕ is interactive */}
      <div style={{ position: 'absolute', top: 30, right: 36, display: 'flex', alignItems: 'center', gap: 22 }}>
        <span style={{ color: '#2B5F96', display: 'flex', pointerEvents: 'none' }} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 4 20 4 20 9"/><polyline points="9 20 4 20 4 15"/><line x1="20" y1="4" x2="13" y2="11"/><line x1="4" y1="20" x2="11" y2="13"/></svg>
        </span>
        <span style={{ color: '#2B5F96', display: 'flex', pointerEvents: 'none' }} aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><circle cx="15" cy="7" r="2.6" fill="#fff"/><line x1="4" y1="13" x2="20" y2="13"/><circle cx="9" cy="13" r="2.6" fill="#fff"/><line x1="4" y1="19" x2="20" y2="19"/><circle cx="16" cy="19" r="2.6" fill="#fff"/></svg>
        </span>
        <button onClick={onClose} title="Zavrieť" style={{
          width: 44, height: 44, borderRadius: 12, border: 'none', cursor: 'pointer',
          background: '#E5332A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 14px -4px rgba(229,51,42,.5)', padding: 0,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>

      {/* center card */}
      <div style={{
        position: 'absolute', top: '50%', left: '42%', transform: 'translate(-50%, -50%)',
        width: 560, maxWidth: '46%',
        background: 'rgba(255,255,255,.94)', borderRadius: 18,
        boxShadow: '0 30px 70px -24px rgba(30,50,30,.35)',
        padding: '56px 56px 48px', textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 40, fontWeight: 800, color: '#22344A', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '.01em' }}>{test.name}</div>
        <div style={{ fontSize: 21, fontWeight: 700, color: '#3B4A5A', marginTop: 34 }}>Počet úloh: 10</div>
        <div style={{ fontSize: 21, fontWeight: 700, color: '#3B4A5A', marginTop: 18 }}>Maximálny počet bodov: 10</div>
        <div style={{
          marginTop: 44, height: 70, borderRadius: 14,
          background: '#23537F', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--alf-font-display)', fontSize: 28, fontWeight: 800, letterSpacing: '.04em',
          pointerEvents: 'none', boxShadow: '0 10px 22px -10px rgba(35,83,127,.6)',
        }}>ŠTART</div>
      </div>
    </div>
  );
}

// ─── 2C3 · Materials list inside a subcategory ─────────────────────────
function Kid_2C_Materials() {
  const tests = [
    { id: 't1',  age: '3', name: 'Domáce zvieratá',        rating: 'great', img: 'kid-2c-img/domace-1.jpg' },
    { id: 't2',  age: '3', name: 'Domáce mláďatá',         rating: 'great', img: 'kid-2c-img/domace-2.jpg' },
    { id: 't3',  age: '4', name: 'Kde je moja mamička?',   rating: 'good',  img: 'kid-2c-img/kde-mamicka.jpg' },
    { id: 't4',  age: '3', name: 'Kto povedal mňau?',      rating: 'good',  img: 'kid-2c-img/kto-mnau.jpg' },
    { id: 't5',  age: '4', name: 'Vtáčiky',                rating: null,    img: 'kid-2c-img/vtaciky-1.jpg' },
    { id: 't6',  age: '5', name: 'Vtáčiky na jar',         rating: null,    img: 'kid-2c-img/vtaciky-2.jpg' },
    { id: 't7',  age: '4', name: 'Čo sa skrýva za stromom', rating: 'good',  img: 'kid-2c-img/skryva-strom.jpg' },
    { id: 't8',  age: '4', name: 'Čo sa skrýva za plotom',  rating: 'great', img: 'kid-2c-img/skryva-plot.jpg' },
    { id: 't9',  age: '5', name: 'Čo sa skrýva pri vode',   rating: null,    img: 'kid-2c-img/skryva-voda.jpg' },
    { id: 't10', age: '4', name: 'Čo sa skrýva na lúke',    rating: 'good',  img: 'kid-2c-img/skryva-luka.jpg' },
    { id: 't11', age: '5', name: 'Čo sa skrýva v ZOO',      rating: 'great', img: 'kid-2c-img/skryva-zoo.jpg' },
    { id: 't12', age: '3', name: 'Čím sa živia zvieratká',  rating: 'good',  img: 'kid-2c-img/cim-zivia.jpg' },
  ];

  const cornerIcon = (kind) => kind === 'back'
    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" /></svg>;
  const nav2c = window.useNav?.();
  const cornerBtn = (kind, label, side) => (
    <button title={label}
      onClick={() => {
        if (kind === 'back') nav2c?.go('2c2');
        else if (kind === 'home') nav2c?.go('2c1');
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      style={{
      position: 'absolute', top: 32, [side]: 'calc((100% - 944px) / 4 - 30px)', zIndex: 12,
      width: 60, height: 60, borderRadius: 20, border: 'none',
      background: 'linear-gradient(180deg, #2E73C9 0%, #1E51A6 100%)', cursor: 'pointer',
      boxShadow: '0 9px 18px -6px rgba(20,45,95,.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: 0,
      transition: 'transform .15s cubic-bezier(.2,.7,.3,1)',
    }}>{cornerIcon(kind)}</button>
  );

  const [ageFilter, setAgeFilter] = React.useState('all');
  const [popup, setPopup] = React.useState(null);
  const visible = tests.filter((t) => ageFilter === 'all' || t.age === ageFilter);

  return (
    <div className="alf-root" style={{ display: 'flex', position: 'relative' }}>
      <style>{`
        .c2card { transition: transform .16s cubic-bezier(.2,.7,.3,1), box-shadow .16s ease; }
        .c2card:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -12px rgba(15,30,55,.30); }
      `}</style>
      <KidSidebar active="library" />
      <main style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, #DBEEF9 0%, #F2F7FB 60%)',
        display: 'flex', flexDirection: 'column',
      }}>
      {cornerBtn('back', 'Späť', 'left')}
      {cornerBtn('home', 'Domov', 'right')}

      {/* compact hero — same top row as 2B2 */}
      <div style={{ padding: '18px 0 0' }}>
        <div style={{
          width: 944, maxWidth: 'calc(100% - 168px)', margin: '0 auto',
          background: 'linear-gradient(135deg, #2E73C9 0%, #1E51A6 100%)',
          color: '#fff', borderRadius: 22, padding: '14px 24px',
          display: 'flex', alignItems: 'center', gap: 20, boxShadow: 'var(--alf-shadow-elevate)',
        }}>
          <div style={{ width: 60, height: 60, background: '#fff', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <SubcatGlyph kind="cow" size={46} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>Domáce zvieratá</div>
          </div>
          {/* icon-only age filter */}
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }} title="Filter podľa veku">
            {['all', '3', '4', '5'].map((a) => {
              const m = AGE_META[a];
              const active = ageFilter === a;
              return (
                <button key={a} onClick={() => setAgeFilter(a)} title={m.label} style={{
                  width: 60, height: 60, borderRadius: 20, padding: 9,
                  background: active ? '#fff' : '#4A95CE',
                  border: active ? `2.5px solid ${m.color}` : '2.5px solid transparent',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background .15s ease, border-color .15s ease',
                }}>
                  <AgeIcon age={a} size={34} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* test tiles — square, 4 × 3 */}
      <div style={{
        flex: 1,
        padding: '16px 84px 26px',
        display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 224px))', gap: 16,
        justifyContent: 'center', alignContent: 'center',
      }}>
        {visible.map((t, i) => {
          return (
          <div key={t.id} className="c2card" onClick={() => setPopup(t)} style={{
            background: '#fff', borderRadius: 20, padding: 13,
            display: 'flex', flexDirection: 'column', gap: 10,
            boxShadow: 'var(--alf-shadow-tile)', cursor: 'pointer',
          }}>
            {/* framed photo — 5:3, rounded, hairline ring */}
            <div style={{
              position: 'relative', borderRadius: 14, overflow: 'hidden',
              aspectRatio: '5 / 3', background: 'var(--alf-bg)',
              boxShadow: 'inset 0 0 0 1px rgba(15,30,55,.07)',
            }}>
              <img src={t.img} alt={t.name} loading="lazy" style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              }} />
            </div>

            {/* title + age + rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 2px' }}>
              <div style={{ flex: 1, fontFamily: 'var(--alf-font-display)', fontSize: 14.5, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1.15 }}>{t.name}</div>
              <AgeIcon age={t.age} size={28} />
              {t.rating && <RatingBadge rating={t.rating} size={30} />}
            </div>
          </div>
          );
        })}
      </div>
      </main>

      {/* ── Fullscreen test-intro popup (sample: test-screen) ───────────── */}
      <TestIntroPopup test={popup} onClose={() => setPopup(null)} />
    </div>
  );
}

Object.assign(window, {
  Kid_2_Intro, Kid_2A_Map, Kid_2A_MapStorybook, Kid_2C_Materials,
  KidSidebar, CornerBtn, BackIcon, HomeIcon, TopDownMap, MapStop,
});
