import { Badge } from "@/components/ui/badge";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";
type BadgeColorVariant = "success" | "warning" | "info" | "default";

interface StatBadgeProps {
  label: string;
  variant?: BadgeVariant;
  color?: BadgeColorVariant;
}

export function StatBadge({ label, variant = "default", color = "default" }: StatBadgeProps) {
  // Map our custom colors if they aren't standard variants
  let customClass = "";
  
  if (variant === "outline") {
    switch (color) {
      case "success": customClass = "border-success text-success"; break;
      case "warning": customClass = "border-warning text-warning"; break;
      case "info": customClass = "border-health-teal text-health-teal"; break;
    }
  } else if (variant === "default") {
    switch (color) {
      case "success": customClass = "bg-success/15 text-success hover:bg-success/25 border-0"; break;
      case "warning": customClass = "bg-warning/15 text-warning hover:bg-warning/25 border-0"; break;
      case "info": customClass = "bg-health-teal/15 text-health-teal hover:bg-health-teal/25 border-0"; break;
    }
  }

  return (
    <Badge variant={variant} className={`capitalize ${customClass}`}>
      {label}
    </Badge>
  );
}
