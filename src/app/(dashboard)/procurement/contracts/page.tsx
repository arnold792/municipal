import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Contracts",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Contracts"
      breadcrumbs={["Procurement", "Contracts"]}
      description="Awarded contracts and commercial terms."
    />
  );
}
