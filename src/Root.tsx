import App from "./App";
import { ServicePage } from "./pages/ServicePage";
import { SERVICES, type ServiceSlug } from "./lib/services";

export function Root({ page }: { page?: string }) {
  if (page && page in SERVICES) return <ServicePage slug={page as ServiceSlug} />;
  return <App />;
}
