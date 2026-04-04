"use client";

import { motion } from "framer-motion";

export interface WheelConfig {
  left: string;
  bottom: string;
  size: string;
}

export interface AnimatedVehicleProps {
  bodySrc: string;
  wheelSrc: string;
  wheels: WheelConfig[];
  width: string;
  height: string;
  direction: "left" | "right";
  duration: number;
  delay: number;
  startX: string;
  endX: string;
  className?: string;
  flipBody?: boolean;
  wheelRotateY?: string;
}

export function AnimatedVehicle({
  bodySrc,
  wheelSrc,
  wheels,
  width,
  height,
  direction,
  duration,
  delay,
  startX,
  endX,
  className = "",
  flipBody = false,
  wheelRotateY = "0deg",
}: AnimatedVehicleProps) {
  // If moving right, wheels spin clockwise (+360). If moving left, wheels spin counter-clockwise (-360) 
  // We use more rotations for realism
  const rotations = direction === "right" ? 360 * 4 : -360 * 4;

  return (
    <motion.div
      initial={{ x: startX }}
      animate={{ x: endX }}
      transition={{ duration, ease: "easeOut", delay }}
      className={`absolute z-0 ${className}`}
      style={{ width, height }}
    >
      {/* Vehicle Body Container */}
      <div className={`relative w-full h-full ${flipBody ? "scale-x-[-1]" : ""}`}>
        <img
          src={bodySrc}
          alt="Vehicle Body"
          className="w-full h-full object-contain filter drop-shadow-2xl"
        />
      </div>

      {/* Moving Wheels in 3D perspective */}
      {wheels.map((w, i) => (
        <div
          key={i}
          className="absolute z-10"
          style={{
            left: w.left,
            bottom: w.bottom,
            width: w.size,
            height: w.size,
            perspective: "800px" // Adds true 3D camera depth
          }}
        >
          {/* We angle the container to face the camera matching the vehicle body... */}
          <div style={{ transform: `rotateY(${wheelRotateY})`, width: "100%", height: "100%" }}>
            {/* ...and we spin the wheel inside that angled space! */}
            <motion.div
              className="relative w-full h-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: rotations }}
              transition={{ duration, ease: "easeOut", delay }}
            >
              <img
                src={wheelSrc}
                alt="Vehicle Wheel"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
