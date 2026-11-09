import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "@/types/project";

const statusVariant: Record<
  ProjectStatus,
  "default" | "secondary" | "success" | "warning" | "danger" | "outline"
> = {
  Draft: "secondary",
  "Pending approval": "warning",
  Approved: "default",
  "On track": "success",
  "At risk": "danger",
  Delayed: "warning",
  Suspended: "outline",
  Completed: "success",
  Closed: "secondary",
  Rejected: "danger",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <Badge variant={statusVariant[status]}>{status}</Badge>;
}
