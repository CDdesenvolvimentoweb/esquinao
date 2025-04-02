import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, MessageSquare, Shield, Headphones, Music, Wrench, MapPin, Share2 } from "lucide-react";
import somLogo from '../assets/som.png';
import SplineBackground from "./SplineBackground";
import { useEffect, useState } from "react";

const DigitalCard = () => {
  const [textIndex, setTextIndex] = useState(0);
  const subtitleText = "Qualidade e confiança você encontra aqui!";
  
  useEffect(() => {
    if (textIndex < subtitleText.length) {
      const timeout = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  // Função para compartilhar o cartão
  const handleShare = async () => {
    const shareData = {
      title: 'Esquinão SOM & MOTOS',
      text: 'Qualidade e confiança você encontra aqui!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback para navegadores que não suportam a Web Share API
        alert('Compartilhe este link: ' + window.location.href);
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto overflow-hidden shadow-2xl rounded-3xl border border-gray-700/50 relative"
      style={{
        backgroundColor: 'rgba(17, 24, 39, 0.05)',
        height: '100%',
        maxHeight: '900px',
        minHeight: '840px',
      }}
    >
      {/* Full-size Spline 3D background */}
      <SplineBackground className="z-0" />
      
      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-gray-900/10 via-transparent to-black/30 pointer-events-none"></div>

      {/* Top Gradient */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 relative z-[5]"></div>

      <div className="flex flex-col h-full p-5 pb-8 relative z-[10]">
        {/* Logo and Brand */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-5 mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            className="relative mb-3 w-64 mx-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <img 
                src={somLogo} 
                alt="Esquinão SOM & MOTOS" 
                className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]" 
              />
            </motion.div>
          </motion.div>
          
          {/* Refined subtitle with typing animation */}
          <div className="relative h-8 flex items-center justify-center mt-2">
            <p 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 text-center text-sm font-light tracking-wide italic leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              {subtitleText.substring(0, textIndex)}
              <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div 
          className="grid grid-cols-3 gap-2 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[
            { icon: <Music className="w-5 h-5 text-blue-400" />, name: "Som" },
            { icon: <Shield className="w-5 h-5 text-blue-400" />, name: "Insulfilm" },
            { icon: <MessageSquare className="w-5 h-5 text-blue-400" />, name: "Sensor" },
            { icon: <Headphones className="w-5 h-5 text-blue-400" />, name: "Multimídia" },
            { icon: <Shield className="w-5 h-5 text-blue-400" />, name: "Alarme" },
            { icon: <Wrench className="w-5 h-5 text-blue-400" />, name: "Motos" },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center justify-center bg-gray-900/30 rounded-2xl py-2.5 px-2 shadow-md backdrop-blur-sm border border-gray-800/20 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex flex-col items-center justify-center gap-1 relative z-10">
                <div className="w-7 h-7 rounded-full bg-gray-800/40 flex items-center justify-center border border-blue-500/20">
                  {service.icon}
                </div>
                <span className="text-xs text-center text-gray-300 font-medium">{service.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Buttons - mt-auto to push content to bottom */}
        <div className="space-y-2.5 mt-auto">
          <motion.a 
            href="https://www.instagram.com/esquinao_som_motos_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-pink-600 to-pink-700 shadow-[0_4px_10px_rgba(219,39,119,0.2)] flex items-center justify-center gap-3 h-12 rounded-2xl px-8 text-white font-semibold relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </motion.a>

          <motion.a 
            href="https://www.facebook.com/share/15YW7g48Cm/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-[0_4px_10px_rgba(37,99,235,0.2)] flex items-center justify-center gap-3 h-12 rounded-2xl px-8 text-white font-semibold relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/5517999758856" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 shadow-[0_4px_10px_rgba(22,163,74,0.2)] flex items-center justify-center gap-3 h-12 rounded-2xl px-8 text-white font-semibold relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <Phone className="w-5 h-5" />
            <span>WhatsApp</span>
          </motion.a>

          <motion.a 
            href="https://maps.app.goo.gl/6ufnk5xx5e6mnRMo6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-gray-700 to-gray-800 shadow-[0_4px_10px_rgba(31,41,55,0.25)] flex items-center justify-center gap-3 h-12 rounded-2xl px-8 text-white font-semibold relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <MapPin className="w-5 h-5" />
            <span>Como Chegar</span>
          </motion.a>

          {/* Share Button */}
          <motion.div 
            className="flex justify-center mt-3 pt-3 border-t border-gray-800/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <motion.button 
              onClick={handleShare}
              className="h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 bg-gray-900/30 backdrop-blur-sm border border-gray-800/20 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="flex justify-center mt-8 pt-4 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <a 
              href="https://wa.me/5517999754390" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300 text-center"
              style={{ paddingBottom: "25px" }}
            >
              Desenvolvido por C&D Desenvolvimento
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DigitalCard; 