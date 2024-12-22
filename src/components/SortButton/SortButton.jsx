const SortButton = ({ handleSort, sortOrder }) => {
    return (
        <div className="flex justify-center w-full md:w-1/3">
            <button
                onClick={handleSort}
                className="bg-teal-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-teal-700 transition w-full"
            >
                Sort by Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
        </div>
    );
};

export default SortButton;
