export type TripOverview = {
  title: string;
  dates: string;
  tagline: string;
  days: { date: string; weekday: string }[];
  hotel: string;
  location: string;
  themes: string[];
};

export type HotelInfo = {
  name: string;
  nameEn: string;
  phone: string;
  address: string;
  checkIn: string;
  checkOut: string;
  website: string;
  mapEmbedUrl: string;
  images: { src: string; alt: string; label: string; credit?: string }[];
  executiveLounge?: {
    title: string;
    floor: string;
    hours: string;
    description: string;
    highlights: string[];
    note?: string;
    images: { src: string; alt: string; label: string }[];
  };
};

export type ScheduleItem = {
  time?: string;
  title: string;
  description?: string;
  icon?: string;
};

export type DaySchedule = {
  id: string;
  label: string;
  date: string;
  subtitle?: string;
  items?: ScheduleItem[];
  tabs?: {
    id: string;
    label: string;
    items: ScheduleItem[];
  }[];
};

export type Room = {
  id: string;
  name: string;
  type?: string;
  guests: string[];
  adults: number;
  children?: number;
  note?: string;
};

export type MapPlace = {
  id: string;
  name: string;
  description?: string;
  lat: number;
  lng: number;
  mapsUrl: string;
};

export type Contact = {
  id: string;
  label: string;
  name: string;
  phone?: string;
  note?: string;
  icon: string;
};
