describe('Форма авторизации Staya', function () {
    
    it('Валидная проверка авторизации', function () {
        cy.visit('https://staya.dog/', {onBeforeLoad: (contentWindow) => {'.header-bottom__right--link'}});
    	cy.get('.header-bottom__right--link').click();
    	cy.get('.auth-form > form > [type="email"]').type('gav-ekaterina-ochirova@qa.studio');
    	cy.get('.auth-form > form > [type="password"]').type('iloveQAstudio12345');
    	cy.get('.auth-form__submit > .s-button__content').click();
    	cy.contains('Мои заказы');
    	cy.get('button.profile__nav-link').click();
		cy.end();
    })

    it('Проверка авторизации с невалидным паролем', function () {
        cy.visit('https://staya.dog/', {onBeforeLoad: (contentWindow) => {'.header-bottom__right--link'}});
    	cy.get('.header-bottom__right--link').click();
    	cy.get('.auth-form > form > [type="email"]').type('gav-ekaterina-ochirova@qa.studio');
    	cy.get('.auth-form > form > [type="password"]').type('iloveQAstudio');
    	cy.get('.auth-form__submit > .s-button__content').click();
    	cy.contains('Невозможно войти с предоставленными учетными данными.');
	})
})

