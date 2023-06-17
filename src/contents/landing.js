import timeIcon from "../assets/images/icons/time.png"
import safeIcon from "../assets/images/icons/safe.png"
import locationIcon from "../assets/images/icons/location.png"

import { IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5"

import heroImage from "../assets/images/hero-bg.png"
import manImage from "../assets/images/man.png"

import riderImage from "../assets/images/rider.png"
import driverImage from "../assets/images/driver.png"


import iosDownloadBtn from "../assets/images/app-white.png"
import androidDownloadBtn from "../assets/images/play-white.png"

export const IOS_DOWNLOAD_BTN = iosDownloadBtn
export const ANDROID_DOWNLOAD_BTN = androidDownloadBtn

export const HERO_TITLE = "Elevate your Ride,\n elevate your life"
export const HERO_IMAGE = heroImage
export const HERO_TEXT = "Experience the Future of Urban Mobility with Gee2Rides, your Affordable, Safe, and Sustainable Choice."

export const SECTION_1_TITLE = "Why Choose Us"
export const SECTION_1_TEXT = "GEE2 is changing the way we use our every day app, from leaving your home, and sending items to loved ones, to making payment and providing financial solution."

export const CARD_CONTENTS = [
  {
    icon: timeIcon,
    title: "Fast and Safe",
    text: "Experience lightning-fast and budget-friendly rides. Reach your destination swiftly and affordably with our car riding service"
  },
  {
    icon: safeIcon,
    title: "Unparalleled Safety",
    text: "With our safety measures, including background-checked drivers, real-time tracking, and you can have peace of mind during every ride."
  },
  {
    icon: locationIcon,
    title: "Seamless Convenience",
    text: "Say goodbye to long waits and complicated bookings. Our user-friendly app allows you to book rides with just a few taps."
  },
]

export const SECTION_2_IMAGE = manImage
export const SECTION_2_TITLE = "Drive and earn extra money"
export const SECTION_2_CONTENTS = [
  {
    title: "Drive more, earn more",
    text: "Our 100+ thousand  riders will send you plenty of ride requests. When demand is high, you can earn even more. More so, as a driver you are in control, our company gives you more privileges"
  },
  {
    title: "Own your schedule",
    text: "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle"
  },
  {
    title: "24/7 Support & Resources",
    text: "We foster a thriving community for drivers like you, offering unwavering support and valuable resources."
  },
]

export const DOWNLOAD_SECTION = {
  rider: {
    title: "Book a Ride and ride in minutes",
    image: riderImage,
    text: "Experience the Future of Urban Mobility with G-two ride, your Affordable, Safe, and Sustainable Choice.Book a ride in seconds with Gee2ride and and ride to your destination in minutes.",
    links: {
      ios: "",
      android: "",
    },
    icon: {
      ios: iosDownloadBtn,
      android: androidDownloadBtn
    } 
  },
  driver: {
    image: driverImage,
    title: "Drive and earn the extra Cash",
    text: "Our 100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more  100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
    links: {
      ios: "",
      android: "",
    },
    icon: {
      ios: iosDownloadBtn,
      android: androidDownloadBtn
    } 
  }
}



export const FAQs = [
  {
    question: "How much does it cost to book a ride?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam quis minus nulla eum, explicabo itaque magnam vero odit deserunt quasi? Commodi sed minima iure qui dolor ipsum fuga temporibus."
  },
  {
    question: "How do i become a driver",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam quis minus nulla eum, explicabo itaque magnam vero odit deserunt quasi? Commodi sed minima iure qui dolor ipsum fuga temporibus."
  },
  {
    question: "Does Gee2ride cover deliveries",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam quis minus nulla eum, explicabo itaque magnam vero odit deserunt quasi? Commodi sed minima iure qui dolor ipsum fuga temporibus."
  },
  {
    question: "How much does it cost to book a ride?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam quis minus nulla eum, explicabo itaque magnam vero odit deserunt quasi? Commodi sed minima iure qui dolor ipsum fuga temporibus."
  },
]

export const NAV_LINKS = [
  {
    name: "Drive",
    link: ""
  },
  {
    name: "Ride",
    link: ""
  },
  {
    name: "About us",
    link: ""
  },
  {
    name: "FAQ",
    link: "Faq",
    isInternal: true
  },
  {
    name: "Contact us",
    link: ""
  },
]

export const COMPANY_LINKS = [
  {
    name: "About us",
    link: ""
  },
  {
    name: "Contact us",
    link: ""
  },
  {
    name: "FAQ",
    link: ""
  },
  {
    name: "Terms and Policy",
    link: ""
  },
]

export const PRODUCT_LINKS = [
  {
    name: "Ride",
    link: ""
  },
  {
    name: "Drive",
    link: ""
  },
]


export const SOCIAL_LINKS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/g-two-global-concepts-ltd-854ab8258",
    icon: IoLogoLinkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com/GlobalGtwo75476?t=gIpPnQx-Lhrg1O4JIEjHdA&s=09",
    icon: IoLogoTwitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/gtworides?mibextid=ZbWKwL",
    icon: IoLogoFacebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/invites/contact/?i=1ibgurftyro63&utm_content=of49fbd",
    icon: IoLogoInstagram
  },
]

