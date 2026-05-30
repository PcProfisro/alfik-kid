/* kid-glyphs.jsx — Shared illustrated-glyph library for the kid app.
 * Exports window.SubcatGlyph (friendly flat SVG animals: cow, fox, lion, bird,
 * fish, ladybug, cat, turtle, dino, frog, butterfly, penguin, pig, horse,
 * sheep, hen, rooster, chick, duck, goat, dog, rabbit) and window.StarProgress.
 * Used by 2A (Úvod), 2C2 (Knižnica kategórií) and 2D (Cvičenia).
 */

// ─── Friendly subcategory animal glyphs (flat, rounded, brand-coloured) ──
const SC_STROKE = '#3E2A1C';
function SubcatGlyph({ kind, size = 104 }) {
  const S = SC_STROKE;
  const props = { width: size, height: size, viewBox: '0 0 64 64', style: { display: 'block', overflow: 'visible' } };
  switch (kind) {
    case 'cow': return (
      <svg {...props}>
        <ellipse cx="15" cy="27" rx="8" ry="6" fill="#FFFFFF" stroke={S} strokeWidth="2.2" transform="rotate(-22 15 27)" />
        <ellipse cx="49" cy="27" rx="8" ry="6" fill="#FFFFFF" stroke={S} strokeWidth="2.2" transform="rotate(22 49 27)" />
        <path d="M22 15 Q18 9 22 7" stroke={S} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M42 15 Q46 9 42 7" stroke={S} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M14 30 Q14 16 32 16 Q50 16 50 30 Q50 46 32 46 Q14 46 14 30Z" fill="#FFFFFF" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M20 23 Q25 19 29 24 Q28 30 22 30 Q17 28 20 23Z" fill="#2E2018" />
        <circle cx="25" cy="29" r="2.4" fill="#2E2018" />
        <circle cx="39" cy="29" r="2.4" fill="#2E2018" />
        <ellipse cx="32" cy="40" rx="12" ry="8" fill="#F7C5C0" stroke={S} strokeWidth="2.2" />
        <ellipse cx="27" cy="40" rx="1.7" ry="2.4" fill="#2E2018" />
        <ellipse cx="37" cy="40" rx="1.7" ry="2.4" fill="#2E2018" />
      </svg>
    );
    case 'fox': return (
      <svg {...props}>
        <path d="M14 25 L18 5 L31 18Z" fill="#E8833A" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M50 25 L46 5 L33 18Z" fill="#E8833A" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M17 17 L19 10 L24 16Z" fill="#2E2018" />
        <path d="M47 17 L45 10 L40 16Z" fill="#2E2018" />
        <path d="M14 26 Q14 18 32 18 Q50 18 50 26 Q50 38 32 51 Q14 38 14 26Z" fill="#E8833A" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M21 31 Q32 27 43 31 Q45 42 32 51 Q19 42 21 31Z" fill="#FBEFE0" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="25" cy="30" r="2.4" fill="#2E2018" />
        <circle cx="39" cy="30" r="2.4" fill="#2E2018" />
        <path d="M29 40 L35 40 L32 44Z" fill="#2E2018" strokeLinejoin="round" />
      </svg>
    );
    case 'lion': return (
      <svg {...props}>
        {Array.from({ length: 11 }).map((_, i) => {
          const a = (i / 11) * Math.PI * 2;
          const x = 32 + Math.cos(a) * 20;
          const y = 32 + Math.sin(a) * 20;
          return <circle key={i} cx={x} cy={y} r="7.5" fill="#E8833A" stroke={S} strokeWidth="1.6" />;
        })}
        <circle cx="32" cy="32" r="16" fill="#FFC857" stroke={S} strokeWidth="2.4" />
        <circle cx="26" cy="30" r="2.4" fill="#2E2018" />
        <circle cx="38" cy="30" r="2.4" fill="#2E2018" />
        <path d="M29 37 L35 37 L32 41Z" fill="#2E2018" />
        <path d="M32 41 Q28 45 24 43 M32 41 Q36 45 40 43" stroke={S} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    );
    case 'bird': return (
      <svg {...props}>
        <path d="M27 50 L27 57 M24 57 L31 57 M35 50 L35 57 M32 57 L39 57" stroke="#FF9F2D" strokeWidth="2.4" strokeLinecap="round" />
        <ellipse cx="31" cy="33" rx="18" ry="16" fill="#3FA9E0" stroke={S} strokeWidth="2.4" />
        <ellipse cx="31" cy="40" rx="10" ry="8" fill="#DBEEF9" />
        <path d="M31 28 Q45 29 46 40 Q38 44 31 39Z" fill="#2E8BC0" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 19 Q24 11 29 17" stroke={S} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="28" r="2.6" fill="#2E2018" />
        <path d="M11 30 L23 27 L14 35Z" fill="#FF9F2D" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
    case 'fish': return (
      <svg {...props}>
        <path d="M47 32 L60 21 L60 43Z" fill="#FF8A65" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <ellipse cx="28" cy="32" rx="22" ry="15" fill="#FF8A65" stroke={S} strokeWidth="2.4" />
        <path d="M24 17 Q30 9 35 18" fill="#E8833A" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 47 Q28 55 33 46" fill="#E8833A" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M31 20 Q35 32 31 44" stroke="#E8833A" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="29" r="3" fill="#FFFFFF" stroke={S} strokeWidth="1.4" />
        <circle cx="16" cy="29" r="1.4" fill="#2E2018" />
        <path d="M7 33 Q10 36 13 33" stroke={S} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="8" cy="20" r="2.2" fill="#3FA9E0" opacity=".55" />
        <circle cx="14" cy="14" r="1.4" fill="#3FA9E0" opacity=".45" />
      </svg>
    );
    case 'ladybug': return (
      <svg {...props}>
        <path d="M16 23 L7 17 M13 32 L4 32 M16 41 L8 47 M48 23 L57 17 M51 32 L60 32 M48 41 L56 47" stroke={S} strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="34" r="20" fill="#E8473B" stroke={S} strokeWidth="2.4" />
        <path d="M22 20 Q32 13 42 20 Q42 26 32 26 Q22 26 22 20Z" fill="#2E2018" />
        <line x1="32" y1="24" x2="32" y2="53" stroke={S} strokeWidth="2.4" />
        <circle cx="24" cy="33" r="3.2" fill="#2E2018" />
        <circle cx="40" cy="33" r="3.2" fill="#2E2018" />
        <circle cx="26" cy="44" r="2.6" fill="#2E2018" />
        <circle cx="38" cy="44" r="2.6" fill="#2E2018" />
        <path d="M27 18 Q24 11 26 9 M37 18 Q40 11 38 9" stroke={S} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="26" cy="9" r="1.7" fill="#2E2018" />
        <circle cx="38" cy="9" r="1.7" fill="#2E2018" />
        <circle cx="28" cy="21" r="1.5" fill="#FFFFFF" />
        <circle cx="36" cy="21" r="1.5" fill="#FFFFFF" />
      </svg>
    );
    case 'cat': return (
      <svg {...props}>
        <path d="M16 25 L14 6 L31 18Z" fill="#A6B2C0" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M48 25 L50 6 L33 18Z" fill="#A6B2C0" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M19 19 L18 11 L25 17Z" fill="#F7C5C0" />
        <path d="M45 19 L46 11 L39 17Z" fill="#F7C5C0" />
        <path d="M14 28 Q14 18 32 18 Q50 18 50 28 Q50 44 32 49 Q14 44 14 28Z" fill="#AEBAC7" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <ellipse cx="25" cy="30" rx="2.4" ry="3.2" fill="#2E2018" />
        <ellipse cx="39" cy="30" rx="2.4" ry="3.2" fill="#2E2018" />
        <path d="M30 37 L34 37 L32 40Z" fill="#F08FA0" />
        <path d="M32 40 Q29 44 26 42 M32 40 Q35 44 38 42" stroke={S} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M22 35 L10 33 M22 38 L11 40 M42 35 L54 33 M42 38 L53 40" stroke={S} strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
    case 'turtle': return (
      <svg {...props}>
        <ellipse cx="13" cy="45" rx="6" ry="4.6" fill="#7FB85A" stroke={S} strokeWidth="2" />
        <ellipse cx="49" cy="45" rx="6" ry="4.6" fill="#7FB85A" stroke={S} strokeWidth="2" />
        <path d="M9 37 L3 39 L8 41Z" fill="#7FB85A" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="52" cy="31" r="7.5" fill="#7FB85A" stroke={S} strokeWidth="2.2" />
        <circle cx="55" cy="29" r="1.7" fill="#2E2018" />
        <path d="M10 38 Q10 19 32 19 Q54 19 54 38 Q54 43 32 43 Q10 43 10 38Z" fill="#3DAE6E" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M32 19 L32 43 M21 22 Q20 38 18 42 M43 22 Q44 38 46 42 M11 33 Q32 29 53 33" stroke="#2E7D4F" strokeWidth="1.6" fill="none" />
        <path d="M25 26 L39 26 L37 34 L27 34Z" fill="#2E8A57" opacity=".5" />
      </svg>
    );
    case 'dino': return (
      <svg {...props}>
        <path d="M14 44 Q4 44 2 36 Q8 36 16 40Z" fill="#5FB36A" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <ellipse cx="30" cy="40" rx="19" ry="12" fill="#5FB36A" stroke={S} strokeWidth="2.4" />
        <rect x="18" y="48" width="7" height="10" rx="3" fill="#5FB36A" stroke={S} strokeWidth="2" />
        <rect x="34" y="48" width="7" height="10" rx="3" fill="#5FB36A" stroke={S} strokeWidth="2" />
        <path d="M43 40 Q45 22 53 16 Q60 13 58 22 Q52 26 50 42Z" fill="#5FB36A" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="55" cy="19" r="1.6" fill="#2E2018" />
        <path d="M19 31 L23 24 L27 31Z" fill="#3F8F52" stroke={S} strokeWidth="1" strokeLinejoin="round" />
        <path d="M29 30 L33 23 L37 30Z" fill="#3F8F52" stroke={S} strokeWidth="1" strokeLinejoin="round" />
        <ellipse cx="30" cy="44" rx="12" ry="6" fill="#CDEBA8" opacity=".6" />
      </svg>
    );
    case 'frog': return (
      <svg {...props}>
        <ellipse cx="13" cy="45" rx="8" ry="5" fill="#5FC36A" stroke={S} strokeWidth="2" transform="rotate(-18 13 45)" />
        <ellipse cx="51" cy="45" rx="8" ry="5" fill="#5FC36A" stroke={S} strokeWidth="2" transform="rotate(18 51 45)" />
        <path d="M14 40 Q14 26 32 26 Q50 26 50 40 Q50 50 32 50 Q14 50 14 40Z" fill="#5FC36A" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <ellipse cx="32" cy="44" rx="12" ry="6" fill="#CDEBA8" opacity=".6" />
        <circle cx="23" cy="24" r="7" fill="#5FC36A" stroke={S} strokeWidth="2.2" />
        <circle cx="41" cy="24" r="7" fill="#5FC36A" stroke={S} strokeWidth="2.2" />
        <circle cx="23" cy="23" r="3.4" fill="#FFFFFF" stroke={S} strokeWidth="1" />
        <circle cx="41" cy="23" r="3.4" fill="#FFFFFF" stroke={S} strokeWidth="1" />
        <circle cx="23" cy="23" r="1.8" fill="#2E2018" />
        <circle cx="41" cy="23" r="1.8" fill="#2E2018" />
        <path d="M22 41 Q32 48 42 41" stroke={S} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    );
    case 'butterfly': return (
      <svg {...props}>
        <path d="M30 23 Q26 12 21 12 M34 23 Q38 12 43 12" stroke={S} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="21" cy="12" r="1.7" fill="#2E2018" />
        <circle cx="43" cy="12" r="1.7" fill="#2E2018" />
        <path d="M30 28 Q11 12 7 25 Q5 35 29 34Z" fill="#8B7CF6" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <path d="M34 28 Q53 12 57 25 Q59 35 35 34Z" fill="#8B7CF6" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <path d="M30 36 Q14 44 16 55 Q23 59 31 44Z" fill="#B3A8FA" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <path d="M34 36 Q50 44 48 55 Q41 59 33 44Z" fill="#B3A8FA" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <ellipse cx="32" cy="34" rx="3" ry="13" fill="#2E2018" />
        <circle cx="16" cy="25" r="3" fill="#FFC542" />
        <circle cx="48" cy="25" r="3" fill="#FFC542" />
        <circle cx="22" cy="49" r="2.2" fill="#FF6B6B" />
        <circle cx="42" cy="49" r="2.2" fill="#FF6B6B" />
      </svg>
    );
    case 'penguin': return (
      <svg {...props}>
        <path d="M18 30 Q12 34 16 46 Q20 44 22 36Z" fill="#2A3340" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M46 30 Q52 34 48 46 Q44 44 42 36Z" fill="#2A3340" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M18 30 Q18 12 32 12 Q46 12 46 30 Q46 54 32 56 Q18 54 18 30Z" fill="#2A3340" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M24 30 Q24 20 32 20 Q40 20 40 30 Q40 50 32 52 Q24 50 24 30Z" fill="#FBF7EE" />
        <circle cx="28" cy="24" r="2" fill="#2E2018" />
        <circle cx="36" cy="24" r="2" fill="#2E2018" />
        <path d="M29 27 L35 27 L32 32Z" fill="#FF9F2D" stroke={S} strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M27 54 Q23 58 19 57 Q23 53 28 52Z" fill="#FF9F2D" stroke={S} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M37 54 Q41 58 45 57 Q41 53 36 52Z" fill="#FF9F2D" stroke={S} strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    );
    case 'pig': return (
      <svg {...props}>
        <path d="M16 22 L13 10 L26 18Z" fill="#F5A8C0" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M48 22 L51 10 L38 18Z" fill="#F5A8C0" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 30 Q14 18 32 18 Q50 18 50 30 Q50 46 32 48 Q14 46 14 30Z" fill="#F7B6CC" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="25" cy="29" r="2.4" fill="#2E2018" />
        <circle cx="39" cy="29" r="2.4" fill="#2E2018" />
        <ellipse cx="32" cy="38" rx="11" ry="8" fill="#F092B0" stroke={S} strokeWidth="2.2" />
        <ellipse cx="28" cy="38" rx="1.8" ry="2.6" fill="#7A3B52" />
        <ellipse cx="36" cy="38" rx="1.8" ry="2.6" fill="#7A3B52" />
      </svg>
    );
    case 'horse': return (
      <svg {...props}>
        <path d="M20 16 L18 5 L27 14Z" fill="#A9743F" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <path d="M44 16 L46 5 L37 14Z" fill="#A9743F" stroke={S} strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 16 Q34 13 40 22 Q46 31 44 44 Q42 52 34 52 Q26 52 24 44 Q20 30 22 16Z" fill="#B9824A" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M22 17 Q15 23 17 35 Q22 30 25 23Z" fill="#6E4524" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <ellipse cx="37" cy="46" rx="8" ry="6" fill="#D9A86E" />
        <ellipse cx="37" cy="47" rx="1.5" ry="2.1" fill="#5A3418" />
        <circle cx="30" cy="28" r="2.4" fill="#2E2018" />
      </svg>
    );
    case 'sheep': return (
      <svg {...props}>
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          const x = 32 + Math.cos(a) * 17;
          const y = 33 + Math.sin(a) * 16;
          return <circle key={i} cx={x} cy={y} r="6.5" fill="#FBF3E2" stroke={S} strokeWidth="1.4" />;
        })}
        <ellipse cx="20" cy="31" rx="4" ry="2.4" fill="#5C4A3A" stroke={S} strokeWidth="1.6" transform="rotate(-28 20 31)" />
        <ellipse cx="44" cy="31" rx="4" ry="2.4" fill="#5C4A3A" stroke={S} strokeWidth="1.6" transform="rotate(28 44 31)" />
        <ellipse cx="32" cy="34" rx="11" ry="10" fill="#6B5746" stroke={S} strokeWidth="2.2" />
        <circle cx="32" cy="22" r="6" fill="#FBF3E2" stroke={S} strokeWidth="1.4" />
        <circle cx="28" cy="33" r="2" fill="#FFFFFF" /><circle cx="28" cy="33" r="1.1" fill="#2E2018" />
        <circle cx="36" cy="33" r="2" fill="#FFFFFF" /><circle cx="36" cy="33" r="1.1" fill="#2E2018" />
        <path d="M29 39 Q32 41 35 39" stroke="#2E2018" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </svg>
    );
    case 'hen': return (
      <svg {...props}>
        <path d="M26 52 L26 58 M23 58 L29 58 M34 52 L34 58 M31 58 L37 58" stroke="#E89030" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 38 Q4 30 6 21 Q12 26 16 35Z" fill="#E0C79A" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <ellipse cx="30" cy="38" rx="17" ry="15" fill="#F2E2C4" stroke={S} strokeWidth="2.4" />
        <path d="M30 32 Q42 32 44 42 Q36 47 30 41Z" fill="#E0C79A" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="42" cy="24" r="9" fill="#F2E2C4" stroke={S} strokeWidth="2.2" />
        <path d="M38 14 Q40 10 42 14 Q44 10 46 15 L46 18 Q42 16 38 18Z" fill="#E04545" stroke={S} strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M44 30 Q46 33 44 35" fill="#E04545" stroke={S} strokeWidth="0.9" />
        <path d="M50 24 L57 26 L50 28Z" fill="#E89030" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="44" cy="22" r="1.7" fill="#2E2018" />
      </svg>
    );
    case 'rooster': return (
      <svg {...props}>
        <path d="M28 52 L28 58 M25 58 L31 58 M37 52 L37 58 M34 58 L40 58" stroke="#FFC542" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 40 Q2 30 4 18 Q10 23 14 33Z" fill="#2A6FDB" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 43 Q1 37 2 25 Q9 30 13 38Z" fill="#3DB874" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <ellipse cx="33" cy="39" rx="15" ry="14" fill="#C44545" stroke={S} strokeWidth="2.4" />
        <circle cx="45" cy="23" r="9" fill="#C44545" stroke={S} strokeWidth="2.2" />
        <path d="M38 13 Q40 7 42 13 Q44 7 46 13 Q48 8 50 14 L50 17 Q44 15 38 17Z" fill="#E04545" stroke={S} strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M47 29 Q50 34 47 37" fill="#E04545" stroke={S} strokeWidth="0.9" />
        <path d="M53 23 L60 25 L53 28Z" fill="#FFC542" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="47" cy="21" r="1.7" fill="#2E2018" />
      </svg>
    );
    case 'chick': return (
      <svg {...props}>
        <path d="M27 50 L27 57 M24 57 L30 57 M34 50 L34 57 M31 57 L37 57" stroke="#E89030" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 34 Q15 38 19 47 Q28 45 28 38Z" fill="#FFC542" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
        <ellipse cx="30" cy="37" rx="15" ry="14" fill="#FFD455" stroke={S} strokeWidth="2.4" />
        <circle cx="41" cy="24" r="10" fill="#FFE085" stroke={S} strokeWidth="2.2" />
        <path d="M41 13 Q39 9 41 7 Q43 9 41 13" stroke={S} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M49 24 L55 26 L49 28Z" fill="#E89030" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="43" cy="22" r="1.7" fill="#2E2018" />
      </svg>
    );
    case 'duck': return (
      <svg {...props}>
        <path d="M11 38 Q5 34 6 27 Q12 31 15 38Z" fill="#FBF7EE" stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        <ellipse cx="27" cy="40" rx="18" ry="13" fill="#FBF7EE" stroke={S} strokeWidth="2.4" />
        <path d="M22 38 Q34 38 36 47 Q28 51 22 45Z" fill="#EFE6D2" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M40 41 Q40 20 50 16 Q58 17 54 27 Q48 31 48 42Z" fill="#FBF7EE" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M50 16 Q60 15 60 20 Q60 25 50 23Z" fill="#FF9F2D" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="50" cy="19" r="1.6" fill="#2E2018" />
      </svg>
    );
    case 'goat': return (
      <svg {...props}>
        <path d="M24 14 Q19 6 24 3 M40 14 Q45 6 40 3" stroke={S} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <ellipse cx="18" cy="27" rx="5" ry="2.6" fill="#EDE4D6" stroke={S} strokeWidth="1.8" transform="rotate(-25 18 27)" />
        <ellipse cx="46" cy="27" rx="5" ry="2.6" fill="#EDE4D6" stroke={S} strokeWidth="1.8" transform="rotate(25 46 27)" />
        <path d="M22 26 Q22 16 32 16 Q42 16 42 26 L40 44 Q38 50 32 50 Q26 50 24 44Z" fill="#EDE4D6" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="27" cy="28" r="2.2" fill="#2E2018" />
        <circle cx="37" cy="28" r="2.2" fill="#2E2018" />
        <ellipse cx="32" cy="42" rx="5" ry="4" fill="#D9CDB8" />
        <ellipse cx="30" cy="42" rx="1" ry="1.4" fill="#5A4A36" />
        <ellipse cx="34" cy="42" rx="1" ry="1.4" fill="#5A4A36" />
        <path d="M30 49 Q32 58 34 49" fill="#EDE4D6" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
    case 'dog': return (
      <svg {...props}>
        <ellipse cx="16" cy="31" rx="6" ry="11" fill="#8B5A2B" stroke={S} strokeWidth="2.2" transform="rotate(-12 16 31)" />
        <ellipse cx="48" cy="31" rx="6" ry="11" fill="#8B5A2B" stroke={S} strokeWidth="2.2" transform="rotate(12 48 31)" />
        <path d="M18 28 Q18 16 32 16 Q46 16 46 28 Q46 42 32 48 Q18 42 18 28Z" fill="#B9824A" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="26" cy="28" r="2.4" fill="#2E2018" />
        <circle cx="38" cy="28" r="2.4" fill="#2E2018" />
        <ellipse cx="32" cy="40" rx="10" ry="8" fill="#E0C79A" stroke={S} strokeWidth="1.6" />
        <ellipse cx="32" cy="36" rx="3" ry="2.4" fill="#2E2018" />
        <path d="M32 38 V43 M32 43 Q28 45 27 43 M32 43 Q36 45 37 43" stroke={S} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>
    );
    case 'rabbit': return (
      <svg {...props}>
        <ellipse cx="26" cy="14" rx="4" ry="12" fill="#EDE4D6" stroke={S} strokeWidth="2.2" transform="rotate(-8 26 14)" />
        <ellipse cx="38" cy="14" rx="4" ry="12" fill="#EDE4D6" stroke={S} strokeWidth="2.2" transform="rotate(8 38 14)" />
        <ellipse cx="26" cy="15" rx="1.6" ry="8" fill="#F7C5C0" transform="rotate(-8 26 15)" />
        <ellipse cx="38" cy="15" rx="1.6" ry="8" fill="#F7C5C0" transform="rotate(8 38 15)" />
        <path d="M18 34 Q18 22 32 22 Q46 22 46 34 Q46 48 32 50 Q18 48 18 34Z" fill="#EDE4D6" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="26" cy="34" r="2.4" fill="#2E2018" />
        <circle cx="38" cy="34" r="2.4" fill="#2E2018" />
        <path d="M30 40 L34 40 L32 43Z" fill="#F092B0" />
        <path d="M32 43 V46 M32 46 Q29 48 27 46 M32 46 Q35 48 37 46" stroke={S} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="40" r="2" fill="#F7C5C0" opacity=".6" />
        <circle cx="40" cy="40" r="2" fill="#F7C5C0" opacity=".6" />
      </svg>
    );
    default: return null;
  }
}

// ─── Star progress row (earned / total) ─────────────────────────────────
function StarProgress({ filled = 0, total = 3, size = 20 }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: total }).map((_, i) => {
        const on = i < filled;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24"
            fill={on ? 'var(--alf-sun)' : '#E4EBF2'}
            stroke={on ? 'var(--alf-sun-deep)' : '#CBD6E2'} strokeWidth="1.4" strokeLinejoin="round">
            <path d="m12 3 2.6 5.4 5.9.7-4.4 4.1 1.2 5.8-5.3-2.9-5.3 2.9 1.2-5.8L3.5 9.1l5.9-.7z" />
          </svg>
        );
      })}
    </div>
  );
}

Object.assign(window, { SubcatGlyph, StarProgress });
