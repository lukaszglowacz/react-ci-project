import { rest } from "msw";

const baseURL = "https://project-5-ci-db59797f355e.herokuapp.com";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "Lucka",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image: "https://res.cloudinary.com/drcahutlp/image/upload/v1/media/../default_profile_k4j7yr"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];