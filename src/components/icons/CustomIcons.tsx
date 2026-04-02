import type { LucideProps } from "lucide-react";

export function RickshawIcon(props: LucideProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* Front Wheel */}
            <circle cx="5.5" cy="15" r="2" />
            {/* Rear Wheel (Actually double but side profile is single) */}
            <circle cx="16.5" cy="15" r="2" />

            {/* Front wheel mudguard */}
            <path d="M3.5 14 A 2.5 2.5 0 0 1 7.5 14" />
            {/* Steering Fork & Handle */}
            <path d="M5.5 13 L 6.5 8 L 8 7.5" />

            {/* Main Cabin Outline */}
            <path d="M8 13 L 7 8 L 10 2 H 19 C 19.5 2 20 2.5 20 3 V 13 Z" />

            {/* B-Pillar (Divider) */}
            <path d="M13 2 V 13" />

            {/* Rear Engine Bump */}
            <path d="M20 9.5 H 22 V 13 H 20" />

            {/* Canopy/Roof edge */}
            <path d="M10 2 L 10 4 H 19" />
        </svg>
    );
}

export function MotorScooterIcon(props: LucideProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* Front Wheel */}
            <circle cx="5.5" cy="15" r="3" />
            {/* Rear Wheel */}
            <circle cx="19.5" cy="15" r="3" />

            {/* Floorboard */}
            <path d="M16 14 h -5" />

            {/* Front Fork */}
            <path d="M5.5 15 l 2.5 -8" />
            
            {/* Front Shield */}
            <path d="M8 7 l 3 7" />

            {/* Handlebar */}
            <path d="M8 7 l 2 -0.5 h 1.5" />

            {/* Headlight / Console */}
            <path d="M8 7 l -0.5 -2 h -1.5 a 1 1 0 0 0 -1 1 v 1 h 3" />

            {/* Rear Cowl / Engine */}
            <path d="M16 14 L 15.5 7.5 h 5 l 2 4.5 l -3 3" />

            {/* Seat */}
            <path d="M20.5 7.5 c 0 -2 -5 -2 -6 0 z" />
        </svg>
    );
}

export function EngineValveIcon(props: LucideProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* Poppet valve — single closed outline path */}
            {/* Head face → right edge of head → taper to stem → down stem → tip → up left stem → taper back to head */}
            <path d="M2 5 H22 V7 C22 9 15 10 13 11.5 V20 H11 V11.5 C9 10 2 9 2 7 Z" />
            {/* Keeper groove (split keeper region) */}
            <line x1="10.5" y1="16" x2="13.5" y2="16" />
            <line x1="10.5" y1="17.5" x2="13.5" y2="17.5" />
        </svg>
    );
}

export function MotorcycleIcon(props: LucideProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* Front Wheel */}
            <circle cx="4.5" cy="15" r="3" />
            {/* Rear Wheel */}
            <circle cx="18.5" cy="15" r="3" />

            {/* Front Forks & Handlebars */}
            <path d="M4.5 15 l 3 -9" />
            <path d="M6 7 l 2 -2 h 1.5" />
            <circle cx="8" cy="5" r="0.5" fill="currentColor" />

            {/* Headlight */}
            <path d="M6.5 7 l -1.5 1 h 2" />

            {/* Main Frame Triangle & Engine Block Outline */}
            <path d="M7.5 8 h 6 l 3 6 h -5.5 z" />
            <path d="M10 10 h 2 v 2 h -2 z" />

            {/* Gas Tank, Seat, & Tail */}
            <path d="M7.5 8 c 0.5 -2 2.5 -2 4.5 -1.5 l 1.5 0.5 c 1 -0.5 3 -1 4.5 0 l 2 3 h -3 l -3 -2 z" />

            {/* Swingarm to Rear Wheel & Exhaust */}
            <path d="M15.5 14 l 3 1" />
            <path d="M13 14 l 6 0.5" strokeDasharray="1 1" />
        </svg>
    );
}

export function TruckIcon(props: LucideProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* Wheels */}
            <circle cx="18" cy="15" r="2.5" />
            <circle cx="7" cy="15" r="2.5" />
            <circle cx="12" cy="15" r="2.5" />

            {/* Cab */}
            <path d="M14 6h4l3 5v4" />
            
            {/* Chassis */}
            <path d="M22 15h-1.5m-5 0h-1m-4 0H2" />
            
            {/* Trailer/Bed */}
            <path d="M14 15V7 M2 15V7h12" />
            
            {/* Window */}
            <path d="M15 7h3l2 3h-5z" />
        </svg>
    );
}

