import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api", // Ensure this matches your backend URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (facility) => ({
        url: "facility",
        method: "POST",
        body: facility,
      }),
    }),
    updateFacility: builder.mutation({
      query: ({ id, facility }) => ({
        url: `facility/${id}`,
        method: "PUT",
        body: facility,
      }),
    }),
    getFacilities: builder.query({
      query: () => "facility",
    }),
    getProfile: builder.query({
      query: () => "user/profile",
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `facility/${id}`,
        method: "DELETE",
      }),
    }),
    getAllBookings: builder.query({
      query: () => "bookings",
    }),
    createAdmin: builder.mutation({
      query: (adminData) => ({
        url: "auth/add-admin",
        method: "POST",
        body: adminData,
      }),
    }),
    signUp: builder.mutation({
      query: (newUserData) => ({
        url: "auth/signup",
        method: "POST",
        body: newUserData,
      }),
    }),
    checkAvailability: builder.query({
      query: ({ date, facility }) => ({
        url: `check-availability?date=${date}&facility=${facility}`,
        method: "GET",
      }),
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: 'bookings',
        method: 'POST',
        body: bookingData,
      }),
    }),
    getUserBookings: builder.query({
      query: () => '/bookings/user', 
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `bookings/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
  useGetFacilitiesQuery,
  useGetProfileQuery,
  useDeleteFacilityMutation,
  useGetAllBookingsQuery,
  useCreateAdminMutation,
  useSignUpMutation,
  useCheckAvailabilityQuery,
  useLazyCheckAvailabilityQuery,
  useCreateBookingMutation,
  useGetUserBookingsQuery ,
  useDeleteBookingMutation,
} = baseApi;
