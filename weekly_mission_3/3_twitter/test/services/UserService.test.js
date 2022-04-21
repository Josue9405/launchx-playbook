const UserService = require('./../../app/services/UserService')

describe("Unit Tests for UserService Class", () => {
    test('1) Create a user object', () => {
        const user = UserService.create(1, "josue9405", "Josue", "Bio")
        expect(user.id).toBe(1);
        expect(user.username).toBe("josue9405");
        expect(user.name).toBe("Josue");
        expect(user.bio).not.toBeUndefined();
    });
    
  }) 