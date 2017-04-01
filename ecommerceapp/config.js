marketcloud.public ="public_key";
//some functions to work with marketcloud

var options = categories ||products || carts || orders || users ||payments||addresses;
marketcloud.option;

//API REF
marketcloud.categories.list({},(err, categories) => {
  //category var has our list of categories
  //err var stores the error
})

//list all products under categories
marketcloud.products.list({category_id:categoryID}, (err, products) => {
  //....
})
//create a cart
marketcloud.carts.create({items:[]},(err, cart) => {

})
marketcloud.carts.add();

marketcloud.carts.remove();
marketcloud.carts.update();
//create a new order
marketcloud.orders.create(order, (err,orderData) => {

})
//order obj
// order: {
//   shipping_address:address,
//   billing_address:address,
//   items:items
// };
