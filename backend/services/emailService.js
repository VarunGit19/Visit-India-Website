import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use the correct service
    auth: {
      user: 'visitindiavit@gmail.com', // Your Gmail email address
      pass: 'byth pfxr diuz xtcq', // Your Gmail password or an App Password if you have 2-step verification enabled
    },
  });

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'visitindiavit@gmail.com', // Replace with your email
    to: to,
    subject: subject,
    text: text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ' + error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};

export { sendEmail };
