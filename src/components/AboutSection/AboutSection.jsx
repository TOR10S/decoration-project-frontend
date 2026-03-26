
import AboutItem from "./AboutItem"
const textDelay = [0, 0.4, 0.8, 1.2, 1.6]
const iconDelay = [0.3, 0.7, 1.1, 1.5, 1.9]

export default function AboutSection() {
  return (

     <section class="about">
    <div class="container">
      <h2 class="header-2">чого я крута</h2>  
      <div class="about-wrapper">
      <ul>
    <AboutItem textDelay={textDelay[0]} iconDelay={iconDelay[0]} text='текст 1' />
    <AboutItem textDelay={textDelay[1]} iconDelay={iconDelay[1]} text='текст 2' />
    <AboutItem textDelay={textDelay[2]} iconDelay={iconDelay[2]} text='текст 3' />
    <AboutItem textDelay={textDelay[3]} iconDelay={iconDelay[3]} text='текст 4' />
    <AboutItem textDelay={textDelay[4]} iconDelay={iconDelay[4]} text='текст 5' />
      </ul>
      <img src="" alt=""/>
    </div>
    </div>
    </section>
  )
}


// компонент для кодного лі 