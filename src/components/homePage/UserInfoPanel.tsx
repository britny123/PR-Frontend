import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";

export default function UserInfoPanel() {
  const navigate = useNavigate();
  const { userData } = useUserData();

  return (
    <div className="w-full max-w-xs bg-white p-4 flex flex-col gap-4">
      <div className="grid grid-cols-4 mb-6 text-center border border-gray-200 rounded-lg">
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Blood</p>
          <p className="text-xs font-semibold">{userData.blood || "—"}</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Height</p>
          <p className="text-xs font-semibold">{userData.height || "—"}</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Weight</p>
          <p className="text-xs font-semibold">{userData.weight || "—"}</p>
        </div>
        <div>
          <p className="text-sm paragraph text-gray-600 mb-3">Age</p>
          <p className="text-xs font-semibold">{userData.age || "—"}</p>
        </div>
      </div>

      <div className="p-3 rounded-3xl border border-gray-200">
        <div className="p-3">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Identification
          </p>
          <div className="text-xs text-gray-600 paragraph">
            <p>ID: {userData.identification || "—"}</p>
            <p>Gender: {userData.gender || "—"}</p>
            <p>Phone: {userData.phone || "—"}</p>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Emergency Contact
          </p>
          <div className="text-xs text-gray-600 paragraph">
            <p>Name: {userData.emergencyPerson || "—"}</p>
            <p>Relationship: {userData.relationship || "—"}</p>
            <p>Phone: {userData.emergencyContact || "—"}</p>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Allergies & Conditions
          </p>
          <div className="text-xs text-gray-600 paragraph">
            <ul className="text-xs text-gray-600">
              {userData.allergies.length > 0 ? (
                userData.allergies.map((allergy, index) => (
                  <li key={index}>{allergy}</li>
                ))
              ) : (
                <li>—</li>
              )}
              {userData.conditions ? <li>{userData.conditions}</li> : null}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <button
          onClick={() => {}}
          className="w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer"
        >
          Edit personal information
        </button>
        <button
          onClick={() => {}}
          className="w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer"
        >
          Update emergency contact
        </button>
        <button
          onClick={() => {}}
          className="w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer"
        >
          Medication history
        </button>
      </div>

      <button
        onClick={() => navigate("/")}
        className="text-blue font-semibold cursor-pointer"
      >
        logout
      </button>
    </div>
  );
}