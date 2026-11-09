export type ProjectStatus =
  | "Draft"
  | "Pending approval"
  | "Approved"
  | "On track"
  | "At risk"
  | "Delayed"
  | "Suspended"
  | "Completed"
  | "Closed"
  | "Rejected";

export type ProjectLifecycleStage =
  | "Identification"
  | "Planning"
  | "Approval"
  | "Procurement"
  | "Implementation"
  | "Monitoring"
  | "Evaluation"
  | "Closure";

export interface DemoProject {
  id: string;
  code: string;
  name: string;
  description: string;
  sector: string;
  department: string;
  manager: string;
  location: string;
  latitude: number;
  longitude: number;
  fundingSource: string;
  approvedBudget: number;
  expenditure: number;
  commitments: number;
  plannedStart: string;
  plannedEnd: string;
  actualStart: string | null;
  progress: number;
  status: ProjectStatus;
  lifecycleStage: ProjectLifecycleStage;
  updatedAt: string;
}

export interface DemoSummaryMetric {
  id: string;
  label: string;
  value: string;
  hint: string;
  trend?: string;
  tone?: "default" | "success" | "warning" | "danger" | "accent";
}

export interface DemoActivityItem {
  id: string;
  title: string;
  meta: string;
  time: string;
  type: "progress" | "inspection" | "approval" | "risk" | "finance";
}

export interface DemoDeadlineItem {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  status: "upcoming" | "overdue";
}
