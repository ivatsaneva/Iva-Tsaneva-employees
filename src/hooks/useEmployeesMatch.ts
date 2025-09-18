import type { Employee, MatchingRow, TopPair } from '@/types/employeesTypes';
import { parseEmployeesCSV } from '@/utils/csv';
import { findMatches } from '@/utils/matches';
import { useMemo, useState } from 'react';

export function useEmployeesMatch() {
  const [csvFile, setCsvFile] = useState('');

  const employeeRecords: Employee[] = useMemo(
    () => parseEmployeesCSV(csvFile),
    [csvFile]
  );

  const {
    matchingRows,
    topPairs,
  }: { matchingRows: MatchingRow[]; topPairs: TopPair[] } = useMemo(
    () => findMatches(employeeRecords),
    [employeeRecords]
  );

  // console.log('test matches:', matchingRows.length, 'pairs:', topPairs);

  return { setCsvFile, employeeRecords, matchingRows, topPairs };
}
