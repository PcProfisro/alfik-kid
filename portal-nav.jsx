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
  const [screen, setScreen] = React.useState('2a');
  const go = React.useCallback((s) => setScreen(s), []);
  const nav = React.useMemo(() => ({ screen, go }), [screen, go]);

  // Prehranie intro zvuku pri každom prechode screenu
  React.useEffect(() => {
    const src = INTRO_AUDIO[screen];
    if (!src) return;
    const audio = new Audio(src);
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.src = ''; };
  }, [screen]);

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
