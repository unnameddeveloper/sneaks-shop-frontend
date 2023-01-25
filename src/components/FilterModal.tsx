import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import 'swiper/css'

const FilterModal = ({ active, setActive }) => {

  return (
    <>
    <div className={active ? "filtermodalwindow" : "filtermodalwindow hidden"}>
        <div className="filtermodal_menu">
          <div className="filtermenu_type gender">
            <span data-type="header">Пол:</span>
            <Swiper slidesPerView={3} navigation={true}>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Мужские</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Женские</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Детские</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Все</span></label></SwiperSlide>
            </Swiper>
          </div>
          <div className="filtermenu_type brand">
            <span data-type="header">Бренд:</span>
            <Swiper slidesPerView={3} navigation={true}>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Addidas</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Nike</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Reebok</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Asics</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Jordan</span></label></SwiperSlide>
            </Swiper>
          </div>
          <div className="filtermenu_type costfilter">
            <span data-type="header">Цена:</span>
            <input placeholder='От' className='costfilterinput' type="number"/>
            -
            <input placeholder='До' className='costfilterinput' type="number"/>
          </div>
          <div className="filtermenu_type color">
            <span data-type="header">Цвет:</span>
            <Swiper slidesPerView={3} navigation={true}>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Синий</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Красный</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Белый</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Черный</span></label></SwiperSlide>
              <SwiperSlide><label><input type="checkbox" name="male" id="1" /><span data-type="circle"></span><span data-type="span2">Зеленый</span></label></SwiperSlide>
            </Swiper>
          </div>
          <div className="filtermenu_closebutton" onClick={() => setActive(false)}>Готово</div>
        </div>
      </div>
    </>
  );
}

export default FilterModal