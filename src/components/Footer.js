import { 
    Facebook, 
    Instagram, 
    Twitter, 
    Linkedin 
  } from "lucide-react";
  
  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Returns & Warranty", href: "#" },
    { name: "FAQs", href: "#" },
  ];
  
  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ];
  
  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Licenses", href: "#" },
  ];
  
  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-6 w-6" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-6 w-6" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-6 w-6" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, href: "#" },
  ];
  
   function Footer() {
    return (
      <footer className="bg-gray-800" id="about">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                  <img className="h-8 w-8 text-primary" src="/img/logo.png"/>
                  <span className="ml-2 text-xl font-bold text-white">Template</span>
              </div>
              <p className="text-gray-300 text-base">
                Making quality products accessible to everyone. Innovation that matters.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className="text-gray-400 hover:text-gray-300"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <ul className="mt-4 space-y-4"></ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {supportLinks.map((item) => (
                      <li key={item.name}>
                          {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {companyLinks.map((item) => (
                      <li key={item.name}>
                          {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {legalLinks.map((item) => (
                      <li key={item.name}>
                          {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} ProductScope, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  
  export default Footer;