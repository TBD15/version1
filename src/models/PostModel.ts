import mongoose from "mongoose";
import { UserDocument } from "./UserModel";

export interface postInterface {
  /**
   * The post's description, specified by the cluster owner.
   */
  description?: string;
  likes: number;
  comments: string[];
  links: string[];
  timestamp: Date;
  image: string;
  /**
   * The post's owner - this should be a reference to a user document.
   */
  owner: UserDocument;
}

const postSchema = new mongoose.Schema<postInterface>({
  description: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [String],
    default: [],
  },
  links: {
    type: [String],
    default: [],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", postSchema);
