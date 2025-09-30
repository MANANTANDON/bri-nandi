// pages/api/send-email.js (for Pages Router)
import nodemailer from "nodemailer";
import crypto from "crypto";

// Function to generate unique customer ID
function generateCustomerId() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36
  const randomStr = crypto.randomBytes(4).toString("hex"); // Random 8 characters
  return `ASTRO-${timestamp}-${randomStr}`.toUpperCase();
}

// Format time with AM/PM
function formatTimeWithAMPM(time) {
  if (!time) return time;
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    let { name, email, phone, dob, pob, tob, service } = req.body; // Changed 'const' to 'let' for service

    // Validate required fields (including checking for an essential property on the service object)
    if (!name || !email || !phone || !dob || !pob || !tob || !service) {
      return res.status(400).json({
        success: false,
        message: "All fields are required and selected service must be valid",
      });
    }

    // Generate unique customer ID
    const customerId = generateCustomerId();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the date and time for better display
    const formattedDOB = new Date(dob).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTOB = formatTimeWithAMPM(tob);

    const mailOptions = {
      from: `"${name} via Astrology Contact Form" <${email}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New ${service} Appointment from ${name} - ID: ${customerId}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            h2 {
              color: #ef8644;
              border-bottom: 2px solid #ef8644;
              padding-bottom: 10px;
            }
            .customer-id {
              background: linear-gradient(135deg, #ef8644, #d6743a);
              color: white;
              padding: 15px;
              border-radius: 8px;
              text-align: center;
              margin: 20px 0;
              font-size: 18px;
              font-weight: bold;
              letter-spacing: 1px;
            }
            .service-box {
              background: linear-gradient(135deg, #fff, #fef5ef);
              border: 2px solid #ef8644;
              padding: 15px;
              margin: 20px 0;
              border-radius: 8px;
              text-align: center;
            }
            .service-title {
              font-size: 20px;
              font-weight: bold;
              color: #ef8644;
              margin-bottom: 8px;
            }
            .service-details {
              color: #555;
              font-size: 14px;
            }
            .service-price {
              font-size: 24px;
              font-weight: bold;
              color: #d6743a;
              margin-top: 8px;
            }
            .info-row {
              background-color: #fff;
              padding: 12px;
              margin: 8px 0;
              border-radius: 5px;
              border-left: 4px solid #ef8644;
            }
            .label {
              font-weight: bold;
              color: #555;
              display: inline-block;
              min-width: 150px;
            }
            .value {
              color: #333;
            }
            .footer {
              margin-top: 20px;
              padding-top: 15px;
              border-top: 1px solid #ddd;
              font-size: 12px;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>🌟 New Astrology Appointment Request</h2>
            
            <div class="customer-id">
              Customer ID: ${customerId}
            </div>

            <div class="service-box">
              <div class="service-title">${service}</div>
            </div>
            
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${email}</span>
            </div>
            
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${phone}</span>
            </div>
            
            <div class="info-row">
              <span class="label">Date of Birth:</span>
              <span class="value">${formattedDOB}</span>
            </div>
            
            <div class="info-row">
              <span class="label">Time of Birth:</span>
              <span class="value">${formattedTOB}</span>
            </div>
            
            <div class="info-row">
              <span class="label">Place of Birth:</span>
              <span class="value">${pob}</span>
            </div>
            
            <div class="footer">
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                }
              )}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      customerId: customerId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
