export interface iUser {
  address: iUserAddress,
  company: iUserCompany,
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string
}

interface iUserAddress {
  city: string,
  geo: {
    lat: string,
    lng: string
  },
  street: string,
  suite: string,
  zipcode: string,
}

interface iUserCompany {
  bs: string,
  catchPhrase: string,
  name: string,
}
