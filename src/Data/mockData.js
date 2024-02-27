const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateEcommerceData = () => {
  const sales = getRandomInt(100, 1000);
  const revenue = getRandomInt(1000, 10000);
  const userActivity = getRandomInt(500, 2000);

  return { sales, revenue, userActivity };
};

export default generateEcommerceData;
