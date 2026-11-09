import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Contract Milestones",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Contract Milestones"
      breadcrumbs={["Procurement", "Contract Milestones"]}
      description="Deliverables and payment milestones."
    />
  );
}
