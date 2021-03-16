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

    // checking for user logged in or not
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("user sign in successfully!");
        } else {
            alert("Your login session is expired or logged out, login again to continue.");
            location.href = "Login.html";
        }
    });

    // fetching username
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('users').doc(user.uid).get().then(snapshot => {
                userName = snapshot.data().Name;
                $("#user").html(userName);
            });
        }
    });


    $(".startBtn").click(function (e) {
        e.preventDefault();
        let selOpt = $(this).attr("value");
        location.href = "app.html";
        localStorage.setItem("selected-option", selOpt);
    });
});