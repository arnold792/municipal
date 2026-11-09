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

const STATUS_COLORS = ["#059669", "#DC2626", "#D97706", "#0284C7", "#76777d", "#565e74"];
const SECTOR_COLORS = [
  "#0284C7",
  "#006c4a",
  "#D97706",
  "#131b2e",
  "#68dba9",
  "#059669",
  "#DC2626",
  "#565e74",
];

function ChartCard({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden rounded-lg border-0 shadow-card">
      <CardHeader className="flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="font-display text-lg font-semibold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {action}
      </CardHeader>
      <CardContent className="h-[260px] pt-0">{children}</CardContent>
    </Card>
  );
}

export function DashboardCharts() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
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
              paddingAngle={2}
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
              <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#006c4a" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#006c4a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} unit="%" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="planned"
              stroke="#76777d"
              fill="transparent"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#006c4a"
              fill="url(#actualFill)"
              strokeWidth={2.5}
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
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10 }}
              interval={0}
              angle={-18}
              textAnchor="end"
              height={60}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="approved" fill="#dce9ff" radius={[2, 2, 0, 0]} />
            <Bar dataKey="commitments" fill="#0284C7" radius={[2, 2, 0, 0]} />
            <Bar dataKey="expenditure" fill="#006c4a" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Projects by sector"
        description="Sector coverage in the demonstration register"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demoSectorDistribution} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey="sector" width={120} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
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
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="milestones" fill="#131b2e" radius={[2, 2, 0, 0]} />
            <Bar dataKey="inspections" fill="#0284C7" radius={[2, 2, 0, 0]} />
            <Bar dataKey="issuesClosed" fill="#006c4a" radius={[2, 2, 0, 0]} />
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
            <defs>
              <linearGradient id="expFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284C7" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#0284C7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} unit="M" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="planned"
              stroke="#76777d"
              fill="transparent"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#0284C7"
              fill="url(#expFill)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
