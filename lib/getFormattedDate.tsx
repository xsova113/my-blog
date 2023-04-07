
export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en', {dateStyle: 'long'}).format(new Date(dateString))
}
