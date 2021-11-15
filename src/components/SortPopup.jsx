import React from 'react';

const SortPopup = React.memo(function SortPopup({items,activeCategory,onSelectSort})  {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const activeLabel = items.find(item => item.type === activeCategory.type).name;

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const onSelectItem = (obj) => {
        onSelectSort(obj)
    }
    
    return (
        <div className="sort">
            <div className="sort__label">
              <img src="img/triangle.svg" alt="trinagle" />
              <b>Сортировка по:</b>
              <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
              <ul>
                  {items.map(item => <li key={item.name} onClick={() => onSelectItem(item)} className={item.type === activeCategory.type ? "active" : ""}>{item.name}</li>)}
              </ul>
            </div>}
          </div>
    )
})

export default SortPopup;