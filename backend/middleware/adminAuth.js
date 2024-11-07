import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers['token'];
        if (!token) return res.json({ success: false, message: "Not Authorized, Login Again" });

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (decodedToken.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }
        next();
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Token verification failed" });
    }
};

export default adminAuth;
