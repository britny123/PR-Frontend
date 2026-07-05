export const createProfile = async (profileData: any) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "https://prback-1.onrender.com/api/profile",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(profileData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};

export const getProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        "https://prback-1.onrender.com/api/profile",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};

export const updateProfile = async (
  id: string,
  data: any
) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://prback-1.onrender.com/api/profile/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  );

  return response.json();
};



export const updateEmergencyContact = async (
  id: string,
  data: {
    emergency_contact: string;
    emergency_person: string;
    relationship: string;
  }
) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://prback-1.onrender.com/api/profile/${id}/emergency-contact`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  );

  return response.json();
};


