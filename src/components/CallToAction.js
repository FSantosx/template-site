import Button from "./ui/button";
import { Download, Phone } from "lucide-react";

function CallToAction() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to try our products?</span>
          <span className="block text-blue-100">Get our catalog today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <Button variant="secondary" className="font-medium">
            <Download className="mr-2 h-4 w-4" />
            Download Catalog
          </Button>
          <Button variant="default" className="ml-3 font-medium bg-blue-700 hover:bg-blue-800">
            <Phone className="mr-2 h-4 w-4" />
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
