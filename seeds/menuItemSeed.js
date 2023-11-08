const { MenuItem}  =require('../models')


const menuItemData = [
{
    id:1,
    item_name:'something',
    restaurant_id:1,
    user_id:1
},{
    id:2,
    item_name:'Soup',
    restaurant_id:2,
    user_id:2
},{
    id:3,
    item_name:'else',
    restaurant_id:3,
    user_id:3
}
]

const menuItemDataSeed = () => MenuItem.bulkCreate(menuItemData);
module.exports = menuItemDataSeed;