const SortButton = ({ handleSort, sortOrder }) => {
    return (
        <button
            onClick={handleSort}
            className="btn btn-outline"
        >
            Sort by Date {sortOrder === "asc" ? "▲" : "▼"}
        </button>
    );
};

export default SortButton;
