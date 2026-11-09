import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Progress Reports",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Progress Reports"
      breadcrumbs={["Monitoring", "Progress Reports"]}
      description="Periodic progress submissions and verification."
    />
  );
}
