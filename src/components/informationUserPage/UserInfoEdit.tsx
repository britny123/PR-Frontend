import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../reusableComponents/InputField";
import FormRow from "../reusableComponents/FormRow";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import { getProfile, updateProfile } from "../../services/profileService";

type ProfileForm = {
  name: string;
  identification: string;
  age: string;
  height: string;
  weight: string;
  blood: string;
  gender: string;
};

export default function UserInfoEdit() {
  const navigate = useNavigate();

  const [profileId, setProfileId] = useState<string>("");

  const [form, setForm] = useState<ProfileForm>({
    name: "",
    identification: "",
    age: "",
    height: "",
    weight: "",
    blood: "",
    gender: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await getProfile();

      setProfileId(profile.id);

      setForm({
        name: profile.name ?? "",
        identification: profile.identification_number ?? "",
        age: profile.age?.toString() ?? "",
        height: profile.height?.toString() ?? "",
        weight: profile.weight?.toString() ?? "",
        blood: profile.blood_type ?? "",
        gender: profile.gender ?? "",
      });
    };

    loadProfile();
  }, []);

  const handleChange = (field: keyof ProfileForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateProfile(profileId, {
        name: form.name,
        identification_number: form.identification,
        age: Number(form.age),
        height: Number(form.height),
        weight: Number(form.weight),
        blood_type: form.blood,
        gender: form.gender,
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  return (
    <div className="w-87.5 bg-white rounded-[30px] border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
      <h2 className="text-blue text-xl font-bold text-center title">
        Edit Personal Information
      </h2>

      <InputField
        placeholder="Name"
        type="text"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <InputField
        placeholder="Identification"
        type="text"
        value={form.identification}
        onChange={(e) => handleChange("identification", e.target.value)}
      />

      <InputField
        placeholder="Age"
        type="number"
        value={form.age}
        onChange={(e) => handleChange("age", e.target.value)}
      />

      <FormRow>
        <InputField
          placeholder="Height"
          type="number"
          value={form.height}
          onChange={(e) => handleChange("height", e.target.value)}
        />

        <InputField
          placeholder="Weight"
          type="number"
          value={form.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
        />
      </FormRow>

      <InputField
        placeholder="Blood"
        type="text"
        value={form.blood}
        onChange={(e) => handleChange("blood", e.target.value)}
      />

      <InputField
        placeholder="Gender"
        type="text"
        value={form.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      />

      <ButtonLarge onClick={handleSave} text="Save Changes" />
      <ButtonSmall onClick={() => navigate("/home")} text="Exit" />
    </div>
  );
}