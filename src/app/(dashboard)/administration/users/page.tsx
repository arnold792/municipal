import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Users & Roles",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Users & Roles"
      breadcrumbs={["Administration", "Users & Roles"]}
      description="User accounts, roles and permission keys."
    />
  );
}
