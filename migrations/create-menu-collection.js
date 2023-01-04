exports.up = function(db) {
 return db.createCollection('menu', {
  name: 'string',
  description: 'string',
  retails: [
    {
      price: 'decimal',
      size: 'string',
      cost: 'decimal'
    }
  ]
 });
};

exports.down = function(db) {
  return db.dropCollection('menu');
};