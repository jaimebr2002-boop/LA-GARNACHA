import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock, Instagram, Facebook, Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- DATA ---
const MENU_DATA = [
  {
    category: "Entrantes",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Guacamole con Totopos", description: "Triángulos de tortilla frita.", price: "6.00€" },
      { name: "Guacamole con Chicharrón", description: "Chicharrones fritos con guacamole.", price: "8.00€" },
      { name: "Chilaquiles con Pollo", description: "Salsa roja, lechuga, cebolla curtida, queso fresco y crema.", price: "11.00€" },
      { name: "Chilaquiles Verdes con Pollo", description: "Salsa verde, totopos, huevo frito, queso fresco y crema.", price: "13.00€" },
      { name: "Media Ración Chilaquiles con Pollo", description: "Salsa roja, lechuga, cebolla curtida, queso fresco y crema.", price: "7.00€" },
      { name: "Nachos Tex Mex", description: "Totopos, chili con carne, frijoles, pico de gallo, queso fundido, salsa ranch, guacamole y jalapeños.", price: "14.00€" },
      { name: "Nachos de Pollo", description: "Totopos, tinga de pollo, pico de gallo, queso fundido, salsa ranch, guacamole y jalapeños.", price: "13.00€" },
      { name: "Nachos de Birria", description: "Totopos, carne desmechada de ternera, pico de gallo, queso fundido, salsa ranch, guacamole y jalapeños.", price: "15.00€" },
      { name: "Nachos de Cochinita Pibil (¡NUEVO!)", description: "Totopos, cochinita pibil, pico de gallo, queso fundido, salsa ranch, guacamole, cebolla curtida y queso fresco.", price: "14.00€" },
      { name: "Media Ración Nachos Tex Mex", description: "Mismo contenido que la ración completa.", price: "8.00€" },
      { name: "Media Nachos de Pollo", description: "Mismo contenido que la ración completa.", price: "7.00€" },
      { name: "Media Nachos de Birria", description: "Mismo contenido que la ración completa.", price: "8.00€" },
      { name: "Media Nachos de Cochinita Pibil (¡NUEVO!)", description: "Mismo contenido que la ración completa.", price: "8.00€" },
      { name: "Fundido de Frijoles (Nuevo)", description: "Totopos, frijoles, queso fundido, chorizo y cebolla curtida.", price: "13.00€" },
      { name: "Patatas Tex Mex", description: "Chorizo, pico de gallo, queso fundido, salsa de guacamole, salsa ranch y salsa Garnacha.", price: "13.00€" },
      { name: "Media Ración Patatas Tex Mex", description: "Mismo contenido que la ración completa.", price: "7.00€" },
      { name: "Sopa Azteca", description: "Pollo desmenuzado, totopos, queso fresco, chicharra y aguacate.", price: "9.00€" },
      { name: "Ensalada Mexicana", description: "Lechuga, aguacate, pepino, cebolla y maíz.", price: "9.00€" },
      { name: "Ensalada Poblana", description: "Pollo, lechuga, salsa César, picatostes, tomate cherry y parmesano.", price: "10.00€" },
      { name: "Alitas Tex Mex", description: "Salsa ranch + zanahoria y apio. Opciones: BBQ | Miel y Mostaza | Buffalo | Mango Habanero.", price: "7.00€" },
      { name: "Jalapeños Rellenos", description: "4 jalapeños rellenos de queso sobre queso fundido.", price: "7.00€" },
      { name: "Patatas Dipper", description: "Ración de patatas dipper.", price: "4.00€" },
      { name: "Patatas Fritas", description: "Ración de patatas fritas clásicas.", price: "3.50€" }
    ]
  },
  {
    category: "Tacos",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Tacos de Birria (Top #1)", description: "Ternera, queso fundido, cebolla y cilantro.", price: "13.00€" },
      { name: "Tacos al Pastor", description: "Cerdo adobado, piña, cebolla y cilantro.", price: "12.00€" },
      { name: "Tacos de Cochinita Pibil", description: "Cerdo a fuego lento, cebolla curtida y habanero.", price: "12.00€" },
      { name: "Tacos de Arrachera", description: "Ternera marinada y guacamole.", price: "13.00€" },
      { name: "Tacos de Tinga de Pollo", description: "Pico de gallo y salsa guacamole.", price: "12.00€" },
      { name: "Tacos de Chorizo", description: "Cerdo, cilantro y cebolla.", price: "12.00€" },
      { name: "Tacos Campechanos", description: "Ternera, chorizo, cilantro y cebolla.", price: "13.00€" },
      { name: "Tacos de Carnitas", description: "Cerdo, base de frijoles, cilantro y cebolla.", price: "12.00€" },
      { name: "Tacos de Chicharrón", description: "Cerdo frito, lechuga, pico de gallo, cebolla morada y guacamole.", price: "12.00€" },
      { name: "Tacos de Lengua", description: "Tacos tradicionales de lengua.", price: "13.00€" },
      { name: "Tacos de Camarón", description: "Camarones, repollo, guacamole y salsa ranchera.", price: "14.00€" },
      { name: "Tacos Vegetales", description: "Verdura de temporada.", price: "12.00€" },
      { name: "Tacos Mar y Tierra (Nuevo)", description: "Ternera, pollo, camarón, queso y guacamole.", price: "15.00€" },
      { name: "Mix Mar y Tierra", description: "12 tacos (mín. 4 personas) + 1 caña por persona.", price: "50.00€" }
    ]
  },
  {
    category: "Fritos",
    image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Tostadas", description: "Ternera, pollo o cerdo.", price: "12.00€" },
      { name: "Volcanes Charros con Carne (3 uds)", description: "Tortilla frita, chorizo, queso y frijoles.", price: "12.00€" },
      { name: "Volcanes Charros con Frijoles (3 uds)", description: "Tortilla frita con queso y frijoles.", price: "11.00€" },
      { name: "Tacos Flauta (4 uds)", description: "Pollo, salsa roja, lechuga y queso.", price: "10.00€" },
      { name: "Tacos Flauta de Ternera (4 uds)", description: "Ternera, salsa roja, lechuga y queso.", price: "12.00€" },
      { name: "Ahogadas", description: "Pollo + queso fundido entre tortillas fritas.", price: "12.00€" }
    ]
  },
  {
    category: "Tortas XL",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Torta Tinga de Pollo", description: "Lechuga, guacamole, pico de gallo y salsa Garnacha.", price: "12.00€" },
      { name: "Torta Arrachera", description: "Ternera, queso fundido, frijoles y guacamole.", price: "13.00€" },
      { name: "Torta Al Pastor", description: "Carne al pastor con sus complementos tradicionales.", price: "12.00€" },
      { name: "Torta Cochinita Pibil", description: "Cochinita pibil con sus complementos tradicionales.", price: "12.00€" },
      { name: "Torta Birria", description: "Birria de ternera con sus complementos tradicionales.", price: "13.00€" },
      { name: "Torta Lengua (Solo Girona)", description: "Lengua con sus complementos tradicionales.", price: "12.00€" }
    ]
  },
  {
    category: "Tex Mex & Hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "La Mariachi", description: "Carne mixta, queso, jalapeños y salsa Garnacha. Incluye patatas Dipper.", price: "10.00€" },
      { name: "Especial Garnacha", description: "Bacon, piña, queso y salsa. Incluye patatas Dipper.", price: "12.00€" },
      { name: "Pollo Crujiente", description: "Hamburguesa de pollo crujiente. Incluye patatas Dipper.", price: "10.00€" },
      { name: "La Texana", description: "Carne Angus, totopos y salsa a elegir. Incluye patatas Dipper.", price: "13.00€" },
      { name: "La Mechada (Nueva)", description: "Cerdo barbacoa + cebolla caramelizada. Incluye patatas Dipper.", price: "12.00€" }
    ]
  },
  {
    category: "Especiales",
    image: "https://images.unsplash.com/photo-1584041419725-eb8897c8d46a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Molcajete (Solo Girona)", description: "Carne variada + arroz + frijoles + tortillas. Bajo reserva.", price: "30.00€" },
      { name: "Chicharrón a la Mexicana (Novedad)", description: "Chicharrón a la mexicana.", price: "20.00€" },
      { name: "Menú Degustación", description: "8 platos + bebida + postre. Bajo reserva. Precio por persona.", price: "40.00€" }
    ]
  },
  {
    category: "Infantil",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Crujientes de pollo", description: "Crujientes de pollo.", price: "8.00€" },
      { name: "Alitas infantiles", description: "Alitas infantiles.", price: "7.00€" },
      { name: "Hamburguesa pollo", description: "Hamburguesa pollo.", price: "8.00€" },
      { name: "Mini quesadilla", description: "Mini quesadilla.", price: "9.00€" }
    ]
  },
  {
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Refrescos", description: "Refrescos variados.", price: "2.80€" },
      { name: "Agua 1L", description: "Agua 1L.", price: "2.80€" },
      { name: "Zumos", description: "Zumos variados.", price: "2.20€" },
      { name: "Café", description: "Café.", price: "desde 1.40€" },
      { name: "Cervezas nacionales e internacionales", description: "Cervezas nacionales e internacionales.", price: "desde 2.30€" },
      { name: "Cervezas Mexicanas", description: "Cervezas Mexicanas.", price: "3.50€" },
      { name: "Sangría 1L", description: "Sangría 1L.", price: "13.00€" },
      { name: "Tisana 1L", description: "Tisana 1L.", price: "14.00€" }
    ]
  },
  {
    category: "Cócteles",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Piña Colada", description: "No se sirven sin alcohol.", price: "10.00€" },
      { name: "Mojito", description: "No se sirven sin alcohol.", price: "9.00€" },
      { name: "Michelada", description: "No se sirven sin alcohol.", price: "9.00€" },
      { name: "Tequila Sunrise", description: "No se sirven sin alcohol.", price: "9.00€" },
      { name: "Margarita", description: "No se sirven sin alcohol.", price: "9.00€" },
      { name: "Margarita Frozen", description: "No se sirven sin alcohol.", price: "9.00€" },
      { name: "Mezcalita", description: "No se sirven sin alcohol.", price: "10.00€" },
      { name: "Cantarito", description: "No se sirven sin alcohol.", price: "10.00€" },
      { name: "Aperol Spritz", description: "No se sirven sin alcohol.", price: "7.00€" }
    ]
  },
  {
    category: "Postres",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    items: [
      { name: "Tarta del día", description: "Tarta del día.", price: "6.00€" }
    ]
  }
];

