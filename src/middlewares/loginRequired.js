import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Login Required"],
    });
  }
  const [, token] = authorization.split(" "); //[text, token]
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ["Invalid User"],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ["Expired or Invalid Token"],
    });
  }
};

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoZW5yaXF1ZXByb3Nkb3NraW1pQGhvdG1haWwuY29tIiwiaWF0IjoxNjI5MTM4ODQ2LCJleHAiOjE2Mjk3NDM2NDZ9.v8MHCQScHmP8gs0oMrtl86J8tRC-O1RZ4VVISRUDyRY
