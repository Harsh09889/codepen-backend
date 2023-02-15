import Codepen from "../database/models/codepen.js";
import { User } from "../database/models/user.js";

export async function getAllCodepens(req, res, next) {
	try {
		const codepens = await Codepen.find({}).populate("author", "name _id");
		res.status(200).json({ success: true, data: codepens });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ failure: true, msg: "Internal Server Error" });
	}
}

export async function getCodepenByTitle(req, res, next) {
	const { title } = req.params;
	try {
		const codepen = await Codepen.findOne({
			title: decodeURIComponent(title),
		});
		res.status(200).json({ success: true, data: codepens });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ failure: true, msg: "Internal Server Error" });
	}
}

export async function updateCodepenById(req, res, next) {
	const { id } = req.params;
	try {
		await Codepen.findByIdAndUpdate(id, { ...req.body });
		const codepen = await Codepen.findById(id);
		res.status(200).json({ success: true, data: codepen });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ failure: true, msg: "Internal Server Error" });
	}
}

export async function postCodepen(req, res, next) {
	const user = req.user;
	const codepenData = req.body;
	try {
		let codepen = await Codepen.findOne({
			title: codepenData.title,
			author: user._id,
		});

		if (codepen)
			return res.status(401).json({
				failure: true,
				msg: "Codepen already exists. if you want to create a new one please change the title",
			});

		try {
			codepen = await Codepen.create({ ...codepenData });

			console.log(codepen);

			const userUpdated = await User.findByIdAndUpdate(user._id, {
				$push: { codepens: codepen._id },
			});

			res.status(200).json({ success: true, data: codepen });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ failure: true, msg: "Internal Server Error" });
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ failure: true, msg: "Internal Server Error" });
	}
}
