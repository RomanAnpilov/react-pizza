function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="header-left">
          <img src="img/logo.svg" alt="logo" />
          <div width={38} height={38} className="header-info">
            <h3>React pizza</h3>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header-cart">
          <span>520 ₽</span>
          <div className="delimetr"></div>
          <img src="img/cart.svg" alt="" />
        </div>
      </header>

      <div className="content">
        <div className="top-content">
          <ul className="categories">
            <li className="active">Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
          </ul>
          <div className="sort">
            <div className="sort__label">
              <img src="img/triangle.svg" alt="trinagle" />
              <b>Сортировка по:</b>
              <span>популярности</span>
            </div>
            <div className="sort__popup">
              <ul>
                <li>популярности</li>
                <li>по цене</li>
                <li>по алфавиту</li>
              </ul>
            </div>
          </div>
        </div>

        <h1>Все пиццы</h1>

        <div className="pizza-container">
          <div className="pizza-card">
              <img src="img/pizza/1.png" alt="pizza" />
              <h4>Чизбургер-пицца</h4>
              <div className="selector">
                <ul>
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul>
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="bottom">
                <span>от 395 ₽</span>
                <div className="addBtn">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="#EB5A1E"
                    />
                  </svg>
                  <span>Добавить</span>
                </div>
              </div>
            </div>

            <div className="pizza-card">
            <img src="img/pizza/1.png" alt="pizza" />
            <h4>Чизбургер-пицца</h4>
            <div className="selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="bottom">
              <span>от 395 ₽</span>
              <div className="addBtn">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="#EB5A1E"
                  />
                </svg>
                <span>Добавить</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
