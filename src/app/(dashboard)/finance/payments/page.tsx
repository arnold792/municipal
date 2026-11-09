import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Payments",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Payments"
      breadcrumbs={["Financial Management", "Payments"]}
      description="Disbursed payments and certificates."
    />
  );
}
