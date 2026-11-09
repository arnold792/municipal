import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Building2,
  CalendarDays,
  CheckSquare,
  ClipboardCheck,
  ClipboardList,
  FileBarChart,
  FileText,
  FolderKanban,
  Gauge,
  HandCoins,
  LayoutDashboard,
  MapPin,
  Milestone,
  Package,
  Receipt,
  Settings,
  Shield,
  Target,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationSections: NavSection[] = [
  {
    title: "Workspace",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "All Projects", href: "/projects", icon: FolderKanban },
      { title: "My Projects", href: "/projects/my-projects", icon: CheckSquare },
      { title: "Project Board", href: "/projects/board", icon: Gauge },
      { title: "Project Calendar", href: "/projects/calendar", icon: CalendarDays },
      { title: "Milestones", href: "/projects/milestones", icon: Milestone },
    ],
  },
  {
    title: "Monitoring",
    items: [
      { title: "Progress Reports", href: "/monitoring/progress", icon: Activity },
      { title: "Site Inspections", href: "/monitoring/inspections", icon: ClipboardCheck },
      { title: "Site Visits", href: "/monitoring/site-visits", icon: MapPin },
      { title: "Indicators & Outcomes", href: "/monitoring/indicators", icon: Target },
      { title: "Risks & Delays", href: "/monitoring/risks", icon: AlertTriangle },
      {
        title: "Corrective Actions",
        href: "/monitoring/corrective-actions",
        icon: Wrench,
      },
    ],
  },
  {
    title: "Financial Management",
    items: [
      { title: "Budget Overview", href: "/finance/overview", icon: Wallet },
      { title: "Budget Allocations", href: "/finance/allocations", icon: HandCoins },
      { title: "Budget Revisions", href: "/finance/revisions", icon: FileText },
      { title: "Commitments", href: "/finance/commitments", icon: ClipboardList },
      { title: "Expenditure", href: "/finance/expenditure", icon: Receipt },
      { title: "Invoices", href: "/finance/invoices", icon: FileBarChart },
      { title: "Payments", href: "/finance/payments", icon: Package },
    ],
  },
  {
    title: "Procurement",
    items: [
      { title: "Procurement Plans", href: "/procurement/plans", icon: ClipboardList },
      { title: "Contractors", href: "/procurement/contractors", icon: Building2 },
      { title: "Contracts", href: "/procurement/contracts", icon: FileText },
      {
        title: "Contract Milestones",
        href: "/procurement/contract-milestones",
        icon: Milestone,
      },
      {
        title: "Contractor Performance",
        href: "/procurement/performance",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Administration",
    items: [
      { title: "Approvals", href: "/approvals", icon: Shield, badge: "12" },
      { title: "Reports & Analytics", href: "/reports", icon: BarChart3 },
      { title: "Departments", href: "/administration/departments", icon: Building2 },
      { title: "Users & Roles", href: "/administration/users", icon: Users },
      { title: "Audit Logs", href: "/administration/audit-logs", icon: ClipboardCheck },
      { title: "System Settings", href: "/settings", icon: Settings },
    ],
  },
];
