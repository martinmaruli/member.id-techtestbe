
module.exports = {
  pagination: (dataCount, data, currentPage, perPage = 2) => {
    const pagination = {
      currentPage,
      perPage,
      next: null,
      prev: null,
      data: []
    }

    const totalPage = Math.ceil(dataCount / perPage);
    pagination.totalPage = totalPage;

    if (currentPage < totalPage) {
      pagination.next = Number(currentPage) + 1;
    }

    if (currentPage > 1) {
      pagination.prev = Number(currentPage) - 1;
    }

    const startIdx = perPage * (Number(currentPage) - 1);
    const endIdx = perPage * Number(currentPage);
    pagination.data = data.slice(startIdx, endIdx);

    return pagination;
  }
}