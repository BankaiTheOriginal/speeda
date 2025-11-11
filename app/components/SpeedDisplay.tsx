interface SpeedDisplayProps {
  speed: number | null;
}

export default function SpeedDisplay({ speed }: SpeedDisplayProps) {
  if (speed === null) return null;
  return (
    <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-700">
      {speed !== null ? speed.toFixed() : "0"} Mbps{" "}
    </p>
  );
}
