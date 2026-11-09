"use client";

import { useMemo, useState } from "react";
import {
  Filter,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
  Search,
  Table2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/shared/status-badge";
import { PageHeader } from "@/components/shared/page-header";
import { demoProjects } from "@/lib/demo/data";
import { cn, formatKes } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";

type ViewMode = "table" | "list" | "board";

const statusFilters: Array<"All" | ProjectStatus> = [
  "All",
  "On track",
  "At risk",
  "Delayed",
  "Pending approval",
  "Completed",
  "Draft",
];

export function ProjectRegister() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof statusFilters)[number]>("All");
  const [view, setView] = useState<ViewMode>("table");

  const filtered = useMemo(() => {
    return demoProjects.filter((project) => {
      const matchesStatus = status === "All" || project.status === status;
      const haystack = `${project.name} ${project.code} ${project.department} ${project.sector} ${project.manager}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase().trim());
      return matchesStatus && matchesQuery;
    });
  }, [query, status]);

  return (
    <div>
      <PageHeader
        title="Project register"
        description="Browse, filter and review municipal development projects. Demonstration records only."
        actions={
          <>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
              Advanced filters
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4" />
              Register project
            </Button>
          </>
        }
      />

      <Card className="mb-4">
        <CardContent className="flex flex-col gap-3 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, code, sector or manager…"
              className="pl-9"
              aria-label="Search projects"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg border border-border bg-muted/40 p-0.5">
              {(
                [
                  ["table", Table2, "Table"],
                  ["list", List, "List"],
                  ["board", LayoutGrid, "Board"],
                ] as const
              ).map(([mode, Icon, label]) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setView(mode)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                    view === mode
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>
            <Badge variant="secondary">{filtered.length} shown</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {statusFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setStatus(item)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              status === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {view === "table" && <ProjectTable projects={filtered} />}
      {view === "list" && <ProjectList projects={filtered} />}
      {view === "board" && <ProjectBoardPreview projects={filtered} />}
    </div>
  );
}

function ProjectTable({ projects }: { projects: typeof demoProjects }) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Project</th>
              <th className="px-4 py-3 font-medium">Sector</th>
              <th className="px-4 py-3 font-medium">Manager</th>
              <th className="px-4 py-3 font-medium">Budget</th>
              <th className="px-4 py-3 font-medium">Progress</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-border/70 transition-colors hover:bg-muted/30"
              >
                <td className="px-4 py-3">
                  <p className="font-medium text-foreground">{project.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {project.code} · {project.department}
                  </p>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{project.sector}</td>
                <td className="px-4 py-3">{project.manager}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="font-medium">{formatKes(project.approvedBudget)}</p>
                  <p className="text-[11px] text-muted-foreground">
                    Spent {formatKes(project.expenditure)}
                  </p>
                </td>
                <td className="px-4 py-3 min-w-[140px]">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>{project.progress}%</span>
                    <span className="text-muted-foreground">{project.lifecycleStage}</span>
                  </div>
                  <Progress value={project.progress} />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={project.status} />
                </td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="icon" aria-label="Project actions">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {projects.length === 0 && (
        <div className="px-4 py-12 text-center text-sm text-muted-foreground">
          No demonstration projects match the current filters.
        </div>
      )}
    </Card>
  );
}

function ProjectList({ projects }: { projects: typeof demoProjects }) {
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <Card key={project.id} className="transition-transform hover:-translate-y-0.5">
          <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <StatusBadge status={project.status} />
                <span className="text-xs text-muted-foreground">{project.code}</span>
              </div>
              <h3 className="text-base font-semibold">{project.name}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>{project.sector}</span>
                <span>{project.location}</span>
                <span>PM: {project.manager}</span>
              </div>
            </div>
            <div className="w-full shrink-0 md:w-56">
              <div className="mb-1 flex justify-between text-xs">
                <span className="font-medium">{project.progress}%</span>
                <span className="text-muted-foreground">{formatKes(project.approvedBudget)}</span>
              </div>
              <Progress value={project.progress} />
              <p className="mt-2 text-[11px] text-muted-foreground">
                {project.plannedStart} → {project.plannedEnd}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
      {projects.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            No demonstration projects match the current filters.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function ProjectBoardPreview({ projects }: { projects: typeof demoProjects }) {
  const columns: ProjectStatus[] = [
    "Draft",
    "Pending approval",
    "On track",
    "At risk",
    "Delayed",
    "Completed",
  ];

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {columns.map((column) => {
        const cards = projects.filter((project) => project.status === column);
        return (
          <div
            key={column}
            className="w-[260px] shrink-0 rounded-xl border border-border bg-muted/30 p-3"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">{column}</p>
              <Badge variant="secondary">{cards.length}</Badge>
            </div>
            <div className="space-y-2">
              {cards.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-border bg-card p-3 shadow-sm"
                >
                  <p className="text-sm font-medium leading-snug">{project.name}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{project.code}</p>
                  <div className="mt-3">
                    <Progress value={project.progress} />
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    {project.manager}
                  </p>
                </div>
              ))}
              {cards.length === 0 && (
                <p className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-xs text-muted-foreground">
                  No cards
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
