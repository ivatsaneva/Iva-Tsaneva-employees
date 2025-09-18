import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const DATE_FORMATS = [
  'YYYY-MM-DD',
  'DD/MM/YYYY',
  'DD-MM-YYYY',
  'MM/DD/YYYY',
  'MM-DD-YYYY',
];

export const todayStart = () => dayjs().startOf('day');

export function parseDateFormat(value: string) {
  if (!value || value.toUpperCase() == 'NULL') return todayStart();

  for (const format of DATE_FORMATS) {
    const parsedFormat = dayjs(value, format, true).startOf('day');
    if (parsedFormat.isValid()) return parsedFormat;
  }

  const fallback = dayjs(value).startOf('day');
  return fallback.isValid() ? fallback : todayStart();
}
