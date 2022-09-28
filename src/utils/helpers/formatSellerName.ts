export default function formatSellerName(name: string): string {
  return name
    .split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(' ');
}
