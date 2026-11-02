export interface RichGuideTab {
  id: string;
  badge: string;
  tabLabel: string;
  title: string;
  lead: string;
  paragraphs: string[];
  keyTakeaways: {
    title: string;
    detail: string;
  }[];
  relatedTreatmentSlug: string;
  relatedTreatmentLabel: string;
  image: string;
  imageAlt: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface GeneralFAQItem {
  category: string;
  question: string;
  answer: string;
}

export const RICH_GUIDE_TABS: RichGuideTab[] = [
  {
    id: "koruyucu-hekimlik",
    badge: "Koruyucu Diş Hekimliği",
    tabLabel: "Koruyucu Diş Hekimliği & Erken Tanı",
    title: "Ağız ve Diş Sağlığında Koruyucu Yaklaşım ve Erken Tanının Önemi",
    lead: "Modern diş hekimliğinin temel amacı, diş ve diş eti hastalıkları henüz ilerlemeden koruyucu önlemlerle doğal dokuları muhafaza etmektir.",
    paragraphs: [
      "Diş çürükleri ve diş eti hastalıkları başlangıç aşamalarında çoğunlukla belirgin bir ağrı oluşturmadan ilerler. Düzenli olarak gerçekleştirilen 6 aylık periyodik diş hekimi muayeneleri, mine seviyesindeki başlangıç lezyonlarının veya diş eti iltihaplarının erken dönemde tespit edilmesine olanak tanır.",
      "Erken tanı sayesinde ileri cerrahi veya kapsamlı işlemlere gerek kalmadan, minimal koruyucu uygulamalarla doğal dişin anatomik bütünlüğü korunabilir. Ağız içi hijyen alışkanlıklarının hekim rehberliğinde kişiye özel olarak düzenlenmesi, genel vücut sağlığını da doğrudan destekler.",
    ],
    keyTakeaways: [
      {
        title: "6 Aylık Periyodik Muayene",
        detail:
          "Henüz ağrı vermeyen arayüz çürüklerinin ve diş eti problemlerinin erken dönemde saptanmasını sağlar.",
      },
      {
        title: "Doğal Dokunun Korunması",
        detail:
          "Kendi doğal diş dokunuz, biyolojik ve fonksiyonel açıdan en değerli yapıdır; tüm tedaviler öncelikle dişi ağızda tutmayı hedefler.",
      },
      {
        title: "Bireysel Hijyen Programı",
        detail:
          "Diş fırçalama tekniği, diş ipi ve arayüz fırçası seçimi bireyin diş dizilimine göre hekim tarafından önerilir.",
      },
    ],
    relatedTreatmentSlug: "endodonti-kanal-tedavisi",
    relatedTreatmentLabel: "Endodonti (Kanal Tedavisi) Detaylarını İncele",
    image: "/images/klinikoda.png",
    imageAlt: "Güney Ağız ve Diş Sağlığı Polikliniği Muayene Odası",
  },
  {
    id: "dijital-radyoloji",
    badge: "Dijital Diş Hekimliği",
    tabLabel: "3D Tomografi & Dijital Radyoloji",
    title: "Dijital Panoramik Röntgen ve 3 Boyutlu Dental Tomografi ile Tanı",
    lead: "Doğru ve güvenli bir tedavi planlamasının ilk adımı, çene kemiği ve diş köklerinin radyolojik olarak net biçimde görüntülenmesidir.",
    paragraphs: [
      "Klinik muayenede yalnızca dişlerin ağız içine sürmüş kuron kısımları ve diş eti dokuları gözlemlenebilir. Oysa diş kökleri, çene kemiği içi oluşumlar, gömülü dişler, kök ucu enfeksiyonları ve sinir kanalları yalnızca radyolojik görüntüleme yöntemleriyle incelenebilir.",
      "Polikliniğimizde bulunan dijital panoramik röntgen ve 3 boyutlu dental tomografi (CBCT) cihazı; implant planlamasında kemik kalınlığının milimetrik ölçümünü, kanal tedavisinde kök anatomisinin analizini ve ortodontik değerlendirmeleri düşük radyasyon dozu prensibiyle desteklemektedir.",
    ],
    keyTakeaways: [
      {
        title: "Üç Boyutlu Anatomik Analiz",
        detail:
          "Çene kemiğinin yüksekliği, genişliği ve yoğunluğu ile sinüs ve sinir komşulukları üç boyutlu olarak incelenir.",
      },
      {
        title: "Düşük Radyasyon Teknolojisi",
        detail:
          "Yeni nesil dijital sensörler sayesinde geleneksel yöntemlere kıyasla çok daha kısa sürede ve düşük dozda görüntü elde edilir.",
      },
      {
        title: "Detaylı Tedavi Planlaması",
        detail:
          "İmplant, cerrahi ve endodontik işlemler öncesinde olası anatomik varyasyonlar önceden belirlenir.",
      },
    ],
    relatedTreatmentSlug: "implant-tedavisi",
    relatedTreatmentLabel: "İmplant Tedavisi Sürecini İncele",
    image: "/images/tomografi.webp",
    imageAlt:
      "Güney Ağız ve Diş Sağlığı 3D Dental Tomografi ve Dijital Panoramik Röntgen Cihazı",
  },
  {
    id: "cocuk-ve-ortodonti",
    badge: "Büyüme & Gelişim Takibi",
    tabLabel: "Çocuk Diş Sağlığı & Çene Gelişimi",
    title: "Çocukluk Döneminde Pedodonti ve Ortodontik Takibin Rolü",
    lead: "Çocukluk çağında kazanılan ağız bakımı alışkanlıkları ve zamanında yapılan çene gelişimi kontrolleri, yetişkinlik dönemindeki ağız sağlığının temelini oluşturur.",
    paragraphs: [
      "Süt dişleri yalnızca çiğneme işlevini yerine getirmekle kalmaz; aynı zamanda konuşmanın gelişimine katkıda bulunur ve alttan sürecek olan daimi dişler için doğal bir yer tutucu görevi üstlenir. Bu nedenle süt dişlerindeki çürüklerin tedavisi ve koruyucu fissür örtücü/flor uygulamaları büyük önem taşır.",
      "Diğer yandan 7-8 yaş civarında yapılan ilk ortodontik değerlendirme ile çene darlıkları, çapraz kapanışlar veya dişlerin sürme yolu engelleri büyüme potansiyeli devam ederken tespit edilerek koruyucu/önleyici yaklaşımlarla yönlendirilebilir.",
    ],
    keyTakeaways: [
      {
        title: "Diş Hekimi Korkusunun Önlenmesi",
        detail:
          "Ağrı oluşmadan yapılan tanışma ve kontrol muayeneleri, çocukta güvenli iletişim ve olumlu klinik algısı oluşturur.",
      },
      {
        title: "Süt Dişlerinin Rehberliği",
        detail:
          "Erken süt dişi kayıplarının önlenmesi, ileride oluşabilecek şiddetli diş çapraşıklıklarının önüne geçilmesine yardımcı olur.",
      },
      {
        title: "Büyüme Dönemi Çene Uyumu",
        detail:
          "Çene kemiklerinin gelişim yönü çocukluk çağında takip edilerek fonksiyonel kapanış desteklenir.",
      },
    ],
    relatedTreatmentSlug: "pedodonti",
    relatedTreatmentLabel: "Pedodonti (Çocuk Diş Hekimliği) Detayları",
    image: "/images/klinikoda2.webp",
    imageAlt: "Güney Ağız ve Diş Sağlığı Çocuk ve Ortodonti Muayene Ünitesi",
  },
  {
    id: "fonksiyon-ve-restorasyon",
    badge: "Protetik & Sterilizasyon",
    tabLabel: "Fonksiyonel Restorasyon & Sterilizasyon",
    title: "Protetik Restorasyonlarda Biyouyumluluk ve Sterilizasyon Standartları",
    lead: "Eksik veya madde kaybına uğramış dişlerin tamamlanmasında doku dostu materyaller ve üst düzey enfeksiyon kontrol zinciri esastır.",
    paragraphs: [
      "Diş eksiklikleri zamanında giderilmediğinde komşu dişler boşluğa doğru devrilebilir, karşıt çenedeki dişler uzayabilir ve çiğneme kuvveti tek tarafa yüklenerek çene eklemi sorunlarına zemin hazırlayabilir. Protetik ve restoratif diş hekimliği; bu fonksiyonel kayıpları sabit, hareketli veya implant üstü çözümlerle yeniden dengelemeyi amaçlar.",
      "Polikliniğimizde gerçekleştirilen tüm muayene ve tedavi süreçlerinde uluslararası dezenfeksiyon ve otoklav sterilizasyon protokolleri titizlikle uygulanmakta; her hasta için tek kullanımlık sarf malzemeler ve steril paketlenmiş el aletleri kullanılmaktadır.",
    ],
    keyTakeaways: [
      {
        title: "Biyouyumlu Materyal Seçimi",
        detail:
          "Diş eti ve çevre dokularla uyumlu zirkonyum, tam seramik ve titanyum materyallerle doku sağlığı gözetilir.",
      },
      {
        title: "Otoklav ve Enfeksiyon Kontrolü",
        detail:
          "Tüm klinik aletler kimyasal, biyolojik ve fiziksel indikatörlerle denetlenen sterilizasyon süreçlerinden geçirilir.",
      },
      {
        title: "Çiğneme ve Eklem Dengesi",
        detail:
          "Yapılan her restorasyon alt ve üst çene kapanış ilişkisi (oklüzyon) açısından hassas şekilde kontrol edilir.",
      },
    ],
    relatedTreatmentSlug: "protez-tedavisi",
    relatedTreatmentLabel: "Protez Tedavisi ve Restorasyon Bilgileri",
    image: "/images/giris.webp",
    imageAlt: "Özel Güney Ağız ve Diş Sağlığı Polikliniği",
  },
];

export const CLINICAL_PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "İlk Muayene ve Dijital Görüntüleme",
    subtitle: "Panoramik röntgen ve 3D dental tomografi analizi",
    description:
      "Ağız içi detaylı muayene ile birlikte dijital panoramik röntgen veya 3 boyutlu dental tomografi çekilerek diş, kök ve çene yapısı incelenir.",
  },
  {
    number: "02",
    title: "Kişiye Özel Tedavi Planlaması",
    subtitle: "İhtiyaca uygun yol haritasının belirlenmesi",
    description:
      "Tespit edilen bulgular doğrultusunda hastanın ağız yapısına ve beklentilerine uygun tedavi alternatifleri ve seans takvimi oluşturulur.",
  },
  {
    number: "03",
    title: "Konforlu ve Steril Uygulama",
    subtitle: "Modern ünitelerde multidisipliner tedavi",
    description:
      "Sterilizasyon standartlarına sahip modern klinik odalarımızda, hasta konforu gözetilerek planlanan tedaviler aşamalı olarak gerçekleştirilir.",
  },
  {
    number: "04",
    title: "Koruyucu Kontrol ve Takip",
    subtitle: "Tedavi sonrası bakım ve periyodik kontroller",
    description:
      "Tedavi tamamlandıktan sonra ağız hijyeni eğitimi verilir ve yapılan işlemlerin uzun ömürlü olması için 6 aylık periyodik kontrol süreci planlanır.",
  },
];

