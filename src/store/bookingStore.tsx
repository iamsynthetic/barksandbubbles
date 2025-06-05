import { create } from "zustand";

interface BookingStore {
  // Back button
  resetconfirm: boolean | null;
  setResetConfirm: (resetconfirm: boolean) => void;

  // Bathing
  bathinglabel: string | null;
  bathingprice: string | null;
  bathingbody: string | null;
  setBathingSelected: (label: string, price: string, body: string) => void;

  // brushing
  brushinglabel: string | null;
  brushingprice: string | null;
  brushingbody: string | null;
  setBrushingSelected: (label: string, price: string, body: string) => void;

  // Clipping
  clippinglabel: string | null;
  clippingprice: string | null;
  clippingbody: string | null;
  setClippingSelected: (label: string, price: string, body: string) => void;

  // Nail Trimming
  nailtrimminglabel: string | null;
  nailtrimmingprice: string | null;
  nailtrimmingbody: string | null;
  setNailtrimmingSelected: (label: string, price: string, body: string) => void;

  // Ear Cleaning
  earcleaninglabel: string | null;
  earcleaningprice: string | null;
  earcleaningbody: string | null;
  setEarcleaningSelected: (label: string, price: string, body: string) => void;

  // Hotel
  hotellabel: string | null;
  hotelprice: string | null;
  hotelbody: string | null;
  setHotelSelected: (label: string, price: string, body: string) => void;

  // Training
  traininglabel: string | null;
  trainingprice: string | null;
  trainingbody: string | null;
  setTrainingSelected: (label: string, price: string, body: string) => void;

  // Health
  healthlabel: string | null;
  healthprice: string | null;
  healthbody: string | null;
  setHealthSelected: (label: string, price: string, body: string) => void;

  // dentalbrushlabel
  dentalbrushlabel: string | null;
  dentalbrushprice: string | null;
  dentalbrushbody: string | null;
  setDentalbrushSelected: (label: string, price: string, body: string) => void;

  teethcleaninglabel: string | null;
  teethcleaningprice: string | null;
  teethcleaningbody: string | null;
  setTeethcleaningSelected: (
    label: string,
    price: string,
    body: string
  ) => void;

  // stylist
  stylistlabel: string | null;
  stylistimg: string | null;
  stylistbody: string | null;
  setStylistSelected: (label: string, img: string, body: string) => void;

  // calendar
  calendarlabel: string | null;
  setCalendarSelected: (label: string) => void;

  // timeslot
  timeslotlabel: string | null;
  setTimeslotSelected: (label: string) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  // back button
  resetconfirm: null,
  setResetConfirm: (label) =>
    set({
      resetconfirm: label,
    }),

  // Bathing
  bathinglabel: null,
  bathingprice: null,
  bathingbody: null,
  setBathingSelected: (label, price, body) =>
    set({
      bathinglabel: label,
      bathingprice: price,
      bathingbody: body,
    }),

  brushinglabel: null,
  brushingprice: null,
  brushingbody: null,
  setBrushingSelected: (label, price, body) =>
    set({
      brushinglabel: label,
      brushingprice: price,
      brushingbody: body,
    }),

  // Clipping
  clippinglabel: null,
  clippingprice: null,
  clippingbody: null,
  setClippingSelected: (label, price, body) =>
    set({
      clippinglabel: label,
      clippingprice: price,
      clippingbody: body,
    }),

  // Nail Trimming
  nailtrimminglabel: null,
  nailtrimmingprice: null,
  nailtrimmingbody: null,
  setNailtrimmingSelected: (label, price, body) =>
    set({
      nailtrimminglabel: label,
      nailtrimmingprice: price,
      nailtrimmingbody: body,
    }),

  // Ear Cleaning
  earcleaninglabel: null,
  earcleaningprice: null,
  earcleaningbody: null,
  setEarcleaningSelected: (label, price, body) =>
    set({
      earcleaninglabel: label,
      earcleaningprice: price,
      earcleaningbody: body,
    }),

  // Hotel
  hotellabel: null,
  hotelprice: null,
  hotelbody: null,
  setHotelSelected: (label, price, body) =>
    set({
      hotellabel: label,
      hotelprice: price,
      hotelbody: body,
    }),

  // Training
  traininglabel: null,
  trainingprice: null,
  trainingbody: null,
  setTrainingSelected: (label, price, body) =>
    set({
      traininglabel: label,
      trainingprice: price,
      trainingbody: body,
    }),

  // Health
  healthlabel: null,
  healthprice: null,
  healthbody: null,
  setHealthSelected: (label, price, body) =>
    set({
      healthlabel: label,
      healthprice: price,
      healthbody: body,
    }),

  // Already present
  dentalbrushlabel: null,
  dentalbrushprice: null,
  dentalbrushbody: null,
  setDentalbrushSelected: (label, price, body) =>
    set({
      dentalbrushlabel: label,
      dentalbrushprice: price,
      dentalbrushbody: body,
    }),

  teethcleaninglabel: null,
  teethcleaningprice: null,
  teethcleaningbody: null,
  setTeethcleaningSelected: (label, price, body) =>
    set({
      teethcleaninglabel: label,
      teethcleaningprice: price,
      teethcleaningbody: body,
    }),

  // Stylist
  stylistlabel: null,
  stylistimg: null,
  stylistbody: null,
  setStylistSelected: (label, img, body) =>
    set({
      stylistlabel: label,
      stylistimg: img,
      stylistbody: body,
    }),

  // Calendar
  calendarlabel: null,
  setCalendarSelected: (label) =>
    set({
      calendarlabel: label,
    }),

  // timeslot
  timeslotlabel: null,
  setTimeslotSelected: (label) =>
    set({
      timeslotlabel: label,
    }),
}));
