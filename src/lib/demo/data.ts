import type {
  DemoActivityItem,
  DemoDeadlineItem,
  DemoProject,
  DemoSummaryMetric,
} from "@/types/project";
import { formatKes } from "@/lib/utils";

/** PHASE 1 ONLY — labeled demonstration data. Not connected to Supabase. */
export const DEMO_BANNER =
  "Demonstration data — not connected to a live municipality database";

export const municipalityDemo = {
  name: "Nakuru County Municipality",
  country: "Kenya",
  currency: "KES",
  financialYear: "FY 2025/26",
  financialYearRange: "1 Jul 2025 – 30 Jun 2026",
};

export const demoProjects: DemoProject[] = [
  {
    id: "prj-001",
    code: "NKR-WAT-2025-014",
    name: "Kaptembwo Water Reticulation Upgrade",
    description:
      "Extension of treated water distribution mains and consumer connections in Kaptembwo ward.",
    sector: "Water & Sanitation",
    department: "Water Services",
    manager: "Grace Wanjiku",
    location: "Kaptembwo, Nakuru",
    latitude: -0.3031,
    longitude: 36.08,
    fundingSource: "County Development Fund",
    approvedBudget: 48_500_000,
    expenditure: 21_340_000,
    commitments: 12_800_000,
    plannedStart: "2025-08-01",
    plannedEnd: "2026-04-30",
    actualStart: "2025-08-18",
    progress: 44,
    status: "On track",
    lifecycleStage: "Implementation",
    updatedAt: "2026-03-01T09:20:00Z",
  },
  {
    id: "prj-002",
    code: "NKR-RD-2025-008",
    name: "Njoro–Lare Access Road Improvement",
    description:
      "Grading, culvert installation and graveling of 12.4 km rural access road.",
    sector: "Roads & Transport",
    department: "Roads",
    manager: "Peter Kamau",
    location: "Njoro Sub-County",
    latitude: -0.333,
    longitude: 35.945,
    fundingSource: "Kenya Roads Board",
    approvedBudget: 72_000_000,
    expenditure: 39_100_000,
    commitments: 18_500_000,
    plannedStart: "2025-07-15",
    plannedEnd: "2026-02-28",
    actualStart: "2025-07-22",
    progress: 61,
    status: "Delayed",
    lifecycleStage: "Implementation",
    updatedAt: "2026-02-26T14:10:00Z",
  },
  {
    id: "prj-003",
    code: "NKR-HLTH-2025-003",
    name: "Menengai Dispensary Maternity Wing",
    description:
      "Construction of a 20-bed maternity wing with theatre and utility block.",
    sector: "Health",
    department: "Health Services",
    manager: "Dr. Anne Cherono",
    location: "Menengai West",
    latitude: -0.22,
    longitude: 36.07,
    fundingSource: "World Bank / National Govt",
    approvedBudget: 95_200_000,
    expenditure: 12_450_000,
    commitments: 41_000_000,
    plannedStart: "2025-10-01",
    plannedEnd: "2026-09-30",
    actualStart: "2025-11-05",
    progress: 18,
    status: "At risk",
    lifecycleStage: "Procurement",
    updatedAt: "2026-02-28T11:05:00Z",
  },
  {
    id: "prj-004",
    code: "NKR-EDU-2024-021",
    name: "Mwariki Primary Classroom Block",
    description: "Construction of an 8-classroom storey block and sanitation facilities.",
    sector: "Education",
    department: "Education",
    manager: "James Otieno",
    location: "Mwariki Estate",
    latitude: -0.29,
    longitude: 36.06,
    fundingSource: "County Development Fund",
    approvedBudget: 28_750_000,
    expenditure: 28_750_000,
    commitments: 0,
    plannedStart: "2024-09-01",
    plannedEnd: "2025-06-30",
    actualStart: "2024-09-12",
    progress: 100,
    status: "Completed",
    lifecycleStage: "Closure",
    updatedAt: "2025-07-18T16:00:00Z",
  },
  {
    id: "prj-005",
    code: "NKR-ENV-2025-011",
    name: "Lake Nakuru Buffer Solid Waste Programme",
    description:
      "Community waste collection points, transfer station upgrade and recycling stalls.",
    sector: "Environment",
    department: "Environment & Natural Resources",
    manager: "Faith Chebet",
    location: "Lake Nakuru East",
    latitude: -0.37,
    longitude: 36.09,
    fundingSource: "Climate Adaptation Grant",
    approvedBudget: 31_000_000,
    expenditure: 4_200_000,
    commitments: 6_100_000,
    plannedStart: "2026-01-15",
    plannedEnd: "2026-12-15",
    actualStart: null,
    progress: 8,
    status: "Pending approval",
    lifecycleStage: "Approval",
    updatedAt: "2026-02-20T08:40:00Z",
  },
  {
    id: "prj-006",
    code: "NKR-AGRI-2025-006",
    name: "Bahati Irrigation Demo Plots",
    description:
      "Solar-powered drip irrigation demonstration sites for smallholder cooperatives.",
    sector: "Agriculture",
    department: "Agriculture",
    manager: "Samuel Kiptoo",
    location: "Bahati Ward",
    latitude: -0.16,
    longitude: 36.15,
    fundingSource: "County Development Fund",
    approvedBudget: 19_800_000,
    expenditure: 9_650_000,
    commitments: 3_200_000,
    plannedStart: "2025-09-01",
    plannedEnd: "2026-05-31",
    actualStart: "2025-09-10",
    progress: 52,
    status: "On track",
    lifecycleStage: "Monitoring",
    updatedAt: "2026-03-02T10:15:00Z",
  },
  {
    id: "prj-007",
    code: "NKR-MKT-2025-002",
    name: "Free Area Modern Market Shade",
    description: "Steel-framed market sheds, drainage and trader stall allocation.",
    sector: "Trade & Markets",
    department: "Trade",
    manager: "Lucy Achieng",
    location: "Free Area, Nakuru Town",
    latitude: -0.282,
    longitude: 36.075,
    fundingSource: "County Development Fund",
    approvedBudget: 42_300_000,
    expenditure: 0,
    commitments: 0,
    plannedStart: "2026-04-01",
    plannedEnd: "2026-11-30",
    actualStart: null,
    progress: 0,
    status: "Draft",
    lifecycleStage: "Planning",
    updatedAt: "2026-02-12T13:25:00Z",
  },
  {
    id: "prj-008",
    code: "NKR-SEC-2024-009",
    name: "Street Lighting Phase III — CBD Ring",
    description: "Installation of LED street lights along the CBD ring and feeder roads.",
    sector: "Public Works",
    department: "Public Works",
    manager: "Daniel Mwangi",
    location: "Nakuru CBD",
    latitude: -0.303,
    longitude: 36.08,
    fundingSource: "Urban Development Grant",
    approvedBudget: 36_400_000,
    expenditure: 33_900_000,
    commitments: 1_100_000,
    plannedStart: "2024-11-01",
    plannedEnd: "2025-08-31",
    actualStart: "2024-11-08",
    progress: 96,
    status: "Completed",
    lifecycleStage: "Evaluation",
    updatedAt: "2025-09-04T09:50:00Z",
  },
];

