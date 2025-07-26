'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  DialogHeader,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  AlignJustify,
  CircleQuestionMark,
  Globe,
  Languages,
  X,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const imageCards = [
  {
    id: 1,
    img: '/home.png',
    title: 'Home',
  },
  {
    id: 2,
    img: '/experiences.png',
    title: 'Experiences',
  },
  {
    id: 3,
    img: '/services.png',
    title: 'Services',
  },
]

const languages = [
  { id: 1, title: 'English', country: 'United States' },
  { id: 2, title: 'Spanish', country: 'Spain' },
  { id: 3, title: 'French', country: 'France' },
  { id: 4, title: 'Khmer', country: 'Cambodia' },
  { id: 5, title: 'Japanese', country: 'Japan' },
  { id: 6, title: 'Mandarin', country: 'China' },
  { id: 7, title: 'Hindi', country: 'India' },
  { id: 8, title: 'Arabic', country: 'Egypt' },
  { id: 9, title: 'German', country: 'Germany' },
  { id: 10, title: 'Portuguese', country: 'Brazil' },
  { id: 11, title: 'Russian', country: 'Russia' },
  { id: 12, title: 'Italian', country: 'Italy' },
  { id: 13, title: 'Korean', country: 'South Korea' },
  { id: 14, title: 'Dutch', country: 'Netherlands' },
  { id: 15, title: 'Swedish', country: 'Sweden' },
  { id: 16, title: 'Norwegian', country: 'Norway' },
  { id: 17, title: 'Finnish', country: 'Finland' },
  { id: 18, title: 'Greek', country: 'Greece' },
  { id: 19, title: 'Polish', country: 'Poland' },
  { id: 20, title: 'Thai', country: 'Thailand' },
  { id: 21, title: 'Vietnamese', country: 'Vietnam' },
  { id: 22, title: 'Turkish', country: 'Turkey' },
  { id: 23, title: 'Hebrew', country: 'Israel' },
  { id: 24, title: 'Persian', country: 'Iran' },
  { id: 25, title: 'Czech', country: 'Czech Republic' },
  { id: 26, title: 'Romanian', country: 'Romania' },
  { id: 27, title: 'Ukrainian', country: 'Ukraine' },
  { id: 28, title: 'Malay', country: 'Malaysia' },
  { id: 29, title: 'Burmese', country: 'Myanmar' },
  { id: 30, title: 'Swahili', country: 'Kenya' },
]

const currency = [
  { id: 1, title: 'United States dollar', currency: 'USD - $' },
  { id: 2, title: 'Euro', currency: 'EUR - €' },
  { id: 3, title: 'Euro', currency: 'EUR - €' },
  { id: 4, title: 'Cambodian riel', currency: 'KHR - ៛' },
  { id: 5, title: 'Japanese yen', currency: 'JPY - ¥' },
  { id: 6, title: 'Renminbi', currency: 'CNY - ¥' },
  { id: 7, title: 'Indian rupee', currency: 'INR - ₹' },
  { id: 8, title: 'Egyptian pound', currency: 'EGP - £' },
  { id: 9, title: 'Euro', currency: 'EUR - €' },
  { id: 10, title: 'Brazilian real', currency: 'BRL - R$' },
  { id: 11, title: 'Russian ruble', currency: 'RUB - ₽' },
  { id: 12, title: 'Euro', currency: 'EUR - €' },
  { id: 13, title: 'South Korean won', currency: 'KRW - ₩' },
  { id: 14, title: 'Euro', currency: 'EUR - €' },
  { id: 15, title: 'Swedish krona', currency: 'SEK - kr' },
  { id: 16, title: 'Norwegian krone', currency: 'NOK - kr' },
  { id: 17, title: 'Euro', currency: 'EUR - €' },
  { id: 18, title: 'Euro', currency: 'EUR - €' },
  { id: 19, title: 'Polish złoty', currency: 'PLN - zł' },
  { id: 20, title: 'Thai baht', currency: 'THB - ฿' },
  { id: 21, title: 'Vietnamese đồng', currency: 'VND - ₫' },
  { id: 22, title: 'Turkish lira', currency: 'TRY - ₺' },
  { id: 23, title: 'Israeli new shekel', currency: 'ILS - ₪' },
  { id: 24, title: 'Iranian rial', currency: 'IRR - ﷼' },
  { id: 25, title: 'Czech koruna', currency: 'CZK - Kč' },
  { id: 26, title: 'Romanian leu', currency: 'RON - lei' },
  { id: 27, title: 'Ukrainian hryvnia', currency: 'UAH - ₴' },
  { id: 28, title: 'Malaysian ringgit', currency: 'MYR - RM' },
  { id: 29, title: 'Burmese kyat', currency: 'MMK - K' },
  { id: 30, title: 'Kenyan shilling', currency: 'KES - KSh' },
]

