import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Audit Logs",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Audit Logs"
      breadcrumbs={["Administration", "Audit Logs"]}
      description="Immutable system activity history."
    />
  );
}
