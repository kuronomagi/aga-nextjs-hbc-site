/**
 * ページネーションのページ操作
 */

export const handlePaginationCurrentPage = (
  paginationCurrentSize: number | null,
  paginationMaxSize: number | null,
  pagination: string,
  setEvent: any,
) => {
  const currentSize = paginationCurrentSize;
  if (!!!currentSize || !!!paginationMaxSize) {
    return;
  }

  if (pagination === 'prev') {
    if (currentSize - 1 == 0) {
      return;
    }
    setEvent(currentSize - 1);
  } else if (pagination === 'next') {
    if (currentSize + 1 > paginationMaxSize) {
      return;
    }
    setEvent(currentSize + 1);
  }
};

export const handlePaginationCurrentPageNumber = (
  paginationCurrentSize: number | null,
  paginationMaxSize: number | null,
  pagination: string,
) => {
  const currentSize = paginationCurrentSize;
  if (!!!currentSize || !!!paginationMaxSize) {
    return;
  }

  if (pagination === 'prev') {
    if (currentSize - 1 == 0) {
      return;
    }
    return currentSize - 1;
  } else if (pagination === 'next') {
    if (currentSize + 1 > paginationMaxSize) {
      return;
    }
    return currentSize + 1;
  }
};
