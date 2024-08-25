import { GuestRegistrationWhereInput } from "./GuestRegistrationWhereInput";
import { GuestRegistrationOrderByInput } from "./GuestRegistrationOrderByInput";

export type GuestRegistrationFindManyArgs = {
  where?: GuestRegistrationWhereInput;
  orderBy?: Array<GuestRegistrationOrderByInput>;
  skip?: number;
  take?: number;
};
