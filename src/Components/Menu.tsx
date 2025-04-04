import React,{useState} from 'react'
import '../Styles/Menu.css'

const Menu = () => {
  const [activeSection, setActiveSection] = useState<'food' | 'beverages'>('food');
  return (
    <>
    <div className='bestseller'><h1>BESTSELLERS</h1></div>
      <div className='main-container'>
        <div className='inner-container'>
          <img src='https://veganhuggs.com/wp-content/uploads/2023/02/white-bean-avocado-toast.jpg' alt='avocado toast' className='avocado-image' />
          <div className='overlay'>
            <div className='text'>Avocado Toast</div>
          </div>
        </div>

        <div className='inner-container'>
           <img src='https://i.pinimg.com/736x/29/80/35/298035c9125c3ec314b25d4b61881c64.jpg' alt='burger' className='burger-image'></img>
           <div className='overlay'>
             <div className='text'>Burger Bliss</div>
           </div>
        </div>

        <div className='inner-container'>
          <img src='https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg' alt='pizza' className='pizza-image' />
          <div className='overlay'>
            <div className='text'>Margherita Pizza</div>
          </div>
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={() => setActiveSection('food')} className={activeSection === 'food' ? 'active' : ''}>
          Food
        </button>
        <button onClick={() => setActiveSection('beverages')} className={activeSection === 'beverages' ? 'active' : ''}>
          Beverages
        </button>
      </div>

      {activeSection === 'food' && (
        <div>
          <div className="main-container">
            <div className="inner-container">
              <img
                src="https://www.bhg.com/thmb/B1Mbx1q9AgIEJ8PbQpPq0QPs820=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-pancakes-waffles-pancakes-Hero-01-372c4cad318d4373b6288e993a60ca62.jpg"
                alt="pancake"
                className="food-img"
              />
              <div className="overlay">
                <div className="text">Pancake</div>
              </div>
            </div>

            <div className='inner-container'>
                <img src='https://www.thespruceeats.com/thmb/vpTyvEqhD5f1_0_-J4xMJeZofM4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/scrambled-eggs-with-bacon-482587-Hero_01-05be09870a6a4c87ba40cffb07e1ee92.jpg' alt='scrambled eggs' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Scrambled Eggs</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://media.istockphoto.com/id/185266029/photo/waffles-with-fruit-and-maple-syrup-on-a-marble-counter.jpg?s=612x612&w=0&k=20&c=YkBBzuSLisdHiECgS_NHN6gOyOMN6exADFk-RIlfKtI=' alt='waffle' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Waffle</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png' alt='pasta' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Pasta</div>
                </div>
            </div>

            <div className="inner-container">
              <img
                src="https://recipes.timesofindia.com/thumb/55833694.cms?width=1200&height=900"
                alt="french toast"
                className="food-img"
              />
              <div className="overlay">
                <div className="text">French Toast</div>
              </div>
            </div>

            <div className='inner-container'>
                <img src='https://www.jagranimages.com/images/newimg/khanakhazana/02_2024-french_fries_recipe.webp' alt='french fries' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>French Fries</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://www.budgetbytes.com/wp-content/uploads/2025/01/Smoothie-Bowl-Overhead.jpg' alt='smoothie' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Smoothie Bowl</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg' alt='salad' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>salad</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://insanelygoodrecipes.com/wp-content/uploads/2024/12/Chocolate-Almond-Croissants-Recipe-500x500.jpg' alt='croissant' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Almond Croissant</div>
                </div>
            </div>
          
          </div>
        </div>
      )}
       {activeSection === 'beverages' && (
        <div>
          <div className="main-container">
            <div className="inner-container">
              <img
                src="https://www.splenda.com/wp-content/uploads/2022/08/Creamy-Iced-Mocha-Latte-website-8023-2000x1000.jpg"
                alt="iced coffe"
                className="food-img"
              />
              <div className="overlay">
                <div className="text">Iced Coffee</div>
              </div>
            </div>

            <div className='inner-container'>
                <img src='https://www.ghirne.com/wp-content/uploads/2024/11/drew-coffman-tZKwLRO904E-unsplash.jpg' alt='cappuccino' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Cappuccino</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://hospitalityinsights.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/bubble-tea.jpg' alt='bubble tea' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Bubble Tea</div>
                </div>
            </div>

            <div className='inner-container'>
                <img src='https://images.getrecipekit.com/20230327191313-Kettle_HotChoco.jpg?width=650&quality=90&'
                 alt='hot choco' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Hot Chocolate</div>
                </div>
            </div>

            <div className="inner-container">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/5/XO/LL/HB/129280407/oreo-milkshake.jpg"
                alt="oreo shake"
                className="food-img"
              />
              <div className="overlay">
                <div className="text">Oreo Shake</div>
              </div>
            </div>

            <div className='inner-container'>
                <img src='https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_251566309.jpg' alt='green tea' className='food-img' ></img>
                <div className='overlay'>
                    <div className='text'>Green Tea</div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu
