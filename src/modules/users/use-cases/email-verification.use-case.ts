import { Injectable } from '@nestjs/common';
import { MailService } from 'src/modules/mail/mail.service';
import { emailVerificationDTO } from '../dtos/email-verification.dto';
import { EmailValidationRepository } from '../repositories/email-validation.repository';
@Injectable()
export class EmailVerificationUseCase {
  constructor(
    private readonly mailService: MailService,
    private readonly emailValidationRepository: EmailValidationRepository,
  ) {}

  async execute(data: emailVerificationDTO): Promise<string> {
    const { email } = data;

    const randomCode = Math.random().toString(36).substring(7);

    await this.mailService.SendEmail({
      to: email,
      subject: 'GymFocus',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Code: ${randomCode}</p>`,
        `</div>`,
      ].join('\n'),
    });

    await this.emailValidationRepository.createOrUpdate(email, randomCode);

    return randomCode;
  }
}
