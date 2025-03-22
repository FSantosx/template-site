import { slides } from "../../data/sliders";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";

function ProductSlider() {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        }),
        center: {
          x: 0,
          opacity: 1
        },
        exit: (direction) => ({
          x: direction > 0 ? -1000 : 1000,
          opacity: 0
        })
    };

    const next = useCallback(() => {
        if (products.length === 0) return;
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % products.length);
    }, [products.length]);
    
    const prev = useCallback(() => {
        if (products.length === 0) return;
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    }, [products.length]);
    
    const getProducts = () => {
        const arrProducts = [];
        slides.forEach((slide) => {
            console.log(slide)
            arrProducts.push(slide);
        });

        arrProducts.sort((a,b) => a > b);
        setProducts(arrProducts);
    }
    
    useEffect(() => {
        getProducts();
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);

        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="relative">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentSlide}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="lg:flex lg:items-center lg:space-x-8"
                    >
                      <div className="sm:text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                          {slides[currentSlide]?.name}
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          {slides[currentSlide]?.description}
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                          <Button className="px-8 py-3 md:py-4 md:text-lg md:px-10">
                            Learn More
                          </Button>
                          <Button 
                            variant="outline" 
                            className="mt-3 sm:mt-0 sm:ml-3 px-8 py-3 md:py-4 md:text-lg md:px-10"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:w-1/2">
                        <div className="relative px-4 sm:px-0">
                          <img 
                            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:max-h-96 lg:w-auto lg:max-w-none object-cover"
                            src={products[currentSlide]?.image}
                            alt={products[currentSlide]?.name}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="flex justify-center space-x-2 mt-8">
                    {products.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => {
                          setDirection(index > currentSlide ? 1 : -1);
                          setCurrentSlide(index);
                        }}
                        className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ${
                          currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="absolute inset-y-0 left-0 flex items-center z-20">
                    <Button 
                      variant="secondary"
                      size="icon"
                      onClick={prev}
                      className="h-10 w-10 ml-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center z-20">
                    <Button 
                      variant="secondary"
                      size="icon"
                      onClick={next}
                      className="h-10 w-10 mr-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ProductSlider;