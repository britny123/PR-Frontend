export const createMedicine = async (medicineData: any) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "https://prback-1.onrender.com/api/medicines",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(medicineData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};

export const getMedicines = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "https://prback-1.onrender.com/api/medicines",
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

export const getMedicineById = async (id: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`https://prback-1.onrender.com/api/medicines/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};


export const updateMedicine = async (
    id: string,
    medicineData: any
) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `https://prback-1.onrender.com/api/medicines/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(medicineData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};

export const deleteMedicine = async (id: string) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `https://prback-1.onrender.com/api/medicines/${id}`,
        {
            method: "DELETE",
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


export const transformMedicinesForNotification = (backendMedicines: any[]) => {
  return backendMedicines.map((medicine) => ({
    id: medicine.id,
    name: medicine.name,
    dose: medicine.dailyDose,
    time: medicine.timeTake.substring(0, 5), 
    icon: medicine.icon,
  }));
};

export const getMedicineHistory = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://prback-1.onrender.com/api/medicines/history",
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