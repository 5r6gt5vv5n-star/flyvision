// Glass globe: layered SVG, slow rotation via CSS (disabled for reduced motion).
export default function Globe({ glow = "#d4a017", rim = "#c8102e" }: { glow?: string; rim?: string }) {
  const meridians = [0, 30, 60, 90, 120, 150];
  return (
    <svg className="globe" viewBox="0 0 400 400" role="img" aria-label="Flyvision globe">
      <defs>
        <radialGradient id="glass" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset=".45" stopColor={rim} stopOpacity=".12" />
          <stop offset="1" stopColor="#000" stopOpacity=".85" />
        </radialGradient>
        <radialGradient id="halo"><stop offset=".7" stopColor={glow} stopOpacity=".35" /><stop offset="1" stopColor={glow} stopOpacity="0" /></radialGradient>
        <clipPath id="orb"><circle cx="200" cy="200" r="150" /></clipPath>
      </defs>
      <circle cx="200" cy="200" r="195" fill="url(#halo)" />
      <circle cx="200" cy="200" r="150" fill="url(#glass)" />
      <g clipPath="url(#orb)" fill="none" stroke={glow} strokeOpacity=".55" strokeWidth=".8">
        {[-100, -50, 0, 50, 100].map((y) => (
          <ellipse key={y} cx="200" cy={200 + y} rx={Math.sqrt(150 ** 2 - y ** 2)} ry={Math.sqrt(150 ** 2 - y ** 2) * 0.12} />
        ))}
        <g className="globe-spin">
          {meridians.map((a) => (
            <ellipse key={a} cx="200" cy="200" rx={150 * Math.abs(Math.cos((a * Math.PI) / 180)) + 0.1} ry="150" />
          ))}
        </g>
      </g>
      <circle cx="200" cy="200" r="150" fill="none" stroke={glow} strokeOpacity=".8" />
      <ellipse cx="160" cy="120" rx="60" ry="26" fill="#fff" opacity=".12" transform="rotate(-25 160 120)" />
    </svg>
  );
}
