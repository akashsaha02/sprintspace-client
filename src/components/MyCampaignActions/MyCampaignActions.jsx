import { Link } from "react-router-dom";
const MyCampaignActions = ({ id, handleDelete }) => {

  return (
    <div className="flex justify-center items-center gap-2">
      <Link
        to={`/campaigns/update/${id}`}
        className="text-md bg-teal-600 text-white py-2 px-3 rounded hover:bg-teal-700 transition font-bold"
      >
        Update
      </Link>
      <button
        type="button"
        className="text-md bg-red-600 text-white py-2 px-3 rounded hover:bg-red-700 transition font-bold"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};


export default MyCampaignActions;
