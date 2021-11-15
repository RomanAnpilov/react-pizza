import React from 'react';

const SortPopup = React.memo(function SortPopup()  {
    return (
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
    )
})

export default SortPopup;