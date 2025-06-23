type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TDoctor = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
};

export type TTask = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
