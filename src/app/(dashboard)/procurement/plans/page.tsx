import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Procurement Plans",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Procurement Plans"
      breadcrumbs={["Procurement", "Procurement Plans"]}
      description="Annual and project procurement planning."
    />
  );
}
