/**
 * Calculate pagination values.
 * @param c current page.
 * @param m total number of pages.
 */
export function pagination(currentPage: number, lastPage: number, delta = 3) {
  const current = currentPage;
  const last = lastPage;
  const left = current - delta;
  const right = current + delta + 1;
  const range: number[] = [];

  for (let i = 1; i <= last; i++) {
    if (i > left && i <= right) {
      range.push(i);
    }
  }

  return range;
}

/**
 * Find last page for pagination
 * @param totalEntries total entries
 * @param pageSize entries per page.
 */
export function getLastPage(totalEntries: number, pageSize: number) {
  return Math.ceil(totalEntries / pageSize);
}
