type UserAPIrole = "employee" | "manager";

type UserAPIresponse = {
  token: string;
  user: {
    id: string;
    name: string;
    role: UserAPIrole;
    email: string;
  };
};
