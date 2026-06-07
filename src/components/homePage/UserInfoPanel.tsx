import { useNavigate } from 'react-router-dom';
interface UserPanelData {
  name?: string;
  blood?: string;
  height?: string;
  weight?: string;
  age?: string;
  identification?: string;
  medicalInfo?: string;
  emergencyContact?: string;
  relationship?: string;
  phoneContact?: string;
  allergies?: string[];
  gender?: string;
  phone?: string;
}

export default function UserInfoPanel({ 
   userData = {
    name: "Juan Perez",
    blood: "A+",
    height: "160 cm",
    weight: "55 kg",
    age: "45 yrs",
    identification: "102830325",
    gender: "Female",
    phone: "506-86432151",
    emergencyContact: "Anna Perez Mendez",
    phoneContact: "506-87654001",
    relationship: "Sister",
    allergies: ["Allergie 1: Aspirinn", "Allergie 2: Shellfish", "Condition 1: Hypertension", "Condition 2: Diabetes"],
  }
}: { userData?: UserPanelData }) {
  const navigate = useNavigate();
  
  return (
    <div className="w-full max-w-xs  bg-white p-4 flex flex-col gap-4">
      {/* Medidas - 4 columnas */}
      <div className="grid grid-cols-4 mb-6 text-center border border-gray-200 rounded-lg">
        <div className="border-r border-gray-300 ">
          <p className="text-sm paragraph text-gray-600 mb-3">Blood</p>
          <p className="text-xs font-semibold ">{userData.blood || "—"}</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600 mb-3">Height</p>
          <p className="text-xs font-semibold ">{userData.height || "—"}</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm paragraph text-gray-600  mb-3">Weight</p>
          <p className="text-xs font-semibold ">{userData.weight || "—"}</p>
        </div>
        <div>
          <p className="text-sm paragraph text-gray-600  mb-3">Age</p>
          <p className="text-xs font-semibold ">{userData.age || "—"}</p>
        </div>
      </div>

        <div className="p-3 rounded-3xl border border-gray-200">
            {/* Identification */}
            <div className="p-3">
                <p className="text-sm font-semibold text-gray-800 mb-2">Identification</p>
                <div className="text-xs text-gray-600 paragraph">
                <p>ID: {userData.identification || "—"}</p>
                <p>Gender: {userData.gender || "—"}</p>
                <p>Phone: {userData.phone || "—"}</p>
                </div>

            </div>

       
            {/* Emergency Contact */}
            <div className="p-3">
                <p className="text-sm font-semibold text-gray-800 mb-2">Emergency Contact</p>
                    <div className="text-xs text-gray-600 paragraph">
                        <p>Name: {userData.emergencyContact || "—"}</p>
                        <p>Relationship: {userData.relationship || "—"}</p>
                        <p>Phone: {userData.phoneContact || "—"}</p>
                    </div>
            </div>

            {/* Allergies */}
            <div className="p-3">
                <p className="text-sm font-semibold text-gray-800 mb-2">Allergies & Conditions</p>
                <div className="text-xs text-gray-600 paragraph">
                <ul className="text-xs text-gray-600">
                    {userData.allergies?.map((allergy, index) => (
                        <li key={index}>{allergy}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>

      {/* Botones de Acción */}
        <div className="flex flex-col gap-3 mt-4">
            <button onClick={() => {}}
            className=" w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer">
                Edit personal information
            </button>
            <button onClick={() => {}}
            className=" w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer">
                Update emergency contact
            </button>
            <button onClick={() => {}}
            className=" w-full h-12 rounded-full color-water-blue text-white font-semibold cursor-pointer">
                Medication history
            </button>
        </div>

        {/* Logout */}
        <button onClick={() => navigate('/')} className="text-blue font-semibold cursor-pointer">
        logout
        </button>
    </div>
    );
}