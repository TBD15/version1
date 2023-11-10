import { Request, Response, NextFunction } from "express";
import { Post } from "../models/PostModel";
import { UserDocument } from "../models/UserModel";

//create post

// description?: string;
//   likes: number;
//   comments: string[];
//   links: string[];
//   timestamp: Date;
//   image: string;
//   /**
//    * The post's owner - this should be a reference to a user document.
//    */
//   owner: UserDocument;

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { description, links, image } = req.body;
    //post must have description
    if (!description || !image)
      throw new Error("Must provide description and image");

    //get user id
    const user = req.user as UserDocument;
    const newPost = await Post.create({
      description,
      //likes
      //comments
      links: links,
      //timestamp
      image: image,
      owner: user._id,
    });
    await newPost.save();
    res.locals.newPost = newPost;
  } catch (error) {
    return next(error);
  }
};

//get all posts

//get post by id

//update post by id

//delete post by id

//like post

//comment on post

//get all comments on post
