
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">PRIVACY POLICY</h1>
      <p className="text-center text-gray-600 mb-8">(ai sensi dell’art. 13 del Regolamento UE 2016/679 – GDPR)</p>
      <p className="text-sm text-gray-500 mb-10 text-right">Ultimo aggiornamento: 03/03/2026</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Titolare del Trattamento</h2>
          <p className="text-gray-700 leading-relaxed">
            Il Titolare del trattamento è:
            <br />
            <strong>Omar Ferrelli</strong>
            <br />
            Titolare di Traslochi Ferrelli
            <br />
            Sede legale: Via Alessandro Manzoni 23, 23877 Paderno d’Adda (LC), Italia
            <br />
            Email: <a href="mailto:traslochiferrelli@gmail.com" className="text-orange-600 hover:underline">traslochiferrelli@gmail.com</a>
            <br />
            Sito web: <a href="https://www.traslochiferrelli.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">https://www.traslochiferrelli.com/</a>
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Il trattamento dei dati personali avviene nel rispetto del Regolamento Generale sulla Protezione dei Dati.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">2. Tipologie di dati raccolti</h2>
          <p className="text-gray-700 leading-relaxed">
            Attraverso il sito web possono essere raccolti:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Indirizzo di partenza/destinazione del trasloco (se indicato nel messaggio)</li>
            <li>Dati inseriti nel modulo contatti</li>
            <li>Dati tecnici di navigazione (indirizzo IP, dati tecnici del browser)</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Il sito utilizza esclusivamente il modulo contatti per la raccolta dei dati personali.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Finalità del trattamento</h2>
          <p className="text-gray-700 leading-relaxed">
            I dati personali sono trattati per:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
            <li>Rispondere a richieste di informazioni o preventivi</li>
            <li>Ricontattare l’utente per fornire servizi di trasloco</li>
            <li>Adempiere ad eventuali obblighi legali o fiscali</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I dati non saranno utilizzati per finalità di marketing senza consenso esplicito dell’interessato.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Base giuridica del trattamento</h2>
          <p className="text-gray-700 leading-relaxed">
            Il trattamento si basa su:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
            <li>Richiesta dell’interessato (misure precontrattuali)</li>
            <li>Consenso espresso tramite invio del modulo</li>
            <li>Adempimento di obblighi di legge</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Modalità di trattamento</h2>
          <p className="text-gray-700 leading-relaxed">
            Il trattamento avviene mediante strumenti informatici e telematici, adottando misure di sicurezza adeguate per garantire la protezione dei dati e prevenire accessi non autorizzati.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Conservazione dei dati</h2>
          <p className="text-gray-700 leading-relaxed">
            I dati saranno conservati:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
            <li>Per il tempo necessario a rispondere alla richiesta</li>
            <li>Per eventuali obblighi fiscali/amministrativi previsti dalla legge</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">7. Comunicazione dei dati</h2>
          <p className="text-gray-700 leading-relaxed">
            I dati potranno essere comunicati a:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
            <li>Consulenti fiscali o commercialisti</li>
            <li>Fornitori di servizi informatici (hosting del sito, provider email)</li>
            <li>Autorità competenti nei casi previsti dalla legge</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I dati non saranno diffusi né ceduti a terzi per finalità commerciali.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">8. Trasferimento dati extra UE</h2>
          <p className="text-gray-700 leading-relaxed">
            Qualora i servizi di hosting o email comportino trasferimento di dati verso paesi extra UE, ciò avverrà nel rispetto delle garanzie previste dal GDPR.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">9. Diritti dell’interessato</h2>
          <p className="text-gray-700 leading-relaxed">
            Ai sensi degli artt. 15-22 del GDPR, l’interessato ha diritto di:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
            <li>Accedere ai propri dati</li>
            <li>Chiederne la rettifica o cancellazione</li>
            <li>Limitare o opporsi al trattamento</li>
            <li>Revocare il consenso</li>
            <li>Richiedere la portabilità dei dati</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Le richieste possono essere inviate a: <a href="mailto:traslochiferrelli@gmail.com" className="text-orange-600 hover:underline">traslochiferrelli@gmail.com</a>
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            È possibile proporre reclamo al Garante per la Protezione dei Dati Personali.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">10. Cookie</h2>
          <p className="text-gray-700 leading-relaxed">
            Il sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento. Non vengono utilizzati cookie di profilazione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
