import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		// _id: ObjectId
		name: String,
		email: String,
		password: String,
		gender: String,
		image: String,
		codepens: [mongoose.Types.ObjectId],
		githubUsername: String,
		signinMethod: String, // 'email-password', 'github-oauth', 'google-oauth'
		// createdAt
		// updatedAt - latest timestamp when the object was updated
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", UserSchema); // collection - users
