export interface TreatmentStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface TreatmentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TreatmentItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  categoryBadge: string;
  shortSummary: string;
  coreParagraphs: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  iconType: "root-canal" | "implant" | "pedodontics" | "prosthesis" | "orthodontics" | "aesthetics";
  featuredImage: string;
  featuredImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  highlights: string[];
  indications: string[];
  processSteps: TreatmentStep[];
  detailedSections: TreatmentSection[];
  postCareTips: string[];
  faqs: TreatmentFAQ[];
  lastUpdated: string;
}

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: "endodonti-kanal-tedavisi",
    slug: "endodonti-kanal-tedavisi",
    title: "Endodonti (Kanal Tedavisi)",
    shortTitle: "Endodonti Kanal Tedavisi",
    categoryBadge: "Koruyucu & Tedavi Edici Diş Hekimliği",
    shortSummary:
      "Dişin iç kısmındaki damar ve sinir dokusunun (pulpa) enfekte olması durumunda, doğal dişi ve çene kemiği dokularını korumak amacıyla uygulanan kök kanal tedavisi.",
    coreParagraphs: [
      "Dişlerin içinde, kılcal kan damarları ve sinirlerin bulunduğu, dişe hayat veren küçük bir odacık (pulpa) vardır. Dişlerin büyümesini ve sürmesini sağlayan bu yapı aynı zamanda çürüme meydana geldiğinde bir uyarı, alarm görevi görmektedir.",
      "Diş çürüğü dişin sert dokularını parçalayarak pulpa odasına kadar ilerlediğinde, diş ağrısı kendini gösterir ve bakterilerin salgıladığı asitler (tedavi edilmez ise) pulpayı etkisiz hale getirir. Böylelikle ortaya çıkan toksinler kök ucundaki dar açıklıktan dışarı sızarak çene kemiğine yayılır.",
      "Çene kemiğinde oluşan iltihap dişin kaybına, çevre dokularının da harabiyetine neden olur. Bu safhaya gelmeden önce dişi ve çevre dokuları korumak için hastalıklı pulpa dokusunun alınması ve kök kanallarının biyouyumlu materyallerle doldurulması en doğru klinik yaklaşımdır.",
    ],
    seoTitle:
      "Kanal Tedavisi Nedir, Nasıl Yapılır, Acıtır mı? | Etimesgut Diş Hekimi",
    seoDescription:
      "Kanal tedavisi hangi durumlarda gerekir, kaç seans sürer, acıtır mı, sonrasında neye dikkat edilir? Etimesgut Güney Ağız ve Diş Sağlığı'ndan net yanıtlar.",
    keywords: [
      "endodonti",
      "kanal tedavisi",
      "pulpa tedavisi",
      "etimesgut kanal tedavisi",
      "ankara endodonti",
      "kök kanal tedavisi nedir",
      "diş siniri tedavisi",
    ],
    iconType: "root-canal",
    featuredImage: "/images/klinikoda.png",
    featuredImageAlt:
      "Güney Ağız ve Diş Sağlığı Polikliniği Endodonti ve Kanal Tedavisi Muayene Odası",
    secondaryImage: "/images/tomografi.webp",
    secondaryImageAlt:
      "Kanal Tedavisi Öncesi Dijital Panoramik Röntgen ve 3D Görüntüleme Cihazı",
    highlights: [
      "Doğal dişin ağızda tutulmasını amaçlayan koruyucu yaklaşım",
      "Dijital radyografi ile kök kanalı boyu ve anatomisinin tespiti",
      "Steril izolasyon protokolleri ve biyouyumlu kanal dolgu materyalleri",
      "Çevre çene kemiği dokularının enfeksiyondan korunması",
    ],
    indications: [
      "Derin diş çürüklerinin pulpa odasına ulaşması",
      "Sıcak ve soğuk uyaranlara karşı uzun süreli hassasiyet ve ağrı",
      "Travma veya darbe sonucu dişin sinir-damar paketinin hasar görmesi",
      "Kök ucunda radyolojik olarak tespit edilen periapikal lezyonlar",
      "İleri kuron veya köprü restorasyonları öncesinde endodontik destek gereksinimi",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Klinik Muayene ve Dijital Radyolojik Değerlendirme",
        description:
          "İlgili dişin kök yapısı, kanal sayısı ve çevre kemik dokusunun durumu dijital röntgen ile ayrıntılı olarak incelenir.",
      },
      {
        stepNumber: "02",
        title: "Lokal Anestezi ve İzolasyon",
        description:
          "İşlem sırasında hasta konforunun sağlanması amacıyla lokal anestezi uygulanır ve diş çevresi steril şekilde izole edilir.",
      },
      {
        stepNumber: "03",
        title: "Enfekte Pulpa Dokusunun Uzaklaştırılması",
        description:
          "Pulpa odası ve kök kanallarındaki enfekte dokular özel endodontik aletlerle temizlenir, kanallar dezenfektan solüsyonlarla yıkanır.",
      },
      {
        stepNumber: "04",
        title: "Kanal Dolgusu ve Üst Restorasyon",
        description:
          "Şekillendirilen kök kanalları doku dostu materyallerle sızdırmaz biçimde doldurulur ve dişin üst yapısı dolgu veya kuron ile restore edilir.",
      },
    ],
    detailedSections: [
      {
        heading: "Pulpa Dokusu ve Diş Sağlığındaki Rolü",
        paragraphs: [
          "Dişin en dış tabakasında mine, onun altında dentin ve en iç merkezde ise yumuşak bağ dokusu olan pulpa yer alır. Pulpa dokusu; sinir lifleri, kan damarları ve bağ dokusu hücrelerinden oluşur. Diş gelişim sürecini tamamladıktan sonra da dişin nemliliğini ve duyu algısını destekler.",
          "Derin çürükler, çatlaklar veya tekrarlayan restoratif işlemler sonucunda bakteriler mine ve dentin tabakasını aşarak pulpa odasına ulaştığında geri dönüşümsüz iltihaplanma (pulpitis) gelişebilir. Endodontik tedavi, bu aşamada dişin çekilmeden ağızda fonksiyon görmeye devam etmesini hedefler.",
        ],
        bullets: [
          "Kök kanallarının mikrobiyolojik olarak arındırılması",
          "Kök ucu (apikal) dokuların iyileşme sürecinin desteklenmesi",
          "Doğal çiğneme kuvvetinin ve komşu diş dengesinin korunması",
        ],
      },
      {
        heading: "Endodontik Tedavi Sonrası Dikkat Edilmesi Gerekenler",
        paragraphs: [
          "Kanal tedavisi tamamlandıktan sonra, özellikle ilk birkaç gün çiğneme sırasında hafif bir hassasiyet görülmesi fizyolojik iyileşme sürecinin doğal bir parçasıdır. Anestezinin etkisi geçene kadar dudak ve yanak ısırmalarını önlemek amacıyla katı gıda tüketilmemelidir.",
          "Tedavi edilen dişin uzun yıllar ağızda sağlıklı kalabilmesi için düzenli diş fırçalama, diş ipi kullanımı ve hekimin önerdiği periyodik radyolojik kontroller aksatılmamalıdır.",
        ],
      },
    ],
    postCareTips: [
      "Anestezi etkisi tamamen geçene kadar (yaklaşık 2-3 saat) yeme-içme işleminden kaçınılmalıdır.",
      "Tedavi seansları arasında geçici dolgu mevcutsa sert ve yapışkan gıdalar ilgili tarafla çiğnenmemelidir.",
      "Günde iki kez florürlü diş macunu ile fırçalama ve arayüz temizliği düzenli sürdürülmelidir.",
      "6 ayda bir rutin diş hekimi kontrolü ile restorasyonun uyumu takip edilmelidir.",
    ],
    faqs: [
      {
        question: "Kanal tedavisi acıtır mı?",
        answer:
          "İşlem lokal anestezi altında yapıldığı için tedavi sırasında ağrı hissedilmez; yalnızca basınç veya titreşim hissi olabilir. Anestezi geçtikten sonra 1-3 gün çiğnerken hafif hassasiyet görülebilir ve genellikle basit ağrı kesicilerle geçer.",
      },
      {
        question: "Kanal tedavisi kaç seans sürer?",
        answer:
          "Dişteki enfeksiyonun durumuna ve kök kanallarının anatomik yapısına bağlı olarak kanal tedavisi tek seansta tamamlanabileceği gibi, kök ucunda aktif enfeksiyon bulunan vakalarda kanal içi ilaç uygulamasıyla 2 veya daha fazla seans sürebilir.",
      },
      {
        question: "Kanal tedavisi yapılan diş tekrar ağrır mı?",
        answer:
          "Tedavi sonrasındaki ilk birkaç gün doku iyileşmesine bağlı hafif hassasiyet oluşabilir. İlerleyen dönemlerde yeni bir çürük veya restorasyon sızıntısı gelişmemesi için ağız hijyenine dikkat edilmesi ve hekim kontrollerinin sürdürülmesi önemlidir.",
      },
      {
        question: "Kanal tedavisi yerine dişi çektirsem olur mu?",
        answer:
          "Çekilen dişin yerine sonradan implant veya köprü gerekir; aksi halde komşu dişler boşluğa doğru kayar ve çiğneme dengesi bozulur. Kurtarılabilecek bir dişte kanal tedavisi genellikle daha az maliyetli ve daha koruyucu seçenektir.",
      },
      {
        question: "Kanal tedavisinden sonra dişe kaplama gerekir mi?",
        answer:
          "Kanal tedavisi gören diş zamanla daha kırılgan hale gelir. Madde kaybı fazla olan azı dişlerinde kırılmayı önlemek için kuron (kaplama) veya onlay önerilir; madde kaybı az olan dişlerde dolgu yeterli olabilir.",
      },
      {
        question: "Doğal dişi kanal tedavisi ile korumak neden önemlidir?",
        answer:
          "Kendi doğal dişiniz çiğneme verimliliği, çene kemiğinin korunması ve komşu dişlerin devrilmesinin önlenmesi açısından en ideal yapıdır. Endodonti, çekim öncesinde dişi kurtarmayı hedefleyen temel koruyucu tedavi dalıdır.",
      },
    ],
    lastUpdated: "02 Kasım 2026",
  },
  {
    id: "implant-tedavisi",
    slug: "implant-tedavisi",
    title: "İmplant Tedavisi (Dental İmplant Uygulamaları)",
    shortTitle: "İmplant Tedavisi",
    categoryBadge: "Oral İmplantoloji & Cerrahi",
    shortSummary:
      "Eksik dişlerin tamamlanması amacıyla komşu dişlere müdahale edilmeden çene kemiğine yerleştirilen biyouyumlu titanyum yapay diş kökü uygulamaları.",
    coreParagraphs: [
      "Dental implant, çekilmiş veya hiç oluşmamış bir dişin kökünün yerini alan, titanyumdan üretilmiş yapay diş köküdür. Çene kemiğine yerleştirilir, birkaç ay içinde kemikle kaynaşır ve üzerine kaplama, köprü ya da protez takılır.",
      "Köprü tedavisinde boşluğun iki yanındaki sağlam dişlerin küçültülmesi gerekir; implantta ise komşu dişlere dokunulmaz. Ayrıca diş çekiminden sonra o bölgede zamanla görülen kemik erimesi, implantın kemiğe ilettiği çiğneme kuvvetiyle yavaşlar.",
      "Tedavinin başarısı büyük ölçüde planlamaya bağlıdır. Klinik içinde çekilen 3D dental tomografi ile kemiğin yüksekliği, genişliği, sinüs ve sinir kanalına olan mesafesi ölçülür; implantın boyu, çapı ve açısı bu ölçülere göre belirlenir.",
    ],
    seoTitle:
      "İmplant Nedir, Nasıl Yapılır, Kimlere Uygulanır? | Etimesgut İmplant",
    seoDescription:
      "İmplant tedavisi aşamaları, iyileşme süresi, ağrı durumu ve kimlere uygun olduğu. Etimesgut Güney Ağız ve Diş Sağlığı'nda 3D tomografi ile implant planlaması.",
    keywords: [
      "implant tedavisi",
      "dental implant nedir",
      "etimesgut implant",
      "ankara diş implantı",
      "titanyum implant",
      "eksik diş tedavisi",
      "3d tomografi implant planlama",
    ],
    iconType: "implant",
    featuredImage: "/images/tomografi.webp",
    featuredImageAlt:
      "Dental İmplant Planlamasında Kullanılan 3D Dental Tomografi ve Dijital Röntgen Cihazı",
    secondaryImage: "/images/klinikoda2.webp",
    secondaryImageAlt:
      "Güney Ağız ve Diş Sağlığı Steril İmplant ve Cerrahi Uygulama Ünitesi",
    highlights: [
      "Sağlam komşu dişlerin kesilmesine (küçültülmesine) gerek duyulmaması",
      "3 Boyutlu Dental Tomografi (CBCT) ile milimetrik kemik hacmi analizi",
      "Biyouyumlu titanyum materyal ile çene kemiği uyumu (Osteointegrasyon)",
      "Tek diş eksikliğinden tam dişsizliğe kadar geniş klinik uygulama alanı",
    ],
    indications: [
      "Tek diş eksikliği bulunan ve komşu sağlam dişlerin korunması hedeflenen durumlar",
      "Birden fazla diş eksikliğinde sabit köprü protezi için dayanak oluşturulması",
      "Tam dişsiz çenelerde sabit protez veya hareketli protez tutuculuğunun artırılması",
      "Kemik gelişimini tamamlamış ve genel sağlık durumu cerrahi işleme uygun bireyler",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Klinik Muayene ve 3D Tomografi Analizi",
        description:
          "Panoramik röntgen ve 3 boyutlu dental tomografi ile çene kemiğinin kalınlığı, yüksekliği ve anatomik komşulukları detaylı olarak ölçülür.",
      },
      {
        stepNumber: "02",
        title: "Kişiye Özel İmplant Planlaması",
        description:
          "Eksik diş bölgesine uygulanacak implantın çapı, boyu, açısı ve üzerine gelecek protetik yapı hekim tarafından planlanır.",
      },
      {
        stepNumber: "03",
        title: "Steril Cerrahi Uygulama",
        description:
          "Lokal anestezi altında, steril klinik koşullarda titanyum implant çene kemiğinde hazırlanan yuvaya yerleştirilir.",
      },
      {
        stepNumber: "04",
        title: "Kemik Kaynaşması (Osteointegrasyon) ve Protez Aşaması",
        description:
          "İmplantın çene kemiği ile biyolojik kaynaşma süreci tamamlandıktan sonra ölçü alınarak sabit veya hareketli üst protez yerleştirilir.",
      },
    ],
    detailedSections: [
      {
        heading: "Dental İmplant Yapısı ve Osteointegrasyon Süreci",
        paragraphs: [
          "Dental implantlar; çene kemiği içerisine yerleştirilen titanyum kök parçası (fikstür), protez ile implant arasındaki bağlantıyı sağlayan ara parça (abutment) ve ağız içinde görünen kuron/protez olmak üzere üç temel bileşenden oluşur.",
          "Titanyum, insan vücudu tarafından doku dostu olarak kabul edilen biyouyumlu bir metaldir. İmplant yerleştirildikten sonra kemik hücreleri titanyum yüzeye tutunarak biyolojik bir bağ (osteointegrasyon) oluşturur. Bu süreç aynı zamanda diş çekimi sonrasında görülebilen çene kemiği erimesinin (rezorpsiyon) yavaşlatılmasına da katkıda bulunur.",
        ],
        bullets: [
          "3D Dental Tomografi ile sinüs boşlukları ve sinir kanallarının güvenli tespiti",
          "Doku dostu, uluslararası standartlarda sertifikalı titanyum yüzey teknolojisi",
          "Doğal diş kökünü taklit eden biyomekanik kuvvet dağılımı",
        ],
      },
      {
        heading: "İmplant Tedavisi Sonrası Ağız Hijyeni ve Kontroller",
        paragraphs: [
          "İmplant üstü protezler tamamlandıktan sonra, tıpkı doğal dişlerde olduğu gibi implant çevresi diş eti sağlığının korunması büyük önem taşır. Düzenli fırçalama, arayüz fırçası ve diş ipi kullanımı ile periyodik hekim kontrolleri implantın uzun ömürlü olmasını destekleyen temel faktörlerdir.",
        ],
      },
    ],
    postCareTips: [
      "Cerrahi işlem sonrasındaki ilk 24 saat sıcak yiyecek ve içeceklerden kaçınılmalı, önerilen soğuk kompres uygulanmalıdır.",
      "Hekimin reçete ettiği ilaçlar ve antiseptik gargaralar belirtilen düzen ve sürede kullanılmalıdır.",
      "İyileşme döneminde sigara ve tütün ürünlerinden uzak durulması doku iyileşmesi için kritik önem taşır.",
      "İmplant üstü protezler teslim edildikten sonra arayüz fırçası kullanımı ve 6 aylık radyolojik kontroller ihmal edilmemelidir.",
    ],
    faqs: [
      {
        question: "İmplant tedavisi kimlere uygulanabilir?",
        answer:
          "Kemik gelişimini tamamlamış (genellikle 18 yaş üstü), genel sağlık durumu uygun ve çene kemiği hacmi yeterli olan bireylere uygulanabilir. Sistemik rahatsızlığı (diyabet, hipertansiyon vb.) olan hastalarda ilgili tıp hekimi konsültasyonu ile süreç planlanır.",
      },
      {
        question: "İmplant yerleştirildikten sonra protez ne zaman takılır?",
        answer:
          "Titanyum implantın çene kemiği ile kaynaşması (osteointegrasyon) alt çenede ortalama 2-3 ay, üst çenede ise kemik yoğunluğuna bağlı olarak 3-4 ay sürmektedir. İleri kemik tozu (greft) uygulanan vakalarda bu süre hekim tarafından ayrıca belirlenir.",
      },
      {
        question: "İmplant takılırken acı hissedilir mi?",
        answer:
          "İmplant lokal anestezi altında yerleştirilir ve işlem sırasında ağrı hissedilmez. Tek implant genellikle 20-40 dakika sürer. Sonraki 2-3 gün hafif şişlik ve hassasiyet olabilir; hekimin önerdiği ilaçlar ve soğuk uygulama ile kontrol altına alınır.",
      },
      {
        question: "Kemiği yetersiz olanlara implant yapılabilir mi?",
        answer:
          "Çoğu durumda evet. Kemik hacmi yetersizse kemik tozu (greft) ile bölge desteklenebilir, üst arka bölgede sinüs tabanı yükseltilebilir ya da daha kısa/ince implantlar seçilebilir. Hangi yöntemin gerektiği 3D tomografi ile belirlenir.",
      },
      {
        question: "Sigara implantı etkiler mi?",
        answer:
          "Evet. Sigara kan dolaşımını azaltarak implantın kemikle kaynaşmasını zorlaştırır ve implant çevresi enfeksiyon riskini artırır. İşlemden önce ve iyileşme döneminde sigaranın bırakılması ya da en aza indirilmesi önerilir.",
      },
      {
        question: "İmplant tedavisinde komşu dişler kesilir mi?",
        answer:
          "Hayır. İmplant tedavisinin en önemli koruyucu özelliği, boşluğun yanındaki sağlam komşu dişlere hiçbir işlem veya kesim yapılmadan yalnızca eksik diş bölgesinin tamamlanmasıdır.",
      },
    ],
    lastUpdated: "02 Kasım 2026",
  },
  {
    id: "pedodonti",
    slug: "pedodonti",
    title: "Pedodonti (Çocuk Diş Hekimliği)",
    shortTitle: "Pedodonti",
    categoryBadge: "Bebek, Çocuk & Koruyucu Diş Hekimliği",
    shortSummary:
      "Bebeklerin, çocukların ve özel bakım gerektiren bireylerin süt ve daimi diş sağlığını koruyan, diş hekimi korkusunu önlemeyi amaçlayan uzmanlık dalı.",
    coreParagraphs: [
      "Pedodonti (çocuk diş hekimliği), bebeklik döneminden ergenliğin sonuna kadar süt ve daimi dişlerin korunması ve tedavisiyle ilgilenen diş hekimliği dalıdır. Amacı yalnızca çürükleri tedavi etmek değil, çürük oluşmadan önlemek ve çocuğun diş hekimine karşı olumlu bir tutum geliştirmesini sağlamaktır.",
      "Çocuklarda ilk deneyim belirleyicidir. Bu nedenle tedavi, çocuğun aletleri tanıdığı 'anlat-göster-uygula' yöntemiyle ve kolaydan zora doğru kademeli seanslarla planlanır. Ağrı başlamadan yapılan kontroller, çocuğun diş hekimini ağrıyla değil rutin bir kontrolle tanımasını sağlar.",
      "Muayenede çocuğun çürük riski; beslenme, fırçalama alışkanlığı ve mevcut diş durumuna göre değerlendirilir. Riske göre fissür örtücü, flor vernik ve kontrol aralığı belirlenir.",
    ],
    seoTitle:
      "Çocuk Diş Hekimi (Pedodonti) Etimesgut | Süt Dişi, Fissür Örtücü, Flor",
    seoDescription:
      "Çocuklarda ilk diş muayenesi ne zaman yapılır, süt dişi çürüğü tedavi edilmeli mi, fissür örtücü ve flor nedir? Etimesgut Güney Ağız ve Diş Sağlığı.",
    keywords: [
      "pedodonti",
      "çocuk diş hekimliği",
      "etimesgut çocuk diş hekimi",
      "ankara pedodonti",
      "süt dişi tedavisi",
      "fissür örtücü",
      "çocuklarda diş korkusu",
    ],
    iconType: "pedodontics",
    featuredImage: "/images/klinikoda2.webp",
    featuredImageAlt:
      "Güney Ağız ve Diş Sağlığı Çocuk Diş Hekimliği (Pedodonti) Muayene Ünitesi",
    secondaryImage: "/images/klinikoda.png",
    secondaryImageAlt:
      "Ferah ve Aydınlık Çocuk Diş Muayene Odası",
    highlights: [
      "'Önce dişi değil, çocuğu düşün' ilkesiyle güven odaklı iletişim",
      "Diş hekimi korkusu (dental fobi) oluşumunu önleyici kademeli yaklaşım",
      "Çürük risk analizine göre bireye özgü koruyucu programlar (Fissür Örtücü & Flor)",
      "Süt dişlerinin korunması ve erken süt dişi kayıplarında yer tutucu uygulamaları",
    ],
    indications: [
      "İlk süt dişinin sürmesinden (6-12 ay) itibaren periyodik koruyucu kontroller",
      "Süt ve genç daimi dişlerde çürük önleyici fissür örtücü ve yerel flor uygulamaları",
      "Süt dişi dolguları, amputasyon ve çocuk kanal tedavileri",
      "Erken kaybedilen süt dişlerinin yerini koruyan sabit veya hareketli yer tutucular",
      "Düşme veya çarpma sonucu gelişen çocukluk çağı diş travmalarının takibi",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Tanışma ve Klinik Ortama Uyum (Anlat-Göster-Uygula)",
        description:
          "İlk randevuda çocuğun klinik ortamı ve aletleri tanıması sağlanarak güven ilişkisi kurulur.",
      },
      {
        stepNumber: "02",
        title: "Çürük Risk Grubu ve Gelişim Değerlendirmesi",
        description:
          "Süt ve daimi dişlerin sürme zamanları, çene gelişimi ve çocuğun beslenme/fırçalama alışkanlıkları değerlendirilir.",
      },
      {
        stepNumber: "03",
        title: "Koruyucu Uygulamalar ve Kademeli Tedavi",
        description:
          "Kolaydan zora doğru planlanan seanslarla koruyucu uygulamalar (fissür örtücü vb.) ve gerekli restoratif tedaviler gerçekleştirilir.",
      },
      {
        stepNumber: "04",
        title: "Aile Bilgilendirmesi ve Periyodik Takip",
        description:
          "Çocuğa ve ebeveynlere doğru diş fırçalama eğitimi verilerek 4-6 aylık periyodik kontrol takvimi oluşturulur.",
      },
    ],
    detailedSections: [
      {
        heading: "Süt Dişlerinin Korunması Neden Önemlidir?",
        paragraphs: [
          "Toplam 20 adet olan süt dişleri, çocuğun büyüme ve gelişim çağında beslenmesini sağlamanın yanı sıra konuşmanın doğru gelişimi ve alttan gelecek daimi dişlere rehberlik edilmesi açısından hayati görev üstlenir.",
          "'Nasıl olsa değişecek' düşüncesiyle tedavi edilmeyen süt dişi çürükleri; ağrıya, enfeksiyona, alttaki daimi diş tomurcuğunun zarar görmesine ve erken süt dişi kaybı sonucu ileride ortodontik çapraşıklıklara yol açabilir.",
        ],
        bullets: [
          "Fissür Örtücü (Diş Aşısı): Azı dişlerinin girintili yüzeylerini kapatarak çürük oluşumunu önlemeye yardımcı olur.",
          "Yer Tutucu Apareyler: Erken kaybedilen süt dişinin boşluğunu koruyarak daimi dişin doğru yerden sürmesini destekler.",
          "Diş Fırçalama ve Beslenme Eğitimi: Çocukta ömür boyu sürecek ağız hijyeni bilinci oluşturur.",
        ],
      },
    ],
    postCareTips: [
      "Çocuğunuzu diş hekimi randevusuna getirmeden önce 'iğne, acı, korkma' gibi kaygı uyandırabilecek ifadeler kullanılmamalıdır.",
      "İlk süt dişi sürdüğü andan itibaren yaş grubuna uygun fırça ile ebeveyn gözetiminde temizlik yapılmalıdır.",
      "Gece yatmadan önce biberonla süt veya şekerli sıvı tüketimi (biberon çürüğü riski) sınırlandırılmalıdır.",
      "Herhangi bir ağrı beklenmeden 6 ayda bir düzenli pedodontik kontrol yapılmalıdır.",
    ],
    faqs: [
      {
        question: "Çocuklarda ilk diş muayenesi ne zaman yapılmalıdır?",
        answer:
          "İlk muayenenin ilk süt dişi sürdükten sonra ve en geç 1 yaşında yapılması önerilir. Bu ziyarette genellikle tedavi yapılmaz; dişlerin gelişimi kontrol edilir ve ebeveyne fırçalama ile beslenme konusunda bilgi verilir.",
      },
      {
        question: "Süt dişi nasıl olsa düşecek, çürüğü tedavi edilmeli mi?",
        answer:
          "Evet. Tedavi edilmeyen süt dişi çürüğü ağrı ve apseye, alttan gelen daimi dişin zarar görmesine ve erken diş kaybı nedeniyle ileride çapraşıklığa yol açabilir. Bazı azı süt dişleri 10-12 yaşına kadar ağızda kalır.",
      },
      {
        question: "Flor uygulaması nedir, ne sıklıkla yapılır?",
        answer:
          "Flor vernik, diş yüzeyine sürülen ve mineyi asitlere karşı güçlendiren koruyucu bir uygulamadır. Ağrısızdır, birkaç dakika sürer. Çürük riskine göre genellikle 3-6 ayda bir tekrarlanır.",
      },
      {
        question: "Fissür örtücü uygulaması nedir ve hangi dişlere yapılır?",
        answer:
          "Fissür örtücü, dişlerin çiğneme yüzeylerindeki derin olukların akışkan ve koruyucu bir dolgu materyali ile örtülmesi işlemidir. Diş dokusundan aşındırma yapılmadan, ağrısız şekilde uygulanır ve çürük riskini önemli ölçüde azaltır.",
      },
      {
        question: "Süt dişi erken çekilirse ne yapılmalıdır?",
        answer:
          "Süt dişi düşme zamanından önce çekilmek zorunda kalırsa, yanındaki dişlerin boşluğa doğru kaymasını ve alttaki daimi dişin gömülü kalmasını önlemek için 'yer tutucu' adı verilen koruyucu apareyler uygulanır.",
      },
    ],
    lastUpdated: "02 Kasım 2026",
  },
  {
    id: "protez-tedavisi",
    slug: "protez-tedavisi",
    title: "Protez Tedavisi (Sabit ve Hareketli Protezler)",
    shortTitle: "Protez Tedavisi",
    categoryBadge: "Protetik Diş Tedavisi",
    shortSummary:
      "Eksik dişlerin tamamlanması, hasarlı dişlerin restore edilmesi, ağız içi çiğneme işlevselliğinin ve estetik bütünlüğün yeniden kazandırılmasını amaçlayan protetik uygulamalar.",
    coreParagraphs: [
      "Protetik tedavi (Protezler), her türlü dişsizliğin giderilmesi, hasarlı dişlerin restore edilmesi, ağız içi işlevselliğin ve estetiğin kazandırılmasını amaçlar.",
      "Eksik diş sayısı ve hastaların klinik ihtiyacına göre protezler temel olarak sabit protezler (kaplama, köprü) ve hareketli protezler (bölümlü veya tam protezler) olmak üzere ikiye ayrılır.",
      "Ayrıca son yıllarda öne çıkan estetik diş hekimliği uygulamaları da (Porselen Laminalar, Gülüş Tasarımı, Empress tam seramik kaplama, Zirkonyum Porselen vb.) protetik tedavi kapsamına girmektedir ve diş hekimliğindeki önemli uzmanlık alanlarından birisidir.",
    ],
    seoTitle:
      "Diş Protezi Çeşitleri: Zirkonyum, Köprü, Hareketli Protez | Etimesgut",
    seoDescription:
      "Sabit ve hareketli protez farkları, zirkonyum kaplama ne kadar sürer, proteze alışma süreci. Etimesgut Güney Ağız ve Diş Sağlığı'nda protez tedavisi.",
    keywords: [
      "protez tedavisi",
      "sabit protez",
      "hareketli protez",
      "zirkonyum kaplama etimesgut",
      "porselen lamina",
      "empress kaplama",
      "protetik diş tedavisi ankara",
    ],
    iconType: "prosthesis",
    featuredImage: "/images/klinik3.webp",
    featuredImageAlt:
      "Güney Ağız ve Diş Sağlığı Protetik Diş Tedavisi ve Restorasyon Muayene Odası",
    secondaryImage: "/images/giris.webp",
    secondaryImageAlt:
      "Özel Güney Ağız ve Diş Sağlığı Polikliniği Etimesgut",
    highlights: [
      "Sabit Protezler: Kuron (kaplama), köprü, zirkonyum ve tam seramik restorasyonlar",
      "Hareketli Protezler: Tam protezler ve hassas bağlantılı/kroşeli bölümlü protezler",
      "İmplant Üstü Protezler: İmplant destekli sabit veya hareketli protetik çözümler",
      "Çiğneme fonksiyonu, fonasyon (konuşma) ve doku uyumunun yeniden sağlanması",
    ],
    indications: [
      "Aşırı madde kaybı nedeniyle dolgu ile restore edilemeyen dişlerin korunması",
      "Bir veya birden fazla diş eksikliğinde çiğneme ve konuşma fonksiyonunun iadesi",
      "Kanal tedavisi görmüş ve kırılma riski bulunan dişlerin kuron ile desteklenmesi",
      "Tam veya kısmi dişsizlik vakalarında hareketli ya da implant üstü protez ihtiyacı",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Klinik ve Radyolojik Protetik Değerlendirme",
        description:
          "Mevcut dişlerin, diş etlerinin, çene kapanışının ve kemik desteğinin detaylı analizi yapılır.",
      },
      {
        stepNumber: "02",
        title: "Diş Hazırlığı ve Hassas Ölçü Alımı",
        description:
          "Seçilen protez türüne göre dişlerde minimal hazırlık yapılır ve ağız içi ölçüler alınarak geçici restorasyon uygulanır.",
      },
      {
        stepNumber: "03",
        title: "Altyapı ve Estetik Uyum Provaları",
        description:
          "Zirkonyum, seramik veya hareketli protez altyapısının diş eti uyumu, rengi ve çene kapanış ilişkisi prova edilir.",
      },
      {
        stepNumber: "04",
        title: "Protezin Uygulanması ve Bakım Eğitimi",
        description:
          "Son kontrolleri tamamlanan protez ağız içine uyumlandırılır ve hastaya detaylı protez hijyen eğitimi verilir.",
      },
    ],
    detailedSections: [
      {
        heading: "Sabit ve Hareketli Protez Türleri Nelerdir?",
        paragraphs: [
          "Sabit protezler, hasta tarafından çıkarılamayan ve mevcut dişlere veya implantlara simante edilen (yapıştırılan) ya da vidalanan restorasyonlardır. Zirkonyum destekli porselenler, metal destekli porselenler, tam seramik (Empress / E-max) kuronlar ve porselen laminalar bu grupta yer alır.",
          "Hareketli protezler ise sabit protez için yeterli diş desteğinin bulunmadığı durumlarda uygulanan, hasta tarafından takılıp çıkarılabilen apareylerdir. Tam dişsizlikte 'tam protezler', kısmi dişsizlikte ise 'bölümlü (parsiyel) veya hassas bağlantılı protezler' tercih edilir.",
        ],
        bullets: [
          "Zirkonyum Restorasyonlar: Işık geçirgenliği yüksek, diş eti ile biyouyumlu beyaz altyapılı sabit protezler.",
          "Tam Seramik (Empress) Uygulamalar: Ön grup dişlerde doğal mine ışık yansımasını destekleyen restorasyonlar.",
          "İmplant Üstü Protezler: Çene kemiğine yerleştirilen implantlardan destek alan sabit veya çıtçıtlı (overdenture) sistemler.",
        ],
      },
    ],
    postCareTips: [
      "Sabit kuron ve köprü protezlerinin altı özel köprü altı diş ipleri (superfloss) ve arayüz fırçaları ile temizlenmelidir.",
      "Hareketli protezler her yemekten sonra çıkarılarak su ve özel protez fırçası ile temizlenmeli, aşındırıcı kimyasallar kullanılmamalıdır.",
      "Gece uyurken hareketli protezlerin çıkarılarak dokuların dinlendirilmesi diş eti sağlığını destekler.",
      "Kabuklu ve çok sert gıdaların ön dişlerle kırılmaması protez ömrünü korur.",
    ],
    faqs: [
      {
        question: "Zirkonyum kaplama ile metal destekli porselen arasındaki fark nedir?",
        answer:
          "Metal destekli porselenlerde alt yapıda gri metal alaşım kullanılırken, zirkonyum restorasyonlarda beyaz renkli ve ışık geçirgenliğine sahip biyouyumlu zirkonyum oksit altyapı kullanılır. Bu sayede diş eti kenarında koyu renk yansıması oluşmaz ve doğal diş görünümüne daha yakın bir uyum sağlanır.",
      },
      {
        question: "Sabit protez yapım sürecinde dişsiz kalınır mı?",
        answer:
          "Hayır. Dişlerin hazırlığı ve ölçü aşamasının ardından, daimi protezler laboratuvarda hazırlanırken hem diş hassasiyetini önlemek hem de günlük yaşam konforunu korumak için geçici dişler uygulanır.",
      },
      {
        question: "Zirkonyum kaplama kaç seansta tamamlanır?",
        answer:
          "Genellikle 3-4 seansta, yaklaşık 1-2 haftada tamamlanır: diş hazırlığı ve ölçü, altyapı provası, renk/form provası ve yapıştırma. Kanal tedavisi veya diş eti düzenlemesi gereken durumlarda süre uzayabilir.",
      },
      {
        question: "Hareketli proteze alışma süreci ne kadar sürer?",
        answer:
          "Yeni bir hareketli protezin yanak, dil ve damak dokularıyla tam uyum sağlaması birkaç hafta sürebilir. Bu süreçte olası vuruk noktalarının düzeltilmesi için hekim kontrolleri yapılır.",
      },
    ],
    lastUpdated: "02 Kasım 2026",
  },
  {
    id: "ortodonti",
    slug: "ortodonti",
    title: "Ortodonti (Diş ve Çene Düzenleme Tedavileri)",
    shortTitle: "Ortodonti",
    categoryBadge: "Diş & Çene Gelişimi Uzmanlığı",
    shortSummary:
      "Dişlerin çene kemikleri üzerinde fonksiyonel ve estetik olarak doğru biçimde konumlanmasını, çapraşıklıkların ve kapanış bozukluklarının düzeltilmesini konu alan diş hekimliği dalı.",
    coreParagraphs: [
      "Ortodonti; çapraşık, aralıklı veya yanlış kapanan dişlerin ve uyumsuz çene ilişkilerinin diş teli, şeffaf plak ya da çene aparatlarıyla düzeltilmesini konu alan diş hekimliği dalıdır.",
      "Dişler, kendilerine uygulanan hafif ve sürekli kuvvetle kemik içinde yavaşça hareket eder. Bu sayede diş kesmeden ya da kaplama yapmadan dizilim düzeltilebilir. Düzgün sıralanan dişler daha kolay temizlenir; çürük, diş eti hastalığı ve dişlerde aşırı aşınma riski azalır.",
      "Çene gelişimindeki sorunlar büyüme devam ederken çok daha kolay yönlendirilebildiği için ilk ortodontik kontrol 7-8 yaş civarında önerilir. Diş dizilim bozuklukları ise diş ve diş eti sağlıklı olduğu sürece yetişkinlerde de tedavi edilebilir.",
    ],
    seoTitle:
      "Ortodonti (Diş Teli, Şeffaf Plak) Ne Kadar Sürer? | Etimesgut Ortodonti",
    seoDescription:
      "Diş teli ve şeffaf plak tedavisi ne kadar sürer, kaç yaşında yapılır, acıtır mı? Etimesgut Güney Ağız ve Diş Sağlığı'nda çocuk ve yetişkin ortodonti.",
    keywords: [
      "ortodonti",
      "ortodonti tedavisi etimesgut",
      "diş teli tedavisi ankara",
      "şeffaf plak tedavisi",
      "diş çapraşıklığı tedavisi",
      "çocuk ortodonti",
      "çene kapanış bozukluğu",
    ],
    iconType: "orthodontics",
    featuredImage: "/images/tomografi.webp",
    featuredImageAlt:
      "Ortodontik Teşhis ve Çene Analizinde Kullanılan Dijital Görüntüleme Cihazı",
    secondaryImage: "/images/klinikoda2.webp",
    secondaryImageAlt:
      "Güney Ağız ve Diş Sağlığı Ortodonti Muayene Odası",
    highlights: [
      "Çocukluk döneminde çene gelişimi takibi ve koruyucu/önleyici ortodonti",
      "Metal, porselen (şeffaf) braket sistemleri ve kişiye özel şeffaf plak seçenekleri",
      "Çapraşıklıkların giderilmesiyle diş fırçalama etkinliğinin ve diş eti sağlığının artırılması",
      "Çene eklemi (TME) ve çiğneme dengesinin fonksiyonel olarak düzenlenmesi",
    ],
    indications: [
      "Dişlerde üst üste binme (çapraşıklık) veya dişler arasında boşluklar (diastema) bulunması",
      "Alt ve üst çenenin önde, geride veya dar konumlanmasına bağlı kapanış bozuklukları",
      "Çocuklarda parmak emme, uzun süreli emzik kullanımı veya ağız solunumuna bağlı çene darlıkları",
      "Ön veya arka dişlerin kapanmaması (açık kapanış) ya da aşırı örtülü kapanış durumları",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Ortodontik Muayene ve Radyolojik Analiz",
        description:
          "Panoramik röntgen, sefalometrik analiz ve ağız içi kayıtlar ile diş-çene ilişkisi detaylı olarak incelenir.",
      },
      {
        stepNumber: "02",
        title: "Ağız İçi Hazırlık ve Tedavi Planı",
        description:
          "Ortodontik tedavi öncesinde varsa diş taşı temizliği ve çürük tedavileri tamamlanarak uygun aparey sistemi seçilir.",
      },
      {
        stepNumber: "03",
        title: "Aparey / Braket veya Şeffaf Plak Uygulaması",
        description:
          "Planlanan sabit braketler, hareketli çene apareyleri veya şeffaf plaklar uygulanarak hafif ve kontrollü kuvvetlerle diş hareketleri başlatılır.",
      },
      {
        stepNumber: "04",
        title: "Periyodik Kontroller ve Pekiştirme (Retansiyon) Dönemi",
        description:
          "Düzenli aylık kontrollerle hizalanma tamamlanır ve elde edilen konumun korunması için pekiştirme tedavisi uygulanır.",
      },
    ],
    detailedSections: [
      {
        heading: "Erken Dönem Ortodontik Muayenenin Önemi",
        paragraphs: [
          "Çocuklarda ilk ortodontik değerlendirmenin daimi kesici ve birinci büyük azı dişlerinin sürmeye başladığı 7-8 yaş civarında yapılması önerilir. Bu dönemde yapılacak bir muayene, çene darlığı veya iskeletsel uyumsuzlukların büyüme potansiyelinden yararlanılarak yönlendirilmesine olanak tanır.",
          "Dişlerin kendisini ilgilendiren çapraşıklık ve aralık tedavileri ise sağlıklı diş ve kemik dokusuna sahip olan her yaştaki bireyde (yetişkinler dahil) uygulanabilmektedir.",
        ],
        bullets: [
          "Sabit Ortodontik Tedaviler: Diş yüzeyine uygulanan metal veya estetik seramik braket sistemleri.",
          "Şeffaf Plak Uygulamaları: Takılıp çıkarılabilen, kişiye özel dijital olarak üretilen telsiz ortodontik plaklar.",
          "Fonksiyonel Apareyler: Büyüme çağındaki çocuklarda alt-üst çene uyumunu destekleyen apareyler.",
        ],
      },
    ],
    postCareTips: [
      "Sabit braket kullanan hastalar ortodontik diş fırçası ve arayüz fırçası ile her öğün sonrası özenle temizlik yapmalıdır.",
      "Braketlerin kopmasını önlemek için asitli içeceklerden, yapışkan gıdalardan ve sert yiyecekleri ısırarak tüketmekten kaçınılmalıdır.",
      "Şeffaf plak veya hareketli aparey kullanan hastalar, plaklarını hekimin belirttiği günlük kullanım süresi boyunca düzenli takmalıdır.",
      "Aktif tedavi bittikten sonra dişlerin eski konumuna dönmesini önleyen pekiştirme (retainer) protokolüne uyulmalıdır.",
    ],
    faqs: [
      {
        question: "Ortodonti tedavisi sadece çocuklara mı uygulanır?",
        answer:
          "Hayır. İskeletsel çene yönlendirmeleri büyüme-gelişim döneminde yapılırken, dişsel çapraşıklık ve dizilim bozuklukları diş ve diş eti dokuları sağlıklı olan her yaştaki yetişkine de uygulanabilmektedir.",
      },
      {
        question: "Ortodontik tedavi ne kadar sürer?",
        answer:
          "Tedavi süresi; çapraşıklığın derecesine, çene ilişkisine, hastanın yaşına ve randevu/aparey uyumuna göre değişmekle birlikte ortalama 6 ay ile 24 ay arasında planlanmaktadır.",
      },
      {
        question: "Diş teli acıtır mı?",
        answer:
          "Braketlerin yapıştırılması ağrısızdır. Tel takıldıktan ve her ayar sonrası 2-4 gün dişlerde baskı ve çiğnerken hassasiyet olabilir; bu, dişlerin hareket etmeye başladığını gösterir ve kendiliğinden geçer.",
      },
      {
        question: "Şeffaf plak mi, diş teli mi?",
        answer:
          "Şeffaf plaklar neredeyse görünmez ve yemek sırasında çıkarılabilir; ancak günde 20-22 saat takılmaları gerekir. İleri çapraşıklık, diş dönmeleri ve çene uyumsuzluklarında sabit diş teli daha öngörülebilir sonuç verir. Seçim muayene ve röntgen sonrasında yapılır.",
      },
      {
        question: "Düzgün sıralanmış dişlerin ağız sağlığına katkısı nedir?",
        answer:
          "Çapraşık dişlerin ara yüzeylerinin temizlenmesi zordur ve bu bölgelerde plak birikimi, diş eti iltihabı ve arayüz çürükleri daha sık görülür. Ortodonti ile ideal dizilime kavuşan dişler çok daha kolay temizlenir ve çiğneme kuvvetleri dengeli dağılır.",
      },
    ],
    lastUpdated: "02 Kasım 2026",
  },
  {
    id: "dis-estetigi",
    slug: "dis-estetigi",
    title: "Diş Estetiği (Estetik ve Restoratif Diş Hekimliği)",
    shortTitle: "Diş Estetiği",
    categoryBadge: "Estetik & Koruyucu Restorasyon",
    shortSummary:
      "Diş ve çene yapısının fonksiyonel, biyolojik ve estetik uyumunu esas alarak diş form, renk ve dizilim bozukluklarını doğal dokuyu koruyarak düzenleyen diş hekimliği alanı.",
    coreParagraphs: [
      "Diş estetiği; dişlerin rengi, şekli, boyu, aralıkları ve diş eti seviyesi gibi gülüşü etkileyen unsurların, dişin sağlığı ve çiğneme işlevi bozulmadan düzeltilmesidir. Diş beyazlatma, bonding, porselen lamina, zirkonyum ve diş eti düzenlemesi bu kapsamda değerlendirilir.",
      "Diş Estetiği (Estetik ve Restoratif Diş Hekimliği); dişlerdeki aralıkların, çapraşıklıkların, aşınmaların, kırıkların, form ve renk uyumsuzluklarının doğal diş dokusuna en az müdahale (minimal invaziv) ilkesiyle değerlendirilmesini kapsar.",
      "Ortodontik hizalama, koruyucu kompozit/porselen lamina restorasyonlar, biyouyumlu tam seramik uygulamalar ve diş eti uyumu (pembe estetik) bir arada ele alınarak, bireyin yüz ve çene yapısıyla uyumlu, sağlıklı ve doğal bir gülümseme fonksiyonu hedeflenir.",
    ],
    seoTitle:
      "Diş Estetiği: Bonding, Lamina, Gülüş Tasarımı | Etimesgut Diş Hekimi",
    seoDescription:
      "Bonding ve porselen lamina farkı, diş arası boşluk kapatma, diş beyazlatma ve gülüş tasarımı. Etimesgut Güney Ağız ve Diş Sağlığı'nda diş estetiği.",
    keywords: [
      "diş estetiği",
      "estetik diş hekimliği etimesgut",
      "restoratif diş tedavisi",
      "porselen lamina ankara",
      "bonding uygulaması",
      "diş arası boşluk kapatma",
      "doğal diş estetiği",
    ],
    iconType: "aesthetics",
    featuredImage: "/images/klinik3.webp",
    featuredImageAlt:
      "Güney Ağız ve Diş Sağlığı Estetik ve Restoratif Diş Hekimliği Kliniği",
    secondaryImage: "/images/klinikoda2.webp",
    secondaryImageAlt:
      "Modern Restoratif Diş Tedavisi Ünitesi",
    highlights: [
      "Doğal diş dokusunu korumayı esas alan minimal invaziv restoratif yaklaşım",
      "Diş, diş eti (pembe estetik) ve çene kapanış uyumunun birlikte değerlendirilmesi",
      "Adeziv sistemler (Bonding), Porselen Lamina ve Zirkonyum/Tam Seramik çözümler",
      "Fonksiyonel çiğneme ve konuşma dengesi ile uyumlu kişiye özel planlama",
    ],
    indications: [
      "Ön grup dişler arasında bulunan aralıklar (diastema) ve orantısızlıklar",
      "Travma veya aşınmaya bağlı diş ucu kırıkları ve mine çatlakları",
      "Kuron boyu uyumsuzlukları ve asimetrik diş eti seviyeleri",
      "Eski, uyumu bozulmuş veya renklenmiş dolguların estetik kompozit/seramiklerle yenilenmesi",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Klinik Muayene, Fotoğraflama ve Beklenti Analizi",
        description:
          "Dişlerin mevcut durumu, diş eti sağlığı, dudak-yüz uyumu ve çene kapanış ilişkisi ayrıntılı olarak incelenir.",
      },
      {
        stepNumber: "02",
        title: "Multidisipliner Tedavi Planlaması",
        description:
          "Doğal diş dokusunu en üst düzeyde koruyacak yöntem (ortodontik ön hizalama, bonding, lamina veya seramik restorasyon) belirlenir.",
      },
      {
        stepNumber: "03",
        title: "Minimal Hazırlık ve Prova Süreci",
        description:
          "Gerekli diş eti düzenlemeleri ve koruyucu yüzey hazırlıkları yapılarak planlanan form ağız içinde prova edilir.",
      },
      {
        stepNumber: "04",
        title: "Biyouyumlu Uygulama ve Periyodik Koruma",
        description:
          "Restorasyonlar adeziv protokollerle uygulanır, kapanış kontrolleri yapılır ve koruyucu bakım programı paylaşılır.",
      },
    ],
    detailedSections: [
      {
        heading: "Estetik Diş Hekimliğinde Sağlık ve Fonksiyon Önceliği",
        paragraphs: [
          "Gerçek anlamda başarılı bir estetik diş hekimliği uygulaması, yalnızca dişlerin görünümünü değil; diş etlerinin sağlığını, çene ekleminin dengesini ve dişlerin doğru kapanışını (oklüzyon) temel alır. Sağlıklı bir diş eti ve doğru konumlanmış çene-diş ilişkisi olmadan kalıcı bir restorasyondan söz edilemez.",
          "Bu nedenle kliniğimizde estetik ve restoratif talepler değerlendirilirken öncelikle koruyucu tedavi ilkeleri gözetilir; gerekiyorsa ortodontik hizalama veya periodontal (diş eti) tedavilerle kombine bir planlama yapılır.",
        ],
        bullets: [
          "Kompozit Bonding: Diş yüzeyinden aşındırma yapılmadan aralıkların ve küçük kırıkların tek seansta restore edilmesi.",
          "Porselen Lamina (Yaprak Porselen): Dişlerin yalnızca ön yüzeyine minimal hazırlıkla uygulanan ince seramik restorasyonlar.",
          "Pembe Estetik (Diş Eti Düzenlemesi): Diş eti seviyelerinin simetrik ve sağlıklı forma kavuşturulması.",
        ],
      },
    ],
    postCareTips: [
      "Estetik restorasyonların (bonding, lamina vb.) yüzey parlaklığını korumak için aşındırıcı granüllü diş macunları yerine hekimin önerdiği ürünler kullanılmalıdır.",
      "Kalem ısırma, tırnak yeme veya sert kabuklu gıdaları ön dişlerle kırma gibi alışkanlıklardan kaçınılmalıdır.",
      "Diş sıkma (bruksizm) alışkanlığı bulunan hastalarda restorasyonları korumak amacıyla gece plağı kullanımı önerilebilir.",
      "6 aylık rutin diş hekimi kontrolleri ve profesyonel diş taşı temizliği düzenli sürdürülmelidir.",
    ],
    faqs: [
      {
        question: "Bonding uygulaması doğal dişe zarar verir mi?",
        answer:
          "Kompozit bonding uygulamasında çoğunlukla diş yüzeyinden herhangi bir aşındırma yapılmaz; diş minesine özel adeziv ajanlarla doğal diş rengindeki kompozit materyal eklenir. Bu yönüyle en koruyucu restoratif işlemlerden biridir.",
      },
      {
        question: "Dişlerdeki çapraşıklıklarda kaplama mı yoksa ortodonti mi tercih edilmelidir?",
        answer:
          "Dişlerin kendi mine dokusu sağlamsa ve sorun yalnızca dizilim bozukluğu (çapraşıklık) ise, doğal dişlerin kesilmemesi adına öncelikli koruyucu yaklaşım ortodontik tedavidir. Dişlerde aynı zamanda ciddi madde kaybı veya form bozukluğu varsa protetik/restoratif seçenekler değerlendirilir.",
      },
      {
        question: "Bonding ile porselen lamina arasındaki fark nedir?",
        answer:
          "Bonding, kompozit dolgu materyalinin diş yüzeyine doğrudan şekillendirilmesiyle tek seansta yapılır ve genellikle dişten aşındırma gerekmez. Porselen lamina laboratuvarda üretilen ince seramik yapraklardır; renk değişimine daha dirençli ve daha uzun ömürlüdür, ancak az miktarda mine hazırlığı ve 2-3 seans gerektirir.",
      },
      {
        question: "Diş beyazlatma dişlere zarar verir mi?",
        answer:
          "Hekim kontrolünde yapılan beyazlatma mineye kalıcı zarar vermez. Uygulama sonrası birkaç gün soğuk-sıcak hassasiyeti görülebilir. Dolgu, kaplama ve lamina gibi restorasyonlar beyazlamaz; bu nedenle önce muayene yapılmalıdır.",
      },
      {
        question: "Estetik restorasyonların ömrü nasıl uzatılır?",
        answer:
          "Düzenli ağız hijyeni (fırçalama ve diş ipi kullanımı), sert cisimleri ön dişlerle ısırmaktan kaçınmak ve 6 ayda bir yapılacak klinik kontroller restorasyonların uzun yıllar sağlıklı kalmasını destekler.",
      },
    ],
    lastUpdated: "02 Kasım 2026",
  },
];

export function getTreatmentBySlug(slug: string): TreatmentItem | undefined {
  return TREATMENTS_DATA.find((item) => item.slug === slug);
}

