/* portal-nav.jsx — NavContext + PortalRouter pre Detsky-portal.html.
 * Bezpečné voči absencii v Alfik-desktop.html — komponenty volajú window.useNav?.()
 */

const NavContext = React.createContext(null);
const useNav = () => React.useContext(NavContext);

const INTRO_AUDIO = {
  '2a':  'audio/intro-2A.mp3',
  '2b':  'audio/intro-2B.mp3',
  '2c1': 'audio/intro-2C1.mp3',
  '2c2': 'audio/intro-2C2.mp3',
  '2c3': 'audio/intro-2C3.mp3',
};

function PortalRouter() {
  const [started, setStarted] = React.useState(false);
  const [screen, setScreen]   = React.useState('2a');
  const didStart = React.useRef(false);

  const go = React.useCallback((s) => setScreen(s), []);
  const nav = React.useMemo(() => ({ screen, go }), [screen, go]);

  // Prehranie intro zvuku pri každom prechode (len po štarte)
  React.useEffect(() => {
    if (!didStart.current) return;
    const src = INTRO_AUDIO[screen];
    if (!src) return;
    const audio = new Audio(src);
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.src = ''; };
  }, [screen]);

  // Splash — klik = user gesture → audio sa smie prehrať
  const handleStart = () => {
    didStart.current = true;
    setStarted(true);
    const audio = new Audio(INTRO_AUDIO['2a']);
    audio.play().catch(() => {});
  };

  if (!started) {
    return (
      <div style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(160deg, #DBEEF9 0%, #EEF5FB 60%, #F2F7FB 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 48,
        fontFamily: '"Fredoka", "Nunito", sans-serif',
      }}>
        <img src="assets/icon_alfik_sk.svg" alt="Alfík"
          style={{ height: 160, width: 'auto', filter: 'drop-shadow(0 16px 32px rgba(30,60,120,.18))' }} />
        <button onClick={handleStart} style={{
          padding: '22px 64px', borderRadius: 99, border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, #2E73C9 0%, #1E51A6 100%)',
          color: '#fff', fontSize: 32, fontWeight: 700,
          fontFamily: '"Fredoka", "Nunito", sans-serif',
          boxShadow: '0 16px 40px -12px rgba(30,60,180,.45)',
          display: 'flex', alignItems: 'center', gap: 18,
          transition: 'transform .15s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
          {'Prihlásiť sa'}
        </button>
      </div>
    );
  }

  const screens = {
    '2a':  <Kid_2_Intro />,
    '2b':  <Kid_2A_Map_Badges />,
    '2c1': <Kid_2B1_Categories />,
    '2c2': <Kid_2B2_Categories />,
    '2c3': <Kid_2C_Materials />,
  };

  return (
    <NavContext.Provider value={nav}>
      {screens[screen] ?? <Kid_2_Intro />}
    </NavContext.Provider>
  );
}

Object.assign(window, { NavContext, useNav, PortalRouter });
