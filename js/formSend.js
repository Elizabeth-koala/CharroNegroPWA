db.collection("usuarios").add({
    username: "Alan",
    email: "Mathison",
    comentario: "Turing"
   
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});