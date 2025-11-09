import Hero from '@/components/Hero'
import TheChallenge from '@/components/TheChallenge'
import TheSolution from '@/components/TheSolution'
import HowItWorks from '@/components/HowItWorks'
import Context from '@/components/Context'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#F7F5F2]">
      <Hero />

      <TheChallenge />

      <TheSolution />

      <HowItWorks />

      <Context />
      
      <Footer />
      </main>
  );
}
