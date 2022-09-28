export default function formatNumberWithDot(price: number): string {
  const roundedPrice = Math.round(price);

  const formattedNumber = roundedPrice
    .toString()
    .split('')
    .reverse()
    .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
    .reverse()
    .join('');

  return formattedNumber;
}
