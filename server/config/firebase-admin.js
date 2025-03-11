// Firebase Admin SDK Configuration
const admin = require("firebase-admin");
const path = require("path");
require("dotenv").config();

// Path to service account file
// const serviceAccountPath = path.resolve(
//   __dirname,
//   "./firebase-service-account.json"
// );

// Initialize Firebase Admin
const initFirebaseAdmin = () => {
  if (!admin.apps.length) {
    // For production, use env variables instead of file
    if (
      process.env.NODE_ENV === "production" &&
      process.env.FIREBASE_SERVICE_ACCOUNT
    ) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } else {
      // For development, use local file
      const serviceAccount = {
        type: "service_account",
        project_id: "riverytics",
        private_key_id: "4c797ebfac7172285a26d6c4a631da737bf59fb3",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDYjGPpFct3t7HF\nXZoFIPZ65HjfWEV5fA9IVtlYeiq847e8UEoSXlFZ1VFGOGulOO+xPWlB4pDza7F7\nmu0F75tXMClCbw6Qi5lgUIlCcZKpju8yRk4gCwE6TQSHNdI2XuUH/lGnpHR8LO/c\ndNDyngYSmvGUWUZLOFfrx3lmttegSJgTxwP6Y5+7Nw1n8f1NXUHu52DqY8cFm8JA\nUu+kZ4JndbKJ8wvR4S5kQ69kUOCDaUDya4lB8ZQ0cJuBUwNU20rTB3pjtvho7qew\ntc535IyXpTeK50yFi4Ujm4otyfgQ41BSOqlVsiOjoY8/5OFhqxKZQvjb4U1QH7Ys\nSyOXX1mhAgMBAAECggEACjkCbxqiICoyAGJiptL/X8jRCKDRqCJaVFdpQPCE0Pr3\nuFzv9OhdSHOLYoMVAy0/aitp1dGSId5XzWvVvFMrOaqiiqop0rAMaGFqQWfm0mNW\n2RWRku4CEP8EHjVFEbUEHzmlytdhel/is5Jo2h3p+nnfEATw478qrgzyJw5YT+Qs\nfoXseJ0N6cBL09nEeQy8H+kyJhcDYNqhbemzwg0EiFlP/r30SdBQ3jmTKzhDtrEN\nezODTcGh4Eg/DLrQqdhhvcmkJNMdvmIZFyzU+UkPz8subL+P6gvGgyxboAJOluRI\n9yFenoRjCrju2UfOmqULtuc2GyTna9ZWvWWagQm0owKBgQD5hO/rZM8dkawf1Pu4\nZAZTOdSRtmXo9Sr4NABUDZpCovHoi/Uo28QiExM+REG5f/9J0NHLnl9H7QbdwWy/\nkRNRVXoDC6BJTpUr7FHaW1yq52slKDfdM7nzJ+7AvOXceyhCd/xnSpgPR1XsbRjr\nNTF69o3+LR2hP8xccr50pfuE/wKBgQDeLDp8whTGcXVk2lz/i3KqTmpOuzKiSrFH\njicjeimyOqkGBPJQQmxtWKspcYcDr0uOU8IpUsox+Rkszzt5O4YIgishDrMbtMPo\n6cGfZe/JrTiT/3mN4pDUv7ybn/qNGEydZRp2u99vk/+2HOxvVJ8hAr0rlVHBDByU\nnrKoaHwBXwKBgGoCtPxJxEVH0t1jW98ngBh0BYAzAnFLWIpDbbBIZzXQjP7EF9DY\nLihb+l0GGvZ5DzmJYtkj3E9uwPAOcemh9ZckvcX1dpAutuoGaXBgSKrDz53lzHZK\nt8I7QRDaML7QBHbZC3/HDXvQTw03/NJRs0gO4J0RBfmwZV8R0SE2M/p5AoGAJXaZ\nyi3D6Q56uC3mHqU6CaO9Y1dHm3wy1pkO2nmgDFC97ajp30TEGdAo1I0zMhjeCbrv\n853lQHX7m8W6BqBV4ptogGOFKjfaDS1Vm/ZJb92Iu9QJgDZjK6zFNgzM5/vf925z\n/u+BJsRzCxdnewJu7tcSZQYByiarrxfvklxEBMsCgYBLPbwr7LTn0DOZgNq4kqDG\nq66sHbAnyxfv6Ef/HM3R93/TxPCSAwLIcKzD0oX8/9f9YUfKtEyWkIT7Vpb6gyCK\n1388+4Zt2eDumQ8yf2l2eRklO5kYgW80ytpfKmchymBq6npMlhoTHTBtbT8OyuDG\nhAnYPV3uvzLBUgTJ2Np7og==\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-fbsvc@riverytics.iam.gserviceaccount.com",
        client_id: "107803073353715094990",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40riverytics.iam.gserviceaccount.com",
        universe_domain: "googleapis.com",
      };

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }
  return admin;
};

module.exports = {
  admin: initFirebaseAdmin(),
  auth: initFirebaseAdmin().auth(),
};
