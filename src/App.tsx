import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import Services from './Services';

import { Phone, Mail, MapPin, Package, Building2, Home, Warehouse, Truck, Star, Menu, X, Check, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    cittaPartenza: '',
    cittaDestinazione: '',
    dataTrasloco: '',
    tipoAbitazione: '',
    servizi: {
      imballaggio: false,
      smontaggio: false,
      deposito: false,
      trasporto: false,
    },
    note: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (servizio: string) => {
    setFormData(prev => ({
      ...prev,
      servizi: {
        ...prev.servizi,
        [servizio]: !prev.servizi[servizio as keyof typeof prev.servizi],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviziSelezionati = Object.entries(formData.servizi)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(', ');

    const mailtoLink = `mailto:traslochiferrelli@gmail.com?subject=Richiesta Preventivo&body=Nome: ${formData.nome}%0D%0AEmail: ${formData.email}%0D%0ATelefono: ${formData.telefono}%0D%0ACittà di partenza: ${formData.cittaPartenza}%0D%0ACittà di destinazione: ${formData.cittaDestinazione}%0D%0AData trasloco: ${formData.dataTrasloco}%0D%0ATipo abitazione: ${formData.tipoAbitazione}%0D%0AServizi: ${serviziSelezionati}%0D%0ANote: ${formData.note}`;

    window.location.href = mailtoLink;
  };

  return (
    <Router>
      <AppContent 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
      />
    </Router>
  );
};

interface AppContentProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: any;
  handleInputChange: any;
  handleCheckboxChange: any;
  handleSubmit: any;
}

const AppContent: React.FC<AppContentProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen,
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleSubmit
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
      // We might need a small delay or a useEffect to scroll after navigation
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Effect to handle scrolling when navigating back to home with a hash
  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="fixed w-full top-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3" onClick={() => scrollToSection('home')}>
            <img src="/images/Logo TraslochiFerrelli 1.jpeg" alt="Logo" className="w-16 h-16 object-contain rounded-md" />
            <span className="text-2xl font-bold uppercase tracking-wide"><span className="text-gray-900">TRASLOCHI</span> <span className="text-orange-600">FERRELLI</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition">Home</button>
            <Link to="/servizi" className="text-gray-700 hover:text-orange-600 transition">Servizi</Link>
            <button onClick={() => scrollToSection('preventivo')} className="text-gray-700 hover:text-orange-600 transition">Preventivo</button>
            <button onClick={() => scrollToSection('contatti')} className="text-gray-700 hover:text-orange-600 transition">Contatti</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition">Home</button>
              <Link to="/servizi" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-orange-600 transition">Servizi</Link>
              <button onClick={() => scrollToSection('preventivo')} className="text-left text-gray-700 hover:text-orange-600 transition">Preventivo</button>
              <button onClick={() => scrollToSection('contatti')} className="text-left text-gray-700 hover:text-orange-600 transition">Contatti</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20"> {/* Add padding for fixed header */}
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section id="home" className="pb-32 bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/home.jpg")' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 pt-10">
                  <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                      <div className="w-full md:w-3/4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                          Traslochi Ferrelli
                        </h1>
                        <p className="text-2xl md:text-3xl text-orange-400 font-semibold mb-6 drop-shadow-md">
                          Traslochi rapidi, sicuri e convenienti in tutta Italia
                        </p>
                        <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                          Affidati a professionisti del trasloco con anni di esperienza. Ti aiutiamo a spostarti senza stress, ovunque tu voglia.
                        </p>
                        <button
                          onClick={() => scrollToSection('preventivo')}
                          className="bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105 shadow-lg"
                        >
                          Richiedi un Preventivo Gratuito
                        </button>

                        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
                          <a href="tel:3518620738" className="flex items-center gap-3 text-white hover:text-orange-400 transition group">
                            <div className="bg-orange-600 p-3 rounded-full group-hover:bg-orange-500 transition">
                              <Phone className="w-6 h-6" />
                            </div>
                            <span className="text-lg font-semibold">351 862 0738</span>
                          </a>
                          <a href="mailto:traslochiferrelli@gmail.com" className="flex items-center gap-3 text-white hover:text-orange-400 transition group">
                            <div className="bg-orange-600 p-3 rounded-full group-hover:bg-orange-500 transition">
                              <Mail className="w-6 h-6" />
                            </div>
                            <span className="text-lg">traslochiferrelli@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Chi Siamo Section */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                      <div className="md:w-1/2">
                        <img 
                          src="/images/home2.jpg" 
                          alt="Traslochi Ferrelli Team" 
                          className="rounded-xl shadow-xl w-full h-auto object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                          Esperienza, Professionalità e Cura per i tuoi Traslochi
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Da oltre 10 anni Traslochi Ferrelli offre servizi di trasloco completi per abitazioni, uffici e aziende.
                          Il nostro team si occupa di ogni dettaglio: imballaggio, smontaggio e rimontaggio mobili, trasporto e pulizia post-trasloco.
                          Ci distinguiamo per puntualità, precisione e attenzione ai beni dei nostri clienti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Servizi Section */}
              <section id="servizi" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Servizi di Trasloco su Misura
                  </h2>
                  <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Offriamo soluzioni professionali per ogni tipo di esigenza. Clicca per scoprire i dettagli di ogni servizio.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {/* Servizio 1 */}
                    <Link to="/servizi" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group overflow-hidden flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img src="/images/nazionali.webp" alt="Traslochi Nazionali" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      </div>
                      <div className="p-8 text-left">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-orange-100 p-4 rounded-lg group-hover:bg-orange-600 transition">
                            <Truck className="w-8 h-8 text-orange-600 group-hover:text-white transition" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Traslochi Nazionali</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Da nord a sud, trasportiamo i tuoi beni con sicurezza e tracciabilità.
                        </p>
                      </div>
                    </Link>

                    {/* Servizio 2 */}
                    <Link to="/servizi" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group overflow-hidden flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img src="/images/ufficio.jpg" alt="Traslochi Aziendali" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      </div>
                      <div className="p-8 text-left">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-orange-100 p-4 rounded-lg group-hover:bg-orange-600 transition">
                            <Building2 className="w-8 h-8 text-orange-600 group-hover:text-white transition" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Traslochi Aziendali e Uffici</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Minimizziamo i tempi di fermo per garantire la continuità del tuo lavoro.
                        </p>
                      </div>
                    </Link>

                    {/* Servizio 3 */}
                    <Link to="/servizi" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group overflow-hidden flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img src="/images/smontaggio.jpg" alt="Imballaggio e Smontaggio" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      </div>
                      <div className="p-8 text-left">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-orange-100 p-4 rounded-lg group-hover:bg-orange-600 transition">
                            <Package className="w-8 h-8 text-orange-600 group-hover:text-white transition" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Imballaggio e Smontaggio Mobili</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Proteggiamo tutto con materiali professionali e rimontiamo con cura.
                        </p>
                      </div>
                    </Link>

                    {/* Servizio 4 */}
                    <Link to="/servizi" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group overflow-hidden flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img src="/images/deposito.avif" alt="Deposito Mobili" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      </div>
                      <div className="p-8 text-left">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-orange-100 p-4 rounded-lg group-hover:bg-orange-600 transition">
                            <Warehouse className="w-8 h-8 text-orange-600 group-hover:text-white transition" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Deposito Mobili Temporaneo</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Spazio sicuro per conservare mobili e oggetti durante il trasloco.
                        </p>
                      </div>
                    </Link>
                  </div>
                  
                  <Link 
                    to="/servizi" 
                    className="inline-flex items-center gap-2 text-orange-600 font-bold text-lg hover:gap-4 transition-all"
                  >
                    Scopri tutti i servizi in dettaglio
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </section>

              {/* Form Preventivo */}
              <section id="preventivo" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                      Richiedi Subito un Preventivo Gratuito
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 text-center">
                      Compila il modulo e ti risponderemo entro 24 ore con un preventivo personalizzato.
                    </p>

                    <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Nome e Cognome *</label>
                          <input
                            type="text"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Numero di telefono *</label>
                          <input
                            type="tel"
                            name="telefono"
                            required
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Data del trasloco</label>
                          <input
                            type="date"
                            name="dataTrasloco"
                            value={formData.dataTrasloco}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Città di partenza</label>
                          <input
                            type="text"
                            name="cittaPartenza"
                            value={formData.cittaPartenza}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Città di destinazione</label>
                          <input
                            type="text"
                            name="cittaDestinazione"
                            value={formData.cittaDestinazione}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Tipo di abitazione</label>
                        <select
                          name="tipoAbitazione"
                          value={formData.tipoAbitazione}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        >
                          <option value="">Seleziona</option>
                          <option value="Appartamento">Appartamento</option>
                          <option value="Villa">Villa</option>
                          <option value="Ufficio">Ufficio</option>
                          <option value="Altro">Altro</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-3">Servizi richiesti</label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.servizi.imballaggio}
                              onChange={() => handleCheckboxChange('imballaggio')}
                              className="w-5 h-5 text-orange-600 focus:ring-orange-600 rounded"
                            />
                            <span className="text-gray-700">Imballaggio</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.servizi.smontaggio}
                              onChange={() => handleCheckboxChange('smontaggio')}
                              className="w-5 h-5 text-orange-600 focus:ring-orange-600 rounded"
                            />
                            <span className="text-gray-700">Smontaggio/Montaggio mobili</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.servizi.deposito}
                              onChange={() => handleCheckboxChange('deposito')}
                              className="w-5 h-5 text-orange-600 focus:ring-orange-600 rounded"
                            />
                            <span className="text-gray-700">Deposito temporaneo</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.servizi.trasporto}
                              onChange={() => handleCheckboxChange('trasporto')}
                              className="w-5 h-5 text-orange-600 focus:ring-orange-600 rounded"
                            />
                            <span className="text-gray-700">Solo trasporto</span>
                          </label>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Note aggiuntive</label>
                        <textarea
                          name="note"
                          rows={4}
                          value={formData.note}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Inserisci eventuali richieste particolari..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        <Check className="w-6 h-6" />
                        Richiedi Preventivo
                      </button>
                    </form>
                  </div>
                </div>
              </section>

              {/* Recensioni */}
              <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                      <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
                          Cosa Dicono i Nostri Clienti
                        </h2>
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex gap-1 mb-4">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              "Trasloco impeccabile, tutto nei tempi previsti e senza danni!"
                            </p>
                            <p className="text-gray-600 font-semibold">— Luca R.</p>
                          </div>

                          <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex gap-1 mb-4">
                              {[1, 2, 3, 4].map((i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="w-5 h-5 text-gray-300" />
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              "Personale gentile e professionale. Consigliatissimo."
                            </p>
                            <p className="text-gray-600 font-semibold">— Marta F.</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 mt-8 md:mt-0">
                        <img 
                          src="/images/home1.jpg" 
                          alt="Traslochi Ferrelli Servizio" 
                          className="rounded-xl shadow-xl w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contatti */}
              <section id="contatti" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    Contattaci Subito
                  </h2>

                  <div className="max-w-2xl mx-auto text-center">
                    <div className="flex flex-col gap-6 mb-12">
                      <a href="tel:3518620738" className="flex items-center justify-center gap-3 text-xl text-gray-700 hover:text-orange-600 transition">
                        <Phone className="w-6 h-6" />
                        <span className="font-semibold">351 862 0738</span>
                      </a>
                      <a href="mailto:traslochiferrelli@gmail.com" className="flex items-center justify-center gap-3 text-xl text-gray-700 hover:text-orange-600 transition">
                        <Mail className="w-6 h-6" />
                        <span>traslochiferrelli@gmail.com</span>
                      </a>
                      <div className="flex items-center justify-center gap-3 text-xl text-gray-700">
                        <MapPin className="w-6 h-6" />
                        <span>Servizio attivo in tutta Italia</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Contatto Rapido</h3>
                      <form className="space-y-4">
                        <input
                          type="text"
                          placeholder="Nome"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        <textarea
                          rows={4}
                          placeholder="Messaggio"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        <button
                          type="submit"
                          className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
                        >
                          Invia Messaggio
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          } />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Truck className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold">Traslochi Ferrelli</span>
            </div>

            <div className="flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-orange-600 transition">Home</button>
              <Link to="/servizi" className="hover:text-orange-600 transition">Servizi</Link>
              <button onClick={() => scrollToSection('preventivo')} className="hover:text-orange-600 transition">Preventivo</button>
              <button onClick={() => scrollToSection('contatti')} className="hover:text-orange-600 transition">Contatti</button>
              <Link to="/privacy" className="hover:text-orange-600 transition">Privacy Policy</Link>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-2">Copyright © 2025 Traslochi Ferrelli</p>
            <p className="text-gray-400 mb-1">Paderno D'adda (LC) 23877 Via Alessandro Manzoni</p>
            <p className="text-gray-400">P.IVA: 03829750136</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/393518620738"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contattaci su WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.87 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.549 4.187 1.59 6.048L0 24l6.135-1.61a11.793 11.793 0 005.915 1.592h.004c6.632 0 12.028-5.391 12.03-12.03a11.85 11.85 0 00-3.48-8.504z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contattaci su WhatsApp
        </span>
      </a>
    </div>
  );
};

export default App;
