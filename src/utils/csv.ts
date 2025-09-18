import type { Employee } from '@/types/employeesTypes';
import { parseDateFormat } from './dates';

export function parseEmployeesCSV(cvsFile: string): Employee[] {
  if (!cvsFile) return [];

  const trimedFile = cvsFile
    .split(/\r?\n/)
    .map((l) => l.split('#')[0])
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !/^EmpID/i.test(l));

  const records: (Employee | null)[] = trimedFile.map((line) => {
    const [empIdStr, projIdStr, fromStr, toStr] = line
      .split(',')
      .map((x) => x.trim());

    const employeeId = Number(empIdStr);
    const projectId = Number(projIdStr);
    if (Number.isNaN(employeeId) || Number.isNaN(projectId)) return null;

    const dateFrom = parseDateFormat(fromStr);
    const dateTo = parseDateFormat(toStr || 'NULL');

    if (dateTo.isBefore(dateFrom)) return null;

    return { employeeId, projectId, dateFrom, dateTo };
  });

  return records.filter((r): r is Employee => r !== null);
}
