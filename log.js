
const btnRegistrar = document.getElementById('registrar');
console.log(btnRegistrar)

btnRegistrar.addEventListener('click', () => {
    capturar();
})

let baseDatos = [];

function capturar() {
    function User(Nombre, Email, Password) {
        this.Nombre = Nombre;
        this.Email = Email;
        this.Password = Password;
    }
    var nombreCapt = document.getElementById('nombre').value;
    var emailCap = document.getElementById('email').value;
    var passwordCapt = document.getElementById('pass').value;

    var newUser = new User(nombreCapt, emailCap, passwordCapt);
    agregar();
    function agregar() {
        baseDatos.push(newUser);
        document.getElementById('tabla').innerHTML += `<tbody><tr><td>${newUser.Nombre}</td><td>${newUser.Email}</td>${newUser.Password}<td></tr></tbody>`
    }
}


/* const fila = document.createElement('tr');
const elementoTabla = document.createElement('th');
document.getElementById('tabla').appendChild(fila);
fila.appendChild(elementoTabla);
 */








