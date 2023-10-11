import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export const mailOptions = {
    from: process.env.AUTH_USER,
    to: "mamadousiradioudiallo4@gmail.com",
    subject: "Inscription sur notre plateforme",
    text: "Bienvenue sur notre plateforme"
}

module.exports.send = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASSWORD
        }
    })

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err
        console.log("Email sent: info.response")
    })
}