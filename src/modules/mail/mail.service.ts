import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

export interface SendmailData {
  subject: string;
  body: string;
  to: string;
}

@Injectable()
export class MailService {
  private readonly transport;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }
  async SendEmail({ subject, body, to }: SendmailData) {
    await this.transport.sendMail({
      to,
      from: `GymFocus <${process.env.MAIL_FROM}>`,
      subject,
      html: body,
    });
  }
}
