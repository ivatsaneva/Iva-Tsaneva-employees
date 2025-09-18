import * as dayjs from 'dayjs';

export type Employee = {
  employeeId: number;
  projectId: number;
  dateFrom: dayjs.Dayjs;
  dateTo: dayjs.Dayjs;
};

export type MatchingRow = {
  firstEmployee: number;
  secondEmployee: number;
  projectId: number;
  daysWorkedTogether: number;
};

export type KeyOfPairedEmployee = `${number} and ${number}`;

export type TopPair = {
  key: KeyOfPairedEmployee;
  total: number;
};
