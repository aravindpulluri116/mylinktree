import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  className?: string;
}

export function SocialIcon({ href, icon: Icon, className }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full transition-all",
        className
      )}
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}
