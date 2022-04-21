const Superhero = require('./../app/Superhero')

describe("Pruebas de unidad de Superhero", () => {
    test('Caso de prueba 1: Obtener un superheroe', () => {
        const ironman = new Superhero("Iron Man", "Robert Downey Jr.", "Tony Stark")


        expect(ironman.name).toBe("Iron Man");
        expect(ironman.actor).toBe("Robert Downey Jr.");
        expect(ironman.heroName).toBe("Tony Stark");
    })
})