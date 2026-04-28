/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Settings, Cpu, Rocket, ChevronRight, Trophy, Users, Calendar } from "lucide-react";

export default function App() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#0099FF] text-white font-sans overflow-hidden relative selection:bg-white selection:text-[#0099FF]">
      {/* Background Gears Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20"
        >
          <Settings size={300} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-40"
        >
          <Settings size={400} />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 left-1/3"
        >
          <Settings size={500} />
        </motion.div>
      </div>

      {/* Header / Logo Section */}
      <header className="relative z-10 p-6 flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-lg">
            {/* Stylized School Logo Placeholder */}
            <div className="w-full h-full border-4 border-[#0099FF] rounded-full flex items-center justify-center overflow-hidden">
               <Cpu className="text-[#0099FF]" size={32} />
            </div>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-xs font-bold uppercase tracking-widest opacity-80">Trường THCS & THPT</h2>
            <h1 className="text-xl font-black uppercase tracking-tighter">Lê Lợi</h1>
          </div>
        </motion.div>

        <nav className="flex gap-4">
           <button 
             onClick={() => handleRedirect('#')}
             className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
           >
             Thông tin
           </button>
           <button 
             onClick={() => handleRedirect('#')}
             className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
           >
             Lịch thi
           </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 bg-white text-[#0099FF] rounded-full text-sm font-bold uppercase tracking-widest mb-4 shadow-xl">
              Sân chơi trí tuệ
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-4">
              ROBOCON<br/>
              <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px white' }}>LÊ LỢI</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold opacity-90 uppercase tracking-tight">
              Lần 5 — 2026
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleRedirect('https://example.com/register')}
              className="group relative px-8 py-4 bg-white text-[#0099FF] rounded-2xl font-black text-xl uppercase tracking-widest shadow-[0_10px_0_rgb(220,220,220)] active:shadow-none active:translate-y-[10px] transition-all flex items-center gap-2"
            >
              Đăng ký ngay
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleRedirect('https://example.com/rules')}
              className="px-8 py-4 bg-transparent border-4 border-white rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-white hover:text-[#0099FF] transition-all"
            >
              Thể lệ
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
          >
            <div className="space-y-1">
              <Trophy className="opacity-60" size={20} />
              <p className="text-lg font-bold">Giải thưởng</p>
              <p className="text-xs opacity-60 uppercase tracking-widest">Hấp dẫn</p>
            </div>
            <div className="space-y-1">
              <Users className="opacity-60" size={20} />
              <p className="text-lg font-bold">Đội thi</p>
              <p className="text-xs opacity-60 uppercase tracking-widest">Toàn trường</p>
            </div>
            <div className="space-y-1">
              <Calendar className="opacity-60" size={20} />
              <p className="text-lg font-bold">Tháng 5</p>
              <p className="text-xs opacity-60 uppercase tracking-widest">Khởi tranh</p>
            </div>
          </motion.div>
        </div>

        {/* Robot Illustration Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* Stylized Robot SVG */}
          <div className="relative w-full max-w-[500px] aspect-square">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-2xl">
                {/* Robot Head */}
                <rect x="100" y="50" width="200" height="150" rx="30" fill="white" />
                <rect x="120" y="70" width="160" height="110" rx="20" fill="#E0F2FE" />
                {/* Eyes */}
                <circle cx="165" cy="115" r="15" fill="#1E293B" />
                <circle cx="235" cy="115" r="15" fill="#1E293B" />
                <motion.circle 
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
                  cx="165" cy="115" r="5" fill="white" 
                />
                <motion.circle 
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
                  cx="235" cy="115" r="5" fill="white" 
                />
                {/* Smile */}
                <path d="M 170 150 Q 200 170 230 150" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
                
                {/* Antenna */}
                <line x1="200" y1="50" x2="200" y2="20" stroke="white" strokeWidth="8" />
                <circle cx="200" cy="20" r="12" fill="#FF4444" />

                {/* Body */}
                <rect x="110" y="210" width="180" height="180" rx="20" fill="#FF4444" />
                <rect x="140" y="240" width="120" height="100" rx="10" fill="#1E293B" />
                {/* Gears on body */}
                <Settings className="text-yellow-400 absolute" style={{ transform: 'translate(160px, 260px)' }} size={30} />
                <Settings className="text-yellow-400 absolute" style={{ transform: 'translate(200px, 280px)' }} size={40} />
                
                {/* Arms */}
                <rect x="60" y="230" width="40" height="100" rx="20" fill="white" />
                <rect x="300" y="230" width="40" height="100" rx="20" fill="white" />
                <circle cx="80" cy="330" r="25" fill="#1E293B" />
                <circle cx="320" cy="330" r="25" fill="#1E293B" />

                {/* Legs */}
                <rect x="140" y="400" width="40" height="60" rx="10" fill="#1E293B" />
                <rect x="220" y="400" width="40" height="60" rx="10" fill="#1E293B" />
                <rect x="130" y="450" width="60" height="30" rx="15" fill="#1E293B" />
                <rect x="210" y="450" width="60" height="30" rx="15" fill="#1E293B" />
              </svg>
            </motion.div>
            
            {/* Decorative circles around robot */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 border-8 border-white/20 rounded-full scale-110"
            />
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center opacity-60 text-xs uppercase tracking-[0.3em]">
        © 2026 Robocon Lê Lợi — Sáng tạo & Đam mê
      </footer>
    </div>
  );
}
