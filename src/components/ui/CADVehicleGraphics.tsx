import React from 'react';

type VehicleGraphicProps = React.SVGProps<SVGSVGElement>;

// ═══════════════════════════════════════════════════════════════
// 1. Commuter Motorcycle - CAD Wireframe
//    Faces LEFT.
// ═══════════════════════════════════════════════════════════════
export const CADMotorcycleGraphic: React.FC<VehicleGraphicProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <defs>
      <filter id="moto-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Base Grid/Ground */}
    <path d="M10 215 L390 215" stroke="#a8a29e" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M80 215 L80 225 M310 215 L310 225" stroke="#a8a29e" strokeWidth="0.5" />

    {/* FRONT WHEEL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="80" cy="165" r="32" />
      <circle cx="80" cy="165" r="28" strokeWidth="0.5" />
      <circle cx="80" cy="165" r="14" strokeWidth="0.5" />
      <circle cx="80" cy="165" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M80 133 L80 151 M80 179 L80 197 M48 165 L66 165 M94 165 L112 165" strokeWidth="0.8" />
      <path d="M57 142 L69 154 M91 176 L103 188 M103 142 L91 154 M69 176 L57 188" strokeWidth="0.8" />
      {/* Brake Rotor */}
      <circle cx="80" cy="165" r="18" strokeDasharray="2 2" strokeWidth="0.5" />
    </g>

    {/* REAR WHEEL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="310" cy="165" r="32" />
      <circle cx="310" cy="165" r="28" strokeWidth="0.5" />
      <circle cx="310" cy="165" r="14" strokeWidth="0.5" />
      <circle cx="310" cy="165" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M310 133 L310 151 M310 179 L310 197 M278 165 L296 165 M324 165 L342 165" strokeWidth="0.8" />
      <path d="M287 142 L299 154 M321 176 L333 188 M333 142 L321 154 M299 176 L287 188" strokeWidth="0.8" />
      <circle cx="310" cy="165" r="16" strokeDasharray="3 2" strokeWidth="0.5" />
    </g>

    {/* FRONT FORK & STEERING */}
    <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <path d="M80 165 L115 50" />
      <path d="M86 165 L121 52" strokeWidth="1" />
      {/* Suspension travel lines */}
      <path d="M78 120 L90 125" strokeWidth="0.8" />
      <path d="M80 115 L92 120" strokeWidth="0.8" />
    </g>

    {/* HEADLIGHT & COWL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M110 65 L90 75 L85 95 L95 105 L118 85 Z" />
      <path d="M90 75 L80 60 L105 50" strokeWidth="0.6" />
      <circle cx="95" cy="85" r="6" strokeWidth="0.5" />
      <circle cx="95" cy="85" r="2" strokeWidth="0.5" />
    </g>

    {/* HANDLEBARS */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      <path d="M118 50 L105 35 L120 28" />
      <circle cx="118" cy="50" r="3" />
      {/* Mirrors */}
      <path d="M110 42 L100 20" strokeWidth="0.8" />
      <path d="M92 15 C 92 10, 108 10, 108 15 C 108 24, 92 24, 92 15 Z" strokeWidth="0.8" />
    </g>

    {/* FRAME & BODYWORK */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      {/* Main frame backbone */}
      <path d="M125 55 L220 70 L240 110 L150 140 Z" />
      {/* Subframe */}
      <path d="M220 70 L300 65 L240 110" />
      <path d="M300 65 L320 80 L290 90 Z" />
    </g>

    {/* ENGINE DETAILS */}
    <g stroke="#d4d4d4" strokeWidth="0.8" fill="none">
      {/* Cylinder block */}
      <path d="M140 100 L180 85 L190 120 L150 135 Z" />
      {/* Cooling fins */}
      <line x1="145" y1="105" x2="183" y2="92" />
      <line x1="148" y1="113" x2="186" y2="100" />
      <line x1="151" y1="121" x2="188" y2="108" />
      {/* Crankcase */}
      <circle cx="185" cy="135" r="15" />
      <circle cx="185" cy="135" r="8" strokeDasharray="2 2" />
      <path d="M185 120 L210 130 L210 150 L185 150 Z" />
      <circle cx="210" cy="140" r="6" />
    </g>

    {/* SWINGARM */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      <path d="M210 140 L310 165" />
      <path d="M210 148 L310 165" strokeWidth="0.8" />
    </g>

    {/* REAR SHOCK */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M245 103 L275 152" />
      <path d="M238 107 L252 100" />
      {/* Spring coils */}
      <path d="M246 110 L255 106 L250 118 L259 114 L255 126 L264 122 L260 134 L269 130" strokeWidth="0.8" />
    </g>

    {/* EXHAUST */}
    <g stroke="#d4d4d4" strokeWidth="1" fill="none">
      <path d="M160 130 L150 165 L180 180 L250 175 L330 155" strokeWidth="1.5" />
      {/* Muffler */}
      <path d="M270 167 L340 148 L345 155 L275 174 Z" strokeWidth="1" fill="#fff" fillOpacity="0.1" />
      <path d="M340 148 L348 150 L345 155" />
    </g>

    {/* FUEL TANK */}
    <g filter="url(#moto-glow)">
      <path d="M125 58 C 130 35, 170 35, 195 45 C 210 50, 225 70, 220 70 C 200 70, 160 75, 125 58 Z" 
            stroke="#dc2626" strokeWidth="2" fill="none" />
      {/* Tank crease */}
      <path d="M135 55 C 160 48, 190 55, 205 65" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="4 2" />
    </g>

    {/* SEAT */}
    <path d="M215 70 L195 45" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M195 45 C 230 48, 260 55, 300 65 L298 75 C 260 65, 230 58, 220 70 Z" 
          stroke="#FFFFFF" strokeWidth="1.2" fill="#0c0a09" />

    {/* MUDGUARDS */}
    <path d="M45 150 Q 80 120 115 150" stroke="#FFFFFF" strokeWidth="1" fill="none" />
    <path d="M275 140 Q 310 110 345 140" stroke="#FFFFFF" strokeWidth="1" fill="none" />
    
    {/* TAIL LIGHT / PLATE */}
    <path d="M300 65 L315 65 L310 85" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M310 85 L300 110" stroke="#d4d4d4" strokeWidth="0.8" />
    <rect x="295" y="95" width="8" height="15" rx="1" stroke="#d4d4d4" strokeWidth="0.5" transform="rotate(-20 295 95)" />

    {/* HIGHLIGHT NODES */}
    <g fill="#dc2626">
      <circle cx="80" cy="165" r="2.5" className="animate-pulse" />
      <circle cx="310" cy="165" r="2.5" className="animate-pulse" />
      <circle cx="125" cy="55" r="2" />
      <circle cx="210" cy="140" r="2" />
      <circle cx="118" cy="50" r="2" />
      <circle cx="220" cy="70" r="2" />
    </g>

    <text x="5" y="15" fill="#dc2626" fontSize="10" fontFamily="monospace" letterSpacing="0.1em" opacity="0.8">DWG_MOTO.COMMUTER_V2</text>
    <rect x="5" y="20" width="80" height="1.5" fill="#dc2626" opacity="0.6" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════
// 2. Gearless Scooter (Activa style) - CAD Wireframe
//    Faces LEFT.
// ═══════════════════════════════════════════════════════════════
export const CADScooterGraphic: React.FC<VehicleGraphicProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <defs>
      <filter id="scoot-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Ground */}
    <path d="M10 215 L390 215" stroke="#a8a29e" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M85 215 L85 225 M300 215 L300 225" stroke="#a8a29e" strokeWidth="0.5" />

    {/* FRONT WHEEL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="85" cy="180" r="26" />
      <circle cx="85" cy="180" r="22" strokeWidth="0.5" />
      <circle cx="85" cy="180" r="10" strokeWidth="0.5" />
      <circle cx="85" cy="180" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M85 158 L85 170 M85 190 L85 202 M63 180 L75 180 M95 180 L107 180" strokeWidth="0.8" />
      <path d="M69 164 L78 173 M92 187 L101 196 M101 164 L92 173 M78 187 L69 196" strokeWidth="0.8" />
    </g>

    {/* REAR WHEEL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="295" cy="180" r="26" />
      <circle cx="295" cy="180" r="22" strokeWidth="0.5" />
      <circle cx="295" cy="180" r="10" strokeWidth="0.5" />
      <circle cx="295" cy="180" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M295 158 L295 170 M295 190 L295 202 M273 180 L285 180 M305 180 L317 180" strokeWidth="0.8" />
      <path d="M279 164 L288 173 M302 187 L311 196 M311 164 L302 173 M288 187 L279 196" strokeWidth="0.8" />
    </g>

    {/* FRONT SUSPENSION / LINK */}
    <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <path d="M85 180 L75 165 L90 140" />
      <circle cx="75" cy="165" r="2" strokeWidth="1" />
    </g>

    {/* STEERING COLUMN */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M90 140 L110 50" strokeWidth="1.2" />
      <path d="M95 140 L115 50" strokeWidth="0.6" />
    </g>

    {/* HEADLAMP & INSTRUMENT CLUSTER */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M110 50 C 100 40, 80 45, 80 55 C 80 65, 100 60, 105 60 Z" />
      {/* Headlight beam lines */}
      <path d="M78 50 L65 45 M78 55 L60 55 M78 60 L68 65" strokeWidth="0.5" stroke="#a8a29e" strokeDasharray="3 2" />
    </g>

    {/* MIRRORS */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M102 45 L95 25" />
      <circle cx="92" cy="20" r="6" strokeWidth="0.8" />
    </g>

    {/* FRONT APRON (Key feature) */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      {/* Outer profile */}
      <path d="M105 60 C 95 80, 80 120, 85 155 C 90 170, 110 165, 120 165" />
      {/* Inner profile */}
      <path d="M115 50 C 130 80, 135 120, 125 155" strokeWidth="0.8" />
      {/* V-shape design line */}
      <path d="M95 90 L105 130 L115 120" strokeWidth="0.5" strokeDasharray="4 2" />
      {/* Turn indicator */}
      <path d="M90 100 L85 115 L95 110 Z" strokeWidth="0.5" />
    </g>

    {/* FLOORBOARD */}
    <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <path d="M115 155 C 115 165, 125 165, 135 165 L200 165" />
      <path d="M125 160 L195 160" strokeWidth="0.5" />
    </g>

    {/* REAR BODY PANELS (Swooping up - highlighted red) */}
    <g filter="url(#scoot-glow)">
      <path d="M200 165 C 200 145, 205 115, 230 90 L325 85 C 335 85, 345 95, 340 115 L335 152 C 320 162, 280 155, 240 165 Z" 
            stroke="#dc2626" strokeWidth="2" fill="none" />
      {/* Side vents/creases */}
      <path d="M220 120 C 250 110, 290 105, 325 110" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M225 140 C 255 130, 285 130, 320 135" stroke="#dc2626" strokeWidth="0.5" />
    </g>

    {/* SEAT */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      <path d="M220 92 C 220 80, 240 80, 260 80 L320 80 C 330 80, 335 85, 325 85 Z" fill="#0c0a09" />
      {/* Seat stitching */}
      <path d="M250 80 L250 85" strokeWidth="0.5" />
    </g>

    {/* REAR GRAB RAIL */}
    <path d="M325 82 C 340 80, 345 95, 335 95" stroke="#d4d4d4" strokeWidth="1.5" fill="none" />

    {/* CVT ENGINE BLOCK & EXHAUST */}
    <g stroke="#d4d4d4" strokeWidth="1" fill="none">
      {/* Transmission case */}
      <path d="M230 160 L295 165 C 305 165, 305 180, 295 180 L230 175 Z" />
      <circle cx="245" cy="168" r="5" />
      <circle cx="285" cy="173" r="5" strokeDasharray="2 2" />
      {/* Kick start */}
      <path d="M245 168 L230 185 L220 185" strokeWidth="1.2" />
      {/* Fan cover / Exhaust */}
      <path d="M280 175 L330 185 L345 185 L340 175 L310 165 Z" strokeDasharray="3 1" strokeWidth="0.8" />
    </g>

    {/* SUSPENSION & STAND */}
    <path d="M260 120 L275 160" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
    <path d="M265 125 L255 155" strokeWidth="0.8" stroke="#FFFFFF" fill="none" />
    <path d="M185 165 L175 195 L180 195" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
    <path d="M190 165 L200 185 L205 185" stroke="#d4d4d4" strokeWidth="0.8" fill="none" /> {/* Side stand */}

    {/* MUDGUARDS */}
    <path d="M60 165 Q 85 150, 110 165" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
    <path d="M270 155 Q 295 145, 320 155" stroke="#FFFFFF" strokeWidth="1" fill="none" />
    {/* Rear tire hugger */}
    <path d="M265 180 C 265 150, 325 150, 325 180" stroke="#d4d4d4" strokeWidth="0.6" fill="none" strokeDasharray="4 2" />

    {/* HIGHLIGHT NODES */}
    <g fill="#dc2626">
      <circle cx="85" cy="180" r="2.5" className="animate-pulse" />
      <circle cx="295" cy="180" r="2.5" className="animate-pulse" />
      <circle cx="200" cy="165" r="2" />
      <circle cx="105" cy="60" r="2" />
      <circle cx="325" cy="85" r="2" />
      <circle cx="230" cy="90" r="2" />
    </g>

    <text x="5" y="15" fill="#dc2626" fontSize="10" fontFamily="monospace" letterSpacing="0.1em" opacity="0.8">DWG_SCTR.ACTIVA_V2</text>
    <rect x="5" y="20" width="80" height="1.5" fill="#dc2626" opacity="0.6" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════
// 3. Auto Rickshaw / Tuk Tuk (Bajaj RE style) - CAD Wireframe
//    Faces LEFT.
// ═══════════════════════════════════════════════════════════════
export const CADRickshawGraphic: React.FC<VehicleGraphicProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 440 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <defs>
      <filter id="rick-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Ground */}
    <path d="M10 250 L420 250" stroke="#a8a29e" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M75 250 L75 260 M330 250 L330 260" stroke="#a8a29e" strokeWidth="0.5" />

    {/* FRONT WHEEL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="75" cy="215" r="24" />
      <circle cx="75" cy="215" r="20" strokeWidth="0.5" />
      <circle cx="75" cy="215" r="8" strokeWidth="0.5" />
      <circle cx="75" cy="215" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M75 195 L75 207 M75 223 L75 235 M55 215 L67 215 M83 215 L95 215" strokeWidth="0.8" />
    </g>

    {/* FRONT MUDGUARD */}
    <path d="M50 200 C 60 180, 90 180, 100 200 L95 210 C 85 190, 65 190, 55 210 Z" stroke="#FFFFFF" strokeWidth="0.8" fill="#0c0a09" />

    {/* REAR WHEEL */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="330" cy="215" r="24" />
      <circle cx="330" cy="215" r="20" strokeWidth="0.5" />
      <circle cx="330" cy="215" r="8" strokeWidth="0.5" />
      <circle cx="330" cy="215" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M330 195 L330 207 M330 223 L330 235 M310 215 L322 215 M338 215 L350 215" strokeWidth="0.8" />
      <circle cx="330" cy="215" r="14" strokeDasharray="2 2" strokeWidth="0.5" />
    </g>

    {/* FRONT SUSPENSION & STEERING */}
    <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <path d="M75 215 L95 105" />
      <path d="M60 215 L70 195 L95 185" strokeWidth="0.8" /> {/* Link strut */}
    </g>

    {/* HANDLEBAR */}
    <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <path d="M90 100 L115 105 L125 100" />
      <circle cx="125" cy="100" r="2" />
    </g>

    {/* CANOPY / ROOF */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      <path d="M140 30 C 200 25, 300 25, 350 35 L345 42 C 300 35, 200 35, 142 40 Z" fill="#0c0a09" />
      <path d="M160 38 L160 30 M250 38 L250 28 M330 40 L330 32" strokeWidth="0.8" /> {/* Roof ribs */}
    </g>

    {/* MAIN CABIN BODY (Highlighted Red) */}
    <g filter="url(#rick-glow)">
      {/* Outer shell profile */}
      <path d="M110 185 
               L100 115 
               C 120 70, 140 30, 140 30 
               L350 35 
               L355 185 
               C 355 200, 310 205, 310 185 
               L310 170 
               L110 170 Z" 
            stroke="#dc2626" strokeWidth="2" fill="none" />
      
      {/* A-Pillar / Windshield frame */}
      <path d="M100 115 L140 40 L160 40 L115 115 Z" stroke="#dc2626" strokeWidth="1" />
      
      {/* B-Pillar */}
      <path d="M230 40 L220 170" stroke="#dc2626" strokeWidth="1.5" />
      <path d="M240 40 L230 170" stroke="#dc2626" strokeWidth="0.5" />
      
      {/* Lower body paneling */}
      <path d="M105 145 C 130 140, 200 145, 225 145" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="4 2" />
    </g>

    {/* PASSENGER OPENING */}
    <path d="M240 40 L345 42 L345 130 L235 130 Z" stroke="#d4d4d4" strokeWidth="0.5" strokeDasharray="5 3" fill="none" />

    {/* DRIVER CABIN DETAILS */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M115 115 L160 40" strokeWidth="0.5" /> {/* Windshield glass line */}
      <path d="M130 105 C 150 70, 165 70, 165 70" strokeWidth="0.5" /> {/* Wiper */}
      {/* Front fascia / Headlight housing */}
      <path d="M100 115 C 90 140, 95 170, 110 185" strokeWidth="1.2" />
      <circle cx="95" cy="120" r="7" />
      <circle cx="102" cy="155" r="4" strokeWidth="0.5" /> {/* Indicator */}
    </g>

    {/* INTERIOR SEATS */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      {/* Driver Seat */}
      <path d="M160 150 L180 150 L185 170 L160 170 Z" />
      <path d="M180 150 L190 125 L195 125 L185 170" />
      {/* Passenger Seat */}
      <path d="M345 140 L250 140 L250 170 L345 170" stroke="#d4d4d4" strokeWidth="0.8" />
    </g>

    {/* CHASSIS & UNDERCARRIAGE */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      <path d="M110 185 L355 185" />
      <path d="M140 190 L330 190" strokeWidth="0.8" />
      <rect x="240" y="185" width="20" height="15" rx="2" strokeWidth="0.8" /> {/* Battery/Fuel Box */}
    </g>

    {/* REAR ENGINE / BUMPER */}
    <g stroke="#d4d4d4" strokeWidth="1" fill="none">
      <path d="M355 150 C 370 150, 380 160, 380 175 L380 185 L355 185" />
      <path d="M355 160 L380 160 M355 170 L380 170" strokeWidth="0.5" /> {/* Vents */}
      <rect x="360" y="145" width="8" height="10" rx="1" fill="#dc2626" fillOpacity="0.8" stroke="none" /> {/* Tail light */}
      <path d="M300 215 L330 215" strokeWidth="1.5" /> {/* Axle / swingarm */}
      <circle cx="300" cy="215" r="10" strokeDasharray="3 2" /> {/* Differential/Engine hub */}
    </g>

    {/* HIGHLIGHT NODES */}
    <g fill="#dc2626">
      <circle cx="75" cy="215" r="2.5" className="animate-pulse" />
      <circle cx="330" cy="215" r="2.5" className="animate-pulse" />
      <circle cx="140" cy="30" r="2" />
      <circle cx="350" cy="35" r="2" />
      <circle cx="110" cy="185" r="2" />
      <circle cx="355" cy="185" r="2" />
      <circle cx="230" cy="40" r="2" />
      <circle cx="100" cy="115" r="2" />
    </g>

    <text x="5" y="15" fill="#dc2626" fontSize="10" fontFamily="monospace" letterSpacing="0.1em" opacity="0.8">DWG_RKSW.BAJAJ_V2</text>
    <rect x="5" y="20" width="80" height="1.5" fill="#dc2626" opacity="0.6" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════
// 4. Commercial Truck - CAD Wireframe
//    Faces LEFT.
// ═══════════════════════════════════════════════════════════════
export const CADTruckGraphic: React.FC<VehicleGraphicProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 460 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <defs>
      <filter id="truck-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Ground */}
    <path d="M10 240 L450 240" stroke="#a8a29e" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M90 240 L90 250 M320 240 L320 250 M380 240 L380 250" stroke="#a8a29e" strokeWidth="0.5" />

    {/* FRONT WHEEL (Left side now) */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="90" cy="200" r="28" />
      <circle cx="90" cy="200" r="22" strokeWidth="0.5" />
      <circle cx="90" cy="200" r="12" strokeWidth="0.8" />
      <circle cx="90" cy="200" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
      {[...Array(8)].map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return <line key={`fw-${i}`} x1={90 + Math.cos(a) * 12} y1={200 + Math.sin(a) * 12} x2={90 + Math.cos(a) * 28} y2={200 + Math.sin(a) * 28} strokeWidth="0.8" />
      })}
    </g>

    {/* REAR WHEELS (Dual axle on Right side now) */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="320" cy="200" r="28" />
      <circle cx="320" cy="200" r="22" strokeWidth="0.5" />
      <circle cx="320" cy="200" r="12" strokeWidth="0.8" />
      <circle cx="320" cy="200" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
      {[...Array(8)].map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return <line key={`rw1-${i}`} x1={320 + Math.cos(a) * 12} y1={200 + Math.sin(a) * 12} x2={320 + Math.cos(a) * 28} y2={200 + Math.sin(a) * 28} strokeWidth="0.8" />
      })}
    </g>
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <circle cx="380" cy="200" r="28" />
      <circle cx="380" cy="200" r="22" strokeWidth="0.5" />
      <circle cx="380" cy="200" r="12" strokeWidth="0.8" />
      <circle cx="380" cy="200" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
      {[...Array(8)].map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return <line key={`rw2-${i}`} x1={380 + Math.cos(a) * 12} y1={200 + Math.sin(a) * 12} x2={380 + Math.cos(a) * 28} y2={200 + Math.sin(a) * 28} strokeWidth="0.8" />
      })}
    </g>

    {/* CHASSIS FRAME */}
    <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <path d="M40 170 L420 170" />
      <path d="M40 175 L420 175" strokeWidth="1" />
      {/* Fuel tank / Battery box */}
      <rect x="180" y="175" width="60" height="25" rx="3" strokeWidth="1" />
      <path d="M190 175 L190 200 M210 175 L210 200 M230 175 L230 200" strokeWidth="0.5" />
      {/* Exhaust stack / Details */}
      <rect x="140" y="175" width="20" height="15" rx="1" strokeWidth="1" />
      {/* Rear under-run bar */}
      <path d="M420 170 L420 190 L400 190" strokeWidth="1" />
    </g>

    {/* CABIN (Highlighted Red - Front Left side) */}
    <g filter="url(#truck-glow)">
      <path d="M160 170 
               L160 50 
               C 150 45, 120 45, 100 50 
               L60 90 
               L40 120 
               L40 170 Z" 
            stroke="#dc2626" strokeWidth="2" fill="none" />
            
      {/* Door cutlines */}
      <path d="M150 160 L150 60 L100 60 L80 100 L80 160 Z" stroke="#dc2626" strokeWidth="0.8" />
      <path d="M80 110 L150 110" stroke="#dc2626" strokeWidth="0.5" strokeDasharray="3 2" />
      <line x1="135" y1="120" x2="145" y2="120" stroke="#dc2626" strokeWidth="1.5" /> {/* Door handle */}
    </g>

    {/* CABIN WINDOWS & DETAILS */}
    <g stroke="#d4d4d4" strokeWidth="1" fill="none">
      {/* Side Window */}
      <path d="M145 65 L105 65 L88 95 L145 95 Z" />
      {/* Front Windshield profile (seen slightly from side) */}
      <path d="M100 50 L60 90 L55 90 L95 50" strokeWidth="0.5" />
      {/* Mirror (Huge commercial mirror hanging off front) */}
      <path d="M85 85 L65 85 L65 55" strokeWidth="0.8" />
      <rect x="58" y="55" width="8" height="25" rx="2" strokeWidth="1" />
      <rect x="58" y="45" width="8" height="8" rx="2" strokeWidth="1" />
    </g>

    {/* FRONT BUMPER & GRILLE */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M40 120 L30 130 L30 170 L40 170" />
      <path d="M30 135 L40 135 M30 145 L40 145 M30 155 L40 155" strokeWidth="0.5" />
      {/* Headlight */}
      <rect x="30" y="140" width="10" height="15" rx="1" />
      <circle cx="35" cy="147.5" r="3" strokeWidth="0.5" />
      {/* Wheel arch */}
      <path d="M60 170 C 60 140, 120 140, 120 170" strokeWidth="1.5" />
    </g>

    {/* CARGO BOX / TRAILER (Right side) */}
    <g stroke="#FFFFFF" strokeWidth="1.2" fill="none">
      <path d="M170 170 L170 30 L415 30 L415 170" strokeWidth="1.5" />
      {/* Box panel ribs (very technical look) */}
      {[...Array(11)].map((_, i) => {
        const x = 190 + (i * 20);
        return <line key={`rib-${i}`} x1={x} y1="35" x2={x} y2="165" strokeWidth="0.5" strokeDasharray="5 3" />
      })}
      {/* Top and bottom horizontal braces */}
      <path d="M170 40 L415 40 M170 160 L415 160" strokeWidth="0.8" />
    </g>

    {/* CARGO REAR WHEEL ARCH */}
    <g stroke="#FFFFFF" strokeWidth="1" fill="none">
      <path d="M285 170 L285 160 L410 160 L410 170" strokeWidth="1.5" />
      <path d="M295 175 L405 175" strokeWidth="0.5" />
    </g>

    {/* HIGHLIGHT NODES */}
    <g fill="#dc2626">
      <circle cx="90" cy="200" r="2.5" className="animate-pulse" />
      <circle cx="320" cy="200" r="2.5" className="animate-pulse" />
      <circle cx="380" cy="200" r="2.5" className="animate-pulse" />
      <circle cx="160" cy="170" r="2" />
      <circle cx="160" cy="50" r="2" />
      <circle cx="40" cy="170" r="2" />
      <circle cx="40" cy="120" r="2" />
      <circle cx="415" cy="30" r="2" />
      <circle cx="170" cy="30" r="2" />
    </g>

    <text x="350" y="15" fill="#dc2626" fontSize="10" fontFamily="monospace" letterSpacing="0.1em" opacity="0.8">DWG_TRCK.CMRCL_V2</text>
    <rect x="350" y="20" width="80" height="1.5" fill="#dc2626" opacity="0.6" />
  </svg>
);
