import { DashboardShell } from "@/components/layout/dashboard-shell";
import { EmptyModule } from "@/components/shared/empty-module";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "System Settings",
};

async function getSupabaseStatus() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return {
      ok: false as const,
      message:
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.getClaims();

    if (error) {
      return {
        ok: false as const,
        message: error.message,
        projectHost: new URL(url).host,
      };
    }

    return {
      ok: true as const,
      message: "Supabase client connected",
      projectHost: new URL(url).host,
    };
  } catch (error) {
    return {
      ok: false as const,
      message:
        error instanceof Error
          ? error.message
          : "Unknown Supabase connection error",
      projectHost: new URL(url).host,
    };
  }
}

export default async function Page() {
  const status = await getSupabaseStatus();

  return (
    <DashboardShell
      title="System Settings"
      breadcrumbs={["Administration", "System Settings"]}
    >
      <PageHeader
        title="System Settings"
        description="Municipality profile, FY calendar, currency and branding."
      />
      <EmptyModule
        title="System Settings is scaffolded"
        description="Navigation and layout are in place. Domain workflows for this module will be implemented in the corresponding development phase."
      />
      <div className="mt-6 space-y-2 border-t border-border/60 pt-6">
        <p className="text-sm font-medium text-foreground">Supabase connection</p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge variant={status.ok ? "success" : "warning"}>
            {status.ok ? "Connected" : "Check config"}
          </Badge>
          <span>{status.message}</span>
          {"projectHost" in status && status.projectHost ? (
            <span className="font-mono text-xs">{status.projectHost}</span>
          ) : null}
        </div>
      </div>
    </DashboardShell>
  );
}
