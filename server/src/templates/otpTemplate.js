const otpTemplate = (name, otp) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body>
    <div
      class="container w-[100vw] h-[100vh] flex justify-center items-center"
      style="
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div
        class="body w-1/3 h-[90%] flex flex-col justify-center items-center shadow-lg rounded-lg"
        style="
          width: 45%;
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
        "
      >
        <div
          class="head h-20 w-full flex flex-col justify-center items-center bg-teal-300"
          style="
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgb(94, 234, 212);
          "
        >
          <img
            src="https://res.cloudinary.com/emadul-hoque-emon/image/upload/v1701282778/logo.png"
            class="image w-10 h-10"
            style="width: 40px; height: 40px"
          />
          <h4>Let's Talk</h4>
        </div>
        <div
          class="main w-full h-[300px] flex flex-col justify-center"
          style="
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          "
        >
          <div
            class="otp w-full h-[200px] flex justify-center items-center"
            style="
              width: 100%;
              height: 150px;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <img
              src="https://res.cloudinary.com/emadul-hoque-emon/image/upload/v1701283336/otp.jpg"
              alt=""
              style="height: 100%"
            />
          </div>
          <h1
            class="h1 font-bold text-xl text-center"
            style="font-size: 1.25rem; line-height: 1.75rem; text-align: center"
          >
            Welcome back
            <span
              class="span text-2xl"
              style="font-size: 1.5rem; line-height: 2rem"
              >${name}</span
            >
          </h1>
          <p
            class="p mt-5 text-sm text-center"
            style="
              font-size: 0.875rem;
              line-height: 1.25rem;
              text-align: center;
              margin-top: 20px;
            "
          >
            Use the verification code below to reset your password.code will
            expire in 10 minutes.
          </p>
        </div>
        <div
          class="code w-2/4 h-[50px] flex justify-center items-center bg-white border-2 border-gray-400 rounded-lg"
          style="
            width: 50%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid rgb(156, 163, 175);
          "
        >
          <h1
            class="tracking-[5px] text-3xl font-bold"
            style="font-size: 1.5rem; line-height: 2rem;"
          >
            ${otp}
          </h1>
        </div>
        <p
          class="text-[12px] mt-5 mb-2 text-slate-500 text-center"
          style="
            font-size: 12px;
            margin-top: 20px;
            margin-bottom: 8px;
            color: rgb(100, 116, 139);
            text-align: center;
          "
        >
          You received this email because you requested to change your password.
          If you didn't request to change password, you can safely ignore this
          email.
        </p>
      </div>
    </div>
  </body>
</html>

`;
};

module.exports = otpTemplate;
