import HeroSection from '@/components/HeroSection';
import PersonCard from '@/components/PersonCard';
import AnalystCard from '@/components/AnalystCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroImage from '@/assets/hero-singapore.jpg';

const leadership = [
  { name: 'Sean Wong', role: 'Co-Head of Total Portfolios', email: 'sean@u.nus.edu', linkedIn: 'https://linkedin.com', headshot: '/people/sean-wong.jpg' },
  { name: 'Rave Lai', role: 'Co-Head of Total Portfolios', email: 'rave@u.nus.edu', linkedIn: 'https://linkedin.com', headshot: '/people/rave-lai.jpg' },
  { name: 'Jerry Z', role: 'Leadership', email: 'jerry@u.nus.edu', linkedIn: 'https://linkedin.com', headshot: '/people/jerry-z.jpg' },
];

const investingPods = [
  {
    name: 'L/S Equities',
    description: 'Our Long/Short Equities pod pursues alpha through both long and short positions across Singapore and global equity markets. Combining fundamental analysis with thematic conviction, the team identifies mispriced securities and relative value opportunities, deploying a blend of L/S, Event-Driven, and Relative Value strategies.',
    members: [
      { name: 'Abdullah Armain', role: 'Portfolio Manager, L/S Equities', email: 'e1399126@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/abdullah-armain-078052189/', headshot: '/people/abdullah-armain.jpg' },
      { name: 'Wong Zhao Yang', role: 'Portfolio Manager, L/S Equities', email: 'wongzhaoyang@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/wongzhaoyang/', headshot: '/people/wong-zhao-yang.jpg' },
    ],
    analysts: [
      { name: 'Zhi Heng', email: 'fong.zhi.heng@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/fongzhiheng/' },
      { name: 'Brandon', email: 'brandonlim@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/brandonlimcy/' },
      { name: 'Yan Xiang', email: 'gian_yanxiang@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/gianyanxiang7/' },
      { name: 'Roghan', email: 'roghan.bharathkumar@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/roghan-bharathkumar/' },
      { name: 'Sunny', email: '1528238@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/s-nishant-vats/' },
      { name: 'Wesley Lim', email: 'wesleylim@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/wesleylimchzelee/' },
      { name: 'Gong Zekai', email: 'Gong@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/zekaigong/' },
      { name: 'Toh Xian Zong', email: 'e1398634@u.nus.edu' },
      { name: 'Qiyang', email: 'Ke_qiyang@u.nus.edu' },
      { name: 'Lara', email: 'larawong@u.nus.edu' },
      { name: 'Ron', email: 'ronangjy@u.nus.edu' },
    ],
  },
  {
    name: 'Global Macro',
    description: 'The Global Macro pod exercises discretion over the FICC portfolio, deploying macro hedge fund strategies to generate absolute returns across fixed income, currencies, and equity index instruments — regardless of investment climate.',
    members: [
      { name: 'Wen Jun', role: 'Portfolio Manager, Global Macro', email: 'wenjun.ye@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/jadon-wenjun-ye/', headshot: '/people/ye-wen-jun.jpg' },
      { name: 'Guo Xuan', role: 'Portfolio Manager, Global Macro', email: 'guoxuan@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/guo-xuan-koh/', headshot: '/people/guo-xuan.JPG' },
    ],
    analysts: [
      { name: 'Davin', email: 'davinchang@u.nus.edu' },
      { name: 'Bernard', email: 'E1408760@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/bernard-kwee/' },
      { name: 'Arthava', email: 'e1398424@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/atharvamulik/' },
      { name: 'Joash', email: 'e0957928@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/joash-lim-634292223/' },
    ],
  },
  {
    name: 'Commodities',
    description: 'The Commodities pod focuses on the identification and execution of trading strategies across energy and metals markets. Grounded in both micro and macro fundamentals, the team brings deep specialisation and dedicated rigour.',
    members: [
      { name: 'Chew Jinn Ming', role: 'Portfolio Manager, Commodities', email: 'chew.jinnming@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/chew-jinn-ming/', headshot: '/people/chew-jinn-ming.jpg' },
    ],
    analysts: [
      { name: 'Gerald', email: 'ce1186154@u.nus.edu' },
      { name: 'Pu Huan', email: 'pzhu@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/zhu-puhuan-hank-a9a839299/' },
    ],
  },
  {
    name: 'Systematic Strategies',
    description: 'The Systematic Strategies pod embeds quantitative and data-driven analysis into the fund\'s investment and portfolio decisions. The team supports the asset pods by providing a quantitative dimension to market views.',
    members: [
      { name: 'Chet Wee', role: 'Head of Systematic Strategies', email: 'chetweepe@gmail.com', linkedIn: 'https://www.linkedin.com/in/cwpe/', headshot: '/people/poo-chet-wee.jpg' },
    ],
    analysts: [
      { name: 'Analyst 1', email: 'analyst1@u.nus.edu', linkedIn: 'https://linkedin.com' },
    ],
  },
];

