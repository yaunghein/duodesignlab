import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: { user: process.env.MAIL_USERNAME, pass: process.env.MAIL_PASSWORD },
    })
    try {
      await transporter.sendMail({
        from: '"Duo Design Lab Website" <yaunghein@zohomail.com>',
        to: 'duodesignlab.mm@gmail.com',
        subject: `Brief submission from ${req.body.name}`,
        html: `
          <p>Name: ${req.body.name}</p>
          <p>Email: ${req.body.email}</p>
          <p>Company: ${req.body.company}</p>
          <p>Brief: ${req.body.brief}</p>
          <p>Budget: ${req.body.budget}</p>
        `,
      })
      res.status(200).json({ success: true, name: req.body.name })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Only POST method allowed.' })
  }
}

export default handler
