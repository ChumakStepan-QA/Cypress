describe('Тестирование testqastudio.me', function () {
    it('Проверка успешного совершения покупки', function () {
     cy.reload();
     cy.visit('https://testqastudio.me/');
     cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
     cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
     cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
     cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
     cy.wait(5000);
     cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
     cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
     cy.wait(5000);
     cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
     cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
     cy.wait(5000);
     cy.get('.checkout').click();
     cy.get('#billing_first_name').type('Степан');
     cy.get('#billing_last_name').type('Чумак');
     cy.get('#billing_address_1').type('ул. Республики 70');
     cy.get('#billing_address_2').type('1 подъезд, 3 этаж');
     cy.get('#billing_city').type('г. Салехард');
     cy.get('#billing_state').type('ЯНАО');
     cy.get('#billing_postcode').type('629008');
     cy.get('#billing_phone').type('79802480091');
     cy.get('#billing_email').type('chumakstepan@gmail.com');
     cy.get('#order_comments').type('сейчас бы на море, а не вот это все:)');
     cy.get('#place_order').click();
     cy.contains('Ваш заказ принят. Благодарим вас.');
     })
    })
 
