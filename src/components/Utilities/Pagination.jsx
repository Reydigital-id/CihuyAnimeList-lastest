const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    scrollTop();
    setPage((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    scrollTop();
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="paginationPopuler flex justify-center items-center gap-4 text-primary text-2xl">
      {page <= 1 ? null : (
        <a
          className="btn transition-all hover:text-accent cursor-pointer hover:bg-gray-600 bg-gray-700"
          onClick={handlePrevPage}
        >
          Prev
        </a>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <a
          className="btn transition-all hover:text-accent cursor-pointer hover:bg-gray-600 bg-gray-700"
          onClick={handleNextPage}
        >
          Next
        </a>
      )}
    </div>
  );
};

export default Pagination;
