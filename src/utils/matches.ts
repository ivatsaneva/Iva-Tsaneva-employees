import type {
  Employee,
  KeyOfPairedEmployee,
  MatchingRow,
  TopPair,
} from '@/types/employeesTypes';
import * as dayjs from 'dayjs';

export function calculateMatchingDays(
  firstFrom: dayjs.Dayjs,
  firstTo: dayjs.Dayjs,
  secondFrom: dayjs.Dayjs,
  secondTo: dayjs.Dayjs
) {
  const start = firstFrom.isAfter(secondFrom) ? firstFrom : secondFrom;
  const end = firstTo.isBefore(secondTo) ? firstTo : secondTo;
  if (end.isBefore(start)) return 0;
  return end.diff(start, 'day');
}

export function findMatches(records: Employee[]) {
  const byProject = new Map<number, Employee[]>();
  for (const r of records) {
    const list = byProject.get(r.projectId) ?? [];
    list.push(r);
    byProject.set(r.projectId, list);
  }

  const matchingRows: MatchingRow[] = [];
  const totalsByPair = new Map<KeyOfPairedEmployee, number>();

  for (const [projectId, list] of byProject) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i],
          b = list[j];
        if (a.employeeId === b.employeeId) continue;

        const days = calculateMatchingDays(
          a.dateFrom,
          a.dateTo,
          b.dateFrom,
          b.dateTo
        );
        if (days <= 0) continue;

        const first = Math.min(a.employeeId, b.employeeId);
        const second = Math.max(a.employeeId, b.employeeId);
        const key: KeyOfPairedEmployee = `${first} and ${second}`;

        matchingRows.push({
          firstEmployee: first,
          secondEmployee: second,
          projectId,
          daysWorkedTogether: days,
        });

        totalsByPair.set(key, (totalsByPair.get(key) ?? 0) + days);
      }
    }
  }

  let max = 0;
  for (const total of totalsByPair.values()) if (total > max) max = total;

  const topPairs: TopPair[] =
    max > 0
      ? Array.from(totalsByPair.entries())
          .filter(([, total]) => total === max)
          .map(([key, total]) => ({ key, total }))
      : [];

  return { matchingRows, topPairs };
}
