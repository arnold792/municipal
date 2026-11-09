import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Contractor Performance",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Contractor Performance"
      breadcrumbs={["Procurement", "Contractor Performance"]}
      description="Performance assessments and compliance."
    />
  );
}
