import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// **NO INCLUIR LA API KEY EN EL LADO DEL CLIENTE!**
const firebaseConfig = {
  apiKey: "AIzaSyBa629rrtbevtO3WkAEAm8FQU33dvGekNs", // Reemplaza con tu apiKey (solo en el backend)
  authDomain: "votacion-87298.firebaseapp.com",
  projectId: "votacion-87298",
  storageBucket: "votacion-87298.appspot.com",
  messagingSenderId: "107840795713",
  appId: "1:107840795713:web:7feca98f10251226c482c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function registrarUsuario() {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;

  // Validar los datos (agregar validaciones según sea necesario)

  createUserWithEmailAndPassword(auth, usuario, contraseña) // Asumiendo que "usuario" es el email
    .then((userCredential) => {
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        nombre: nombre,
        usuario: usuario
      })
      .then(() => {
        alert("Usuario registrado exitosamente!");
      })
      .catch((error) => {
        console.error("Error al guardar en la base de datos:", error);
        alert("Error al registrar usuario");
      });

    })
    .catch((error) => {
      console.error("Error al crear usuario:", error);
      alert("Error al registrar usuario");
    });

  return false;
}
