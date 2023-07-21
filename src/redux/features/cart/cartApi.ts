/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "../../api/apiSlice";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getcart: builder.query({
      query: (email) => `/cart/${email}`,
    }),

    createCart: builder.mutation({
      query: ({ data }) => ({
        url: `/cart/create-cart`,
        method: "POST",
        body: data,
      }),
    }),

    deleteWish: builder.mutation({
      query: ({ email, cartItemId }) => ({
        url: "/cart",
        method: "DELETE",
        body: { email: email, cartItemId: cartItemId },
      }),
    }),

    updatecart: builder.mutation({
      query: ({ email, cartItemId, finishedReading }) => ({
        url: `/cart`,
        method: "PATCH",
        body: {
          email: email,
          cartItemId: cartItemId,
          finishedReading: finishedReading,
        },
      }),
    }),
  }),
});

export const {
  useCreateCartMutation,
  useDeleteWishMutation,
  useGetcartQuery,
  useUpdatecartMutation,
} = cartApi;
