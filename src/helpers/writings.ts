import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

const sortByDate = (
  firstEntry: CollectionEntry<"writing">,
  secondEntry: CollectionEntry<"writing">,
) => {
  const firstTimestamp = firstEntry.data.pubDate
    ? new Date(firstEntry.data.pubDate).getTime()
    : 0;
  const secondTimestamp = secondEntry.data.pubDate
    ? new Date(secondEntry.data.pubDate).getTime()
    : 0;
  return secondTimestamp - firstTimestamp;
};

export const getLatestWritings = async (limit?: number) => {
  const posts = await getCollection("writing");
  const sorted = posts.sort(sortByDate);
  return limit ? sorted.slice(0, limit) : sorted;
};
