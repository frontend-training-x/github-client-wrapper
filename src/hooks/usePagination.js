const getPagesToRender = ({ since, count }) => {
  const realP = since / 30 + 1;

  const lowerBound = Math.max(1, realP - 2); // At most 2 pages to the left
  const upperBound = Math.min(count, realP + 2); // At most 2 pages to the right

  const pagesInLeft = [];
  const pagesInRight = [];

  for (let i = lowerBound; i < realP; i++) {
    pagesInLeft.push(i);
  }
  for (let i = realP + 1; i <= upperBound; i++) {
    pagesInRight.push(i);
  }

  const shouldRenderFirstPage = pagesInLeft.length > 0 && pagesInLeft[0] !== 1;

  const shouldRenderLastPage = pagesInRight.length > 0 && pagesInRight.at(-1) !== count;

  return {
    pagesInLeft,
    pagesInRight,
    shouldRenderFirstPage,
    shouldRenderLastPage,
  };
};

/**
  Logic for pagination component
*/
const usePagination = ({ since, count }) => {
  const result = getPagesToRender({ since, count });

  return result;
};

export default usePagination;
