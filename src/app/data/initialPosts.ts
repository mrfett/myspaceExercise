import { Post } from "../post";

export const POSTS: Post[] = [
    {
        postTitle: "This is the First Post!",
        postText: "This is my first post.",
        postDate: new Date("8-23-1978"),
      },
      {
        postTitle: "This is the Second Post!",
        postText: `I travel through time.
        I can travel in all sorts of crazy ways, but I will take you back to something that happened over 10 years ago on a Tuesday morning.
        You're going to need to shut your brain off.
        Are you ready?
        Alright, go to 1996.
        I go into my first job at the Veejay Hotel in Baltimore, Maryland.`,
        postDate: new Date("8-1-80"),
      }
]