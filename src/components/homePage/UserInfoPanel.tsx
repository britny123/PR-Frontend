import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";

export default function UserInfoPanel() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  useEffect(() => {

    const loadProfile = async () => {
      try {

        const data = await getProfile();

        setProfile(data);

      } catch (error) {
        console.error(error);
      }
    };

    loadProfile();

  }, []);

  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

  return (
    <div className="w-full max-w-xs bg-white p-4 flex flex-col gap-4">
      <div className="grid grid-cols-4 mb-6 text-center border border-gray-200 rounded-lg">
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Blood</p>
          <p className="text-xs font-semibold">{profile?.blood_type || "—"}</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Height</p>
          <p className="text-xs font-semibold">{profile?.height || "—"}</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Weight</p>
          <p className="text-xs font-semibold">{profile?.weight || "—"}</p>
        </div>
        <div>
          <p className="text-sm paragraph text-gray-600 mb-3">Age</p>
          <p className="text-xs font-semibold">{profile?.age || "—"}</p>
        </div>
      </div>

      <div className="p-3 rounded-3xl border border-gray-200">
        <div className="p-3">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Identification
          </p>
          <div className="text-xs text-gray-600 paragraph">
            <p>ID: {profile?.identification_number || "—"}</p>
            <p>Gender: {profile?.gender || "—"}</p>
            <p>Phone: {profile?.phone_number || "—"}</p>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Emergency Contact
          </p>
          <div className="text-xs text-gray-600 paragraph">
            <p>Name: {profile?.emergency_person || "—"}</p>
            <p>Relationship: {profile?.relationship || "—"}</p>
            <p>Phone: {profile?.emergency_contact || "—"}</p>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold text-gray-800 mb-0.5">
            Allergies
          </p>
          <div className="text-xs text-gray-600 paragraph">
            <ul className="text-xs text-gray-600">
              {profile?.allergies ? (
                profile.allergies
                  .split(",")
                  .map((allergy: string, index: number) => (
                    <li key={index}>{allergy.trim()}</li>
                  ))
              ) : (
                <li>—</li>
              )}
              <p className="text-sm font-semibold text-gray-800 mb-0.5 mt-1">
              Conditions
              </p>
              {profile?.conditions && (
                <li>{profile.conditions}</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <button
         onClick={() => navigate("/edit-profile")}
          className="w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer"
        >
          Edit personal information
        </button>
        <button
          onClick={() => navigate("/edit-emergency-contact")}
          className="w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer"
        >
          Update emergency contact
        </button>
        <button
          onClick={() => { }}
          className="w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer"
        >
          Medication history
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="text-blue font-semibold cursor-pointer"
      >
        logout
      </button>
    </div>
  );
}