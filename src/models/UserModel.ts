import mongoose from "mongoose";
import bcrypt from "bcrypt";

//the user Mode is ued to store user information in the database

export interface User {
  email: string;
  provider: "local" | "google" | "facebook" | "instagram";
  //providerId is only required if using a non-local auth strategy
  providerId?: string;
}

export interface UserAttrs extends User {
  password?: string;
}

export interface UserModel extends mongoose.Model<UserDocument> {
  build: (atts: UserAttrs) => UserDocument;
}

export interface UserDocument extends UserAttrs, mongoose.Document {
  id: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserAttrs>(
  {
    email: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
      //enum is used to restrict the possible values of a field
      enum: ["local", "google", "facebook", "instagram"],
    },
    providerId: {
      type: String,
    },
    password: {
      type: String,
      required: function (this: UserDocument) {
        return this.provider === "local";
      },
    },
  },
  {
    toJSON: {
      //This option includes any virtual properties in the output.
      //Virtuals are additional properties that can be computed based
      //on the existing data but are not stored in the database.
      virtuals: true,
      transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function save(next) {
  if (!this.password) return next();
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err: any) {
    return next(err);
  }
});

// userSchema.virtual('password').set(function (password: string) {
//   this.password = password;
// });

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  if (this.provider !== "local") return false;
  console.log(`Comparing ${candidatePassword} to hashed ${this.password}.`);
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.statics.build = (attrs: UserAttrs): UserDocument => {
  return new UserModel(attrs);
};

const UserModel = mongoose.model<UserDocument, UserModel>("User", userSchema);

export { UserModel };
