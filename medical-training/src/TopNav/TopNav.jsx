import React, { useEffect, useState } from 'react';
import BBKH from '../image/BBKH.svg';
import BCKH from '../image/BCKH.svg';
import BTKDT from '../image/BTKDT.svg';
import DTNCKH from '../image/DTNCKH.svg';
import HDNCKH from '../image/HDNCKH.svg';
import SKCT from '../image/SKCT.svg';
import SPKHCN from '../image/SPKHCN.svg';
import STL from '../image/STL.svg';
import TTVC from '../image/TTVC.svg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DivCard from '../component/DivCard';
import './topNav.css'
// Dữ liệu các thẻ
const cards = [
    { title: "Thông tin viên chức", icon: TTVC, link: "/" },
    { title: "Bài báo khoa học", icon: BBKH, link: "/" },
    { title: "Đề tài NCKH", icon: DTNCKH, link: "/" },
    { title: "Hội đồng nghiên cứu khoa học", icon: HDNCKH, link: "/" },
    { title: "Sách, tài liệu", icon: STL, link: "/" },
    { title: "Báo cáo khoa học", icon: BCKH, link: "/" },
    { title: "Sản phẩm KHCN", icon: SPKHCN, link: "/" },
    { title: "Sáng kiến, cải tiến", icon: SKCT, link: "/" },
    { title: "Bảng thống kê đào tạo", icon: BTKDT, link: "/" }
];

const TopNav = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <nav className={`flex-wrap fixed w-full transition-all duration-300 top-0 z-20 px-10 py-4 flex justify-between items-center ${isScrolled ? 'top__nav-wrapper-blur bg-transparent' : 'bg-black'}`}>
                <div className="flex space-x-10">
                    <img src="https://bvdaihoccoso2.com.vn/uploads/config/footer-logo-370x90.jpg" alt="Logo" className="h-12" />
                    <NavLink to="/home" className="text-white font-bold">Trang chủ</NavLink>
                    <NavLink to="/introduce" className="text-white font-bold">Giới thiệu</NavLink>
                    <NavLink to="/contact" className="text-white font-bold">Liên hệ</NavLink>
                </div>
                <div className="flex space-x-5">
                    <button className="border-2 border-white text-white py-2 px-5 rounded-lg font-semibold">Đăng ký</button>
                    <button className="bg-[#F9A150] text-white py-2 px-5 rounded-lg font-semibold">Đăng nhập</button>
                </div>
            </nav>

            
        </div>
    );
};

export default TopNav;
