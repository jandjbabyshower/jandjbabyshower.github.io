import React from "react";

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

const earShapes = [
  { rx: 8, ry: 9 },
  { rx: 7, ry: 7 },
  { rx: 9, ry: 8 },
];

const furColors = [
  "#5C3D2E", "#7B5B3A", "#3D2B1F", "#8B6F47", "#4A3728",
  "#6B4423", "#9C7B56", "#4E3524",
];

export default function BearAvatar({ name, size = 48 }) {
  const hash = hashCode(name || "bear");
  const color = furColors[hash % furColors.length];
  const ear = earShapes[hash % earShapes.length];
  const noseOffset = (hash % 3) - 1;
  const s = size;

  return (
    <svg viewBox="0 0 60 60" width={s} height={s} className="flex-shrink-0">
      {/* Ears */}
      <ellipse cx={17} cy={14} rx={ear.rx} ry={ear.ry} fill={color} />
      <ellipse cx={43} cy={14} rx={ear.rx} ry={ear.ry} fill={color} />
      {/* Inner ears */}
      <ellipse cx={17} cy={14} rx={ear.rx * 0.55} ry={ear.ry * 0.55} fill={color} opacity="0.5" />
      <ellipse cx={43} cy={14} rx={ear.rx * 0.55} ry={ear.ry * 0.55} fill={color} opacity="0.5" />
      {/* Head */}
      <ellipse cx={30} cy={32} rx={20} ry={22} fill={color} />
      {/* Muzzle */}
      <ellipse cx={30} cy={38} rx={10} ry={8} fill={color} opacity="0.7" />
      {/* Eyes */}
      <circle cx={22} cy={28} r={2.5} fill="#1a1a1a" />
      <circle cx={38} cy={28} r={2.5} fill="#1a1a1a" />
      <circle cx={23} cy={27.2} r={0.8} fill="white" />
      <circle cx={39} cy={27.2} r={0.8} fill="white" />
      {/* Nose */}
      <ellipse cx={30 + noseOffset} cy={35} rx={3.5} ry={2.5} fill="#1a1a1a" />
    </svg>
  );
}