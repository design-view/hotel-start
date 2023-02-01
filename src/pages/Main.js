import React, { useState } from 'react';
import Promotion from './Promotion';
import SpecialOffer from './SpecialOffer';
import VisualSlider from './VisualSlider';
const Main = () => {
    const [special, setSpecial] = useState([
        {
            id:1,
            title: "트니 어드벤처 패키지",
            desc: "객실 & 조식 & 트니트니 어드벤처 & 키즈잼 자유놀이 & 보팅",
            img: "images/banner1.jpg",
            link: "미정"
        },
        {
            id:2,
            title: "마이다스 키즈잼 패키지",
            desc: "객실 1박 & 조식 2인 & 키즈잼 자유놀이 2시간 & 키즈 상품 & 보팅",
            img: "images/banner2.png",
            link: "미정"
        },
        {
            id:3,
            title: "굿모닝 마이다스 패키지",
            desc: "객실 1박 & 조식 2인 & 보팅",
            img: "images/banner3.jpg",
            link: "미정"
        },
    ])
    return (
        <div>
           <VisualSlider/>
           <SpecialOffer data={special}/>
           <Promotion/>
        </div>
    );
};
export default Main;