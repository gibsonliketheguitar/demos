import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res: any) => res.json());

export default function useSwrFetch(url: string) {
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
}
