import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Commitments",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Commitments"
      breadcrumbs={["Financial Management", "Commitments"]}
      description="Authorized obligations not yet paid."
    />
  );
}
