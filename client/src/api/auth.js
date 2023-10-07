import { api } from "./api"

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: `/auth/signup`,
                method: "POST",
                body
            }),

            invalidatesTags: ["auth"]
        }),

        signin: builder.mutation({
            query: (body) => ({
                url: `/auth/signin`,
                method: "POST",
                body
            }),
            
            invalidatesTags: ["auth"]
        })
    }),

    overrideExisting: false
})

export const { useSignupMutation, useSigninMutation } = authApi