const quizData = [
  {
    "word": "a",
    "meaning": "하나의"
  },
  {
    "word": "abandon",
    "meaning": "버리다"
  },
  {
    "word": "able",
    "meaning": "할 수 있는"
  },
  {
    "word": "aboard",
    "meaning": "배로"
  },
  {
    "word": "abort",
    "meaning": "유산하다"
  },
  {
    "word": "about",
    "meaning": "-에 대하여"
  },
  {
    "word": "above",
    "meaning": "-보다 위에"
  },
  {
    "word": "abroad",
    "meaning": "외국으로"
  },
  {
    "word": "absent",
    "meaning": "부재의"
  },
  {
    "word": "absolute",
    "meaning": "절대의"
  },
  {
    "word": "absorb",
    "meaning": "흡수하다"
  },
  {
    "word": "abstract",
    "meaning": "추상적인"
  },
  {
    "word": "absurd",
    "meaning": "불합리한"
  },
  {
    "word": "abundant",
    "meaning": "풍부한"
  },
  {
    "word": "abuse",
    "meaning": "남용"
  },
  {
    "word": "academy",
    "meaning": "학술원"
  },
  {
    "word": "accelerate",
    "meaning": "가속하다 속도가 가해지다"
  },
  {
    "word": "accent",
    "meaning": "액센트"
  },
  {
    "word": "accept",
    "meaning": "받아들이다"
  },
  {
    "word": "access",
    "meaning": "접근"
  },
  {
    "word": "accident",
    "meaning": "뜻밖의 사건"
  },
  {
    "word": "accommodate",
    "meaning": "수용하다"
  },
  {
    "word": "accompany",
    "meaning": "동반하다"
  },
  {
    "word": "accomplish",
    "meaning": "이루다"
  },
  {
    "word": "accord",
    "meaning": "일치하다"
  },
  {
    "word": "account",
    "meaning": "설명하다 계산"
  },
  {
    "word": "accumulate",
    "meaning": "축적하다"
  },
  {
    "word": "accurate",
    "meaning": "정확한"
  },
  {
    "word": "accuse",
    "meaning": "고발하다"
  },
  {
    "word": "achieve",
    "meaning": "성취하다"
  },
  {
    "word": "acid",
    "meaning": "산 신"
  },
  {
    "word": "acknowledge",
    "meaning": "인정하다"
  },
  {
    "word": "acquaint",
    "meaning": "알리다"
  },
  {
    "word": "acquire",
    "meaning": "얻다"
  },
  {
    "word": "acquisition",
    "meaning": "획득"
  },
  {
    "word": "across",
    "meaning": "가로질러"
  },
  {
    "word": "act",
    "meaning": "vi행동하다"
  },
  {
    "word": "activate",
    "meaning": "활동적으로 하다"
  },
  {
    "word": "actual",
    "meaning": "현실의"
  },
  {
    "word": "acute",
    "meaning": "날카로운"
  },
  {
    "word": "adapt",
    "meaning": "적용시키다"
  },
  {
    "word": "add",
    "meaning": "추가하다"
  },
  {
    "word": "addict",
    "meaning": "열중하게 하다"
  },
  {
    "word": "address",
    "meaning": "말을 걸다"
  },
  {
    "word": "adequate",
    "meaning": "충분한"
  },
  {
    "word": "adjust",
    "meaning": "맞추다"
  },
  {
    "word": "administer",
    "meaning": "관리하다"
  },
  {
    "word": "admire",
    "meaning": "감복하다"
  },
  {
    "word": "admission",
    "meaning": "입장"
  },
  {
    "word": "admit",
    "meaning": "받아들이다"
  },
  {
    "word": "adolescent",
    "meaning": "청년기의"
  },
  {
    "word": "adopt",
    "meaning": "채용하다"
  },
  {
    "word": "adult",
    "meaning": "성인"
  },
  {
    "word": "advance",
    "meaning": "나아가다"
  },
  {
    "word": "advantage",
    "meaning": "유리한 입장"
  },
  {
    "word": "adventure",
    "meaning": "모험 모험하다"
  },
  {
    "word": "adverse",
    "meaning": "거꾸로의"
  },
  {
    "word": "advertize",
    "meaning": "광고하다"
  },
  {
    "word": "advise",
    "meaning": "충고하다"
  },
  {
    "word": "advocate",
    "meaning": "변호사"
  },
  {
    "word": "aesthetic",
    "meaning": "미적인"
  },
  {
    "word": "affair",
    "meaning": "일"
  },
  {
    "word": "affect",
    "meaning": "영향을 주다"
  },
  {
    "word": "affection",
    "meaning": "애정"
  },
  {
    "word": "affiliate",
    "meaning": "회원으로 가입시키다"
  },
  {
    "word": "afford",
    "meaning": "여유가 있다"
  },
  {
    "word": "afraid",
    "meaning": "두려워하여"
  },
  {
    "word": "after",
    "meaning": "후에"
  },
  {
    "word": "afternoon",
    "meaning": "오후"
  },
  {
    "word": "again",
    "meaning": "다시"
  },
  {
    "word": "against",
    "meaning": "…에 반대하여"
  },
  {
    "word": "age",
    "meaning": "연령"
  },
  {
    "word": "agency",
    "meaning": "기능"
  },
  {
    "word": "agenda",
    "meaning": "안건"
  },
  {
    "word": "agent",
    "meaning": "대리인"
  },
  {
    "word": "aggressive",
    "meaning": "침략적인"
  },
  {
    "word": "ago",
    "meaning": "이전에"
  },
  {
    "word": "agree",
    "meaning": "동의하다"
  },
  {
    "word": "agriculture",
    "meaning": "농업"
  },
  {
    "word": "ahead",
    "meaning": "전방에"
  },
  {
    "word": "aid",
    "meaning": "도와 주다"
  },
  {
    "word": "aim",
    "meaning": "겨누다"
  },
  {
    "word": "air",
    "meaning": "공기"
  },
  {
    "word": "airplane",
    "meaning": "비행기"
  },
  {
    "word": "aircraft",
    "meaning": "항공기"
  },
  {
    "word": "airline",
    "meaning": "정기항공"
  },
  {
    "word": "airport",
    "meaning": "공항"
  },
  {
    "word": "aisle",
    "meaning": "측면복도"
  },
  {
    "word": "alert",
    "meaning": "빈틈없는"
  },
  {
    "word": "alien",
    "meaning": "외국의"
  },
  {
    "word": "alike",
    "meaning": "비슷한"
  },
  {
    "word": "alive",
    "meaning": "살아있는"
  },
  {
    "word": "all",
    "meaning": "모든"
  },
  {
    "word": "allocate",
    "meaning": "할당하다"
  },
  {
    "word": "allow",
    "meaning": "허락하다"
  },
  {
    "word": "ally",
    "meaning": "동맹하다"
  },
  {
    "word": "almost",
    "meaning": "거의"
  },
  {
    "word": "alone",
    "meaning": "다만 홀로(혼자서)"
  },
  {
    "word": "along",
    "meaning": "-을 따라"
  },
  {
    "word": "alongside",
    "meaning": "-의 곁에"
  },
  {
    "word": "aloud",
    "meaning": "큰 소리로"
  },
  {
    "word": "already",
    "meaning": "이미"
  },
  {
    "word": "alright",
    "meaning": "더할나위없이"
  },
  {
    "word": "also",
    "meaning": "-도 또한"
  },
  {
    "word": "alter",
    "meaning": "바꾸다"
  },
  {
    "word": "alternative",
    "meaning": "어느 한쪽의 양자택일"
  },
  {
    "word": "although",
    "meaning": "비록 -일지라도"
  },
  {
    "word": "altogether",
    "meaning": "전혀"
  },
  {
    "word": "always",
    "meaning": "늘"
  },
  {
    "word": "A.M.",
    "meaning": "오전"
  },
  {
    "word": "amaze",
    "meaning": "깜짝 놀라게 하다"
  },
  {
    "word": "ambassador",
    "meaning": "대사"
  },
  {
    "word": "ambition",
    "meaning": "야심"
  },
  {
    "word": "among",
    "meaning": "-중에"
  },
  {
    "word": "amount",
    "meaning": "(금액이)-이 되다"
  },
  {
    "word": "amplify",
    "meaning": "확대하다"
  },
  {
    "word": "amuse",
    "meaning": "재미나게 하다"
  },
  {
    "word": "analyze",
    "meaning": "분해하다"
  },
  {
    "word": "anchor",
    "meaning": "닻"
  },
  {
    "word": "ancient",
    "meaning": "옛날의"
  },
  {
    "word": "and",
    "meaning": "및"
  },
  {
    "word": "angel",
    "meaning": "천사"
  },
  {
    "word": "anger",
    "meaning": "성"
  },
  {
    "word": "angle",
    "meaning": "각"
  },
  {
    "word": "animal",
    "meaning": "동물"
  },
  {
    "word": "anniversary",
    "meaning": "기념일 예년의"
  },
  {
    "word": "announce",
    "meaning": "알리다"
  },
  {
    "word": "annoy",
    "meaning": "귀찮게하다"
  },
  {
    "word": "annual",
    "meaning": "일년의"
  },
  {
    "word": "another",
    "meaning": "또 하나"
  },
  {
    "word": "answer",
    "meaning": "대답"
  },
  {
    "word": "ant",
    "meaning": "개미"
  },
  {
    "word": "anticipate",
    "meaning": "예기하다"
  },
  {
    "word": "anxiety",
    "meaning": "근심"
  },
  {
    "word": "anxious",
    "meaning": "걱정되는"
  },
  {
    "word": "any",
    "meaning": "어떤"
  },
  {
    "word": "apart",
    "meaning": "떨어져서"
  },
  {
    "word": "apology",
    "meaning": "사과"
  },
  {
    "word": "apparent",
    "meaning": "명백한"
  },
  {
    "word": "appeal",
    "meaning": "간청하다"
  },
  {
    "word": "appear",
    "meaning": "나타나다"
  },
  {
    "word": "apple",
    "meaning": "사과"
  },
  {
    "word": "applicant",
    "meaning": "지원자"
  },
  {
    "word": "apply",
    "meaning": "(물건을)대다"
  },
  {
    "word": "appoint",
    "meaning": "지정하다"
  },
  {
    "word": "appreciate",
    "meaning": "감상하다"
  },
  {
    "word": "approach",
    "meaning": "다가가다"
  },
  {
    "word": "appropriate",
    "meaning": "적당한"
  },
  {
    "word": "approve",
    "meaning": "시인하다"
  },
  {
    "word": "approximate",
    "meaning": "어림셈의"
  },
  {
    "word": "architect",
    "meaning": "건축가"
  },
  {
    "word": "architecture",
    "meaning": "건축"
  },
  {
    "word": "archive",
    "meaning": "기록보관소"
  },
  {
    "word": "area",
    "meaning": "면적"
  },
  {
    "word": "argue",
    "meaning": "논하다"
  },
  {
    "word": "arise",
    "meaning": "생기다"
  },
  {
    "word": "arm",
    "meaning": "팔"
  },
  {
    "word": "army",
    "meaning": "육군"
  },
  {
    "word": "around",
    "meaning": "사방에"
  },
  {
    "word": "arrange",
    "meaning": "가지런히 하다"
  },
  {
    "word": "arrest",
    "meaning": "체포하다"
  },
  {
    "word": "arrive",
    "meaning": "도착하다"
  },
  {
    "word": "arrow",
    "meaning": "화살"
  },
  {
    "word": "art",
    "meaning": "예술"
  },
  {
    "word": "article",
    "meaning": "물품"
  },
  {
    "word": "artificial",
    "meaning": "인공의"
  },
  {
    "word": "as",
    "meaning": "-와 같은 정도로"
  },
  {
    "word": "ash",
    "meaning": "회"
  },
  {
    "word": "aside",
    "meaning": "곁에"
  },
  {
    "word": "ask",
    "meaning": "묻다"
  },
  {
    "word": "asleep",
    "meaning": "잠들은"
  },
  {
    "word": "aspect",
    "meaning": "관점"
  },
  {
    "word": "aspire",
    "meaning": "열망하다"
  },
  {
    "word": "assault",
    "meaning": "습격"
  },
  {
    "word": "assemble",
    "meaning": "모으다"
  },
  {
    "word": "assert",
    "meaning": "단언하다"
  },
  {
    "word": "assess",
    "meaning": "(세금 등을)사정하다"
  },
  {
    "word": "asset",
    "meaning": "자산"
  },
  {
    "word": "assign",
    "meaning": "할당하다"
  },
  {
    "word": "assist",
    "meaning": "돕다"
  },
  {
    "word": "associate",
    "meaning": "연상하다"
  },
  {
    "word": "assume",
    "meaning": "취하다"
  },
  {
    "word": "assure",
    "meaning": "보증하다"
  },
  {
    "word": "astonish",
    "meaning": "놀라게 하다"
  },
  {
    "word": "at",
    "meaning": "-에서"
  },
  {
    "word": "athlete",
    "meaning": "운동가"
  },
  {
    "word": "atmosphere",
    "meaning": "대기"
  },
  {
    "word": "atom",
    "meaning": "원자"
  },
  {
    "word": "attach",
    "meaning": "붙이다"
  },
  {
    "word": "attack",
    "meaning": "공격하다"
  },
  {
    "word": "attain",
    "meaning": "이르다"
  },
  {
    "word": "attempt",
    "meaning": "시도하다"
  },
  {
    "word": "attend",
    "meaning": "출석하다"
  },
  {
    "word": "attention",
    "meaning": "주의"
  },
  {
    "word": "attitude",
    "meaning": "태도"
  },
  {
    "word": "attorney",
    "meaning": "변호사"
  },
  {
    "word": "attract",
    "meaning": "끌어 당기다"
  },
  {
    "word": "attribute",
    "meaning": "속성"
  },
  {
    "word": "auction",
    "meaning": "경매"
  },
  {
    "word": "audience",
    "meaning": "청중"
  },
  {
    "word": "aunt",
    "meaning": "아주머니"
  },
  {
    "word": "authentic",
    "meaning": "진짜의"
  },
  {
    "word": "author",
    "meaning": "저자"
  },
  {
    "word": "autobiography",
    "meaning": "자서전"
  },
  {
    "word": "automatic",
    "meaning": "자동의"
  },
  {
    "word": "automobile",
    "meaning": "자동차 자동차의"
  },
  {
    "word": "available",
    "meaning": "쓸모있는"
  },
  {
    "word": "avenue",
    "meaning": "가로수길"
  },
  {
    "word": "average",
    "meaning": "평균"
  },
  {
    "word": "avoid",
    "meaning": "피하다"
  },
  {
    "word": "await",
    "meaning": "기다리다"
  },
  {
    "word": "awake",
    "meaning": "깨우다"
  },
  {
    "word": "award",
    "meaning": "상"
  },
  {
    "word": "aware",
    "meaning": "알고 있는"
  },
  {
    "word": "away",
    "meaning": "떨어져서"
  },
  {
    "word": "awesome",
    "meaning": "무서운"
  },
  {
    "word": "awful",
    "meaning": "두려운"
  },
  {
    "word": "awkward",
    "meaning": "어색한"
  },
  {
    "word": "baby",
    "meaning": "갓난아이, 막내   관심사, 골치아픈 일,"
  },
  {
    "word": "back",
    "meaning": "등"
  },
  {
    "word": "background",
    "meaning": "배경"
  },
  {
    "word": "bad",
    "meaning": "나쁜"
  },
  {
    "word": "bake",
    "meaning": "굽다"
  },
  {
    "word": "balance",
    "meaning": "균형"
  },
  {
    "word": "ball",
    "meaning": "공"
  },
  {
    "word": "balloon",
    "meaning": "기구"
  },
  {
    "word": "ban",
    "meaning": "금지"
  },
  {
    "word": "band",
    "meaning": "그룹"
  },
  {
    "word": "bang",
    "meaning": "강타"
  },
  {
    "word": "bank",
    "meaning": "둑"
  },
  {
    "word": "bankrupt",
    "meaning": "파산자"
  },
  {
    "word": "bar",
    "meaning": "막대기"
  },
  {
    "word": "bare",
    "meaning": "벌거벗은"
  },
  {
    "word": "bargain",
    "meaning": "매매"
  },
  {
    "word": "bark",
    "meaning": "짖다"
  },
  {
    "word": "barn",
    "meaning": "헛간"
  },
  {
    "word": "barrier",
    "meaning": "장벽"
  },
  {
    "word": "base",
    "meaning": "기초"
  },
  {
    "word": "baseball",
    "meaning": "야구"
  },
  {
    "word": "basic",
    "meaning": "기본의"
  },
  {
    "word": "basis",
    "meaning": "기초"
  },
  {
    "word": "basket",
    "meaning": "바구니"
  },
  {
    "word": "basketball",
    "meaning": "농구"
  },
  {
    "word": "bat",
    "meaning": "배트"
  },
  {
    "word": "bath",
    "meaning": "목욕"
  },
  {
    "word": "bathroom",
    "meaning": "욕실"
  },
  {
    "word": "battery",
    "meaning": "전지"
  },
  {
    "word": "battle",
    "meaning": "전투"
  },
  {
    "word": "bay",
    "meaning": "만"
  },
  {
    "word": "be",
    "meaning": "-이다"
  },
  {
    "word": "beach",
    "meaning": "해안"
  },
  {
    "word": "beam",
    "meaning": "광선"
  },
  {
    "word": "bean",
    "meaning": "콩"
  },
  {
    "word": "bear",
    "meaning": "나르다"
  },
  {
    "word": "beard",
    "meaning": "턱수염"
  },
  {
    "word": "beast",
    "meaning": "짐승"
  },
  {
    "word": "beat",
    "meaning": "치다"
  },
  {
    "word": "beauty",
    "meaning": "아름다움"
  },
  {
    "word": "because",
    "meaning": "왜냐하면"
  },
  {
    "word": "become",
    "meaning": "-이 되다"
  },
  {
    "word": "bed",
    "meaning": "침대"
  },
  {
    "word": "bedroom",
    "meaning": "침실 성적인"
  },
  {
    "word": "bee",
    "meaning": "꿀벌"
  },
  {
    "word": "beef",
    "meaning": "쇠고기"
  },
  {
    "word": "beer",
    "meaning": "맥주"
  },
  {
    "word": "before",
    "meaning": "앞에"
  },
  {
    "word": "beg",
    "meaning": "청하다"
  },
  {
    "word": "begin",
    "meaning": "시작하다"
  },
  {
    "word": "behalf",
    "meaning": "위함"
  },
  {
    "word": "behave",
    "meaning": "행동하다"
  },
  {
    "word": "behavior",
    "meaning": "행동"
  },
  {
    "word": "behind",
    "meaning": "뒤에"
  },
  {
    "word": "believe",
    "meaning": "믿다"
  },
  {
    "word": "bell",
    "meaning": "종"
  },
  {
    "word": "belong",
    "meaning": "속하다"
  },
  {
    "word": "below",
    "meaning": "아래에"
  },
  {
    "word": "bend",
    "meaning": "구부리다"
  },
  {
    "word": "beneath",
    "meaning": "-의 바로 아래에"
  },
  {
    "word": "benefit",
    "meaning": "이익"
  },
  {
    "word": "berry",
    "meaning": "액과"
  },
  {
    "word": "beside",
    "meaning": "-의 곁에"
  },
  {
    "word": "bet",
    "meaning": "걸다"
  },
  {
    "word": "betray",
    "meaning": "배반하다"
  },
  {
    "word": "between",
    "meaning": "-의 사이에 사이에"
  },
  {
    "word": "beyond",
    "meaning": "저편에"
  },
  {
    "word": "bias",
    "meaning": "치우침"
  },
  {
    "word": "bible",
    "meaning": "성서, 성경"
  },
  {
    "word": "bicycle",
    "meaning": "자전거 자전거를 타다"
  },
  {
    "word": "big",
    "meaning": "큰"
  },
  {
    "word": "bill",
    "meaning": "계산서"
  },
  {
    "word": "billion",
    "meaning": "10억"
  },
  {
    "word": "bin",
    "meaning": "궤"
  },
  {
    "word": "bind",
    "meaning": "매다"
  },
  {
    "word": "biography",
    "meaning": "전기"
  },
  {
    "word": "biology",
    "meaning": "생물학"
  },
  {
    "word": "bird",
    "meaning": "새"
  },
  {
    "word": "birth",
    "meaning": "출생"
  },
  {
    "word": "birthday",
    "meaning": "생일"
  },
  {
    "word": "bishop",
    "meaning": "주교"
  },
  {
    "word": "bit",
    "meaning": "bite의 과거(분사) 작은 조각"
  },
  {
    "word": "bite",
    "meaning": "물다"
  },
  {
    "word": "bitter",
    "meaning": "쓴"
  },
  {
    "word": "black",
    "meaning": "검은"
  },
  {
    "word": "blame",
    "meaning": "책망하다"
  },
  {
    "word": "blank",
    "meaning": "공백"
  },
  {
    "word": "blanket",
    "meaning": "담요"
  },
  {
    "word": "blast",
    "meaning": "돌풍"
  },
  {
    "word": "blend",
    "meaning": "혼합하다"
  },
  {
    "word": "bless",
    "meaning": "축복하다"
  },
  {
    "word": "blind",
    "meaning": "눈먼"
  },
  {
    "word": "blink",
    "meaning": "(눈을)깜빡거리다"
  },
  {
    "word": "block",
    "meaning": "덩어리"
  },
  {
    "word": "blonde",
    "meaning": "(살결이 흰)금발의 여성"
  },
  {
    "word": "blood",
    "meaning": "피"
  },
  {
    "word": "bloom",
    "meaning": "쇳덩이"
  },
  {
    "word": "blossom",
    "meaning": "(과수의)꽃"
  },
  {
    "word": "blow",
    "meaning": "강타"
  },
  {
    "word": "blue",
    "meaning": "푸른"
  },
  {
    "word": "board",
    "meaning": "널빤지"
  },
  {
    "word": "boat",
    "meaning": "배"
  },
  {
    "word": "body",
    "meaning": "신체"
  },
  {
    "word": "boil",
    "meaning": "끓다"
  },
  {
    "word": "bold",
    "meaning": "대담한"
  },
  {
    "word": "bomb",
    "meaning": "폭탄 폭격하다"
  },
  {
    "word": "bond",
    "meaning": "결속"
  },
  {
    "word": "bone",
    "meaning": "뼈"
  },
  {
    "word": "book",
    "meaning": "책"
  },
  {
    "word": "boom",
    "meaning": "굉음"
  },
  {
    "word": "boost",
    "meaning": "뒤를 밀기"
  },
  {
    "word": "boot",
    "meaning": "목이 긴 구두"
  },
  {
    "word": "border",
    "meaning": "가장자리"
  },
  {
    "word": "bore",
    "meaning": "고조"
  },
  {
    "word": "borrow",
    "meaning": "빌다"
  },
  {
    "word": "boss",
    "meaning": "두목"
  },
  {
    "word": "both",
    "meaning": "쌍방의"
  },
  {
    "word": "bother",
    "meaning": "괴롭히다 근심하다 귀찮음"
  },
  {
    "word": "bottle",
    "meaning": "병"
  },
  {
    "word": "bottom",
    "meaning": "밑바닥"
  },
  {
    "word": "bounce",
    "meaning": "뛰어오르다"
  },
  {
    "word": "boundary",
    "meaning": "경계"
  },
  {
    "word": "bow",
    "meaning": "절"
  },
  {
    "word": "bowl",
    "meaning": "사발"
  },
  {
    "word": "boy",
    "meaning": "소년"
  },
  {
    "word": "brain",
    "meaning": "뇌"
  },
  {
    "word": "brake",
    "meaning": "브레이크"
  },
  {
    "word": "branch",
    "meaning": "가지"
  },
  {
    "word": "brand",
    "meaning": "상표"
  },
  {
    "word": "brave",
    "meaning": "용감한"
  },
  {
    "word": "bread",
    "meaning": "빵"
  },
  {
    "word": "break",
    "meaning": "부수다"
  },
  {
    "word": "breakfast",
    "meaning": "아침밥"
  },
  {
    "word": "breast",
    "meaning": "가슴"
  },
  {
    "word": "breathe",
    "meaning": "숨쉬다"
  },
  {
    "word": "breed",
    "meaning": "기르다"
  },
  {
    "word": "breeze",
    "meaning": "미풍"
  },
  {
    "word": "brew",
    "meaning": "양조하다"
  },
  {
    "word": "brick",
    "meaning": "벽돌"
  },
  {
    "word": "bride",
    "meaning": "신부"
  },
  {
    "word": "bridge",
    "meaning": "다리"
  },
  {
    "word": "brief",
    "meaning": "단시간의"
  },
  {
    "word": "bright",
    "meaning": "밝은"
  },
  {
    "word": "brilliant",
    "meaning": "빛나는"
  },
  {
    "word": "bring",
    "meaning": "가져오다"
  },
  {
    "word": "broad",
    "meaning": "(폭이)넓은"
  },
  {
    "word": "broadcast",
    "meaning": "방송하다"
  },
  {
    "word": "brother",
    "meaning": "형제"
  },
  {
    "word": "brown",
    "meaning": "갈색의 갈색"
  },
  {
    "word": "brush",
    "meaning": "솔"
  },
  {
    "word": "brute",
    "meaning": "야수 짐승같은"
  },
  {
    "word": "bubble",
    "meaning": "거품 거품이 일다"
  },
  {
    "word": "budget",
    "meaning": "예산"
  },
  {
    "word": "bug",
    "meaning": "벌레"
  },
  {
    "word": "build",
    "meaning": "짓다"
  },
  {
    "word": "bulk",
    "meaning": "부피"
  },
  {
    "word": "bull",
    "meaning": "황소"
  },
  {
    "word": "bullet",
    "meaning": "탄환"
  },
  {
    "word": "bully",
    "meaning": "약한 자를 못살게 구는 자"
  },
  {
    "word": "bump",
    "meaning": "충돌 부딪치다"
  },
  {
    "word": "bunch",
    "meaning": "송이"
  },
  {
    "word": "bundle",
    "meaning": "다발"
  },
  {
    "word": "burden",
    "meaning": "후렴"
  },
  {
    "word": "burn",
    "meaning": "시내"
  },
  {
    "word": "burst",
    "meaning": "파열하다"
  },
  {
    "word": "bury",
    "meaning": "묻다"
  },
  {
    "word": "bush",
    "meaning": "덤불"
  },
  {
    "word": "business",
    "meaning": "직업"
  },
  {
    "word": "busy",
    "meaning": "바쁜"
  },
  {
    "word": "but",
    "meaning": "그러나 다만 (-을)제외하고"
  },
  {
    "word": "butcher",
    "meaning": "정육점주인"
  },
  {
    "word": "button",
    "meaning": "단추 단추를 채우다 단추로 채워지다"
  },
  {
    "word": "buy",
    "meaning": "사다"
  },
  {
    "word": "buzz",
    "meaning": "윙윙거리는 소리"
  },
  {
    "word": "by",
    "meaning": "곁에"
  },
  {
    "word": "cab",
    "meaning": "택시"
  },
  {
    "word": "cabin",
    "meaning": "선실"
  },
  {
    "word": "cable",
    "meaning": "해저전신"
  },
  {
    "word": "cage",
    "meaning": "새장"
  },
  {
    "word": "calculate",
    "meaning": "계산하다"
  },
  {
    "word": "calendar",
    "meaning": "달력"
  },
  {
    "word": "call",
    "meaning": "부르다"
  },
  {
    "word": "calm",
    "meaning": "평온한"
  },
  {
    "word": "can",
    "meaning": "au-할 수 있다"
  },
  {
    "word": "cancel",
    "meaning": "취소하다"
  },
  {
    "word": "cancer",
    "meaning": "암"
  },
  {
    "word": "candidate",
    "meaning": "지원자"
  },
  {
    "word": "candy",
    "meaning": "사탕과자"
  },
  {
    "word": "canvas",
    "meaning": "돛베"
  },
  {
    "word": "cap",
    "meaning": "모자"
  },
  {
    "word": "capable",
    "meaning": "할 수 있는"
  },
  {
    "word": "cape",
    "meaning": "곶"
  },
  {
    "word": "capital",
    "meaning": "수위의"
  },
  {
    "word": "captain",
    "meaning": "우두머리(chief)"
  },
  {
    "word": "caption",
    "meaning": "표제"
  },
  {
    "word": "capture",
    "meaning": "붙잡다(=catch)"
  },
  {
    "word": "car",
    "meaning": "자동차"
  },
  {
    "word": "care",
    "meaning": "걱정"
  },
  {
    "word": "career",
    "meaning": "경력"
  },
  {
    "word": "carrot",
    "meaning": "당근"
  },
  {
    "word": "carry",
    "meaning": "나르다"
  },
  {
    "word": "cart",
    "meaning": "(2륜)짐마차"
  },
  {
    "word": "carve",
    "meaning": "조각하다"
  },
  {
    "word": "case",
    "meaning": "경우"
  },
  {
    "word": "cash",
    "meaning": "현금 현금으로 바꾸다 현금의"
  },
  {
    "word": "cast",
    "meaning": "던지다"
  },
  {
    "word": "castle",
    "meaning": "성"
  },
  {
    "word": "casual",
    "meaning": "우연한"
  },
  {
    "word": "cat",
    "meaning": "고양이"
  },
  {
    "word": "catch",
    "meaning": "붙잡다"
  },
  {
    "word": "category",
    "meaning": "범주"
  },
  {
    "word": "cater",
    "meaning": "음식물을 마련하다"
  },
  {
    "word": "cathedral",
    "meaning": "대성당"
  },
  {
    "word": "cattle",
    "meaning": "소"
  },
  {
    "word": "causal",
    "meaning": "원인의"
  },
  {
    "word": "cause",
    "meaning": "원인"
  },
  {
    "word": "caution",
    "meaning": "조심"
  },
  {
    "word": "cave",
    "meaning": "동굴 굴을 파다 꺼지다"
  },
  {
    "word": "cease",
    "meaning": "그만두다 그치다 중지"
  },
  {
    "word": "ceiling",
    "meaning": "천장"
  },
  {
    "word": "celebrate",
    "meaning": "경축하다"
  },
  {
    "word": "celebrity",
    "meaning": "명성"
  },
  {
    "word": "cell",
    "meaning": "작은 방"
  },
  {
    "word": "censor",
    "meaning": "검열관"
  },
  {
    "word": "century",
    "meaning": "1세기"
  },
  {
    "word": "certain",
    "meaning": "확신하는"
  },
  {
    "word": "certificate",
    "meaning": "증명서"
  },
  {
    "word": "chain",
    "meaning": "사슬"
  },
  {
    "word": "chair",
    "meaning": "의장"
  },
  {
    "word": "chairman",
    "meaning": "의장"
  },
  {
    "word": "challenge",
    "meaning": "도전"
  },
  {
    "word": "chamber",
    "meaning": "방"
  },
  {
    "word": "chance",
    "meaning": "우연"
  },
  {
    "word": "change",
    "meaning": "변화"
  },
  {
    "word": "chaos",
    "meaning": "혼돈"
  },
  {
    "word": "character",
    "meaning": "인격"
  },
  {
    "word": "characteristic",
    "meaning": "특유한"
  },
  {
    "word": "charge",
    "meaning": "요금"
  },
  {
    "word": "charity",
    "meaning": "자비"
  },
  {
    "word": "charm",
    "meaning": "매력"
  },
  {
    "word": "chase",
    "meaning": "쫓다"
  },
  {
    "word": "chat",
    "meaning": "잡담"
  },
  {
    "word": "cheap",
    "meaning": "값싼"
  },
  {
    "word": "check",
    "meaning": "방해"
  },
  {
    "word": "cheek",
    "meaning": "볼"
  },
  {
    "word": "cheer",
    "meaning": "갈채"
  },
  {
    "word": "chef",
    "meaning": "쿡"
  },
  {
    "word": "chemical",
    "meaning": "화학의"
  },
  {
    "word": "chemistry",
    "meaning": "화학"
  },
  {
    "word": "chest",
    "meaning": "가슴팍"
  },
  {
    "word": "chew",
    "meaning": "씹다"
  },
  {
    "word": "chief",
    "meaning": "우두머리"
  },
  {
    "word": "child",
    "meaning": "아이"
  },
  {
    "word": "chill",
    "meaning": "차가움"
  },
  {
    "word": "chin",
    "meaning": "턱(끝) 턱에 대다"
  },
  {
    "word": "chip",
    "meaning": "(나무)토막"
  },
  {
    "word": "choir",
    "meaning": "(교회의)성가대"
  },
  {
    "word": "choose",
    "meaning": "고르다"
  },
  {
    "word": "chop",
    "meaning": "(도끼 등으로)자르다"
  },
  {
    "word": "chorus",
    "meaning": "합창"
  },
  {
    "word": "chronic",
    "meaning": "만성의"
  },
  {
    "word": "church",
    "meaning": "교회"
  },
  {
    "word": "cigarette",
    "meaning": "궐련"
  },
  {
    "word": "cinema",
    "meaning": "영화관"
  },
  {
    "word": "circle",
    "meaning": "원"
  },
  {
    "word": "circulate",
    "meaning": "순환하다"
  },
  {
    "word": "circumstance",
    "meaning": "환경"
  },
  {
    "word": "cite",
    "meaning": "인용하다(quote)"
  },
  {
    "word": "citizen",
    "meaning": "시민"
  },
  {
    "word": "city",
    "meaning": "도시"
  },
  {
    "word": "civil",
    "meaning": "시민의"
  },
  {
    "word": "claim",
    "meaning": "요구하다"
  },
  {
    "word": "clap",
    "meaning": "짝짝"
  },
  {
    "word": "clarify",
    "meaning": "맑게 하다"
  },
  {
    "word": "clash",
    "meaning": "충돌하다"
  },
  {
    "word": "class",
    "meaning": "계급"
  },
  {
    "word": "classic",
    "meaning": "고전의"
  },
  {
    "word": "classify",
    "meaning": "분류하다"
  },
  {
    "word": "classroom",
    "meaning": "교실"
  },
  {
    "word": "clause",
    "meaning": "조항"
  },
  {
    "word": "clay",
    "meaning": "찰흙"
  },
  {
    "word": "clean",
    "meaning": "청결한"
  },
  {
    "word": "clear",
    "meaning": "맑은"
  },
  {
    "word": "clerk",
    "meaning": "서기"
  },
  {
    "word": "clever",
    "meaning": "영리한"
  },
  {
    "word": "client",
    "meaning": "소송의뢰인"
  },
  {
    "word": "cliff",
    "meaning": "절벽"
  },
  {
    "word": "climate",
    "meaning": "기후"
  },
  {
    "word": "climb",
    "meaning": "기어 오르다"
  },
  {
    "word": "cling",
    "meaning": "밀착하다"
  },
  {
    "word": "clinic",
    "meaning": "병원"
  },
  {
    "word": "clip",
    "meaning": "가위로 자르다"
  },
  {
    "word": "clock",
    "meaning": "시계"
  },
  {
    "word": "close",
    "meaning": "닫다"
  },
  {
    "word": "cloth",
    "meaning": "천"
  },
  {
    "word": "cloud",
    "meaning": "구름"
  },
  {
    "word": "club",
    "meaning": "클럽"
  },
  {
    "word": "clue",
    "meaning": "단서"
  },
  {
    "word": "cluster",
    "meaning": "떼"
  },
  {
    "word": "coach",
    "meaning": "역마차"
  },
  {
    "word": "coal",
    "meaning": "석탄"
  },
  {
    "word": "coast",
    "meaning": "연안"
  },
  {
    "word": "code",
    "meaning": "법전"
  },
  {
    "word": "coin",
    "meaning": "화폐"
  },
  {
    "word": "coincide",
    "meaning": "일치하다"
  },
  {
    "word": "cold",
    "meaning": "추운"
  },
  {
    "word": "collaborate",
    "meaning": "공동으로 일하다"
  },
  {
    "word": "collapse",
    "meaning": "붕괴"
  },
  {
    "word": "collar",
    "meaning": "칼라"
  },
  {
    "word": "colleague",
    "meaning": "동료"
  },
  {
    "word": "collect",
    "meaning": "모으다"
  },
  {
    "word": "college",
    "meaning": "단과대학"
  },
  {
    "word": "colony",
    "meaning": "식민지"
  },
  {
    "word": "color",
    "meaning": "착색하다"
  },
  {
    "word": "column",
    "meaning": "(신문 등의)난"
  },
  {
    "word": "combat",
    "meaning": "격투하다"
  },
  {
    "word": "combine",
    "meaning": "결합하다"
  },
  {
    "word": "come",
    "meaning": "오다"
  },
  {
    "word": "comedy",
    "meaning": "희극"
  },
  {
    "word": "comfort",
    "meaning": "위안"
  },
  {
    "word": "command",
    "meaning": "명령하다"
  },
  {
    "word": "commence",
    "meaning": "시작하다"
  },
  {
    "word": "comment",
    "meaning": "논평"
  },
  {
    "word": "commerce",
    "meaning": "상업"
  },
  {
    "word": "commission",
    "meaning": "위임"
  },
  {
    "word": "commit",
    "meaning": "위탁하다"
  },
  {
    "word": "committee",
    "meaning": "위원회"
  },
  {
    "word": "commodity",
    "meaning": "상품"
  },
  {
    "word": "communicate",
    "meaning": "알리다"
  },
  {
    "word": "communist",
    "meaning": "공산주의자"
  },
  {
    "word": "community",
    "meaning": "공동생활체"
  },
  {
    "word": "companion",
    "meaning": "동료"
  },
  {
    "word": "company",
    "meaning": "교제"
  },
  {
    "word": "compare",
    "meaning": "비교하다"
  },
  {
    "word": "compatible",
    "meaning": "양립할 수 있는"
  },
  {
    "word": "compel",
    "meaning": "억지로 -시키다"
  },
  {
    "word": "compensate",
    "meaning": "배상하다"
  },
  {
    "word": "compete",
    "meaning": "경쟁하다"
  },
  {
    "word": "competent",
    "meaning": "능력있는"
  },
  {
    "word": "compile",
    "meaning": "편찬하다"
  },
  {
    "word": "complain",
    "meaning": "불평하다"
  },
  {
    "word": "complement",
    "meaning": "보완하는 것"
  },
  {
    "word": "complete",
    "meaning": "완성하다"
  },
  {
    "word": "complex",
    "meaning": "합성물"
  },
  {
    "word": "complicate",
    "meaning": "복잡하게 하다"
  },
  {
    "word": "component",
    "meaning": "구성하는 성분"
  },
  {
    "word": "compose",
    "meaning": "구성하다"
  },
  {
    "word": "compound",
    "meaning": "성분 등을 혼합하다"
  },
  {
    "word": "comprehensive",
    "meaning": "이해력있는"
  },
  {
    "word": "comprise",
    "meaning": "포함하다"
  },
  {
    "word": "compromise",
    "meaning": "타협 타협하다"
  },
  {
    "word": "compulsory",
    "meaning": "의무적인"
  },
  {
    "word": "conceal",
    "meaning": "숨기다"
  },
  {
    "word": "conceive",
    "meaning": "상상하다"
  },
  {
    "word": "concentrate",
    "meaning": "집중하다"
  },
  {
    "word": "concept",
    "meaning": "개념"
  },
  {
    "word": "concern",
    "meaning": "관계하다"
  },
  {
    "word": "concert",
    "meaning": "연주회"
  },
  {
    "word": "conclude",
    "meaning": "결정하다"
  },
  {
    "word": "concrete",
    "meaning": "구체적인 응고물"
  },
  {
    "word": "condemn",
    "meaning": "나무라다"
  },
  {
    "word": "condition",
    "meaning": "조건"
  },
  {
    "word": "conduct",
    "meaning": "행위 이끌다"
  },
  {
    "word": "confer",
    "meaning": "주다"
  },
  {
    "word": "confess",
    "meaning": "실토하다"
  },
  {
    "word": "confident",
    "meaning": "확신하는"
  },
  {
    "word": "confine",
    "meaning": "국경"
  },
  {
    "word": "confirm",
    "meaning": "확인하다"
  },
  {
    "word": "conflict",
    "meaning": "투쟁"
  },
  {
    "word": "conform",
    "meaning": "일치시키다"
  },
  {
    "word": "confront",
    "meaning": "직면하다"
  },
  {
    "word": "confuse",
    "meaning": "혼란시키다"
  },
  {
    "word": "congratulate",
    "meaning": "축하하다"
  },
  {
    "word": "congress",
    "meaning": "회의"
  },
  {
    "word": "connect",
    "meaning": "잇다 이어지다"
  },
  {
    "word": "conscience",
    "meaning": "양심"
  },
  {
    "word": "conscious",
    "meaning": "의식적인"
  },
  {
    "word": "consensus",
    "meaning": "(의견 등의)일치"
  },
  {
    "word": "consent",
    "meaning": "승낙하다"
  },
  {
    "word": "conserve",
    "meaning": "보존하다"
  },
  {
    "word": "consider",
    "meaning": "숙고하다"
  },
  {
    "word": "consist",
    "meaning": "-으로 이루어지다"
  },
  {
    "word": "consistent",
    "meaning": "시종일관한"
  },
  {
    "word": "constant",
    "meaning": "불변의"
  },
  {
    "word": "constitute",
    "meaning": "구성하다"
  },
  {
    "word": "constrain",
    "meaning": "강제하다"
  },
  {
    "word": "construct",
    "meaning": "건조하다"
  },
  {
    "word": "consult",
    "meaning": "상의하다"
  },
  {
    "word": "consume",
    "meaning": "소비하다"
  },
  {
    "word": "contact",
    "meaning": "접촉"
  },
  {
    "word": "contain",
    "meaning": "내포하다"
  },
  {
    "word": "contemporary",
    "meaning": "현대의"
  },
  {
    "word": "contend",
    "meaning": "싸우다"
  },
  {
    "word": "content",
    "meaning": "만족하여"
  },
  {
    "word": "contest",
    "meaning": "겨루다"
  },
  {
    "word": "context",
    "meaning": "문맥"
  },
  {
    "word": "continent",
    "meaning": "자제심이 있는"
  },
  {
    "word": "continue",
    "meaning": "계속하다"
  },
  {
    "word": "contract",
    "meaning": "계약"
  },
  {
    "word": "contradict",
    "meaning": "반박하다"
  },
  {
    "word": "contrary",
    "meaning": "반대의 반대 거꾸로"
  },
  {
    "word": "contrast",
    "meaning": "대조"
  },
  {
    "word": "contribute",
    "meaning": "기부하다"
  },
  {
    "word": "control",
    "meaning": "억제하다"
  },
  {
    "word": "controversy",
    "meaning": "논쟁"
  },
  {
    "word": "convenient",
    "meaning": "편리한"
  },
  {
    "word": "convention",
    "meaning": "관례"
  },
  {
    "word": "conversation",
    "meaning": "회화"
  },
  {
    "word": "convert",
    "meaning": "바꾸다"
  },
  {
    "word": "convey",
    "meaning": "나르다"
  },
  {
    "word": "convict",
    "meaning": "유죄로 판결하다 죄수"
  },
  {
    "word": "convince",
    "meaning": "확신시키다"
  },
  {
    "word": "cook",
    "meaning": "요리하다 요리사"
  },
  {
    "word": "cookie",
    "meaning": "쿠키"
  },
  {
    "word": "cool",
    "meaning": "서늘한"
  },
  {
    "word": "cooperate",
    "meaning": "협동하다"
  },
  {
    "word": "coordinate",
    "meaning": "동격의"
  },
  {
    "word": "cop",
    "meaning": "순경"
  },
  {
    "word": "cope",
    "meaning": "코우프(성직자의 긴 겉옷)"
  },
  {
    "word": "copy",
    "meaning": "사본"
  },
  {
    "word": "copyright",
    "meaning": "판권"
  },
  {
    "word": "cord",
    "meaning": "밧줄"
  },
  {
    "word": "core",
    "meaning": "핵심"
  },
  {
    "word": "corn",
    "meaning": "티눈"
  },
  {
    "word": "corner",
    "meaning": "모퉁이"
  },
  {
    "word": "corporate",
    "meaning": "법인조직의"
  },
  {
    "word": "correct",
    "meaning": "옳은"
  },
  {
    "word": "correspond",
    "meaning": "일치하다"
  },
  {
    "word": "corridor",
    "meaning": "복도"
  },
  {
    "word": "corrupt",
    "meaning": "타락한"
  },
  {
    "word": "cost",
    "meaning": "가격"
  },
  {
    "word": "costume",
    "meaning": "복장"
  },
  {
    "word": "cottage",
    "meaning": "시골집"
  },
  {
    "word": "cotton",
    "meaning": "목화"
  },
  {
    "word": "couch",
    "meaning": "침대"
  },
  {
    "word": "cough",
    "meaning": "기침 기침을 하다 기침을 하여 -을 뱉어내다"
  },
  {
    "word": "could",
    "meaning": "aucan의 과거"
  },
  {
    "word": "council",
    "meaning": "회의"
  },
  {
    "word": "counsel",
    "meaning": "의논"
  },
  {
    "word": "count",
    "meaning": "계산"
  },
  {
    "word": "counter",
    "meaning": "계산하는 사람"
  },
  {
    "word": "counterpart",
    "meaning": "부본"
  },
  {
    "word": "country",
    "meaning": "나라"
  },
  {
    "word": "countryside",
    "meaning": "시골"
  },
  {
    "word": "county",
    "meaning": "주"
  },
  {
    "word": "couple",
    "meaning": "한 쌍"
  },
  {
    "word": "courage",
    "meaning": "용기"
  },
  {
    "word": "cousin",
    "meaning": "사촌"
  },
  {
    "word": "cover",
    "meaning": "덮다"
  },
  {
    "word": "cow",
    "meaning": "위협하다 암소"
  },
  {
    "word": "cowboy",
    "meaning": "목동"
  },
  {
    "word": "crack",
    "meaning": "찰싹 소리내다 금가다 날카로운소리"
  },
  {
    "word": "craft",
    "meaning": "솜씨"
  },
  {
    "word": "crash",
    "meaning": "도산"
  },
  {
    "word": "crawl",
    "meaning": "네발로 기다"
  },
  {
    "word": "crazy",
    "meaning": "미친"
  },
  {
    "word": "create",
    "meaning": "창조하다"
  },
  {
    "word": "creature",
    "meaning": "창조물"
  },
  {
    "word": "credible",
    "meaning": "믿을 수 있는"
  },
  {
    "word": "credit",
    "meaning": "신용"
  },
  {
    "word": "creek",
    "meaning": "시내"
  },
  {
    "word": "creep",
    "meaning": "기다"
  },
  {
    "word": "crew",
    "meaning": "승무원"
  },
  {
    "word": "cricket",
    "meaning": "크리켓"
  },
  {
    "word": "crime",
    "meaning": "범죄"
  },
  {
    "word": "criminal",
    "meaning": "죄의"
  },
  {
    "word": "crisis",
    "meaning": "위기"
  },
  {
    "word": "crisp",
    "meaning": "파삭파삭한"
  },
  {
    "word": "criteria",
    "meaning": "criterion의 복수형"
  },
  {
    "word": "critic",
    "meaning": "비평가"
  },
  {
    "word": "criticize",
    "meaning": "비평하다"
  },
  {
    "word": "criticism",
    "meaning": "비평"
  },
  {
    "word": "crop",
    "meaning": "수확"
  },
  {
    "word": "cross",
    "meaning": "십자형"
  },
  {
    "word": "crowd",
    "meaning": "군중"
  },
  {
    "word": "crown",
    "meaning": "왕관"
  },
  {
    "word": "crucial",
    "meaning": "결정적인"
  },
  {
    "word": "cruel",
    "meaning": "잔인한"
  },
  {
    "word": "cruise",
    "meaning": "순항하다"
  },
  {
    "word": "crush",
    "meaning": "눌러 부수다"
  },
  {
    "word": "cry",
    "meaning": "소리치다"
  },
  {
    "word": "crystal",
    "meaning": "수정"
  },
  {
    "word": "cultivate",
    "meaning": "경작하다"
  },
  {
    "word": "culture",
    "meaning": "문화"
  },
  {
    "word": "cupboard",
    "meaning": "찬장"
  },
  {
    "word": "cure",
    "meaning": "치료"
  },
  {
    "word": "curious",
    "meaning": "이상스러운"
  },
  {
    "word": "curl",
    "meaning": "곱슬머리 머리털을 지지다"
  },
  {
    "word": "currency",
    "meaning": "통용"
  },
  {
    "word": "current",
    "meaning": "유행의"
  },
  {
    "word": "curriculum",
    "meaning": "과목"
  },
  {
    "word": "curry",
    "meaning": "카레요리 카레로 맛을 내다"
  },
  {
    "word": "curse",
    "meaning": "저주"
  },
  {
    "word": "curtain",
    "meaning": "커어튼"
  },
  {
    "word": "curve",
    "meaning": "곡선"
  },
  {
    "word": "custody",
    "meaning": "보호"
  },
  {
    "word": "custom",
    "meaning": "습관"
  },
  {
    "word": "customer",
    "meaning": "고객"
  },
  {
    "word": "cut",
    "meaning": "베다"
  },
  {
    "word": "cute",
    "meaning": "귀여운"
  },
  {
    "word": "cycle",
    "meaning": "순환"
  },
  {
    "word": "cynical",
    "meaning": "냉소적인"
  },
  {
    "word": "dad",
    "meaning": "아빠"
  },
  {
    "word": "dairy",
    "meaning": "낙농장"
  },
  {
    "word": "dam",
    "meaning": "댐"
  },
  {
    "word": "damage",
    "meaning": "손해"
  },
  {
    "word": "damp",
    "meaning": "축축한 습기 적시다"
  },
  {
    "word": "dance",
    "meaning": "댄스"
  },
  {
    "word": "danger",
    "meaning": "위험"
  },
  {
    "word": "dare",
    "meaning": "au감히 -하다"
  },
  {
    "word": "dark",
    "meaning": "어두운"
  },
  {
    "word": "darling",
    "meaning": "귀여운"
  },
  {
    "word": "dash",
    "meaning": "돌진"
  },
  {
    "word": "database",
    "meaning": "데이터베이스"
  },
  {
    "word": "date",
    "meaning": "날짜"
  },
  {
    "word": "daughter",
    "meaning": "딸"
  },
  {
    "word": "dawn",
    "meaning": "새벽 날이 새다"
  },
  {
    "word": "day",
    "meaning": "낮"
  },
  {
    "word": "dead",
    "meaning": "죽은"
  },
  {
    "word": "deal",
    "meaning": "양"
  },
  {
    "word": "death",
    "meaning": "죽음"
  },
  {
    "word": "debate",
    "meaning": "토론 토론하다"
  },
  {
    "word": "debt",
    "meaning": "빚"
  },
  {
    "word": "decade",
    "meaning": "10년간"
  },
  {
    "word": "decay",
    "meaning": "쇠퇴하다"
  },
  {
    "word": "decent",
    "meaning": "점잖은"
  },
  {
    "word": "decide",
    "meaning": "결정하다"
  },
  {
    "word": "decision",
    "meaning": "결정"
  },
  {
    "word": "deck",
    "meaning": "갑판"
  },
  {
    "word": "declare",
    "meaning": "선언하다"
  },
  {
    "word": "decline",
    "meaning": "기울다"
  },
  {
    "word": "decorate",
    "meaning": "장식하다"
  },
  {
    "word": "decrease",
    "meaning": "감소하다"
  },
  {
    "word": "dedicate",
    "meaning": "봉납하다"
  },
  {
    "word": "deep",
    "meaning": "깊은"
  },
  {
    "word": "defeat",
    "meaning": "패배"
  },
  {
    "word": "defense",
    "meaning": "방어"
  },
  {
    "word": "defend",
    "meaning": "방어하다"
  },
  {
    "word": "defendant",
    "meaning": "피고 피고의"
  },
  {
    "word": "deficiency",
    "meaning": "결핍"
  },
  {
    "word": "deficit",
    "meaning": "결손"
  },
  {
    "word": "define",
    "meaning": "정의하다"
  },
  {
    "word": "definite",
    "meaning": "일정한"
  },
  {
    "word": "degrade",
    "meaning": "지위를 낮추다"
  },
  {
    "word": "degree",
    "meaning": "도"
  },
  {
    "word": "delay",
    "meaning": "늦추다"
  },
  {
    "word": "delegate",
    "meaning": "파견하다"
  },
  {
    "word": "delete",
    "meaning": "삭제하다"
  },
  {
    "word": "deliberate",
    "meaning": "숙고하다"
  },
  {
    "word": "delicate",
    "meaning": "미묘한"
  },
  {
    "word": "delicious",
    "meaning": "맛있는"
  },
  {
    "word": "delight",
    "meaning": "즐겁게하다 즐거워하다"
  },
  {
    "word": "deliver",
    "meaning": "인도하다"
  },
  {
    "word": "demand",
    "meaning": "요구하다"
  },
  {
    "word": "democracy",
    "meaning": "민주주의"
  },
  {
    "word": "democrat",
    "meaning": "민주주의자"
  },
  {
    "word": "demon",
    "meaning": "악마"
  },
  {
    "word": "demonstrate",
    "meaning": "증명하다"
  },
  {
    "word": "dense",
    "meaning": "짙은"
  },
  {
    "word": "dentist",
    "meaning": "치과의사"
  },
  {
    "word": "deny",
    "meaning": "부정하다"
  },
  {
    "word": "department",
    "meaning": "부"
  },
  {
    "word": "departure",
    "meaning": "출발"
  },
  {
    "word": "depend",
    "meaning": "좌우되다"
  },
  {
    "word": "dependence",
    "meaning": "종속"
  },
  {
    "word": "depict",
    "meaning": "묘사하다"
  },
  {
    "word": "deposit",
    "meaning": "예금"
  },
  {
    "word": "depress",
    "meaning": "억압하다"
  },
  {
    "word": "deprive",
    "meaning": "빼앗다"
  },
  {
    "word": "derive",
    "meaning": "이끌어 내다"
  },
  {
    "word": "descend",
    "meaning": "내려오다"
  },
  {
    "word": "describe",
    "meaning": "기술하다"
  },
  {
    "word": "description",
    "meaning": "서술"
  },
  {
    "word": "desert",
    "meaning": "버리다"
  },
  {
    "word": "deserve",
    "meaning": " -할 만하다"
  },
  {
    "word": "design",
    "meaning": "디자인"
  },
  {
    "word": "designate",
    "meaning": "가리키다"
  },
  {
    "word": "desire",
    "meaning": "바라다"
  },
  {
    "word": "desk",
    "meaning": "책상"
  },
  {
    "word": "despair",
    "meaning": "절망하다"
  },
  {
    "word": "desperate",
    "meaning": "절망적인"
  },
  {
    "word": "despite",
    "meaning": "-에도 불구하고 모욕"
  },
  {
    "word": "destination",
    "meaning": "목적지"
  },
  {
    "word": "destiny",
    "meaning": "운명"
  },
  {
    "word": "destroy",
    "meaning": "파괴하다"
  },
  {
    "word": "destruction",
    "meaning": "파괴"
  },
  {
    "word": "detach",
    "meaning": "분리하다"
  },
  {
    "word": "detail",
    "meaning": "상설"
  },
  {
    "word": "detect",
    "meaning": "간파하다"
  },
  {
    "word": "determine",
    "meaning": "결정하다"
  },
  {
    "word": "develop",
    "meaning": "발달하다"
  },
  {
    "word": "device",
    "meaning": "고안"
  },
  {
    "word": "devil",
    "meaning": "악마"
  },
  {
    "word": "devise",
    "meaning": "고안하다"
  },
  {
    "word": "devote",
    "meaning": "바치다"
  },
  {
    "word": "diabetes",
    "meaning": "당뇨병"
  },
  {
    "word": "dialogue",
    "meaning": "대화"
  },
  {
    "word": "diary",
    "meaning": "일기"
  },
  {
    "word": "dictate",
    "meaning": "받아쓰게 하다"
  },
  {
    "word": "dictionary",
    "meaning": "사전"
  },
  {
    "word": "die",
    "meaning": "죽다"
  },
  {
    "word": "different",
    "meaning": "다른"
  },
  {
    "word": "difficult",
    "meaning": "곤란한"
  },
  {
    "word": "dig",
    "meaning": "파다"
  },
  {
    "word": "dignity",
    "meaning": "위엄"
  },
  {
    "word": "dimension",
    "meaning": "치수"
  },
  {
    "word": "diminish",
    "meaning": "감소하다"
  },
  {
    "word": "dine",
    "meaning": "저녁식사를 하다"
  },
  {
    "word": "dinner",
    "meaning": "정찬"
  },
  {
    "word": "dip",
    "meaning": "담그다"
  },
  {
    "word": "diplomat",
    "meaning": "외교관"
  },
  {
    "word": "direct",
    "meaning": "지도하다"
  },
  {
    "word": "dirty",
    "meaning": "더러운"
  },
  {
    "word": "disabled",
    "meaning": "불구가 된"
  },
  {
    "word": "disadvantage",
    "meaning": "불리"
  },
  {
    "word": "disagree",
    "meaning": "일치하지 않다"
  },
  {
    "word": "disappear",
    "meaning": "안보이게 되다"
  },
  {
    "word": "disappoint",
    "meaning": "실망시키다"
  },
  {
    "word": "disaster",
    "meaning": "천재"
  },
  {
    "word": "discharge",
    "meaning": "짐을부리다"
  },
  {
    "word": "discipline",
    "meaning": "훈련"
  },
  {
    "word": "disclose",
    "meaning": "나타내다"
  },
  {
    "word": "discount",
    "meaning": "할인"
  },
  {
    "word": "discourse",
    "meaning": "강연"
  },
  {
    "word": "discover",
    "meaning": "발견하다"
  },
  {
    "word": "discriminate",
    "meaning": "분별하다"
  },
  {
    "word": "discuss",
    "meaning": "토론하다"
  },
  {
    "word": "disease",
    "meaning": "병"
  },
  {
    "word": "disgust",
    "meaning": "불쾌하게 하다"
  },
  {
    "word": "dish",
    "meaning": "접시"
  },
  {
    "word": "dismiss",
    "meaning": "떠나게 하다"
  },
  {
    "word": "disorder",
    "meaning": "난잡"
  },
  {
    "word": "displace",
    "meaning": "바꾸어놓다"
  },
  {
    "word": "display",
    "meaning": "보이다"
  },
  {
    "word": "dispose",
    "meaning": "배열하다"
  },
  {
    "word": "dispute",
    "meaning": "논쟁하다"
  },
  {
    "word": "disrupt",
    "meaning": "분열시키다"
  },
  {
    "word": "distant",
    "meaning": "떨어진"
  },
  {
    "word": "distort",
    "meaning": "찌그러뜨리다"
  },
  {
    "word": "distract",
    "meaning": "전환시키다"
  },
  {
    "word": "distribute",
    "meaning": "분배하다"
  },
  {
    "word": "district",
    "meaning": "지구"
  },
  {
    "word": "disturb",
    "meaning": "교란하다"
  },
  {
    "word": "dive",
    "meaning": "뛰어들다"
  },
  {
    "word": "diverse",
    "meaning": "다양한"
  },
  {
    "word": "divide",
    "meaning": "나누다"
  },
  {
    "word": "divine",
    "meaning": "신의"
  },
  {
    "word": "divorce",
    "meaning": "이혼"
  },
  {
    "word": "do",
    "meaning": "하다"
  },
  {
    "word": "doctor",
    "meaning": "박사"
  },
  {
    "word": "document",
    "meaning": "서류"
  },
  {
    "word": "dog",
    "meaning": "개"
  },
  {
    "word": "doll",
    "meaning": "인형"
  },
  {
    "word": "dolphin",
    "meaning": "돌고래"
  },
  {
    "word": "domain",
    "meaning": "영토"
  },
  {
    "word": "domestic",
    "meaning": "가정의"
  },
  {
    "word": "dominant",
    "meaning": "우세한"
  },
  {
    "word": "donate",
    "meaning": "증여하다"
  },
  {
    "word": "door",
    "meaning": "문"
  },
  {
    "word": "dose",
    "meaning": "1회복용량 투약하다"
  },
  {
    "word": "dot",
    "meaning": "점"
  },
  {
    "word": "double",
    "meaning": "2배의"
  },
  {
    "word": "doubt",
    "meaning": "의심"
  },
  {
    "word": "down",
    "meaning": "아래로"
  },
  {
    "word": "dozen",
    "meaning": "1다스"
  },
  {
    "word": "draft",
    "meaning": "초고"
  },
  {
    "word": "drag",
    "meaning": "끌다"
  },
  {
    "word": "drain",
    "meaning": "배수하다"
  },
  {
    "word": "draw",
    "meaning": "당기다"
  },
  {
    "word": "drawer",
    "meaning": "제도사"
  },
  {
    "word": "dread",
    "meaning": "두려워하다 두려움"
  },
  {
    "word": "dream",
    "meaning": "꿈"
  },
  {
    "word": "drink",
    "meaning": "마시다"
  },
  {
    "word": "drive",
    "meaning": "운전하다"
  },
  {
    "word": "drop",
    "meaning": "방울"
  },
  {
    "word": "drown",
    "meaning": "물에빠뜨리다"
  },
  {
    "word": "drug",
    "meaning": "약제"
  },
  {
    "word": "dry",
    "meaning": "마른"
  },
  {
    "word": "dual",
    "meaning": "둘의"
  },
  {
    "word": "duck",
    "meaning": "머리를 물 속에 쑥 쳐박다"
  },
  {
    "word": "due",
    "meaning": "지급기일이 된"
  },
  {
    "word": "dull",
    "meaning": "둔한"
  },
  {
    "word": "dump",
    "meaning": "내버리다"
  },
  {
    "word": "during",
    "meaning": "-동안에"
  },
  {
    "word": "dust",
    "meaning": "먼지"
  },
  {
    "word": "duty",
    "meaning": "의무"
  },
  {
    "word": "dwell",
    "meaning": "거주하다"
  },
  {
    "word": "dynamic",
    "meaning": "동적인"
  },
  {
    "word": "each",
    "meaning": "각각의"
  },
  {
    "word": "eager",
    "meaning": "열심인"
  },
  {
    "word": "ear",
    "meaning": "귀"
  },
  {
    "word": "early",
    "meaning": "이른"
  },
  {
    "word": "earn",
    "meaning": "일하여 벌다"
  },
  {
    "word": "earth",
    "meaning": "지구"
  },
  {
    "word": "ease",
    "meaning": "안락"
  },
  {
    "word": "east",
    "meaning": "동쪽 동쪽의 동쪽으로"
  },
  {
    "word": "easy",
    "meaning": "쉬운"
  },
  {
    "word": "eat",
    "meaning": "먹다"
  },
  {
    "word": "economy",
    "meaning": "절약"
  },
  {
    "word": "edge",
    "meaning": "끝머리"
  },
  {
    "word": "edit",
    "meaning": "편집하다"
  },
  {
    "word": "educate",
    "meaning": "교육하다"
  },
  {
    "word": "effect",
    "meaning": "결과"
  },
  {
    "word": "effective",
    "meaning": "효과적인"
  },
  {
    "word": "efficient",
    "meaning": "능률적인"
  },
  {
    "word": "effort",
    "meaning": "노력"
  },
  {
    "word": "egg",
    "meaning": "알"
  },
  {
    "word": "either",
    "meaning": "어느 하나의"
  },
  {
    "word": "elaborate",
    "meaning": "공들인"
  },
  {
    "word": "elect",
    "meaning": "선거하다"
  },
  {
    "word": "electric",
    "meaning": "전기의"
  },
  {
    "word": "electronic",
    "meaning": "전자(학)의"
  },
  {
    "word": "elegant",
    "meaning": "우아한"
  },
  {
    "word": "element",
    "meaning": "요소"
  },
  {
    "word": "elementary",
    "meaning": "기본의"
  },
  {
    "word": "elephant",
    "meaning": "코끼리"
  },
  {
    "word": "eliminate",
    "meaning": "제거하다"
  },
  {
    "word": "else",
    "meaning": "그 밖에"
  },
  {
    "word": "embarrass",
    "meaning": "난처하게 하다"
  },
  {
    "word": "embassy",
    "meaning": "대사관"
  },
  {
    "word": "embrace",
    "meaning": "포옹하다"
  },
  {
    "word": "emerge",
    "meaning": "나오다"
  },
  {
    "word": "emergency",
    "meaning": "비상사태"
  },
  {
    "word": "emit",
    "meaning": "방사하다"
  },
  {
    "word": "emotion",
    "meaning": "감정"
  },
  {
    "word": "emphasis",
    "meaning": "강조"
  },
  {
    "word": "empire",
    "meaning": "제국"
  },
  {
    "word": "employ",
    "meaning": "고용하다"
  },
  {
    "word": "empty",
    "meaning": "빈"
  },
  {
    "word": "enclose",
    "meaning": "에워싸다"
  },
  {
    "word": "encounter",
    "meaning": "조우"
  },
  {
    "word": "encourage",
    "meaning": "용기를 돋우다"
  },
  {
    "word": "end",
    "meaning": "끝"
  },
  {
    "word": "endure",
    "meaning": "견디다"
  },
  {
    "word": "enemy",
    "meaning": "적"
  },
  {
    "word": "enforce",
    "meaning": "실시하다"
  },
  {
    "word": "engage",
    "meaning": "약속하다"
  },
  {
    "word": "engine",
    "meaning": "엔진"
  },
  {
    "word": "engineer",
    "meaning": "기사"
  },
  {
    "word": "enhance",
    "meaning": "향상하다"
  },
  {
    "word": "enjoy",
    "meaning": "즐기다"
  },
  {
    "word": "enormous",
    "meaning": "거대한"
  },
  {
    "word": "enough",
    "meaning": "충분한"
  },
  {
    "word": "enroll",
    "meaning": "명부에 올리다"
  },
  {
    "word": "ensure",
    "meaning": "-을 책임지다"
  },
  {
    "word": "enter",
    "meaning": "들어가다"
  },
  {
    "word": "enterprise",
    "meaning": "기획"
  },
  {
    "word": "entertain",
    "meaning": "즐겁게 하다"
  },
  {
    "word": "enthusiastic",
    "meaning": "열심인"
  },
  {
    "word": "entire",
    "meaning": "전체의"
  },
  {
    "word": "entitle",
    "meaning": "자격을 주다"
  },
  {
    "word": "entry",
    "meaning": "들어감"
  },
  {
    "word": "envelope",
    "meaning": "봉투"
  },
  {
    "word": "environment",
    "meaning": "환경"
  },
  {
    "word": "envy",
    "meaning": "질투"
  },
  {
    "word": "episode",
    "meaning": "삽화"
  },
  {
    "word": "equal",
    "meaning": "같은"
  },
  {
    "word": "equate",
    "meaning": "같게하다"
  },
  {
    "word": "equipment",
    "meaning": "장비"
  },
  {
    "word": "era",
    "meaning": "시대"
  },
  {
    "word": "eraser",
    "meaning": "지우는 사람"
  },
  {
    "word": "erect",
    "meaning": "똑바로 선"
  },
  {
    "word": "error",
    "meaning": "잘못"
  },
  {
    "word": "escape",
    "meaning": "도망하다"
  },
  {
    "word": "escort",
    "meaning": "호위하다"
  },
  {
    "word": "especially",
    "meaning": "특히"
  },
  {
    "word": "essential",
    "meaning": "본질적인"
  },
  {
    "word": "establish",
    "meaning": "확립하다"
  },
  {
    "word": "estate",
    "meaning": "토지"
  },
  {
    "word": "estimate",
    "meaning": "어림잡다"
  },
  {
    "word": "etc",
    "meaning": "등등"
  },
  {
    "word": "ethical",
    "meaning": "도덕상의"
  },
  {
    "word": "ethnic",
    "meaning": "인종의"
  },
  {
    "word": "evacuate",
    "meaning": "비우다"
  },
  {
    "word": "evaluate",
    "meaning": "평가하다"
  },
  {
    "word": "eve",
    "meaning": "저녁, 밤"
  },
  {
    "word": "even",
    "meaning": "-조차"
  },
  {
    "word": "evening",
    "meaning": "저녁"
  },
  {
    "word": "eventually",
    "meaning": "결국"
  },
  {
    "word": "ever",
    "meaning": "이전에"
  },
  {
    "word": "every",
    "meaning": "모든"
  },
  {
    "word": "evident",
    "meaning": "명백한"
  },
  {
    "word": "evil",
    "meaning": "사악한"
  },
  {
    "word": "evolution",
    "meaning": "진화"
  },
  {
    "word": "evolve",
    "meaning": "진화하다"
  },
  {
    "word": "exact",
    "meaning": "정확한"
  },
  {
    "word": "exaggerate",
    "meaning": "과장하다"
  },
  {
    "word": "exam",
    "meaning": "시험"
  },
  {
    "word": "examine",
    "meaning": "시험하다"
  },
  {
    "word": "example",
    "meaning": "보기"
  },
  {
    "word": "exceed",
    "meaning": "넘다"
  },
  {
    "word": "excellent",
    "meaning": "우수한"
  },
  {
    "word": "except",
    "meaning": "-을 제외하고는 제외하다"
  },
  {
    "word": "excess",
    "meaning": "초과"
  },
  {
    "word": "exchange",
    "meaning": "교환하다"
  },
  {
    "word": "excite",
    "meaning": "흥분시키다"
  },
  {
    "word": "exclude",
    "meaning": "배척하다"
  },
  {
    "word": "exclusive",
    "meaning": "배타적인"
  },
  {
    "word": "excuse",
    "meaning": "변명"
  },
  {
    "word": "executive",
    "meaning": "집행의"
  },
  {
    "word": "exercise",
    "meaning": "운동"
  },
  {
    "word": "exhaust",
    "meaning": "다 써버리다"
  },
  {
    "word": "exhibit",
    "meaning": "보이다"
  },
  {
    "word": "exist",
    "meaning": "존재하다"
  },
  {
    "word": "exit",
    "meaning": "출구"
  },
  {
    "word": "exotic",
    "meaning": "외국의"
  },
  {
    "word": "expand",
    "meaning": "펴다"
  },
  {
    "word": "expect",
    "meaning": "기대하다"
  },
  {
    "word": "expense",
    "meaning": "지출"
  },
  {
    "word": "expensive",
    "meaning": "비용이 드는"
  },
  {
    "word": "experience",
    "meaning": "경험"
  },
  {
    "word": "experiment",
    "meaning": "실험"
  },
  {
    "word": "expert",
    "meaning": "숙련가"
  },
  {
    "word": "expertise",
    "meaning": "대가의 의견"
  },
  {
    "word": "explain",
    "meaning": "설명하다"
  },
  {
    "word": "explicit",
    "meaning": "명백한"
  },
  {
    "word": "explode",
    "meaning": "폭발시키다"
  },
  {
    "word": "explore",
    "meaning": "탐험하다"
  },
  {
    "word": "export",
    "meaning": "수출하다 수출"
  },
  {
    "word": "expose",
    "meaning": "쐬다, 드러내다, 맞히다"
  },
  {
    "word": "express",
    "meaning": "발표하다"
  },
  {
    "word": "extend",
    "meaning": "뻗다"
  },
  {
    "word": "extent",
    "meaning": "넓이"
  },
  {
    "word": "external",
    "meaning": "외부의"
  },
  {
    "word": "extinct",
    "meaning": "꺼진"
  },
  {
    "word": "extra",
    "meaning": "가외의"
  },
  {
    "word": "extract",
    "meaning": "뽑아내다"
  },
  {
    "word": "extraordinary",
    "meaning": "이상한"
  },
  {
    "word": "extreme",
    "meaning": "극단의"
  },
  {
    "word": "eye",
    "meaning": "눈"
  },
  {
    "word": "eyebrow",
    "meaning": "눈썹"
  },
  {
    "word": "fabric",
    "meaning": "천"
  },
  {
    "word": "face",
    "meaning": "얼굴"
  },
  {
    "word": "facilitate",
    "meaning": "쉽게하다"
  },
  {
    "word": "facility",
    "meaning": "쉬움"
  },
  {
    "word": "fact",
    "meaning": "사실"
  },
  {
    "word": "factor",
    "meaning": "요소"
  },
  {
    "word": "factory",
    "meaning": "공장"
  },
  {
    "word": "faculty",
    "meaning": "능력"
  },
  {
    "word": "fade",
    "meaning": "바래다"
  },
  {
    "word": "fail",
    "meaning": "실패하다"
  },
  {
    "word": "faint",
    "meaning": "기절하다"
  },
  {
    "word": "fair",
    "meaning": "공평한"
  },
  {
    "word": "faith",
    "meaning": "신용"
  },
  {
    "word": "fall",
    "meaning": "떨어지다"
  },
  {
    "word": "false",
    "meaning": "거짓"
  },
  {
    "word": "fame",
    "meaning": "명성"
  },
  {
    "word": "familiar",
    "meaning": "친한"
  },
  {
    "word": "family",
    "meaning": "가족"
  },
  {
    "word": "famous",
    "meaning": "유명한"
  },
  {
    "word": "fan",
    "meaning": "(영화 등의)팬"
  },
  {
    "word": "fancy",
    "meaning": "공상"
  },
  {
    "word": "fantastic",
    "meaning": "환상적인"
  },
  {
    "word": "far",
    "meaning": "멀리"
  },
  {
    "word": "fare",
    "meaning": "요금"
  },
  {
    "word": "farm",
    "meaning": "농장"
  },
  {
    "word": "fascinate",
    "meaning": "황홀케 하다"
  },
  {
    "word": "fast",
    "meaning": "빠른"
  },
  {
    "word": "fasten",
    "meaning": "단단히 고정시키다"
  },
  {
    "word": "fat",
    "meaning": "살찐"
  },
  {
    "word": "fatal",
    "meaning": "치명적인"
  },
  {
    "word": "fate",
    "meaning": "숙명"
  },
  {
    "word": "father",
    "meaning": "아버지"
  },
  {
    "word": "fault",
    "meaning": "결점"
  },
  {
    "word": "favor",
    "meaning": "호의"
  },
  {
    "word": "favorite",
    "meaning": "마음에 드는 좋아하는 물건"
  },
  {
    "word": "fear",
    "meaning": "두려움"
  },
  {
    "word": "feature",
    "meaning": "얼굴의 생김새"
  },
  {
    "word": "federal",
    "meaning": "연방의"
  },
  {
    "word": "fee",
    "meaning": "요금"
  },
  {
    "word": "feed",
    "meaning": "음식(먹이)을 주다"
  },
  {
    "word": "feel",
    "meaning": "만져보다"
  },
  {
    "word": "fellow",
    "meaning": "동무"
  },
  {
    "word": "female",
    "meaning": "여성"
  },
  {
    "word": "ferry",
    "meaning": "나루터"
  },
  {
    "word": "fertile",
    "meaning": "비옥한"
  },
  {
    "word": "fever",
    "meaning": "열"
  },
  {
    "word": "few",
    "meaning": "소수의"
  },
  {
    "word": "fiber",
    "meaning": "섬유"
  },
  {
    "word": "field",
    "meaning": "들"
  },
  {
    "word": "fierce",
    "meaning": "흉포한"
  },
  {
    "word": "fight",
    "meaning": "싸움"
  },
  {
    "word": "figure",
    "meaning": "모습"
  },
  {
    "word": "file",
    "meaning": "종이끼우개"
  },
  {
    "word": "fill",
    "meaning": "가득 채우다"
  },
  {
    "word": "filter",
    "meaning": "여과기 여과하다"
  },
  {
    "word": "final",
    "meaning": "최후의"
  },
  {
    "word": "finance",
    "meaning": "재정"
  },
  {
    "word": "find",
    "meaning": "발견하다"
  },
  {
    "word": "fine",
    "meaning": "훌륭한"
  },
  {
    "word": "finger",
    "meaning": "손가락 손가락을 대다"
  },
  {
    "word": "finish",
    "meaning": "끝내다"
  },
  {
    "word": "finite",
    "meaning": "한정되어 있는"
  },
  {
    "word": "fire",
    "meaning": "불"
  },
  {
    "word": "firm",
    "meaning": "굳은"
  },
  {
    "word": "fish",
    "meaning": "물고기"
  },
  {
    "word": "fist",
    "meaning": "주먹"
  },
  {
    "word": "fit",
    "meaning": "맞는"
  },
  {
    "word": "fix",
    "meaning": "고정시키다"
  },
  {
    "word": "flag",
    "meaning": "기"
  },
  {
    "word": "flame",
    "meaning": "불꽃"
  },
  {
    "word": "flash",
    "meaning": "번쩍임"
  },
  {
    "word": "flat",
    "meaning": "편평한"
  },
  {
    "word": "flavor",
    "meaning": "(독특한)맛"
  },
  {
    "word": "flaw",
    "meaning": "금"
  },
  {
    "word": "flee",
    "meaning": "달아나다"
  },
  {
    "word": "flesh",
    "meaning": "살"
  },
  {
    "word": "flexible",
    "meaning": "구부리기 쉬운"
  },
  {
    "word": "flight",
    "meaning": "날기"
  },
  {
    "word": "flip",
    "meaning": "튀기다 홱 움직이다 튀기기"
  },
  {
    "word": "float",
    "meaning": "뜨다"
  },
  {
    "word": "flock",
    "meaning": "무리"
  },
  {
    "word": "flood",
    "meaning": "홍수"
  },
  {
    "word": "floor",
    "meaning": "마룻바닥"
  },
  {
    "word": "flourish",
    "meaning": "번창하다"
  },
  {
    "word": "flow",
    "meaning": "흐르다"
  },
  {
    "word": "flower",
    "meaning": "꽃"
  },
  {
    "word": "fluid",
    "meaning": "유동성의"
  },
  {
    "word": "flush",
    "meaning": "왈칵흐르다"
  },
  {
    "word": "fly",
    "meaning": "날다"
  },
  {
    "word": "focus",
    "meaning": "초점"
  },
  {
    "word": "fog",
    "meaning": "안개"
  },
  {
    "word": "fold",
    "meaning": "주름"
  },
  {
    "word": "folk",
    "meaning": "사람들"
  },
  {
    "word": "follow",
    "meaning": "쫓다"
  },
  {
    "word": "fond",
    "meaning": "좋아하는"
  },
  {
    "word": "food",
    "meaning": "음식"
  },
  {
    "word": "fool",
    "meaning": "바보"
  },
  {
    "word": "foot",
    "meaning": "발"
  },
  {
    "word": "football",
    "meaning": "축구"
  },
  {
    "word": "for",
    "meaning": "대신에"
  },
  {
    "word": "forbid",
    "meaning": "금하다"
  },
  {
    "word": "force",
    "meaning": "힘"
  },
  {
    "word": "forecast",
    "meaning": "예상"
  },
  {
    "word": "forehead",
    "meaning": "이마"
  },
  {
    "word": "foreign",
    "meaning": "외국의"
  },
  {
    "word": "forest",
    "meaning": "숲"
  },
  {
    "word": "forever",
    "meaning": "영원히"
  },
  {
    "word": "forget",
    "meaning": "잊다"
  },
  {
    "word": "forgive",
    "meaning": "용서하다"
  },
  {
    "word": "form",
    "meaning": "모양"
  },
  {
    "word": "formal",
    "meaning": "형식상의"
  },
  {
    "word": "format",
    "meaning": "(서적의)체제"
  },
  {
    "word": "formation",
    "meaning": "형성"
  },
  {
    "word": "former",
    "meaning": "이전의"
  },
  {
    "word": "formula",
    "meaning": "공식"
  },
  {
    "word": "forth",
    "meaning": "앞으로"
  },
  {
    "word": "fortunate",
    "meaning": "운좋은"
  },
  {
    "word": "fortune",
    "meaning": "운"
  },
  {
    "word": "forum",
    "meaning": "공개토론회"
  },
  {
    "word": "forward",
    "meaning": "앞쪽에"
  },
  {
    "word": "foster",
    "meaning": "기르다"
  },
  {
    "word": "foundation",
    "meaning": "기초"
  },
  {
    "word": "fountain",
    "meaning": "샘"
  },
  {
    "word": "fox",
    "meaning": "교활한 사람"
  },
  {
    "word": "fraction",
    "meaning": "분수"
  },
  {
    "word": "frame",
    "meaning": "구조"
  },
  {
    "word": "framework",
    "meaning": "뼈대"
  },
  {
    "word": "frankly",
    "meaning": "솔직히"
  },
  {
    "word": "free",
    "meaning": "자유로운"
  },
  {
    "word": "freeze",
    "meaning": "얼다"
  },
  {
    "word": "frequent",
    "meaning": "빈번한"
  },
  {
    "word": "fresh",
    "meaning": "새로운"
  },
  {
    "word": "friend",
    "meaning": "친구"
  },
  {
    "word": "fright",
    "meaning": "(갑자기 엄습하는)공포"
  },
  {
    "word": "frog",
    "meaning": "개구리"
  },
  {
    "word": "from",
    "meaning": "(분리,이탈,출발점,기점)-로 부터"
  },
  {
    "word": "front",
    "meaning": "정면"
  },
  {
    "word": "frost",
    "meaning": "서리"
  },
  {
    "word": "frown",
    "meaning": "눈살을 찌푸리다"
  },
  {
    "word": "fruit",
    "meaning": "과일"
  },
  {
    "word": "frustrate",
    "meaning": "(계획 등을)좌절시키다"
  },
  {
    "word": "fry",
    "meaning": "기름으로 튀기다"
  },
  {
    "word": "fuel",
    "meaning": "연료"
  },
  {
    "word": "fulfil",
    "meaning": "이행하다"
  },
  {
    "word": "full",
    "meaning": "가득찬"
  },
  {
    "word": "fun",
    "meaning": "즐거운 생각"
  },
  {
    "word": "function",
    "meaning": "기능"
  },
  {
    "word": "fund",
    "meaning": "기금"
  },
  {
    "word": "fundamental",
    "meaning": "기초(기준)의"
  },
  {
    "word": "funeral",
    "meaning": "장사"
  },
  {
    "word": "fur",
    "meaning": "모피"
  },
  {
    "word": "furious",
    "meaning": "노하여 펄펄뛰는"
  },
  {
    "word": "furnish",
    "meaning": "공급하다"
  },
  {
    "word": "furniture",
    "meaning": "가구"
  },
  {
    "word": "furthermore",
    "meaning": "더우기"
  },
  {
    "word": "fuse",
    "meaning": "신관"
  },
  {
    "word": "future",
    "meaning": "미래"
  },
  {
    "word": "gain",
    "meaning": "얻다"
  },
  {
    "word": "gamble",
    "meaning": "도박하다 도박 도박해서 잃다"
  },
  {
    "word": "gang",
    "meaning": "한 떼"
  },
  {
    "word": "gap",
    "meaning": "갈라진 틈"
  },
  {
    "word": "garage",
    "meaning": "차고"
  },
  {
    "word": "garden",
    "meaning": "뜰"
  },
  {
    "word": "gasoline",
    "meaning": "가솔린"
  },
  {
    "word": "gate",
    "meaning": "문"
  },
  {
    "word": "gather",
    "meaning": "그러모으다"
  },
  {
    "word": "gaze",
    "meaning": "지켜보다"
  },
  {
    "word": "gear",
    "meaning": "톱니바퀴"
  },
  {
    "word": "gender",
    "meaning": "성"
  },
  {
    "word": "gene",
    "meaning": "유전(인)자"
  },
  {
    "word": "general",
    "meaning": "일반적인"
  },
  {
    "word": "generate",
    "meaning": "낳다"
  },
  {
    "word": "generation",
    "meaning": "일대"
  },
  {
    "word": "generous",
    "meaning": "광대한"
  },
  {
    "word": "genius",
    "meaning": "천재"
  },
  {
    "word": "genre",
    "meaning": "유형"
  },
  {
    "word": "gentle",
    "meaning": "온화한"
  },
  {
    "word": "gentleman",
    "meaning": "신사"
  },
  {
    "word": "genuine",
    "meaning": "진짜의"
  },
  {
    "word": "geography",
    "meaning": "지리"
  },
  {
    "word": "geology",
    "meaning": "지질학"
  },
  {
    "word": "gesture",
    "meaning": "몸짓"
  },
  {
    "word": "get",
    "meaning": "얻다"
  },
  {
    "word": "ghost",
    "meaning": "유령"
  },
  {
    "word": "giant",
    "meaning": "거인"
  },
  {
    "word": "gift",
    "meaning": "선물"
  },
  {
    "word": "giraffe",
    "meaning": "기린"
  },
  {
    "word": "girl",
    "meaning": "소녀"
  },
  {
    "word": "give",
    "meaning": "주다"
  },
  {
    "word": "glad",
    "meaning": "기쁜"
  },
  {
    "word": "glance",
    "meaning": "흘긋 봄"
  },
  {
    "word": "glare",
    "meaning": "번쩍이는 빛"
  },
  {
    "word": "glass",
    "meaning": "유리"
  },
  {
    "word": "glimpse",
    "meaning": "흘끗 봄"
  },
  {
    "word": "global",
    "meaning": "공모양의"
  },
  {
    "word": "glory",
    "meaning": "영광"
  },
  {
    "word": "glove",
    "meaning": "장갑"
  },
  {
    "word": "glow",
    "meaning": "타다"
  },
  {
    "word": "glue",
    "meaning": "아교"
  },
  {
    "word": "go",
    "meaning": "가다"
  },
  {
    "word": "goal",
    "meaning": "결승점"
  },
  {
    "word": "goat",
    "meaning": "염소"
  },
  {
    "word": "god",
    "meaning": "신"
  },
  {
    "word": "gold",
    "meaning": "금"
  },
  {
    "word": "good",
    "meaning": "좋은"
  },
  {
    "word": "goodbye",
    "meaning": "안녕히 가세요"
  },
  {
    "word": "goods",
    "meaning": "상품"
  },
  {
    "word": "gorgeous",
    "meaning": "호화로운"
  },
  {
    "word": "govern",
    "meaning": "다스리다"
  },
  {
    "word": "grab",
    "meaning": "붙잡다(=snatch)"
  },
  {
    "word": "grace",
    "meaning": "은총"
  },
  {
    "word": "grade",
    "meaning": "등급"
  },
  {
    "word": "gradual",
    "meaning": "점차적인"
  },
  {
    "word": "graduate",
    "meaning": "학위를 수여하다"
  },
  {
    "word": "grain",
    "meaning": "곡물"
  },
  {
    "word": "grand",
    "meaning": "위대한"
  },
  {
    "word": "grandfather",
    "meaning": "할아버지"
  },
  {
    "word": "grant",
    "meaning": "받아들이다"
  },
  {
    "word": "grape",
    "meaning": "포도"
  },
  {
    "word": "graphic",
    "meaning": "그려 놓은 듯한"
  },
  {
    "word": "grasp",
    "meaning": "붙잡다"
  },
  {
    "word": "grass",
    "meaning": "풀밭"
  },
  {
    "word": "grateful",
    "meaning": "고맙게 생각하는"
  },
  {
    "word": "grave",
    "meaning": "무덤"
  },
  {
    "word": "great",
    "meaning": "커다란"
  },
  {
    "word": "greed",
    "meaning": "탐욕"
  },
  {
    "word": "green",
    "meaning": "초록색"
  },
  {
    "word": "greet",
    "meaning": "인사하다"
  },
  {
    "word": "grey",
    "meaning": "회색의"
  },
  {
    "word": "grief",
    "meaning": "심한 슬픔(deep sorrow)"
  },
  {
    "word": "grip",
    "meaning": "잡기"
  },
  {
    "word": "grocery",
    "meaning": "식품잡화류"
  },
  {
    "word": "gross",
    "meaning": "총계의"
  },
  {
    "word": "ground",
    "meaning": "땅"
  },
  {
    "word": "group",
    "meaning": "집단"
  },
  {
    "word": "grow",
    "meaning": "성장하다"
  },
  {
    "word": "guarantee",
    "meaning": "보증하다"
  },
  {
    "word": "guardian",
    "meaning": "보호자"
  },
  {
    "word": "guess",
    "meaning": "추측(짐작)하다"
  },
  {
    "word": "guest",
    "meaning": "손님"
  },
  {
    "word": "guide",
    "meaning": "이끌다"
  },
  {
    "word": "guideline",
    "meaning": "지침"
  },
  {
    "word": "guilty",
    "meaning": "죄지은"
  },
  {
    "word": "gulf",
    "meaning": "만"
  },
  {
    "word": "gun",
    "meaning": "총"
  },
  {
    "word": "guy",
    "meaning": "녀석"
  },
  {
    "word": "gymnasium",
    "meaning": "실내체조장"
  },
  {
    "word": "habit",
    "meaning": "습관"
  },
  {
    "word": "habitat",
    "meaning": "(동물의)자연번식지"
  },
  {
    "word": "hair",
    "meaning": "털"
  },
  {
    "word": "half",
    "meaning": "반"
  },
  {
    "word": "hall",
    "meaning": "회관"
  },
  {
    "word": "halt",
    "meaning": "멈춰서다"
  },
  {
    "word": "hammer",
    "meaning": "망치"
  },
  {
    "word": "hand",
    "meaning": "손"
  },
  {
    "word": "handicap",
    "meaning": "불리한 조건"
  },
  {
    "word": "handle",
    "meaning": "손잡이"
  },
  {
    "word": "handsome",
    "meaning": "얼굴(자태)이 잘생긴"
  },
  {
    "word": "hang",
    "meaning": "걸다"
  },
  {
    "word": "happen",
    "meaning": "(사건 등이)일어나다"
  },
  {
    "word": "happy",
    "meaning": "행운의"
  },
  {
    "word": "harbor",
    "meaning": "항구"
  },
  {
    "word": "hard",
    "meaning": "단단한"
  },
  {
    "word": "hardly",
    "meaning": "거의 -아니다"
  },
  {
    "word": "harm",
    "meaning": "해"
  },
  {
    "word": "harsh",
    "meaning": "거친"
  },
  {
    "word": "harvest",
    "meaning": "수확"
  },
  {
    "word": "haste",
    "meaning": "급함"
  },
  {
    "word": "hat",
    "meaning": "(테있는)모자 모자를 씌우다"
  },
  {
    "word": "hate",
    "meaning": "미워하다"
  },
  {
    "word": "haunt",
    "meaning": "자주가다"
  },
  {
    "word": "have",
    "meaning": "가지(고 있)다"
  },
  {
    "word": "hazard",
    "meaning": "위험"
  },
  {
    "word": "he",
    "meaning": "(3인칭단수 남성)그"
  },
  {
    "word": "head",
    "meaning": "머리"
  },
  {
    "word": "headache",
    "meaning": "두통"
  },
  {
    "word": "headquarters",
    "meaning": "본부"
  },
  {
    "word": "heal",
    "meaning": "고치다"
  },
  {
    "word": "health",
    "meaning": "건강"
  },
  {
    "word": "hear",
    "meaning": "듣다"
  },
  {
    "word": "heart",
    "meaning": "심장"
  },
  {
    "word": "heat",
    "meaning": "열"
  },
  {
    "word": "heaven",
    "meaning": "하늘"
  },
  {
    "word": "heavy",
    "meaning": "무거운"
  },
  {
    "word": "heel",
    "meaning": "발뒤꿈치"
  },
  {
    "word": "height",
    "meaning": "높이"
  },
  {
    "word": "heir",
    "meaning": "상속인"
  },
  {
    "word": "helicopter",
    "meaning": "헬리콥터"
  },
  {
    "word": "hell",
    "meaning": "지옥"
  },
  {
    "word": "hello",
    "meaning": "여보"
  },
  {
    "word": "help",
    "meaning": "돕다"
  },
  {
    "word": "hence",
    "meaning": "그러므로"
  },
  {
    "word": "here",
    "meaning": "여기에"
  },
  {
    "word": "heritage",
    "meaning": "세습 재산"
  },
  {
    "word": "hero",
    "meaning": "영웅"
  },
  {
    "word": "hesitate",
    "meaning": "주저하다"
  },
  {
    "word": "hide",
    "meaning": "감추다"
  },
  {
    "word": "high",
    "meaning": "높은"
  },
  {
    "word": "highway",
    "meaning": "대도"
  },
  {
    "word": "hill",
    "meaning": "언덕, 낮은 산 인도 고지"
  },
  {
    "word": "hip",
    "meaning": "엉덩이"
  },
  {
    "word": "hire",
    "meaning": "고용하다"
  },
  {
    "word": "history",
    "meaning": "역사"
  },
  {
    "word": "hit",
    "meaning": "명중하다"
  },
  {
    "word": "hobby",
    "meaning": "취미"
  },
  {
    "word": "hold",
    "meaning": "손에 갖고 있다"
  },
  {
    "word": "hole",
    "meaning": "구멍"
  },
  {
    "word": "holiday",
    "meaning": "휴일"
  },
  {
    "word": "holy",
    "meaning": "신성한"
  },
  {
    "word": "home",
    "meaning": "가정"
  },
  {
    "word": "homework",
    "meaning": "숙제"
  },
  {
    "word": "honest",
    "meaning": "정직한"
  },
  {
    "word": "honey",
    "meaning": "벌꿀"
  },
  {
    "word": "honor",
    "meaning": "명예"
  },
  {
    "word": "hook",
    "meaning": "갈고리"
  },
  {
    "word": "hope",
    "meaning": "희망"
  },
  {
    "word": "horizon",
    "meaning": "지평선"
  },
  {
    "word": "horn",
    "meaning": "뿔"
  },
  {
    "word": "horror",
    "meaning": "공포"
  },
  {
    "word": "horse",
    "meaning": "말"
  },
  {
    "word": "hospital",
    "meaning": "병원"
  },
  {
    "word": "host",
    "meaning": "주인, 집주인 노릇, 호스트"
  },
  {
    "word": "hostage",
    "meaning": "볼모"
  },
  {
    "word": "hostile",
    "meaning": "반대하는"
  },
  {
    "word": "hot",
    "meaning": "뜨거운"
  },
  {
    "word": "hour",
    "meaning": "시간"
  },
  {
    "word": "house",
    "meaning": "집"
  },
  {
    "word": "household",
    "meaning": "가족"
  },
  {
    "word": "how",
    "meaning": "어떻게"
  },
  {
    "word": "however",
    "meaning": "아무리"
  },
  {
    "word": "hug",
    "meaning": "꼭 껴안다"
  },
  {
    "word": "huge",
    "meaning": "거대한"
  },
  {
    "word": "human",
    "meaning": "인간의"
  },
  {
    "word": "humor",
    "meaning": "유우머"
  },
  {
    "word": "hundred",
    "meaning": "100 100의"
  },
  {
    "word": "hungry",
    "meaning": "배고픈"
  },
  {
    "word": "hunt",
    "meaning": "사냥하다"
  },
  {
    "word": "hurry",
    "meaning": "서두르다"
  },
  {
    "word": "hurt",
    "meaning": "상처내다"
  },
  {
    "word": "husband",
    "meaning": "남편 절약하다"
  },
  {
    "word": "hut",
    "meaning": "오두막"
  },
  {
    "word": "hypothesis",
    "meaning": "가설"
  },
  {
    "word": "I",
    "meaning": "나는, 내가"
  },
  {
    "word": "ice",
    "meaning": "얼음"
  },
  {
    "word": "idea",
    "meaning": "관념"
  },
  {
    "word": "ideal",
    "meaning": "이상"
  },
  {
    "word": "identical",
    "meaning": "아주 동일한"
  },
  {
    "word": "identify",
    "meaning": "동일시하다"
  },
  {
    "word": "ideology",
    "meaning": "공리"
  },
  {
    "word": "if",
    "meaning": "만일 -이라면"
  },
  {
    "word": "ignore",
    "meaning": "무시하다"
  },
  {
    "word": "ill",
    "meaning": "병든"
  },
  {
    "word": "illusion",
    "meaning": "환영"
  },
  {
    "word": "illustrate",
    "meaning": "설명하다"
  },
  {
    "word": "imagine",
    "meaning": "상상하다"
  },
  {
    "word": "imitate",
    "meaning": "흉내내다"
  },
  {
    "word": "immediate",
    "meaning": "직접의"
  },
  {
    "word": "immense",
    "meaning": "무한한"
  },
  {
    "word": "immigrate",
    "meaning": "이주하다"
  },
  {
    "word": "immune",
    "meaning": "면역성의"
  },
  {
    "word": "impact",
    "meaning": "충격"
  },
  {
    "word": "imperial",
    "meaning": "제국의"
  },
  {
    "word": "implement",
    "meaning": "기구"
  },
  {
    "word": "imply",
    "meaning": "함축하다"
  },
  {
    "word": "import",
    "meaning": "수입하다"
  },
  {
    "word": "important",
    "meaning": "중요한"
  },
  {
    "word": "impose",
    "meaning": "부과하다"
  },
  {
    "word": "impress",
    "meaning": "인상지우다"
  },
  {
    "word": "improve",
    "meaning": "개선하다"
  },
  {
    "word": "in",
    "meaning": "-속에"
  },
  {
    "word": "incentive",
    "meaning": "자극적인"
  },
  {
    "word": "incident",
    "meaning": "사건"
  },
  {
    "word": "incline",
    "meaning": "기울이다"
  },
  {
    "word": "include",
    "meaning": "포함하다"
  },
  {
    "word": "income",
    "meaning": "수입"
  },
  {
    "word": "incorporate",
    "meaning": "합동시키다"
  },
  {
    "word": "increase",
    "meaning": "늘다"
  },
  {
    "word": "incredible",
    "meaning": "믿을 수 없는"
  },
  {
    "word": "indeed",
    "meaning": "참으로"
  },
  {
    "word": "independent",
    "meaning": "독립한"
  },
  {
    "word": "index",
    "meaning": "색인"
  },
  {
    "word": "indicate",
    "meaning": "지적하다"
  },
  {
    "word": "individual",
    "meaning": "개인"
  },
  {
    "word": "induce",
    "meaning": "꾀다"
  },
  {
    "word": "industry",
    "meaning": "공업"
  },
  {
    "word": "inevitable",
    "meaning": "피할 수 없는"
  },
  {
    "word": "infant",
    "meaning": "유아"
  },
  {
    "word": "infect",
    "meaning": "감염시키다"
  },
  {
    "word": "infer",
    "meaning": "추론하다"
  },
  {
    "word": "inflate",
    "meaning": "부풀게 하다"
  },
  {
    "word": "influence",
    "meaning": "영향력"
  },
  {
    "word": "inform",
    "meaning": "알리다"
  },
  {
    "word": "informal",
    "meaning": "비공식의"
  },
  {
    "word": "ingredient",
    "meaning": "성분"
  },
  {
    "word": "inhabit",
    "meaning": "살다"
  },
  {
    "word": "inherent",
    "meaning": "생태의"
  },
  {
    "word": "inhibit",
    "meaning": "금하다"
  },
  {
    "word": "initial",
    "meaning": "처음의"
  },
  {
    "word": "initiate",
    "meaning": "시작하다"
  },
  {
    "word": "inject",
    "meaning": "주사하다"
  },
  {
    "word": "injure",
    "meaning": "해치다"
  },
  {
    "word": "inn",
    "meaning": "여인숙"
  },
  {
    "word": "innocent",
    "meaning": "무구한"
  },
  {
    "word": "innovate",
    "meaning": "새롭게 하다"
  },
  {
    "word": "input",
    "meaning": "투입"
  },
  {
    "word": "inquire",
    "meaning": "묻다"
  },
  {
    "word": "insect",
    "meaning": "곤충"
  },
  {
    "word": "insert",
    "meaning": "끼워넣다"
  },
  {
    "word": "inside",
    "meaning": "안쪽"
  },
  {
    "word": "insight",
    "meaning": "통찰(력)"
  },
  {
    "word": "insist",
    "meaning": "주장하다"
  },
  {
    "word": "inspect",
    "meaning": "검사하다"
  },
  {
    "word": "inspire",
    "meaning": "영감을 주다"
  },
  {
    "word": "install",
    "meaning": "설치하다"
  },
  {
    "word": "instance",
    "meaning": "실례"
  },
  {
    "word": "instant",
    "meaning": "즉시의"
  },
  {
    "word": "instead",
    "meaning": "그 대신에"
  },
  {
    "word": "instinct",
    "meaning": "본능"
  },
  {
    "word": "institute",
    "meaning": "만들다"
  },
  {
    "word": "instruct",
    "meaning": "가르치다"
  },
  {
    "word": "instrument",
    "meaning": "기구"
  },
  {
    "word": "insult",
    "meaning": "모욕하다"
  },
  {
    "word": "insure",
    "meaning": "보증하다"
  },
  {
    "word": "integrate",
    "meaning": "통합하다"
  },
  {
    "word": "intellectual",
    "meaning": "지적인"
  },
  {
    "word": "intelligent",
    "meaning": "지적인"
  },
  {
    "word": "intend",
    "meaning": "-할 작정이다"
  },
  {
    "word": "intense",
    "meaning": "강렬한"
  },
  {
    "word": "intent",
    "meaning": "의향"
  },
  {
    "word": "interact",
    "meaning": "서로 작용하다"
  },
  {
    "word": "interest",
    "meaning": "흥미"
  },
  {
    "word": "interfere",
    "meaning": "간섭하다"
  },
  {
    "word": "intermediate",
    "meaning": "중간의 중간물"
  },
  {
    "word": "internal",
    "meaning": "내부의"
  },
  {
    "word": "international",
    "meaning": "국제적인"
  },
  {
    "word": "interpret",
    "meaning": "해석하다"
  },
  {
    "word": "interrupt",
    "meaning": "훼방놓다"
  },
  {
    "word": "interval",
    "meaning": "간격"
  },
  {
    "word": "intervene",
    "meaning": "사이에 들다"
  },
  {
    "word": "intimate",
    "meaning": "친밀한"
  },
  {
    "word": "into",
    "meaning": "-안으로"
  },
  {
    "word": "intrigue",
    "meaning": "음모"
  },
  {
    "word": "introduce",
    "meaning": "안으로 들이다"
  },
  {
    "word": "invade",
    "meaning": "침입하다"
  },
  {
    "word": "invent",
    "meaning": "발명하다"
  },
  {
    "word": "invest",
    "meaning": "투자하다"
  },
  {
    "word": "investigate",
    "meaning": "조사하다"
  },
  {
    "word": "invite",
    "meaning": "초대하다"
  },
  {
    "word": "involve",
    "meaning": "말아넣다"
  },
  {
    "word": "iron",
    "meaning": "쇠"
  },
  {
    "word": "irony",
    "meaning": "반어"
  },
  {
    "word": "irritate",
    "meaning": "노하게 하다"
  },
  {
    "word": "island",
    "meaning": "섬"
  },
  {
    "word": "isolate",
    "meaning": "고립시키다"
  },
  {
    "word": "it",
    "meaning": "그것은"
  },
  {
    "word": "item",
    "meaning": "조항"
  },
  {
    "word": "jail",
    "meaning": "교도소"
  },
  {
    "word": "jar",
    "meaning": "(아가리가 넓은)항아리"
  },
  {
    "word": "jaw",
    "meaning": "턱"
  },
  {
    "word": "jeans",
    "meaning": "청바지"
  },
  {
    "word": "jet",
    "meaning": "(가스등의)분출"
  },
  {
    "word": "job",
    "meaning": "일"
  },
  {
    "word": "jog",
    "meaning": "살짝 밀다 덜커덕 움직이다 고르지 않음"
  },
  {
    "word": "join",
    "meaning": "결합하다"
  },
  {
    "word": "joint",
    "meaning": "이음매"
  },
  {
    "word": "joke",
    "meaning": "농담"
  },
  {
    "word": "journal",
    "meaning": "일간신문"
  },
  {
    "word": "journey",
    "meaning": "여행"
  },
  {
    "word": "joy",
    "meaning": "즐거움"
  },
  {
    "word": "judge",
    "meaning": "재판관"
  },
  {
    "word": "judicial",
    "meaning": "사법의"
  },
  {
    "word": "junior",
    "meaning": "손아래사람"
  },
  {
    "word": "jury",
    "meaning": "배심"
  },
  {
    "word": "just",
    "meaning": "올바른"
  },
  {
    "word": "justice",
    "meaning": "정의"
  },
  {
    "word": "justify",
    "meaning": "옳다고 하다"
  },
  {
    "word": "keen",
    "meaning": "날카로운"
  },
  {
    "word": "keep",
    "meaning": "계속하다"
  },
  {
    "word": "key",
    "meaning": "열쇠"
  },
  {
    "word": "kick",
    "meaning": "걷어차다"
  },
  {
    "word": "kid",
    "meaning": "아이"
  },
  {
    "word": "kill",
    "meaning": "죽이다"
  },
  {
    "word": "kind",
    "meaning": "친절한"
  },
  {
    "word": "king",
    "meaning": "왕"
  },
  {
    "word": "kit",
    "meaning": "연장통"
  },
  {
    "word": "kitchen",
    "meaning": "부엌"
  },
  {
    "word": "knee",
    "meaning": "무릎"
  },
  {
    "word": "knife",
    "meaning": "나이프"
  },
  {
    "word": "knight",
    "meaning": "(중세의)기사"
  },
  {
    "word": "knock",
    "meaning": "치다"
  },
  {
    "word": "knot",
    "meaning": "매듭(=tie)"
  },
  {
    "word": "know",
    "meaning": "알다"
  },
  {
    "word": "label",
    "meaning": "라벨"
  },
  {
    "word": "labor",
    "meaning": "노동"
  },
  {
    "word": "laboratory",
    "meaning": "실험실"
  },
  {
    "word": "lack",
    "meaning": "결핍"
  },
  {
    "word": "ladder",
    "meaning": "사닥다리"
  },
  {
    "word": "lady",
    "meaning": "귀부인"
  },
  {
    "word": "lake",
    "meaning": "호수"
  },
  {
    "word": "lamb",
    "meaning": "어린 양"
  },
  {
    "word": "lamp",
    "meaning": "등"
  },
  {
    "word": "land",
    "meaning": "뭍"
  },
  {
    "word": "landscape",
    "meaning": "풍경"
  },
  {
    "word": "lane",
    "meaning": "좁은길"
  },
  {
    "word": "language",
    "meaning": "언어"
  },
  {
    "word": "lap",
    "meaning": "무릎"
  },
  {
    "word": "large",
    "meaning": "큰"
  },
  {
    "word": "last",
    "meaning": "계속하다"
  },
  {
    "word": "late",
    "meaning": "늦은"
  },
  {
    "word": "latter",
    "meaning": "뒤쪽의"
  },
  {
    "word": "laugh",
    "meaning": "(소리내어)웃다"
  },
  {
    "word": "launch",
    "meaning": "진수시키다"
  },
  {
    "word": "laundry",
    "meaning": "세탁물"
  },
  {
    "word": "law",
    "meaning": "법률"
  },
  {
    "word": "lawn",
    "meaning": "잔디밭"
  },
  {
    "word": "lawyer",
    "meaning": "법률가"
  },
  {
    "word": "lay",
    "meaning": "눕히다"
  },
  {
    "word": "layer",
    "meaning": "층"
  },
  {
    "word": "lazy",
    "meaning": "게으른"
  },
  {
    "word": "lead",
    "meaning": "이끌다"
  },
  {
    "word": "leaf",
    "meaning": "잎"
  },
  {
    "word": "leak",
    "meaning": "샘"
  },
  {
    "word": "lean",
    "meaning": "기대다"
  },
  {
    "word": "leap",
    "meaning": "껑충 뛰다"
  },
  {
    "word": "learn",
    "meaning": "배우다"
  },
  {
    "word": "lease",
    "meaning": "임대차"
  },
  {
    "word": "leather",
    "meaning": "무두질한 가죽"
  },
  {
    "word": "leave",
    "meaning": "남기고가다"
  },
  {
    "word": "lecture",
    "meaning": "강의"
  },
  {
    "word": "left",
    "meaning": "왼쪽의"
  },
  {
    "word": "leg",
    "meaning": "다리"
  },
  {
    "word": "legal",
    "meaning": "법률상의"
  },
  {
    "word": "legend",
    "meaning": "전설"
  },
  {
    "word": "legislate",
    "meaning": "법률을 제정하다"
  },
  {
    "word": "legitimate",
    "meaning": "합법의"
  },
  {
    "word": "leisure",
    "meaning": "틈"
  },
  {
    "word": "lend",
    "meaning": "빌리다"
  },
  {
    "word": "lesson",
    "meaning": "학과"
  },
  {
    "word": "let",
    "meaning": "시키다"
  },
  {
    "word": "letter",
    "meaning": "편지"
  },
  {
    "word": "level",
    "meaning": "수평의"
  },
  {
    "word": "liberal",
    "meaning": "자유주의의"
  },
  {
    "word": "liberty",
    "meaning": "자유"
  },
  {
    "word": "library",
    "meaning": "도서관"
  },
  {
    "word": "license",
    "meaning": "면허"
  },
  {
    "word": "lid",
    "meaning": "뚜껑"
  },
  {
    "word": "lie",
    "meaning": "눕다"
  },
  {
    "word": "lift",
    "meaning": "끌어올리다"
  },
  {
    "word": "light",
    "meaning": "빛"
  },
  {
    "word": "like",
    "meaning": "좋아하다"
  },
  {
    "word": "likely",
    "meaning": "있을 법한"
  },
  {
    "word": "likewise",
    "meaning": "같이, 마찬가지로"
  },
  {
    "word": "limit",
    "meaning": "한계"
  },
  {
    "word": "line",
    "meaning": "선"
  },
  {
    "word": "linguistic",
    "meaning": "말의"
  },
  {
    "word": "link",
    "meaning": "사슬의 고리"
  },
  {
    "word": "lion",
    "meaning": "사자"
  },
  {
    "word": "lip",
    "meaning": "입술"
  },
  {
    "word": "liquid",
    "meaning": "액체"
  },
  {
    "word": "list",
    "meaning": "일람표"
  },
  {
    "word": "listen",
    "meaning": "경청하다"
  },
  {
    "word": "literal",
    "meaning": "문자의"
  },
  {
    "word": "literature",
    "meaning": "문학"
  },
  {
    "word": "little",
    "meaning": "작은"
  },
  {
    "word": "live",
    "meaning": "살다"
  },
  {
    "word": "livingroom",
    "meaning": "거실"
  },
  {
    "word": "load",
    "meaning": "짐"
  },
  {
    "word": "loan",
    "meaning": "대부"
  },
  {
    "word": "local",
    "meaning": "장소의"
  },
  {
    "word": "locate",
    "meaning": "관청 등을 두다"
  },
  {
    "word": "lock",
    "meaning": "자물쇠"
  },
  {
    "word": "log",
    "meaning": "통나무"
  },
  {
    "word": "logic",
    "meaning": "논리학"
  },
  {
    "word": "lone",
    "meaning": "혼자의"
  },
  {
    "word": "long",
    "meaning": "(길이,시간 등)긴"
  },
  {
    "word": "look",
    "meaning": "보다"
  },
  {
    "word": "loose",
    "meaning": "풀어진"
  },
  {
    "word": "lose",
    "meaning": "잃다"
  },
  {
    "word": "loss",
    "meaning": "잃음"
  },
  {
    "word": "lot",
    "meaning": "제비"
  },
  {
    "word": "loud",
    "meaning": "시끄러운"
  },
  {
    "word": "lounge",
    "meaning": "빈둥거리다"
  },
  {
    "word": "love",
    "meaning": "사랑"
  },
  {
    "word": "low",
    "meaning": "낮은"
  },
  {
    "word": "loyal",
    "meaning": "충성스러운"
  },
  {
    "word": "luck",
    "meaning": "운"
  },
  {
    "word": "lump",
    "meaning": "덩어리"
  },
  {
    "word": "lunch",
    "meaning": "점심"
  },
  {
    "word": "luxury",
    "meaning": "사치"
  },
  {
    "word": "machine",
    "meaning": "기계"
  },
  {
    "word": "mad",
    "meaning": "미친"
  },
  {
    "word": "magazine",
    "meaning": "잡지"
  },
  {
    "word": "magnet",
    "meaning": "자석"
  },
  {
    "word": "magnificent",
    "meaning": "장대한"
  },
  {
    "word": "mail",
    "meaning": "우편물"
  },
  {
    "word": "main",
    "meaning": "주요한"
  },
  {
    "word": "maintain",
    "meaning": "계속하다"
  },
  {
    "word": "major",
    "meaning": "큰쪽의"
  },
  {
    "word": "majority",
    "meaning": "대다수"
  },
  {
    "word": "make",
    "meaning": "만들다"
  },
  {
    "word": "male",
    "meaning": "남성의"
  },
  {
    "word": "man",
    "meaning": "남자"
  },
  {
    "word": "manage",
    "meaning": "관리하다"
  },
  {
    "word": "manifest",
    "meaning": "명백히 하다"
  },
  {
    "word": "manipulate",
    "meaning": "(손으로)다루다"
  },
  {
    "word": "manner",
    "meaning": "방법"
  },
  {
    "word": "manufacture",
    "meaning": "제조하다"
  },
  {
    "word": "many",
    "meaning": "많은"
  },
  {
    "word": "map",
    "meaning": "지도"
  },
  {
    "word": "margin",
    "meaning": "가장자리"
  },
  {
    "word": "marine",
    "meaning": "바다의"
  },
  {
    "word": "mark",
    "meaning": "표"
  },
  {
    "word": "marry",
    "meaning": "결혼하다"
  },
  {
    "word": "marvel",
    "meaning": "경이"
  },
  {
    "word": "mass",
    "meaning": "덩어리"
  },
  {
    "word": "master",
    "meaning": "장"
  },
  {
    "word": "match",
    "meaning": "성냥"
  },
  {
    "word": "mate",
    "meaning": "상대"
  },
  {
    "word": "material",
    "meaning": "원료"
  },
  {
    "word": "mathematics",
    "meaning": "수학"
  },
  {
    "word": "matter",
    "meaning": "물질"
  },
  {
    "word": "mature",
    "meaning": "익은"
  },
  {
    "word": "maximum",
    "meaning": "최고점"
  },
  {
    "word": "may",
    "meaning": "5월  청춘, 인생의 봄  산사나무, 아가위나무"
  },
  {
    "word": "maybe",
    "meaning": "아마"
  },
  {
    "word": "mayor",
    "meaning": "시장"
  },
  {
    "word": "meal",
    "meaning": "식사"
  },
  {
    "word": "mean",
    "meaning": "의미하다"
  },
  {
    "word": "meantime",
    "meaning": "그동안 그 사이에"
  },
  {
    "word": "meanwhile",
    "meaning": "그동안"
  },
  {
    "word": "measure",
    "meaning": "재다"
  },
  {
    "word": "meat",
    "meaning": "(식용짐승의)고기"
  },
  {
    "word": "mechanic",
    "meaning": "직공"
  },
  {
    "word": "mechanism",
    "meaning": "(기계)장치"
  },
  {
    "word": "mediate",
    "meaning": "중재하다"
  },
  {
    "word": "medical",
    "meaning": "의학의"
  },
  {
    "word": "medicine",
    "meaning": "약"
  },
  {
    "word": "medieval",
    "meaning": "중세(풍)의"
  },
  {
    "word": "medium",
    "meaning": "중간"
  },
  {
    "word": "meet",
    "meaning": "-을 만나다"
  },
  {
    "word": "melt",
    "meaning": "녹다"
  },
  {
    "word": "memory",
    "meaning": "기억"
  },
  {
    "word": "mental",
    "meaning": "마음의"
  },
  {
    "word": "mention",
    "meaning": "말하다"
  },
  {
    "word": "merchant",
    "meaning": "상인"
  },
  {
    "word": "mere",
    "meaning": "단순한"
  },
  {
    "word": "merge",
    "meaning": "합병하다"
  },
  {
    "word": "merit",
    "meaning": "장점"
  },
  {
    "word": "mess",
    "meaning": "혼란"
  },
  {
    "word": "metal",
    "meaning": "금속"
  },
  {
    "word": "method",
    "meaning": "방법"
  },
  {
    "word": "metropolitan",
    "meaning": "수도권(의)"
  },
  {
    "word": "microphone",
    "meaning": "확성기"
  },
  {
    "word": "microwave",
    "meaning": "극초단파 전자레인지로 요리하다"
  },
  {
    "word": "middle",
    "meaning": "한복판의"
  },
  {
    "word": "might",
    "meaning": "힘"
  },
  {
    "word": "migrate",
    "meaning": "이주하다"
  },
  {
    "word": "mild",
    "meaning": "온후한"
  },
  {
    "word": "military",
    "meaning": "군의"
  },
  {
    "word": "milk",
    "meaning": "젖"
  },
  {
    "word": "mill",
    "meaning": "멧돌"
  },
  {
    "word": "million",
    "meaning": "백만"
  },
  {
    "word": "mind",
    "meaning": "마음"
  },
  {
    "word": "miner",
    "meaning": "광산업자"
  },
  {
    "word": "mineral",
    "meaning": "광물"
  },
  {
    "word": "minimal",
    "meaning": "최소(한도)의"
  },
  {
    "word": "minimum",
    "meaning": "최소 한도"
  },
  {
    "word": "ministry",
    "meaning": "장관(목사)의 직(소임)"
  },
  {
    "word": "minor",
    "meaning": "작은 편의"
  },
  {
    "word": "minute",
    "meaning": "분"
  },
  {
    "word": "miracle",
    "meaning": "기적"
  },
  {
    "word": "mirror",
    "meaning": "거울"
  },
  {
    "word": "miss",
    "meaning": "미혼 여성 실수하다"
  },
  {
    "word": "missile",
    "meaning": "미사일"
  },
  {
    "word": "mission",
    "meaning": "사명"
  },
  {
    "word": "mistake",
    "meaning": "틀리다"
  },
  {
    "word": "mix",
    "meaning": "섞다"
  },
  {
    "word": "mobile",
    "meaning": "움직이기 쉬운"
  },
  {
    "word": "mock",
    "meaning": "조롱하다"
  },
  {
    "word": "mode",
    "meaning": "방법"
  },
  {
    "word": "moderate",
    "meaning": "절제하는"
  },
  {
    "word": "modern",
    "meaning": "현대의"
  },
  {
    "word": "modest",
    "meaning": "겸손한"
  },
  {
    "word": "modify",
    "meaning": "변경하다"
  },
  {
    "word": "moisture",
    "meaning": "습기"
  },
  {
    "word": "molecule",
    "meaning": "분자"
  },
  {
    "word": "moment",
    "meaning": "순간"
  },
  {
    "word": "money",
    "meaning": "금전"
  },
  {
    "word": "monitor",
    "meaning": "충고자"
  },
  {
    "word": "monkey",
    "meaning": "원숭이"
  },
  {
    "word": "monster",
    "meaning": "괴물"
  },
  {
    "word": "month",
    "meaning": "월"
  },
  {
    "word": "monument",
    "meaning": "기념비"
  },
  {
    "word": "mood",
    "meaning": "(일시적인)기분"
  },
  {
    "word": "moon",
    "meaning": "달"
  },
  {
    "word": "moral",
    "meaning": "도덕의"
  },
  {
    "word": "moreover",
    "meaning": "그 위에"
  },
  {
    "word": "morning",
    "meaning": "아침"
  },
  {
    "word": "mortal",
    "meaning": "죽을운명의"
  },
  {
    "word": "mother",
    "meaning": "어머니"
  },
  {
    "word": "motion",
    "meaning": "운동"
  },
  {
    "word": "motive",
    "meaning": "동기"
  },
  {
    "word": "mount",
    "meaning": "산"
  },
  {
    "word": "mountain",
    "meaning": "산"
  },
  {
    "word": "mouse",
    "meaning": "새앙쥐"
  },
  {
    "word": "mouth",
    "meaning": "입"
  },
  {
    "word": "move",
    "meaning": "움직이다"
  },
  {
    "word": "movie",
    "meaning": "영화"
  },
  {
    "word": "much",
    "meaning": "많은"
  },
  {
    "word": "mud",
    "meaning": "진흙"
  },
  {
    "word": "multiple",
    "meaning": "복합의"
  },
  {
    "word": "multiply",
    "meaning": "늘리다"
  },
  {
    "word": "murder",
    "meaning": "살인"
  },
  {
    "word": "muscle",
    "meaning": "근육"
  },
  {
    "word": "museum",
    "meaning": "박물관"
  },
  {
    "word": "mushroom",
    "meaning": "버섯"
  },
  {
    "word": "music",
    "meaning": "음악"
  },
  {
    "word": "must",
    "meaning": "-해야 한다"
  },
  {
    "word": "mutual",
    "meaning": "상호의"
  },
  {
    "word": "myth",
    "meaning": "신화"
  },
  {
    "word": "nail",
    "meaning": "손톱"
  },
  {
    "word": "naive",
    "meaning": "소박한"
  },
  {
    "word": "naked",
    "meaning": "발가벗은"
  },
  {
    "word": "name",
    "meaning": "이름"
  },
  {
    "word": "nanny",
    "meaning": "유모"
  },
  {
    "word": "narrate",
    "meaning": "이야기하다"
  },
  {
    "word": "narrow",
    "meaning": "좁은"
  },
  {
    "word": "nasty",
    "meaning": "불쾌한"
  },
  {
    "word": "nation",
    "meaning": "국가"
  },
  {
    "word": "native",
    "meaning": "타고난"
  },
  {
    "word": "nature",
    "meaning": "자연"
  },
  {
    "word": "navy",
    "meaning": "해군(력)"
  },
  {
    "word": "near",
    "meaning": "가까이 -의 가까이에 가까운 접근하다"
  },
  {
    "word": "neat",
    "meaning": "산뜻한"
  },
  {
    "word": "necessary",
    "meaning": "필요한"
  },
  {
    "word": "neck",
    "meaning": "목"
  },
  {
    "word": "need",
    "meaning": "필요"
  },
  {
    "word": "needle",
    "meaning": "바늘 바늘로 꿰매다 바느질하다 아슬아슬한"
  },
  {
    "word": "negative",
    "meaning": "부정적인"
  },
  {
    "word": "neglect",
    "meaning": "게을리 하다"
  },
  {
    "word": "negotiate",
    "meaning": "교섭하다"
  },
  {
    "word": "neighbor",
    "meaning": "이웃사람(나라)"
  },
  {
    "word": "neither",
    "meaning": "(둘중)어느쪽도 -아니다 -도 아니다"
  },
  {
    "word": "nephew",
    "meaning": "조카"
  },
  {
    "word": "nervous",
    "meaning": "신경의"
  },
  {
    "word": "nest",
    "meaning": "보금자리"
  },
  {
    "word": "net",
    "meaning": "그물"
  },
  {
    "word": "network",
    "meaning": "그물세공"
  },
  {
    "word": "neutral",
    "meaning": "중립의"
  },
  {
    "word": "never",
    "meaning": "결코 -아니다"
  },
  {
    "word": "nevertheless",
    "meaning": "그럼에도 불구하고"
  },
  {
    "word": "new",
    "meaning": "새로운"
  },
  {
    "word": "newspaper",
    "meaning": "신문"
  },
  {
    "word": "next",
    "meaning": "다음의"
  },
  {
    "word": "nice",
    "meaning": "니스(프랑스 남부의 항구도시)"
  },
  {
    "word": "night",
    "meaning": "밤"
  },
  {
    "word": "nightmare",
    "meaning": "악몽"
  },
  {
    "word": "no",
    "meaning": "무의"
  },
  {
    "word": "noble",
    "meaning": "고귀한"
  },
  {
    "word": "nobody",
    "meaning": "아무도 -않다 하찮은 사람"
  },
  {
    "word": "nod",
    "meaning": "끄덕이다"
  },
  {
    "word": "noise",
    "meaning": "소리"
  },
  {
    "word": "nominate",
    "meaning": "추천하다"
  },
  {
    "word": "none",
    "meaning": "아무도(조금도)-않다 조금도(결코)-않다"
  },
  {
    "word": "nonetheless",
    "meaning": "역시"
  },
  {
    "word": "nonsense",
    "meaning": "허튼 소리"
  },
  {
    "word": "noon",
    "meaning": "정오"
  },
  {
    "word": "nor",
    "meaning": "-도 또한-않다"
  },
  {
    "word": "norm",
    "meaning": "표준"
  },
  {
    "word": "normal",
    "meaning": "표준(의)"
  },
  {
    "word": "north",
    "meaning": "북, 북 쪽, 북부"
  },
  {
    "word": "nose",
    "meaning": "코"
  },
  {
    "word": "not",
    "meaning": "아니다"
  },
  {
    "word": "note",
    "meaning": "기록"
  },
  {
    "word": "nothing",
    "meaning": "아무것도 …없다"
  },
  {
    "word": "notice",
    "meaning": "통지, 통보"
  },
  {
    "word": "notion",
    "meaning": "n,관념"
  },
  {
    "word": "novel",
    "meaning": "소설"
  },
  {
    "word": "now",
    "meaning": "지금"
  },
  {
    "word": "nowadays",
    "meaning": "오늘날에는, 요즈음에는"
  },
  {
    "word": "nowhere",
    "meaning": "아무데도 …없다"
  },
  {
    "word": "nuclear",
    "meaning": "핵의, 핵을 형성하는 원자핵의"
  },
  {
    "word": "number",
    "meaning": "수"
  },
  {
    "word": "numerous",
    "meaning": "다 수의, 수많은, 셀 수 없이 많은"
  },
  {
    "word": "nun",
    "meaning": "수녀 집비둘기의 일종"
  },
  {
    "word": "nurse",
    "meaning": "유모"
  },
  {
    "word": "nut",
    "meaning": "견과"
  },
  {
    "word": "oak",
    "meaning": "참나무"
  },
  {
    "word": "obey",
    "meaning": "따르다"
  },
  {
    "word": "object",
    "meaning": "사물"
  },
  {
    "word": "objective",
    "meaning": "객관적인"
  },
  {
    "word": "oblige",
    "meaning": "(의무를)별수없이 -하게하다"
  },
  {
    "word": "observe",
    "meaning": "관찰하다"
  },
  {
    "word": "obsess",
    "meaning": "늘러붙다"
  },
  {
    "word": "obtain",
    "meaning": "얻다"
  },
  {
    "word": "obvious",
    "meaning": "명백한"
  },
  {
    "word": "occasion",
    "meaning": "경우"
  },
  {
    "word": "occupation",
    "meaning": "일직업"
  },
  {
    "word": "occupy",
    "meaning": "차지하다"
  },
  {
    "word": "occur",
    "meaning": "일어나다"
  },
  {
    "word": "ocean",
    "meaning": "대양"
  },
  {
    "word": "odd",
    "meaning": "묘한"
  },
  {
    "word": "of",
    "meaning": "출신의"
  },
  {
    "word": "off",
    "meaning": "떨어져"
  },
  {
    "word": "offend",
    "meaning": "성나게 하다"
  },
  {
    "word": "offer",
    "meaning": "권하다"
  },
  {
    "word": "office",
    "meaning": "임무"
  },
  {
    "word": "officer",
    "meaning": "공무원"
  },
  {
    "word": "official",
    "meaning": "공무원"
  },
  {
    "word": "often",
    "meaning": "자주"
  },
  {
    "word": "oil",
    "meaning": "기름"
  },
  {
    "word": "old",
    "meaning": "늙은"
  },
  {
    "word": "olive",
    "meaning": "올리브나무"
  },
  {
    "word": "on",
    "meaning": "위에"
  },
  {
    "word": "once",
    "meaning": "한번"
  },
  {
    "word": "one",
    "meaning": "하나(의)"
  },
  {
    "word": "only",
    "meaning": "유일한"
  },
  {
    "word": "open",
    "meaning": "열다"
  },
  {
    "word": "operate",
    "meaning": "움직이다"
  },
  {
    "word": "opinion",
    "meaning": "의견"
  },
  {
    "word": "opportunity",
    "meaning": "기회"
  },
  {
    "word": "oppose",
    "meaning": "반대하다"
  },
  {
    "word": "optimist",
    "meaning": "낙천가"
  },
  {
    "word": "option",
    "meaning": "선택(권의 자유)"
  },
  {
    "word": "or",
    "meaning": "혹은"
  },
  {
    "word": "oral",
    "meaning": "구두의"
  },
  {
    "word": "orbit",
    "meaning": "궤도"
  },
  {
    "word": "orchestra",
    "meaning": "관현악단"
  },
  {
    "word": "order",
    "meaning": "순서"
  },
  {
    "word": "ordinary",
    "meaning": "보통의"
  },
  {
    "word": "organ",
    "meaning": "(생물의)기관"
  },
  {
    "word": "organic",
    "meaning": "유기체의"
  },
  {
    "word": "organize",
    "meaning": "조직하다"
  },
  {
    "word": "orient",
    "meaning": "동양 동양의 동쪽으로 향하게 하다"
  },
  {
    "word": "origin",
    "meaning": "기원"
  },
  {
    "word": "other",
    "meaning": "다른 다른 것 그렇지 않고"
  },
  {
    "word": "otherwise",
    "meaning": "딴 방법으로는"
  },
  {
    "word": "ought",
    "meaning": "au해야만 하다"
  },
  {
    "word": "ounce",
    "meaning": "삵괭이"
  },
  {
    "word": "out",
    "meaning": "밖으로"
  },
  {
    "word": "outcome",
    "meaning": "결과"
  },
  {
    "word": "outline",
    "meaning": "윤곽"
  },
  {
    "word": "output",
    "meaning": "산출"
  },
  {
    "word": "outrage",
    "meaning": "불법(적인 행위)"
  },
  {
    "word": "outstanding",
    "meaning": "눈에 띄는"
  },
  {
    "word": "over",
    "meaning": "위쪽"
  },
  {
    "word": "overall",
    "meaning": "포괄(전면)적인 덧옷"
  },
  {
    "word": "overcome",
    "meaning": "이기다"
  },
  {
    "word": "overhead",
    "meaning": "머리위에 머리 위의"
  },
  {
    "word": "overlap",
    "meaning": "겹치다"
  },
  {
    "word": "overlook",
    "meaning": "내려다 보다"
  },
  {
    "word": "overnight",
    "meaning": "전날밤의"
  },
  {
    "word": "oversea",
    "meaning": "해외(로부터)의"
  },
  {
    "word": "overwhelm",
    "meaning": "압도하다"
  },
  {
    "word": "owe",
    "meaning": "지불할 의무가 있다"
  },
  {
    "word": "own",
    "meaning": "자기자신의 소유하다"
  },
  {
    "word": "pace",
    "meaning": "한걸음"
  },
  {
    "word": "pack",
    "meaning": "꾸러미"
  },
  {
    "word": "packet",
    "meaning": "다발"
  },
  {
    "word": "pad",
    "meaning": "(및에)덧대는 것"
  },
  {
    "word": "pain",
    "meaning": "고통"
  },
  {
    "word": "paint",
    "meaning": "도료"
  },
  {
    "word": "pair",
    "meaning": "한쌍"
  },
  {
    "word": "palace",
    "meaning": "궁전"
  },
  {
    "word": "pale",
    "meaning": "창백한"
  },
  {
    "word": "palm",
    "meaning": "손바닥"
  },
  {
    "word": "pan",
    "meaning": "남비 사금 등을 남비로 가려내다"
  },
  {
    "word": "panel",
    "meaning": "판벽널"
  },
  {
    "word": "panic",
    "meaning": "돌연한공포"
  },
  {
    "word": "pants",
    "meaning": "바지"
  },
  {
    "word": "paper",
    "meaning": "종이"
  },
  {
    "word": "paragraph",
    "meaning": "(문장의)절"
  },
  {
    "word": "parallel",
    "meaning": "평행의"
  },
  {
    "word": "pardon",
    "meaning": "용서하다 용서"
  },
  {
    "word": "parent",
    "meaning": "어버이"
  },
  {
    "word": "park",
    "meaning": "공원"
  },
  {
    "word": "parliament",
    "meaning": "의회"
  },
  {
    "word": "part",
    "meaning": "부분"
  },
  {
    "word": "participate",
    "meaning": "참가하다"
  },
  {
    "word": "particle",
    "meaning": "입자"
  },
  {
    "word": "particular",
    "meaning": "특수한"
  },
  {
    "word": "pass",
    "meaning": "지나가다"
  },
  {
    "word": "passage",
    "meaning": "통행, 통과"
  },
  {
    "word": "passenger",
    "meaning": "승객"
  },
  {
    "word": "passion",
    "meaning": "정열"
  },
  {
    "word": "passport",
    "meaning": "여권"
  },
  {
    "word": "past",
    "meaning": "과거"
  },
  {
    "word": "pat",
    "meaning": "톡톡 가볍게 치다"
  },
  {
    "word": "patch",
    "meaning": "깁는 헝겊"
  },
  {
    "word": "patent",
    "meaning": "전매특허권 전매특허의"
  },
  {
    "word": "path",
    "meaning": "작은 길"
  },
  {
    "word": "patient",
    "meaning": "인내심이 강한 환자"
  },
  {
    "word": "patrol",
    "meaning": "순회"
  },
  {
    "word": "pattern",
    "meaning": "모범"
  },
  {
    "word": "pause",
    "meaning": "중지"
  },
  {
    "word": "pave",
    "meaning": "(도로를)포장하다"
  },
  {
    "word": "pay",
    "meaning": "지불하다"
  },
  {
    "word": "peace",
    "meaning": "평화"
  },
  {
    "word": "peak",
    "meaning": "(뾰족한)끝"
  },
  {
    "word": "pear",
    "meaning": "서양배"
  },
  {
    "word": "peasant",
    "meaning": "농부"
  },
  {
    "word": "peel",
    "meaning": "껍질을 벗기다 벗어지다 껍질"
  },
  {
    "word": "peer",
    "meaning": "동료"
  },
  {
    "word": "penalty",
    "meaning": "벌"
  },
  {
    "word": "pencil",
    "meaning": "연필 연필로 쓰다"
  },
  {
    "word": "people",
    "meaning": "사람들"
  },
  {
    "word": "pepper",
    "meaning": "고추"
  },
  {
    "word": "per",
    "meaning": "-에 의하여"
  },
  {
    "word": "perceive",
    "meaning": "지각하다"
  },
  {
    "word": "perfect",
    "meaning": "완전한"
  },
  {
    "word": "perform",
    "meaning": "다하다"
  },
  {
    "word": "perhaps",
    "meaning": "아마"
  },
  {
    "word": "period",
    "meaning": "시간"
  },
  {
    "word": "permanent",
    "meaning": "영구의"
  },
  {
    "word": "permit",
    "meaning": "허가하다"
  },
  {
    "word": "persist",
    "meaning": "고집하다"
  },
  {
    "word": "person",
    "meaning": "사람"
  },
  {
    "word": "personality",
    "meaning": "개성"
  },
  {
    "word": "perspective",
    "meaning": "원근법의 원근 화법"
  },
  {
    "word": "persuade",
    "meaning": "설득하다"
  },
  {
    "word": "pet",
    "meaning": "애완동물"
  },
  {
    "word": "phase",
    "meaning": "국면"
  },
  {
    "word": "phenomenon",
    "meaning": "현상"
  },
  {
    "word": "philosophy",
    "meaning": "철학"
  },
  {
    "word": "photograph",
    "meaning": "사진 촬영하다"
  },
  {
    "word": "phrase",
    "meaning": "구"
  },
  {
    "word": "physical",
    "meaning": "물질의"
  },
  {
    "word": "physics",
    "meaning": "물리학"
  },
  {
    "word": "pick",
    "meaning": "따다"
  },
  {
    "word": "picnic",
    "meaning": "소풍"
  },
  {
    "word": "picture",
    "meaning": "그림"
  },
  {
    "word": "piece",
    "meaning": "한 조각"
  },
  {
    "word": "pig",
    "meaning": "돼지"
  },
  {
    "word": "pile",
    "meaning": "쌓아 올린 것"
  },
  {
    "word": "pill",
    "meaning": "알약"
  },
  {
    "word": "pin",
    "meaning": "핀 핀으로 꽂다"
  },
  {
    "word": "pinch",
    "meaning": "꼬집다"
  },
  {
    "word": "pine",
    "meaning": "소나무 수척해 지다"
  },
  {
    "word": "pink",
    "meaning": "연분홍색"
  },
  {
    "word": "pioneer",
    "meaning": "개척자"
  },
  {
    "word": "pitch",
    "meaning": "던지다"
  },
  {
    "word": "pity",
    "meaning": "불쌍히 여김"
  },
  {
    "word": "place",
    "meaning": "장소"
  },
  {
    "word": "plain",
    "meaning": "분명한"
  },
  {
    "word": "plan",
    "meaning": "계획"
  },
  {
    "word": "planet",
    "meaning": "행성"
  },
  {
    "word": "plant",
    "meaning": "실물"
  },
  {
    "word": "plate",
    "meaning": "판"
  },
  {
    "word": "platform",
    "meaning": "단"
  },
  {
    "word": "play",
    "meaning": "놀다"
  },
  {
    "word": "pleasant",
    "meaning": "기분 좋은"
  },
  {
    "word": "please",
    "meaning": "기쁘게 하다"
  },
  {
    "word": "pleasure",
    "meaning": "즐거움"
  },
  {
    "word": "plenty",
    "meaning": "많음"
  },
  {
    "word": "plot",
    "meaning": "음모"
  },
  {
    "word": "plus",
    "meaning": "더하기의 -외에"
  },
  {
    "word": "P.M.",
    "meaning": "오후"
  },
  {
    "word": "pocket",
    "meaning": "포켓"
  },
  {
    "word": "poem",
    "meaning": "시"
  },
  {
    "word": "poet",
    "meaning": "시인"
  },
  {
    "word": "point",
    "meaning": "점"
  },
  {
    "word": "poison",
    "meaning": "독"
  },
  {
    "word": "polar",
    "meaning": "남극의"
  },
  {
    "word": "pole",
    "meaning": "폴란드사람"
  },
  {
    "word": "police",
    "meaning": "경찰 경비하다"
  },
  {
    "word": "policy",
    "meaning": "정책"
  },
  {
    "word": "polish",
    "meaning": "닦다, 갈다, 윤내다"
  },
  {
    "word": "polite",
    "meaning": "공손한"
  },
  {
    "word": "politics",
    "meaning": "정치"
  },
  {
    "word": "poll",
    "meaning": "투표"
  },
  {
    "word": "pollute",
    "meaning": "-을 더럽히다"
  },
  {
    "word": "pond",
    "meaning": "못, 연못"
  },
  {
    "word": "pool",
    "meaning": "판돈"
  },
  {
    "word": "poor",
    "meaning": "가난한 부족한, 불충분한, 빈약한"
  },
  {
    "word": "pop",
    "meaning": "팝"
  },
  {
    "word": "pope",
    "meaning": "로마 교황  최고 권위자로 자처하는 사람"
  },
  {
    "word": "popular",
    "meaning": "민중 의, 대중의"
  },
  {
    "word": "population",
    "meaning": "인구"
  },
  {
    "word": "pork",
    "meaning": "돼지고기"
  },
  {
    "word": "port",
    "meaning": "항구, 항만, 상항"
  },
  {
    "word": "portion",
    "meaning": "일부, 부분"
  },
  {
    "word": "portrait",
    "meaning": "초상"
  },
  {
    "word": "pose",
    "meaning": "자세, 포즈  마음가짐  꾸민 태도"
  },
  {
    "word": "position",
    "meaning": "위치"
  },
  {
    "word": "positive",
    "meaning": "명확한, 의문의 여지가 없는, 부정할 수 없는"
  },
  {
    "word": "possess",
    "meaning": "소유하다"
  },
  {
    "word": "possible",
    "meaning": "가능한"
  },
  {
    "word": "post",
    "meaning": "기둥"
  },
  {
    "word": "poster",
    "meaning": "포스터"
  },
  {
    "word": "pot",
    "meaning": "단지"
  },
  {
    "word": "potato",
    "meaning": "감자"
  },
  {
    "word": "potential",
    "meaning": "가능한"
  },
  {
    "word": "pour",
    "meaning": "따르다"
  },
  {
    "word": "powder",
    "meaning": "가루"
  },
  {
    "word": "power",
    "meaning": "힘"
  },
  {
    "word": "practical",
    "meaning": "실제의"
  },
  {
    "word": "practice",
    "meaning": "연습"
  },
  {
    "word": "praise",
    "meaning": "칭찬"
  },
  {
    "word": "pray",
    "meaning": "빌다"
  },
  {
    "word": "preach",
    "meaning": "설교하다"
  },
  {
    "word": "precede",
    "meaning": "-에 앞서다"
  },
  {
    "word": "precious",
    "meaning": "비싼"
  },
  {
    "word": "precise",
    "meaning": "정확한"
  },
  {
    "word": "predator",
    "meaning": "약탈자"
  },
  {
    "word": "predict",
    "meaning": "예언하다, 예보하다 예언하다"
  },
  {
    "word": "prefer",
    "meaning": "오히려 …을 좋아하다,"
  },
  {
    "word": "pregnant",
    "meaning": "임신한 충만한"
  },
  {
    "word": "prejudice",
    "meaning": "편견, 선입관"
  },
  {
    "word": "premier",
    "meaning": "국무 총리, 수상"
  },
  {
    "word": "premium",
    "meaning": "할증금,  액면 초과액, 프리미엄"
  },
  {
    "word": "prepare",
    "meaning": "준비하 다, 마련하다, 채비를 갖추다"
  },
  {
    "word": "prescribe",
    "meaning": "명령하다, 지령하다"
  },
  {
    "word": "presence",
    "meaning": "존재, 현존, 실재  출석, 임석, 참석"
  },
  {
    "word": "present",
    "meaning": "있는, 존재하는"
  },
  {
    "word": "preserve",
    "meaning": "보호하다, 지키다"
  },
  {
    "word": "president",
    "meaning": "대통령 회장"
  },
  {
    "word": "press",
    "meaning": "강제로 모집하다"
  },
  {
    "word": "presume",
    "meaning": "가정하다"
  },
  {
    "word": "pretend",
    "meaning": "핑계삼다"
  },
  {
    "word": "pretty",
    "meaning": "예쁜, 귀여운, 참 한, 조촐한"
  },
  {
    "word": "prevail",
    "meaning": "이기다, 극복하다, 압도하다 우세하다, 보급되다"
  },
  {
    "word": "prevent",
    "meaning": "막다, 방해하다"
  },
  {
    "word": "previous",
    "meaning": "앞의, 이전의"
  },
  {
    "word": "prey",
    "meaning": "먹이"
  },
  {
    "word": "price",
    "meaning": "값, 가격, 대가, 정가"
  },
  {
    "word": "pride",
    "meaning": "자존심"
  },
  {
    "word": "priest",
    "meaning": "성직자"
  },
  {
    "word": "primary",
    "meaning": "첫째의, 제1위의, 수위의 초등의, 초보의"
  },
  {
    "word": "prime",
    "meaning": "수위의, 최초의, 원시적인"
  },
  {
    "word": "primitive",
    "meaning": "원시의, 초기의"
  },
  {
    "word": "prince",
    "meaning": "왕자, 태자, 세자, 대군"
  },
  {
    "word": "principal",
    "meaning": "주요한, 주된, 제일의, 앞장서는"
  },
  {
    "word": "principle",
    "meaning": "원리, 원칙, 법칙, 공리"
  },
  {
    "word": "print",
    "meaning": "인쇄하다, 프린트하다"
  },
  {
    "word": "prior",
    "meaning": "이전의, 앞의"
  },
  {
    "word": "prison",
    "meaning": "교도소"
  },
  {
    "word": "privacy",
    "meaning": "남의 눈을 피함, 은거, 은둔, 은퇴 생활 사생활"
  },
  {
    "word": "private",
    "meaning": "사적인, 사사로운, 개인에 속한"
  },
  {
    "word": "privilege",
    "meaning": "특권, 특전, 특별 취급"
  },
  {
    "word": "prize",
    "meaning": "상, 포상, 우등상, 선행상"
  },
  {
    "word": "probably",
    "meaning": "아마, 십중팔구"
  },
  {
    "word": "problem",
    "meaning": "문제"
  },
  {
    "word": "procedure",
    "meaning": "진행, 경과 절차"
  },
  {
    "word": "proceed",
    "meaning": "나아가다, 가다"
  },
  {
    "word": "process",
    "meaning": "진행, 작용"
  },
  {
    "word": "produce",
    "meaning": "생산하다, 산출하다, 생기게 하다,"
  },
  {
    "word": "profession",
    "meaning": "직업 공언, 선언, 고백"
  },
  {
    "word": "professor",
    "meaning": "교수"
  },
  {
    "word": "profile",
    "meaning": "옆 얼굴, 반면상 인물 소개  태도, 자세"
  },
  {
    "word": "profit",
    "meaning": "이익, 이득, 벌이"
  },
  {
    "word": "profound",
    "meaning": "깊은, 심원한"
  },
  {
    "word": "progress",
    "meaning": "진행, 전진, 진척  진보, 향상, 발달, 발전"
  },
  {
    "word": "prohibit",
    "meaning": "금하다, 금지하다"
  },
  {
    "word": "prominent",
    "meaning": "두드러진, 돌기한, 양각된 현저한, 탁월한, 중요한"
  },
  {
    "word": "promise",
    "meaning": "약속, 서약, 계약"
  },
  {
    "word": "promote",
    "meaning": "승진시키다 진행시키다,"
  },
  {
    "word": "prompt",
    "meaning": "재빠른, 신속한, 즉시 …하는"
  },
  {
    "word": "pronounce",
    "meaning": "발음하다, 음독하다"
  },
  {
    "word": "proof",
    "meaning": "증명"
  },
  {
    "word": "proper",
    "meaning": "고유의, 독특한, 본연의,  특유한"
  },
  {
    "word": "property",
    "meaning": "재산, 자산"
  },
  {
    "word": "proportion",
    "meaning": "비율, 비 균형, 조화"
  },
  {
    "word": "propose",
    "meaning": "제의하다, 제출하다 추천하다, 지명하다"
  },
  {
    "word": "prospect",
    "meaning": "전망, 조망, 경치"
  },
  {
    "word": "prosper",
    "meaning": "번영하다"
  },
  {
    "word": "protect",
    "meaning": "보호하다, 막다, 지키다, 비호하다"
  },
  {
    "word": "protein",
    "meaning": "IG1s"
  },
  {
    "word": "protest",
    "meaning": "단언하다"
  },
  {
    "word": "proud",
    "meaning": "뽐내는, 자랑하는 자긍하는, 영광 으로 여기는"
  },
  {
    "word": "prove",
    "meaning": "시험하다, 실험하다, 경험하다, 시험해 보다"
  },
  {
    "word": "provide",
    "meaning": "준비하다, 미리 …에 대비하다  규정하다"
  },
  {
    "word": "province",
    "meaning": "주, 성, 도  범위, 영역, 분야"
  },
  {
    "word": "provoke",
    "meaning": "화나게 하다"
  },
  {
    "word": "psychology",
    "meaning": "심리학"
  },
  {
    "word": "pub",
    "meaning": "펍"
  },
  {
    "word": "public",
    "meaning": "심리, 심리 상태"
  },
  {
    "word": "publish",
    "meaning": "발표 하다, 널리 알리다"
  },
  {
    "word": "pull",
    "meaning": "끌다, 당기다, 끌어 당기다, 잡아 끌다"
  },
  {
    "word": "pump",
    "meaning": "펌프스   댄스용 구두"
  },
  {
    "word": "punch",
    "meaning": "주먹질, 펀치  힘, 활기"
  },
  {
    "word": "punish",
    "meaning": "벌하다, 응징하다, 처형하다"
  },
  {
    "word": "pupil",
    "meaning": "흔히 국민학교 중학교 학생"
  },
  {
    "word": "puppy",
    "meaning": "강아지"
  },
  {
    "word": "purchase",
    "meaning": "사다, 구입하다"
  },
  {
    "word": "pure",
    "meaning": "순수한  깨끗한, 순전한, 결백한"
  },
  {
    "word": "purple",
    "meaning": "자줏빛의  새빨간  제왕의"
  },
  {
    "word": "purpose",
    "meaning": "목적"
  },
  {
    "word": "pursue",
    "meaning": "쫓다, 추적하다, 몰다"
  },
  {
    "word": "push",
    "meaning": "밀다, 밀치다, 밀어서 움직 이다, 밀어 내다"
  },
  {
    "word": "put",
    "meaning": "놓다, 두다"
  },
  {
    "word": "puzzle",
    "meaning": "당황, 혼란 괴롭히는 사람,  어려운 문제"
  },
  {
    "word": "qualify",
    "meaning": "자격을 부여하다"
  },
  {
    "word": "quality",
    "meaning": "질"
  },
  {
    "word": "quantity",
    "meaning": "양"
  },
  {
    "word": "quarter",
    "meaning": "1"
  },
  {
    "word": "queen",
    "meaning": "여왕"
  },
  {
    "word": "question",
    "meaning": "물음, 질문, 질의"
  },
  {
    "word": "questionnaire",
    "meaning": "질문표"
  },
  {
    "word": "quick",
    "meaning": "빠른"
  },
  {
    "word": "quiet",
    "meaning": "조용한"
  },
  {
    "word": "quit",
    "meaning": "(의무,책임을)벗어난 떠나다"
  },
  {
    "word": "quite",
    "meaning": "아주"
  },
  {
    "word": "quote",
    "meaning": "인용하다"
  },
  {
    "word": "rabbit",
    "meaning": "집토끼"
  },
  {
    "word": "race",
    "meaning": "인종"
  },
  {
    "word": "racial",
    "meaning": "인종(상)의"
  },
  {
    "word": "rage",
    "meaning": "격노"
  },
  {
    "word": "rail",
    "meaning": "가로장"
  },
  {
    "word": "rain",
    "meaning": "비"
  },
  {
    "word": "rainbow",
    "meaning": "무지개"
  },
  {
    "word": "raise",
    "meaning": "올리다"
  },
  {
    "word": "rally",
    "meaning": "규합하다"
  },
  {
    "word": "random",
    "meaning": "닥치는 대로의"
  },
  {
    "word": "range",
    "meaning": "줄"
  },
  {
    "word": "rank",
    "meaning": "열"
  },
  {
    "word": "rapid",
    "meaning": "빠른"
  },
  {
    "word": "rare",
    "meaning": "희귀한"
  },
  {
    "word": "rat",
    "meaning": "쥐"
  },
  {
    "word": "rate",
    "meaning": "율"
  },
  {
    "word": "rather",
    "meaning": "오히려"
  },
  {
    "word": "rational",
    "meaning": "합리적인"
  },
  {
    "word": "raw",
    "meaning": "날것의"
  },
  {
    "word": "reach",
    "meaning": "도착하다"
  },
  {
    "word": "react",
    "meaning": "반응을 나타내다"
  },
  {
    "word": "read",
    "meaning": "읽다"
  },
  {
    "word": "ready",
    "meaning": "준비가 된"
  },
  {
    "word": "real",
    "meaning": "실재하는"
  },
  {
    "word": "realize",
    "meaning": "깨닫다"
  },
  {
    "word": "rear",
    "meaning": "뒤"
  },
  {
    "word": "reason",
    "meaning": "이성"
  },
  {
    "word": "rebel",
    "meaning": "반역자"
  },
  {
    "word": "recall",
    "meaning": "되부르다"
  },
  {
    "word": "receipt",
    "meaning": "수령"
  },
  {
    "word": "receive",
    "meaning": "받다"
  },
  {
    "word": "recent",
    "meaning": "최근의"
  },
  {
    "word": "reception",
    "meaning": "받음"
  },
  {
    "word": "recipe",
    "meaning": "조리법"
  },
  {
    "word": "recognize",
    "meaning": "인정하다"
  },
  {
    "word": "recommend",
    "meaning": "추천하다"
  },
  {
    "word": "record",
    "meaning": "기록하다"
  },
  {
    "word": "recover",
    "meaning": "되찾다"
  },
  {
    "word": "recruit",
    "meaning": "신병"
  },
  {
    "word": "recycle",
    "meaning": "재생 이용하다"
  },
  {
    "word": "red",
    "meaning": "붉은"
  },
  {
    "word": "reduce",
    "meaning": "줄이다"
  },
  {
    "word": "refer",
    "meaning": "조회시키다"
  },
  {
    "word": "refine",
    "meaning": "정제정련하다"
  },
  {
    "word": "reflect",
    "meaning": "반사하다"
  },
  {
    "word": "reform",
    "meaning": "개정(개혁)하다"
  },
  {
    "word": "refrigerator",
    "meaning": "냉장고"
  },
  {
    "word": "refuse",
    "meaning": "거절하다"
  },
  {
    "word": "regard",
    "meaning": "주목해서 보다"
  },
  {
    "word": "region",
    "meaning": "지방"
  },
  {
    "word": "register",
    "meaning": "기록"
  },
  {
    "word": "regret",
    "meaning": "유감"
  },
  {
    "word": "regular",
    "meaning": "규칙적인"
  },
  {
    "word": "regulate",
    "meaning": "규정하다"
  },
  {
    "word": "reinforce",
    "meaning": "보강하다"
  },
  {
    "word": "reject",
    "meaning": "거절하다"
  },
  {
    "word": "relate",
    "meaning": "이야기하다"
  },
  {
    "word": "relative",
    "meaning": "친척"
  },
  {
    "word": "relax",
    "meaning": "늦추다"
  },
  {
    "word": "release",
    "meaning": "도와주다"
  },
  {
    "word": "relevant",
    "meaning": "관련된"
  },
  {
    "word": "relieve",
    "meaning": "구출하다"
  },
  {
    "word": "religion",
    "meaning": "종교"
  },
  {
    "word": "reluctant",
    "meaning": "마음이 내키지 않는"
  },
  {
    "word": "rely",
    "meaning": "믿다"
  },
  {
    "word": "remain",
    "meaning": "남다"
  },
  {
    "word": "remark",
    "meaning": "깨닫다"
  },
  {
    "word": "remedy",
    "meaning": "치료"
  },
  {
    "word": "remember",
    "meaning": "기억하고 있다"
  },
  {
    "word": "remind",
    "meaning": "생각나게 하다"
  },
  {
    "word": "remote",
    "meaning": "먼"
  },
  {
    "word": "remove",
    "meaning": "옮기다"
  },
  {
    "word": "rent",
    "meaning": "지대"
  },
  {
    "word": "repair",
    "meaning": "수선(수정)하다"
  },
  {
    "word": "repeat",
    "meaning": "반복하다"
  },
  {
    "word": "replace",
    "meaning": "되돌려 놓다"
  },
  {
    "word": "reply",
    "meaning": "대답하다"
  },
  {
    "word": "report",
    "meaning": "보고"
  },
  {
    "word": "represent",
    "meaning": "표현(묘사)하다"
  },
  {
    "word": "republic",
    "meaning": "공화국"
  },
  {
    "word": "reputation",
    "meaning": "평판"
  },
  {
    "word": "request",
    "meaning": "부탁하다"
  },
  {
    "word": "require",
    "meaning": "요구하다"
  },
  {
    "word": "rescue",
    "meaning": "구하다"
  },
  {
    "word": "research",
    "meaning": "연구"
  },
  {
    "word": "resemble",
    "meaning": "닮다"
  },
  {
    "word": "reserve",
    "meaning": "따로 두다"
  },
  {
    "word": "reside",
    "meaning": "거주하다"
  },
  {
    "word": "resign",
    "meaning": "사임하다"
  },
  {
    "word": "resist",
    "meaning": "저항하다"
  },
  {
    "word": "resolve",
    "meaning": "분해하다"
  },
  {
    "word": "resort",
    "meaning": "(자주)가다"
  },
  {
    "word": "resource",
    "meaning": "자원"
  },
  {
    "word": "respect",
    "meaning": "존경하다"
  },
  {
    "word": "respective",
    "meaning": "각각의"
  },
  {
    "word": "respond",
    "meaning": "대답하다"
  },
  {
    "word": "responsible",
    "meaning": "책임을 져야할"
  },
  {
    "word": "rest",
    "meaning": "휴식"
  },
  {
    "word": "restaurant",
    "meaning": "요리점"
  },
  {
    "word": "restore",
    "meaning": "반환하다"
  },
  {
    "word": "restrain",
    "meaning": "제지하다"
  },
  {
    "word": "restrict",
    "meaning": "제한하다"
  },
  {
    "word": "restroom",
    "meaning": "화장실"
  },
  {
    "word": "result",
    "meaning": "결과"
  },
  {
    "word": "resume",
    "meaning": "다시 잡다"
  },
  {
    "word": "retail",
    "meaning": "소매"
  },
  {
    "word": "retain",
    "meaning": "보유하다"
  },
  {
    "word": "retire",
    "meaning": "퇴직하다"
  },
  {
    "word": "retreat",
    "meaning": "후퇴"
  },
  {
    "word": "return",
    "meaning": "돌아가다"
  },
  {
    "word": "reveal",
    "meaning": "나타내다"
  },
  {
    "word": "revenge",
    "meaning": "복수"
  },
  {
    "word": "reverse",
    "meaning": "역"
  },
  {
    "word": "review",
    "meaning": "재조사"
  },
  {
    "word": "revise",
    "meaning": "교정하다"
  },
  {
    "word": "revive",
    "meaning": "소생하다"
  },
  {
    "word": "revolution",
    "meaning": "혁명"
  },
  {
    "word": "reward",
    "meaning": "보수"
  },
  {
    "word": "rhythm",
    "meaning": "율동"
  },
  {
    "word": "rice",
    "meaning": "쌀"
  },
  {
    "word": "rich",
    "meaning": "부자인"
  },
  {
    "word": "rid",
    "meaning": "면하게하다"
  },
  {
    "word": "ride",
    "meaning": "타다"
  },
  {
    "word": "ridiculous",
    "meaning": "어리석은"
  },
  {
    "word": "right",
    "meaning": "올바른"
  },
  {
    "word": "ring",
    "meaning": "고리"
  },
  {
    "word": "riot",
    "meaning": "폭동, 소요, 소동   야단법석, 다채로움,"
  },
  {
    "word": "rise",
    "meaning": "올리다"
  },
  {
    "word": "risk",
    "meaning": "위험 걸다"
  },
  {
    "word": "rival",
    "meaning": "경쟁자 경쟁하는 경쟁하다"
  },
  {
    "word": "river",
    "meaning": "강"
  },
  {
    "word": "road",
    "meaning": "길"
  },
  {
    "word": "roar",
    "meaning": "으르렁거리다 으르렁소리"
  },
  {
    "word": "roast",
    "meaning": "불에 쬐어 굽다 불고기 구운"
  },
  {
    "word": "rob",
    "meaning": "강탈하다, 약탈하다, 빼앗다"
  },
  {
    "word": "rock",
    "meaning": "바위"
  },
  {
    "word": "rod",
    "meaning": "막대"
  },
  {
    "word": "role",
    "meaning": "(배우의)역"
  },
  {
    "word": "roll",
    "meaning": "구르다"
  },
  {
    "word": "romantic",
    "meaning": "전기소설적인"
  },
  {
    "word": "roof",
    "meaning": "지붕"
  },
  {
    "word": "room",
    "meaning": "방"
  },
  {
    "word": "root",
    "meaning": "뿌리"
  },
  {
    "word": "rope",
    "meaning": "새끼"
  },
  {
    "word": "rot",
    "meaning": "썩다"
  },
  {
    "word": "rough",
    "meaning": "거친"
  },
  {
    "word": "round",
    "meaning": "둥근 원 돌아서"
  },
  {
    "word": "route",
    "meaning": "길"
  },
  {
    "word": "routine",
    "meaning": "정해진 일"
  },
  {
    "word": "row",
    "meaning": "줄"
  },
  {
    "word": "royal",
    "meaning": "왕의"
  },
  {
    "word": "rub",
    "meaning": "마찰하다"
  },
  {
    "word": "rubber",
    "meaning": "맛사지사"
  },
  {
    "word": "rude",
    "meaning": "버릇없는"
  },
  {
    "word": "ruin",
    "meaning": "파멸"
  },
  {
    "word": "rule",
    "meaning": "규칙"
  },
  {
    "word": "rumor",
    "meaning": "소문"
  },
  {
    "word": "run",
    "meaning": "달리다"
  },
  {
    "word": "rural",
    "meaning": "시골의"
  },
  {
    "word": "rush",
    "meaning": "돌진하다"
  },
  {
    "word": "sack",
    "meaning": "마대"
  },
  {
    "word": "sacred",
    "meaning": "신성한"
  },
  {
    "word": "sacrifice",
    "meaning": "희생"
  },
  {
    "word": "sad",
    "meaning": "슬픈"
  },
  {
    "word": "safe",
    "meaning": "안전한"
  },
  {
    "word": "sail",
    "meaning": "돛"
  },
  {
    "word": "salary",
    "meaning": "봉급 봉급을 주다"
  },
  {
    "word": "sale",
    "meaning": "판매"
  },
  {
    "word": "salon",
    "meaning": "객실"
  },
  {
    "word": "salt",
    "meaning": "소금"
  },
  {
    "word": "same",
    "meaning": "같은"
  },
  {
    "word": "sand",
    "meaning": "모래사장"
  },
  {
    "word": "satellite",
    "meaning": "위성"
  },
  {
    "word": "satisfy",
    "meaning": "만족시키다"
  },
  {
    "word": "save",
    "meaning": "위험에서 구하다"
  },
  {
    "word": "say",
    "meaning": "말하다"
  },
  {
    "word": "scale",
    "meaning": "비늘(모양의 것)"
  },
  {
    "word": "scan",
    "meaning": "시의 운율을살피다"
  },
  {
    "word": "scandal",
    "meaning": "추문"
  },
  {
    "word": "scarce",
    "meaning": "부족한"
  },
  {
    "word": "scare",
    "meaning": "위협하다"
  },
  {
    "word": "scatter",
    "meaning": "뿔뿔이 흩어 버리다"
  },
  {
    "word": "scene",
    "meaning": "장면"
  },
  {
    "word": "scheme",
    "meaning": "계획"
  },
  {
    "word": "scholar",
    "meaning": "학자"
  },
  {
    "word": "school",
    "meaning": "학교"
  },
  {
    "word": "science",
    "meaning": "과학"
  },
  {
    "word": "scissors",
    "meaning": "가위"
  },
  {
    "word": "scold",
    "meaning": "꾸짖다 잔소리 심한 사람"
  },
  {
    "word": "scope",
    "meaning": "범위"
  },
  {
    "word": "score",
    "meaning": "득점"
  },
  {
    "word": "scramble",
    "meaning": "기다"
  },
  {
    "word": "scratch",
    "meaning": "할퀴다, 할퀴어 상처 를 내다  긁다"
  },
  {
    "word": "scream",
    "meaning": "비명을 지르다"
  },
  {
    "word": "screen",
    "meaning": "병풍"
  },
  {
    "word": "screw",
    "meaning": "나사"
  },
  {
    "word": "scrub",
    "meaning": "(관목의)숲"
  },
  {
    "word": "sculpture",
    "meaning": "조각 조각하다"
  },
  {
    "word": "sea",
    "meaning": "바다"
  },
  {
    "word": "seal",
    "meaning": "인장"
  },
  {
    "word": "search",
    "meaning": "찾다"
  },
  {
    "word": "season",
    "meaning": "계절"
  },
  {
    "word": "seat",
    "meaning": "좌석"
  },
  {
    "word": "secret",
    "meaning": "비밀의"
  },
  {
    "word": "secretary",
    "meaning": "비서"
  },
  {
    "word": "sector",
    "meaning": "부채꼴"
  },
  {
    "word": "secure",
    "meaning": "안전한"
  },
  {
    "word": "see",
    "meaning": "보다"
  },
  {
    "word": "seed",
    "meaning": "씨앗"
  },
  {
    "word": "seek",
    "meaning": "찾다"
  },
  {
    "word": "seem",
    "meaning": "-으로 보이다"
  },
  {
    "word": "seize",
    "meaning": "붙잡다"
  },
  {
    "word": "select",
    "meaning": "고르다"
  },
  {
    "word": "self",
    "meaning": "자기"
  },
  {
    "word": "sell",
    "meaning": "팔다"
  },
  {
    "word": "send",
    "meaning": "보내다"
  },
  {
    "word": "senior",
    "meaning": "연상의"
  },
  {
    "word": "sensation",
    "meaning": "감각"
  },
  {
    "word": "sense",
    "meaning": "감각"
  },
  {
    "word": "sensible",
    "meaning": "분별있는"
  },
  {
    "word": "sentence",
    "meaning": "문장"
  },
  {
    "word": "sentiment",
    "meaning": "정서"
  },
  {
    "word": "separate",
    "meaning": "분리된"
  },
  {
    "word": "sequence",
    "meaning": "연속"
  },
  {
    "word": "series",
    "meaning": "연속"
  },
  {
    "word": "serious",
    "meaning": "진지한"
  },
  {
    "word": "serve",
    "meaning": "섬기다"
  },
  {
    "word": "session",
    "meaning": "개회"
  },
  {
    "word": "settle",
    "meaning": "등받이가 높은 긴 의자 놓다"
  },
  {
    "word": "several",
    "meaning": "수개의"
  },
  {
    "word": "severe",
    "meaning": "호된"
  },
  {
    "word": "sew",
    "meaning": "꿰매다"
  },
  {
    "word": "sex",
    "meaning": "성"
  },
  {
    "word": "shade",
    "meaning": "그늘"
  },
  {
    "word": "shadow",
    "meaning": "그림자"
  },
  {
    "word": "shake",
    "meaning": "흔들어 움직이다"
  },
  {
    "word": "shall",
    "meaning": "au-하겠다"
  },
  {
    "word": "shallow",
    "meaning": "얕은 얕은 곳 얕아지다"
  },
  {
    "word": "shame",
    "meaning": "부끄럼"
  },
  {
    "word": "shape",
    "meaning": "모양"
  },
  {
    "word": "share",
    "meaning": "몫"
  },
  {
    "word": "sharp",
    "meaning": "날카로운"
  },
  {
    "word": "shave",
    "meaning": "깎다"
  },
  {
    "word": "she",
    "meaning": "그녀는"
  },
  {
    "word": "sheep",
    "meaning": "양"
  },
  {
    "word": "sheet",
    "meaning": "깔천"
  },
  {
    "word": "shelf",
    "meaning": "선반"
  },
  {
    "word": "shell",
    "meaning": "겉껍질"
  },
  {
    "word": "shelter",
    "meaning": "피난처"
  },
  {
    "word": "shield",
    "meaning": "방패"
  },
  {
    "word": "shift",
    "meaning": "옮기다"
  },
  {
    "word": "shine",
    "meaning": "빛나다"
  },
  {
    "word": "ship",
    "meaning": "배"
  },
  {
    "word": "shock",
    "meaning": "격돌"
  },
  {
    "word": "shoe",
    "meaning": "구두"
  },
  {
    "word": "shoot",
    "meaning": "쏘다"
  },
  {
    "word": "shop",
    "meaning": "상점"
  },
  {
    "word": "shore",
    "meaning": "물가"
  },
  {
    "word": "short",
    "meaning": "짧은"
  },
  {
    "word": "should",
    "meaning": "aushall의 과거"
  },
  {
    "word": "shoulder",
    "meaning": "어깨"
  },
  {
    "word": "shout",
    "meaning": "외치다"
  },
  {
    "word": "show",
    "meaning": "보이다"
  },
  {
    "word": "shower",
    "meaning": "소나기 빗발치듯 퍼붓다(쏟다)"
  },
  {
    "word": "shrink",
    "meaning": "줄어들다"
  },
  {
    "word": "shut",
    "meaning": "닫다"
  },
  {
    "word": "shy",
    "meaning": "수줍은"
  },
  {
    "word": "sick",
    "meaning": "병난"
  },
  {
    "word": "side",
    "meaning": "쪽"
  },
  {
    "word": "sigh",
    "meaning": "한숨"
  },
  {
    "word": "sight",
    "meaning": "광경"
  },
  {
    "word": "sign",
    "meaning": "부호"
  },
  {
    "word": "significant",
    "meaning": "중요한"
  },
  {
    "word": "silent",
    "meaning": "조용한"
  },
  {
    "word": "silk",
    "meaning": "비단"
  },
  {
    "word": "silly",
    "meaning": "어리석은 바보"
  },
  {
    "word": "silver",
    "meaning": "은"
  },
  {
    "word": "similar",
    "meaning": "유사한"
  },
  {
    "word": "simple",
    "meaning": "단일의"
  },
  {
    "word": "simulate",
    "meaning": "흉내내다"
  },
  {
    "word": "simultaneous",
    "meaning": "동시에 일어나는(존재하는)"
  },
  {
    "word": "sin",
    "meaning": "사인"
  },
  {
    "word": "since",
    "meaning": "-이래"
  },
  {
    "word": "sing",
    "meaning": "노래하다"
  },
  {
    "word": "single",
    "meaning": "단 하나의"
  },
  {
    "word": "sink",
    "meaning": "가라앉다"
  },
  {
    "word": "sister",
    "meaning": "여자형제"
  },
  {
    "word": "sit",
    "meaning": "앉다"
  },
  {
    "word": "site",
    "meaning": "부지"
  },
  {
    "word": "situation",
    "meaning": "장소"
  },
  {
    "word": "size",
    "meaning": "크기"
  },
  {
    "word": "skill",
    "meaning": "숙련"
  },
  {
    "word": "skin",
    "meaning": "피부"
  },
  {
    "word": "skip",
    "meaning": "도약"
  },
  {
    "word": "skirt",
    "meaning": "스커어트"
  },
  {
    "word": "sky",
    "meaning": "하늘"
  },
  {
    "word": "slaughter",
    "meaning": "도살"
  },
  {
    "word": "slave",
    "meaning": "노예 노예처럼 일하다"
  },
  {
    "word": "sleep",
    "meaning": "잠자다"
  },
  {
    "word": "slice",
    "meaning": "얇은조각"
  },
  {
    "word": "slide",
    "meaning": "미끄러지다"
  },
  {
    "word": "slight",
    "meaning": "약간의"
  },
  {
    "word": "slim",
    "meaning": "호리호리한"
  },
  {
    "word": "slip",
    "meaning": "(때가)어느덧 지나가다"
  },
  {
    "word": "slope",
    "meaning": "비탈"
  },
  {
    "word": "slow",
    "meaning": "느린"
  },
  {
    "word": "small",
    "meaning": "작은 작은 부분 적게"
  },
  {
    "word": "smart",
    "meaning": "재치있는"
  },
  {
    "word": "smash",
    "meaning": "박살내다"
  },
  {
    "word": "smell",
    "meaning": "냄새"
  },
  {
    "word": "smile",
    "meaning": "미소짓다 미소"
  },
  {
    "word": "smoke",
    "meaning": "연기"
  },
  {
    "word": "smooth",
    "meaning": "매끄러운"
  },
  {
    "word": "snake",
    "meaning": "뱀"
  },
  {
    "word": "snap",
    "meaning": "덥석 물다"
  },
  {
    "word": "sneak",
    "meaning": "몰래 움직이다"
  },
  {
    "word": "sniff",
    "meaning": "코를 킁킁거리다"
  },
  {
    "word": "snow",
    "meaning": "눈 눈이 내리다"
  },
  {
    "word": "so",
    "meaning": "그와 같이"
  },
  {
    "word": "soak",
    "meaning": "담그다"
  },
  {
    "word": "soap",
    "meaning": "비누 비누로 씻다"
  },
  {
    "word": "soccer",
    "meaning": "축구"
  },
  {
    "word": "social",
    "meaning": "사회의"
  },
  {
    "word": "society",
    "meaning": "사회"
  },
  {
    "word": "sociology",
    "meaning": "사회학"
  },
  {
    "word": "sock",
    "meaning": "짧은 양말"
  },
  {
    "word": "soft",
    "meaning": "부드러운"
  },
  {
    "word": "software",
    "meaning": "소프트웨어"
  },
  {
    "word": "soil",
    "meaning": "흙"
  },
  {
    "word": "soldier",
    "meaning": "군인"
  },
  {
    "word": "sole",
    "meaning": "유일한 발바닥"
  },
  {
    "word": "solid",
    "meaning": "고체의"
  },
  {
    "word": "solo",
    "meaning": "독주"
  },
  {
    "word": "solve",
    "meaning": "해결하다"
  },
  {
    "word": "some",
    "meaning": "얼만가의"
  },
  {
    "word": "somewhat",
    "meaning": "약간"
  },
  {
    "word": "son",
    "meaning": "아들"
  },
  {
    "word": "song",
    "meaning": "노래"
  },
  {
    "word": "soon",
    "meaning": "얼마 안 가서"
  },
  {
    "word": "sophisticated",
    "meaning": "물정에 닳고 닳은"
  },
  {
    "word": "sore",
    "meaning": "슬픈"
  },
  {
    "word": "sorry",
    "meaning": "가엾은"
  },
  {
    "word": "sort",
    "meaning": "종류"
  },
  {
    "word": "soul",
    "meaning": "혼"
  },
  {
    "word": "sound",
    "meaning": "소리"
  },
  {
    "word": "sour",
    "meaning": "시큼한 시어지다 시큼한 것"
  },
  {
    "word": "source",
    "meaning": "원천"
  },
  {
    "word": "south",
    "meaning": "남쪽 남쪽의 남으로"
  },
  {
    "word": "space",
    "meaning": "공간"
  },
  {
    "word": "span",
    "meaning": "한 뼘"
  },
  {
    "word": "spare",
    "meaning": "여분의"
  },
  {
    "word": "spark",
    "meaning": "불꽃"
  },
  {
    "word": "speak",
    "meaning": "이야기하다"
  },
  {
    "word": "special",
    "meaning": "특별한"
  },
  {
    "word": "species",
    "meaning": "종"
  },
  {
    "word": "specific",
    "meaning": "특정한"
  },
  {
    "word": "spectacle",
    "meaning": "광경"
  },
  {
    "word": "spectrum",
    "meaning": "스펙트럼"
  },
  {
    "word": "speech",
    "meaning": "연설"
  },
  {
    "word": "speed",
    "meaning": "속도"
  },
  {
    "word": "spell",
    "meaning": "철자하다"
  },
  {
    "word": "spend",
    "meaning": "소비하다"
  },
  {
    "word": "sphere",
    "meaning": "구"
  },
  {
    "word": "spill",
    "meaning": "엎지르다"
  },
  {
    "word": "spin",
    "meaning": "잣다"
  },
  {
    "word": "spirit",
    "meaning": "정신"
  },
  {
    "word": "spit",
    "meaning": "침을 뱉다"
  },
  {
    "word": "spite",
    "meaning": "악의"
  },
  {
    "word": "splash",
    "meaning": "튀기다"
  },
  {
    "word": "split",
    "meaning": "쪼개다"
  },
  {
    "word": "spoil",
    "meaning": "망쳐놓다"
  },
  {
    "word": "spoon",
    "meaning": "숟가락"
  },
  {
    "word": "spot",
    "meaning": "장소"
  },
  {
    "word": "spouse",
    "meaning": "배우자"
  },
  {
    "word": "spread",
    "meaning": "펴다"
  },
  {
    "word": "square",
    "meaning": "정사각형의"
  },
  {
    "word": "squeeze",
    "meaning": "압착하다"
  },
  {
    "word": "stable",
    "meaning": "안정된"
  },
  {
    "word": "stack",
    "meaning": "낟가리"
  },
  {
    "word": "stage",
    "meaning": "무대"
  },
  {
    "word": "stain",
    "meaning": "더럽히다"
  },
  {
    "word": "stairs",
    "meaning": "계단"
  },
  {
    "word": "stamp",
    "meaning": "도장"
  },
  {
    "word": "stand",
    "meaning": "서다"
  },
  {
    "word": "standard",
    "meaning": "표준"
  },
  {
    "word": "stare",
    "meaning": "응시하다"
  },
  {
    "word": "start",
    "meaning": "시작하다"
  },
  {
    "word": "starve",
    "meaning": "굶어 죽다"
  },
  {
    "word": "state",
    "meaning": "상태"
  },
  {
    "word": "station",
    "meaning": "역"
  },
  {
    "word": "statistic",
    "meaning": "통계의 통계량"
  },
  {
    "word": "statue",
    "meaning": "조상"
  },
  {
    "word": "status",
    "meaning": "신분"
  },
  {
    "word": "stay",
    "meaning": "머무르다"
  },
  {
    "word": "steady",
    "meaning": "확고한"
  },
  {
    "word": "steal",
    "meaning": "훔치다"
  },
  {
    "word": "steam",
    "meaning": "증기"
  },
  {
    "word": "steel",
    "meaning": "강철"
  },
  {
    "word": "steep",
    "meaning": "가파른 -에 담그다 잠기다 담그기"
  },
  {
    "word": "stem",
    "meaning": "줄기"
  },
  {
    "word": "step",
    "meaning": "걷다"
  },
  {
    "word": "stick",
    "meaning": "나무토막"
  },
  {
    "word": "stiff",
    "meaning": "굳은"
  },
  {
    "word": "still",
    "meaning": "소리가 없는 아직(도)"
  },
  {
    "word": "stimulate",
    "meaning": "자극하다"
  },
  {
    "word": "stir",
    "meaning": "휘젓다"
  },
  {
    "word": "stitch",
    "meaning": "한 바늘"
  },
  {
    "word": "stock",
    "meaning": "줄기"
  },
  {
    "word": "stomach",
    "meaning": "위"
  },
  {
    "word": "stone",
    "meaning": "돌"
  },
  {
    "word": "stop",
    "meaning": "멈추다"
  },
  {
    "word": "store",
    "meaning": "가게"
  },
  {
    "word": "storm",
    "meaning": "폭풍"
  },
  {
    "word": "story",
    "meaning": "층"
  },
  {
    "word": "stove",
    "meaning": "stave의 과거(분사)"
  },
  {
    "word": "straight",
    "meaning": "곧은"
  },
  {
    "word": "strain",
    "meaning": "잡아당기다"
  },
  {
    "word": "strange",
    "meaning": "이상한"
  },
  {
    "word": "strategy",
    "meaning": "용병학"
  },
  {
    "word": "straw",
    "meaning": "짚"
  },
  {
    "word": "strawberry",
    "meaning": "딸기"
  },
  {
    "word": "stream",
    "meaning": "시내"
  },
  {
    "word": "street",
    "meaning": "거리"
  },
  {
    "word": "stress",
    "meaning": "압박"
  },
  {
    "word": "stretch",
    "meaning": "뻗치다"
  },
  {
    "word": "strict",
    "meaning": "엄중한"
  },
  {
    "word": "strike",
    "meaning": "치다"
  },
  {
    "word": "string",
    "meaning": "끈"
  },
  {
    "word": "strip",
    "meaning": "벗기다"
  },
  {
    "word": "stripe",
    "meaning": "줄무늬"
  },
  {
    "word": "stroke",
    "meaning": "한번치기"
  },
  {
    "word": "strong",
    "meaning": "강한"
  },
  {
    "word": "structure",
    "meaning": "구조"
  },
  {
    "word": "struggle",
    "meaning": "버둥거리다"
  },
  {
    "word": "student",
    "meaning": "학생"
  },
  {
    "word": "study",
    "meaning": "학문"
  },
  {
    "word": "stuff",
    "meaning": "재료"
  },
  {
    "word": "subject",
    "meaning": "복종시키다"
  },
  {
    "word": "subjective",
    "meaning": "주관의"
  },
  {
    "word": "submarine",
    "meaning": "잠수함"
  },
  {
    "word": "submit",
    "meaning": "복종시키다"
  },
  {
    "word": "subscribe",
    "meaning": "서명승락하다"
  },
  {
    "word": "substance",
    "meaning": "물질"
  },
  {
    "word": "substantial",
    "meaning": "실체의"
  },
  {
    "word": "substitute",
    "meaning": "대용하다 대신하다 대리(인)"
  },
  {
    "word": "subtle",
    "meaning": "미묘한"
  },
  {
    "word": "suburb",
    "meaning": "교외"
  },
  {
    "word": "subway",
    "meaning": "지하도"
  },
  {
    "word": "succeed",
    "meaning": "성공하다"
  },
  {
    "word": "such",
    "meaning": "이러한"
  },
  {
    "word": "suck",
    "meaning": "빨다"
  },
  {
    "word": "sudden",
    "meaning": "별안간의"
  },
  {
    "word": "suffer",
    "meaning": "경험하다"
  },
  {
    "word": "sufficient",
    "meaning": "충분한"
  },
  {
    "word": "sugar",
    "meaning": "설탕"
  },
  {
    "word": "suggest",
    "meaning": "암시하다"
  },
  {
    "word": "suicide",
    "meaning": "자살 자살하다"
  },
  {
    "word": "suit",
    "meaning": "소송"
  },
  {
    "word": "suite",
    "meaning": "수행원"
  },
  {
    "word": "sum",
    "meaning": "총계"
  },
  {
    "word": "summary",
    "meaning": "요약"
  },
  {
    "word": "summit",
    "meaning": "꼭대기"
  },
  {
    "word": "sun",
    "meaning": "태양"
  },
  {
    "word": "super",
    "meaning": "임시고용배우"
  },
  {
    "word": "superb",
    "meaning": "장려한"
  },
  {
    "word": "superior",
    "meaning": "뛰어난"
  },
  {
    "word": "supervise",
    "meaning": "감독하다"
  },
  {
    "word": "supper",
    "meaning": "저녁식사"
  },
  {
    "word": "supplement",
    "meaning": "부록"
  },
  {
    "word": "supply",
    "meaning": "공급하다"
  },
  {
    "word": "support",
    "meaning": "지탱하다"
  },
  {
    "word": "suppose",
    "meaning": "상상하다"
  },
  {
    "word": "sure",
    "meaning": "확신하는, 확실한 , 틀림없는"
  },
  {
    "word": "surface",
    "meaning": "표면"
  },
  {
    "word": "surgery",
    "meaning": "외과"
  },
  {
    "word": "surprise",
    "meaning": "놀람"
  },
  {
    "word": "surrender",
    "meaning": "넘겨주다"
  },
  {
    "word": "surround",
    "meaning": "에워싸다"
  },
  {
    "word": "survey",
    "meaning": "둘러보다"
  },
  {
    "word": "survive",
    "meaning": "살아 남다"
  },
  {
    "word": "suspect",
    "meaning": "짐작하다"
  },
  {
    "word": "suspend",
    "meaning": "매달다"
  },
  {
    "word": "sustain",
    "meaning": "떠받치다"
  },
  {
    "word": "swallow",
    "meaning": "삼키다"
  },
  {
    "word": "swear",
    "meaning": "맹세하다"
  },
  {
    "word": "sweat",
    "meaning": "땀"
  },
  {
    "word": "sweep",
    "meaning": "청소하다"
  },
  {
    "word": "sweet",
    "meaning": "단"
  },
  {
    "word": "swell",
    "meaning": "부풀다"
  },
  {
    "word": "swift",
    "meaning": "빠른"
  },
  {
    "word": "swim",
    "meaning": "헤엄치다"
  },
  {
    "word": "swing",
    "meaning": "흔들리다"
  },
  {
    "word": "switch",
    "meaning": "회초리"
  },
  {
    "word": "symbol",
    "meaning": "상징"
  },
  {
    "word": "sympathy",
    "meaning": "동정"
  },
  {
    "word": "symphony",
    "meaning": "교향곡"
  },
  {
    "word": "symptom",
    "meaning": "조짐"
  },
  {
    "word": "system",
    "meaning": "조직"
  },
  {
    "word": "table",
    "meaning": "테이블"
  },
  {
    "word": "tackle",
    "meaning": "고패"
  },
  {
    "word": "tag",
    "meaning": "손잡이가죽"
  },
  {
    "word": "tail",
    "meaning": "꼬리"
  },
  {
    "word": "take",
    "meaning": "잡다"
  },
  {
    "word": "tale",
    "meaning": "이야기"
  },
  {
    "word": "talent",
    "meaning": "재주"
  },
  {
    "word": "talk",
    "meaning": "말하다"
  },
  {
    "word": "tall",
    "meaning": "키큰"
  },
  {
    "word": "tap",
    "meaning": "가볍게 치기"
  },
  {
    "word": "tape",
    "meaning": "테이프"
  },
  {
    "word": "target",
    "meaning": "과녁"
  },
  {
    "word": "task",
    "meaning": "일"
  },
  {
    "word": "taste",
    "meaning": "맛"
  },
  {
    "word": "tattoo",
    "meaning": "귀영나팔"
  },
  {
    "word": "tax",
    "meaning": "세금"
  },
  {
    "word": "tea",
    "meaning": "차"
  },
  {
    "word": "teach",
    "meaning": "가르치다"
  },
  {
    "word": "tear",
    "meaning": "눈물"
  },
  {
    "word": "tease",
    "meaning": "괴롭히다"
  },
  {
    "word": "teen",
    "meaning": "슬픔"
  },
  {
    "word": "teenage",
    "meaning": "10대"
  },
  {
    "word": "telegraph",
    "meaning": "전신"
  },
  {
    "word": "telephone",
    "meaning": "전화"
  },
  {
    "word": "tell",
    "meaning": "말하다"
  },
  {
    "word": "temperature",
    "meaning": "온도"
  },
  {
    "word": "temple",
    "meaning": "관자놀이"
  },
  {
    "word": "temporary",
    "meaning": "일시적인"
  },
  {
    "word": "tempt",
    "meaning": "유혹하다"
  },
  {
    "word": "tenant",
    "meaning": "차지인"
  },
  {
    "word": "tend",
    "meaning": "(-의)경향이 있다"
  },
  {
    "word": "tender",
    "meaning": "제공"
  },
  {
    "word": "tense",
    "meaning": "시제"
  },
  {
    "word": "term",
    "meaning": "기간"
  },
  {
    "word": "terminal",
    "meaning": "종점의"
  },
  {
    "word": "terminate",
    "meaning": "끝내다"
  },
  {
    "word": "terrace",
    "meaning": "계단모양의 뜰(광장)"
  },
  {
    "word": "terrible",
    "meaning": "무시무시한"
  },
  {
    "word": "terrific",
    "meaning": "무서운"
  },
  {
    "word": "territory",
    "meaning": "영토"
  },
  {
    "word": "test",
    "meaning": "시험"
  },
  {
    "word": "testify",
    "meaning": "증명하다"
  },
  {
    "word": "text",
    "meaning": "원문"
  },
  {
    "word": "textbook",
    "meaning": "교과서"
  },
  {
    "word": "than",
    "meaning": "-보다도"
  },
  {
    "word": "thank",
    "meaning": "감사하다 감사"
  },
  {
    "word": "that",
    "meaning": "저"
  },
  {
    "word": "the",
    "meaning": "art.저"
  },
  {
    "word": "theater",
    "meaning": "=theatre 극장"
  },
  {
    "word": "theme",
    "meaning": "논제"
  },
  {
    "word": "then",
    "meaning": "그때"
  },
  {
    "word": "theory",
    "meaning": "이론"
  },
  {
    "word": "therapy",
    "meaning": "치료법"
  },
  {
    "word": "there",
    "meaning": "거기에"
  },
  {
    "word": "therefore",
    "meaning": "그런 까닭에"
  },
  {
    "word": "they",
    "meaning": "그들"
  },
  {
    "word": "thick",
    "meaning": "두꺼운"
  },
  {
    "word": "thief",
    "meaning": "도둑"
  },
  {
    "word": "thin",
    "meaning": "얇은"
  },
  {
    "word": "thing",
    "meaning": "물건"
  },
  {
    "word": "think",
    "meaning": "생각하다"
  },
  {
    "word": "thirst",
    "meaning": "갈증"
  },
  {
    "word": "this",
    "meaning": "이"
  },
  {
    "word": "thorough",
    "meaning": "완전한"
  },
  {
    "word": "though",
    "meaning": "-임에도 불구하고 그러나"
  },
  {
    "word": "thousand",
    "meaning": "천"
  },
  {
    "word": "thread",
    "meaning": "실"
  },
  {
    "word": "threat",
    "meaning": "협박"
  },
  {
    "word": "thrill",
    "meaning": "오싹하다 오싹함"
  },
  {
    "word": "throat",
    "meaning": "목"
  },
  {
    "word": "through",
    "meaning": "(-을)통하여 통하여 직통의"
  },
  {
    "word": "throw",
    "meaning": "던지다"
  },
  {
    "word": "thumb",
    "meaning": "엄지손가락 엄지손가락으로 만지다"
  },
  {
    "word": "thus",
    "meaning": "이렇게"
  },
  {
    "word": "tick",
    "meaning": "시계소리"
  },
  {
    "word": "tide",
    "meaning": "조수"
  },
  {
    "word": "tidy",
    "meaning": "말쑥한"
  },
  {
    "word": "tie",
    "meaning": "매다"
  },
  {
    "word": "tiger",
    "meaning": "호랑이"
  },
  {
    "word": "tight",
    "meaning": "단단한"
  },
  {
    "word": "till",
    "meaning": "-까지"
  },
  {
    "word": "timber",
    "meaning": "재목"
  },
  {
    "word": "time",
    "meaning": "때"
  },
  {
    "word": "tin",
    "meaning": "주석"
  },
  {
    "word": "tiny",
    "meaning": "자그마한"
  },
  {
    "word": "tip",
    "meaning": "끝"
  },
  {
    "word": "tire",
    "meaning": "피로하게 하다"
  },
  {
    "word": "tissue",
    "meaning": "조직"
  },
  {
    "word": "title",
    "meaning": "표제"
  },
  {
    "word": "to",
    "meaning": "-로"
  },
  {
    "word": "tobacco",
    "meaning": "담배"
  },
  {
    "word": "today",
    "meaning": "오늘은"
  },
  {
    "word": "toe",
    "meaning": "발가락"
  },
  {
    "word": "together",
    "meaning": "같이"
  },
  {
    "word": "toilet",
    "meaning": "화장실"
  },
  {
    "word": "tomorrow",
    "meaning": "내일(은)"
  },
  {
    "word": "tone",
    "meaning": "음조"
  },
  {
    "word": "tongue",
    "meaning": "혀"
  },
  {
    "word": "tonight",
    "meaning": "오늘밤에 오늘밤"
  },
  {
    "word": "too",
    "meaning": "(-도)또한"
  },
  {
    "word": "tool",
    "meaning": "사용세"
  },
  {
    "word": "tooth",
    "meaning": "이"
  },
  {
    "word": "top",
    "meaning": "정상"
  },
  {
    "word": "torture",
    "meaning": "고문"
  },
  {
    "word": "toss",
    "meaning": "던지다"
  },
  {
    "word": "total",
    "meaning": "총계 전체의 합계하다"
  },
  {
    "word": "touch",
    "meaning": "닿다"
  },
  {
    "word": "tough",
    "meaning": "단단한"
  },
  {
    "word": "tour",
    "meaning": "일주"
  },
  {
    "word": "toward",
    "meaning": "-쪽으로"
  },
  {
    "word": "tower",
    "meaning": "탑"
  },
  {
    "word": "town",
    "meaning": "읍"
  },
  {
    "word": "toxic",
    "meaning": "독의"
  },
  {
    "word": "toy",
    "meaning": "장난감 장난하다"
  },
  {
    "word": "trace",
    "meaning": "발자국"
  },
  {
    "word": "trade",
    "meaning": "매매"
  },
  {
    "word": "tradition",
    "meaning": "전설"
  },
  {
    "word": "traffic",
    "meaning": "교통"
  },
  {
    "word": "tragic",
    "meaning": "비극의"
  },
  {
    "word": "trail",
    "meaning": "질질 끌다"
  },
  {
    "word": "train",
    "meaning": "기차"
  },
  {
    "word": "transact",
    "meaning": "처리하다"
  },
  {
    "word": "transfer",
    "meaning": "옮기다"
  },
  {
    "word": "transform",
    "meaning": "변형(변용,변태)시키다"
  },
  {
    "word": "transition",
    "meaning": "변천"
  },
  {
    "word": "translate",
    "meaning": "번역하다"
  },
  {
    "word": "transmit",
    "meaning": "보내다"
  },
  {
    "word": "transport",
    "meaning": "수송(운송)하다"
  },
  {
    "word": "trap",
    "meaning": "덫"
  },
  {
    "word": "travel",
    "meaning": "여행하다"
  },
  {
    "word": "tray",
    "meaning": "쟁반"
  },
  {
    "word": "treasure",
    "meaning": "보물"
  },
  {
    "word": "treat",
    "meaning": "대우하다"
  },
  {
    "word": "treaty",
    "meaning": "조약"
  },
  {
    "word": "tree",
    "meaning": "나무"
  },
  {
    "word": "tremendous",
    "meaning": "무서운"
  },
  {
    "word": "trend",
    "meaning": "방향"
  },
  {
    "word": "trial",
    "meaning": "시험"
  },
  {
    "word": "triangle",
    "meaning": "각형"
  },
  {
    "word": "tribe",
    "meaning": "종족"
  },
  {
    "word": "trick",
    "meaning": "책략"
  },
  {
    "word": "trigger",
    "meaning": "방아쇠 재빠른"
  },
  {
    "word": "trim",
    "meaning": "산뜻한 정돈하다"
  },
  {
    "word": "trip",
    "meaning": "여행"
  },
  {
    "word": "triumph",
    "meaning": "승리"
  },
  {
    "word": "troop",
    "meaning": "대"
  },
  {
    "word": "trophy",
    "meaning": "전리품"
  },
  {
    "word": "trouble",
    "meaning": "고생"
  },
  {
    "word": "trouser",
    "meaning": "즈봉"
  },
  {
    "word": "true",
    "meaning": "진실"
  },
  {
    "word": "trunk",
    "meaning": "줄기"
  },
  {
    "word": "trust",
    "meaning": "신용"
  },
  {
    "word": "truth",
    "meaning": "진리"
  },
  {
    "word": "try",
    "meaning": "시험해보다"
  },
  {
    "word": "tube",
    "meaning": "관"
  },
  {
    "word": "tune",
    "meaning": "곡"
  },
  {
    "word": "tunnel",
    "meaning": "터널"
  },
  {
    "word": "turn",
    "meaning": "돌리다"
  },
  {
    "word": "turnover",
    "meaning": "전복"
  },
  {
    "word": "tutor",
    "meaning": "가정교사"
  },
  {
    "word": "twice",
    "meaning": "두 번"
  },
  {
    "word": "twin",
    "meaning": "쌍동이"
  },
  {
    "word": "twist",
    "meaning": "꼬이다"
  },
  {
    "word": "type",
    "meaning": "형"
  },
  {
    "word": "typical",
    "meaning": "전형적인"
  },
  {
    "word": "ugly",
    "meaning": "추한"
  },
  {
    "word": "ultimate",
    "meaning": "최후의"
  },
  {
    "word": "umbrella",
    "meaning": "우산"
  },
  {
    "word": "uncle",
    "meaning": "아저씨"
  },
  {
    "word": "under",
    "meaning": "-아래에"
  },
  {
    "word": "undergo",
    "meaning": "(영향 등을)받다"
  },
  {
    "word": "underlie",
    "meaning": "-의 밑에 있다"
  },
  {
    "word": "undermine",
    "meaning": "-밑을 파다"
  },
  {
    "word": "understand",
    "meaning": "이해하다"
  },
  {
    "word": "undertake",
    "meaning": "떠맡다"
  },
  {
    "word": "uniform",
    "meaning": "한결같은"
  },
  {
    "word": "unify",
    "meaning": "하나로 하다"
  },
  {
    "word": "union",
    "meaning": "결합"
  },
  {
    "word": "unique",
    "meaning": "유일무이한"
  },
  {
    "word": "unit",
    "meaning": "단위"
  },
  {
    "word": "unite",
    "meaning": "결합하다"
  },
  {
    "word": "universe",
    "meaning": "우주"
  },
  {
    "word": "university",
    "meaning": "종합대학(교) 대학의(에 관계 있는)"
  },
  {
    "word": "unless",
    "meaning": "-하지 않으면"
  },
  {
    "word": "until",
    "meaning": "-까지"
  },
  {
    "word": "up",
    "meaning": "위로"
  },
  {
    "word": "update",
    "meaning": "새롭게 하다 최신정보"
  },
  {
    "word": "upon",
    "meaning": "-의 위에"
  },
  {
    "word": "upper",
    "meaning": "위쪽의"
  },
  {
    "word": "upset",
    "meaning": "뒤집어 엎다"
  },
  {
    "word": "upward",
    "meaning": "위로 향한"
  },
  {
    "word": "urban",
    "meaning": "도시의"
  },
  {
    "word": "urge",
    "meaning": "몰아대다"
  },
  {
    "word": "urgent",
    "meaning": "긴급한"
  },
  {
    "word": "use",
    "meaning": "쓰다"
  },
  {
    "word": "usual",
    "meaning": "평소의"
  },
  {
    "word": "utilize",
    "meaning": "-을 이용하다"
  },
  {
    "word": "utter",
    "meaning": "전적인"
  },
  {
    "word": "vacation",
    "meaning": "휴가"
  },
  {
    "word": "vacuum",
    "meaning": "진공"
  },
  {
    "word": "vague",
    "meaning": "막연한"
  },
  {
    "word": "valid",
    "meaning": "유효한"
  },
  {
    "word": "valley",
    "meaning": "골짜기"
  },
  {
    "word": "value",
    "meaning": "가치"
  },
  {
    "word": "van",
    "meaning": "유개트럭"
  },
  {
    "word": "vanish",
    "meaning": "자취를 감추다"
  },
  {
    "word": "various",
    "meaning": "가지가지의"
  },
  {
    "word": "vary",
    "meaning": "바꾸다"
  },
  {
    "word": "vast",
    "meaning": "광대한, 광막한 막대한"
  },
  {
    "word": "vegetable",
    "meaning": "식물  야채, 푸성귀, 남새, 채소"
  },
  {
    "word": "vehicle",
    "meaning": "운반 기구, 운송 수단,  수레, 차량, 탈것"
  },
  {
    "word": "venture",
    "meaning": "모험"
  },
  {
    "word": "verbal",
    "meaning": "말의, 말에 관한, 언어상의, 말로 나타낸, 말로 된"
  },
  {
    "word": "verse",
    "meaning": "시의 한 줄, 시구  일련의 시구"
  },
  {
    "word": "version",
    "meaning": "번역, 번역문 개작, 각색, 번안"
  },
  {
    "word": "versus",
    "meaning": "…대, …에 대한"
  },
  {
    "word": "vertical",
    "meaning": "수평면에 직각인, 수직의"
  },
  {
    "word": "very",
    "meaning": "매우"
  },
  {
    "word": "vessel",
    "meaning": "그릇"
  },
  {
    "word": "veteran",
    "meaning": "노련가, 경험 많은 대가, 베테랑"
  },
  {
    "word": "veterinarian",
    "meaning": "수의사"
  },
  {
    "word": "via",
    "meaning": "…을 거쳐, …을 경유하여"
  },
  {
    "word": "vice",
    "meaning": "악덕,  비행, 타락 행위"
  },
  {
    "word": "victim",
    "meaning": "희생, 산 제물, 인신 제물"
  },
  {
    "word": "victory",
    "meaning": "승리, 전승"
  },
  {
    "word": "view",
    "meaning": "봄, 관찰, 개관"
  },
  {
    "word": "vigorous",
    "meaning": "정력적인, 강건한, 활기 있는, 격렬한"
  },
  {
    "word": "village",
    "meaning": "마을, 촌락"
  },
  {
    "word": "violent",
    "meaning": "격렬한, 맹렬한"
  },
  {
    "word": "virgin",
    "meaning": "처녀, 동정녀, 미혼 여성"
  },
  {
    "word": "virtual",
    "meaning": "사실상의, 실질상의, 실제의  허상의"
  },
  {
    "word": "virtue",
    "meaning": "덕, 덕행, 선, 선행"
  },
  {
    "word": "visible",
    "meaning": "눈에 보이는,  볼 수 있는"
  },
  {
    "word": "visit",
    "meaning": "방문하다, …의 손님으로 묵다"
  },
  {
    "word": "visual",
    "meaning": "시각의, 물건을 보기 위한"
  },
  {
    "word": "vital",
    "meaning": "생명의, 생명에 관한"
  },
  {
    "word": "vivid",
    "meaning": "발랄한, 약동적인, 힘찬, 생기있는"
  },
  {
    "word": "vocabulary",
    "meaning": "어휘, 용어수, 용어 범위"
  },
  {
    "word": "vocation",
    "meaning": "천직, 사명 직업, "
  },
  {
    "word": "voice",
    "meaning": "목소리, 음성, 음성"
  },
  {
    "word": "volume",
    "meaning": "책  권"
  },
  {
    "word": "voluntary",
    "meaning": "자발적인, 수의의"
  },
  {
    "word": "vote",
    "meaning": "찬부 표시, 투표, 표결"
  },
  {
    "word": "voyage",
    "meaning": "여행"
  },
  {
    "word": "wage",
    "meaning": "임금"
  },
  {
    "word": "wagon",
    "meaning": "짐마차"
  },
  {
    "word": "wait",
    "meaning": "기다리다"
  },
  {
    "word": "wake",
    "meaning": "잠깨다"
  },
  {
    "word": "walk",
    "meaning": "걷다"
  },
  {
    "word": "wall",
    "meaning": "벽"
  },
  {
    "word": "wander",
    "meaning": "헤매다"
  },
  {
    "word": "want",
    "meaning": "결핍"
  },
  {
    "word": "war",
    "meaning": "전쟁"
  },
  {
    "word": "warehouse",
    "meaning": "창고"
  },
  {
    "word": "warm",
    "meaning": "따뜻한"
  },
  {
    "word": "warn",
    "meaning": "경고하다"
  },
  {
    "word": "warrant",
    "meaning": "보증하다 보증"
  },
  {
    "word": "warrior",
    "meaning": "병사"
  },
  {
    "word": "wash",
    "meaning": "씻다"
  },
  {
    "word": "waste",
    "meaning": "낭비하다"
  },
  {
    "word": "watch",
    "meaning": "손목시계"
  },
  {
    "word": "water",
    "meaning": "물"
  },
  {
    "word": "watermelon",
    "meaning": "수박"
  },
  {
    "word": "wave",
    "meaning": "물결"
  },
  {
    "word": "way",
    "meaning": "길"
  },
  {
    "word": "we",
    "meaning": "우리가"
  },
  {
    "word": "weak",
    "meaning": "약한"
  },
  {
    "word": "wealth",
    "meaning": "재산"
  },
  {
    "word": "weapon",
    "meaning": "무기"
  },
  {
    "word": "wear",
    "meaning": "입다"
  },
  {
    "word": "weather",
    "meaning": "날씨"
  },
  {
    "word": "weave",
    "meaning": "짜다"
  },
  {
    "word": "wedding",
    "meaning": "혼례"
  },
  {
    "word": "weed",
    "meaning": "잡초 잡초를 뽑다"
  },
  {
    "word": "week",
    "meaning": "주"
  },
  {
    "word": "weekend",
    "meaning": "주말 주말의 주말을 지내다"
  },
  {
    "word": "weigh",
    "meaning": "무게를 달다"
  },
  {
    "word": "weight",
    "meaning": "무게"
  },
  {
    "word": "weird",
    "meaning": "불가사의한"
  },
  {
    "word": "welcome",
    "meaning": "환영 환영받는"
  },
  {
    "word": "welfare",
    "meaning": "행복"
  },
  {
    "word": "well",
    "meaning": "잘"
  },
  {
    "word": "west",
    "meaning": "서쪽"
  },
  {
    "word": "wet",
    "meaning": "축축한"
  },
  {
    "word": "whale",
    "meaning": "고래"
  },
  {
    "word": "what",
    "meaning": "무엇 무슨"
  },
  {
    "word": "wheat",
    "meaning": "밀"
  },
  {
    "word": "wheel",
    "meaning": "바퀴"
  },
  {
    "word": "when",
    "meaning": "언제"
  },
  {
    "word": "where",
    "meaning": "어디에 (-하는)곳에 pr.어디 (문제의)장소"
  },
  {
    "word": "whereas",
    "meaning": "cnj.(-인)까닭에"
  },
  {
    "word": "whether",
    "meaning": "-인지 어떤지"
  },
  {
    "word": "which",
    "meaning": "어느 쪽"
  },
  {
    "word": "while",
    "meaning": "동안 -하는 동안"
  },
  {
    "word": "whip",
    "meaning": "채찍 채찍질하다"
  },
  {
    "word": "whisper",
    "meaning": "속삭이다"
  },
  {
    "word": "whistle",
    "meaning": "휘파람"
  },
  {
    "word": "white",
    "meaning": "흰"
  },
  {
    "word": "who",
    "meaning": "누구"
  },
  {
    "word": "whole",
    "meaning": "전체의"
  },
  {
    "word": "why",
    "meaning": "왜"
  },
  {
    "word": "wicked",
    "meaning": "사악한"
  },
  {
    "word": "wide",
    "meaning": "폭넓은"
  },
  {
    "word": "widespread",
    "meaning": "널리 보급되어 있는"
  },
  {
    "word": "widow",
    "meaning": "미망인"
  },
  {
    "word": "wife",
    "meaning": "아내"
  },
  {
    "word": "wild",
    "meaning": "야생의"
  },
  {
    "word": "will",
    "meaning": "의지"
  },
  {
    "word": "win",
    "meaning": "이기다"
  },
  {
    "word": "wind",
    "meaning": "바람"
  },
  {
    "word": "window",
    "meaning": "창"
  },
  {
    "word": "wing",
    "meaning": "날개"
  },
  {
    "word": "wipe",
    "meaning": "닦다"
  },
  {
    "word": "wire",
    "meaning": "철사"
  },
  {
    "word": "wise",
    "meaning": "슬기로운"
  },
  {
    "word": "wish",
    "meaning": "바라다"
  },
  {
    "word": "wit",
    "meaning": "기지"
  },
  {
    "word": "with",
    "meaning": "함께"
  },
  {
    "word": "withdraw",
    "meaning": "물러나다"
  },
  {
    "word": "within",
    "meaning": "prop.-의 안쪽에 안으로 내부"
  },
  {
    "word": "without",
    "meaning": "prop.-없이 밖은"
  },
  {
    "word": "witness",
    "meaning": "증언"
  },
  {
    "word": "woman",
    "meaning": "부인"
  },
  {
    "word": "wonder",
    "meaning": "경이"
  },
  {
    "word": "wood",
    "meaning": "숲"
  },
  {
    "word": "wool",
    "meaning": "양모"
  },
  {
    "word": "word",
    "meaning": "낱말"
  },
  {
    "word": "work",
    "meaning": "일"
  },
  {
    "word": "world",
    "meaning": "세계"
  },
  {
    "word": "worry",
    "meaning": "근심하다"
  },
  {
    "word": "worship",
    "meaning": "숭배"
  },
  {
    "word": "worth",
    "meaning": "가치가 있는 가치"
  },
  {
    "word": "would",
    "meaning": "auwill의 과거"
  },
  {
    "word": "wound",
    "meaning": "부상"
  },
  {
    "word": "wrap",
    "meaning": "싸다"
  },
  {
    "word": "wreck",
    "meaning": "난파"
  },
  {
    "word": "write",
    "meaning": "쓰다"
  },
  {
    "word": "wrong",
    "meaning": "나쁜"
  },
  {
    "word": "year",
    "meaning": "연"
  },
  {
    "word": "yell",
    "meaning": "고함치다"
  },
  {
    "word": "yellow",
    "meaning": "황색의 황색"
  },
  {
    "word": "yes",
    "meaning": "예"
  },
  {
    "word": "yesterday",
    "meaning": "어제"
  },
  {
    "word": "yet",
    "meaning": "아직"
  },
  {
    "word": "yield",
    "meaning": "산출하다"
  },
  {
    "word": "you",
    "meaning": "당신"
  },
  {
    "word": "young",
    "meaning": "젊은"
  },
  {
    "word": "zebra",
    "meaning": "얼룩말"
  },
  {
    "word": "zone",
    "meaning": "대"
  },
  {
    "word": "zoo",
    "meaning": "동물원"
  }
];