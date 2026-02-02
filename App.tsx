
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Heart, Phone, MapPin } from 'lucide-react';
import { CardContent } from './types';

/**
 * ============================================================
 * [ 📸 사진 교체 및 외부 배포 가이드 ]
 * ============================================================
 * 네이버 블로그 등에 올린 사진 주소는 외부에서 차단될 수 있습니다.
 * 안정적인 배포를 위해 아래 방법을 권장합니다.
 * 
 * 1. https://postimages.org/ 접속
 * 2. 사진 업로드 후 [직접 링크] 또는 [Direct Link] 주소를 복사
 * 3. 아래 images 항목의 따옴표("") 안에 붙여넣기
 * ============================================================
 */
const CARD_NEWS_CONFIG = {
  // 1. 각 페이지별 사진 주소 (반드시 '직접 링크' 주소를 사용하세요)
  images: {
    page1: "https://i.postimg.cc/258FFbTj/photo1.jpg",
    page2: "https://i.postimg.cc/ncGDRVXK/photo2.jpg",
    page3: "https://i.postimg.cc/LXPqzmdk/photo3.png",
    page4: "https://i.postimg.cc/WbTDkR5c/photo4.jpg",
    page5: "https://i.postimg.cc/QdnVwFhT/photo5.jpg", // 카카오 공유 대표 이미지로 사용됨
  },
  
  // 2. 버튼 클릭 시 연결될 링크
  links: {
    donation: "https://www.ihappynanum.com/Nanum/B/KV58E5SU28",
    homepage: "http://www.kongjon.or.kr/",
    taxBenefit: "http://www.kongjon.or.kr/4_1.php",
  },

  // 3. 센터 기본 정보
  centerInfo: {
    name: "사회적협동조합 공존",
    address: "사회적협동조합 공존 3층 22호",
    phone: "032-710-3650"
  }
};

