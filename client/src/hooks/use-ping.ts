import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// Dummy hook to satisfy the API contract requirement
// Not strictly needed for the static portfolio, but included for completeness
export function usePing() {
  return useQuery({
    queryKey: [api.ping.path],
    queryFn: async () => {
      const res = await fetch(api.ping.path);
      if (!res.ok) throw new Error("Failed to ping");
      return api.ping.responses[200].parse(await res.json());
    },
    enabled: false, // Don't actually run it for this static site
  });
}
