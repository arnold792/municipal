"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  demoBudgetUtilization,
  demoMonthlyPerformance,
  demoProgressTrend,
  demoSectorDistribution,
  demoStatusDistribution,
} from "@/lib/demo/data";

const STATUS_COLORS = ["#7C5CFC", "#EF4444", "#F59E0B", "#10B981", "#A78BFA", "#94A3B8"];
const SECTOR_COLORS = ["#7C5CFC", "#8B5CF6", "#6366F1", "#06B6D4", "#10B981", "#F59E0B", "#EC4899"];

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-[260px] pt-0">{children}</CardContent>
    </Card>
  );
}

export function DashboardCharts() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <ChartCard
        title="Projects by status"
        description="Demonstration distribution across the project register"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={demoStatusDistribution}
              dataKey="count"
              nameKey="status"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={3}
            >
              {demoStatusDistribution.map((entry, index) => (
                <Cell
                  key={entry.status}
                  fill={STATUS_COLORS[index % STATUS_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Project progress over time"
        description="Planned versus actual portfolio progress (demo)"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={demoProgressTrend}>
            <defs>
              <linearGradient id="plannedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C5CFC" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#7C5CFC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} unit="%" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="planned"
              stroke="#A78BFA"
              fill="url(#plannedFill)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#7C5CFC"
              fill="url(#actualFill)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Budget utilization by project"
        description="Approved, expenditure and commitments (KES millions)"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demoBudgetUtilization}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-18} textAnchor="end" height={60} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="approved" fill="#DDD6FE" radius={[4, 4, 0, 0]} />
            <Bar dataKey="commitments" fill="#A78BFA" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenditure" fill="#7C5CFC" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Projects by sector"
        description="Sector coverage in the demonstration register"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demoSectorDistribution} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="sector"
              width={120}
              tick={{ fontSize: 11 }}
            />
            <Tooltip />
            <Bar dataKey="count" radius={[0, 6, 6, 0]}>
              {demoSectorDistribution.map((entry, index) => (
                <Cell
                  key={entry.sector}
                  fill={SECTOR_COLORS[index % SECTOR_COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Monthly implementation performance"
        description="Milestones, inspections and issues closed (demo)"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demoMonthlyPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="milestones" fill="#7C5CFC" radius={[4, 4, 0, 0]} />
            <Bar dataKey="inspections" fill="#06B6D4" radius={[4, 4, 0, 0]} />
            <Bar dataKey="issuesClosed" fill="#10B981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Planned versus actual expenditure"
        description="Portfolio trend derived from demonstration progress curve"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={demoProgressTrend.map((row) => ({
              month: row.month,
              planned: Math.round(row.planned * 3.8),
              actual: Math.round(row.actual * 3.1),
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} unit="M" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="planned"
              stroke="#94A3B8"
              fill="#E2E8F0"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#7C5CFC"
              fill="#EDE9FE"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
