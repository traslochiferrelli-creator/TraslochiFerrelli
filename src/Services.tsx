
import React from 'react';
import { Truck, Building2, Package, Warehouse, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const allServices = [
    {
      id: 'nazionali',
      title: 'Traslochi Nazionali',
      icon: <Truck className="w-12 h-12 text-orange-600" />,
      image: '/images/nazionali.webp',
      description: 'Traslochi sicuri e professionali in tutta Italia. Gestiamo ogni fase del viaggio, dalla partenza alla consegna finale.',
      features: ['Copertura nazionale completa', 'Assicurazione All-Risk', 'Personale qualificato', 'Monitoraggio del carico']
    },
    {
      id: 'aziendali',
      title: 'Traslochi Aziendali e Uffici',
      icon: <Building2 className="w-12 h-12 text-orange-600" />,
      image: '/images/ufficio.jpg',
      description: 'Soluzioni personalizzate per aziende. Minimizziamo i tempi di fermo operativo per una ripartenza veloce del vostro business.',
      features: ['Spostamento archivi e server', 'Smontaggio e rimontaggio postazioni', 'Pianificazione logistica', 'Interventi fuori orario']
    },
    {
      id: 'imballaggio',
      title: 'Imballaggio e Smontaggio',
      icon: <Package className="w-12 h-12 text-orange-600" />,
      image: '/images/smontaggio.jpg',
      description: 'Protezione totale dei vostri beni con materiali di alta qualità. I nostri tecnici si occupano dello smontaggio e rimontaggio dei mobili più complessi.',
      features: ['Scatole e imballi protettivi', 'Protezione mobili antichi', 'Etichettatura sistematica', 'Rimontaggio professionale']
    },
    {
      id: 'deposito',
      title: 'Deposito Mobili Temporaneo',
      icon: <Warehouse className="w-12 h-12 text-orange-600" />,
      image: '/images/deposito.avif',
      description: 'Spazi sicuri, asciutti e videosorvegliati per la custodia temporanea dei vostri arredi durante i lavori o i periodi di transizione.',
      features: ['Videosorveglianza 24/7', 'Ambienti climatizzati', 'Accesso flessibile', 'Prezzi competitivi']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Placeholder for Navigation - This will be handled in App.tsx routing */}
      
      {/* Hero Services Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Nostri Servizi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo soluzioni complete per ogni tipo di trasloco, garantendo massima cura, puntualità e professionalità in ogni fase.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {allServices.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <div className="bg-orange-50 p-6 rounded-2xl inline-block mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link 
                      to="/#preventivo" 
                      className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                    >
                      Richiedi preventivo per questo servizio
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={(service as any).image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover aspect-video hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Hai bisogno di un servizio su misura?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-orange-50">
            Contattaci per una consulenza gratuita. Valuteremo insieme la soluzione migliore per le tue esigenze di trasloco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3518620738" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition text-lg">
              Chiamaci ora
            </a>
            <Link to="/#preventivo" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition text-lg">
              Scrivici un messaggio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer link to home */}
      <div className="py-10 text-center">
        <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium underline underline-offset-4">
          Torna alla home page
        </Link>
      </div>
    </div>
  );
};

export default Services;
