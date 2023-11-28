const firebaseConfig = {
  apiKey: "AIzaSyC4mM0ivhgoWchpt68NU5wCpZ2L9SquMFQ",
  authDomain: "contactform-df98f.firebaseapp.com",
  databaseURL: "https://contactform-df98f-default-rtdb.firebaseio.com",
  projectId: "contactform-df98f",
  storageBucket: "contactform-df98f.appspot.com",
  messagingSenderId: "646601010903",
  appId: "1:646601010903:web:6d465949b4597210a54a92"
};
firebase.initializeApp(firebaseConfig);

 var contactFormDB = firebase.database().ref("contactForm");

 document.getElementById("contactForm").addEventListener("submit", submitForm);

 function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal("name");
    var emailid = getElementVal ("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
      }, 3000);
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};


 const getElementVal = (id) => {
    return document.getElementById(id).value;
 };