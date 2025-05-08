const { response } = require("express");
const evaluadorService = require("../services/evaluadorService");

const evaluador = async (req, res = response) => {
    try {
        let { rut, datosEvaluacion } = req.body;

    
        if (!rut || !datosEvaluacion || datosEvaluacion.score === undefined || 
            datosEvaluacion.promedioImponible === undefined || datosEvaluacion.sumaDeudas === undefined) {
            return res.status(400).json({
                error: "Faltan datos en la solicitud",
                codigo: "M1"
            });
        }

        let { score, promedioImponible, sumaDeudas } = datosEvaluacion;

        let resultadoEvaluacion = evaluadorService.evaluarClienteService(score, promedioImponible, sumaDeudas);

        return res.status(200).json({
            mensaje: "Evaluación realizada con éxito",
            clienteEvaluado: {
                rut: rut,
                datosEvaluacion: datosEvaluacion,
                resultado: resultadoEvaluacion
            }
        });

    } catch (error) {
        console.error("Error en la evaluación:", error);
        return res.status(500).json({ error: "Error interno del servidor", codigo: "X1" });
    }
};

module.exports = { evaluador };
