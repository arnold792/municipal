import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Approvals",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Approvals"
      breadcrumbs={["Administration", "Approvals"]}
      description="Multi-level approval queues and decisions."
    />
  );
}
