import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
}

export function Avatar({ name, className }: AvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary",
        className,
      )}
      aria-hidden
    >
      {initials || "U"}
    </div>
  );
}
