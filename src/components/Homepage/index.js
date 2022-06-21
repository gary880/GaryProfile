import React from "react";
import styles from './index.module.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CatImg from "../../image/cat.jpg"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
import { AiTwotoneMail} from "react-icons/ai";
import { AiFillPhone} from "react-icons/ai";

const Card = () => {
    return (
        <div className={styles.centerCard}>
            <div className={styles.Cardwrap}>
                <div class="flex flex-col p-10 md:p-16 ">
                    <div className={styles.SomeAniamtion}>
                        Hi there. I,m Gary
                    </div>
                    <div class="flex flex-col md:flex-row md:w-full md:justify-between md:mt-8">
                        <div class="text-4xl md:text-6xl md:w-1/2 text-gray-100 font-ComicSansMS ">
                            Frontend Developer
                        </div>
                        <div class="text-5xl w-full flex md:w-1/2 items-end justify-around font-ComicSansMS mt-6 md:mt-0">
                            Let me talk about myself
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const Skill = () => {
    return (
        <div className={styles.centerCard}>
            <div className={styles.Cardwrap}>
                <div class="flex flex-col p-10 md:p-16 ">
                    <h2 class=" text-4xl font-ComicSansMS">SKILLS</h2>
                    <div class="flex flex-col font-ComicSansMS text-3xl w-full rounded-xl shadow shadow-slate-100 mt-10 p-4 border-8">
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">HTML5</li>
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">CSS3</li>
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">JavaScript</li>
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">ReactJs</li>
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">TailwindCSS</li>
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">Material UI</li>
                        <li class=" hover:bg-slate-50 hover:text-gray-600 rounded-md">C</li>
                    </div>
                </div>
            </div>
        </div>
    )

}
const Contact = () => {
    return (
        <div className={styles.centerCard}>
            <div className={styles.Cardwrap}>
                <div class="flex flex-col p-10 md:p-16 w-full h-full">
                    <h2 class=" text-4xl font-ComicSansMS w-full">CONTACT</h2>
                    <div class="flex flex-col border-8 rounded-lg p-4 mt-8">
                        <a href="https://www.facebook.com/profile.php?id=100003159405839" class=" text-4xl flex items-center font-ComicSansMS hover:bg-blue-300 rounded-md"><AiFillFacebook style={{marginRight:'12px'}}/>Facebook</a>
                        <a href="https://github.com/gary880" class=" text-4xl flex items-center font-ComicSansMS hover:bg-blue-300 rounded-md"><AiFillGithub style={{marginRight:'12px'}}/>Github</a>
                        <a href="mailto:easycard32145@gmail.com" class=" text-4xl flex items-center font-ComicSansMS hover:bg-blue-300 rounded-md"><AiTwotoneMail style={{marginRight:'12px'}}/>Email</a>
                        <a class=" text-4xl flex items-center font-ComicSansMS hover:bg-blue-300 rounded-md"><AiFillPhone style={{marginRight:'12px'}}/> 0931768323</a>
                    </div>
                </div>
            </div>
        </div>
    )

}
const About = () => {
    return (
        <div className={styles.centerCard}>
            <div className={styles.Cardwrap}>
                <div class="flex flex-col p-10 md:p-16 h-full w-full">
                    <h2 class=" text-4xl font-ComicSansMS w-full">ABOUT</h2>
                    <div class="flex flex-col md:flex-row h-full w-full justify-between">
                        <div class="flex items-center w-1/3 h-full mt-6 md:mt-0">
                            <img class=" rounded-md opacity-90" src={CatImg} />
                        </div>
                        <div class="flex flex-col justify-center w-1/2 h-full mt-6 md:mt-0">
                            <ul class=" text-2xl mb-2 font-bold">
                                學歷:
                                <li class=" text-lg">國立溪湖高級中學</li>
                                <li class=" text-lg">國立中正大學通訊工程學系</li>
                            </ul>
                            <ul class=" text-2xl mb-2 font-bold">
                                工作經歷:
                                <li class=" text-lg">中銳科技前端工程師</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
const Homepage = () => {
    return (
        <div class="flex justify-center relative items-center space-x-1.5 h-screen w-full bg-black text-white overflow-hidden">
            <div className={styles.rotate} >
            </div>
            <div className={styles.rotate2}>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                speed={800}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="myswiper"
            >
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><About /></SwiperSlide>
                <SwiperSlide><Skill /></SwiperSlide>
                <SwiperSlide><Contact /></SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Homepage;