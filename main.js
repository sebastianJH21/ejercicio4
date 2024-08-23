const ingresoAnual = parseFloat(prompt('¿Cual es su ingreso anual? (USD)'));
const estadoCivil = prompt('¿Cual es su estado civil? (soltero o casado)').toLowerCase();
const dependientes = parseInt(prompt('¿Cuantas personas dependen de usted?'));
const aportesSeguridadSocial = prompt('¿Realizas aportes a la seguridad social? (si o no)').toLowerCase();
let impuesto;
switch (estadoCivil) {
    case "soltero":
        if (ingresoAnual < 30000) {
            impuesto = ingresoAnual * 0.1;
        } else if (ingresoAnual >= 30000 && ingresoAnual <= 60000) {
            impuesto = ingresoAnual * 0.2;
        } else {
            impuesto = ingresoAnual * 0.3;
        }
        break;
    case "casado":
        if (ingresoAnual < 40000) {
            impuesto = ingresoAnual * 0.08;
        } else if (ingresoAnual >= 40000 && ingresoAnual <= 80000) {
            impuesto = ingresoAnual * 0.18;
        } else {
            impuesto = ingresoAnual * 0.28;
        }
        break;
    default:
        alert("Estado Civil Erroneo");
        break;
}
if (dependientes == 1 || dependientes == 2) {
    var reduccionDependientes = 0.05;
} else if (dependientes >= 3) {
    var reduccionDependientes = 0.1;
}
if (aportesSeguridadSocial == "si") {
    var reduccionSeguridadSocial = 0.05;
}
impuesto = impuesto * (1 - reduccionDependientes);
impuesto = impuesto * (1 - reduccionSeguridadSocial);
console.log("El impuesto a pagar es: $"+impuesto)