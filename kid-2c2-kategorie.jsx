/* kid-2c2-kategorie.jsx — 2C2 · Knižnica kategórií (variant of 2C1).
 * Polished card language from 2C1, but:
 *   • SQUARE tiles in a balanced 4 × 3 grid (12 subcategories)
 *   • simplified tiles — illustration + name only (no count pill / stars)
 *   • smaller back / home buttons, lifted higher into the top corners
 *   • consolidated, compact hero top row (title + speaker only)
 * Reuses window.SubcatGlyph from kid-glyphs.jsx.
 */

function Kid_2B2_Categories() {
  const nav = window.useNav?.();
  const subs = [
    { id: 'farm',        name: 'Domáce zvieratá', kind: 'cow',       tint: '#FFF3D6', accent: '#FF9F2D', done: true },
    { id: 'forest',      name: 'Lesné zvieratá',  kind: 'fox',       tint: '#D9F8EF', accent: '#2EB892' },
    { id: 'zoo',         name: 'ZOO zvieratá',    kind: 'lion',      tint: '#FFE3D6', accent: '#FF8A65' },
    { id: 'birds',       name: 'Vtáky',           kind: 'bird',      tint: '#DBEEF9', accent: '#3FA9E0' },
    { id: 'fish',        name: 'Ryby a more',     kind: 'fish',      tint: '#CFEAF1', accent: '#2BA3B8' },
    { id: 'bugs',        name: 'Hmyz',            kind: 'ladybug',   tint: '#FFE3E3', accent: '#FF6B6B' },
    { id: 'pets',        name: 'Maznáčikovia',    kind: 'cat',       tint: '#E6E1FB', accent: '#8B7CF6' },
    { id: 'reptiles',    name: 'Plazy',           kind: 'turtle',    tint: '#E4F3D4', accent: '#6FA84A' },
    { id: 'dinos',       name: 'Dinosaury',       kind: 'dino',      tint: '#D9F8EF', accent: '#2EB892' },
    { id: 'frogs',       name: 'Žaby',            kind: 'frog',      tint: '#E4F3D4', accent: '#6FA84A' },
    { id: 'butterflies', name: 'Motýle',          kind: 'butterfly', tint: '#E6E1FB', accent: '#8B7CF6' },
    { id: 'penguins',    name: 'Tučniaky',        kind: 'penguin',   tint: '#DBEEF9', accent: '#3FA9E0' },
  ];

  const cornerIcon = (kind) => kind === 'back'
    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" /></svg>;

  // size + vertical center match the hero speaker button (50px, centred in the
  // 96px hero bar that starts 18px down → centre at y=66 → top=41)
  const cornerBtn = (kind, label, side) => (
    <button title={label}
      onClick={() => nav?.go('2c1')}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      style={{
      position: 'absolute', top: 32, [side]: 'calc((100% - 920px) / 4 - 30px)', zIndex: 12,
      width: 60, height: 60, borderRadius: 20, border: 'none',
      background: 'linear-gradient(180deg, #2E73C9 0%, #1E51A6 100%)', cursor: 'pointer',
      boxShadow: '0 9px 18px -6px rgba(20,45,95,.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: 0,
      transition: 'transform .15s cubic-bezier(.2,.7,.3,1)',
    }}>{cornerIcon(kind)}</button>
  );

  return (
    <div className="alf-root" style={{ display: 'flex' }}>
      <style>{`
        .b2card { transition: transform .16s cubic-bezier(.2,.7,.3,1), box-shadow .16s ease; }
        .b2card:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -12px rgba(15,30,55,.30); }
        .b2card:hover .b2zone { transform: scale(1.04); }
        .b2zone { transition: transform .2s cubic-bezier(.2,.7,.3,1); }
      `}</style>
      <KidSidebar active="library" />
      <main style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, #DBEEF9 0%, #F2F7FB 60%)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* smaller back / home — lifted into the top corners */}
        {cornerBtn('back', 'Späť', 'left')}
        {cornerBtn('home', 'Domov', 'right')}

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
              <CategoryGlyph kind="animals" size={46} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>Zvieratá</div>
            </div>
          </div>
        </div>

        {/* subcategory grid — square tiles, 4 × 3 */}
        <div style={{
          flex: 1,
          padding: '14px 84px 24px',
          display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 218px))', gap: 16,
          justifyContent: 'center', alignContent: 'center',
        }}>
          {subs.map((sc) => (
            <div key={sc.id} className="b2card"
              onClick={sc.id === 'farm' ? () => nav?.go('2c3') : undefined}
              style={{
              background: '#fff', borderRadius: 20, padding: 13, aspectRatio: '1 / 1',
              display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer',
              boxShadow: 'var(--alf-shadow-tile)',
            }}>
              {/* illustration zone */}
              <div className="b2zone" style={{
                background: sc.tint, borderRadius: 15, flex: 1, minHeight: 0, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,.5)', filter: 'blur(8px)', top: -30 }} />
                <div style={{ position: 'relative', filter: 'drop-shadow(0 5px 6px rgba(0,0,0,.12))' }}>
                  <SubcatGlyph kind={sc.kind} size={132} />
                </div>
              </div>

              {/* name */}
              <div style={{ fontFamily: 'var(--alf-font-display)', fontSize: 17, fontWeight: 700, color: 'var(--alf-ink)', lineHeight: 1.1, textAlign: 'center' }}>{sc.name}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { Kid_2B2_Categories });
