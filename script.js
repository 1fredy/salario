function calcularSalario() {
    let nombre = document.getElementById("nombre").value.trim();
    let cargo = document.getElementById("cargo").value.trim();
    let salario = parseFloat(document.getElementById("salario").value);

    if (nombre === "" || cargo === "") {
        alert("Debe llenar el Nombre y el Cargo antes de calcular.");
        return;
    }

    if (isNaN(salario) || salario <= 0 || salario > 5000) {
        alert("Ingrese un salario válido (máximo permitido: 5000).");
        return;
    }

    // Cálculo de AFP (7.25%)
    let afp = salario * 0.0725;

    // Cálculo de ISSS (3% con un máximo de 30)
    let isss = salario * 0.03;
    if (isss > 30) {
        isss = 30;
    }

    // Salario después de AFP e ISSS
    let salarioMenosAfpIsss = salario - afp - isss;

    // Cálculo de Renta
    let renta = 0;
    if (salarioMenosAfpIsss > 472.00) {
        if (salarioMenosAfpIsss <= 895.24) {
            renta = (salarioMenosAfpIsss - 472.00) * 0.10 + 17.67;
        } else if (salarioMenosAfpIsss <= 2038.10) {
            renta = (salarioMenosAfpIsss - 895.24) * 0.20 + 60.00;
        } else {
            renta = (salarioMenosAfpIsss - 2038.10) * 0.30 + 288.57;
        }
    }

    // Cálculo del sueldo neto
    let sueldoNeto = salarioMenosAfpIsss - renta;

    // Mostrar resultados en los campos
    document.getElementById("afp").value = `$ ${afp.toFixed(2)}`;
    document.getElementById("isss").value = `$ ${isss.toFixed(2)}`;
    document.getElementById("salarioMenosAfpIsss").value = `$ ${salarioMenosAfpIsss.toFixed(2)}`;
    document.getElementById("renta").value = `$ ${renta.toFixed(2)}`;
    document.getElementById("sueldoNeto").value = `$ ${sueldoNeto.toFixed(2)}`;
}
