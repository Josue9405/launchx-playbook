const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        const woopa = new Ajolonauta("Woopa")
        expect(woopa.name).toBe("Woopa");
    })
})