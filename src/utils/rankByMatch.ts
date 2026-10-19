// Keeps every item and puts the ones that match first. The order inside each group is kept
// (Array.prototype.sort is stable), so the cards reorder instead of disappearing.
export function rankByMatch<T>(items: T[], matches: (item: T) => boolean) {
  return items
    .map((item) => ({ item, matches: matches(item) }))
    .sort((a, b) => Number(b.matches) - Number(a.matches));
}
