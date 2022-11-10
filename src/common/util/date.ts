/**
 *
 * @param date 2022-11-10T01:34:10.000Z
 */

export function dateFormat(date: string) {
  const YYMMDD = date?.split('T')[0];
  const HHMMSS = new Date(date).toTimeString().split(' ')[0];
  return YYMMDD + ' ' + HHMMSS;
}
