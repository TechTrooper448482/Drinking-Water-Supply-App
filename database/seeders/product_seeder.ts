import Product from '#models/product';
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const products = [
      {
        name: 'Crystal Clear Spring Water',
        capacity: '750ml Bottle',
        description: 'Natural Spring Water',
        price: 250.0,
        image: 'https://www.bevco.bz/wp-content/uploads/2020/09/Crystal-1Gal-Ambient_web_opd.png'
      },
      {
        name: 'AquaPure Distilled Water',
        capacity: '1L Bottle',
        description: 'Distilled Water for Purity',
        price: 300.0,
        image: 'https://www.nestlepurelife.com/pk/sites/g/files/xknfdk411/files/19l.jpg'
      },
      {
        name: 'Mountain Fresh Mineral Water',
        capacity: '500ml Bottle',
        description: 'Fresh Mineral-Rich Water',
        price: 230.0,
        image: 'https://www.aquafresh.ae/assets/images/BottleGroups.png'
      },
      {
        name: 'PureLife Alkaline Water',
        capacity: '600ml Bottle',
        description: 'Alkaline Water for Balanced pH',
        price: 270.0,
        image: 'https://lh5.googleusercontent.com/proxy/sFvPw0cI2iPY90j1YiezspKFbSOXtvccXrPBIhYDDcJGeM57TgsspIEM2MRjea9rBEU6_3s62k93Dbg4lX7T_IISIa4xIqbd-YzY7QNliwkzyZLIgg'
      },
      {
        name: 'EcoHydrate Spring Water',
        capacity: '1.5L Bottle',
        description: 'Eco-Friendly Packaged Water',
        price: 350.0,
        image: 'https://www.alwadipurewateruae.com/wp-content/themes/aquablue/img/services/5gallon.png'
      },
      {
        name: 'VitalH2O Purified Water',
        capacity: '500ml Bottle',
        description: 'Purified Water for Everyday Use',
        price: 210.0,
        image: 'https://cdn.mafrservices.com/sys-master-root/hd5/h60/26911811338270/49308_main.jpg?im=Resize=480'
      },
      {
        name: 'Glacier Fresh Artesian Water',
        capacity: '750ml Bottle',
        description: 'Naturally Filtered Artesian Water',
        price: 280.0,
        image: 'https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/1/1133439-1.jpg'
      },
      {
        name: 'OceanBlue Electrolyte Water',
        capacity: '700ml Bottle',
        description: 'Electrolyte Enhanced Water',
        price: 260.0,
        image: 'https://assets.caseys.com/m/ebebe6d6c513460a/400x400-1200000157_base.PNG'
      },
      {
        name: 'Rainforest Natural Spring Water',
        capacity: '1L Bottle',
        description: 'Water from Natural Springs',
        price: 320.0,
        image: 'https://www.boondhwater.com/images/resource/double-bottle1.png'
      },
      {
        name: 'BioPure Reverse Osmosis Water',
        capacity: '600ml Bottle',
        description: 'High Purity Reverse Osmosis Water',
        price: 290.0,
        image: 'https://www.boondhwater.com/images/resource/1.5-bottle.png'
      }
    ];


    // await Product.createMany(products)
  }
}