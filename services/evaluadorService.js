exports.evaluarCliente = (edad, ingresos, deuda, score) => {
    if (score < 500) {
        return {
            decision: "Rechazado",
            razon: "No cumple con el score mínimo",
            codigo: "S1"
        };
    }

    if (edad < 18) {
        return {
            decision: "Rechazado",
            razon: "Cliente menor de edad",
            codigo: "E1"
        };
    }

    let capacidadPago = ingresos - deuda;

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
            codigo: "P1"
        };
    }
};
