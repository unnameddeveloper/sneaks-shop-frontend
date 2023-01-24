import { motion } from 'framer-motion'

const FilterModal = ({ active, setActive }) => {

  return (
    <>
    <div className={active ? "filtermodalwindow" : "filtermodalwindow hidden"}>
        <motion.div className="filtermodal_menu" initial="hidden" exit="hidden" animate="visible" drag="y"dragConstraints={{top: 0,bottom: 0}}dragElastic={0.8}onDragEnd={(event, info) => {if (info.offset.y > 200) {setActive(false)}}}>
          <div className="filtermenu_type gender">
            <span>Пол:</span>
            <input type="radio" name="male" id="1" />
            <label>Мужские</label>
            <input type="radio" name="female" id="2" />
            <label>Женские</label>
            <input type="radio" name="kid" id="3" />
            <label>Детские</label>
          </div>
          <div className="filtermenu_type brand">
            <span>Бренд:</span>
            <input type="radio" name="Nike" id="1" />
            <label>Nike</label>
            <input type="radio" name="Addidas" id="2" />
            <label>Addidas</label>
            <input type="radio" name="Asos" id="3" />
            <label>Asos</label>
            <input type="radio" name="Jordan" id="3" />
            <label>Jordan</label>
          </div>
          <div className="filtermenu_type costfilter">
            <span>Цена:</span>
            <input placeholder='От' className='costfilterinput' type="number"/>
            -
            <input placeholder='До' className='costfilterinput' type="number"/>
          </div>
          <div className="filtermenu_type color">
            <span>Цвет:</span>
            <input type="radio" name="white" id="1" />
            <label>Белый</label>
            <input type="radio" name="black" id="2" />
            <label>Черный</label>
            <input type="radio" name="green" id="3" />
            <label>Зеленый</label>
            <input type="radio" name="blue" id="3" />
            <label>Синий</label>
          </div>
          <div className="filtermenu_closebutton" onClick={() => setActive(false)}>Готово</div>
        </motion.div>
      </div>
    </>
  );
}

export default FilterModal