import { Download } from "lucide-react";
import Button from "./ui/Button.js";

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8 text-primary" src="/img/logo.png"/>
              <span className="ml-2 text-xl font-bold text-gray-900">Template</span>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#products" className="inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium text-gray-900">
                Products
              </a>
              <a href="#features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Features
              </a>
              <a href="#partners" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Partners
              </a>
              <a href="#about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                About Us
              </a>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button 
                variant="secondary"
                size="sm"
                onClick={() => window.open('/caminho/do/seu/catalogo.pdf')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Catalog
              </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;