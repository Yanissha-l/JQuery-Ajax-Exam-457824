class Country {
	constructor (data) {
		this.name = data.name;
        this.flag = data.flag;
        this.domain = data.domain;
        this.capital = data.capital;
        this.currency_code = data.currency_code;
        this.currency_name = data.currency_name;
        this.currency_symbol = data.currency_symbol;
	}

	build () {

        console.log("1");



	/* 	var productContainer = $('<div>', {
			class: "product-container", 
			click: function (e) {
				shoppingCart.add(this.name, this.price)
			}.bind(this), 
		})
		$('<span>', {
			text: this.name, 
			class: "product-name", 
		}).appendTo(productContainer)
		$('<span>', {
			text: this.price, 
			class: "product-price", 
		}).appendTo(productContainer)
		return productContainer;*/
	} 
}