import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './index.css'

function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

const PROJECTS = {
  ilbirong: [
    { name: '캔바 스튜디오', desc: '일비롱체 기반 디자인 제작 도구', url: 'https://ggumsikpan.github.io/1brong/', progress: 35, status: 'MVP' },
    { name: '자동 견적 계산기', desc: '사이즈별 단가 산출 + 마진 설정 + 장바구니', url: 'https://ggumsikpan.github.io/ilbirong/', progress: 80, status: '운영 가능' },
    { name: '온라인 주문서', desc: '고객 주문 접수 폼 + 배송/결제 연동', url: 'https://ilbirong.vercel.app/', progress: 70, status: '운영 가능' },
  ],
  adlumin: [
    { name: '광고주 관리 시스템', desc: '캠페인 관리 + Google Sheets 연동 + 광고주 대시보드', url: 'https://adlumin.vercel.app/', progress: 85, status: '운영 가능' },
    { name: '체험단 모집 사이트', desc: '인플루언서 매칭 + 캠페인 목록 + 회원가입', url: 'https://adlumin-review.vercel.app/', progress: 35, status: 'MVP' },
  ],
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-[var(--font-family-pretendard)]">

      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-charcoal via-navy to-slate-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ilbirong rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-adlumin rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-ggumsik rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center py-20">
          <FadeIn>
            <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Partnership Proposal · 2026</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              함께 만들어온 것들,<br />
              <span className="bg-gradient-to-r from-ilbirong via-ggumsik to-adlumin bg-clip-text text-transparent">
                함께 성장할 구조
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
              일비롱디자인 x 애드루민 x 꿈식판<br />
              서로의 시간을 아껴주는 파트너십을 제안합니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { name: '일비롱디자인', color: 'bg-ilbirong', sub: '디자인' },
                { name: '애드루민', color: 'bg-adlumin', sub: '마케팅/광고' },
                { name: '꿈식판', color: 'bg-ggumsik', sub: '시스템' },
              ].map((p, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
                  <div className={`w-3 h-3 ${p.color} rounded-full mx-auto mb-2`} />
                  <p className="text-white font-bold text-sm">{p.name}</p>
                  <p className="text-white/40 text-xs">{p.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━ 감사 인사 ━━━━━━ */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-5">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-charcoal/5">
              <p className="text-ggumsik font-semibold text-sm tracking-widest uppercase mb-4">Before We Begin</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal mb-6">먼저, 진심으로 감사드립니다.</h2>
              <div className="space-y-4 text-charcoal/70 text-sm sm:text-base leading-relaxed text-left">
                <p>
                  아롱 대표님, 정혁 대표님. 두 분이 아니었다면 '시스템 컨설턴트 꿈식맨'은 없었습니다.
                </p>
                <p>
                  클로드 MAX 계정을 믿고 맡겨주신 것, 브랜딩과 명함을 만들어주신 것,
                  그리고 무엇보다 <strong>"같이 해보자"</strong>라고 말씀해주신 그 한마디가 저의 시작이었습니다.
                </p>
                <p>
                  요즘 제가 바쁘게 돌아다니면서, 두 분의 프로젝트에 충분한 시간을 드리지 못한 것 같아
                  마음이 늘 무거웠습니다. 그래서 오늘 이 자리가 더 의미 있습니다.
                </p>
                <p className="font-semibold text-charcoal">
                  서로 오래, 좋게, 제대로 가기 위한 구조를 제안드립니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━ 지금까지 해온 것 ━━━━━━ */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-5">
          <FadeIn>
            <p className="text-ggumsik font-semibold text-sm tracking-widest uppercase mb-3 text-center">What We've Built</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal text-center mb-4">함께 만들어온 시스템들</h2>
            <p className="text-center text-charcoal/50 max-w-lg mx-auto mb-12">현재까지의 프로젝트 현황과 완성도입니다.</p>
          </FadeIn>

          {/* 일비롱 */}
          <FadeIn>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-4 h-4 bg-ilbirong rounded-full" />
                <h3 className="text-lg font-bold">일비롱디자인</h3>
                <span className="text-xs text-charcoal/40">배아롱 대표</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {PROJECTS.ilbirong.map((p, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl p-5 shadow-sm border border-charcoal/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-sm text-charcoal">{p.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.progress >= 70 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal/50 mb-4">{p.desc}</p>
                      <div className="w-full bg-charcoal/5 rounded-full h-2">
                        <motion.div
                          className="bg-ilbirong h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p className="text-right text-xs text-charcoal/30 mt-1">{p.progress}%</p>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 애드루민 */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-4 h-4 bg-adlumin rounded-full" />
                <h3 className="text-lg font-bold">애드루민</h3>
                <span className="text-xs text-charcoal/40">김정혁 대표</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {PROJECTS.adlumin.map((p, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl p-5 shadow-sm border border-charcoal/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-sm text-charcoal">{p.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.progress >= 70 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal/50 mb-4">{p.desc}</p>
                      <div className="w-full bg-charcoal/5 rounded-full h-2">
                        <motion.div
                          className="bg-adlumin h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p className="text-right text-xs text-charcoal/30 mt-1">{p.progress}%</p>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━ 지금까지의 교환 ━━━━━━ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <p className="text-ggumsik font-semibold text-sm tracking-widest uppercase mb-3 text-center">Fair Exchange</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal text-center mb-12">서로 주고받은 것들</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-gradient-to-br from-ilbirong/5 via-adlumin/5 to-transparent rounded-2xl p-6 border border-charcoal/5">
                <h3 className="font-bold text-base mb-4 text-charcoal">꿈식판이 받은 것</h3>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li className="flex items-start gap-2"><span className="text-adlumin mt-0.5">&#10003;</span> 클로드 MAX 100 계정 x2 (월 $200 x2 상당)</li>
                  <li className="flex items-start gap-2"><span className="text-ilbirong mt-0.5">&#10003;</span> 꿈식판 브랜딩 디자인 (로고, 명함)</li>
                  <li className="flex items-start gap-2"><span className="text-ggumsik mt-0.5">&#10003;</span> 협력사 타이틀 & 시스템 컨설턴트라는 시작점</li>
                  <li className="flex items-start gap-2"><span className="text-ggumsik mt-0.5">&#10003;</span> 실전 프로젝트 경험 (포트폴리오)</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-ggumsik/5 to-transparent rounded-2xl p-6 border border-charcoal/5">
                <h3 className="font-bold text-base mb-4 text-charcoal">꿈식판이 드린 것</h3>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li className="flex items-start gap-2"><span className="text-ilbirong mt-0.5">&#10003;</span> 일비롱 캔바 스튜디오 개발</li>
                  <li className="flex items-start gap-2"><span className="text-ilbirong mt-0.5">&#10003;</span> 일비롱 자동 견적 계산기 개발</li>
                  <li className="flex items-start gap-2"><span className="text-ilbirong mt-0.5">&#10003;</span> 일비롱 온라인 주문서 시스템 개발</li>
                  <li className="flex items-start gap-2"><span className="text-adlumin mt-0.5">&#10003;</span> 애드루민 광고주 관리 시스템 개발</li>
                  <li className="flex items-start gap-2"><span className="text-adlumin mt-0.5">&#10003;</span> 애드루민 체험단 모집 사이트 개발</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8 bg-charcoal/3 rounded-xl p-5 text-center">
              <p className="text-charcoal/60 text-sm">
                여기까지는 <strong className="text-charcoal">감사의 교환</strong>이었습니다.<br />
                이제부터는 <strong className="text-ggumsik">지속 가능한 구조</strong>로 넘어가겠습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━ 앞으로의 구조 ━━━━━━ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-charcoal to-navy text-white">
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <p className="text-ggumsik font-semibold text-sm tracking-widest uppercase mb-3 text-center">Going Forward</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-4">앞으로의 협력 구조</h2>
            <p className="text-center text-white/50 max-w-lg mx-auto mb-14">
              서로 오래 좋게 가기 위한 3가지 원칙
            </p>
          </FadeIn>

          <div className="space-y-6">
            {/* 원칙 1 */}
            <FadeIn>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ggumsik flex items-center justify-center text-white font-bold text-sm">1</span>
                  <h3 className="text-lg font-bold">진행 중인 프로젝트는 끝까지 책임집니다</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  현재 MVP 상태인 5개 프로젝트를 <strong className="text-white">실제 업무에 사용 가능한 수준</strong>까지 완성합니다.
                  이건 약속이자, 지금까지 받은 것에 대한 저의 책임입니다.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-ilbirong text-xs font-bold mb-1">일비롱디자인</p>
                    <p className="text-white/50 text-xs">견적 계산기/주문서 실운영 수준으로 완성, 캔바 스튜디오 핵심 기능 구현</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-adlumin text-xs font-bold mb-1">애드루민</p>
                    <p className="text-white/50 text-xs">관리 시스템 안정화, 체험단 사이트 회원가입/캠페인 기능 구현</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 원칙 2 */}
            <FadeIn delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ggumsik flex items-center justify-center text-white font-bold text-sm">2</span>
                  <h3 className="text-lg font-bold">이후 프로젝트부터는 파트너 가격을 적용합니다</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  외부 고객 정가 대비 <strong className="text-gold">30% 파트너 할인</strong>을 적용합니다.
                  서로의 전문성에 정당한 가치를 매기는 것이 오래 가는 관계의 기본이라 생각합니다.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/40 font-medium">구분</th>
                        <th className="text-right py-2 text-white/40 font-medium">시장 평균</th>
                        <th className="text-right py-2 text-white/40 font-medium">꿈식판 정가</th>
                        <th className="text-right py-2 text-gold font-medium">파트너가</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-3">
                          <div className="font-medium text-white">단품 시스템 구축</div>
                          <div className="text-white/30 text-xs mt-0.5">업무 흐름 진단 → 단일 프로세스 설계 → 시스템 구현/배포</div>
                        </td>
                        <td className="text-right text-white/40">500~1,000만</td>
                        <td className="text-right">300만 원</td>
                        <td className="text-right text-gold font-bold">210만 원</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3">
                          <div className="font-medium text-white">풀 시스템 구축</div>
                          <div className="text-white/30 text-xs mt-0.5">전체 업무 구조 분석 → 통합 시스템 설계 → 구현/연동/배포</div>
                        </td>
                        <td className="text-right text-white/40">1,000~2,000만</td>
                        <td className="text-right">800만 원</td>
                        <td className="text-right text-gold font-bold">560만 원</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3">
                          <div className="font-medium text-white">유지보수 - 안심 케어 (월)</div>
                          <div className="text-white/30 text-xs mt-0.5">월 1회 시스템 점검 + 긴급 대응 + 운영 상담</div>
                        </td>
                        <td className="text-right text-white/40">50~100만</td>
                        <td className="text-right">30만 원</td>
                        <td className="text-right text-gold font-bold">20만 원</td>
                      </tr>
                      <tr>
                        <td className="py-3">
                          <div className="font-medium text-white">유지보수 - 성장 케어 (월)</div>
                          <div className="text-white/30 text-xs mt-0.5">월 2회 점검 + 프로세스 개선 1건 + 운영 데이터 기반 제안</div>
                        </td>
                        <td className="text-right text-white/40">100~200만</td>
                        <td className="text-right">70만 원</td>
                        <td className="text-right text-gold font-bold">50만 원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/25 text-xs mt-2">* 시장 평균: IT 에이전시/프리랜서 기준</p>
                <p className="text-white/30 text-xs mt-3">* 클로드 계정비, 서버비 등 실비는 별도</p>
              </div>
            </FadeIn>

            {/* 원칙 3 */}
            <FadeIn delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ggumsik flex items-center justify-center text-white font-bold text-sm">3</span>
                  <h3 className="text-lg font-bold">서로의 고객을 연결하면, 수익을 나눕니다</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  각자의 고객에게 파트너사 서비스를 소개하고, 계약이 성사되면 수익을 쉐어합니다.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { from: '일비롱', fromColor: 'text-ilbirong', arrow: '디자인 고객에게', to: '"시스템도 필요하시죠?"' },
                    { from: '애드루민', fromColor: 'text-adlumin', arrow: '광고 고객에게', to: '"랜딩페이지 있으세요?"' },
                    { from: '꿈식판', fromColor: 'text-ggumsik', arrow: '시스템 고객에게', to: '"디자인/광고도 연결해드릴까요?"' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                      <p className={`${item.fromColor} font-bold text-sm mb-1`}>{item.from}</p>
                      <p className="text-white/30 text-xs mb-2">{item.arrow}</p>
                      <p className="text-white/70 text-xs font-medium">{item.to}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gold/10 border border-gold/20 rounded-lg p-4">
                  <p className="text-gold text-sm font-semibold text-center">
                    소개로 성사된 프로젝트 → 소개자 30% : 실행자 70%
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 우선순위 로드맵 ━━━━━━ */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <p className="text-ggumsik font-semibold text-sm tracking-widest uppercase mb-3 text-center">Roadmap</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal text-center mb-12">프로젝트 완성 우선순위</h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              { phase: '1순위', period: '4~5월', items: ['일비롱 견적 계산기 실운영 완성', '일비롱 주문서 → 주문 확인/알림 연동', '애드루민 관리 시스템 안정화 + 실운영'], color: 'bg-red-500' },
              { phase: '2순위', period: '5~6월', items: ['애드루민 체험단 사이트 핵심 기능 구현', '일비롱 캔바 스튜디오 기본 편집 기능'], color: 'bg-amber-500' },
              { phase: '3순위', period: '6월~', items: ['추가 프로젝트 (파트너가 적용)', '외부 고객 소개 시 수익 쉐어 시작'], color: 'bg-green-500' },
            ].map((phase, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-charcoal/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`${phase.color} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{phase.phase}</span>
                    <span className="text-charcoal/40 text-sm">{phase.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-charcoal/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ 클로징 ━━━━━━ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-navy to-charcoal text-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <FadeIn>
            <div className="mb-8">
              <img src="/partners.jpg" alt="일비롱 x 애드루민 x 꿈식판" className="w-64 h-64 object-contain mx-auto rounded-2xl" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
              혼자 빠르게 가는 것보다<br />
              <span className="text-ggumsik">함께 멀리 가겠습니다.</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-4">
              두 분 덕분에 시작할 수 있었습니다.<br />
              앞으로는 서로의 성장이 서로의 수익이 되는 구조로,<br />
              오래오래 함께 하고 싶습니다.
            </p>
            <p className="text-ggumsik font-bold text-lg mt-8">
              시스템 컨설턴트 · 꿈식맨
            </p>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-charcoal py-6 text-center">
        <p className="text-white/20 text-xs">&copy; 2026 꿈식판 x 일비롱디자인 x 애드루민 · Partnership Proposal</p>
      </footer>
    </div>
  )
}
