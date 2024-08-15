import { useState, useRef, useEffect } from 'react';

const useToggleMenu = () => {
  // Mengelola state untuk menentukan apakah menu sedang aktif atau tidak
  const [isMenuActive, setMenuActive] = useState(false);

  // Menggunakan useRef untuk mereferensikan elemen DOM yang akan dimanipulasi
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);
  const navlinkRef = useRef(null);

  // Fungsi untuk menangani klik pada tombol toggle
  const toggleHandleClick = () => {
    document.body.classList.toggle('overlay-active');
    menuRef.current && menuRef.current.classList.toggle('active', !isMenuActive);
    setMenuActive(!isMenuActive);
  };

  useEffect(() => {
    // Fungsi yang menangani klik di luar menu untuk menutup menu
    const handleClickMenuOutside = (e) => {
      if ((!toggleMenuRef.current.contains(e.target) && !menuRef.current.contains(e.target)) || navlinkRef.current.contains(e.target)) {
        document.body.classList.remove('overlay-active');
        menuRef.current.classList.remove('active');
        setMenuActive(false);
      }
    };

    // Menambahkan event listener pada document untuk mendeteksi klik di luar menu
    document.addEventListener('click', handleClickMenuOutside);

    // Menghapus event listener saat komponen unmount untuk mencegah memory leaks
    return () => {
      document.removeEventListener('click', handleClickMenuOutside);
    };
  }, []); // Hanya menjalankan useEffect sekali saat komponen mount

  // Mengembalikan state, handler, dan referensi yang diperlukan untuk mengontrol menu
  return { isMenuActive, toggleHandleClick, menuRef, toggleMenuRef, navlinkRef };
};

export default useToggleMenu;
