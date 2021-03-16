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



    Questions = [

        html = [
            {
                "id": 1,
                "que": "What does HTML stand for?",
                "ans": "Hypertext Markup Language",
                "opt": [
                    "Hypertext Markup Language",
                    "Hyperlinks and Text Markup Language",
                    "Home Tool Markup Language"
                ],
                "category": "html"
            },
            {
                "id": 2,
                "que": "Who is making the Web standards?",
                "ans": "World Wide Web Consortium",
                "opt": [
                    "World Wide Web Consortium",
                    "Google",
                    "Mozilla",
                    "Microsoft"
                ],
                "category": "html"
            },
            {
                "id": 3,
                "que": "Choose the correct HTML element for the largest heading:",
                "ans": "&lt;h1&gt;",
                "opt": [
                    "&lt;heading&gt;",
                    "&lt;head&gt;",
                    "&lt;h1&gt;",
                    "&lt;h6&gt;"
                ],
                "category": "html"
            },
            {
                "id": 4,
                "que": "What is the correct HTML element for inserting a line break?",
                "ans": "&lt;br&gt;",
                "opt": [
                    "&lt;br&gt;",
                    "&lt;break&gt;",
                    "&lt;lb&gt;"
                ],
                "category": "html"
            },
            {
                "id": 5,
                "que": "What is the correct HTML for adding a background color?",
                "ans": "&lt;body style='background-color: yellow;'&gt;",
                "opt": [
                    "&lt;body bg='yellow'&gt;",
                    "&lt;body style='background-color: yellow;'&gt;",
                    "&lt;background&gt;yellow&lt;/background&gt;"
                ],
                "category": "html"
            },
            {
                "id": 6,
                "que": "Choose the correct HTML element to define important text",
                "ans": "&lt;strong&gt;",
                "opt": [
                    "&lt;important&gt;",
                    "&lt;strong&gt;",
                    "&lt;b&gt;",
                    "&lt;i&gt;"
                ],
                "category": "html"
            },
            {
                "id": 7,
                "que": "Choose the correct HTML element to define emphasized text",
                "ans": "&lt;em&gt;",
                "opt": [
                    "&lt;i&gt;",
                    "&lt;italic&gt;",
                    "&lt;em&gt;"
                ],
                "category": "html"
            },
            {
                "id": 8,
                "que": "What is the correct HTML for creating a hyperlink?",
                "ans": "&lt;a href='https://www.google.com'&gt;Google&lt;/a&gt;",
                "opt": [
                    "&lt;a href='https://www.google.com'&gt;Google&lt;/a&gt;",
                    "&lt;a name='https://www.google.com'&gt;Google&lt;/a&gt;",
                    "&lt;a url='https://www.google.com'&gt;Google&lt;/a&gt;",
                    "&lt;a&gt;https://www.google.com&lt;/a&gt;"
                ],
                "category": "html"
            },
            {
                "id": 9,
                "que": "Which character is used to indicate an end tag?",
                "ans": "/",
                "opt": [
                    "/",
                    "*",
                    "^",
                    "&lt;"
                ],
                "category": "html"
            },
            {
                "id": 10,
                "que": "How can you open a link in a new tab/browser window?",
                "ans": "&lt;a href='url' target='_blank'&gt;",
                "opt": [
                    "&lt;a href='url' new&gt;",
                    "&lt;a href='url' target='new'&gt;",
                    "&lt;a href='url' target='_blank'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 11,
                "que": "Which of these elements are all &lt;table&gt; elements?",
                "ans": "&lt;table&gt; &lt;tr&gt; &lt;td&gt;",
                "opt": [
                    "&lt;table&gt; &lt;tr&gt; &lt;tt&gt;",
                    "&lt;table&gt; &lt;head&gt; &lt;tfoot&gt;",
                    "&lt;table&gt; &lt;body&gt; &lt;tr&gt;",
                    "&lt;table&gt; &lt;tr&gt; &lt;td&gt;"
                ],
                "category": "html"
            },
            {
                "id": 12,
                "que": "Inline elements are normally displayed without starting a new line.",
                "ans": "True",
                "opt": [
                    "True",
                    "False"
                ],
                "category": "html"
            },
            {
                "id": 13,
                "que": "How can you make a numbered list?",
                "ans": "&lt;ol&gt;",
                "opt": [
                    "&lt;dl&gt;",
                    "&lt;ul&gt;",
                    "&lt;ol&gt;",
                    "&lt;list&gt;"
                ],
                "category": "html"
            },
            {
                "id": 14,
                "que": "How can you make a bullet list?",
                "ans": "&lt;ul&gt;",
                "opt": [
                    "&lt;list&gt;",
                    "&lt;ol&gt;",
                    "&lt;ul&gt;",
                    "&lt;dl&gt;"
                ],
                "category": "html"
            },
            {
                "id": 15,
                "que": "What is the correct HTML for making a checkbox?",
                "ans": "&lt;input type='checkbox'&gt;",
                "opt": [
                    "&lt;input type='checkbox'&gt;",
                    "&lt;checkbox&gt;",
                    "&lt;check&gt;",
                    "&lt;input type='check'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 16,
                "que": "What is the correct HTML for making a text input field?",
                "ans": "&lt;input type='text'&gt;",
                "opt": [
                    "&lt;input type='checkbox'&gt;",
                    "&lt;input type='text'&gt;",
                    "&lt;textfield&gt;",
                    "&lt;input type='textfield'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 17,
                "que": "What is the correct HTML for making a drop-down list?",
                "ans": "&lt;select&gt;",
                "opt": [
                    "&lt;input type='dropdown'&gt;",
                    "&lt;select&gt;",
                    "&lt;list&gt;",
                    "&lt;input type='list'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 18,
                "que": "What is the correct HTML for making a text area?",
                "ans": "&lt;textarea&gt;",
                "opt": [
                    "&lt;textarea&gt;",
                    "&lt;input type='textbox'&gt;",
                    "&lt;input type='textarea'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 19,
                "que": "What is the correct HTML for inserting an image?",
                "ans": "&lt;img src='image.gif' alt='MyImage'&gt;",
                "opt": [
                    "&lt;img href='image.gif' alt='MyImage'&gt;",
                    "&lt;img src='image.gif' alt='MyImage'&gt;",
                    "&lt;image src='image.gif' alt='MyImage'&gt;",
                    "&lt;img alt='MyImage'&gt;image.gif&lt;/img&gt;"
                ],
                "category": "html"
            },
            {
                "id": 20,
                "que": "What is the correct HTML for inserting a background image?",
                "ans": "&lt;body style='background-image:url(background.gif)'&gt;",
                "opt": [
                    "&lt;body bg='background.gif'&gt;",
                    "&lt;body style='background-image:url(background.gif)'&gt;",
                    "&lt;background img='background.gif'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 21,
                "que": "An &lt;iframe&gt; is used to display a web page within a web page.",
                "ans": "False",
                "opt": [
                    "There is no such thing as an &lt;iframe&gt;",
                    "True",
                    "False"
                ],
                "category": "html"
            },
            {
                "id": 22,
                "que": "HTML comments start with &lt;!-- and end with --&gt;",
                "ans": "True",
                "opt": [
                    "True",
                    "False"
                ],
                "category": "html"
            },
            {
                "id": 23,
                "que": "Block elements are normally displayed without starting a new line.",
                "ans": "False",
                "opt": [
                    "True",
                    "False"
                ],
                "category": "html"
            },
            {
                "id": 24,
                "que": "Which HTML element defines the title of a document?",
                "ans": "&lt;title&gt;",
                "opt": [
                    "&lt;title&gt;",
                    "&lt;meta&gt;",
                    "&lt;head&gt;"
                ],
                "category": "html"
            },
            {
                "id": 25,
                "que": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
                "ans": "alt",
                "opt": [
                    "alt",
                    "src",
                    "title",
                    "longdesc"
                ],
                "category": "html"
            },
            {
                "id": 26,
                "que": "Which doctype is correct for HTML5?",
                "ans": "&lt;!DOCTYPE html&gt;",
                "opt": [
                    "&lt;!DOCTYPE HTML5&gt;",
                    "&lt;!DOCTYPE html&gt;",
                    "&lt;!DOCTYPE HTML PUBLIC '- //W3C//DTD HTML 5.0//EN' 'http://www.w3.org/TR/html5/strict.dtd'&gt;"
                ],
                "category": "html"
            },
            {
                "id": 27,
                "que": "Which HTML element is used to specify a footer for a document or section?",
                "ans": "&lt;footer&gt;",
                "opt": [
                    "&lt;section&gt;",
                    "&lt;footer&gt;",
                    "&lt;bottom&gt;"
                ],
                "category": "html"
            },
            {
                "id": 28,
                "que": "In HTML, you can embed SVG elements directly into an HTML page.",
                "ans": "True",
                "opt": [
                    "True",
                    "False"
                ],
                "category": "html"
            },
            {
                "id": 29,
                "que": "What is the correct HTML element for playing video files?",
                "ans": "&lt;video&gt;",
                "opt": [
                    "&lt;movie&gt;",
                    "&lt;video&gt;",
                    "&lt;media&gt;"
                ],
                "category": "html"
            },
            {
                "id": 30,
                "que": "What is the correct HTML element for playing audio files?",
                "ans": "&lt;audio&gt;",
                "opt": [
                    "&lt;audio&gt;",
                    "&lt;sound&gt;",
                    "&lt;mp3&gt;"
                ],
                "category": "html"
            },
            {
                "id": 31,
                "que": "In HTML, onblur and onfocus are:",
                "ans": "Event Attribute",
                "opt": [
                    "Style Attribute",
                    "HTML Attribute",
                    "Event Attribute"
                ],
                "category": "html"
            },
            {
                "id": 32,
                "que": "Graphics defined by SVG is in which format?",
                "ans": "HTML",
                "opt": [
                    "CSS",
                    "HTML",
                    "XML"
                ],
                "category": "html"
            },
            {
                "id": 33,
                "que": "The HTML &lt;canvas&gt; element is used to:",
                "ans": "Draw graphics",
                "opt": [
                    "Create draggable element",
                    "Display database records",
                    "Manipulate data in database",
                    "Draw graphics"
                ],
                "category": "html"
            },
            {
                "id": 34,
                "que": "In HTML, which attribute is used to specify that an input field must be filled out?",
                "ans": "required",
                "opt": [
                    "validate",
                    "required",
                    "placeholder",
                    "important"
                ],
                "category": "html"
            },
            {
                "id": 35,
                "que": "Which input type defines a slider control?",
                "ans": "Range",
                "opt": [
                    "Slide",
                    "Range",
                    "Controls",
                    "Search"
                ],
                "category": "html"
            },
            {
                "id": 36,
                "que": "Which HTML element is used to display a scalar measurement within a range?",
                "ans": "&lt;meter&gt;",
                "opt": [
                    "&lt;meter&gt;",
                    "&lt;range&gt;",
                    "Controls",
                    "Search"
                ],
                "category": "html"
            },
            {
                "id": 37,
                "que": "Which HTML element is used to display a scalar measurement within a range?",
                "ans": "&lt;meter&gt;",
                "opt": [
                    "&lt;meter&gt;",
                    "&lt;range&gt;",
                    "&lt;measure&gt;",
                    "&lt;gauge&gt;"
                ],
                "category": "html"
            },
            {
                "id": 38,
                "que": "Which HTML element defines navigation links?",
                "ans": "&lt;nav&gt;",
                "opt": [
                    "&lt;navigation&gt;",
                    "&lt;navigate&gt;",
                    "&lt;nav&gt;"
                ],
                "category": "html"
            },
            {
                "id": 39,
                "que": "In HTML, what does the &lt;aside&gt; element define?",
                "ans": "Content aside from the page content",
                "opt": [
                    "A navigation list to be shown at the left side of the page",
                    "The ASCII character-set; to send information between computers on the Internet",
                    "Content aside from the page content"
                ],
                "category": "html"
            },
            {
                "id": 40,
                "que": "Which HTML element is used to specify a header for a document or section?",
                "ans": "&lt;header&gt;",
                "opt": [
                    "&lt;section&gt;",
                    "&lt;header&gt;",
                    "&lt;top&gt;",
                    "&lt;head&gt;"
                ],
                "category": "html"
            }
        ],

        css = [{
            "id": 41,
            "que": "What does CSS stand for?",
            "ans": "Cascading Style Sheets",
            "opt": ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            "category": "css"
        }, {
            "id": 42,
            "que": "What is the correct HTML for referring to an external style sheet?",
            "ans": "&lt;link rel='stylesheet' type='text/css' href='myStyle.css'&gt;",
            "opt": ["&lt;stylesheet&gt;&lt;/stylesheet&gt;", "&lt;link rel='stylesheet' type='text/css' href='myStyle.css'&gt;", "&lt;style src='myStyle.css'&gt;"],
            "category": "css"
        }, {
            "id": 43,
            "que": "Where in an HTML document is the correct place to refer to an external style sheet?",
            "ans": "In the &lt;head&gt; section",
            "opt": ["In the &lt;body&gt; section", "In the &lt;head&gt; section", "At the end of the document"],
            "category": "css"
        }, {
            "id": 44,
            "que": "Which HTML tag is used to define an internal style sheet?",
            "ans": "&lt;style&gt;",
            "opt": ["&lt;style&gt;", "&lt;script&gt;", "&lt;css&gt;"],
            "category": "css"
        }, {
            "id": 45,
            "que": "Which HTML attribute is used to define inline styles?",
            "ans": "style",
            "opt": ["font", "style", "styles", "class"],
            "category": "css"
        }, {
            "id": 46,
            "que": "Which is the correct CSS syntax?",
            "ans": "body {color: black;}",
            "opt": ["{body:color=black;}", "body:color=black;", "{body;color:black;}", "body {color: black;}"],
            "category": "css"
        }, {
            "id": 47,
            "que": "How do you insert a comment in a CSS file?",
            "ans": "/* this is a comment */",
            "opt": ["/* this is a comment */", "// this is a comment", "' this is a comment", "// this is a comment //"],
            "category": "css"
        }, {
            "id": 48,
            "que": "Which property is used to change the background color?",
            "ans": "background-color",
            "opt": ["bgcolor", "color", "background-color"],
            "category": "css"
        }, {
            "id": 49,
            "que": "How do you add a background color for all &lt;h1&gt; elements?",
            "ans": "h1 {background-color:#FFFFFF;}",
            "opt": ["h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1 {background-color:#FFFFFF;}"],
            "category": "css"
        }, {
            "id": 50,
            "que": "Which CSS property is used to change the text color of an element?",
            "ans": "color",
            "opt": ["fgcolor", "text-color", "color"],
            "category": "css"
        }, {
            "id": 51,
            "que": "Which CSS property controls the text size?",
            "ans": "font-size",
            "opt": ["text-style", "font-size", "font-style", "text-size"],
            "category": "css"
        }, {
            "id": 52,
            "que": "What is the correct CSS syntax for making all the &lt;p&gt; elements bold?",
            "ans": "p {font-weight:bold;}",
            "opt": ["&lt;p style='font-size: bold;' &gt;", "p {text-size:bold;}", "&lt;p style='text-size: bold;' &gt;", "p {font-weight:bold;}"],
            "category": "css"
        }, {
            "id": 53,
            "que": "How do you display hyperlinks without an underline?",
            "ans": "a {text-decoration:none;}",
            "opt": ["a {underline:none;}", "a {decoration:no-underline;}", "a {text-decoration:none;}", "a {text-decoration:no-underline;}"],
            "category": "css"
        }, {
            "id": 54,
            "que": "How do you make each word in a text start with a capital letter?",
            "ans": "text-transform:capitalize",
            "opt": ["transform:capitalize", "You can't do that with CSS", "text-style:capitalize", "text-transform:capitalize"],
            "category": "css"
        }, {
            "id": 55,
            "que": "Which property is used to change the font of an element?",
            "ans": "font-family",
            "opt": ["font-weight", "font-family", "font-style"],
            "category": "css"
        }, {
            "id": 56,
            "que": "How do you make the text bold?",
            "ans": "font-weight:bold;",
            "opt": ["style:bold", "font:bold;", "font-weight:bold;"],
            "category": "css"
        }, {
            "id": 57,
            "que": "How do you display a border like this:\n\nThe top border = 10 pixels\nThe bottom border = 5 pixels&lt\nThe left border = 20 pixels\nThe right border = 1pixel?",
            "ans": "border-width:10px 1px 5px 20px;",
            "opt": ["border-width:10px 1px 5px 20px;", "border-width:5px 20px 10px 1px;", "border-width:10px 20px 5px 1px;", "border-width:10px 5px 20px 1px;"],
            "category": "css"
        }, {
            "id": 58,
            "que": "Which property is used to change the left margin of an element?",
            "ans": "margin-left",
            "opt": ["margin-left", "indent", "padding-left"],
            "category": "css"
        }, {
            "id": 59,
            "que": "When using the padding property; are you allowed to use negative values?",
            "ans": "No",
            "opt": ["Yes", "No"],
            "category": "css"
        }, {
            "id": 60,
            "que": "How do you make a list that lists its items with squares?",
            "ans": "list-style-type: square;",
            "opt": ["list-type: square;", "list-style-type: square;", "list: square;"],
            "category": "css"
        }, {
            "id": 61,
            "que": "How do you select an element with id 'demo'?",
            "ans": "#demo",
            "opt": [".demo", "demo", "*demo", "#demo"],
            "category": "css"
        }, {
            "id": 62,
            "que": "How do you select an element with class name 'test'?",
            "ans": ".test",
            "opt": [".test", "test", "*test", "#test"],
            "category": "css"
        }, {
            "id": 63,
            "que": "How do you select all p elements inside a div element?",
            "ans": "div p",
            "opt": ["div p", "div.p", "div + p"],
            "category": "css"
        }, {
            "id": 64,
            "que": "How do you group selectors?",
            "ans": "Separate each selector with a comma",
            "opt": ["Separate each selector with a space", "Separate each selector with a comma", "Separate each selector with a plus sign"],
            "category": "css"
        }, {
            "id": 65,
            "que": "What is the default value of the position property?",
            "ans": "static",
            "opt": ["absolute", "relative", "fixed", "static"],
            "category": "css"
        },]
        ,

        js = [{
            "id": 66,
            "que": "Inside which HTML element do we put the JavaScript?",
            "ans": "&lt;script&gt;",
            "opt": ["&lt;script&gt;", "&lt;javascript&gt;", "&lt;js&gt;", "&lt;scripting&gt;"],
            "category": "js"
        }, {
            "id": 67,
            "que": "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n&lt;p id='demo'>This is a demonstration.&lt;/p&gt;",
            "ans": "document.getElementById('demo').innerHTML = 'Hello World!';",
            "opt": ["document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!'", "document.getElementByName('p').innerHTML = 'Hello World!';"],
            "category": "js"
        }, {
            "id": 68,
            "que": "Where is the correct place to insert a JavaScript?",
            "ans": "Both the <head> section and the <body> section are correct",
            "opt": ["The &lt;head&gt; section", "The &lt;body&gt; section", "Both the <head> section and the <body> section are correct"],
            "category": "js"
        }, {
            "id": 69,
            "que": "What is the correct syntax for referring to an external script called 'xxx.js'?",
            "ans": "&lt;script src='xxx.js' &gt;",
            "opt": ["&lt;script href='xxx.js' &gt;", "&lt;script src='xxx.js' &gt;", "&lt;script name='xxx.js' &gt;"],
            "category": "js"
        }, {
            "id": 70,
            "que": "The external JavaScript file must contain the &lt;script&gt; tag.",
            "ans": "False",
            "opt": ["True", "False"],
            "category": "js"
        }, {
            "id": 71,
            "que": "How do you write 'Hello World' in an alert box?",
            "ans": "alert('Hello World');",
            "opt": ["alertBox('Hello World');", "msg('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
            "category": "js"
        }, {
            "id": 72,
            "que": "How do you create a function in JavaScript?",
            "ans": "function myFunction()",
            "opt": ["function myFunction()", "function = myFunction()", "function: myFunction()"],
            "category": "js"
        }, {
            "id": 73,
            "que": "How do you call a function named 'myFunction'?",
            "ans": "myFunction()",
            "opt": ["call function myFunction()", "myFunction()", "call myFunction()"],
            "category": "js"
        }, {
            "id": 74,
            "que": "How to write an IF statement in JavaScript?",
            "ans": "if(i == 5)",
            "opt": ["if i = 5", "if i == 5 then", "if i = 5 then", "if(i == 5)"],
            "category": "js"
        }, {
            "id": 75,
            "que": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
            "ans": "if (i != 5)",
            "opt": ["if (i <> 5)", "if i != 5 then", "if (i != 5)", "if i <> 5"],
            "category": "js"
        }, {
            "id": 76,
            "que": "How does a WHILE loop start?",
            "ans": "while (i <= 10)",
            "opt": ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)"],
            "category": "js"
        }, {
            "id": 77,
            "que": "How does a FOR loop start?",
            "ans": "for (i = 0; i <= 5; i++)",
            "opt": ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 0 to 5"],
            "category": "js"
        }, {
            "id": 78,
            "que": "How can you add a comment in a JavaScript?",
            "ans": "//This is a comment",
            "opt": ["'This is a comment", "//This is a comment"],
            "category": "js"
        }, {
            "id": 79,
            "que": "How to insert a comment that has more than one line?",
            "ans": "/*This comment has\nmore than one line*/",
            "opt": ["//This is a comment\nmore than one line//", "/*This comment has\nmore than one line*/"],
            "category": "js"
        }, {
            "id": 80,
            "que": "What is the correct way to write a JavaScript array?",
            "ans": "var colors = ['red', 'green', 'blue']",
            "opt": ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'"],
            "category": "js"
        }, {
            "id": 81,
            "que": "How do you round the number 7.25, to the nearest integer?",
            "ans": "Math.round(7.25)",
            "opt": ["rnd(7.25)", "Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)"],
            "category": "js"
        }, {
            "id": 82,
            "que": "How do you find the number with the highest value of x and y?",
            "ans": "Math.max(x, y)",
            "opt": ["Math.max(x, y)", "ceil(x, y)", "Math.ceil(x, y)", "top(x, y)"],
            "category": "js"
        }, {
            "id": 83,
            "que": "How do you find the number with the highest value of x and y?",
            "ans": "Math.max(x, y)",
            "opt": ["Math.max(x, y)", "ceil(x, y)", "Math.ceil(x, y)", "top(x, y)"],
            "category": "js"
        }, {
            "id": 84,
            "que": "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
            "ans": "w2 = window.open('http://www.w3schools.com');",
            "opt": ["w2 = window.new('http://www.w3schools.com');", "w2 = window.open('http://www.w3schools.com');"],
            "category": "js"
        }, {
            "id": 85,
            "que": "JavaScript is the same as Java.?",
            "ans": "False",
            "opt": ["False", "True"],
            "category": "js"
        }, {
            "id": 86,
            "que": "How can you detect the client's browser name?",
            "ans": "navigator.appName",
            "opt": ["client.navName", "browser.name", "navigator.appName"],
            "category": "js"
        }, {
            "id": 87,
            "que": "Which event occurs when the user clicks on an HTML element?",
            "ans": "onclick",
            "opt": ["onclick", "onmouseover", "onmouseclick", "onchange"],
            "category": "js"
        }, {
            "id": 88,
            "que": "How do you declare a JavaScript variable?",
            "ans": "var carName;",
            "opt": ["v carName", "var carName", "variable carName"],
            "category": "js"
        }, {
            "id": 89,
            "que": "Which operator is used to assign a value to a variable?",
            "ans": "=",
            "opt": ["x", "*", "=", "-"],
            "category": "js"
        }, {
            "id": 90,
            "que": "What will the following code return: Boolean(10 > 9)",
            "ans": "True",
            "opt": ["True", "False", "NaN"],
            "category": "js"
        }, {
            "id": 91,
            "que": "Is JavaScript case-sensitive?",
            "ans": "Yes",
            "opt": ["No", "Yes"],
            "category": "js"
        },]

    ]



    let questionCount = 0, points = 0;
    window.onload = function () {
        setInterval(() => {
            $.fn.startTimer();
        }, 10);
        $.fn.showQuestion(questionCount);
    }

    let selOpt = localStorage.getItem('selected-option');

    let minute = 00;
    let seconds = 00;
    let millisecond = 00;
    $("#min").html(minute);
    $("#sec").html(seconds);

    $.fn.startTimer = () => {
        millisecond++;
        if (millisecond > 99) {
            millisecond = 00;
            seconds++;
            $("#sec").html(seconds);
        }

        if (seconds > 59) {
            seconds = 00;
            minute++;
            $("#min").html(minute);
            if (selOpt == "html") {
                if (minute == 20) {
                    location.href = "result.html";
                }
            } else if (selOpt == "css") {
                if (minute == 15) {
                    location.href = "result.html";
                }
            } else if (selOpt == "js") {
                if (minute == 15) {
                    location.href = "result.html";
                }
            }
        }

    }



    $.fn.toggleActive = () => {
        let mcq = $("li.option");
        for (let i = 0; i < mcq.length; i++) {
            $(mcq[i]).click(function (e) {
                e.preventDefault();
                for (let j = 0; j < mcq.length; j++) {
                    $(mcq[j]).removeClass("active");
                }
                $(mcq[i]).addClass("active");
            });
        }
    }

    $("#nxt").click(function (e) {
        e.preventDefault();
        let userAns = $("li.option.active").html();
        if (selOpt == "html") {
            if (userAns == Questions[0][questionCount].ans) {
                points++;
                localStorage.setItem("points", points);
            }
            if (questionCount == Questions[0].length - 2) {
                $("#nxt").hide();
                $("#showResult").show();
            }
        } else if (selOpt == "css") {
            if (userAns == Questions[1][questionCount].ans) {
                points++;
                localStorage.setItem("points", points);
            }
            if (questionCount == Questions[1].length - 2) {
                $("#nxt").hide();
                $("#showResult").show();
            }
        } else if (selOpt == "js") {
            if (userAns == Questions[2][questionCount].ans) {
                points++;
                localStorage.setItem("points", points);
            }
            if (questionCount == Questions[2].length - 2) {
                $("#nxt").hide();
                $("#showResult").show();
            }
        }
        questionCount++;
        $.fn.showQuestion(questionCount);
    });

    $("#showResult").click(function () {
        let userAns = $("li.option.active").html();
        if (selOpt == "html") {
            if (userAns == Questions[0][questionCount].ans) {
                points++;
                localStorage.setItem("points", points);
            }
            if (questionCount == Questions[0].length - 1) {
                location.href = "result.html"
            }
        } else if (selOpt == "css") {
            if (userAns == Questions[1][questionCount].ans) {
                points++;
                localStorage.setItem("points", points);
            }
            if (questionCount == Questions[1].length - 1) {
                location.href = "result.html"
            }
        } else if (selOpt == "js") {
            if (userAns == Questions[2][questionCount].ans) {
                points++;
                localStorage.setItem("points", points);
            }
            if (questionCount == Questions[2].length - 1) {
                location.href = "result.html"
            }
        }
    });

    $.fn.showQuestion = (questionCount) => {
        let ques = document.getElementById("ques");
        if (selOpt == "html") {
            ques.innerHTML = `<h4>Qu.${questionCount + 1}. ${Questions[0][questionCount].que}</h4>
            <ul>
            <li class="option" value="${Questions[0][questionCount].opt[0]}">${Questions[0][questionCount].opt[0]}</li>
            <li class="option" value="${Questions[0][questionCount].opt[1]}">${Questions[0][questionCount].opt[1]}</li>
            <li class="option" value="${Questions[0][questionCount].opt[2]}">${Questions[0][questionCount].opt[2]}</li>
            <li class="option" value="${Questions[0][questionCount].opt[3]}">${Questions[0][questionCount].opt[3]}</li>
            </ul>`
        } else if (selOpt == "css") {
            ques.innerHTML = `<h4>Qu.${questionCount + 1}. ${Questions[1][questionCount].que}</h4>
            <ul>
            <li class="option" value="${Questions[1][questionCount].opt[0]}">${Questions[1][questionCount].opt[0]}</li>
            <li class="option" value="${Questions[1][questionCount].opt[1]}">${Questions[1][questionCount].opt[1]}</li>
            <li class="option" value="${Questions[1][questionCount].opt[2]}">${Questions[1][questionCount].opt[2]}</li>
            <li class="option" value="${Questions[1][questionCount].opt[3]}">${Questions[1][questionCount].opt[3]}</li>
            </ul>`
        } else if (selOpt == "js") {
            ques.innerHTML = `<h4>Qu.${questionCount + 1}. ${Questions[2][questionCount].que}</h4>
            <ul>
            <li class="option" value="${Questions[2][questionCount].opt[0]}">${Questions[2][questionCount].opt[0]}</li>
            <li class="option" value="${Questions[2][questionCount].opt[1]}">${Questions[2][questionCount].opt[1]}</li>
            <li class="option" value="${Questions[2][questionCount].opt[2]}">${Questions[2][questionCount].opt[2]}</li>
            <li class="option" value="${Questions[2][questionCount].opt[3]}">${Questions[2][questionCount].opt[3]}</li>
            <ul>`
        }
        $.fn.toggleActive();
    }
});