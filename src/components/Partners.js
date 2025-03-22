import { useState, useEffect } from "react";
import { clients } from "../../data/partners";

function Partners() {
    const [partners, setPartners] = useState([]);

    const getPartners = () => {
        const arrPartners = [];
        clients.forEach((partner) => {
            arrPartners.push(partner);
        });

        arrPartners.sort((a,b) => a > b);
        setPartners(arrPartners);
    }
    
    useEffect(() => {
        getPartners();
    }, []);

  
    return (
      <section id="partners" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Trusted Partners
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We collaborate with industry leaders to bring you the best quality products.
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {
              partners.map((partner) => (
                <div key={partner.id} className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 rounded-lg">
                  <img className="max-h-12" src={partner.logo} alt={partner.name} />
                </div>
                ))
            }
          </div>
        </div>
      </section>
      )
}

export default Partners;
