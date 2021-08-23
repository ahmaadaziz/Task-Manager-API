const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  sgMail.send({
    to: email,
    from: "ahamadaziz7@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Hope to see you stay and let me know how you get along with the app`,
  });
};

const sendCancelationEmail = async (email, name) => {
  sgMail.send({
    to: email,
    from: "ahamadaziz7@gmail.com",
    subject: "Sad to see you leave",
    text: `Hey, ${name}. We wished you could have stayed longer. Please let us know, Why you are leaving? and How we can improve our app?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
