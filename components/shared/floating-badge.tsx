interface FloatingBadgeProps {
  title: string;
}

export function FloatingBadge({
  title,
}: FloatingBadgeProps) {
  return (
    <div
      className="
      rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      px-4
      py-3
      text-sm
      font-medium
      text-white
      shadow-lg
      shadow-black/20
    "
    >
      {title}
    </div>
  );
}