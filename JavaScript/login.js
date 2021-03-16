$(document).ready(function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCC4mb7pjvelkI0JsxOSZ3WqDe1SdoEInk",
        authDomain: "skills-value-imadity-jain.firebaseapp.com",
        projectId: "skills-value-imadity-jain",
        storageBucket: "skills-value-imadity-jain.appspot.com",
        messagingSenderId: "845396689728",
        appId: "1:845396689728:web:1b0636a332d724b5e1b0a5",
        measurementId: "G-MJ22DDY4TR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    $("#loginForm_btn").click(function (e) {
        e.preventDefault();
        let user_emailVal = $("#user_email").val();
        let user_passVal = $("#user_pass").val();
        auth.signInWithEmailAndPassword(user_emailVal, user_passVal).then(() => {
            console.log("Login Successfully");
            location.href = "home.html";
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            $("#signinErrorMsg").show();
            $("#signInErrorMsg").html(errorMessage);
        });
    });
});