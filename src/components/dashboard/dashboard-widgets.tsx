import { AlertTriangle, CalendarClock, ClipboardCheck, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  demoActivities,
  demoDeadlines,
  demoInspections,
  demoPendingApprovals,
  demoProjects,
} from "@/lib/demo/data";
import { StatusBadge } from "@/components/shared/status-badge";

function WidgetCard({
  title,
  description,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">{children}</CardContent>
    </Card>
  );
}

export function DashboardWidgets() {
  const highRisk = demoProjects.filter((project) =>
    ["At risk", "Delayed"].includes(project.status),
  );

  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <WidgetCard
        title="Recent project activity"
        description="Latest demonstration workspace events"
        icon={ClipboardCheck}
      >
        {demoActivities.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border/70 bg-muted/30 px-3 py-2.5"
          >
            <p className="text-sm font-medium leading-snug">{item.title}</p>
            <div className="mt-1 flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
              <span className="truncate">{item.meta}</span>
              <span className="shrink-0">{item.time}</span>
            </div>
          </div>
        ))}
      </WidgetCard>

      <WidgetCard
        title="Upcoming deadlines"
        description="Milestones and verification due dates"
        icon={CalendarClock}
      >
        {demoDeadlines.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-lg border border-border/70 px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{item.title}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{item.project}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs font-medium">{item.dueDate}</p>
              <Badge
                variant={item.status === "overdue" ? "danger" : "secondary"}
                className="mt-1"
              >
                {item.status}
              </Badge>
            </div>
          </div>
        ))}
      </WidgetCard>

      <WidgetCard
        title="Pending approvals"
        description="Items waiting in the approval queue"
        icon={Shield}
      >
        {demoPendingApprovals.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border/70 px-3 py-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <Badge variant="default">{item.type}</Badge>
              <span className="text-[11px] text-muted-foreground">{item.submitted}</span>
            </div>
            <p className="mt-1.5 text-sm font-medium">{item.subject}</p>
            <p className="text-[11px] text-muted-foreground">Requested by {item.requester}</p>
          </div>
        ))}
      </WidgetCard>

      <WidgetCard
        title="Recent site inspections"
        description="Field verification snapshots"
        icon={ClipboardCheck}
      >
        {demoInspections.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border/70 px-3 py-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium">{item.project}</p>
              <span className="text-[11px] text-muted-foreground">{item.date}</span>
            </div>
            <p className="mt-1 text-[12px] text-muted-foreground">{item.finding}</p>
            <p className="mt-1 text-[11px] font-medium text-primary">{item.officer}</p>
          </div>
        ))}
      </WidgetCard>

      <WidgetCard
        title="High-risk & delayed projects"
        description="Projects needing management attention"
        icon={AlertTriangle}
      >
        {highRisk.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between gap-3 rounded-lg border border-border/70 px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{project.name}</p>
              <p className="text-[11px] text-muted-foreground">{project.code}</p>
            </div>
            <StatusBadge status={project.status} />
          </div>
        ))}
      </WidgetCard>

      <WidgetCard
        title="Delayed milestones"
        description="Schedule exceptions from the demo set"
        icon={CalendarClock}
      >
        {demoDeadlines
          .filter((item) => item.status === "overdue")
          .concat(
            demoDeadlines.filter((item) => item.status === "upcoming").slice(0, 2),
          )
          .map((item) => (
            <div
              key={`ms-${item.id}`}
              className="rounded-lg border border-border/70 px-3 py-2.5"
            >
              <p className="text-sm font-medium">{item.title}</p>
              <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>{item.project}</span>
                <span>Due {item.dueDate}</span>
              </div>
            </div>
          ))}
      </WidgetCard>
    </div>
  );
}
