export const CAT_SPRITE_W = 24;
export const CAT_SPRITE_H = 18;

export function SittingBody() {
  return (
    <>
      <g fill="#ffffff">
        <rect x="3" y="1" width="2" height="2" />
        <rect x="2" y="2" width="4" height="2" />
        <rect x="9" y="1" width="2" height="2" />
        <rect x="8" y="2" width="4" height="2" />
        <rect x="2" y="3" width="10" height="6" />
        <rect x="3" y="8" width="9" height="2" />
        <rect x="2" y="9" width="11" height="2" />
        <rect x="1" y="11" width="13" height="4" />
        <rect x="2" y="15" width="11" height="1" />
        <rect x="3" y="14" width="2" height="3" />
        <rect x="9" y="14" width="2" height="3" />
      </g>
      <rect x="3" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="9" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="4" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="9" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="6" y="7" width="2" height="1" fill="#ff2d95" />
    </>
  );
}

export function CatIdleA() {
  return (
    <svg
      className="frame idle idle-a"
      viewBox={`0 0 ${CAT_SPRITE_W} ${CAT_SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <SittingBody />
      <g fill="#ffffff">
        <rect x="13" y="11" width="2" height="2" />
        <rect x="14" y="9" width="2" height="2" />
        <rect x="14" y="7" width="2" height="2" />
        <rect x="12" y="5" width="2" height="2" />
      </g>
    </svg>
  );
}

export function CatIdleB() {
  return (
    <svg
      className="frame idle idle-b"
      viewBox={`0 0 ${CAT_SPRITE_W} ${CAT_SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <SittingBody />
      <g fill="#ffffff">
        <rect x="13" y="12" width="2" height="2" />
        <rect x="15" y="11" width="2" height="2" />
        <rect x="17" y="10" width="2" height="2" />
        <rect x="19" y="9" width="2" height="2" />
      </g>
    </svg>
  );
}

export function CatRunA() {
  return (
    <svg
      className="frame run run-a"
      viewBox={`0 0 ${CAT_SPRITE_W} ${CAT_SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <g fill="#ffffff">
        <rect x="3" y="2" width="2" height="3" />
        <rect x="2" y="3" width="4" height="2" />
        <rect x="9" y="2" width="2" height="3" />
        <rect x="8" y="3" width="4" height="2" />
        <rect x="1" y="4" width="11" height="6" />
        <rect x="4" y="9" width="15" height="5" />
        <rect x="3" y="13" width="2" height="4" />
        <rect x="6" y="13" width="2" height="2" />
        <rect x="14" y="13" width="2" height="2" />
        <rect x="17" y="13" width="2" height="4" />
        <rect x="19" y="9" width="2" height="2" />
        <rect x="21" y="9" width="2" height="2" />
      </g>
      <rect x="4" y="3" width="1" height="1" fill="#ff71ce" />
      <rect x="10" y="3" width="1" height="1" fill="#ff71ce" />
      <rect x="3" y="6" width="1" height="2" fill="#01cdfe" />
      <rect x="9" y="6" width="1" height="2" fill="#01cdfe" />
      <rect x="5" y="8" width="2" height="1" fill="#ff2d95" />
      <rect x="22" y="6" width="2" height="1" fill="#01cdfe" opacity="0.7" />
      <rect x="22" y="12" width="2" height="1" fill="#ff71ce" opacity="0.7" />
    </svg>
  );
}

export const CAT_PET_W = 24;
export const CAT_PET_H = 24;

function PettedBase() {
  return (
    <>
      <g fill="#ffffff">
        <rect x="3" y="7" width="2" height="2" />
        <rect x="2" y="8" width="4" height="2" />
        <rect x="9" y="7" width="2" height="2" />
        <rect x="8" y="8" width="4" height="2" />
        <rect x="2" y="9" width="10" height="6" />
        <rect x="3" y="14" width="9" height="2" />
        <rect x="2" y="15" width="11" height="2" />
        <rect x="1" y="17" width="13" height="4" />
        <rect x="2" y="21" width="11" height="1" />
        <rect x="3" y="20" width="2" height="3" />
        <rect x="9" y="20" width="2" height="3" />
      </g>
      <rect x="3" y="8" width="1" height="1" fill="#ff71ce" />
      <rect x="9" y="8" width="1" height="1" fill="#ff71ce" />
      <rect x="4" y="12" width="2" height="1" fill="#01cdfe" />
      <rect x="9" y="12" width="2" height="1" fill="#01cdfe" />
      <rect x="6" y="13" width="2" height="1" fill="#ff2d95" />
    </>
  );
}

function Heart({ y }: { y: number }) {
  return (
    <g fill="#ff2d95">
      <rect x="8" y={y} width="2" height="1" />
      <rect x="11" y={y} width="2" height="1" />
      <rect x="7" y={y + 1} width="7" height="1" />
      <rect x="8" y={y + 2} width="5" height="1" />
      <rect x="9" y={y + 3} width="3" height="1" />
      <rect x="10" y={y + 4} width="1" height="1" />
    </g>
  );
}

export function CatPetA() {
  return (
    <svg
      className="frame pet pet-a"
      viewBox={`0 0 ${CAT_PET_W} ${CAT_PET_H}`}
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMax meet"
    >
      <Heart y={0} />
      <PettedBase />
      <g fill="#ffffff">
        <rect x="13" y="17" width="2" height="2" />
        <rect x="14" y="15" width="2" height="2" />
        <rect x="14" y="13" width="2" height="2" />
        <rect x="12" y="11" width="2" height="2" />
      </g>
    </svg>
  );
}

export function CatPetB() {
  return (
    <svg
      className="frame pet pet-b"
      viewBox={`0 0 ${CAT_PET_W} ${CAT_PET_H}`}
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMax meet"
    >
      <Heart y={1} />
      <PettedBase />
      <g fill="#ffffff">
        <rect x="13" y="18" width="2" height="2" />
        <rect x="15" y="17" width="2" height="2" />
        <rect x="17" y="16" width="2" height="2" />
        <rect x="19" y="15" width="2" height="2" />
      </g>
    </svg>
  );
}

export function CatRunB() {
  return (
    <svg
      className="frame run run-b"
      viewBox={`0 0 ${CAT_SPRITE_W} ${CAT_SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <g fill="#ffffff">
        <rect x="3" y="1" width="2" height="3" />
        <rect x="2" y="2" width="4" height="2" />
        <rect x="9" y="1" width="2" height="3" />
        <rect x="8" y="2" width="4" height="2" />
        <rect x="2" y="3" width="10" height="6" />
        <rect x="5" y="8" width="13" height="6" />
        <rect x="5" y="13" width="2" height="2" />
        <rect x="8" y="13" width="2" height="4" />
        <rect x="13" y="13" width="2" height="4" />
        <rect x="16" y="13" width="2" height="2" />
        <rect x="18" y="7" width="2" height="2" />
        <rect x="20" y="5" width="2" height="2" />
        <rect x="20" y="3" width="2" height="2" />
      </g>
      <rect x="4" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="10" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="4" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="9" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="6" y="7" width="2" height="1" fill="#ff2d95" />
      <rect x="0" y="15" width="2" height="1" fill="#ffffff" opacity="0.5" />
      <rect x="2" y="16" width="2" height="1" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}