const Header = () => {
  const pathname = usePathname()
  const [clicked, setClicked] = useState(null)
  const [pickedLanguage, setPickedLanguage] = useState(null)
  const handleClick = id => {
    setClicked(id)
  }
  const handleClickTab = value => {
    setClicked(value)
  }
  const handleLanguage = id => {
    setPickedLanguage(id)
  }
  return (
    <div className='flex flex-row justify-between mb-10'>
      <div className='mr-40'>
        <Image
          src='/airbnb-logo.png'
          alt='Airbnb Logo'
          width={100}
          height={30}
        />
      </div>
      <div className='flex flex-row gap-5'>
        <Link
          href='/'
          className={
            pathname === '/'
              ? 'flex flex-row gap-2 items-center border-b-3 font-bold border-black'
              : 'flex flex-row gap-2 items-center text-gray-700 border-b-3 border-transparent'
          }
        >
          <Image src='/home.png' alt='home png' width={40} height={40} />
          Homes
        </Link>
        <Link
          href='/experiences'
          className={
            pathname === '/experiences'
              ? 'flex flex-row gap-2 items-center border-b-3 font-bold border-black'
              : 'flex flex-row gap-2 items-center text-gray-700 border-b-3 border-transparent'
          }
        >
          <Image src='/experiences.png' alt='home png' width={40} height={40} />
          Experiences
        </Link>
        <Link
          href='/services'
          className={
            pathname === '/services'
              ? 'flex flex-row gap-2 items-center border-b-3 font-bold border-black'
              : 'flex flex-row gap-2 items-center text-gray-700 border-b-3 border-transparent'
          }
        >
          <Image src='/services.png' alt='home png' width={40} height={40} />
          Services
        </Link>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant='ghost'
                  className='rounded-full cursor-pointer text-md w-34'
                >
                  Become a host
                </Button>
              </DialogTrigger>
              <DialogContent className='[&>button:last-child]:hidden sm:max-w-[425px] md:max-w-[1050px] flex flex-col py-5 rounded-3xl bg-white'>
                <DialogClose asChild>
                  <X size={20} className='cursor-pointer' />
                </DialogClose>
                <DialogHeader>
                  <DialogTitle className='text-2xl w-full py-5 flex items-center justify-center'>
                    What would you like to host?
                  </DialogTitle>
                </DialogHeader>
                <div className='flex flex-row gap-5 w-full py-5 px-3'>
                  {imageCards.map(card => (
                    <div key={card.id}>
                      <Card
                        className={`w-full h-85 px-25 justify-center items-center font-bold cursor-pointer 
                          ${
                            clicked === card.id ? 'border-black border-2' : ''
                          }`}
                        onClick={() => handleClick(card.id)}
                      >
                        <Image
                          src={card.img}
                          alt={card.title}
                          width={120}
                          height={120}
                        />
                        {card.title}
                      </Card>
                    </div>
                  ))}
                </div>

                <Separator className='w-full' />
                <div className='flex items-end justify-end'>
                  <DialogClose asChild>
                    <Button className='w-27 h-12 text-md cursor-pointer'>
                      Next
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </form>
          </Dialog>
        </div>
        <div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <div className='p-2.5 bg-[#EFEFEF] rounded-full cursor-pointer hover:bg-[#E6E6E6]'>
                  <Globe className='w-4 h-4' />
                </div>
              </DialogTrigger>
              <DialogContent className='[&>button:last-child]:hidden sm:max-w-[425px] md:max-w-[1050px] flex flex-col py-5 rounded-3xl md:max-h-[40rem] overflow-scroll bg-white'>
                <Tabs defaultValue='languageAndRegion'>
                  <div className='sticky top-0 bg-white'>
                    <DialogClose asChild>
                      <X size={20} className='cursor-pointer' />
                    </DialogClose>

                    <DialogHeader>
                      <DialogTitle className='pt-7'>
                        <TabsList className='bg-transparent p-0 m-0 border-0 flex gap-5'>
                          <TabsTrigger
                            value='languageAndRegion'
                            className='border-0 p-0 m-0 data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:border-0'
                          >
                            <div
                              className={`cursor-pointer pb-4 text-left ${
                                clicked === 'languageAndRegion'
                                  ? 'border-b-2 border-black font-semibold'
                                  : 'hover:text-gray-700'
                              }`}
                              onClick={() =>
                                handleClickTab('languageAndRegion')
                              }
                            >
                              Language and Region
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value='currency'
                            className='border-0 p-0 m-0 data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:border-0'
                          >
                            <div
                              className={`cursor-pointer pb-4 text-left ${
                                clicked === 'currency'
                                  ? 'border-b-2 border-black font-semibold'
                                  : 'hover:text-gray-700'
                              }`}
                              onClick={() => handleClickTab('currency')}
                            >
                              Currency
                            </div>
                          </TabsTrigger>
                        </TabsList>
                        <Separator className='m-0 p-0' />
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                  <TabsContent value='languageAndRegion'>
                    <div className='flex flex-row items-center gap-5 w-120 p-3 mt-5 bg-[#F5F5F5] rounded-md justify-center'>
                      <div>
                        <Label htmlFor='translation' className='text-md pb-2'>
                          Translation <Languages className='w-4 h-4' />
                        </Label>
                        <div className='text-sm text-gray-600'>
                          Automatically translate descriptions and reviews to
                          English.
                        </div>
                      </div>
                      <Switch id='translation' className='cursor-pointer' />
                    </div>
                    <div className='text-xl pt-10 pb-5 font-semibold'>
                      Suggested language and region
                    </div>
                    <div className='px-4 py-2 hover:bg-[#F5F5F5] rounded-md w-45 text-sm'>
                      <p>English</p>
                      <p className='text-gray-600'>United Kingdom</p>
                    </div>
                    <div className='text-xl pt-7 pb-5 font-semibold'>
                      Choose a language and region
                    </div>
                    <div className='grid grid-cols-5 gap-4'>
                      {languages.map(language => (
                        <div
                          key={language.id}
                          className={`px-4 py-2 hover:bg-[#F5F5F5] rounded-md w-45 text-sm ${
                            pickedLanguage === language.id
                              ? 'border-1 border-black'
                              : 'border-1 border-transparent'
                          }`}
                          onClick={() => handleLanguage(language.id)}
                        >
                          <p>{language.title}</p>
                          <p className='text-gray-600'>{language.country}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value='currency'>
                    <div className='text-xl pt-7 pb-5 font-semibold'>
                      Choose a currency
                    </div>
                    <div className='grid grid-cols-5 gap-4'>
                      {currency.map(currency => (
                        <div
                          key={currency.id}
                          className={`px-4 py-2 hover:bg-[#F5F5F5] rounded-md w-45 text-sm ${
                            pickedLanguage === currency.id
                              ? 'border-1 border-black'
                              : 'border-1 border-transparent'
                          }`}
                          onClick={() => handleLanguage(currency.id)}
                        >
                          <p>{currency.title}</p>
                          <p className='text-gray-600'>{currency.currency}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className='p-2.5 bg-[#EFEFEF] rounded-full cursor-pointer hover:bg-[#E6E6E6]'>
              <AlignJustify className='w-4 h-4' />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-70 mt-5 py-3 px-5'>
            <DropdownMenuItem>
              <CircleQuestionMark /> Help Center
            </DropdownMenuItem>
            <DropdownMenuSeparator className='mx-1.5' />
            <DropdownMenuItem>
              <div>
                <div className='font-semibold'>Become a host</div>
                <div className='text-gray-700 text-xs'>
                  It&apos;s easy to start hosting and earn extra income.
                </div>
              </div>
              <Image src='/home.png' width={50} height={50} alt='home' />
            </DropdownMenuItem>
            <DropdownMenuSeparator className='mx-1.5' />
            <DropdownMenuItem>Refer a Host</DropdownMenuItem>
            <DropdownMenuItem>Find a co-host</DropdownMenuItem>
            <DropdownMenuItem>Giftcards</DropdownMenuItem>
            <DropdownMenuSeparator className='mx-1.5' />
            <DropdownMenuItem>Log in or sign up</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
