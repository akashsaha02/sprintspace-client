import React from "react";

const Filters = ({
    selectedType,
    setSelectedType,
    selectedLocation,
    setSelectedLocation,
    searchName,
    setSearchName,
    startDateRange,
    setStartDateRange,
}) => {
    return (
        <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-bold mb-4">Filters</h3>

            {/* Event Type Filter */}
            <div className="mb-4">
                <label className="block font-medium mb-2">Event Type</label>
                <select
                    className="w-full p-2 border rounded-lg"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="3 KM">3 KM</option>
                    <option value="10 KM">10 KM</option>
                    <option value="25 KM">25 KM</option>
                </select>
            </div>

            {/* Search by Name */}
            <div className="mb-4">
                <label className="block font-medium mb-2">Search by Name</label>
                <input
                    type="text"
                    placeholder="Enter event name"
                    className="w-full p-2 border rounded-lg"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </div>

            {/* Location Filter */}
            <div className="mb-4">
                <label className="block font-medium mb-2">Location</label>
                <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full p-2 border rounded-lg"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                />
            </div>



            {/* Marathon Start Date Range */}
            <div>
                <label className="block font-medium mb-2">Marathon Start Date Range</label>
                <div className="flex gap-2">
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg"
                        value={startDateRange.start}
                        onChange={(e) =>
                            setStartDateRange((prev) => ({ ...prev, start: e.target.value }))
                        }
                    />
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg"
                        value={startDateRange.end}
                        onChange={(e) =>
                            setStartDateRange((prev) => ({ ...prev, end: e.target.value }))
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
