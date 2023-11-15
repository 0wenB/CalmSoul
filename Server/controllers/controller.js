const { Video, User } = require("../models/index");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken, decode } = require("../helpers/jwt.js");
const { Op } = require("sequelize");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async addVideo(req, res, next) {
    try {
      const { videoName, videoLink, videoCategory } = req.body;
      const video = await Video.create({
        videoName,
        videoLink,
        videoCategory,
      });
      res.status(201).json({
        message: "Successfully added new video",
        video,
      });
    } catch (error) {
      next(error);
    }
  }

  static async showVideos(req, res, next) {
    try {
      const videos = await Video.findAll();
      res.status(200).json({
        message: "Successfully find videos",
        videos,
      });
    } catch (error) {
      next(error);
    }
  }

  static async editVideo(req, res, next) {
    try {
      const { videoName, videoLink, videoCategory } = req.body;
      const { videoId } = req.params;

      const video = await Video.findOne({ where: { id: videoId } });

      if (!video) {
        throw { message: "Not Found" };
      }
      await video.update(
        { videoName, videoLink, videoCategory },
        { where: { id: videoId } }
      );

      const updated = await Video.findByPk(videoId);
      res.status(200).json({
        message: "Successfully edit video by videoId",
        updated,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteVideo(req, res, next) {
    try {
      const { videoId } = req.params;
      const video = await Video.findByPk(videoId);
      if (!video) {
        throw { message: "Not Found" };
      }
      await Video.destroy({ where: { id: videoId } });
      res
        .status(200)
        .json({ message: `${video.videoName} successfully deleted` });
    } catch (error) {
      next(error);
    }
  }

  static async addUser(req, res, next) {
    try {
      const { username, email, password } = req.body;
      // console.log("masuk");
      const makeUser = await User.create({
        username,
        email,
        password,
        role: "User",
      });
      const foundUser = await User.findOne({
        where: { email },
        attributes: { exclude: ["password"] },
      });
      res.status(201).json({ foundUser });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { message: "Email or password is required" };
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { message: "Email/password invalid" };
      }

      if (!comparePassword(password, user.password)) {
        throw { message: "Email/password invalid" };
      }
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
        email: user.email,
      };
      let access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  // static async updateImage(req, res, next) {
  //   try {
  //     // console.log("masuk");
  //     // console.log(req.file, "REQ FILE");
  //     // console.log(req.body, "REQ BODY");
  //     const { productId } = req.params;
  //     let product = await Product.findOne({ where: { id: productId } });
  //     if (!product) {
  //       throw { message: "Not Found" };
  //     }
  //     if (!req.file) {
  //       throw { message: "File Required" };
  //     }
  //     const base64File = req.file.buffer.toString("base64");
  //     const response = await imagekit.upload({
  //       file: base64File,
  //       fileName: req.file.originalname || product.name,
  //     });

  //     await Product.update(
  //       { imgUrl: response.url },
  //       { where: { id: productId } }
  //     );
  //     // console.log(response);
  //     res
  //       .status(200)
  //       .json({ message: `Image ${response.name} success to update` });
  //   } catch (error) {
  //     // console.log(error);
  //     next(error);
  //   }
  // }
  static async Google(req, res, next) {
    try {
      // console.log("google auth");
      const { token } = req.headers;
      const client = new OAuth2Client();
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.VITE_GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      // console.log(payload);
      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          username: payload.name,
          email: payload.email,
          password: "password_google",
          role: "User",
        },
        hooks: false,
      });
      // console.log(user);
      const access_token = signToken({ id: user.id, email: user.email });
      res.status(200).json(access_token);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
