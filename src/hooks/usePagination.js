const getPagesToRender = ({ page, count }) => {
  const lowerBound = Math.max(1, page - 2); // At most 2 pages to the left
  const upperBound = Math.min(count, page + 2); // At most 2 pages to the right

  const pagesInLeft = [];
  const pagesInRight = [];

  for (let i = lowerBound; i < page; i++) {
    pagesInLeft.push(i);
  }
  for (let i = page + 1; i <= upperBound; i++) {
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
const usePagination = ({ page, count }) => {
  const result = getPagesToRender({ page, count });

  return result;
};

export default usePagination;
