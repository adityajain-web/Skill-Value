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

    let points = localStorage.getItem("points")
    let opt = localStorage.getItem("selected-option")
    $("#points").html(points);
    if (opt == "html") {
        if (points >= 38) {
            $(".fa-medal").addClass("text-warning");
        } else if (points < 38 && points >= 35) {
            $(".fa-medal").addClass("text-secondary");
        } else if (points < 35 && points >= 32) {
            $(".fa-medal").addClass("text-danger");
        } else if (points <= 31) {
            $(".fa-medal").hide();
        }
    } else if (opt == "css") {
        if (points >= 23) {
            $(".fa-medal").addClass("text-warning");
        } else if (points < 23 && points >= 20) {
            $(".fa-medal").addClass("text-secondary");
        } else if (points < 20 && points >= 17) {
            $(".fa-medal").addClass("text-danger");
        } else if (points <= 16) {
            $(".fa-medal").hide();
        }
    } else if (opt == "js") {
        if (points >= 23) {
            $(".fa-medal").addClass("text-warning");
        } else if (points < 23 && points >= 20) {
            $(".fa-medal").addClass("text-secondary");
        } else if (points < 20 && points >= 17) {
            $(".fa-medal").addClass("text-danger");
        } else if (points <= 16) {
            $(".fa-medal").hide();
        }
    }
});