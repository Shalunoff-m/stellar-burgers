// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './order-feed.module.css';
import classNames from 'classnames';

function OrderFeed() {
  return (
    <main className={classNames(styles.box, 'show')}>
      <h2
        className={classNames(
          styles.heading,
          'text',
          'text_type_main-large',
          'pt-10',
          'pb-5'
        )}
      >
        Лента заказов
      </h2>
      <div className={styles.orderLayout}>
        <section>
          <p>Секция слева</p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          exercitationem fugiat minima reprehenderit placeat, voluptatem quidem
          tempora nesciunt repellat ut vel quo delectus, doloremque natus
          architecto obcaecati labore a eveniet. Consequatur maxime aliquam eum
          nemo quasi reprehenderit ratione culpa labore. Non incidunt obcaecati
          aspernatur, necessitatibus quam inventore a placeat iste eaque eveniet
          ipsa officia magni commodi ad! Deserunt, tempora laborum! Inventore et
          iste, ex, quae illo alias esse officia laudantium in sit veniam
          exercitationem aliquid mollitia dolor officiis? Alias provident error
          at sed natus ab mollitia perspiciatis harum quia eius! Magnam nam
          officia commodi nemo sunt dolorum, eligendi porro natus corrupti.
          Quidem id non quam, odit esse dolorum sit iste minus consequatur
          tempore pariatur voluptatum est, alias illo accusamus error. Sit eius
          ipsum beatae maxime velit praesentium voluptatem reiciendis facilis
          veniam sed. Impedit voluptates provident voluptatum vel eaque rem
          maxime cupiditate harum, sint eos neque illo dolore debitis maiores
          suscipit.
        </section>
        <section>
          <div className={styles.statusTable}>
            <div>
              <h3 className='text text_type_main-medium pb-6'>Готовы:</h3>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2',
                  styles.orderNumber
                )}
              >
                034533
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2',
                  styles.orderNumber
                )}
              >
                034532
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2',
                  styles.orderNumber
                )}
              >
                034530
              </p>
            </div>

            <div>
              <h3 className='text text_type_main-medium pb-6'>В работе:</h3>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2'
                )}
              >
                034533
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2'
                )}
              >
                034532
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2'
                )}
              >
                034530
              </p>
            </div>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          exercitationem fugiat minima reprehenderit placeat, voluptatem quidem
          tempora nesciunt repellat ut vel quo delectus, doloremque natus
          architecto obcaecati labore a eveniet. Consequatur maxime aliquam eum
          nemo quasi reprehenderit ratione culpa labore. Non incidunt obcaecati
          aspernatur, necessitatibus quam inventore a placeat iste eaque eveniet
          ipsa officia magni commodi ad! Deserunt, tempora laborum! Inventore et
          iste, ex, quae illo alias esse officia laudantium in sit veniam
          exercitationem aliquid mollitia dolor officiis? Alias provident error
          at sed natus ab mollitia perspiciatis harum quia eius! Magnam nam
          officia commodi nemo sunt dolorum, eligendi porro natus corrupti.
          Quidem id non quam, odit esse dolorum sit iste minus consequatur
          tempore pariatur voluptatum est, alias illo accusamus error. Sit eius
          ipsum beatae maxime velit praesentium voluptatem reiciendis facilis
          veniam sed. Impedit voluptates provident voluptatum vel eaque rem
          maxime cupiditate harum, sint eos neque illo dolore debitis maiores
          suscipit.
        </section>
      </div>
    </main>
  );
}

export { OrderFeed };
