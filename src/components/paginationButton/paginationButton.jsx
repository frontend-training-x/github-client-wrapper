function PaginationButton() {
  return (
    <div className="flex justify-between items-center bg-gray-100 border-t-2 border-gray-800">
      <span className="mx-2 my-2">Showing 1 to 30 of 100 results</span>

      <div className="grid grid-auto-row border border-gray-600 rounded-lg mx-2 my-2 shadow-md">
        <div className="mx-1 my-1">
          <button className="border-r border-gray-400 px-1" type="button">
            back
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            1
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            2
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            3
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            ...
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            28
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            29
          </button>
          <button className="border-r border-gray-400 px-1" type="button">
            30
          </button>
          <button className="px-1" type="button">
            ahead
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginationButton;