const operationsPods = [
  {
    name: 'Risk & Infrastructure',
    members: [
      { name: 'Senyi', role: 'Head of Risk & Infrastructure', email: 'senyi@u.nus.edu', linkedIn: 'https://linkedin.com', headshot: '/people/senyi.jpg' },
      { name: 'Enzo Chung', role: 'Head of Infra', email: 'enzo.chung@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/enzochung/', headshot: '/people/enzo-chung.jpg' },
    ],
    analysts: [
      { name: 'Jia Yun', email: 'jiayun.li@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/jiayun-li-nus/' },
      { name: 'Jun Yang', email: 'limjunyang@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/jun-yang-lim/' },
      { name: 'Qiao En', email: 'e1523469@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/qiao-enn-chew261/' },
      { name: 'Elina (Ling Xue)', email: 'E1304487@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/elinayilingxue/' },
      { name: 'Samuel', email: 'E1357105@u.nus.edu' },
      { name: 'Gabriel', email: 'gabrieltang@u.nus.edu' },
      { name: 'Justin Cheong', email: 'justin.cheong@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/justin-cheong-534aa51aa/' },
      { name: 'Daron', email: 'e1121489@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/daron-oh/' },
      { name: 'Wai Hin', email: 'wongwaihin@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/wai-hin-wong26/' },
      { name: 'Kiefer', email: 'kiefer.ong@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/kiefer-ong/' },
      { name: 'Madhu', email: 'madhu_polluru@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/madhu-polluru/' },
      { name: 'Jia Wei', email: 'jiawei.wong21@gmail.com' },
      { name: 'Jason', email: 'jian.li@u.nus.edu' },
      { name: 'Yi Han', email: 'zhangyihan@u.nus.edu' },
      { name: 'Belle', email: 'christabelle.lee@u.nus.edu', linkedIn: 'https://www.linkedin.com/in/christabellelee/' },
    ],
  },
  {
    name: 'Externals',
    members: [
      { name: 'Davin', role: 'Head of Externals', email: 'davinchang@u.nus.edu', headshot: '/people/davin.jpg' },
    ],
    analysts: [
      { name: 'Jonathan Goh', email: 'jonathan.goh@u.nus.edu' },
      { name: 'Ariel', email: 'e1354950@u.nus.edu' },
    ],
  },
  {
    name: 'Fund Development',
    members: [
      { name: 'Helena', role: 'Fund Development Director', email: 'helena.tan@u.nus.edu', headshot: '/people/helena.jpg' },
    ],
    analysts: [
      { name: 'Rui Wen', email: 'e1669001@u.nus.edu' },
      { name: 'Brenda', email: 'brendajchen@u.nus.edu' },
      { name: 'YiFei', email: 'chuayifei@u.nus.edu' },
    ],
  },
];