const CARDS: CardContent[] = [
  {
    id: 1,
    title: "우리의 평범한 일상이\n특별한 기적이 됩니다",
    subtitle: "새로운 한 해, 공존과 함께해주셔서 감사합니다.",
    body: "지난 한 해의 격동을 뒤로하고,\n여러분의 건강과 행복을 진심으로 기원합니다.",
    keyword: "#평범한일상 #특별한기적",
    image: CARD_NEWS_CONFIG.images.page1,
  },
  {
    id: 2,
    title: "설립 5년, 그동안 쌓아온\n소중한 일상의 경험들",
    body: "발달장애인들이 비장애인의 삶 속에서 함께 공존하는 삶을 준비할 수 있도록, 다양한 프로그램을 통해 일상을 축적해왔습니다.",
    keyword: "#공존의준비 #일상의축적",
    image: CARD_NEWS_CONFIG.images.page2,
  },
  {
    id: 3,
    title: "형제 자매의 힘겨운 돌봄,\n이제 우리가 나설 때입니다",
    body: "보호자의 고령화와 부재로 인해 남겨진 가족들의 어깨가 무거워지고 있습니다. 독립적인 삶을 위한 공동주택(그룹홈) 운영이 시급합니다.",
    keyword: "#함께돌봄 #그룹홈필요",
    image: CARD_NEWS_CONFIG.images.page3,
  },
  {
    id: 4,
    title: "공존의 울타리가\n되어주시겠어요?",
    body: "공존이 멈추지 않고 운영되기 위해서는 여러분의 정기적인 따듯한 손길이 필요합니다. 작은 나눔이 모여 커다란 울타리가 됩니다.",
    keyword: "#작은나눔 #커다란울타리",
    buttonText: "월 1~2만원의 기적",
    image: CARD_NEWS_CONFIG.images.page4,
  },
  {
    id: 5,
    title: "지금, 당신의 사랑을\n전달해주세요",
    body: "매달 커피 몇 잔의 금액으로 발달장애인의 내일을 바꿀 수 있습니다. 연말정산 시 세제 혜택도 함께 누리세요.",
    keyword: "#사랑의실천 #내일의희망",
    isLastPage: true,
    image: CARD_NEWS_CONFIG.images.page5,
  },
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < CARDS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const currentCard = CARDS[currentIndex];
  const isLastPage = currentIndex === CARDS.length - 1;

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden font-sans">
      <div className="relative w-full max-w-md h-screen sm:h-[92vh] sm:rounded-[32px] bg-white shadow-2xl overflow-hidden flex flex-col select-none border border-gray-100">
        
        {/* 상단 이미지 영역 (45%) */}
        <div className="relative h-[45%] overflow-hidden bg-gray-200">
          <img 
            key={currentCard.image}
            src={currentCard.image} 
            alt="카드 이미지" 
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1080&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px]"></div>
          
          {/* 프로그레스 바 */}
          <div className="absolute top-0 left-0 w-full h-1 z-30 flex gap-1 px-4 pt-4">
             {CARDS.map((_, idx) => (
               <div key={idx} className="flex-1 h-full bg-black/10 overflow-hidden rounded-full">
                 <div 
                   className={`h-full bg-emerald-500 transition-all duration-300 ${idx <= currentIndex ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                 />
               </div>
             ))}
          </div>

          {/* 헤더 정보 */}
          <div className="absolute top-8 left-6 right-6 z-10 flex justify-between items-center">
            <div className="text-gray-800 font-bold text-[12px] tracking-tighter bg-white/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-sm">
              {CARD_NEWS_CONFIG.centerInfo.name}
            </div>
            <div className="bg-black/10 backdrop-blur-md px-3 py-1 rounded-full text-black text-[10px] font-bold">
              {currentIndex + 1} / {CARDS.length}
            </div>
          </div>
        </div>

        {/* 하단 문구 영역 (55%) */}
        <div 
          className="relative flex-1 flex flex-col px-8 pb-4 pt-2 cursor-pointer touch-none z-10 bg-white"
          onClick={(e) => {
             const { clientX, currentTarget } = e;
             const { left, width } = currentTarget.getBoundingClientRect();
             if (clientX - left < width * 0.25) {
               prevSlide();
             } else {
               nextSlide();
             }
          }}
        >
          <div className="mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold tracking-tight border border-emerald-100 uppercase">
              {currentCard.keyword}
            </span>
          </div>

          <h1 className="text-[26px] sm:text-[28px] font-black text-gray-900 leading-[1.3] mb-5 whitespace-pre-wrap tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-500">
            {currentCard.title}
          </h1>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {currentCard.subtitle && (
              <p className="text-emerald-700 font-bold text-[15px] leading-relaxed tracking-tight border-l-3 border-emerald-500 pl-3">
                {currentCard.subtitle}
              </p>
            )}
            {currentCard.body && (
              <p className="text-gray-600 text-[14px] sm:text-[15px] leading-[1.6] font-medium tracking-tight whitespace-pre-wrap">
                {currentCard.body}
              </p>
            )}
          </div>

          {currentCard.buttonText && (
            <div className="mt-auto py-4 flex justify-center">
              <span className="bg-yellow-400 text-yellow-900 px-8 py-3 rounded-full font-bold text-sm shadow-md animate-bounce border border-yellow-300">
                {currentCard.buttonText}
              </span>
            </div>
          )}

          {currentCard.isLastPage && (
            <div className="mt-auto py-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick(CARD_NEWS_CONFIG.links.donation);
                }}
                className="w-full bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95 transition-all py-5 rounded-2xl font-bold text-[18px] sm:text-[20px] flex items-center justify-center gap-3 shadow-lg shadow-emerald-100"
              >
                <Heart className="w-6 h-6 fill-current" />
                우리의 울타리 되어주기
              </button>
            </div>
          )}
        </div>

        {/* 푸터 영역 */}
        <div className="bg-gray-50/80 backdrop-blur-md p-6 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full transition-all ${currentIndex === 0 ? 'text-gray-200' : 'text-gray-400 hover:bg-gray-200'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-1.5">
               {CARDS.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-emerald-500' : 'w-1.5 bg-gray-200'}`}
                 />
               ))}
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              disabled={currentIndex === CARDS.length - 1}
              className={`p-2 rounded-full transition-all ${currentIndex === CARDS.length - 1 ? 'text-gray-200' : 'text-gray-400 hover:bg-gray-200'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {isLastPage && (
            <div className="grid grid-cols-2 gap-3 mb-6 animate-in fade-in slide-in-from-bottom-2">
               <button 
                 onClick={(e) => { e.stopPropagation(); handleLinkClick(CARD_NEWS_CONFIG.links.homepage); }} 
                 className="flex items-center justify-center gap-2 bg-white py-3 rounded-xl border border-gray-100 text-[11px] font-bold text-gray-700 shadow-sm"
               >
                 <ExternalLink className="w-3.5 h-3.5 text-emerald-500" /> 홈페이지
               </button>
               <button 
                 onClick={(e) => { e.stopPropagation(); handleLinkClick(CARD_NEWS_CONFIG.links.taxBenefit); }} 
                 className="flex items-center justify-center gap-2 bg-white py-3 rounded-xl border border-gray-100 text-[11px] font-bold text-gray-700 shadow-sm"
               >
                 <ExternalLink className="w-3.5 h-3.5 text-emerald-500" /> 세제 혜택
               </button>
            </div>
          )}

          <div className="flex flex-col items-center gap-1.5 pt-2 border-t border-gray-100">
             <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-600 font-bold whitespace-nowrap tracking-tight">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" /> 
                {CARD_NEWS_CONFIG.centerInfo.address}
             </div>
             <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400 font-medium">
               <Phone className="w-3 h-3" /> {CARD_NEWS_CONFIG.centerInfo.phone}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
