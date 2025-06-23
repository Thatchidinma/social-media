import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const get = (key: string) => {
    return search.get(key);
  };

  const set = (data: Record<string, string | undefined>) => {
    const params = new URLSearchParams(search.toString());
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { get, set, literal: search.toString() };
}
