interface IUser {
  email: string;
  name: string;
  password: string;
}
interface ISignIn {
  email: string;
  password: string;
}
interface IAuthenticatedUser {
  email: string;
  name: string;
}

interface ICategory {
  color: IColor;
  icon: IIcon;
  _id: string;
  name: string;
  isEditable: boolean;
  userId: string;
}
interface IColor {
  id: string;
  name: string;
  code: string;
}
interface IIcon {
  id: string;
  name: string;
  symbol: string;
}
