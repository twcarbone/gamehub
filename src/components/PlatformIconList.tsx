import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconsMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
