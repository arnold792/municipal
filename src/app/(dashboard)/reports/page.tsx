import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Reports & Analytics",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Reports & Analytics"
      breadcrumbs={["Administration", "Reports & Analytics"]}
      description="Government-style performance and financial reports."
    />
  );
}
