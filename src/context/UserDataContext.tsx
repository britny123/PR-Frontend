import { createContext, useContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

export interface UserData {
  name: string;
  identification: string;
  age: string;
  height: string;
  weight: string;
  blood: string;
  gender: string;
  phone: string;
  emergencyContact: string;
  emergencyPerson: string;
  relationship: string;
  allergies: string[];
  conditions: string;
}

interface UserDataContextValue {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const initialUserData: UserData = {
  name: "",
  identification: "",
  age: "",
  height: "",
  weight: "",
  blood: "",
  gender: "",
  phone: "",
  emergencyContact: "",
  emergencyPerson: "",
  relationship: "",
  allergies: [],
  conditions: "",
};

const UserDataContext = createContext<UserDataContextValue | undefined>(undefined);

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(initialUserData);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error("useUserData must be used inside UserDataProvider");
  }

  return context;
}