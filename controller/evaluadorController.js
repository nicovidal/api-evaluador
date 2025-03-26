const { response } = require("express");
const evaluadorService = require("../services/evaluadorService");

const evaluador = async (req, res = response) => {
    try {
 
        let { nombre, edad, ingresos, deuda, score } = req.body;


        if (!nombre || edad === undefined || ingresos === undefined || deuda === undefined || score === undefined) {
            return res.status(400).json({
                error: "Faltan datos en la solicitud",
                codigo: "M1"
            });
        }

        let resultadoEvaluacion = evaluadorService.evaluarCliente(edad, ingresos, deuda, score);

        return res.status(200).json({
            mensaje: "Evaluación realizada con éxito",
            cliente: nombre,
            resultado: resultadoEvaluacion
        });

    } catch (error) {
        console.error("Error en la evaluación:", error);
        return res.status(500).json({ error: "Error interno del servidor", codigo: "X1" });
    }
};

module.exports = { evaluador };