const totalBudget = demoProjects.reduce((sum, p) => sum + p.approvedBudget, 0);
const totalExpenditure = demoProjects.reduce((sum, p) => sum + p.expenditure, 0);
const activeStatuses = new Set(["On track", "At risk", "Delayed", "Approved"]);

export const demoSummaryMetrics: DemoSummaryMetric[] = [
  {
    id: "total",
    label: "Total projects",
    value: String(demoProjects.length),
    hint: "Registered in demo register",
    tone: "accent",
  },
  {
    id: "active",
    label: "Active projects",
    value: String(demoProjects.filter((p) => activeStatuses.has(p.status)).length),
    hint: "Approved / implementation",
    tone: "default",
  },
  {
    id: "completed",
    label: "Completed projects",
    value: String(demoProjects.filter((p) => p.status === "Completed").length),
    hint: "Awaiting formal closure",
    tone: "success",
  },
  {
    id: "delayed",
    label: "Delayed projects",
    value: String(demoProjects.filter((p) => p.status === "Delayed").length),
    hint: "Behind planned schedule",
    tone: "warning",
  },
  {
    id: "risk",
    label: "Projects at risk",
    value: String(demoProjects.filter((p) => p.status === "At risk").length),
    hint: "Require corrective action",
    tone: "danger",
  },
  {
    id: "approvals",
    label: "Pending approvals",
    value: "12",
    hint: "Across projects & finance",
    tone: "warning",
  },
  {
    id: "budget",
    label: "Total approved budget",
    value: formatKes(totalBudget),
    hint: "Latest approved allocations",
    tone: "accent",
  },
  {
    id: "spend",
    label: "Actual expenditure",
    value: formatKes(totalExpenditure),
    hint: "Validated expenditure only",
    tone: "default",
  },
  {
    id: "remaining",
    label: "Remaining budget",
    value: formatKes(totalBudget - totalExpenditure),
    hint: "Approved minus expenditure",
    tone: "success",
  },
];

export const demoStatusDistribution = [
  { status: "On track", count: demoProjects.filter((p) => p.status === "On track").length },
  { status: "At risk", count: demoProjects.filter((p) => p.status === "At risk").length },
  { status: "Delayed", count: demoProjects.filter((p) => p.status === "Delayed").length },
  { status: "Completed", count: demoProjects.filter((p) => p.status === "Completed").length },
  {
    status: "Pending approval",
    count: demoProjects.filter((p) => p.status === "Pending approval").length,
  },
  { status: "Draft", count: demoProjects.filter((p) => p.status === "Draft").length },
];