export const GENERAL_FAQS: GeneralFAQItem[] = [
  {
    category: "Muayene & Teşhis",
    question: "İlk diş muayenesinde hangi işlemler yapılır?",
    answer:
      "İlk muayenede diş hekimi tarafından ağız içi tüm dişler, diş etleri, mukozal dokular ve çene eklemi incelenir. Gerekli görüldüğünde kök yapısı ve çene kemiğini değerlendirmek amacıyla dijital panoramik röntgen veya 3 boyutlu tomografi görüntüsü alınarak kişiye özel tedavi planı oluşturulur.",
  },
  {
    category: "Tedavi Konforu",
    question: "Kanal tedavisi veya implant işlemleri sırasında ağrı hissedilir mi?",
    answer:
      "Polikliniğimizde gerçekleştirilen endodontik (kanal tedavisi) ve cerrahi/implant işlemleri öncesinde ilgili bölge lokal anestezi ile tamamen uyuşturulur. Bu sayede işlem sırasında ağrı hissedilmez ve tedavi konforlu bir şekilde tamamlanır.",
  },
  {
    category: "Dijital Radyoloji",
    question: "Dijital panoramik röntgen ve 3D dental tomografi güvenli midir?",
    answer:
      "Kliniğimizde kullanılan dijital görüntüleme sistemleri, geleneksel röntgenlere kıyasla çok daha düşük radyasyon dozu ile yüksek çözünürlüklü görüntü sağlar. Çekim esnasında koruyucu önlemler eksiksiz uygulanır.",
  },
  {
    category: "Koruyucu Bakım",
    question: "Diş taşı temizliği (detertraj) diş minesine zarar verir mi?",
    answer:
      "Hayır. Uzman diş hekimi tarafından ultrasonik cihazlarla yapılan diş taşı temizliği diş minesine zarar vermez; aksine diş eti iltihabına, diş eti çekilmesine ve kemik kaybına yol açan plak ve tartarın uzaklaştırılmasını sağlar.",
  },
  {
    category: "Periyodik Kontrol",
    question: "Herhangi bir diş ağrım olmasa da kontrole gelmeli miyim?",
    answer:
      "Evet. Diş çürükleri ve diş eti hastalıkları başlangıç aşamasında ağrı yapmaz. 6 ayda bir yapılan rutin kontroller, sorunların henüz başlangıç evresindeyken kolay ve koruyucu yöntemlerle çözülmesine yardımcı olur.",
  },
  {
    category: "Randevu & Planlama",
    question: "Muayene ve tedavi randevusu nasıl oluşturulur?",
    answer:
      "Web sitemizde yer alan 'Asistan ile Randevu & Bilgi Al' bağlantısı veya iletişim formumuz üzerinden başvurunuzu ileterek size uygun muayene ve kontrol planlamasını kolayca oluşturabilirsiniz.",
  },
];
