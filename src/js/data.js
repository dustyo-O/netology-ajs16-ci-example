const cashback = {
  regular: {
    bound: 1000,
    percent: 1,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  gold: {
    bound: 100000,
    percent: 5,
  },
};

export default function calculateCashback(amount) {
  const discount = Object.keys(cashback) // ['regular', 'silver', 'gold']
    .sort((a, b) => cashback[b].bound - cashback[a].bound)
    .find((key) => amount >= cashback[key].bound);

  if (!discount) return 0;

  // eslint-disable-next-line no-mixed-operators
  return amount * cashback[discount].percent / 100;
}
