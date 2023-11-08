import React from 'react'
import FlexCard from '../components/FlexCard'
import './Home.css'

import PhpIcon from '@mui/icons-material/Php';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StraightenIcon from '@mui/icons-material/Straighten';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import PercentIcon from '@mui/icons-material/Percent';
import TitleIcon from '@mui/icons-material/Title';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const items = [
  {
    icon: <PhpIcon />,
    cardTitle: "The TLD",
    cardDescription: "Does the domain extension math the language of the domain name?"
  }, 
  {
    icon: <StraightenIcon />,
    cardTitle: "Domain Length",
    cardDescription: "Is the domain short enough to remember?"
  }, 
  {
    icon: <LanguageIcon />,
    cardTitle: "Language",
    cardDescription: "How complex is the actuall domain name?"
  }, 
  {
    icon: <WorkspacePremiumIcon />,
    cardTitle: "International recognition",
    cardDescription: "Can the domain name be used on an international scale?"
  }, 
  {
    icon: <SearchIcon />,
    cardTitle: "Search Engine",
    cardDescription: "Does the domain follow search engine guidelines?"
  }, 
  {
    icon: <CampaignIcon />,
    cardTitle: "Advertising Potential",
    cardDescription: "Could the domain be used for advertising campaigns?"
  }, 
  {
    icon: <PercentIcon />,
    cardTitle: "Sales Opportunities",
    cardDescription: "Can the domain name be used on and international scale?"
  }, 
  {
    icon: <TitleIcon />,
    cardTitle: "Typo susceptibility",
    cardDescription: "How high is the risk of mistyping the domain name?"
  }, 
  {
    icon: <LightbulbIcon />,
    cardTitle: "Business potential",
    cardDescription: "Can the domain be used as your company address?"
  }
]

const Home = () => {
  return (
    <div className='Home'>
        {items.map((item) => (
          <FlexCard 
            key={Math.floor(Math.random() * 99)}
            icon={item.icon} 
            cardTitle={item.cardTitle} 
            cardDescription={item.cardDescription} />
        ))}
    </div>
  )
}

export default Home