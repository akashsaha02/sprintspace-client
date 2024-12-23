const SortButton = ({ handleSort, sortOrder }) => {
    return (
        <button
            onClick={handleSort}
            className="bg-purple-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-700 transition w-full   md:w-1/3"
        >
            Sort by Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
    );
};

export default SortButton;
