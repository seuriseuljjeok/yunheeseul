import React from 'react';
import { 
  BarChart3, 
  Users, 
  Lightbulb, 
  Code2, 
  TrendingUp, 
  Target,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Trophy,
  Heart,
  Sparkles,
  Search,
  Globe,
  Zap
} from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-black text-2xl tracking-[-0.05em] flex items-center gap-1">
            <span className="text-black italic underline decoration-pink-500 decoration-4">HEESEUL</span>
          </div>
          <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#vision" className="hover:text-pink-500 transition-colors">Vision</a>
            <a href="#projects" className="hover:text-pink-500 transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-pink-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-pink-500 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          <div className="flex-1 z-10">
            <div className="inline-block px-4 py-1 border border-black rounded-full text-xs font-bold mb-8 uppercase tracking-widest text-pink-600 border-pink-200 bg-pink-50">
              2026 Marketing Portfolio
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-10 tracking-tighter">
              BEYOND <br />
              <span className="text-pink-500">CODING,</span><br />
              BRANDING.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl border-l-4 border-pink-500 pl-6">
              사용자의 불편을 기술로 해결하던 iOS 개발자에서, <br />
              이제는 브랜드의 가치를 유저의 삶에 심는 마케터로. <br />
              <strong>숫자로 증명하고 감각으로 설득하는 윤희슬입니다.</strong>
            </p>
          </div>
          <div className="w-full lg:w-1/3 aspect-[3/4] bg-slate-100 rounded-2xl relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white text-center md:text-left">
              <p className="text-sm font-bold opacity-80 mb-2 tracking-widest uppercase">Tech-Based Marketer</p>
              <h3 className="text-3xl font-black italic">Perspective Shift</h3>
            </div>
            <div className="absolute top-10 right-10 flex flex-col gap-2">
               {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Strategy */}
      <section id="vision" className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">
                유저의 <span className="text-pink-500 italic text-5xl">결핍</span>을 찾아내<br /> 
                브랜드의 <span className="text-pink-500 italic text-5xl">팬십</span>으로 전환합니다.
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 font-bold shadow-lg shadow-black/20">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">사용자 중심 문제 해결 (UX)</h4>
                    <p className="text-slate-500 leading-relaxed">단순한 구현을 넘어 사용자의 불편을 사전에 예측하고 개선합니다. '직관적인 경험'을 설계하는 데 집중합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 font-bold shadow-lg shadow-black/20">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">데이터 기반의 논리적 사고</h4>
                    <p className="text-slate-500 leading-relaxed">Amplitude, GA 등 데이터 분석 툴을 개발 단계부터 직접 다뤄봤습니다. 수치를 통해 유저의 반응을 객관적으로 분석합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 font-bold shadow-lg shadow-black/20">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">협업과 리더십</h4>
                    <p className="text-slate-500 leading-relaxed">동아리 활동과 프로젝트 파트 리드 경험을 통해 팀의 강점을 극대화하는 법을 배웠습니다. 타 직군과의 시너지를 만드는 소통 능력을 갖췄습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-pink-50 relative">
               <Sparkles className="absolute -top-6 -right-6 text-pink-500 w-12 h-12 animate-bounce" />
               <h3 className="text-2xl font-black mb-6 italic tracking-tight">Why Marketing?</h3>
               <p className="text-slate-600 leading-relaxed mb-6 italic font-medium">
                 "앱을 배포하며 깨달은 것은, 아무리 훌륭한 기능도 '사용자의 삶에 닿지 않으면' 의미가 없다는 것입니다. 
                 저는 개발자의 언어로 제품을 만들고, 이제는 마케터의 감각으로 그 제품이 유저의 일상이 되게 하려 합니다."
               </p>
               <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-xs font-bold tracking-widest uppercase">Fast Learner</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-xs font-bold tracking-widest uppercase">User-Centric</span>
                  <span className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold tracking-widest uppercase italic">Growth-Mindset</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section id="projects" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4 tracking-tighter italic uppercase underline decoration-pink-500 decoration-8">Portfolio</h2>
          </div>

          <div className="space-y-32">
            {/* Project 1 - 데이트로드 */}
            <div className="relative group">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2">
                   <div className="flex items-center gap-3 mb-6">
                      <Trophy className="text-amber-500" size={24} />
                      <span className="text-xl font-black italic uppercase tracking-wider text-amber-600">SOPT 데모데이 최우수상</span>
                   </div>
                   <h3 className="text-4xl font-black mb-6 leading-none">데이트로드 <br /><span className="text-slate-400 font-light text-2xl uppercase tracking-widest">Dateroad</span></h3>
                   <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Active Users</p>
                         <p className="text-2xl font-black text-center">1400+ 명</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Role</p>
                         <p className="text-2xl font-black text-pink-500">iOS 리드</p>
                      </div>
                   </div>
                   <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                     사용자의 입장에서 코스 탐색 과정을 분석하여, 심리적 이탈을 막는 로딩 UX 개선을 이끌었습니다.<br /> 
                     기획자와 디자이너에게 프로토타입을 제작하여 역제안함으로써 유저 경험을 능동적으로 고도화했습니다.
                   </p>
                </div>
                <div className="lg:w-1/2 space-y-4">
                   <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-xl group-hover:-translate-y-2 transition-transform">
                      <h4 className="text-pink-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest"><Sparkles size={18}/> Marketing Strategy</h4>
                      <ul className="space-y-4 opacity-90 text-sm font-medium">
                        <li className="flex gap-4 border-b border-white/10 pb-3">
                          <span className="text-pink-500 font-black italic">01</span>
                          <span>유저 이탈 구간 데이터 분석 및 로딩 프로세스 시각화 개선 제안</span>
                        </li>
                        <li className="flex gap-4 border-b border-white/10 pb-3">
                          <span className="text-pink-500 font-black italic">02</span>
                          <span>타 직군(기획, 디자인)과의 원활한 소통을 위한 프로토타입 기반 제안 역량</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-pink-500 font-black italic">03</span>
                          <span>앱 런칭 후 유저 피드백 분석을 통한 UI/UX 지속적 최적화</span>
                        </li>
                      </ul>
                   </div>
                </div>
              </div>
            </div>

            {/* Project 2 - doorip */}
            <div className="relative group">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                <div className="lg:w-1/2">
                   <div className="flex items-center gap-3 mb-6">
                      <Trophy className="text-amber-500" size={24} />
                      <span className="text-xl font-black italic uppercase tracking-wider underline decoration-amber-300 text-amber-600">SOPT 데모데이 대상</span>
                   </div>
                   <h3 className="text-4xl font-black mb-6 leading-none">doorip <br /><span className="text-slate-400 font-light text-2xl uppercase tracking-widest">doorip</span></h3>
                   <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Active Users</p>
                         <p className="text-2xl font-black text-center">2300+ 명</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Impact</p>
                         <p className="text-2xl font-black text-pink-500 italic">GRAND PRIZE</p>
                      </div>
                   </div>
                   <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                     함께 준비하는 여행 투두 서비스입니다.<br />여행 스타일 진단 및 공유를 통한 유입 비중을 높이는 데 기술적으로 기여했습니다.
                   </p>
                </div>
                <div className="lg:w-1/2 space-y-4">
                   <div className="bg-white border-2 border-black p-10 rounded-[2.5rem] shadow-xl group-hover:-translate-y-2 transition-transform">
                      <h4 className="text-black font-black mb-4 flex items-center gap-2 uppercase tracking-widest"><Heart size={18}/> Branding & Viral</h4>
                      <ul className="space-y-4 text-slate-600 text-sm font-semibold">
                        <li className="flex gap-4 border-b border-slate-50 pb-3">
                          <span className="text-pink-500 font-black tracking-widest">CORE</span>
                          <span>비동기 통신 최적화를 통해 로딩 없는 쾌적한 진단 경험 제공</span>
                        </li>
                        <li className="flex gap-4 border-b border-slate-50 pb-3">
                          <span className="text-pink-500 font-black tracking-widest">VIRAL</span>
                          <span>사용자가 자신의 취향을 시각적으로 소장/공유할 수 있는 이미지 저장 기능 구현</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-pink-500 font-black tracking-widest">USER</span>
                          <span>여행 스타일 진단 및 공유 기능으로 바이럴 요소 강화</span>
                        </li>
                      </ul>
                   </div>
                </div>
              </div>
            </div>

            {/* Project 3 - 인스타머니 */}
            <div className="relative group">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2">
                   <div className="flex items-center gap-3 mb-6">
                      <Target className="text-pink-500" size={24} />
                      <span className="text-xl font-black italic uppercase tracking-wider text-pink-600">BM 기획 역제안 및 구현</span>
                   </div>
                   <h3 className="text-4xl font-black mb-6 leading-none">instamoney <br /><span className="text-slate-400 font-light text-2xl uppercase tracking-widest">Instamoney</span></h3>
                   <div className="bg-pink-500 text-white p-6 rounded-3xl mb-8 shadow-lg shadow-pink-200">
                      <p className="font-bold text-center italic">"단순 제한에서 보상으로, 유저 인센티브 구조의 대전환"</p>
                   </div>
                   <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                     서버 개발자, 기획자와의 협업 과정에서 기존의 'SNS 사용 제한' 방식이 유저에게 거부감을 줄 수 있음을 파악했습니다. <br />
                     이를 '사용 시간 감소에 따른 보상(Reward)' 구조로 변경하자고 역제안하여 유저의 긍정적 행동 변화를 이끌어내는 마케팅적 기획력을 발휘했습니다.
                   </p>
                </div>
                <div className="lg:w-1/2 space-y-4">
                   <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 group-hover:-translate-y-2 transition-transform">
                      <h4 className="text-slate-900 font-black mb-6 flex items-center gap-2 uppercase tracking-tighter">Business & Growth</h4>
                      <div className="space-y-6">
                         <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center font-black text-pink-500 shadow-sm text-[10px]">BIZ</div>
                            <p className="text-sm font-bold text-slate-800 italic leading-relaxed">AdMob 연동을 통해 트래픽이 실제 매출로 연결되는 비즈니스 구조 직접 경험</p>
                         </div>
                         <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center font-black text-pink-500 shadow-sm text-[10px]">DATA</div>
                            <p className="text-sm font-bold text-slate-800 italic leading-relaxed">Amplitude와 GA를 활용해 보상 획득 여정에 따른 유저 이탈 단계 추적 및 분석</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4 tracking-tighter italic uppercase underline decoration-black decoration-8">Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h4 className="text-2xl font-black mb-2 uppercase">SOPT (iOS Part)</h4>
                <p className="text-slate-400 font-bold mb-6 text-sm uppercase tracking-widest italic">IT VENTURE CLUB | 2023 - 2024</p>
                <ul className="space-y-4 text-slate-500 text-sm font-medium leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-black font-bold">·</span> 
                    <span>기획, 디자인, 서버 파트와의 유기적인 커뮤니케이션을 통한 다수의 MVP 런칭</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-black font-bold">·</span> 
                    <span>iOS 파트 리드로서 파트원 스케줄링 및 기술적 이슈 해결 주도</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-black font-bold">·</span> 
                    <span>약 200명 규모 IT 연합 동아리의 운영팀 멤버로, 각종 컨퍼런스 및 오프라인 이벤트를 기획·운영</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h4 className="text-2xl font-black mb-2 uppercase">KWDC24 Volunteer</h4>
                <p className="text-slate-400 font-bold mb-6 text-sm uppercase tracking-widest italic">CONFERENCE OPERATION | 2024.10</p>
                <ul className="space-y-4 text-slate-500 text-sm font-medium leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-black font-bold">·</span> 
                    <span>국내 최대 iOS 개발자 컨퍼런스 운영 지원 및 글로벌 스피커 응대</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-black font-bold">·</span> 
                    <span>대규모 오프라인 행사의 효율적인 타임라인 관리 및 현장 이슈 실시간 대응</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-black font-bold">·</span> 
                    <span>다양한 국적의 참가자들과의 원활한 소통을 통해 원활한 컨퍼런스 경험 제공</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-20">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-black mb-8 italic tracking-tighter">SKILLS</h2>
              <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-xs">
                Analyzing data, <br />
                Executing Technology, <br />
                Designing Experiences.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-12">
               <div>
                  <h4 className="text-pink-500 font-black tracking-widest uppercase mb-6 border-b border-pink-500/30 pb-2">Growth & Data</h4>
                  <ul className="space-y-3 font-bold">
                    <li>Amplitude / GA</li>
                    <li>Google AdMob / Kakao AdFit</li>
                    <li>Figma</li>
                    <li>HTML / CSS / JS (Basic)</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-pink-500 font-black tracking-widest uppercase mb-6 border-b border-pink-500/30 pb-2">Technical & Collab</h4>
                  <ul className="space-y-3 font-bold text-slate-300">
                    <li className="text-white">Swift / iOS (Native)</li>
                    <li className="text-white">Jira / Confluence</li>
                    <li className="text-white italic">AI Prompt Engineering</li>
                    <li>Slack / Notion / GitHub</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-40 bg-white text-center px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-12 tracking-[-0.05em] leading-none uppercase">
            LET'S <span className="italic text-pink-500 underline decoration-4">MARKET</span> <br /> 
            TOGETHER.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-black tracking-tight text-xl">
             <a href="mailto:peony491@naver.com" className="hover:text-pink-500 transition-colors border-b-4 border-slate-100">peony491@naver.com</a>
             <a href="tel:010-6305-3171" className="hover:text-pink-500 transition-colors border-b-4 border-slate-100">010.6305.3171</a>
          </div>
          <p className="mt-20 text-slate-300 text-[10px] font-black tracking-[0.6em] uppercase">© 2026 YUN HEESEUL / TECH-DRIVEN MARKETER PORTFOLIO</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
