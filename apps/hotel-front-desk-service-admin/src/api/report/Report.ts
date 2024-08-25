export type Report = {
  createdAt: Date;
  id: string;
  remainingCheckOut: number | null;
  roomStatus: string | null;
  totalCheckIn: number | null;
  totalCheckOut: number | null;
  totalIncome: number | null;
  updatedAt: Date;
  vacantRooms: number | null;
};
