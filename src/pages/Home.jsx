import { useScrollReveal } from '../hooks/useScrollReveal'
import HeroSlideshow from '../components/HeroSlideshow'
import MarqueeBanner from '../components/MarqueeBanner'
import SignatureSection from '../components/SignatureSection'
import FeaturedDrink from '../components/FeaturedDrink'
import StorySection from '../components/StorySection'
import CategoriesSection from '../components/CategoriesSection'
import PillarsSection from '../components/PillarsSection'
import ExperienceSection from '../components/ExperienceSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTABanner from '../components/CTABanner'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <HeroSlideshow />
      <MarqueeBanner />
      <SignatureSection />
      <FeaturedDrink />
      <StorySection />
      <CategoriesSection />
      <PillarsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  )
}
