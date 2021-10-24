# Firesbase REST APIs Template

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Use this template to quickly start creating, and deploying REST APIs on [Google Firebase](https://firebase.google.com) & [Cloud Functions](https://firebase.google.com/products/functions).

## Getting Started

Follow the steps below to create and deploy new REST API on Firebase.

### **1** - Create New Firebase Project

Go to [Firebase Console](https://console.firebase.google.com) and create a new project, if you haven't already.

### **2**: Add ProjectID

Add your project ID to the `.firebaserc` file.

File: `.firebaserc`

```json
{
  "projects": {
    "default": "FIREBASE_PROJECT_ID"
  }
}
```

Replace `FIREBASE_PROJECT_ID` with your Firebase Project ID

### **3**: Install Dependencies

Install the required dependecies described in `api/package.json` using the commands below.

```sh
cd api/
npm install -g firebase-tools # required for Firebase CLI
firebase login # Login to Firebase CLI, required once
npm install
```

### **4**: Add Endpoints

Add your API Endpoints & Logic to `api/index.js`

```js
...
// Remove the following line if you don't want to use the API version prefix
main.use("/v1", app);  // e.g https://api.domain.com/v1/ENDPOINTS
...

// Start adding your endpoints
app.get("/YOUR_ENDPOINT_URL", (request, response) => {
  const data = {
    message: "Hello World!"
  };
  response.send(data);
});

...
```

### **5**: Deploy API Function to Firebase

To deploy your API to Firebase, run the following commands inside the `api/` directory.

```sh
npm run deploy
```

OR, use the following command from any directory within the project repo.

```sh
firebase deploy --only functions
```

## Contributing

We'd love to accept your patches and contributions to this project. There are just a few guidelines you need to follow.

### Code of Conduct

This project follows [Contributor Covenant](https://www.contributor-covenant.org/)
as it's Code of Conduct, and we expect all project participants to adhere to it.
Please read the [full guide](./CODE_OF_CONDUCT.md) so that you can understand
what actions will not be tolerated.

### Contributing Guide

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to project.

### LICENSE

This project is licensed under the [MIT License](./LICENSE), meaning that you're free to modify, distribute, and / or use it for any commercial or private project.
