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
            <circle cx="5" cy="15" r="3" />
            {/* Rear Wheel */}
            <circle cx="19" cy="15" r="3" />
            {/* Front Panel and Steering */}
            <path d="M5 12L7 3h3" />
            {/* Handlebar & Headlight Area */}
            <path d="M10 3l-1-2" />
            <circle cx="10" cy="2" r="1" />
            {/* Floorboard */}
            <path d="M7 12h6" />
            {/* Body Rear Curve */}
            <path d="M13 12v-5h4a2 2 0 0 1 2 2v3" />
            {/* Seat */}
            <path d="M12 7h6" />
        </svg>
    );
}

export function SolidTyreIcon(props: LucideProps) {
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
            {/* Outer Edge */}
            <circle cx="12" cy="12" r="10" />
            {/* Hub */}
            <circle cx="12" cy="12" r="4" />
            {/* Inner Rim/Tread dashed */}
            <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
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
