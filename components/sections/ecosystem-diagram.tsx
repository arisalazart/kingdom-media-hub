"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Signature element: the three Kingdom engines as a living, connected system.
 * Demand → revenue → capability flow is shown as dots travelling the cycle.
 * Purely decorative, so it's aria-hidden; the textual meaning lives in the cards.
 */

type Node = { id: string; label: string; x: number; y: number; color: string };

const CENTER = { x: 300, y: 232 };
const NODES: Node[] = [
  { id: "media", label: "Media Lab", x: 300, y: 64, color: "var(--color-sovereign-soft)" },
  { id: "agency", label: "Agency", x: 506, y: 360, color: "var(--color-gold)" },
  { id: "academy", label: "Academy", x: 94, y: 360, color: "var(--color-sovereign)" },
];

// Cycle order encodes the narrative: demand → revenue → capability → demand.
const EDGES = [
  { from: NODES[0], to: NODES[1] },
  { from: NODES[1], to: NODES[2] },
  { from: NODES[2], to: NODES[0] },
];

export function EcosystemDiagram() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 600 440"
      className="h-auto w-full max-w-xl"
      aria-hidden
      role="presentation"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(109,91,255,0.45)" />
          <stop offset="100%" stopColor="rgba(109,91,255,0)" />
        </radialGradient>
      </defs>

      {/* spokes to hub */}
      {NODES.map((n) => (
        <line
          key={`spoke-${n.id}`}
          x1={n.x}
          y1={n.y}
          x2={CENTER.x}
          y2={CENTER.y}
          stroke="var(--color-edge-strong)"
          strokeWidth={1}
          strokeDasharray="3 5"
        />
      ))}

      {/* cycle edges */}
      {EDGES.map((e, i) => (
        <line
          key={`edge-${i}`}
          x1={e.from.x}
          y1={e.from.y}
          x2={e.to.x}
          y2={e.to.y}
          stroke="var(--color-edge-strong)"
          strokeWidth={1.25}
        />
      ))}

      {/* travelling flow dots */}
      {!reduce &&
        EDGES.map((e, i) => (
          <motion.circle
            key={`flow-${i}`}
            r={4}
            fill="var(--color-sovereign-soft)"
            initial={{ cx: e.from.x, cy: e.from.y }}
            animate={{ cx: [e.from.x, e.to.x], cy: [e.from.y, e.to.y] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
          />
        ))}

      {/* hub */}
      <circle cx={CENTER.x} cy={CENTER.y} r={70} fill="url(#hubGlow)" />
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={30}
        fill="var(--color-surface-2)"
        stroke="var(--color-sovereign)"
        strokeWidth={1.5}
      />
      <text
        x={CENTER.x}
        y={CENTER.y + 4}
        textAnchor="middle"
        className="fill-cloud font-mono"
        style={{ fontSize: 11, letterSpacing: 1 }}
      >
        GROWTH
      </text>

      {/* outer nodes */}
      {NODES.map((n) => (
        <g key={n.id}>
          {!reduce && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={26}
              fill="none"
              stroke={n.color}
              strokeWidth={1}
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={26}
            fill="var(--color-surface)"
            stroke={n.color}
            strokeWidth={1.5}
          />
          <circle cx={n.x} cy={n.y} r={6} fill={n.color} />
        </g>
      ))}
    </svg>
  );
}
