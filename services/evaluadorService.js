// Servicio que maneja la lógica de evaluación de clientes
exports.evaluarCliente = (score, promedioImponible, sumaDeudas) => {
    if (score < 500) {
        return {
            decision: "Rechazado",
            razon: "No cumple con el score mínimo",
            codigo: "S1"
        };
    }

    if (promedioImponible < 1500) {
        return {
            decision: "Rechazado",
            razon: "Promedio imponible demasiado bajo",
            codigo: "P1"
        };
    }

    let capacidadPago = promedioImponible - sumaDeudas;

    if (capacidadPago > 1000) {
        return {
            decision: "Aprobado",
            razon: "Cumple con capacidad de pago alta",
            codigo: "A1"
        };
    } else if (capacidadPago > 500) {
        return {
            decision: "Aprobado",
            razon: "Cumple con capacidad de pago baja",
            codigo: "A2"
        };
    } else {
        return {
            decision: "Rechazado",
            razon: "Capacidad de pago insuficiente",
            codigo: "D1"
        };
    }
};
