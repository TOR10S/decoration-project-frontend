import css from "./AboutSection.module.css";
import AboutItem from "./AboutItem"
const textDelay = [0, 0.4, 0.8, 1.2, 1.6]
const iconDelay = [0.3, 0.7, 1.1, 1.5, 1.9]

export default function AboutSection() {
  return (

     <section className="about">
    <div className="container">
      <h2 className="header-2">чого я крута</h2>  
      <div className={css.aboutWrapper}>
      <ul className={css.aboutList}>
    <AboutItem textDelay={textDelay[0]} iconDelay={iconDelay[0]} text='текст 1' />
    <AboutItem textDelay={textDelay[1]} iconDelay={iconDelay[1]} text='текст 2' />
    <AboutItem textDelay={textDelay[2]} iconDelay={iconDelay[2]} text='текст 3' />
    <AboutItem textDelay={textDelay[3]} iconDelay={iconDelay[3]} text='текст 4' />
    <AboutItem textDelay={textDelay[4]} iconDelay={iconDelay[4]} text='текст 5' />
      </ul>
      <img className={css.imgAbout} src="./img/About/About-1x.jpg" alt=""/>
    </div>
    </div>
    </section>
  )
}