const REVIEWS = [
  {
    name: "Glòria Llorens",
    time: "Hace un mes",
    text: "Sitio excepcional.para comer mejicano.\nSamuel gran profesional que te comenta las.mejores opciones.\nNachos muy completos y naturales, bueniiisimos, tequeños jalapeños muy buenos y…",
    rating: 5
  },
  {
    name: "Cristina Andreea Purice",
    time: "Hace 3 semanas",
    text: "Menudo descubrimiento, se ha convertido en mi mexicano favorito de Girona.\nPorciones generosas y deliciosas, los tacos de birria son exquisitos. Su guacamole está buenísimo y sus totopos deliciososs. Sin duda volveremos y lo recomendaré!",
    rating: 5
  },
  {
    name: "Soul Rock",
    time: "Hace 2 meses",
    text: "He de reconocer que el sitio aunque es pequeño es muy acogedor y al menos lo que hemos probado mi pareja y yo está buenísimo.\nEs un buen sitio para recomendar y sinceramente pensamos volver.\nLa decoración es muy original y los sabores espectaculares",
    rating: 5
  },
  {
    name: "Jonner Granadillo",
    time: "Hace 6 meses",
    text: "Una joya en el corazón de Girona\nLa Garnacha es de esos sitios que sorprenden desde el primer momento. La comida…",
    rating: 5
  },
  {
    name: "Jefferson Aguilar",
    time: "Hace 2 meses",
    text: "Excelente restaurante latino. La atención al cliente es de primera y las chicas que atienden son muy amables, profesionales y atentas. Hacen que la experiencia sea cálida y agradable. ¡Muy recomendado!",
    rating: 5
  },
  {
    name: "daniela lopez",
    time: "Hace 4 meses",
    text: "Un lugar muy agradable, con buen ambiente y música agradable. La comida es buena en cantidad y calidad platos con mucho sabor y agradables a la vista y en este sitio eh probado una de las mejores piñas coladas de Girona, la camarera muy agradable y muy buena atención",
    rating: 5
  },
  {
    name: "Marta Caballero",
    time: "Hace 6 meses",
    text: "No suelo poner reseñas de los restaurantes, pero este se lo merece. Mi pareja y yo lo encontramos de casualidad, acabábamos de llegar a Gerona y fuimos sin ningún tipo de expectativas. Pedimos los chicharrones con guacamole que nos encantó,…",
    rating: 5
  },
  {
    name: "Laura Comas",
    time: "Hace 2 meses",
    text: "He venido a cenar al restaurante y la experiencia no pudo ser mejor. La comida estaba espectacular: los nachos buenisimos y caseros, la quesadilla increible y el guacamole fresco y delicioso. El ambiente es acogedor y la música mexicana de…",
    rating: 5
  },
  {
    name: "Joan Montejo",
    time: "Hace un mes",
    text: "Todas las veces que he venido la comida esta espectacular, buenísimos los tacos de birria, nachos, pastel de dulce de leche, todo está buenísimo, a muy buen precio. Un trato genial. Recomendado 100%.",
    rating: 5
  },
  {
    name: "Cami Lopez",
    time: "Hace 8 meses",
    text: "Suuuuper rico todo. Pedimos los tacos birria, costillitas y nachos. La verdad que comimos super bien y estaba todo super sabroso, destacaron los nachos la verdad y las bebidas. Pedimos dos margaritas frozen, una de piña y otra de mango",
    rating: 5
  },
  {
    name: "Tatiana Izquierdo",
    time: "Hace un año",
    text: "Muy buen servicio por parte de Samanta y Yoani. Los platos son deliciosos, ya hemos venidos 5 veces y seguiremos repitiendo! Lo recomiendo al 100% es un 10/10 en calidad-precio.",
    rating: 5
  },
  {
    name: "Ariadna De León",
    time: "Hace 3 años",
    text: "Todo delicioso, precio perfecto, porciones llenadoras, tacos con tortilla de maíz 👍🏼 y la atención inmejorable. Pedí mis tacos de birria con su salsita, todo super sabroso!!! Por cierto, soy mexicana, puedo poner 10 estrellas en lugar de 5? 😃 ⭐ ❤️ Volveremos, sin lugar a dudas!!!",
    rating: 5
  },
  {
    name: "123 456",
    time: "Hace 4 meses",
    text: "Lugar excelente, buen trato, comida exquisita.\nLos nachos, deliciosos, las quesadillas y el burrito también\nLa camarera nos aconsejó que las raciones eran grandes y tenia razón",
    rating: 5
  },
  {
    name: "Edas German Osorio Maradiaga",
    time: "Hace un año",
    text: "Una explosión de sabores en cada plato q de gustamos, siempre q vengo quiero comer de todo, hoy nos decantamos por el chicharrón a la mexicana y estaba mmmm perfectonpara compartir entre 4 personas ,pienso repetir sirven buenas raciones ,la atencion genial",
    rating: 5
  },
  {
    name: "Javier Sánchez",
    time: "Fecha de edición: Hace un año",
    text: "Probamos los Nachos, quesadillas y burrito.\n\nBuenísimo y unas raciones enormes.\n\nVolveremos a seguir probando otros platos.",
    rating: 5
  },
  {
    name: "Diego Sanchez",
    time: "Hace un año",
    text: "Buen descubrimiento!!\nBuen servicio y excelente comida.Raciones y platos suculentos.\nQuizás la música un poco alta,pero tampoco es muy exagerado.\nPrecio correcto p…",
    rating: 5
  },
  {
    name: "Angel Chillarón",
    time: "Hace 8 meses",
    text: "Todo muy rico como siempre. Pedí chicharron, nachos y tacos arrachera, muy sabroso y raciones muy generosas. Recomiendo.",
    rating: 5
  },
  {
    name: "Yasiel Santos",
    time: "Hace 2 años",
    text: "Para mi el mejor restaurant mexicano de Girona por mucho, la comida espectacular, muy buena, bien elaborada y todo productos caseros, los tragos muy bien preparados y con ingredientes de calidad, seguid asi",
    rating: 5
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<typeof MENU_DATA[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [itemsPerReviewSlide, setItemsPerReviewSlide] = useState(3);
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setItemsPerReviewSlide(window.innerWidth < 768 ? 1 : 3);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalReviewPages = Math.ceil(REVIEWS.length / itemsPerReviewSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewSlide((prev) => (prev + 1) % totalReviewPages);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [totalReviewPages]);

  const nextReviewSlide = () => {
    setCurrentReviewSlide((prev) => (prev + 1) % totalReviewPages);
  };

  const prevReviewSlide = () => {
    setCurrentReviewSlide((prev) => (prev - 1 + totalReviewPages) % totalReviewPages);
  };

  const chunkedReviews = [];
  for (let i = 0; i < REVIEWS.length; i += itemsPerReviewSlide) {
    chunkedReviews.push(REVIEWS.slice(i, i + itemsPerReviewSlide));
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen font-sans bg-soft-yellow text-elegant-black">
      {/* HEADER */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-forest shadow-lg py-3' : 'bg-forest/90 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsLogoExpanded(true)} className="focus:outline-none">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772040777/631503249_18434489383115386_6664719619060335252_n_ofuhpm.jpg" 
                alt="Logo La Garnacha" 
                className="w-10 h-10 rounded-full object-cover border border-soft-yellow/30 hover:scale-110 transition-transform cursor-pointer"
              />
            </button>
            <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-soft-yellow tracking-wide">
              La Garnacha
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#conocenos" className="text-soft-yellow/90 hover:text-white transition-colors font-medium">Conócenos</a>
            <a href="#carta" className="text-soft-yellow/90 hover:text-white transition-colors font-medium">La Carta</a>
            <a href="#resenas" className="text-soft-yellow/90 hover:text-white transition-colors font-medium">Reseñas</a>
            <a href="#contacto" className="text-soft-yellow/90 hover:text-white transition-colors font-medium">Contacto</a>
            <a 
              href="https://wa.me/34655183351" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-terracotta hover:bg-terracotta-dark text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md"
            >
              Reservar Mesa
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-soft-yellow p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-forest border-t border-forest-light/20"
            >
              <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
                <a href="#conocenos" onClick={closeMobileMenu} className="text-soft-yellow/90 hover:text-white py-2 font-medium text-lg">Conócenos</a>
                <a href="#carta" onClick={closeMobileMenu} className="text-soft-yellow/90 hover:text-white py-2 font-medium text-lg">La Carta</a>
                <a href="#resenas" onClick={closeMobileMenu} className="text-soft-yellow/90 hover:text-white py-2 font-medium text-lg">Reseñas</a>
                <a href="#contacto" onClick={closeMobileMenu} className="text-soft-yellow/90 hover:text-white py-2 font-medium text-lg">Contacto</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MODAL DEL LOGO */}
      <AnimatePresence>
        {isLogoExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-elegant-black/90 backdrop-blur-sm"
            onClick={() => setIsLogoExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full aspect-square md:aspect-auto md:h-[80vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsLogoExpanded(false)} 
                className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors"
              >
                <X size={32} />
              </button>
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772040777/631503249_18434489383115386_6664719619060335252_n_ofuhpm.jpg" 
                alt="Logo La Garnacha Ampliado" 
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Comida Mexicana" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-elegant-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 md:w-16 h-[1px] bg-terracotta"></div>
            <span className="text-soft-yellow font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Girona, España</span>
            <div className="w-8 md:w-16 h-[1px] bg-terracotta"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2 tracking-tight leading-none"
          >
            La Garnacha
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl italic text-terracotta mb-6 font-medium"
          >
            Tex Mex
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-soft-yellow/90 mb-12 font-serif italic"
          >
            Sabor auténtico en el corazón de Girona
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <a 
              href="#carta" 
              className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 font-sans font-bold text-sm md:text-base tracking-wider uppercase transition-colors"
            >
              Ver Carta
            </a>
            <a 
              href="https://wa.me/34655183351" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border border-white/50 text-white px-8 py-3 font-sans font-bold text-sm md:text-base tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Reservar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONÓCENOS SECTION */}
      <section id="conocenos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">Conócenos</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Imagen Izquierda */}
            <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772041584/Gemini_Generated_Image_djr9hjdjr9hjdjr9_hblyw4.png" 
                alt="La Garnacha Tex Mex" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Texto Derecha */}
            <div className="flex flex-col justify-center space-y-6 text-lg text-elegant-black/80 font-light leading-relaxed">
              <p>
                <strong className="font-semibold text-forest">La Garnacha Tex Mex</strong> es un restaurante familiar en el que nos esforzamos cada día por traer la mejor calidad en la elaboración de nuestros platos y salsas completamente caseros, siguiendo las recetas auténticamente mexicanas. Nuestro objetivo es llevar ese sabor tradicional al corazón de Girona, en un ambiente vibrante y acogedor.
              </p>
              <p>
                En muchos lugares de México, la palabra <strong className="font-semibold text-terracotta">"Garnacha"</strong> se usa para hacer referencia a los antojitos callejeros. Y si hablamos de la Ciudad de México, esta palabra hace referencia a todo lo que se come en la calle: desde tacos, hamburguesas y tortas, hasta hot dogs, banderillas, etc.
              </p>
              <p className="font-serif text-2xl md:text-3xl text-forest font-bold italic pt-4">
                ¿Qué onda, vamos a Garnachear?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LA CARTA SECTION */}
      <section id="carta" className="py-24 bg-soft-yellow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">La Carta</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto rounded-full"></div>
            <p className="mt-6 text-elegant-black/70 text-lg">Descubre nuestra selección de platos tradicionales y especialidades Tex Mex.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {MENU_DATA.map((section, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(section)}
                  className="relative aspect-square bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col items-center justify-center overflow-hidden group border border-forest/10"
                >
                  <img 
                    src={section.image} 
                    alt={section.category}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/90 via-elegant-black/40 to-transparent"></div>
                  <span className="relative z-10 font-serif font-bold text-white text-center text-lg md:text-xl drop-shadow-md px-2 mt-auto mb-4">{section.category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL DE LA CARTA */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-elegant-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-soft-yellow w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-forest p-6 flex justify-between items-center text-soft-yellow shrink-0">
                <h3 className="font-serif text-2xl md:text-3xl font-bold">{selectedCategory.category}</h3>
                <button onClick={() => setSelectedCategory(null)} className="hover:text-terracotta transition-colors">
                  <X size={32} />
                </button>
              </div>
              
              {/* Content */}
              <div className="overflow-y-auto p-6 md:p-8">
                {/* Items list */}
                <div className="space-y-6">
                  {selectedCategory.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-forest/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl text-elegant-black">{item.name}</h4>
                        <p className="text-elegant-black/70 mt-1">{item.description}</p>
                      </div>
                      <div className="font-serif font-bold text-terracotta text-2xl whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESEÑAS SECTION */}
      <section id="resenas" className="py-24 bg-forest text-soft-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Lo que dicen de nosotros</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto rounded-full mb-8"></div>
            <div className="flex flex-col items-center gap-4 text-xl">
              <div className="flex items-center gap-2">
                <span className="font-bold">4.5</span>
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <div className="relative">
                    <Star size={20} className="text-yellow-400" />
                    <div className="absolute top-0 left-0 overflow-hidden w-1/2 h-full">
                      <Star fill="currentColor" size={20} className="text-yellow-400" />
                    </div>
                  </div>
                </div>
                <span className="text-soft-yellow/80 text-sm ml-2">en Google Reviews</span>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="relative max-w-6xl mx-auto mt-12">
            <div className="overflow-hidden px-2 md:px-12 py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
              >
                {chunkedReviews.map((group, pageIdx) => (
                  <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {group.map((review, idx) => (
                      <div key={idx} className="bg-white text-elegant-black p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold text-lg text-forest">{review.name}</p>
                            <p className="text-sm text-elegant-black/50">{review.time}</p>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                          </div>
                        </div>
                        <p className="text-base font-light leading-relaxed whitespace-pre-line flex-grow">
                          "{review.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Controles */}
            <button 
              onClick={prevReviewSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-forest rounded-full flex items-center justify-center shadow-lg hover:bg-terracotta hover:text-white transition-colors z-10 hidden md:flex"
              aria-label="Anterior reseña"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextReviewSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-forest rounded-full flex items-center justify-center shadow-lg hover:bg-terracotta hover:text-white transition-colors z-10 hidden md:flex"
              aria-label="Siguiente reseña"
            >
              <ChevronRight size={24} />
            </button>

            {/* Puntos indicadores */}
            <div className="flex justify-center gap-3 mt-10">
              {Array.from({ length: totalReviewPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentReviewSlide === idx ? 'bg-terracotta scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Ir a la página ${idx + 1}`}
                />
              ))}
            </div>

            {/* Botón Deja tu reseña */}
            <div className="flex justify-center mt-12">
              <a 
                href="https://www.google.es/maps/place/La+Garnacha+Tex+Mex+-+Girona/@41.9789687,2.8088875,1630m/data=!3m1!1e3!4m8!3m7!1s0x12bae75efdfd4ec7:0xb9cad61eb8034b0c!8m2!3d41.9789647!4d2.8114624!9m1!1b1!16s%2Fg%2F11t3zj5_dk?hl=es&entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-forest hover:bg-soft-yellow px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-lg hover:shadow-xl"
              >
                Deja aquí tu reseña
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO & FOOTER */}
      <footer id="contacto" className="bg-elegant-black text-soft-yellow/80 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Left Column: Brand, Contact, Hours */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Brand */}
                <div>
                  <h3 className="font-serif text-3xl font-bold text-soft-yellow mb-6">La Garnacha</h3>
                  <p className="mb-6 font-light">Sabor auténtico Tex Mex en el corazón de Girona. Ven a disfrutar de la verdadera gastronomía mexicana.</p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/lagarnachatexmex/?hl=es" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors text-white">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.facebook.com/p/La-Garnacha-Tex-Mex-100083066206054/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors text-white">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-serif text-xl font-semibold text-soft-yellow mb-6">Contacto</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="text-terracotta shrink-0 mt-1" size={20} />
                      <span>Carrer del Riu Güell, 101, Baixos 1,<br/>17005 Girona</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="text-terracotta shrink-0" size={20} />
                      <div>
                        <a href="tel:872930480" className="block hover:text-white transition-colors">872 930 480</a>
                        <a href="tel:655183351" className="block hover:text-white transition-colors">655 183 351</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hours (Horizontal) */}
              <div>
                <h4 className="font-serif text-xl font-semibold text-soft-yellow mb-6">Horario</h4>
                <div className="flex flex-wrap gap-3">
                  {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
                    <div key={day} className="flex-1 min-w-[100px] bg-white/5 p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">
                      <span className="block font-medium text-soft-yellow mb-1 text-sm">{day}</span>
                      <div className="text-soft-yellow/80 text-xs">
                        <p>13:00 – 16:30</p>
                        <p>19:30 – 24:00</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Map */}
            <div className="lg:col-span-5 h-[400px] lg:h-auto min-h-[300px]">
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer shadow-2xl">
                <a 
                  href="https://www.google.com/maps/place/La+Garnacha+Tex+Mex+-+Girona/@41.9792137,2.8110421,15.25z/data=!4m6!3m5!1s0x12bae75efdfd4ec7:0xb9cad61eb8034b0c!8m2!3d41.9789647!4d2.8114624!16s%2Fg%2F11t3zj5_dk?hl=es&entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="bg-terracotta text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2">
                    <MapPin size={16} /> Abrir en Google Maps
                  </span>
                </a>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.082531985387!2d2.8126154!3d41.976985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae72782b68cb7%3A0x6a2c270b2d6a5e1a!2sCarrer%20del%20Riu%20G%C3%BCell%2C%20101%2C%2017005%20Girona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación La Garnacha"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm font-light">
            <p>&copy; {new Date().getFullYear()} La Garnacha Tex Mex. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE BUTTON */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/34655183351" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-terracotta text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-terracotta-dark transition-colors"
          aria-label="Reservar Mesa por WhatsApp"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}
