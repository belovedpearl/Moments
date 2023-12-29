import { rest } from "msw";

const baseURL = "https://mydrfapi-4796c8968109.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "Johnstown",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image: "https://res.cloudinary.com/dgqyac6ko/image/upload/v1/media/images/Screenshot_2023-06-16_124508_gbejhr"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];