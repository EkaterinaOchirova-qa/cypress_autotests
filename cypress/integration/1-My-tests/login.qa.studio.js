describe('Форма авторизации QA studio', function () {
    
    it('1.1 Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
    	cy.get('#forgotEmailButton').click();
    	cy.get('#mailForgot').type('gav-ekaterina-ochirova@qa.studio');
    	cy.get('#restoreEmailButton').click();
    	cy.contains('Успешно отправили пароль на e-mail');
    	cy.get('#exitMessageButton > .exitIcon').click();
		cy.end();
    })

    it('1.2 Проверка авторизации позитивная', function () {
        cy.visit('https://login.qa.studio/');
    	cy.get('#mail').type('german@dolnikov.ru');
    	cy.get('#pass').type('iLoveqastudio1');
    	cy.get('#loginButton').click();
    	cy.contains('Авторизация прошла успешно');
        cy.get('[alt="exit icon"]').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
	})

    it('1.3 Проверка авторизации, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('[alt="exit icon"]').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('1.3 Проверка авторизации, неправильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dol.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('[alt="exit icon"]').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})