export default function PeoplePage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        image={heroImage}
        title="Our People"
        subtitle="A student-led investment fund's most important asset is the quality and passion of its people."
      />

      {/* Advisors */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <h2 className="heading-section mb-3 fade-up">Senior Advisors</h2>
          <p className="body-text max-w-2xl mb-16 fade-up" style={{ transitionDelay: '0.1s' }}>
            Guided by industry practitioners with decades of experience in global finance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-1">
              <h3 className="font-display font-medium text-foreground text-xl">Adjunct Professor James Cheng</h3>
              <p className="eyebrow">Senior Advisor</p>
              <p className="body-text mt-2 text-sm">Previously CEO & Senior Advisor to Morgan Stanley Investment Management, and CIO at Invesco Asia.</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-medium text-foreground text-xl">Kwan Ng</h3>
              <p className="eyebrow">Senior Advisor</p>
              <p className="body-text mt-2 text-sm">Currently Portfolio Manager at ExodusPoint. Formerly Senior Portfolio Manager at BlueCrest Capital Management, Head of FX Trading at Barclays, and Trader at Millennium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding bg-muted/50">
        <div className="container-site">
          <p className="eyebrow mb-4 fade-up">Leadership</p>
          <h2 className="heading-section mb-3 fade-up">NUSSIF Leadership Team</h2>
          <p className="body-text max-w-3xl mb-16 fade-up" style={{ transitionDelay: '0.1s' }}>
            The NUSSIF Leadership Team is responsible for setting the overall strategic and long-term direction of the society, as well as fund performance and risk management.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 fade-up" style={{ transitionDelay: '0.2s' }}>
            {leadership.map((m) => (
              <PersonCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Investing Teams */}
      <section id="investing" className="section-padding bg-background">
        <div className="container-site">
          <p className="eyebrow mb-4 fade-up">Investing</p>
          <h2 className="heading-section mb-3 fade-up">Investing Teams</h2>
          <p className="body-text max-w-3xl mb-16 fade-up" style={{ transitionDelay: '0.1s' }}>
            Four specialist pods operating across global equities, macro, commodities, and systematic strategies — each pod lean, accountable, and responsible for their own returns.
          </p>

          {investingPods.map((pod, i) => (
            <div key={pod.name} className="mb-20 last:mb-0 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="heading-sub mb-3">{pod.name}</h3>
              <p className="body-text max-w-3xl mb-10">{pod.description}</p>
              
              {/* Portfolio Managers */}
              <p className="eyebrow mb-6 text-gold">Portfolio Managers</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {pod.members.map((m) => (
                  <PersonCard key={m.name} {...m} />
                ))}
              </div>

              {/* Analysts */}
              {pod.analysts && pod.analysts.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="eyebrow mb-6">Analysts</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pod.analysts.map((a, j) => (
                      <AnalystCard key={`${a.name}-${j}`} {...a} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Operations */}
      <section id="operations" className="section-padding bg-muted/50">
        <div className="container-site">
          <p className="eyebrow mb-4 fade-up">Operations</p>
          <h2 className="heading-section mb-3 fade-up">Operations Teams</h2>
          <p className="body-text max-w-3xl mb-16 fade-up" style={{ transitionDelay: '0.1s' }}>
            The backbone of the fund — ensuring robust infrastructure, stakeholder engagement, and long-term fund development.
          </p>

          {operationsPods.map((pod, i) => (
            <div key={pod.name} className="mb-20 last:mb-0 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="heading-sub mb-10">{pod.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {pod.members.map((m) => (
                  <PersonCard key={m.name} {...m} />
                ))}
              </div>

              {/* Analysts */}
              {pod.analysts && pod.analysts.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="eyebrow mb-6">Analysts</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pod.analysts.map((a, j) => (
                      <AnalystCard key={`${a.name}-${j}`} {...a} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Trainee note */}
      <section className="py-20 bg-muted/30">
        <div className="container-site text-center">
          <p className="font-display italic text-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            "Outstanding Trainee Analysts from the Execution Track will be invited to join the Investing Teams. Trainee Analyst cohort members are not listed here pending graduation from the programme."
          </p>
        </div>
      </section>
    </div>
  );
}