export const demoSectorDistribution = Object.entries(
  demoProjects.reduce<Record<string, number>>((acc, project) => {
    acc[project.sector] = (acc[project.sector] ?? 0) + 1;
    return acc;
  }, {}),
).map(([sector, count]) => ({ sector, count }));

export const demoBudgetUtilization = demoProjects.map((project) => ({
  name: project.code,
  approved: project.approvedBudget / 1_000_000,
  expenditure: project.expenditure / 1_000_000,
  commitments: project.commitments / 1_000_000,
}));

export const demoProgressTrend = [
  { month: "Sep", planned: 18, actual: 14 },
  { month: "Oct", planned: 28, actual: 24 },
  { month: "Nov", planned: 38, actual: 33 },
  { month: "Dec", planned: 48, actual: 41 },
  { month: "Jan", planned: 58, actual: 49 },
  { month: "Feb", planned: 68, actual: 57 },
  { month: "Mar", planned: 78, actual: 64 },
];

export const demoMonthlyPerformance = [
  { month: "Oct", milestones: 6, inspections: 4, issuesClosed: 3 },
  { month: "Nov", milestones: 8, inspections: 5, issuesClosed: 4 },
  { month: "Dec", milestones: 5, inspections: 3, issuesClosed: 2 },
  { month: "Jan", milestones: 9, inspections: 7, issuesClosed: 6 },
  { month: "Feb", milestones: 7, inspections: 6, issuesClosed: 5 },
  { month: "Mar", milestones: 10, inspections: 8, issuesClosed: 7 },
];

export const demoActivities: DemoActivityItem[] = [
  {
    id: "act-1",
    title: "Progress update submitted — Kaptembwo Water",
    meta: "Grace Wanjiku · 44% complete",
    time: "2h ago",
    type: "progress",
  },
  {
    id: "act-2",
    title: "Site inspection logged — Njoro–Lare Road",
    meta: "Culvert 3 delayed by rainfall",
    time: "5h ago",
    type: "inspection",
  },
  {
    id: "act-3",
    title: "Budget revision awaiting approval",
    meta: "Menengai Dispensary · +KES 4.2M",
    time: "Yesterday",
    type: "approval",
  },
  {
    id: "act-4",
    title: "High risk flagged — contractor mobilisation",
    meta: "Menengai Dispensary maternity wing",
    time: "Yesterday",
    type: "risk",
  },
  {
    id: "act-5",
    title: "Payment certificate verified",
    meta: "Bahati Irrigation · IPC-03",
    time: "2 days ago",
    type: "finance",
  },
];

export const demoDeadlines: DemoDeadlineItem[] = [
  {
    id: "dl-1",
    title: "Milestone: Pipeline pressure testing",
    project: "Kaptembwo Water",
    dueDate: "2026-03-08",
    status: "upcoming",
  },
  {
    id: "dl-2",
    title: "Milestone: Base course completion",
    project: "Njoro–Lare Road",
    dueDate: "2026-02-28",
    status: "overdue",
  },
  {
    id: "dl-3",
    title: "Inspection: Foundation reinforcement",
    project: "Menengai Dispensary",
    dueDate: "2026-03-10",
    status: "upcoming",
  },
  {
    id: "dl-4",
    title: "Corrective action verification",
    project: "Lake Nakuru Waste",
    dueDate: "2026-03-05",
    status: "upcoming",
  },
];

export const demoPendingApprovals = [
  {
    id: "apr-1",
    type: "Budget revision",
    subject: "Menengai Dispensary Maternity Wing",
    requester: "Dr. Anne Cherono",
    submitted: "2026-02-27",
  },
  {
    id: "apr-2",
    type: "Project approval",
    subject: "Lake Nakuru Buffer Solid Waste Programme",
    requester: "Faith Chebet",
    submitted: "2026-02-20",
  },
  {
    id: "apr-3",
    type: "Payment approval",
    subject: "Njoro–Lare Access Road · IPC-05",
    requester: "Finance Officer",
    submitted: "2026-03-01",
  },
];

export const demoInspections = [
  {
    id: "ins-1",
    project: "Njoro–Lare Access Road",
    date: "2026-02-26",
    officer: "M&E Officer — M. Njoroge",
    finding: "Drainage incomplete at chainage 7+200",
  },
  {
    id: "ins-2",
    project: "Kaptembwo Water",
    date: "2026-02-24",
    officer: "M&E Officer — M. Njoroge",
    finding: "Pipe bedding compliant; jointing on schedule",
  },
  {
    id: "ins-3",
    project: "Bahati Irrigation",
    date: "2026-02-18",
    officer: "Project Manager — S. Kiptoo",
    finding: "Solar pump commissioning pending fencing",
  },
];
