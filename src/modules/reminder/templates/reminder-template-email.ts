const reminderTemplateEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reminder Notification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #0F172A;
      background-color: #CBD5E1;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #0F172A;
    }
    p {
      font-size: 16px;
      color: #666;
    }
    .footer {
      margin-top: 20px;
      font-size: 14px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Reminder Started</h1>
    <p>Hi <%= name %>,</p>
    <p>This is a reminder that your event titled "<%= title %>" has just started.</p>
    <p>Time: <%= start %></p>
    <p>We hope you have a great time!</p>
    <div class="footer">
      <p>Best regards,<br/>Condorsoft</p>
    </div>
  </div>
</body>
</html>`;

export { reminderTemplateEmail };
