import {
  MdOutlineDirectionsCarFilled,
  MdPets,
  MdVideogameAsset,
  MdOutlineKitchen,
} from 'react-icons/md';
import { TbTractor } from 'react-icons/tb';
import { IoFastFoodOutline } from 'react-icons/io5';
import { IoMdFitness } from 'react-icons/io';
import {
  BsHourglassSplit,
  BsFillHouseFill,
  BsBuilding,
  BsSmartwatch,
  BsPeopleFill,
} from 'react-icons/bs';
import {
  GiOpenBook,
  GiCarWheel,
  GiLipstick,
  GiTicket,
  GiFactory,
  GiClothes,
  GiHealthCapsule,
  GiPartyPopper,
} from 'react-icons/gi';
import {
  FaBabyCarriage,
  FaHammer,
  FaMicrophoneAlt,
  FaTools,
  FaGuitar,
} from 'react-icons/fa';
import { AiOutlineCamera, AiFillPicture } from 'react-icons/Ai';
import { FiSmartphone } from 'react-icons/fi';
import { RiComputerLine, RiBearSmileLine } from 'react-icons/ri';
import { BiCameraMovie, BiCategory } from 'react-icons/bi';

export const getCategoryIcon = (id: string) => {
  if (id === 'MLA5725') return GiCarWheel;
  if (id === 'MLA1512') return TbTractor;
  if (id === 'MLA1403') return IoFastFoodOutline;
  if (id === 'MLA1071') return MdPets;
  if (id === 'MLA1367') return BsHourglassSplit;
  if (id === 'MLA1368') return AiFillPicture;
  if (id === 'MLA1743') return MdOutlineDirectionsCarFilled;
  if (id === 'MLA1384') return FaBabyCarriage;
  if (id === 'MLA1246') return GiLipstick;
  if (id === 'MLA1039') return AiOutlineCamera;
  if (id === 'MLA1051') return FiSmartphone;
  if (id === 'MLA1648') return RiComputerLine;
  if (id === 'MLA1144') return MdVideogameAsset;
  if (id === 'MLA1500') return FaHammer;
  if (id === 'MLA1276') return IoMdFitness;
  if (id === 'MLA5726') return MdOutlineKitchen;
  if (id === 'MLA1000') return FaMicrophoneAlt;
  if (id === 'MLA2547') return GiTicket;
  if (id === 'MLA407134') return FaTools;
  if (id === 'MLA1574') return BsFillHouseFill;
  if (id === 'MLA1499') return GiFactory;
  if (id === 'MLA1459') return BsBuilding;
  if (id === 'MLA1182') return FaGuitar;
  if (id === 'MLA3937') return BsSmartwatch;
  if (id === 'MLA1132') return RiBearSmileLine;
  if (id === 'MLA3025') return GiOpenBook;
  if (id === 'MLA1168') return BiCameraMovie;
  if (id === 'MLA1430') return GiClothes;
  if (id === 'MLA409431') return GiHealthCapsule;
  if (id === 'MLA1540') return BsPeopleFill;
  if (id === 'MLA9304') return GiPartyPopper;

  return BiCategory;
};
