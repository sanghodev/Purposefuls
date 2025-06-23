import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Heart, 
  Users, 
  Leaf, 
  GraduationCap, 
  Brain, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  CheckCircle,
  Award,
  Palette,
  Shirt,
  Coffee,
  Gift,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import potteryHero from './assets/pottery-hero.png'
import potteryGallery from './assets/pottery-gallery.jpg'
import tshirtHero from './assets/tshirt-hero.png'
import tshirtGallery from './assets/tshirt-gallery.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'products', 'impact', 'artisans', 'team', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-800">Purposefuls</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'story', label: 'Our Story' },
                { id: 'products', label: 'Products' },
                { id: 'impact', label: 'Our Impact' },
                { id: 'artisans', label: 'Artisans' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-green-800 bg-green-50'
                      : 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-green-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'story', label: 'Our Story' },
              { id: 'products', label: 'Products' },
              { id: 'impact', label: 'Our Impact' },
              { id: 'artisans', label: 'Artisans' },
              { id: 'team', label: 'Team' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  activeSection === item.id
                    ? 'text-green-800 bg-green-50'
                    : 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )

  const HeroSection = () => (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Social Enterprise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Meaningful Gifts,{' '}
                <span className="text-green-700">World-Changing</span>{' '}
                Impact
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Inspiring Your Everyday, Empowering the Eastern US Community
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Purposefuls crafts custom products that bring beauty and meaning to your daily life. 
                Every purchase contributes directly to positive change - we donate{' '}
                <span className="font-bold text-green-700">25% of all profits</span> to community 
                initiatives across the Eastern US.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => scrollToSection('products')}
                >
                  Shop Our Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('story')}
                >
                  Discover Our Story
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">25%</div>
                <div className="text-sm text-gray-600">Profits Donated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Handcrafted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Focus Areas</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={potteryHero} 
                alt="Beautiful handcrafted pottery" 
                className="rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <img 
                src={tshirtHero} 
                alt="Custom inspirational t-shirts" 
                className="rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium">Made with Purpose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const StorySection = () => (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey of Inspiration and Giving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in Forest Hills, Queens, New York, Purposefuls is more than a business - 
            we're a movement toward conscious consumption and community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed">
              Purposefuls is a social enterprise with a profound commitment to creating positive change. 
              We craft custom products that infuse everyday life with beauty and meaning. More than just 
              items, our products carry inspiring messages and embody our dedication to community upliftment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We embrace the modern consumer trend of value-aligned purchasing, offering products that 
              resonate personally while contributing to a greater good.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-8">
            <h4 className="text-xl font-bold text-green-800 mb-4">Our Mission</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">Create Inspiring Products</h5>
                  <p className="text-gray-700 text-sm">
                    High-quality, customizable lifestyle goods adorned with positive and meaningful messages.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">Empower Eastern US Communities</h5>
                  <p className="text-gray-700 text-sm">
                    25% of profits support education, environmental conservation, and mental health initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Authenticity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Transparency and genuine impact are at the core of everything we do.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Palette className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Craftsmanship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                We collaborate with talented artisans to ensure exceptional quality and artistic integrity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Dedicated to being an active and supportive member of the Eastern US community.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Inspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Our products inspire individuals to recognize their potential and live with purpose.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )

  const ProductsSection = () => (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each product is thoughtfully designed to inspire and uplift, carrying messages of 
            positivity while supporting our community mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Coffee className="h-24 w-24 text-orange-600 mx-auto mt-8 mb-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">Inspiring Pottery</CardTitle>
              <CardDescription className="mb-4">
                Cups, plates, and small dishes crafted with meaningful messages and beautiful designs.
              </CardDescription>
              <Button variant="outline" className="w-full group-hover:bg-orange-50">
                View Collection
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Gift className="h-24 w-24 text-purple-600 mx-auto mt-8 mb-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">Meaningful Accessories</CardTitle>
              <CardDescription className="mb-4">
                Personalized jewelry and keychains that carry your values wherever you go.
              </CardDescription>
              <Button variant="outline" className="w-full group-hover:bg-purple-50">
                View Collection
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Shirt className="h-24 w-24 text-blue-600 mx-auto mt-8 mb-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">Custom T-Shirts</CardTitle>
              <CardDescription className="mb-4">
                Wear your purpose with custom designs that inspire and make a statement.
              </CardDescription>
              <Button variant="outline" className="w-full group-hover:bg-blue-50">
                View Collection
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Palette className="h-24 w-24 text-green-600 mx-auto mt-8 mb-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">Art for Life</CardTitle>
              <CardDescription className="mb-4">
                Home decor items that transform your space with beauty and positive energy.
              </CardDescription>
              <Button variant="outline" className="w-full group-hover:bg-green-50">
                View Collection
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Star className="h-12 w-12 text-yellow-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Meaningful Design</h4>
                <p className="text-gray-600 text-sm text-center">
                  Every product carries a message of inspiration and positivity.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-orange-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Artisan Craftsmanship</h4>
                <p className="text-gray-600 text-sm text-center">
                  High-quality, handcrafted items made in collaboration with local artisans.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="h-12 w-12 text-red-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Transparent Giving</h4>
                <p className="text-gray-600 text-sm text-center">
                  A clear commitment to making tangible, positive impact in Eastern US communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const ImpactSection = () => (
    <section id="impact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Purchase, Our Purpose
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Purposefuls dedicates 25% of all profits to community initiatives across the Eastern US. 
            Your support directly fuels positive change, fostering stronger, healthier, and more vibrant communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white">
            <CardHeader>
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Education & Youth Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Supporting programs that provide educational resources, mentorship, and skill-building 
                opportunities for young people across the Eastern US.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">$45,000+</div>
                <div className="text-sm text-gray-600">Donated to Education</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-xl">Environmental Conservation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Contributing to initiatives focused on protecting natural habitats, promoting 
                sustainability, and fostering a healthier planet for future generations.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">$32,000+</div>
                <div className="text-sm text-gray-600">Environmental Impact</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <Brain className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl">Mental Health & Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Providing resources and support for mental health services, wellness programs, 
                and advocacy for vulnerable populations in our communities.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">$28,000+</div>
                <div className="text-sm text-gray-600">Wellness Support</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Transparency Commitment</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Annual impact reports with detailed financial breakdowns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Form 990 available for public download</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Real-time updates on fundraising goals and projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Partner organization spotlights and achievements</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Stories</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic mb-2">
                  "Thanks to Purposefuls' support, we were able to provide after-school tutoring 
                  to 150 students in underserved communities across New York."
                </p>
                <p className="text-sm text-gray-600">- Brooklyn Education Initiative</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 italic mb-2">
                  "The funding helped us plant 500 trees and create three community gardens 
                  in Connecticut neighborhoods."
                </p>
                <p className="text-sm text-gray-600">- Green Future Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const ArtisansSection = () => (
    <section id="artisans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where Artistry Meets Purpose
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to exceptional quality and unique character comes through collaboration 
            with talented artisans who bring their expertise and passion to every piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={potteryGallery} 
              alt="Artisan crafting pottery" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Artisans</h3>
            <p className="text-gray-700 leading-relaxed">
              We partner with skilled craftspeople who bring their expertise and passion to every piece, 
              ensuring that each item is not just a product, but a work of art. This commitment to local 
              craftsmanship not only guarantees superior quality but also supports the vibrant artisan 
              communities in the Eastern US.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Partner Artisans</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Handcrafted</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Coffee className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Pottery Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                High-quality ceramic materials, meticulously shaped and fired. Designs applied using 
                advanced ceramic decal printing for vibrant, durable finishes.
              </p>
              <Badge variant="secondary">Ceramic Decal Printing</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Gift className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Precision Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Metal accessories feature precise laser engraving, creating intricate and permanent 
                designs that withstand daily wear while maintaining their beauty.
              </p>
              <Badge variant="secondary">Laser Engraving</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shirt className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Premium Textiles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                High-quality fabrics customized with sublimation printing, infusing dye directly 
                into fabric for designs that won't crack, peel, or fade.
              </p>
              <Badge variant="secondary">Sublimation Printing</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quality Assurance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Process</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Rigorous material selection and testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Multi-stage quality control inspections</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Precision in design application and finishing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Guarantee</h4>
              <p className="text-gray-700 mb-4">
                We are committed to delivering products that become cherished keepsakes. Our rigorous 
                quality control ensures that every item meets the highest standards of excellence, from 
                the durability of materials to the precision of design application.
              </p>
              <p className="text-gray-700 font-medium">
                When you choose Purposefuls, you choose lasting quality and enduring meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const TeamSection = () => (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Purposefuls Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every meaningful product and every donation made, there's a dedicated team 
            committed to our mission. Get to know the individuals who bring Purposefuls to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle>Elliot Kim</CardTitle>
              <CardDescription>Founder & CEO</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Elliot is the visionary behind Purposefuls, driven by a lifelong passion for art and 
                social justice. With a background in design and community development, he founded 
                Purposefuls to create a sustainable model for giving back.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Palette className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle>David Lee</CardTitle>
              <CardDescription>Head of Product Design</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                A master artisan with over 15 years of experience in ceramics and graphic design, 
                David leads our product development. He meticulously crafts each design, ensuring 
                every quote and image resonates with our customers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
              <CardTitle>Maria Rodriguez</CardTitle>
              <CardDescription>Community Outreach Director</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Maria is our bridge to incredible non-profit organizations across the Eastern US. 
                With a deep understanding of community needs and a heart for service, she ensures 
                our donations reach the most impactful programs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-orange-600" />
              </div>
              <CardTitle>James Kim</CardTitle>
              <CardDescription>Operations & Production Lead</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                James oversees the intricate process of bringing our products from concept to creation. 
                His expertise in production techniques guarantees the high quality and efficiency 
                that Purposefuls is known for.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="h-12 w-12 text-pink-600" />
              </div>
              <CardTitle>Emily White</CardTitle>
              <CardDescription>Marketing & Storytelling Manager</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Emily is the voice of Purposefuls, sharing our mission and products with the world. 
                She crafts compelling narratives that highlight the impact of every purchase, 
                connecting customers to meaningful change.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-teal-600" />
              </div>
              <CardTitle>Michael Brown</CardTitle>
              <CardDescription>Customer Experience Specialist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Michael is dedicated to ensuring every Purposefuls customer has an exceptional experience. 
                From answering inquiries to gathering feedback, he builds lasting relationships and 
                fosters a community of conscious consumers.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white inline-block p-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="h-12 w-12 text-gray-600" />
            </div>
            <CardTitle className="mb-2">Sangho Kim</CardTitle>
            <CardDescription className="mb-4">Corporate Business Advisor</CardDescription>
            <p className="text-gray-600 text-sm max-w-md">
              Sangho provides strategic guidance and business expertise, helping Purposefuls navigate 
              growth while maintaining our commitment to social impact and community empowerment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )

  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    })

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle form submission here
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      })
    }

    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We'd Love to Hear From You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have a question about our products, a suggestion for a community initiative, 
              or just want to share your Purposefuls story, we're here to listen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="product">Product Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="partnership">Partnership Proposal</option>
                        <option value="feedback">General Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                      Send Message
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">Forest Hills, Queens, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@purposefuls.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operating Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    All times are Eastern Time (ET)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Signup</CardTitle>
                  <CardDescription>
                    Be the first to know about new collections, exclusive offers, and inspiring 
                    stories of impact from our Eastern US community partners.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1"
                    />
                    <Button className="bg-green-700 hover:bg-green-800">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Purposefuls</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Crafting meaningful products that inspire your everyday while empowering Eastern US 
              communities through our commitment to donate 25% of all profits to vital initiatives.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                Facebook
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('story')} className="text-gray-300 hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => scrollToSection('impact')} className="text-gray-300 hover:text-white transition-colors">Our Impact</button></li>
              <li><button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-white transition-colors">Team</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Purposefuls. All rights reserved. | Forest Hills, Queens, NY
          </p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <ImpactSection />
      <ArtisansSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App

