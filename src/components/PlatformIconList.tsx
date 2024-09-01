import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaApple,
} from "react-icons/fa"; // fa: Font Awesome
import { MdPhoneIphone } from "react-icons/md"; // md: MAterial design
import { SiNintendo } from "react-icons/si"; // si: simple icons
import { BsGlobe } from "react-icons/bs"; // bs: Bootstrap
import { IconType } from "react-icons";
import { Platform } from "../react-query/services/platformService";

type Props = {
  platforms: Platform[];
};
const PlatformIconList = ({ platforms }: Props) => {
  // Now we need to map each platform slug (lowercase, no space name which is not supposed to change in backend)
  //to the particular icon we imported. For that we can either use if else statements while displaying which is very ugly
  //or create a map
  const iconMap: { [key: string]: IconType } = {
    // slug : Icon
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {/* i numeric value = 4px */}
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
