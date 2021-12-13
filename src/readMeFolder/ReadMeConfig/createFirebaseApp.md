## Firebase

Before starting anything we would need to initialize your Firebase first here are the steps to create one in case you don't have one already:

  

1. Login in to Firebase Console: https://console.firebase.google.com

2. Create New Project:

3.  ![Create New Firebase Project](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/FirebaseCreateNewProject.PNG)


4. Once the Project has be created select **</>** to create a new app


5.  ![Create Firebase App](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/CreateNewApp.PNG)


6. Give your app a new Name then click on Register:


7.  ![Register App](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/RegisterApp.PNG)


8. You will notice a Firebase SDK with config script, we'll make use of this later, there's a reason the config screens are hidden as this is actually bad practise to let anyone see it in public


9.  ![FirebaseSDK Config](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/FirebaseSDKConfig.PNG)


10. As we navigate back to the console, we want to select the **Authentication Button** to create our authentication


11.  ![Authentication Button](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/AuthenticationButton.PNG)


12. As we are navigated to the Authentication we select the **Get Started Button**


13.  ![Getting Started Button](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/AuthGetStarted.PNG)


14. Within the Sign In Providers we want to select both **Email/Password & Google**


15. For **Email/Password** this allows us to create unregistered accounts within our application


16. For **Google** we will be calling the Google API login to authenticate ourselves with a real gmail account


17.  ![Sign In Providers](https://raw.githubusercontent.com/LiamCurmideGray/mobile-single-sign-on/main/firebase-pictures-tutorial/SignInProviders.PNG)


18.  **Once that is set, we're able to start coding!**

  

## Where to go next?

Kindly redirect yourself to the next ReadMe file at [firebase.md](https://github.com/LiamCurmideGray/mobile-single-sign-on/blob/main/src/readMeFolder/ReadMeConfig/firebase.md)
