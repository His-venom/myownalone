import { GuestRegistration as TGuestRegistration } from "../api/guestRegistration/GuestRegistration";

export const GUESTREGISTRATION_TITLE_FIELD = "name";

export const GuestRegistrationTitle = (record: TGuestRegistration): string => {
  return record.name?.toString() || String(record.id);
};
