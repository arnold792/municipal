import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Invoices",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Invoices"
      breadcrumbs={["Financial Management", "Invoices"]}
      description="Supplier invoices linked to contracts and projects."
    />
  );
}
