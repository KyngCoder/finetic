import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type userType = {
  firstName: string;
  lastName: string;
  country: string;
  residence: string;
  DOB: string;
  email: string;
  password: string;
  repeatPassword: string;
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  zipCode: number;
  state: string;
  telephone: string;
  employmentStatus: string;
  sourceOfFunds: string;
  annualIncome: string;
  proofType: string;
  imageProof: any;
  setFirstName: (value: SetStateAction<string>) => void;
  setLastName: (value: SetStateAction<string>) => void;
  setCountry: (value: SetStateAction<string>) => void;
  setResidence: (value: SetStateAction<string>) => void;
  setDOB: (value: SetStateAction<string>) => void;
  setEmail: (value: SetStateAction<string>) => void;
  setPassword: (value: SetStateAction<string>) => void;
  setRepeatPassword: (value: SetStateAction<string>) => void;
  setAddressLineOne: (value: SetStateAction<string>) => void;
  setAddressLineTwo: (value: SetStateAction<string>) => void;
  setZipCode: (value: SetStateAction<number>) => void;
  setCity: (value: SetStateAction<string>) => void;
  setState: (value: SetStateAction<string>) => void;
  setTelephone: (value: SetStateAction<string>) => void;
  setEmploymentStatus: (value: SetStateAction<string>) => void;
  setSourceOfFunds: (value: SetStateAction<string>) => void;
  setAnnualIncome: (value: SetStateAction<string>) => void;
  setProofType: (value: SetStateAction<string>) => void;
  setImageProof: (value: SetStateAction<File | undefined> ) => void;
  setAgree: (value: SetStateAction<string>) => void;
  agree: string;
  crypto:string,
  setCrypto:(value: SetStateAction<string>) => void;
};

const authContextDefaultValues: userType = {
  firstName: "",
  lastName: "",
  country: "",
  residence: "radio1",
  DOB: "",
  email: "",
  password: "",
  repeatPassword: "",
  addressLineOne: "",
  addressLineTwo: "",
  city: "",
  zipCode: 0,
  state: "",
  telephone: "",
  employmentStatus: "",
  sourceOfFunds: "",
  annualIncome: "",
  proofType: "",
  imageProof: "",
  setFirstName: () => {},
  setLastName: () => {},
  setCountry: () => {},
  setResidence: () => {},
  setDOB: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setRepeatPassword: () => {},
  setAddressLineOne: () => {},
  setAddressLineTwo: () => {},
  setCity: () => {},
  setZipCode: () => {},
  setState: () => {},
  setTelephone: () => {},
  setEmploymentStatus: () => {},
  setSourceOfFunds: () => {},
  setAnnualIncome: () => {},
  setImageProof: () => {},
  setProofType: () => {},
  setAgree: () => {},
  agree: "",
  crypto:"",
  setCrypto: () => {},
};

const AuthContext = createContext<userType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [sourceOfFunds, setSourceOfFunds] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [proofType, setProofType] = useState("");
  const [imageProof, setImageProof] = useState<File>();
  const [residence, setResidence] = useState("");
  const [agree, setAgree] = useState("");
  const [crypto,setCrypto] = useState('')

  const value = {
    firstName,
    lastName,
    country,
    residence,
    DOB,
    email,
    password,
    repeatPassword,
    addressLineOne,
    addressLineTwo,
    city,
    zipCode,
    state,
    telephone,
    employmentStatus,
    sourceOfFunds,
    annualIncome,
    proofType,
    imageProof,
    setFirstName,
    setLastName,
    setAddressLineOne,
    setAddressLineTwo,
    setAnnualIncome,
    setCity,
    setCountry,
    setEmail,
    setDOB,
    setEmploymentStatus,
    setPassword,
    setRepeatPassword,
    setResidence,
    setSourceOfFunds,
    setImageProof,
    setProofType,
    setTelephone,
    setZipCode,
    setState,
    setAgree,
    agree,
    crypto,
    setCrypto
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
