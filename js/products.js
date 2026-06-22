const PRODUCTS = [

  // ══════════════════════════════════════════════════════
  // 1. PISCINES TUBULAIRES
  // ══════════════════════════════════════════════════════
  {
    id: "tb-001", category: "tubulaire", ref: "28270",
    nameF: "Intex Piscine Rectangulaire Tubulaire 2.20m × 1.50m × 60cm",
    nameA: "إنتيكس حوض مستطيل أنبوبي 2.20م × 1.50م × 60سم",
    descF: "Piscine rectangulaire compacte avec cadre tubulaire en acier galvanisé anti-rouille. Liner PVC 3 couches résistant aux UV et aux chocs. Montage sans outils en 20 min. Capacité : 1 584 L. Soupape de vidange de fond incluse. Compatible pompe filtre (vendue séparément). Idéale pour petits jardins et terrasses.",
    descA: "حوض مستطيل مدمج بإطار أنبوبي من الفولاذ المجلفن المضاد للصدأ. بطانة PVC ثلاثية الطبقات مقاومة للأشعة فوق البنفسجية. تركيب بدون أدوات في 20 دقيقة. السعة: 1584 لتر. صمام تصريف سفلي مضمون. متوافق مع مضخة ترشيح. مثالي للحدائق الصغيرة والتراسات.",
    price: 35000, badge: null, badgeA: null
  },
  {
    id: "tb-002", category: "tubulaire", ref: "28271",
    nameF: "Intex Piscine Rectangulaire Tubulaire 2.60m × 1.60m × 65cm",
    nameA: "إنتيكس حوض مستطيل أنبوبي 2.60م × 1.60م × 65سم",
    descF: "Piscine rectangulaire familiale avec structure tubulaire acier galvanisé. Liner PVC triple couche ultra-résistant aux UV. Montage sans outils en 20-25 min. Capacité : 2 163 L. Vanne de vidange incluse. Idéale pour 2 à 3 personnes. Rapport qualité-prix exceptionnel pour l'entrée de gamme tubulaire.",
    descA: "حوض مستطيل عائلي بهيكل أنبوبي من الفولاذ المجلفن. بطانة PVC ثلاثية الطبقات مقاومة للأشعة فوق البنفسجية. تركيب في 20-25 دقيقة. السعة: 2163 لتر. صمام تصريف مضمون. مثالي لـ 2-3 أشخاص.",
    price: 39000, badge: null, badgeA: null
  },
  {
    id: "tb-003", category: "tubulaire", ref: "28205",
    nameF: "Intex Piscine Ronde Tubulaire Ø 2.44m × 51cm",
    nameA: "إنتيكس حوض دائري أنبوبي قطر 2.44م × 51سم",
    descF: "Piscine ronde tubulaire avec cadre acier galvanisé résistant et joints en T innovants pour assemblage simplifié. Liner PVC 3 couches anti-UV. Capacité : 1 562 L. Montage facile en moins de 20 min. Soupape de vidange intégrée. Pour les enfants à partir de 6 ans et les adultes.",
    descA: "حوض دائري أنبوبي بإطار فولاذي مجلفن متين ووصلات T مبتكرة تسهل التجميع. بطانة PVC ثلاثية الطبقات مضادة للأشعة فوق البنفسجية. السعة: 1562 لتر. تركيب سهل في أقل من 20 دقيقة. صمام تصريف مدمج. للأطفال من 6 سنوات فأكثر.",
    price: 25000, badge: null, badgeA: null
  },
  {
    id: "tb-004", category: "tubulaire", ref: "28273",
    nameF: "Intex Piscine Rectangulaire Metal Frame Junior 4.50m × 2.20m × 84cm",
    nameA: "إنتيكس حوض مستطيل Metal Frame Junior 4.50م × 2.20م × 84سم",
    descF: "Grande piscine familiale Metal Frame Junior. Cadre tubulaire acier galvanisé haute résistance. Liner PVC 3 couches renforcé anti-UV et anti-perforation. Capacité : 6 307 L. Montage en 30-45 min sans outils. Vanne de vidange rapide. Compatible pompe filtre. Idéale pour 4 à 6 personnes. Excellent rapport qualité-prix pour une grande piscine.",
    descA: "حوض عائلي كبير Metal Frame Junior. إطار أنبوبي من الفولاذ المجلفن عالي المقاومة. بطانة PVC ثلاثية الطبقات مقواة مضادة للأشعة فوق البنفسجية والثقب. السعة: 6307 لتر. تركيب في 30-45 دقيقة. صمام تصريف سريع. لـ 4-6 أشخاص.",
    price: 60000, badge: "Populaire", badgeA: "الأكثر شيوعاً"
  },
  {
    id: "tb-005", category: "tubulaire", ref: "28206",
    nameF: "Intex Piscine Ronde Tubulaire Beachside Ø 3.05m × 76cm",
    nameA: "إنتيكس حوض دائري Beachside قطر 3.05م × 76سم",
    descF: "Piscine ronde Beachside avec impression photo-réaliste thème océan sur les parois et le fond. Cadre acier robuste. Parois latérales PVC triple couche très résistantes. Joint en T composite innovant pour assemblage rapide. Capacité : 4 485 L. Montage en 30 min. À partir de 6 ans. Ambiance plage garantie !",
    descA: "حوض دائري Beachside بطباعة فوتوغرافية واقعية بموضوع المحيط على الجدران والقاع. إطار فولاذي متين. جدران PVC ثلاثية الطبقات. وصلة T مركبة مبتكرة للتجميع السريع. السعة: 4485 لتر. تركيب في 30 دقيقة. من 6 سنوات.",
    price: 45000, badge: null, badgeA: null
  },
  {
    id: "tb-006", category: "tubulaire", ref: "28208",
    nameF: "Intex Piscine Ronde Tubulaire + Épurateur Ø 3.05m × 76cm",
    nameA: "إنتيكس حوض دائري + مضخة ترشيح قطر 3.05م × 76سم",
    descF: "Piscine ronde tubulaire Ø 3,05 m livrée avec épurateur à cartouche intégré pour une eau toujours cristalline. Cadre acier galvanisé résistant. Liner PVC 3 couches anti-UV. Capacité : 4 485 L. Kit complet prêt à l'emploi — aucun achat supplémentaire nécessaire. Montage en 30 min.",
    descA: "حوض دائري أنبوبي قطر 3.05م مع مضخة ترشيح بخرطوشة للحصول دائماً على مياه كريستالية. إطار فولاذي مجلفن. بطانة PVC ثلاثية الطبقات. السعة: 4485 لتر. طقم كامل جاهز للاستخدام — لا حاجة لشراء إضافي. تركيب في 30 دقيقة.",
    price: 53000, badge: "Kit Complet", badgeA: "طقم كامل"
  },
  {
    id: "tb-007", category: "tubulaire", ref: "26780",
    nameF: "Intex Piscine Prism Frame Rectangulaire 4.00m × 2.00m × 1.00m",
    nameA: "إنتيكس حوض Prism Frame مستطيل 4.00م × 2.00م × 1.00م",
    descF: "Piscine hors sol Prism Frame premium. Technologie Prism Frame : joints triangulaires en acier offrant 20% plus de solidité vs cadres classiques. Liner PureTech 3 couches : PVC épais + maille polyester super-résistante. Capacité : 6 836 L. Pompe à filtre cartouche 2 270 L/h + échelle de sécurité incluses. Montage en 45 min.",
    descA: "حوض Prism Frame فوق الأرض فاخر. تقنية Prism Frame: وصلات مثلثية فولاذية توفر متانة تزيد 20% عن الإطارات التقليدية. بطانة PureTech ثلاثية الطبقات: PVC سميك + شبكة بوليستر فائقة المقاومة. السعة: 6836 لتر. مضخة ترشيح 2270 ل/ساعة + سلم أمان مضمنان. تركيب في 45 دقيقة.",
    price: 135000, badge: "Premium", badgeA: "فاخر"
  },
  {
    id: "tb-008", category: "tubulaire", ref: "26326",
    nameF: "Intex Piscine Ultra XTR Frame Premium 4.88m × 2.44m × 1.22m",
    nameA: "إنتيكس حوض Ultra XTR Premium 4.88م × 2.44م × 1.22م",
    descF: "Le summum de la gamme Intex — Ultra XTR Frame. Construction ultra-robuste 3 couches : PVC marine anti-coupe + maille polyester haute résistance. Cadre acier galvanisé qualité supérieure. Capacité : 11 637 L. Kit complet : filtre à sable 4 m³/h + bâche + tapis de sol + échelle sécurité. Montage en 45 min. Résistance maximale pour des années de baignade.",
    descA: "القمة في تشكيلة Intex — Ultra XTR Frame. بناء فائق المتانة بـ3 طبقات: PVC بحري مقاوم للقطع + شبكة بوليستر عالية المقاومة. إطار فولاذي مجلفن عالي الجودة. السعة: 11637 لتر. طقم كامل: فلتر رملي 4م³/ساعة + غطاء + بساط أرضي + سلم أمان. تركيب في 45 دقيقة.",
    price: 200000, badge: "Top Gamme", badgeA: "أعلى فئة"
  },
  {
    id: "tb-009", category: "tubulaire", ref: "26798",
    nameF: "Intex Piscine Ovale Prism Frame 6.10m × 3.05m × 1.22m",
    nameA: "إنتيكس حوض بيضاوي Prism Frame 6.10م × 3.05م × 1.22م",
    descF: "La plus grande piscine ovale Prism Frame — espace aquatique XL pour toute la famille. Joints triangulaires ultra-stables. Liner PureTech 3 couches anti-perforation. Système Hydroaeration réduisant les chloramines et prévenant les taches. Capacité : 18 202 L (10 personnes). Pompe filtre 5 678 L/h + échelle + bâche + tapis de sol inclus. Montage en 60 min.",
    descA: "أكبر حوض بيضاوي Prism Frame — مساحة مائية XL للعائلة. وصلات مثلثية فائقة الاستقرار. بطانة PureTech ثلاثية الطبقات مقاومة للثقب. نظام Hydroaeration يقلل الكلورامينات. السعة: 18202 لتر (10 أشخاص). مضخة 5678 ل/ساعة + سلم + غطاء + بساط مضمنة. تركيب في 60 دقيقة.",
    price: 235000, badge: "XL Premium", badgeA: "XL فاخر"
  },

  // ══════════════════════════════════════════════════════
  // 2. PISCINES AUTOPORTANTES & GONFLABLES
  // ══════════════════════════════════════════════════════
  {
    id: "ap-001", category: "autoportante", ref: "28101",
    nameF: "Intex Easy Set Ø 1.83m × 51cm",
    nameA: "إنتيكس Easy Set قطر 1.83م × 51سم",
    descF: "La piscine autoportante la plus facile du marché. L'anneau gonflable supérieur s'élève automatiquement au fur et à mesure du remplissage — aucun montage de cadre ! Liner PVC 2 couches anti-UV. Capacité : 1 078 L. Installation express en 10 minutes. Soupape de vidange au fond. Inclus : 2 pastilles de réparation. Pour petits espaces.",
    descA: "أسهل حوض ذاتي الارتفاع في السوق. الحلقة العلوية القابلة للنفخ ترتفع تلقائياً مع ملء الماء — لا حاجة لتركيب إطار! بطانة PVC ثنائية الطبقات مضادة للأشعة فوق البنفسجية. السعة: 1078 لتر. تركيب في 10 دقائق. صمام تصريف. يشمل 2 رقعة إصلاح.",
    price: 14500, badge: null, badgeA: null
  },
  {
    id: "ap-002", category: "autoportante", ref: "28106",
    nameF: "Intex Easy Set Ø 2.44m × 61cm",
    nameA: "إنتيكس Easy Set قطر 2.44م × 61سم",
    descF: "Piscine autoportante Easy Set à anneau gonflable auto-portant. Les parois se remplissent automatiquement avec l'eau. PVC bi-couche résistant aux UV. Capacité : 2 006 L. Installation ultra-rapide en 10 min sans outil. Valve de vidange pour nettoyage facile. 2 pastilles de réparation incluses. Pour les enfants à partir de 6 ans et adultes.",
    descA: "حوض ذاتي الارتفاع Easy Set بحلقة نفخ ذاتية الارتفاع. الجدران ترتفع تلقائياً مع ملء الماء. PVC ثنائي الطبقات مقاوم للأشعة فوق البنفسجية. السعة: 2006 لتر. تركيب في 10 دقائق بدون أدوات. صمام تصريف. رقعتا إصلاح مضمنتان. للأطفال من 6 سنوات والبالغين.",
    price: 17500, badge: null, badgeA: null
  },
  {
    id: "ap-003", category: "autoportante", ref: "28108",
    nameF: "Intex Easy Set Ø 2.44m × 61cm (sans filtre)",
    nameA: "إنتيكس Easy Set قطر 2.44م × 61سم (بدون مضخة)",
    descF: "Version Easy Set Ø 2,44 m avec liner de qualité renforcée. Anneau gonflable supérieur auto-portant pour une structure parfaite. PVC bi-couche renforcé anti-UV. Capacité : 2 006 L. Montage en 10 min. Soupape de vidange incluse. À coupler avec un épurateur Intex pour une eau cristalline (vendu séparément).",
    descA: "نسخة Easy Set قطر 2.44م ببطانة مقواة الجودة. حلقة علوية ذاتية الارتفاع لهيكل مثالي. PVC ثنائي الطبقات مقوى. السعة: 2006 لتر. تركيب في 10 دقائق. صمام تصريف. يُنصح بإقرانه بمضخة ترشيح Intex للمياه الكريستالية (تُباع منفصلة).",
    price: 24000, badge: null, badgeA: null
  },
  {
    id: "ap-004", category: "autoportante", ref: "28143",
    nameF: "Intex Easy Set Grande Ø 3.96m × 84cm",
    nameA: "إنتيكس Easy Set كبير قطر 3.96م × 84سم",
    descF: "Le plus grand format Easy Set disponible — idéal pour les familles. Anneau gonflable supérieur pour une structure et stabilité maximales. Liner PVC 3 couches anti-UV et anti-perforation. Capacité : 7 290 L. Installation express en 10 min. Pour 4 adultes. Idéale pour profiter de l'été en famille sans les contraintes d'une piscine tubulaire.",
    descA: "أكبر نسخة Easy Set متاحة — مثالية للعائلات. حلقة علوية قابلة للنفخ لهيكل واستقرار أقصى. بطانة PVC ثلاثية الطبقات مضادة للثقب. السعة: 7290 لتر. تركيب في 10 دقائق. لـ 4 بالغين. مثالية للصيف العائلي بدون تعقيدات الأحواض الأنبوبية.",
    price: 24000, badge: "Bestseller", badgeA: "الأكثر مبيعاً"
  },
  {
    id: "ap-005", category: "autoportante", ref: "28132",
    nameF: "Intex Easy Set + Épurateur Ø 3.66m × 76cm",
    nameA: "إنتيكس Easy Set + مضخة ترشيح قطر 3.66م × 76سم",
    descF: "Piscine autoportante Easy Set livrée avec épurateur à cartouche — kit complet sans achat supplémentaire. Anneau gonflable supérieur pour une structure parfaite. Liner PVC 3 couches anti-UV. Capacité : 6 503 L. Épurateur à cartouche inclus pour une eau toujours filtrée. Montage en 10 min.",
    descA: "حوض ذاتي الارتفاع Easy Set مع مضخة ترشيح بخرطوشة — طقم كامل لا يستلزم شراء إضافي. حلقة علوية للهيكل المثالي. بطانة PVC ثلاثية الطبقات. السعة: 6503 لتر. مضخة خرطوشة مضمنة لمياه مرشحة دائماً. تركيب في 10 دقائق.",
    price: 28500, badge: "Kit Complet", badgeA: "طقم كامل"
  },
  {
    id: "ap-006", category: "autoportante", ref: "56475",
    nameF: "Intex Piscine Gonflable Family Lounge 2.29m × 2.29m × 66cm",
    nameA: "إنتيكس حوض Family Lounge نفخ 2.29م × 2.29م × 66سم",
    descF: "Le salon aquatique de la famille ! Sièges et repose-pieds gonflables intégrés pour se détendre dans l'eau sans effort. PVC haute qualité résistant aux UV. Capacité : env. 700 L. Gonflage rapide avec pompe à air. Parfaite pour les adultes qui souhaitent se prélasser tout en gardant un œil sur les enfants.",
    descA: "الصالون المائي العائلي! مقاعد ومساند أقدام مدمجة قابلة للنفخ للاسترخاء في الماء بسهولة. PVC عالي الجودة مقاوم للأشعة فوق البنفسجية. السعة: ~700 لتر. نفخ سريع. مثالية للبالغين الراغبين في الاسترخاء مع مراقبة الأطفال.",
    price: 14000, badge: "Coup de cœur", badgeA: "الأكثر محبة"
  },
  {
    id: "ap-007", category: "autoportante", ref: "57180",
    nameF: "Intex Piscine Gonflable Swim Center 2.03m × 1.52m × 48cm",
    nameA: "إنتيكس حوض Swim Center نفخ 2.03م × 1.52م × 48سم",
    descF: "Piscine gonflable rectangulaire Swim Center à 3 anneaux gonflables pour des parois solides. Liner PVC bi-couche résistant aux UV. Capacité : env. 600 L. Gonflage rapide en quelques minutes avec pompe à air. Deux poignées latérales pour transport facile. Idéale pour jardins, terrasses et balcons.",
    descA: "حوض سباحة نفخ مستطيل Swim Center بـ3 حلقات نفخ لجدران متينة. بطانة PVC ثنائية الطبقات. السعة: ~600 لتر. نفخ سريع في دقائق. مقبضان جانبيان للنقل السهل. مثالي للحدائق والتراسات والشرفات.",
    price: 11000, badge: null, badgeA: null
  },
  {
    id: "ap-008", category: "autoportante", ref: "57181",
    nameF: "Intex Piscine Gonflable Swim Center Mandarin 2.29m × 1.47m × 46cm",
    nameA: "إنتيكس حوض Swim Center Mandarin نفخ 2.29م × 1.47م × 46سم",
    descF: "Piscine gonflable rectangulaire Swim Center aux couleurs mandarin vives et estivales. 3 anneaux gonflables pour des parois solides et stables. PVC bi-couche résistant aux UV. Capacité : env. 580 L. Gonflage rapide en quelques minutes. Légère et facile à déplacer. Idéale pour jardins et terrasses. De 3 ans et plus.",
    descA: "حوض سباحة نفخ مستطيل Swim Center بألوان ماندارين زاهية. 3 حلقات نفخ لجدران متينة ومستقرة. PVC ثنائي الطبقات مقاوم للأشعة فوق البنفسجية. السعة: ~580 لتر. نفخ سريع في دقائق. خفيف وسهل النقل. مثالي للحدائق. من 3 سنوات فأكثر.",
    price: 11500, badge: null, badgeA: null
  },

  // ══════════════════════════════════════════════════════
  // 3. PISCINES ENFANTS & CENTRES DE JEUX
  // ══════════════════════════════════════════════════════
  {
    id: "en-001", category: "enfants", ref: "57190",
    nameF: "Intex Centre de Jeux Toboggan Gonflable 2.79m × 1.37m × 1.22m",
    nameA: "إنتيكس مركز ألعاب بزحليقة نفخ 2.79م × 1.37م × 1.22م",
    descF: "Centre de jeux gonflable tout-en-un avec toboggan amovible (longueur 102 cm, 2 poignées sécurité), maisonnette et plateforme. Zones latérales amovibles utilisables comme matelas. Petit bassin d'eau au pied du toboggan. Kit réparation inclus. À partir de 9 ans. Des heures de fun aquatique garanties dans le jardin !",
    descA: "مركز ألعاب نفخ متكامل مع زحليقة قابلة للفك (طول 102سم، مقبضا أمان)، منزل صغير ومنصة. جدران جانبية قابلة للإزالة تُستخدم كحصائر. حوض مائي صغير أسفل الزحليقة. طقم إصلاح. من 9 سنوات. ساعات من المتعة المائية في الحديقة!",
    price: 19000, badge: "Fun Garanti", badgeA: "متعة مضمونة"
  },
  {
    id: "en-002", category: "enfants", ref: "57440",
    nameF: "Intex Piscine Gonflable Baleine avec Spray 2.03m × 1.52m × 74cm",
    nameA: "إنتيكس حوض نفخ حوت مع رذاذ 2.03م × 1.52م × 74سم",
    descF: "Piscine gonflable pour enfants design baleine avec jet d'eau intégré pour une fraîcheur supplémentaire. Deux zones : pataugeoire profonde et zone de jeux. PVC haute qualité résistant aux UV. Capacité : env. 290 L. Gonflage facile. Pour les enfants à partir de 3 ans (supervision adulte recommandée).",
    descA: "حوض نفخ للأطفال بتصميم حوت ورذاذ مائي مدمج للانتعاش. منطقتان: خوض عميق ومنطقة ألعاب. PVC عالي الجودة مقاوم للأشعة فوق البنفسجية. السعة: ~290 لتر. نفخ سهل. للأطفال من 3 سنوات (يُنصح بإشراف بالغ).",
    price: 8000, badge: null, badgeA: null
  },
  {
    id: "en-003", category: "enfants", ref: "57482",
    nameF: "Intex Piscine Gonflable Baleine Ovale 1.63m × 1.07m × 46cm",
    nameA: "إنتيكس حوض بيضاوي نفخ حوت 1.63م × 1.07م × 46سم",
    descF: "Piscine gonflable ovale pour enfants avec décoration baleine en relief colorée. Design amusant qui stimule l'imagination. PVC bi-couche résistant aux UV. Capacité : env. 225 L. Facile à gonfler et ranger. Robuste et durable pour des étés de jeux. Pour les enfants à partir de 3 ans.",
    descA: "حوض نفخ بيضاوي للأطفال بزينة حوت بارزة وملونة. تصميم ممتع يحفز الخيال. PVC ثنائي الطبقات مقاوم للأشعة فوق البنفسجية. السعة: ~225 لتر. سهل النفخ والتخزين. متين لصيف بعد صيف من الألعاب. للأطفال من 3 سنوات.",
    price: 8700, badge: null, badgeA: null
  },
  {
    id: "en-004", category: "enfants", ref: "56441",
    nameF: "Intex Piscine Gonflable Sunset Glow Ø 1.68m × 46cm",
    nameA: "إنتيكس حوض Sunset Glow نفخ قطر 1.68م × 46سم",
    descF: "Piscine gonflable ronde Sunset Glow aux couleurs vives et estivales. Motifs tropicaux colorés pour une ambiance vacances. PVC bi-couche résistant aux UV et aux chocs. Capacité : env. 481 L. Gonflage rapide en quelques minutes. Légère et facile à transporter. Pour les enfants à partir de 3 ans.",
    descA: "حوض نفخ دائري Sunset Glow بألوان زاهية وصيفية. نقوش استوائية ملونة لأجواء عطلة. PVC ثنائي الطبقات. السعة: ~481 لتر. نفخ سريع في دقائق. خفيف وسهل النقل. للأطفال من 3 سنوات.",
    price: 6500, badge: null, badgeA: null
  },
  {
    id: "en-005", category: "enfants", ref: "57403",
    nameF: "Intex Baby Pool Rectangulaire 1.66m × 1.00m × 28cm",
    nameA: "إنتيكس حوض بيبي مستطيل 1.66م × 1.00م × 28سم",
    descF: "Pataugeoire rectangulaire pour bébés et tout-petits. Parois très basses (28 cm) conçues pour la sécurité des bébés dès 9 mois. PVC souple et confortable. Capacité : env. 145 L. Gonflage ultra-rapide. Légère et facile à ranger. La pataugeoire sécuritaire numéro 1 pour les nourrissons.",
    descA: "حوض خوض مستطيل للرضع والأطفال الصغار. جدران منخفضة جداً (28سم) للأمان من 9 أشهر. PVC لين ومريح. السعة: ~145 لتر. نفخ فائق السرعة. خفيف وسهل التخزين. حوض الخوض الأكثر أماناً للرضع.",
    price: 3200, badge: "Dès 9 mois", badgeA: "من 9 أشهر"
  },
  {
    id: "en-006", category: "enfants", ref: "57107",
    nameF: "Intex Mini Piscine Gonflable Sunset Glow Bébé Ø 61cm × 22cm",
    nameA: "إنتيكس حوض ميني Sunset Glow نفخ رضع قطر 61سم × 22سم",
    descF: "Mini piscine gonflable extra-compacte pour nourrissons. Diamètre Ø 61 cm et parois très basses (22 cm) pour une sécurité maximale dès les premiers mois. PVC souple et doux. Capacité : env. 26 L. Idéale pour rafraîchir bébé à la maison ou en déplacement. Légère et facile à gonfler à la bouche.",
    descA: "حوض نفخ ميني فائق الصغر للرضع. قطر 61سم وجدران منخفضة جداً (22سم) لأقصى أمان من الأشهر الأولى. PVC لين وناعم. السعة: ~26 لتر. مثالي لتبريد الرضيع في المنزل أو أثناء السفر. خفيف ونفخه بالفم ممكن.",
    price: 1500, badge: "Nouveau-né", badgeA: "للمولود الجديد"
  },
  {
    id: "en-007", category: "enfants", ref: "57422",
    nameF: "Intex Piscine Gonflable Sunset Glow (3 boudins) Ø 1.47m × 33cm",
    nameA: "إنتيكس حوض Sunset Glow نفخ (3 حلقات) قطر 1.47م × 33سم",
    descF: "Piscine gonflable ronde Sunset Glow à 3 anneaux gonflables. Couleurs tropicales vives et estivales pour une ambiance vacances. PVC bi-couche durable résistant aux UV. Capacité : env. 220 L. Gonflage facile à la bouche ou avec pompe. Légère et facile à transporter. Idéale pour les tout-petits. De 3 ans et plus.",
    descA: "حوض نفخ دائري Sunset Glow بـ3 حلقات نفخ. ألوان استوائية زاهية لأجواء العطلة. PVC ثنائي الطبقات مقاوم للأشعة فوق البنفسجية. السعة: ~220 لتر. نفخ سهل. خفيف وسهل النقل. مثالي للأطفال الصغار. من 3 سنوات فأكثر.",
    price: 4800, badge: null, badgeA: null
  },
  {
    id: "en-008", category: "enfants", ref: "57147",
    nameF: "Intex Centre de Jeux Gonflables My Garden 2.90m × 1.80m × 1.04m",
    nameA: "إنتيكس مركز ألعاب My Garden نفخ 2.90م × 1.80م × 1.04م",
    descF: "Grand centre de jeux aquatiques gonflable My Garden — un jardin aquatique complet pour les enfants ! Zone de pataugeoire, mini-toboggan, arcs gonflables et asperseur d'eau intégré. PVC haute qualité résistant. Facile à gonfler et dégonfler. Des heures de jeux garanties dans le jardin. De 3 à 6 ans.",
    descA: "مركز ألعاب مائية نفخ كبير My Garden — حديقة مائية كاملة! منطقة خوض ومزلقة صغيرة وأقواس نفخ ورشاش ماء مدمج. PVC عالي الجودة. سهل النفخ والتفريغ. ساعات من المتعة في الحديقة. من 3 إلى 6 سنوات.",
    price: 22000, badge: "Fun Garanti", badgeA: "متعة مضمونة"
  },
  {
    id: "en-009", category: "enfants", ref: "58431",
    nameF: "Intex Piscine Gonflable Flying Saucer Ø 1.88m × 46cm",
    nameA: "إنتيكس حوض نفخ Flying Saucer قطر 1.88م × 46سم",
    descF: "Piscine gonflable design soucoupe volante aux graphismes colorés et futuristes. 3 anneaux gonflables pour une structure robuste et stable. PVC haute qualité résistant aux UV. Capacité : env. 480 L. Gonflage rapide. Légère et facile à ranger. Un design original et amusant pour enfants et adultes. De 3 ans et plus.",
    descA: "حوض نفخ بتصميم طبق طائر ورسومات ملونة مستقبلية. 3 حلقات نفخ لهيكل متين ومستقر. PVC عالي الجودة مقاوم للأشعة فوق البنفسجية. السعة: ~480 لتر. نفخ سريع. خفيف وسهل التخزين. تصميم مرح ومميز. من 3 سنوات فأكثر.",
    price: 5500, badge: null, badgeA: null
  },
  {
    id: "en-010", category: "enfants", ref: "58426",
    nameF: "Intex Piscine Gonflable Crystal Blue Ø 1.47m × 33cm",
    nameA: "إنتيكس حوض Crystal Blue نفخ قطر 1.47م × 33سم",
    descF: "Piscine gonflable ronde Crystal Blue aux couleurs bleu cristal apaisantes. 3 anneaux gonflables pour des parois solides. PVC bi-couche résistant aux UV. Capacité : env. 220 L. Gonflage facile à la bouche ou avec pompe. Légère, facile à transporter et à ranger. Parfaite pour les jeunes enfants. De 3 ans et plus.",
    descA: "حوض نفخ دائري Crystal Blue بألوان أزرق كريستالي هادئة. 3 حلقات نفخ لجدران متينة. PVC ثنائي الطبقات مقاوم للأشعة فوق البنفسجية. السعة: ~220 لتر. نفخ سهل. خفيف وسهل التخزين. مثالي للأطفال الصغار. من 3 سنوات فأكثر.",
    price: 3800, badge: null, badgeA: null
  },

  // ══════════════════════════════════════════════════════
  // 4. BÂCHES DE PROTECTION
  // ══════════════════════════════════════════════════════
  {
    id: "ba-001", category: "baches", ref: "28020",
    nameF: "Intex Bâche de Protection Ronde Ø 2.44m",
    nameA: "إنتيكس غطاء حماية دائري قطر 2.44م",
    descF: "Bâche de protection ronde pour piscines Easy Set et tubulaires Ø 2,44 m. Protège l'eau des impuretés, feuilles, insectes et débris. Réduit l'évaporation et la consommation de produits chimiques. Polyéthylène résistant aux UV. Maintient l'eau propre plus longtemps entre deux filtrations.",
    descA: "غطاء حماية دائري لأحواض Easy Set والأنبوبية قطر 2.44م. يحمي الماء من الشوائب والأوراق والحشرات. يقلل التبخر والمواد الكيميائية. بولي إيثيلين مقاوم للأشعة فوق البنفسجية. يبقي الماء نظيفاً أطول بين الترشيحات.",
    price: 2000, badge: null, badgeA: null
  },
  {
    id: "ba-002", category: "baches", ref: "28030",
    nameF: "Intex Bâche de Protection Ronde Ø 3.05m",
    nameA: "إنتيكس غطاء حماية دائري قطر 3.05م",
    descF: "Bâche de protection ronde pour piscines tubulaires Ø 3,05 m. Protection efficace contre les impuretés et intempéries. Réduit l'évaporation et préserve la chaleur de l'eau. Polyéthylène résistant aux UV et à la déchirure. Compatible avec les modèles 28206 et 28208.",
    descA: "غطاء حماية دائري لأحواض الأنبوبية قطر 3.05م. حماية فعالة ضد الشوائب وتقلبات الجو. يقلل التبخر ويحافظ على دفء الماء. بولي إيثيلين مقاوم للأشعة فوق البنفسجية. متوافق مع موديلي 28206 و28208.",
    price: 3500, badge: null, badgeA: null
  },
  {
    id: "ba-003", category: "baches", ref: "28022",
    nameF: "Intex Bâche de Protection Ronde Ø 3.66m",
    nameA: "إنتيكس غطاء حماية دائري قطر 3.66م",
    descF: "Bâche de protection ronde pour grandes piscines Ø 3,66 m. Protection optimale contre impuretés, feuilles, debris et UV. Réduit significativement l'évaporation et maintient la chaleur de l'eau. Polyéthylène résistant et durable. Compatible piscine 28132.",
    descA: "غطاء حماية دائري لأحواض كبيرة قطر 3.66م. حماية مثلى ضد الشوائب والأوراق والحطام والأشعة فوق البنفسجية. يقلل التبخر بشكل ملحوظ ويحافظ على دفء الماء. متوافق مع حوض 28132.",
    price: 4000, badge: null, badgeA: null
  },
  {
    id: "ba-004", category: "baches", ref: "28036",
    nameF: "Intex Bâche de Protection Rectangulaire 2.60m × 1.60m",
    nameA: "إنتيكس غطاء حماية مستطيل 2.60م × 1.60م",
    descF: "Bâche de protection rectangulaire pour piscines 2,60 × 1,60 m. S'adapte parfaitement aux piscines rectangulaires de mêmes dimensions. Protection contre impuretés, feuilles, insectes et UV. Réduit l'évaporation et la consommation de chlore. Polyéthylène résistant et durable. Compatible modèle 28271.",
    descA: "غطاء حماية مستطيل لأحواض 2.60 × 1.60م. يتناسب تماماً مع الأحواض المستطيلة بنفس الأبعاد. حماية ضد الشوائب والأوراق والحشرات والأشعة فوق البنفسجية. يقلل التبخر والكلور. متوافق مع موديل 28271.",
    price: 4000, badge: null, badgeA: null
  },

  // ══════════════════════════════════════════════════════
  // 5. SPORTS NAUTIQUES & EMBARCATIONS
  // ══════════════════════════════════════════════════════
  {
    id: "nt-001", category: "nautique", ref: "68242",
    nameF: "Intex AquaQuest 320 Stand Up Paddle Gonflable 3.20m × 81cm × 15cm",
    nameA: "إنتيكس AquaQuest 320 لوح باددل سوب نفخ 3.20م × 81سم × 15سم",
    descF: "Stand Up Paddle gonflable AquaQuest 320 — performance et portabilité. Construction Drop Stitch double paroi ultra-rigide pour stabilité parfaite sur l'eau. Rails latéraux PVC double couche ultra-durables. Pad EVA antidérapant. 3 ailerons pour direction précise. Charge max : 150 kg. Kit complet : pagaie aluminium 216 cm + pompe à main + sac à dos de transport.",
    descA: "لوح Stand Up Paddle نفخ AquaQuest 320 — الأداء والتنقل معاً. بناء Drop Stitch مزدوج الجدار فائق الصلابة للاستقرار المثالي. قضبان PVC مزدوجة الطبقات. وسادة EVA مضادة للانزلاق. 3 زعانف للتوجيه الدقيق. الحمولة القصوى: 150كغ. طقم كامل: مجداف ألومنيوم 216سم + مضخة يدوية + حقيبة ظهر.",
    price: 94000, badge: "Sport Premium", badgeA: "رياضة فاخرة"
  },
  {
    id: "nt-002", category: "nautique", ref: "68303",
    nameF: "Intex Kayak Gonflable Excursion Pro K1 3.05m × 91cm × 46cm",
    nameA: "إنتيكس كاياك نفخ Excursion Pro K1 3.05م × 91سم × 46سم",
    descF: "Kayak gonflable monoplace Excursion Pro — parfait pour pêche et excursions. PVC 3 couches 0,75 mm ultra-résistant à l'abrasion, aux UV, au sel et aux hydrocarbures. Siège ajustable avec accoudoirs. Repose-pieds réglable. Porte-cannes à pêche intégrés. Compartiments de rangement avec anneaux D inox. Quille amovible. Capacité : 90 kg. Inclus : pagaie alu, pompe, kit réparation, sac transport.",
    descA: "كاياك نفخ أحادي المقعد Excursion Pro — مثالي للصيد والاستكشاف. PVC ثلاثي الطبقات 0.75مم فائق المقاومة. مقعد قابل للتعديل بمساندي ذراع. مساند أقدام. حامل سنانير مدمج. حجرات تخزين بحلقات D. زعنفة قابلة للفك. الحمولة: 90كغ. يشمل: مجداف ألومنيوم + مضخة + طقم إصلاح + حقيبة.",
    price: 72000, badge: "Pêche & Aventure", badgeA: "صيد ومغامرة"
  },
  {
    id: "nt-003", category: "nautique", ref: "58330",
    nameF: "Intex Bateau Gonflable Explorer 200 — 2 Personnes 1.85m × 94cm × 41cm",
    nameA: "إنتيكس قارب نفخ Explorer 200 — شخصان 1.85م × 94سم × 41سم",
    descF: "Bateau gonflable Explorer 200 pour 2 personnes. Sécurité maximale grâce à 3 chambres à air indépendantes (flottaison garantie même en cas de crevaison). PVC résistant aux UV. 2 sièges avec dossier gonflables. 2 rames aluminium incluses. Pompe incluse. Charge max : 120 kg. Kit réparation fourni. Idéal pour lac et rivière calme.",
    descA: "قارب نفخ Explorer 200 لشخصين. أقصى أمان بـ3 حجرات هواء مستقلة (الطفو مضمون حتى عند الثقب). PVC مقاوم للأشعة فوق البنفسجية. مقعدان بمسند ظهر. مجداف ألومنيوم مضمون. مضخة مضمنة. الحمولة القصوى: 120كغ. طقم إصلاح. للبحيرات والأنهار الهادئة.",
    price: 5500, badge: null, badgeA: null
  },
  {
    id: "nt-004", category: "nautique", ref: "53329",
    nameF: "Intex Bateau Gonflable Explorer 100 — 1 Personne 1.47m × 84cm × 36cm",
    nameA: "إنتيكس قارب نفخ Explorer 100 — شخص واحد 1.47م × 84سم × 36سم",
    descF: "Bateau gonflable Explorer 100 pour 1 personne — compact et facile à transporter. 3 chambres à air indépendantes pour sécurité maximale. PVC résistant aux UV. Siège confortable avec dossier gonflable. Rame aluminium incluse. Pompe incluse. Charge max : 60 kg. Kit réparation fourni. Parfait pour se détendre et pagayer seul.",
    descA: "قارب نفخ Explorer 100 لشخص واحد — مدمج وسهل الحمل. 3 حجرات هواء مستقلة لأقصى أمان. PVC مقاوم للأشعة فوق البنفسجية. مقعد مريح بمسند ظهر. مجداف ألومنيوم. مضخة. الحمولة القصوى: 60كغ. طقم إصلاح. مثالي للاسترخاء والتجديف الفردي.",
    price: 4000, badge: null, badgeA: null
  },
  {
    id: "nt-005", category: "nautique", ref: "68241",
    nameF: "Intex Stand Up Paddle Gonflable AquaQuest 240 2.40m × 76cm × 13cm",
    nameA: "إنتيكس لوح Stand Up Paddle نفخ AquaQuest 240 — 2.40م × 76سم × 13سم",
    descF: "Stand Up Paddle gonflable AquaQuest 240 — compact, léger et facile à maîtriser. Construction Drop Stitch double paroi rigide pour une stabilité parfaite sur l'eau. Pad EVA antidérapant confortable. 3 ailerons amovibles pour une direction précise. Charge max : 100 kg. Kit complet : pagaie réglable + pompe à main + sac de transport + leash de sécurité.",
    descA: "لوح Stand Up Paddle نفخ AquaQuest 240 — مدمج وخفيف وسهل الإتقان. بناء Drop Stitch مزدوج الجدار صلب للاستقرار المثالي على الماء. وسادة EVA مضادة للانزلاق. 3 زعانف قابلة للفك. الحمولة القصوى: 100كغ. طقم كامل: مجداف قابل للضبط + مضخة + حقيبة + حزام أمان.",
    price: 85000, badge: "Sport Pro", badgeA: "رياضة احترافية"
  },
  {
    id: "nt-006", category: "nautique", ref: "58332",
    nameF: "Intex Bateau Gonflable Explorer Pro 300 2.44m × 1.17m × 36cm",
    nameA: "إنتيكس قارب Explorer Pro 300 نفخ 2.44م × 1.17م × 36سم",
    descF: "Bateau gonflable Explorer Pro 300 pour 3 personnes — l'aventure en sécurité sur l'eau. 3 chambres à air indépendantes pour flottaison garantie même en cas de crevaison. Fond rigide gonflé pour plus de stabilité. PVC haute résistance anti-UV. 2 sièges adultes avec dossier + strapontin. 2 rames aluminium + pompe incluses. Charge max : 180 kg.",
    descA: "قارب نفخ Explorer Pro 300 لـ3 أشخاص — المغامرة بأمان على الماء. 3 حجرات هواء مستقلة للطفو المضمون. قاع صلب نفخ للاستقرار. PVC عالي المقاومة. مقعدان بمسند ظهر + مقعد ثالث. مجداف ألومنيوم + مضخة مضمونة. الحمولة القصوى: 180كغ.",
    price: 11000, badge: "3 Personnes", badgeA: "3 أشخاص"
  },

  // ══════════════════════════════════════════════════════
  // 6. JEUX GONFLABLES & BOUÉES CHEVAUCHABLES
  // ══════════════════════════════════════════════════════
  {
    id: "jx-001", category: "jeux", ref: "57558",
    nameF: "Intex Bouée Géante Flamant Rose 1.42m × 1.37m × 97cm",
    nameA: "إنتيكس عوامة فلامنغو عملاقة 1.42م × 1.37م × 97سم",
    descF: "LE must-have de l'été — Bouée chevauchable géante Flamant Rose Intex ! Design iconique aux couleurs rose vif sur PVC haute qualité résistant. 2 poignées intégrées pour une tenue assurée. Valve de gonflage rapide. Utilisation en piscine ou à la plage. Pour adultes et enfants. L'accessoire photo incontournable de la saison !",
    descA: "لازمة الصيف — عوامة ركوب فلامنغو عملاقة من Intex! تصميم أيقوني بألوان وردية زاهية على PVC عالي الجودة. مقبضان مدمجان للإمساك المضمون. صمام نفخ سريع. للحوض والشاطئ. للبالغين والأطفال. إكسسوار الصيف التصويري الذي لا غنى عنه!",
    price: 6000, badge: "Incontournable", badgeA: "لا غنى عنها"
  },
  {
    id: "jx-002", category: "jeux", ref: "58523",
    nameF: "Intex Bouée Chevauchable Baleine Réaliste 1.52m × 1.14m",
    nameA: "إنتيكس عوامة ركوب حوت واقعية 1.52م × 1.14م",
    descF: "Bouée chevauchable baleine réaliste Intex avec graphismes détaillés et ultra-réalistes. PVC haute qualité résistant et durable. 2 poignées intégrées pour une prise sécurisée. Valve à gonflage rapide. Idéale en piscine ou à la plage. Pour enfants à partir de 3 ans (avec supervision adulte). Légère et facile à ranger.",
    descA: "عوامة ركوب حوت واقعية من Intex برسومات تفصيلية فائقة الواقعية. PVC عالي الجودة ومتين. مقبضان مدمجان للإمساك الآمن. صمام نفخ سريع. للحوض والشاطئ. للأطفال من 3 سنوات (بإشراف بالغ). خفيفة وسهلة التخزين.",
    price: 3200, badge: null, badgeA: null
  },
  {
    id: "jx-003", category: "jeux", ref: "58535",
    nameF: "Intex Bouée Chevauchable Dauphin Réaliste 1.75m × 1.19m",
    nameA: "إنتيكس عوامة ركوب دلفين واقعية 1.75م × 1.19م",
    descF: "Bouée chevauchable dauphin réaliste Intex — grand format pour fun maximum ! Design ultra-réaliste avec graphismes HD détaillés. PVC haute qualité résistant. 2 poignées intégrées pour prise sécurisée. Gonflage rapide. Pour enfants et adultes. Utilisation en piscine, lac ou plage. Créez des souvenirs d'été inoubliables !",
    descA: "عوامة ركوب دلفين واقعية من Intex — حجم كبير لمتعة قصوى! تصميم فائق الواقعية بطباعة HD تفصيلية. PVC عالي الجودة. مقبضان مدمجان. نفخ سريع. للأطفال والبالغين. في الحوض والبحيرة والشاطئ. اصنع ذكريات صيف لا تُنسى!",
    price: 3300, badge: null, badgeA: null
  },

  // ══════════════════════════════════════════════════════
  // 7. FILTRATION, MATELAS & SÉCURITÉ ENFANTS
  // ══════════════════════════════════════════════════════
  {
    id: "ac-001", category: "accessoires", ref: "26604",
    nameF: "Intex Épurateur à Cartouche de Filtration 2 006 L/h",
    nameA: "إنتيكس مضخة ترشيح بخرطوشة 2006 لتر/ساعة",
    descF: "Épurateur à cartouche Intex pour une eau cristalline tout l'été. Débit de filtration : 2 006 L/h. Compatible avec les piscines Intex jusqu'à Ø 3,66 m. Utilise cartouches type A (incluses). Système anti-retour pour sécurité renforcée. Connexion facile au système de prise d'eau de la piscine. Indispensable pour maintenir une eau saine.",
    descA: "مضخة ترشيح Intex بخرطوشة لمياه كريستالية طوال الصيف. معدل الترشيح: 2006 لتر/ساعة. متوافقة مع أحواض Intex حتى قطر 3.66م. تستخدم خراطيش نوع A (مضمنة). نظام مضاد للارتداد. توصيل سهل. ضرورية للحفاظ على مياه صحية.",
    price: 14000, badge: "Essentiel", badgeA: "ضروري"
  },
  {
    id: "ac-002", category: "accessoires", ref: "64765",
    nameF: "Intex Matelas Gonflable Camping 2 Places 2.03m × 1.52m × 25cm",
    nameA: "إنتيكس مرتبة هوائية تخييم لشخصين 2.03م × 1.52م × 25سم",
    descF: "Matelas gonflable camping confort 2 places. Hauteur 25 cm pour confort optimal et accès facile. Surface velours floqué ultra-doux. Structure interne en fibres entrelacées pour maintien parfait. Valve Pinch-n-Pull pour gonflage/dégonflage rapide. Charge max : 182 kg. Pompe non incluse. Idéal pour camping, invités ou terrasse.",
    descA: "مرتبة هوائية للتخييم لشخصين مريحة. ارتفاع 25سم لراحة مثلى. سطح مخملي ناعم للغاية. هيكل داخلي من ألياف متشابكة للدعم المثالي. صمام Pinch-n-Pull للنفخ السريع. الحمولة القصوى: 182كغ. مضخة غير مضمنة. مثالية للتخييم والضيوف والتراس.",
    price: 10000, badge: null, badgeA: null
  },
  {
    id: "ac-003", category: "accessoires", ref: "58641",
    nameF: "Intex Brassards de Natation Gonflables (3-6 ans) 23cm × 15cm",
    nameA: "إنتيكس عوامات ذراع سباحة نفخ (3-6 سنوات) 23سم × 15سم",
    descF: "Brassards de natation gonflables pour enfants 3-6 ans (18-30 kg). 2 chambres à air indépendantes pour sécurité maximale — même si une chambre se dégonfle, l'enfant reste à flot. Valve de gonflage à pression pour gonflage précis et sécurisé. PVC haute qualité résistant. Taille 23 × 15 cm. Indispensable pour l'apprentissage de la natation.",
    descA: "عوامات ذراع سباحة للأطفال 3-6 سنوات (18-30 كغ). حجرتا هواء مستقلتان — حتى لو تفرغت إحداهما، يبقى الطفل طافياً. صمام نفخ بالضغط للنفخ الدقيق. PVC عالي الجودة. المقاس: 23 × 15سم. ضرورية لتعلم السباحة.",
    price: 700, badge: null, badgeA: null
  },
  {
    id: "ac-004", category: "accessoires", ref: "56669",
    nameF: "Intex Brassards de Natation Deluxe (3-6 ans) 23cm × 15cm",
    nameA: "إنتيكس عوامات ذراع سباحة ديلوكس (3-6 سنوات) 23سم × 15سم",
    descF: "Brassards Deluxe — version premium des brassards Intex. 2 chambres à air indépendantes renforcées avec valve anti-retour sécurisée. PVC qualité supérieure extra-résistant. Design coloré et attractif pour enfants. Taille 23 × 15 cm. Pour enfants 3-6 ans (18-30 kg). Le maximum de sécurité aquatique pour votre enfant !",
    descA: "عوامات ذراع ديلوكس — النسخة الفاخرة. حجرتا هواء مستقلتان مقواتان مع صمام مضاد للارتداد. PVC ممتاز فائق المقاومة. تصميم ملون وجذاب. المقاس: 23 × 15سم. للأطفال 3-6 سنوات (18-30 كغ). أقصى درجات الأمان المائي!",
    price: 800, badge: "Deluxe", badgeA: "ديلوكس"
  }

];
